import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import sharp from 'sharp'

const root = process.cwd()
await fs.mkdir(path.join(root, 'public/icons'), { recursive: true })
await fs.mkdir(path.join(root, 'public/licenses'), { recursive: true })
const svg = await fs.readFile(path.join(root, 'public/brand-icon.svg'))
for (const size of [192, 512, 180]) {
  await sharp(svg).resize(size, size).png().toFile(path.join(root, `public/icons/${size === 180 ? 'apple-touch-icon' : `icon-${size}`}.png`))
}
await sharp({ create: { width: 512, height: 512, channels: 4, background: '#bc2031' } })
  .composite([{ input: await sharp(svg).resize(360, 360).png().toBuffer(), gravity: 'center' }]).png()
  .toFile(path.join(root, 'public/icons/maskable-512.png'))
const records = []
for (const [name, files] of [
  ['barlow-condensed', ['barlow-condensed-latin-700-normal.woff2', 'barlow-condensed-latin-700-normal.woff']],
  ['dm-sans', ['dm-sans-latin-400-normal.woff2', 'dm-sans-latin-700-normal.woff2', 'dm-sans-latin-400-normal.woff', 'dm-sans-latin-700-normal.woff']],
]) {
  const base = path.join(root, `node_modules/@fontsource/${name}`)
  await fs.copyFile(path.join(base, 'LICENSE'), path.join(root, `public/licenses/${name}-OFL.txt`))
  for (const file of files) {
    const bytes = await fs.readFile(path.join(base, 'files', file))
    records.push({ file, source: `@fontsource/${name}/files/${file}`, license: 'SIL Open Font License 1.1', licenseFile: `licenses/${name}-OFL.txt`, size: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') })
  }
}
for (const file of ['brand-icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/maskable-512.png']) {
  const bytes = await fs.readFile(path.join(root, 'public', file))
  records.push({ file, source: 'Original UNSCROLL artwork', license: 'MIT', licenseFile: 'licenses/UNSCROLL-MIT.txt', size: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') })
}
await fs.copyFile(path.join(root, 'LICENSE'), path.join(root, 'public/licenses/UNSCROLL-MIT.txt'))
await fs.writeFile(path.join(root, 'public/asset-licenses.json'), JSON.stringify({ version: 1, assets: records }, null, 2))
console.log(`Generated four install icons and verified license records for ${records.length} local assets.`)