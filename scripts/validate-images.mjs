import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import sharp from 'sharp';

const names = ['oil', 'lab', 'gears', 'additives', 'service'];
const mosaic = await readFile('components/Mosaic.tsx', 'utf8');
for (const name of names) {
  const path = `public/images/${name}.webp`;
  const bytes = await stat(path);
  const metadata = await sharp(path).metadata();
  await sharp(path).raw().toBuffer();
  assert.equal(metadata.format, 'webp', `${name}: must be a WebP`);
  assert.ok(metadata.width >= 640 && metadata.height >= 640, `${name}: sufficiently detailed source`);
  assert.ok(bytes.size < 1024 * 1024, `${name}: image must be under 1 MB`);
  assert.ok(mosaic.includes(`/images/${name}.webp`), `${name}: referenced by homepage`);
  console.log(`PASS ${name}: ${metadata.width}×${metadata.height}, ${bytes.size} bytes, full decode and reference`);
}
assert.ok(!mosaic.includes('@/lib/img/'), 'No malformed base64 modules');
console.log('All 5 generated homepage images decode and are referenced.');
