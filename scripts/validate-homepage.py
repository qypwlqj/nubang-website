"""Verify homepage sections, detail links, and route-based navigation from HTML."""
import html.parser
import pathlib
import sys
import urllib.request

class Page(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.sections = []
        self.links = []
        self.nav_links = []
        self.nav_depth = 0
        self.h1_count = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'section':
            self.sections.append(attrs.get('aria-labelledby'))
        if tag == 'h1':
            self.h1_count += 1
        if tag == 'nav':
            self.nav_depth += 1
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
            if self.nav_depth:
                self.nav_links.append(attrs.get('href', ''))
    def handle_endtag(self, tag):
        if tag == 'nav':
            self.nav_depth -= 1

source = sys.argv[1] if len(sys.argv) > 1 else '.next/server/app/index.html'
if source.startswith('http'):
    with urllib.request.urlopen(source, timeout=45) as response:
        assert response.status == 200
        content = response.read().decode()
else:
    content = pathlib.Path(source).read_text()
page = Page()
page.feed(content)
expected = ['home-about-heading', 'product-lines-heading', 'home-lab-heading', 'home-services-heading', 'home-contact-heading']
assert page.sections[1:] == expected, page.sections
assert page.h1_count == 1, page.h1_count
for route in ['/about', '/products', '/lab', '/services', '/contact']:
    assert page.links.count(route) >= 2, f'Missing homepage section entry: {route}'
assert page.nav_links == ['/', '/about', '/products', '/lab', '/services', '/contact'], page.nav_links
assert all('#' not in href for href in page.nav_links)
assert not any(link.startswith('tel:') for link in page.links)
print('PASS: five ordered homepage overview sections; five detail-page entries; six route-based nav links; one H1; no phone contacts.')
