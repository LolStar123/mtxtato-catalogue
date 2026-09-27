"""Verify the retired catalogue forwards old links to smoothtato."""
import functools
import http.server
import os
import re
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = "https://lolstar123.github.io/smoothtato-preview/cosmetics/"


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass


server = http.server.ThreadingHTTPServer(
    ("127.0.0.1", 0),
    functools.partial(Quiet, directory=str(ROOT / "examples/portfolio")),
)
threading.Thread(target=server.serve_forever, daemon=True).start()
try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(
            **({"channel": "chrome"} if os.name == "nt" else {})
        )
        page = browser.new_page(viewport={"width": 390, "height": 844})
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        source = os.environ.get(
            "AUDIT_URL", f"http://127.0.0.1:{server.server_port}"
        )
        page.goto(source, wait_until="domcontentloaded")
        page.wait_for_url(re.compile(r"smoothtato-preview/cosmetics/?$"))
        page.wait_for_load_state("networkidle")
        assert page.url == DESTINATION
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
        assert not errors, errors
        print("PASS: legacy catalogue redirects to the combined smoothtato cosmetics tool")
        browser.close()
finally:
    server.shutdown()
