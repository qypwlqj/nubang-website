import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const expectedSha256 = 'ee3cde2763e99af017f34e6d7e4da24e9d0de3844eb8968287e80d33a24a6849';
const expectedCategories = [
  ['清净剂', ['T103', 'T104', 'T105', 'T106', 'T106D', 'T065', 'T107', 'T121', 'T122', 'T123', 'T109B', 'T109C', 'T109D']],
  ['分散剂', ['T146', 'T151', 'T153', 'T154A', 'T154B', 'T154HB', 'T161H']],
  ['ZDDP', ['T202', 'T202A', 'T203', 'T204', 'T204B', 'T205', 'T206', 'T207', 'T208', 'T209', 'T210', 'T213', 'T214', 'T215']],
  ['磷酸酯铵盐', ['3307', '3350', '3355', '3359']],
  ['高温抗氧剂', ['1035', '1135', '3323', '5057', '5067']],
  ['金属减活剂', ['5570', '5571']],
  ['防锈剂', ['7706']],
  ['润滑脂增稠剂', ['1061', '1062', '1063']],
  ['其他产品', ['PIBSA-1000', 'PIBSA-1300']],
];
const expectedNotes = {
  '3307': '注：铜片腐蚀实验：以1.0wt%加剂量调入150SN基础油中进行评价',
  '3359': '*铜腐蚀以3%加剂量调入500N基础油中进行评价',
  '5570': '*备注：台塑150N基础油中加入0.03%添加剂，试验温度150℃，时间1小时。',
  '5571': '*备注：台塑150N基础油中加入0.03%添加剂，试验温度150℃，时间1小时。',
};

const failures = [];
let checks = 0;
function check(label, validate) {
  checks += 1;
  try {
    validate();
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
  }
}

const bytes = readFileSync(new URL('../data/products.json', import.meta.url));
const sha256 = createHash('sha256').update(bytes).digest('hex');
let catalog;
try {
  catalog = JSON.parse(bytes.toString('utf8'));
} catch (error) {
  console.error(`产品目录不是有效 JSON: ${error.message}`);
  process.exit(1);
}

check('已审核产品数据的 SHA-256', () => assert.equal(sha256, expectedSha256));
check('公开数据结构与来源元数据', () => {
  assert.equal(catalog.schemaVersion, 1);
  assert.deepEqual(Object.keys(catalog).sort(), ['categories', 'schemaVersion', 'source']);
  assert.deepEqual(Object.keys(catalog.source).sort(), ['fetchedAsOf', 'pageLastEditedAt', 'title', 'url']);
  assert.equal(catalog.source.url, 'https://app.notion.com/p/3faa14c8db32819794ebd3c463aa1509');
  assert.equal(catalog.source.title, '单剂产品资料全集｜9个品类・51款产品');
  for (const key of ['fetchedAsOf', 'pageLastEditedAt']) {
    assert.equal(typeof catalog.source[key], 'string');
    assert.ok(Number.isFinite(Date.parse(catalog.source[key])), `来源 ${key} 必须是有效时间`);
  }
});
check('9 个类别及各类别的完整型号清单', () => {
  assert.deepEqual(catalog.categories.map(({ name, products }) => [name, products.map(({ model }) => model)]), expectedCategories);
});

const products = Array.isArray(catalog.categories)
  ? catalog.categories.flatMap((category) => Array.isArray(category.products) ? category.products : [])
  : [];
check('51 款产品且型号唯一', () => {
  assert.equal(products.length, 51);
  assert.equal(new Set(products.map(({ model }) => model)).size, 51);
});
check('型号编码规则', () => {
  catalog.categories.forEach(({ products: entries }, index) => {
    const rule = index < 3 ? /^T\d{3}[A-Z]*$/ : index < 8 ? /^\d{4}$/ : /^PIBSA-(1000|1300)$/;
    for (const { model } of entries) assert.match(model, rule);
  });
});
check('产品外显字段完整且不含内部字段', () => {
  const fields = ['introduction', 'model', 'name', 'storagePackaging', 'technicalNotes', 'technicalTables', 'title'];
  for (const product of products) {
    assert.deepEqual(Object.keys(product).sort(), fields, product.model);
    for (const field of fields.filter((field) => field !== 'technicalTables')) {
      assert.equal(typeof product[field], 'string', `${product.model}.${field}`);
      if (field !== 'technicalNotes') assert.ok(product[field].trim(), `${product.model}.${field} 不可为空`);
    }
  }
});
check('51 张技术表及 400 行完整指标', () => {
  let rows = 0;
  for (const product of products) {
    assert.equal(product.technicalTables.length, 1, product.model);
    const table = product.technicalTables[0];
    assert.deepEqual(Object.keys(table).sort(), ['headers', 'rows'], product.model);
    const isPibsa = product.model.startsWith('PIBSA-');
    assert.equal(table.headers.length, isPibsa ? 4 : 3, product.model);
    if (isPibsa) assert.deepEqual(table.headers, ['项目', '指标', '典型值', '检测方法']);
    for (const row of [table.headers, ...table.rows]) {
      assert.equal(row.length, table.headers.length, product.model);
      for (const cell of row) assert.ok(typeof cell === 'string' && cell.trim(), `${product.model} 的技术表单元格不可为空`);
    }
    rows += table.rows.length;
  }
  assert.equal(rows, 400);
});
check('4 项技术附注原文完整', () => {
  const notes = Object.fromEntries(products.filter(({ technicalNotes }) => technicalNotes).map(({ model, technicalNotes }) => [model, technicalNotes]));
  assert.deepEqual(notes, expectedNotes);
});
check('禁止内部编辑说明、附件和原厂自称', () => {
  const publicText = JSON.stringify(catalog.categories);
  for (const pattern of [
    /sourceReference|notion-file-block:\/\/|<file\b|<table_of_contents/,
    /修订版|历史版本|历史附件|来源文件|代码规则|整理方式|来源：|原册第|PDF第/,
    /我公司|本公司|我司|本司/,
  ]) assert.doesNotMatch(publicText, pattern);
  for (const { name } of catalog.categories) assert.doesNotMatch(name, /\bES\b|PMA|摩擦改进剂/);
});

if (failures.length) {
  console.error(`产品目录校验失败（${failures.length}/${checks} 项）:\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`产品目录校验通过：${checks} 项检查，9 类、51 款、400 行技术指标、4 项附注；PIBSA 四列表格完整。`);
  console.log(`SHA-256: ${sha256}`);
}
