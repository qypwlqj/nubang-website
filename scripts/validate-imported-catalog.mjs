import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const entries = JSON.parse(readFileSync(new URL('../data/imported-products.json', import.meta.url), 'utf8')).slice(0, 13);
assert.equal(entries.length, 13);
assert.equal(new Set(entries.map((p) => p.slug)).size, 13);
assert.deepEqual(Object.fromEntries(['additives', 'lubricants', 'raw-materials'].map((group) => [group, entries.filter((p) => p.group === group).length])), { additives: 3, lubricants: 6, 'raw-materials': 4 });
assert.equal(entries.flatMap((p) => p.variants).length, 27);
assert.equal(entries.flatMap((p) => p.technicalTables).length, 17);
assert.equal(entries.flatMap((p) => p.technicalTables.flatMap((t) => t.rows)).length, 91);
for (const product of entries) {
  assert.ok(product.introduction && product.sourceFilename && product.name);
  assert.ok(product.variants.length);
  for (const table of product.technicalTables) {
    assert.ok(table.title);
    for (const row of table.rows) assert.equal(row.length, table.headers.length, `${product.slug}/${table.title}`);
  }
}
const hdp = entries.find((p) => p.slug === 'hdp');
assert.deepEqual(hdp.variants, ['HDP12', 'HDP13', 'HDPA', 'HDPB', 'HDPC', 'HDPD']);
assert.equal(hdp.technicalTables.length, 4);
assert.ok(hdp.reviewNotes.some((n) => n.includes('未注明对应关系')));
assert.ok(entries.find((p) => p.slug === 'csa').reviewNotes.some((n) => n.includes('0.095')));
assert.ok(entries.find((p) => p.slug === 'taky').variants.includes('TAKY 200/200L'));
assert.ok(!entries.some((p) => p.model === '6600' || p.model === 'NB-IIy'));
assert.doesNotMatch(JSON.stringify(entries), /\/Users\/|sourceDirectory|brandCandidate|originalTable|fieldProvenance/);
console.log('新资料校验通过：13产品系列、27型号/牌号、17分组技术表、91指标行；HDP双语型号保留，设备独立排除。');
