import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import ts from 'typescript';
const root = resolve(import.meta.dirname, '..');
function load(path) {
  if (path.endsWith('.json')) return JSON.parse(readFileSync(path, 'utf8'));
  const output = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
  const exports = {};
  const require = (name) => load(resolve(root, name.replace(/^@\//, '') + (extname(name) ? '' : '.ts')));
  new Function('exports', 'require', output)(exports, require);
  return exports;
}
const { products } = load(resolve(root, 'lib/products.ts'));
const { productGroups } = load(resolve(root, 'lib/product-groups.ts'));
assert.equal(productGroups.length, 2);
assert.equal(products.length, 70);
assert.equal(new Set(products.map(p => p.slug)).size, 70);
assert.deepEqual(Object.fromEntries(productGroups.map(g => [g.id, products.filter(p => p.group === g.id).length])), { lubricants: 6, 'raw-materials': 64 });
assert.equal(products.find(p => p.model === 'T202').group, 'raw-materials');
assert.equal(products.find(p => p.model === 'T202').category, 'ZDDP');
assert.equal(products.flatMap(p => p.technicalTables.flatMap(t => t.rows.flat())).length, 1734);
function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) scan(path);
    else if (/\.(tsx?|json)$/.test(path)) assert.doesNotMatch(readFileSync(path, 'utf8'), /tel:|138\s*1333\s*9996|微信同号/);
  }
}
for (const dir of ['app', 'components', 'lib', 'data']) scan(resolve(root, dir));
console.log('PASS: 70 products, 64 raw materials, 6 finished lubricants, 1734 technical cells, additive subcategories retained, no mobile contact surfaces.');

const business = readFileSync(resolve(root, 'components/ProductLines.tsx'), 'utf8');
for (const title of ['原料', '润滑油脂成品', '实验室设备', '定制服务']) assert.ok(business.includes(`title: "${title}"`));
assert.ok(!business.includes('title: "添加剂"'));
for (const file of ['components/HomeSections.tsx', 'app/services/page.tsx']) {
 const content = readFileSync(resolve(root, file), 'utf8');
 assert.ok(content.includes('实验室软件定制'));
 assert.ok(!content.includes('实验室设备定制'));
}
console.log('PASS: four revised homepage business lines; software customization copy on homepage/services.');
