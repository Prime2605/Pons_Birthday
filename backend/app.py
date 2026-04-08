from flask import Flask, Response, request, jsonify, stream_with_context
from flask_cors import CORS
import requests, json, os

app = Flask(__name__)
CORS(app)

REPLIES_FILE = os.path.join(os.path.dirname(__file__), 'replies.json')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
}


# ─── GOOGLE DRIVE PHOTO PROXY ───────────────────────────────────────────────
@app.route('/api/photo/<file_id>')
def proxy_photo(file_id):
    """Proxy Google Drive files so CORS is not an issue."""
    urls = [
        f'https://lh3.googleusercontent.com/d/{file_id}',
        f'https://drive.google.com/uc?export=view&id={file_id}',
        f'https://drive.google.com/uc?export=download&id={file_id}',
    ]
    session = requests.Session()
    session.headers.update(HEADERS)

    for url in urls:
        try:
            r = session.get(url, stream=True, allow_redirects=True, timeout=20)
            ct = r.headers.get('Content-Type', '')
            # Reject HTML pages (virus-scan warnings, login pages)
            if r.status_code == 200 and 'text/html' not in ct:
                return Response(
                    stream_with_context(r.iter_content(chunk_size=8192)),
                    content_type=ct,
                    headers={'Cache-Control': 'public, max-age=3600'},
                )
        except Exception as e:
            print(f'[proxy] {url} failed: {e}')
            continue

    # Last resort: redirect client directly to Drive preview
    return jsonify({'error': 'Could not proxy file'}), 404


# ─── DRIVE PREVIEWABLE EMBED URL ────────────────────────────────────────────
@app.route('/api/embed-url/<file_id>')
def embed_url(file_id):
    return jsonify({'url': f'https://drive.google.com/file/d/{file_id}/preview'})


# ─── REPLIES STORAGE ────────────────────────────────────────────────────────
def load_replies():
    if os.path.exists(REPLIES_FILE):
        with open(REPLIES_FILE) as f:
            return json.load(f)
    return []


def save_replies(replies):
    with open(REPLIES_FILE, 'w') as f:
        json.dump(replies, f, indent=2, ensure_ascii=False)


@app.route('/api/replies', methods=['GET'])
def get_replies():
    return jsonify(load_replies())


@app.route('/api/replies', methods=['POST'])
def add_reply():
    data = request.get_json()
    text = (data or {}).get('text', '').strip()
    if not text:
        return jsonify({'error': 'empty reply'}), 400
    replies = load_replies()
    from datetime import datetime
    entry = {
        'text': text,
        'date': datetime.now().strftime('%B %d, %Y  %I:%M %p'),
    }
    replies.append(entry)
    save_replies(replies)
    return jsonify(entry), 201


if __name__ == '__main__':
    print('🌹 Birthday backend running at http://localhost:5000')
    app.run(debug=True, port=5000)
