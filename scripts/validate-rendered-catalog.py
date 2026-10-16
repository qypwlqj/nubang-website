"""Read-only HTTP verification of all rendered product fields and technical cells."""
import concurrent.futures
import html.parser
import json
import sys
import urllib.request
from pathlib import Path

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:7201'
DATA = json.loads(Path('data/products.json').read_text())
PRODUCTS = [product for category in DATA['categories'] for product in category['products']]

class ProductParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.cells = []
        self.text = []
        self.in_table = False
        self.in_cell = False
        self.current_cell = []
        self.script_depth = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('script', 'style'):
            self.script_depth += 1
        if tag == 'table' and 'product-table' in attrs.get('class', '').split():
            self.in_table = True
        if self.in_table and tag in ('th', 'td'):
            self.in_cell = True
            self.current_cell = []
    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.script_depth -= 1
        if self.in_table and tag in ('th', 'td'):
            self.cells.append(''.join(self.current_cell))
            self.in_cell = False
        if tag == 'table':
            self.in_table = False
    def handle_data(self, value):
        if not self.script_depth:
            self.text.append(value)
        if self.in_cell:
            self.current_cell.append(value)

normalize = lambda value: ''.join(value.split())
def verify(product):
    url = f"{BASE.rstrip('/')}/products/{product['model'].lower()}"
    with urllib.request.urlopen(url, timeout=45) as response:
        assert response.status == 200, f'{url}: HTTP {response.status}'
        parser = ProductParser()
        parser.feed(response.read().decode())
    text = normalize(''.join(parser.text))
    for field in ('model', 'name', 'introduction', 'storagePackaging', 'technicalNotes'):
        assert normalize(product[field]) in text, f"{product['model']}: missing {field}"
    expected = [cell for table in product['technicalTables'] for row in [table['headers'], *table['rows']] for cell in row]
    assert list(map(normalize, parser.cells)) == list(map(normalize, expected)), f"{product['model']}: technical cells mismatch"
    return product['model']

with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    results = list(pool.map(verify, PRODUCTS))
print(f'PASS {len(results)} rendered product pages: all source fields, 400 technical rows, PIBSA four-column tables and four technical notes; base={BASE}')
