// @vitest-environment node
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { lessonById, lessons, originalLessonMetadata } from '../src/data'
import { completeLesson, createInitialState, saveReaderDraft } from '../src/lib/learning'
import { lessonSchema, stateSchema } from '../src/lib/schema'
import { parseBackup, serializeBackup } from '../src/lib/storage'
import { guideById, guideRevisionById, guides, VISUAL_REVISION } from '../src/teaching'
import { lessonGuideSchema, teachingVisualSchema } from '../src/teaching/schema'
import type { TeachingVisual } from '../src/teaching/types'
import type { AppState, ReaderDraft } from '../src/types'
import { renderTeachingVisual } from '../scripts/render-teaching-visual'

// Structural contracts, not certification of teaching quality, visual relevance,
// factual accuracy, or measured glyph bounds. Full visual review is separate.
const DAY = '2026-10-25'
const OLD_DAY = '2026-10-24'
const NOW = '2026-10-25T12:00:00.000Z'
const OLD_TIME = '2026-10-24T12:00:00.000Z'
const TARGET = 'cinema-027'
const OTHER = 'design-001'
const COMPLETED = 'money-001'
const ORIGIN = 'https://unscroll.example.invalid'

const assetSchema = z.object({
  src: z.string().regex(/^\/lesson-visuals\/[a-z0-9-]+\.svg$/),
  width: z.number().int().positive(), height: z.number().int().positive(),
  sha256: z.string().regex(/^[a-f0-9]{64}$/), bytes: z.number().int().positive(),
  title: z.string().trim().min(1).optional(), alt: z.string().trim().min(1).optional(),
  caption: z.string().trim().min(1).optional(),
}).strict()
const assetMapSchema = z.record(z.string().regex(/^[a-z]+-\d{3}$/), z.array(assetSchema).min(1).max(3))
type VisualAsset = z.infer<typeof assetSchema>
const assets = assetMapSchema.parse(JSON.parse(readFileSync(new URL('../src/teaching/visual-assets.json', import.meta.url), 'utf8')))

const formatNames: Record<TeachingVisual['type'], string> = {
  comparison: 'Comparison', flow: 'Flow', timeline: 'Timeline', bars: 'Bar plot',
  spatial: 'Spatial diagram', layers: 'Layers', swatches: 'Color swatches',
  matrix: 'Matrix', dialogue: 'Dialogue',
}
const formats = Object.keys(formatNames) as TeachingVisual['type'][]
const normalize = (text: string) => text.trim().replace(/\s+/gu, ' ').toLowerCase()
const numberText = (value: number) => Object.is(value, -0) ? '-0' : String(value)
const bytesByPath = new Map<string, Buffer>()

function assetBytes(asset: VisualAsset): Buffer {
  // Validate before resolving any path read from generated metadata.
  assetSchema.parse(asset)
  const cached = bytesByPath.get(asset.src)
  if (cached) return cached
  const bytes = readFileSync(new URL(`../public${asset.src}`, import.meta.url))
  bytesByPath.set(asset.src, bytes)
  return bytes
}

function decodeXml(text: string): string {
  const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }
  return text.replace(/&(amp|lt|gt|quot|apos);/g, (_, name: string) => entities[name])
}

function attributes(tag: string): Record<string, string> {
  return Object.fromEntries(Array.from(tag.matchAll(/\s([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g),
    (match) => [match[1], decodeXml(match[2] ?? match[3])]))
}

function elementText(svg: string, name: 'title' | 'desc'): string {
  const match = svg.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`))
  expect(match, `SVG needs a ${name}`).not.toBeNull()
  return decodeXml(match![1]).trim()
}

function inspectSvg(svg: string, label: string) {
  // Basic checks on our generated XML, not a general-purpose XML parser or a
  // raster/glyph audit. Nested SVG viewports and local filters are legitimate.
  const root = svg.match(/^\s*<svg\b[^>]*>/)
  expect(root, label).not.toBeNull()
  expect(svg.trimEnd(), label).toMatch(/<\/svg>$/)
  expect(svg, label).not.toMatch(/<!DOCTYPE|<!ENTITY|<\?xml-stylesheet/i)
  const rootAttributes = attributes(root![0])
  expect(rootAttributes.xmlns, label).toBe('http://www.w3.org/2000/svg')
  const width = Number(rootAttributes.width)
  const height = Number(rootAttributes.height)
  const viewBox = rootAttributes.viewBox?.trim().split(/[\s,]+/).map(Number)
  expect(Number.isFinite(width) && width > 0, label).toBe(true)
  expect(Number.isFinite(height) && height > 0, label).toBe(true)
  expect(viewBox, label).toEqual([0, 0, width, height])

  const geometry = /^(?:x|y|x1|x2|y1|y2|cx|cy|r|rx|ry|width|height|viewBox|d|points|transform|refX|refY|markerWidth|markerHeight|stroke-width|font-size|textLength)$/
  const issues: { element: string; attribute?: string; value?: string; reason: string }[] = []
  for (const match of svg.matchAll(/<([A-Za-z][\w:.-]*)\b[^<>]*>/g)) {
    const element = match[1]
    if (/^(?:script|foreignObject|iframe|object|embed|image|feImage|audio|video|animate|animateMotion|animateTransform|set)$/i.test(element)) {
      issues.push({ element, reason: 'Executable or embedded content' })
    }
    for (const [name, value] of Object.entries(attributes(match[0]))) {
      const issue = (reason: string) => issues.push({ element, attribute: name, value, reason })
      if (/^on/i.test(name)) issue('Event handler')
      if (/^(?:href|xlink:href|src)$/i.test(name) && !/^#[\w.-]+$/.test(value)) issue('Nonlocal reference')
      if (/^(?:style|fill|stroke|filter|mask|clip-path|cursor)$/i.test(name)) {
        if (/javascript\s*:|expression\s*\(|@import/i.test(value)) issue('Executable style')
        for (const url of value.matchAll(/url\(([^)]*)\)/gi)) if (!/^['"]?#[\w.-]+['"]?$/.test(url[1])) issue('External paint or style resource')
      }
      if (geometry.test(name)) {
        if (/NaN|Infinity/i.test(value)) issue('Non-finite geometry')
        for (const numeric of value.matchAll(/[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/gi)) {
          if (!Number.isFinite(Number(numeric[0]))) issue('Overflowed numeric geometry')
        }
      }
    }
  }
  expect(issues, label).toEqual([])
  return { width, height, rootAttributes }
}

function expectTextBounds(rendered: ReturnType<typeof renderTeachingVisual>, label: string) {
  expect(rendered.textBounds.length, label).toBeGreaterThan(0)
  for (const bound of rendered.textBounds) {
    expect([bound.x, bound.y, bound.width, bound.height].every(Number.isFinite), `${label}: ${bound.text}`).toBe(true)
    expect(bound.x, label).toBeGreaterThanOrEqual(0)
    expect(bound.y, label).toBeGreaterThanOrEqual(0)
    expect(bound.width, label).toBeGreaterThan(0)
    expect(bound.height, label).toBeGreaterThan(0)
    expect(bound.x + bound.width, label).toBeLessThanOrEqual(rendered.width + 0.01)
    expect(bound.y + bound.height, label).toBeLessThanOrEqual(rendered.height + 0.01)
  }
}

function visualFixture(type: TeachingVisual['type'] = 'bars'): TeachingVisual {
  return {
    type, title: 'Supplied fixture title', alt: 'Two supplied items, not measured results.',
    caption: 'Synthetic values for a renderer contract.', unit: 'fixture units',
    items: [
      { label: type === 'matrix' ? 'Reader / Public' : 'First item', detail: 'First supplied detail.', value: 0, x: 20, y: 25, shape: 'paper', color: '#f7f4ed' },
      { label: type === 'matrix' ? 'Owner / Private' : 'Second item', detail: 'Second supplied detail.', value: 12.5, x: 80, y: 75, shape: 'camera', color: '#bc2031' },
    ],
    arrows: [{ from: 0, to: 1, label: 'Supplied connection' }],
  }
}

function duplicateGroups(entries: { id: string; text: string }[]) {
  const groups = new Map<string, string[]>()
  for (const { id, text } of entries) groups.set(normalize(text), [...(groups.get(normalize(text)) ?? []), id])
  return [...groups].filter(([, ids]) => ids.length > 1).map(([text, ids]) => ({ text, ids }))
}

function history(): AppState {
  return {
    ...createInitialState(OLD_DAY), xp: 20,
    completed: { [COMPLETED]: { date: OLD_DAY, correct: true } },
    reviews: { [COMPLETED]: { due: DAY, interval: 1, repetitions: 0 } }, activity: { [OLD_DAY]: 1 },
    notes: { [TARGET]: 'Keep the handle observation.\nDo not rename this note.', [OTHER]: 'Keep the other lesson note.' },
    saved: [TARGET, OTHER], collections: [{ id: 'lighting-notes', name: 'Lighting notes', lessonIds: [TARGET] }],
    daily: { date: DAY, ids: [TARGET, OTHER] }, delivered: [TARGET, OTHER, COMPLETED],
  }
}

describe('guided teaching structural and compatibility contracts', () => {
  it('joins exactly 544 validated guides to the unchanged legacy IDs and validates all 604 visual specifications', () => {
    expect(guides).toHaveLength(544)
    const ids = originalLessonMetadata.map((lesson) => lesson.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(lessons.map((lesson) => lesson.id)).toEqual(ids)
    expect(new Set(guides.map((guide) => guide.id))).toEqual(new Set(ids))
    expect(guideById.size).toBe(guides.length)
    expect(lessonById.size).toBe(lessons.length)
    expect(guides.flatMap((guide) => guide.visuals)).toHaveLength(604)
    for (const guide of guides) {
      expect(lessonGuideSchema.parse(guide), guide.id).toEqual(guide)
      const lesson = lessonById.get(guide.id)!
      expect(lessonSchema.parse(lesson), guide.id).toEqual(lesson)
      expect(lesson.guide, guide.id).toBe(guide)
      expect(lesson.revision, guide.id).toBe(guideRevisionById.get(guide.id))
      expect(lesson.revision, guide.id).toBe('guided-v2')
      expect(lesson.kind, guide.id).toBeUndefined()
      for (const visual of guide.visuals) expect(teachingVisualSchema.parse(visual), guide.id).toEqual(visual)
    }
  })

  it('projects the guide fields while preserving metadata and exact optional source inheritance', () => {
    const inherited: string[] = []
    const overridden: string[] = []
    for (const original of originalLessonMetadata) {
      const lesson = lessonById.get(original.id)!
      const guide = guideById.get(original.id)!
      expect(lesson, original.id).toMatchObject({ id: original.id, category: original.category, topic: original.topic, evidence: original.evidence })
      expect(lesson.title, original.id).toBe(guide.title ?? original.title)
      expect(lesson.hook, original.id).toBe(guide.outcome)
      expect(lesson.body, original.id).toEqual(guide.sections.flatMap((section) => section.paragraphs))
      expect(lesson.action, original.id).toBe(guide.practice.steps.join(' '))
      expect(lesson.takeaway, original.id).toBe(guide.takeaway)
      expect(lesson.quiz, original.id).toBe(guide.quiz)
      expect(lesson.sources, original.id).toBe(guide.sources ?? original.sources)
      expect(original.guide, original.id).toBeUndefined()
      expect(original.revision, original.id).toBeUndefined()
      if (guide.sources === undefined) inherited.push(original.id)
      else overridden.push(original.id)
    }
    expect(inherited.length, 'Exercise the omitted-sources branch').toBeGreaterThan(0)
    expect(overridden.length, 'Exercise authored source replacements').toBeGreaterThan(0)
    const withoutSources = structuredClone(guideById.get('design-023')!)
    delete withoutSources.sources
    expect(lessonGuideSchema.parse(withoutSources)).not.toHaveProperty('sources')
  })

  it('keeps every guide inside the guided-v2 body band with four distinct nonblank section headings', () => {
    for (const guide of guides) {
      const body = guide.sections.flatMap((section) => section.paragraphs).join(' ').trim()
      const words = body.split(/\s+/u).length
      expect(words, guide.id).toBeGreaterThanOrEqual(420)
      expect(words, guide.id).toBeLessThanOrEqual(900)
      expect(guide.sections, guide.id).toHaveLength(4)
      const headings = guide.sections.map((section) => normalize(section.title))
      expect(headings.every(Boolean), guide.id).toBe(true)
      expect(new Set(headings).size, guide.id).toBe(headings.length)
    }
  })

  it('collects duplicate scenes and paragraphs and checks format coverage without freezing incidental totals', () => {
    const scenes = guides.map((guide) => ({ id: guide.id, text: guide.scene }))
    const paragraphs = guides.flatMap((guide) => guide.sections.flatMap((section) =>
      section.paragraphs.map((text, index) => ({ id: `${guide.id}/${section.title}/${index + 1}`, text }))))
    expect(duplicateGroups(scenes), 'Repeated settings need inspection, not a diversity score').toEqual([])
    expect(duplicateGroups(paragraphs), 'Report duplicate prose with its owning IDs').toEqual([])
    expect(new Set(guides.flatMap((guide) => guide.visuals.map((visual) => visual.type)))).toEqual(new Set(formats))
  })

  it('matches the two asset indexes and reads every local SVG with matching digest, byte size and finite root bounds', () => {
    const manifest = z.object({
      revision: z.string(), lessons: z.number().int(), visualCount: z.number().int(), assets: assetMapSchema,
    }).strict().parse(JSON.parse(readFileSync(new URL('../public/lesson-visuals/manifest.json', import.meta.url), 'utf8')))
    expect(manifest).toEqual({ revision: VISUAL_REVISION, lessons: guides.length, visualCount: 604, assets })
    expect(new Set(Object.keys(assets))).toEqual(new Set(guides.map((guide) => guide.id)))
    const paths: string[] = []
    for (const guide of guides) {
      expect(assets[guide.id], guide.id).toHaveLength(guide.visuals.length)
      for (const [index, asset] of assets[guide.id].entries()) {
        expect(asset.src).toBe(`/lesson-visuals/${VISUAL_REVISION}-${guide.id}-${index + 1}.svg`)
        const url = new URL(asset.src, ORIGIN)
        expect(url.origin).toBe(ORIGIN)
        expect(url.pathname).toBe(asset.src)
        expect([url.username, url.password, url.search, url.hash]).toEqual(['', '', '', ''])
        paths.push(asset.src)
        const bytes = assetBytes(asset)
        expect(bytes.byteLength, asset.src).toBe(asset.bytes)
        expect(createHash('sha256').update(bytes).digest('hex'), asset.src).toBe(asset.sha256)
        const bounds = inspectSvg(bytes.toString('utf8'), asset.src)
        expect({ width: bounds.width, height: bounds.height }, asset.src).toEqual({ width: asset.width, height: asset.height })
        expect(elementText(bytes.toString('utf8'), 'title').length, asset.src).toBeGreaterThan(0)
        expect(elementText(bytes.toString('utf8'), 'desc').length, asset.src).toBeGreaterThan(0)
      }
    }
    expect(paths).toHaveLength(604)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('uses the shipped illustration descriptions, including the unchanged approved bounce-light drawing', () => {
    const describedOverrides: string[] = []
    for (const guide of guides) {
      for (const [index, visual] of guide.visuals.entries()) {
        const asset = assets[guide.id][index]
        const svg = assetBytes(asset).toString('utf8')
        expect(elementText(svg, 'title'), asset.src).toBe(asset.title ?? visual.title)
        if (asset.alt !== undefined || asset.title !== undefined || asset.caption !== undefined) {
          describedOverrides.push(asset.src)
          expect(asset.title, asset.src).toBeDefined()
          expect(asset.alt, asset.src).toBe(elementText(svg, 'desc'))
          expect(asset.caption, asset.src).toBe(visual.caption)
        } else {
          expect(elementText(svg, 'desc'), asset.src).toContain(visual.alt)
        }
      }
    }
    expect(describedOverrides).toContain(assets[TARGET][0].src)
    expect(assetBytes(assets[TARGET][0]).toString('utf8')).toBe(readFileSync(new URL('../docs/lesson-sample-assets/bounce-light.svg', import.meta.url), 'utf8').replace(/\r\n?/g, '\n'))
    expect(assets[TARGET][0].alt).not.toBe(guideById.get(TARGET)!.visuals[0].alt)
  })

  it('rejects invalid values, diagram connectors, coordinates, colors and non-HTTPS sources', () => {
    const bars = visualFixture()
    const spatial = visualFixture('spatial')
    const invalid: unknown[] = [
      { ...bars, type: 'invented-chart' }, { ...bars, items: bars.items.slice(0, 1) },
      { ...bars, unit: undefined }, { ...bars, items: bars.items.map((item) => ({ ...item, value: undefined })) },
      ...[NaN, Infinity, -Infinity, -1].map((value) => ({ ...bars, items: [{ ...bars.items[0], value }, bars.items[1]] })),
      ...[{ from: 0, to: 0 }, { from: 0, to: 2 }, { from: -1, to: 1 }, { from: 0.5, to: 1 }]
        .map((arrow) => ({ ...bars, arrows: [arrow] })),
      ...[9, 91, NaN, Infinity].map((x) => ({ ...spatial, items: [{ ...spatial.items[0], x }, spatial.items[1]] })),
      { ...spatial, items: spatial.items.map((item) => ({ ...item, shape: undefined })) },
      { ...visualFixture('swatches'), items: bars.items.map((item) => ({ ...item, color: undefined })) },
      { ...bars, items: [{ ...bars.items[0], color: 'url(https://example.invalid/paint)' }, bars.items[1]] },
    ]
    for (const [index, value] of invalid.entries()) expect(teachingVisualSchema.safeParse(value).success, `Invalid visual ${index}`).toBe(false)
    for (const url of ['http://example.invalid/source', 'javascript:alert(1)', 'https://user:secret@example.invalid/source']) {
      const guide = { ...guideById.get(TARGET)!, sources: [{ title: 'Fixture', publisher: 'Fixture', url }] }
      expect(lessonGuideSchema.safeParse(guide).success, url).toBe(false)
    }
  })

  it('preserves supplied bar names, units and exact numbers, including worked fee and spacing examples', () => {
    const examples = [
      { id: 'money-002', title: 'Known annual costs', unit: 'units', items: [
        { label: '0.5% plus 20', value: 10_000 * 0.005 + 20 }, { label: '1.5% plus 20', value: 10_000 * 0.015 + 20 },
      ] },
      { id: 'design-024', title: 'Spacing overrides at 16 px', unit: 'CSS px at 16 px font size', items: [
        { label: 'Line height', value: 24 }, { label: 'After paragraph', value: 32 },
        { label: 'Letter spacing', value: 1.92 }, { label: 'Word spacing', value: 2.56 },
      ] },
    ]
    for (const { id, ...example } of examples) expect(guideById.get(id)!.visuals.find((visual) => visual.type === 'bars'), id).toMatchObject(example)
    const bars = guides.flatMap((guide) => guide.visuals.filter((visual) => visual.type === 'bars').map((visual) => ({ id: guide.id, visual })))
    bars.push({ id: 'synthetic-values', visual: { ...visualFixture(), items: [
      { label: 'Exact zero', detail: 'No invented minimum bar.', value: 0 },
      { label: 'Fraction', detail: 'Do not round this supplied value.', value: 1.925 },
      { label: 'Signed zero', detail: 'Keep the supplied sign in the renderer.', value: -0 },
    ] } })
    for (const { id, visual } of bars) {
      const rendered = renderTeachingVisual(visual, id, 0)
      const visible = rendered.textBounds.map((bound) => bound.text).join(' ')
      expect(elementText(rendered.svg, 'title'), id).toBe(visual.title)
      expect(visible, id).toContain('Bar plot')
      expect(visible, id).toContain(`Unit: ${visual.unit}`)
      expect(Array.from(rendered.svg.matchAll(/\bdata-value="([^"]+)"/g), (match) => match[1]), id)
        .toEqual(visual.items.map((item) => numberText(item.value!)))
      for (const item of visual.items) {
        expect(visible, id).toContain(item.label)
        expect(visible, id).toContain(`${numberText(item.value!)} ${visual.unit}`)
      }
    }
  })

  it('renders every supported format deterministically without mutating input or clipping reported text boxes', () => {
    for (const type of formats) {
      const visual = visualFixture(type)
      teachingVisualSchema.parse(visual)
      const before = structuredClone(visual)
      const rendered = renderTeachingVisual(visual, `fixture-${type}`, 0)
      expect(renderTeachingVisual(structuredClone(visual), `fixture-${type}`, 0), type).toEqual(rendered)
      expect(visual, type).toEqual(before)
      expectTextBounds(rendered, type)
      const inspected = inspectSvg(rendered.svg, type)
      expect(inspected.rootAttributes['data-format']).toBe(type)
      expect([inspected.width, inspected.height]).toEqual([rendered.width, rendered.height])
      const visible = rendered.textBounds.map((bound) => bound.text).join(' ')
      expect(visible, type).toContain(formatNames[type])
      expect(visible, type).toContain(visual.title)
      for (const item of visual.items) {
        expect(visible, type).toContain(item.label)
        expect(visible, type).toContain(item.detail)
      }
    }
  })

  it('escapes XML and hostile identifiers and keeps non-finite data out of SVG geometry', () => {
    const hostile = '<script>"&\'</script>'
    const id = `fixture" onload="alert(1)'><script>`
    const visual: TeachingVisual = {
      ...visualFixture('spatial'), title: hostile, alt: `${hostile}\u0000\ud800`,
      items: [
        { label: hostile, detail: hostile, shape: 'paper', x: NaN, y: Infinity, color: '" onload="alert(1)' },
        { label: 'Other item', detail: hostile, shape: 'camera', x: 70, y: 70 },
      ],
      arrows: [{ from: 0, to: 1, label: hostile }],
    }
    const before = structuredClone(visual)
    const rendered = renderTeachingVisual(visual, id, 0)
    const inspected = inspectSvg(rendered.svg, 'Hostile XML fixture')
    expect(inspected.rootAttributes['data-visual-id']).toBe(id)
    expect(elementText(rendered.svg, 'title')).toBe(hostile)
    expect(rendered.svg).toContain('&lt;script&gt;&quot;&amp;&apos;&lt;/script&gt;')
    expect(rendered.svg).not.toContain('\u0000')
    expect(rendered.svg).not.toContain('\ud800')
    expect(elementText(rendered.svg, 'desc')).toContain(`${hostile}\ufffd\ufffd`)
    expectTextBounds(rendered, 'Hostile XML fixture')
    expect(visual).toEqual(before)
    const ids = Array.from(rendered.svg.matchAll(/\sid="([^"]+)"/g), (match) => match[1])
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every((value) => /^[a-zA-Z][\w-]*$/.test(value))).toBe(true)

    const extreme = renderTeachingVisual({ ...visualFixture(), items: [
      { label: 'Positive', detail: 'Finite extreme.', value: Number.MAX_VALUE },
      { label: 'Negative', detail: 'Finite extreme.', value: -Number.MAX_VALUE },
      { label: 'Missing', detail: 'Not a zero.' },
      { label: 'Not a number', detail: 'Not plottable.', value: NaN },
      { label: 'Unbounded', detail: 'Not plottable.', value: Infinity },
    ] }, 'extreme-values', 0)
    inspectSvg(extreme.svg, 'Extreme numbers')
    expectTextBounds(extreme, 'Extreme numbers')
    expect(Array.from(extreme.svg.matchAll(/\bdata-value="([^"]+)"/g), (match) => match[1]))
      .toEqual([String(Number.MAX_VALUE), String(-Number.MAX_VALUE)])
    const text = extreme.textBounds.map((bound) => bound.text).join(' ')
    expect(text).toContain('Value not supplied')
    expect(text).toContain('Non-finite value: NaN')
    expect(text).toContain('Non-finite value: Infinity')
  })

  it('persists a revision-only draft change purely and does not mistake it for an unchanged save', () => {
    // Reader invalidates incompatible answers in the browser. Neither backup
    // parsing nor saveReaderDraft pretends to perform that UI migration.
    for (const lessonRevision of [undefined, 'condensed-v0']) {
      const oldDraft: ReaderDraft = {
        stage: 'recall', choice: 1, revealed: true, updatedAt: OLD_TIME,
        ...(lessonRevision === undefined ? {} : { lessonRevision }),
      }
      const state: AppState = { ...history(), readerDrafts: {
        [TARGET]: oldDraft, [OTHER]: { stage: 'try', choice: null, revealed: false, updatedAt: OLD_TIME, lessonRevision: lessonById.get(OTHER)!.revision! },
      } }
      const before = structuredClone(state)
      const nextDraft = { stage: 'recall', choice: 1, revealed: true, lessonRevision: lessonById.get(TARGET)!.revision! } as const
      const next = saveReaderDraft(state, TARGET, nextDraft, NOW)
      expect(next).not.toBe(state)
      expect(next).toEqual({ ...before, readerDrafts: { ...before.readerDrafts, [TARGET]: { ...nextDraft, updatedAt: NOW } } })
      expect(stateSchema.parse(next)).toEqual(next)
      expect(saveReaderDraft(next, TARGET, nextDraft, '2026-10-26T12:00:00.000Z')).toBe(next)
      expect(parseBackup(serializeBackup({ state, discoveries: [] }), new Set(lessonById.keys())).state).toEqual(before)
      expect(state).toEqual(before)
    }
  })

  it('restores a legacy v1 backup by the same IDs and revisits revised completed lessons without changing notes or credit', () => {
    const legacy = originalLessonMetadata.find((lesson) => lesson.id === TARGET)!
    const current = lessonById.get(TARGET)!
    expect(legacy.guide).toBeUndefined()
    expect(current.revision).toBe(guideRevisionById.get(TARGET))
    const state = completeLesson(history(), legacy, false, OLD_DAY)
    const before = structuredClone(state)
    const document = { app: 'UNSCROLL', version: 1, exportedAt: OLD_TIME, state, discoveries: [] }
    const restored = parseBackup(JSON.stringify(document), new Set(lessonById.keys()))
    expect(restored).toEqual({ state: before, discoveries: [] })
    expect(restored.state).not.toHaveProperty('readerDrafts')
    expect(restored.state).not.toHaveProperty('practices')
    expect(completeLesson(restored.state, current, true, DAY)).toBe(restored.state)
    expect(saveReaderDraft(restored.state, TARGET, { stage: 'recall', choice: 0, revealed: true, lessonRevision: current.revision! }, NOW)).toBe(restored.state)
    expect(restored.state.notes[TARGET]).toBe(before.notes[legacy.id])
    expect(restored.state.saved).toContain(current.id)
    expect(restored.state.completed[current.id]).toEqual(before.completed[legacy.id])
    expect(parseBackup(serializeBackup(restored), new Set(lessonById.keys()))).toEqual(restored)
    expect(state).toEqual(before)
  })
})