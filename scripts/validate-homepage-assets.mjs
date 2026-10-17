import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import sharp from 'sharp';

const images = ['business-raw-materials', 'business-lubricants', 'business-lab-equipment', 'business-custom', 'lab-solutions'];
const home = await readFile('.next/server/app/index.html', 'utf8');
const about = await readFile('.next/server/app/about.html', 'utf8');
const lab = await readFile('.next/server/app/lab.html', 'utf8');
for (const name of images) {
  const path = `public/images/${name}.webp`;
  const meta = await sharp(path).metadata();
  await sharp(path).raw().toBuffer();
  assert.ok(meta.width >= 800);
  assert.ok((await stat(path)).size < 300000);
  assert.ok(home.includes(`/images/${name}.webp`));
}
assert.ok(lab.includes('/images/lab-solutions.webp'));
for (const figure of ['2012', '100+', '24h', '10+', '3倍']) {
  assert.ok(home.includes(figure), `Homepage achievement: ${figure}`);
  assert.ok(about.includes(figure), `About achievement: ${figure}`);
}
const logo = await sharp('public/images/company-logo.png').metadata();
assert.equal(logo.width, 1254);
assert.equal(logo.height, 1254);
assert.equal(logo.hasAlpha, true);
assert.ok(home.includes('company-logo.png'));
assert.ok(home.includes('实验室场景为 AI 生成示意'));
assert.ok(home.includes('产品配图为 AI 生成示意'));
console.log('PASS: 5 generated assets, 5 shared achievements, transparent original logo, and AI scene disclosures.');
