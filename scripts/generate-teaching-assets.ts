import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import sharp from 'sharp'
import { guides, TEACHING_REVISION } from '../src/teaching/index.ts'
import { renderTeachingVisual } from './render-teaching-visual.ts'
import { lessonGuideSchema } from '../src/teaching/schema.ts'
import { cameraOverride } from './visual-overrides/camera.ts'
import { lightEditOverride } from './visual-overrides/light-edit.ts'
import { designTypeOverride } from './visual-overrides/design-type.ts'
import { drawingOverride } from './visual-overrides/drawing.ts'
import { designUxOverride } from './visual-overrides/design-ux.ts'

const directory = 'public/lesson-visuals'
await fs.mkdir(directory, { recursive: true })
const assets: Record<string, { src: string; width: number; height: number; sha256: string; bytes: number; title?: string; alt?: string; caption?: string }[]> = {}
const report: { id: string; index: number; type: string; width: number; height: number; textLines: number }[] = []
const overrides: Record<string, string> = {
  'cinema-027': 'docs/lesson-sample-assets/bounce-light.svg',
  'observer-005': 'docs/lesson-sample-assets/observation-check.svg',
}

for (const guide of guides) {
  lessonGuideSchema.parse(guide)
  assets[guide.id] = []
  for (const [index, visual] of guide.visuals.entries()) {
    const rendered = renderTeachingVisual(visual, guide.id, index)
    let svg = rendered.svg
    let width = rendered.width
    let height = rendered.height
    const bespoke = cameraOverride(guide.id, index) ?? lightEditOverride(guide.id, index)
      ?? designTypeOverride(guide.id, index) ?? drawingOverride(guide.id, index) ?? designUxOverride(guide.id, index)
    if (bespoke) { svg = bespoke.svg; width = bespoke.width; height = bespoke.height }
    if (index === 0 && overrides[guide.id]) {
      svg = await fs.readFile(overrides[guide.id], 'utf8')
      const metadata = await sharp(Buffer.from(svg)).metadata()
      width = metadata.width!
      height = metadata.height!
    }
    // Match the repository's LF text contract before computing per-file hashes.
    svg = svg.replace(/\r\n?/g, '\n').replace(/[\t ]+$/gm, '')
    if (/<script|<foreignObject|\son\w+=|(?:href|src)=["']https?:/i.test(svg)) throw new Error(`Unsafe or remote SVG content for ${guide.id}`)
    // Decode every image, not just a handful of examples, before publishing.
    await sharp(Buffer.from(svg)).resize({ width: 72 }).png().toBuffer()
    const filename = `${TEACHING_REVISION}-${guide.id}-${index + 1}.svg`
    await fs.writeFile(path.join(directory, filename), svg)
    const bytes = Buffer.byteLength(svg)
    const sha256 = crypto.createHash('sha256').update(svg).digest('hex')
    const decode = (text: string) => text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    const useImageDescription = bespoke || (index === 0 && overrides[guide.id])
    const title = useImageDescription ? decode(svg.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? visual.title) : undefined
    const alt = useImageDescription ? decode(svg.match(/<desc[^>]*>([\s\S]*?)<\/desc>/)?.[1] ?? visual.alt).trim() : undefined
    assets[guide.id].push({ src: `/lesson-visuals/${filename}`, width, height, sha256, bytes,
      ...(title && alt ? { title, alt, caption: visual.caption } : {}) })
    report.push({ id: guide.id, index, type: visual.type, width, height, textLines: rendered.textBounds.length })
  }
}
const expected = new Set(Object.values(assets).flat().map((asset) => path.basename(asset.src)))
for (const name of await fs.readdir(directory)) {
  if (name.startsWith(`${TEACHING_REVISION}-`) && name.endsWith('.svg') && !expected.has(name)) await fs.unlink(path.join(directory, name))
}
await fs.writeFile('src/teaching/visual-assets.json', JSON.stringify(assets))
await fs.writeFile(`${directory}/manifest.json`, JSON.stringify({ revision: TEACHING_REVISION, lessons: guides.length, visualCount: report.length, assets }, null, 2))
await fs.mkdir('.hallmark/teaching', { recursive: true })
await fs.writeFile('.hallmark/teaching/visual-report.json', JSON.stringify(report, null, 2))
console.log(`Generated and decoded ${report.length} offline explanatory SVGs for ${guides.length} lessons; all text bounds checked.`)

if (process.argv.includes('--review')) {
  const groups = new Map<string, typeof report>()
  for (const item of report) {
    const group = item.id.split('-')[0]
    groups.set(group, [...(groups.get(group) ?? []), item])
  }
  for (const [group, entries] of groups) {
    for (let offset = 0; offset < entries.length; offset += 24) {
      const page = entries.slice(offset, offset + 24)
      const tiles = await Promise.all(page.map(async (entry, i) => {
        const asset = assets[entry.id][entry.index]
        const thumb = await sharp(`public${asset.src}`).resize(230, 360, { fit: 'contain', background: '#e7e1d8' }).png().toBuffer()
        const label = Buffer.from(`<svg width="230" height="36"><rect width="230" height="36" fill="#231f20"/><text x="10" y="25" fill="#f7f4ed" font-family="Arial" font-size="18">${entry.id} / ${entry.index + 1}</text></svg>`)
        return [
          { input: thumb, left: (i % 4) * 246, top: Math.floor(i / 4) * 412 },
          { input: label, left: (i % 4) * 246, top: Math.floor(i / 4) * 412 + 360 },
        ]
      }))
      await sharp({ create: { width: 984, height: Math.ceil(page.length / 4) * 412, channels: 4, background: '#e7e1d8' } })
        .composite(tiles.flat()).png().toFile(`.hallmark/teaching/${group}-${Math.floor(offset / 24) + 1}.png`)
    }
  }
  console.log('Contact sheets written to .hallmark/teaching for visual review.')
}