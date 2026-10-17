import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const imported = JSON.parse(readFileSync(new URL('../data/imported-products.json', import.meta.url), 'utf8'));
const original = JSON.parse(readFileSync(new URL('../data/products.json', import.meta.url), 'utf8'));
assert.equal(imported.length, 19);
assert.equal(createHash('sha256').update(JSON.stringify(imported.slice(0, 13))).digest('hex'), 'a2aae90b3eaacadbf129b0f85049bf7b470a4fd8cce3df98f2abecbbe502a263', 'First 13 imported products must remain unchanged');
const base = original.categories.flatMap(({ name, products }) => products.map((product) => ({ ...product, slug: product.model.toLowerCase(), group: ['润滑脂增稠剂', '其他产品'].includes(name) ? 'raw-materials' : 'additives' })));
const all = [...base, ...imported];
assert.equal(all.length, 70);
assert.equal(new Set(all.map(({ slug }) => slug)).size, 70);
assert.deepEqual(Object.fromEntries(['additives', 'lubricants', 'raw-materials'].map((group) => [group, all.filter((product) => product.group === group).length])), { additives: 49, lubricants: 6, 'raw-materials': 15 });
const batch = imported.slice(13);
assert.deepEqual(batch.map(({ slug }) => slug), ['cpu-c', 'dpu-as', 'dpu-b', 'dpu-c', 'dpu-d', 'preformed-lithium-soap-thickener']);
assert.equal(batch.reduce((sum, product) => sum + product.technicalTables.length, 0), 17);
for (const product of imported) {
  assert.ok(['additives', 'lubricants', 'raw-materials'].includes(product.group));
  for (const table of product.technicalTables) {
    for (const row of table.rows) {
      assert.equal(row.length, table.headers.length, product.slug);
      assert.ok(row.every((cell) => typeof cell === 'string' && (!batch.includes(product) || cell.trim())), product.slug);
    }
  }
}
for (const product of batch) {
  assert.equal(product.group, 'raw-materials');
  assert.equal(product.category, '润滑脂增稠原料');
  assert.equal(product.image, '');
  assert.ok(product.reviewNotes.some((note) => note.includes('成脂数据仅为应用示例')));
  assert.ok(product.technicalTables.filter((table) => table.title === '稠化成脂典型数据').every((table) => table.notes.some((note) => note.includes('不是所售原料本身指标'))));
}
assert.doesNotMatch(JSON.stringify(batch), /易得润|Ezgrea|Easierun|Yiderun|internal\/|second-F\d|source_reference_ids/i);
assert.match(JSON.stringify(batch.find((product) => product.slug === 'dpu-as')), /ASTM 2265（原文，待核实）/);
const lithium = batch.at(-1);
assert.equal(lithium.model, lithium.name);
assert.deepEqual(lithium.variants, []);
assert.ok(lithium.reviewNotes.some((note) => note.includes('500SN') && note.includes('500N')));
assert.ok(lithium.reviewNotes.some((note) => note.includes('具体型号未提供')));
console.log('Imported catalog passed: 70 products; additives 49, finished lubricants 6, raw materials 15; previous 64 preserved; six new products / 17 technical tables; display brand/provenance checks passed.');
