import json
import os
import requests
from http.server import BaseHTTPRequestHandler
from datetime import datetime

# ── JSONBin.io config ───────────────────────────────────────────────────────
# Create a free bin at https://jsonbin.io and set these env vars in Vercel:
#   JSONBIN_BIN_ID   – the bin ID (e.g. "6618f3e4acd3cb34a83e4b2c")
#   JSONBIN_API_KEY  – your JSONBin master/access key
BIN_ID = os.environ.get('JSONBIN_BIN_ID', '')
API_KEY = os.environ.get('JSONBIN_API_KEY', '')
JSONBIN_BASE = 'https://api.jsonbin.io/v3/b'


def _headers():
    return {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
    }


def load_replies():
    if not BIN_ID or not API_KEY:
        return []
    try:
        r = requests.get(f'{JSONBIN_BASE}/{BIN_ID}/latest', headers=_headers(), timeout=10)
        return r.json().get('record', {}).get('replies', [])
    except Exception:
        return []


def save_replies(replies):
    if not BIN_ID or not API_KEY:
        return
    try:
        requests.put(
            f'{JSONBIN_BASE}/{BIN_ID}',
            headers=_headers(),
            json={'replies': replies},
            timeout=10,
        )
    except Exception:
        pass


def _send_json(handler_self, code, data):
    body = json.dumps(data, ensure_ascii=False).encode('utf-8')
    handler_self.send_response(code)
    handler_self.send_header('Content-Type', 'application/json')
    handler_self.send_header('Access-Control-Allow-Origin', '*')
    handler_self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    handler_self.send_header('Access-Control-Allow-Headers', 'Content-Type')
    handler_self.end_headers()
    handler_self.wfile.write(body)


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        _send_json(self, 200, load_replies())

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body)
        except Exception:
            data = {}

        text = (data.get('text') or '').strip()
        if not text:
            _send_json(self, 400, {'error': 'empty reply'})
            return

        replies = load_replies()
        entry = {
            'text': text,
            'date': datetime.now().strftime('%B %d, %Y  %I:%M %p'),
        }
        replies.append(entry)
        save_replies(replies)
        _send_json(self, 201, entry)
