import requests
from http.server import BaseHTTPRequestHandler

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
}


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Extract file_id from path: /api/photo/<file_id>
        parts = self.path.split('/')
        file_id = parts[-1].split('?')[0]

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
                if r.status_code == 200 and 'text/html' not in ct:
                    self.send_response(200)
                    self.send_header('Content-Type', ct)
                    self.send_header('Cache-Control', 'public, max-age=3600')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    for chunk in r.iter_content(chunk_size=8192):
                        self.wfile.write(chunk)
                    return
            except Exception as e:
                print(f'[proxy] {url} failed: {e}')
                continue

        self.send_response(404)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"error": "Could not proxy file"}')
