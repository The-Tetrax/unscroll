import type { TeachingVisual } from '../src/teaching/types.ts'

type Item = TeachingVisual['items'][number]
type Arrow = NonNullable<TeachingVisual['arrows']>[number]
type TextBound = { text: string; x: number; y: number; width: number; height: number }
type Point = { x: number; y: number }
type Rect = Point & { width: number; height: number }
type Weight = 400 | 700
type Align = 'left' | 'center' | 'right'
type Edge = Arrow & { order: number }
type Curve = [Point, Point, Point, Point]
type Route = { edge: Edge; path: string; points: Point[] }
type TextBlock = { lines: string[]; width: number; size: number; weight: Weight; height: number }

const WIDTH = 720
const MARGIN = 32
const CONTENT = WIDTH - MARGIN * 2
const BODY = 22
const LABEL = 26
const INK = '#231f20'
const IVORY = '#f7f4ed'
const RED = '#bc2031'
const GRAY = '#69635f'
const PALE = '#ddd7cc'
const FILLS = [INK, RED, GRAY] as const
const TEXT_PAD = 3

const FORMAT_NAMES: Record<TeachingVisual['type'], string> = {
  comparison: 'Comparison', flow: 'Flow', timeline: 'Timeline', bars: 'Bar plot',
  spatial: 'Spatial diagram', layers: 'Layers', swatches: 'Color swatches',
  matrix: 'Matrix', dialogue: 'Dialogue',
}

// Approximate Arial advances in ems. Padding and textLength make the estimates
// usable offline without a DOM, canvas, installed font, or measurement service.
const ADVANCES: Readonly<Record<string, number>> = {
  ' ': .278, '!': .278, '"': .355, '#': .556, '$': .556, '%': .889, '&': .667,
  "'": .222, '(': .333, ')': .333, '*': .389, '+': .584, ',': .278, '-': .333,
  '.': .278, '/': .278, ':': .278, ';': .278, '<': .584, '=': .584, '>': .584,
  '?': .556, '@': 1.015, '[': .278, '\\': .278, ']': .278, '^': .469, '_': .556,
  '`': .333, '{': .334, '|': .260, '}': .334, '~': .584,
  A: .667, B: .667, C: .722, D: .722, E: .667, F: .611, G: .778, H: .722,
  I: .278, J: .500, K: .667, L: .556, M: .833, N: .722, O: .778, P: .667,
  Q: .778, R: .722, S: .667, T: .611, U: .722, V: .667, W: .944, X: .667,
  Y: .667, Z: .611,
  a: .556, b: .556, c: .500, d: .556, e: .556, f: .278, g: .556, h: .556,
  i: .222, j: .222, k: .500, l: .222, m: .833, n: .556, o: .556, p: .556,
  q: .556, r: .333, s: .500, t: .278, u: .556, v: .500, w: .722, x: .500,
  y: .500, z: .500,
}

function xmlText(value: string): string {
  // Replace characters XML 1.0 cannot represent, including lone surrogates.
  return Array.from(value, (character) => {
    const code = character.codePointAt(0) ?? 0
    return code === 9 || code === 10 || code === 13
      || (code >= 0x20 && code <= 0xd7ff)
      || (code >= 0xe000 && code <= 0xfffd)
      || (code >= 0x10000 && code <= 0x10ffff) ? character : '\ufffd'
  }).join('')
}

function escapeXml(value: string): string {
  return xmlText(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character)
}

function n(value: number): string {
  if (!Number.isFinite(value)) throw new RangeError('Non-finite SVG coordinate')
  return String(Math.round(value * 1000) / 1000)
}

function clamp(value: number, low: number, high: number): number {
  return Math.min(high, Math.max(low, value))
}

function hex(value: string | undefined, fallback: string = IVORY): string {
  const candidate = value?.trim()
  return candidate && /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(candidate)
    ? candidate : fallback
}

function numberText(value: number): string {
  // Do not round values, turn missing data into zero, or discard a signed zero.
  return Object.is(value, -0) ? '-0' : String(value)
}

function valueText(item: Item, unit?: string): string {
  return item.value === undefined ? '' : `${numberText(item.value)}${unit ? ` ${unit}` : ''}`
}

function leading(size: number): number {
  return Math.ceil(size * 1.4)
}

function advance(character: string): number {
  // eslint-disable-next-line no-misleading-character-class -- Intentional Unicode mark and variation-selector matching.
  if (/\p{Mark}|[\u200b-\u200d\ufe00-\ufe0f]/u.test(character)) return 0
  if (/\d/.test(character)) return .556
  if (ADVANCES[character] !== undefined) return ADVANCES[character]
  if (/\s/u.test(character)) return .278
  if ('‘’‚'.includes(character)) return .278
  if ('“”„'.includes(character)) return .5
  const decomposed = character.normalize('NFD')
  if (decomposed !== character && ADVANCES[decomposed[0]] !== undefined) {
    return ADVANCES[decomposed[0]]
  }
  return 1.05
}

function textWidth(text: string, size: number, weight: Weight = 400): number {
  if (!text) return 0
  const units = Array.from(text).reduce((sum, character) => sum + advance(character), 0)
  return Math.ceil(units * size * (weight === 700 ? 1.11 : 1.045) + TEXT_PAD * 2)
}

function graphemes(text: string): string[] {
  // Segmenter keeps accents and joined Unicode characters together at hard wraps.
  return Array.from(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text), (part) => part.segment)
}

function block(text: string, width: number, size = BODY, weight: Weight = 400): TextBlock {
  if (!Number.isFinite(width) || width <= TEXT_PAD * 2) throw new RangeError('Text column is too narrow')
  const paragraphs = xmlText(text).replace(/\r\n?/g, '\n').split('\n')
  const lines: string[] = []
  for (const paragraph of paragraphs) {
    const words = paragraph.trim().split(/\s+/u).filter(Boolean)
    if (!words.length) {
      if (paragraphs.length > 1) lines.push('')
      continue
    }
    let line = ''
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word
      if (textWidth(candidate, size, weight) <= width) {
        line = candidate
        continue
      }
      if (line) lines.push(line)
      line = ''
      if (textWidth(word, size, weight) <= width) {
        line = word
        continue
      }
      for (const cluster of graphemes(word)) {
        if (textWidth(cluster, size, weight) > width) {
          // Extremely long joined sequences still retain every code point.
          for (const character of Array.from(cluster)) {
            if (line && textWidth(line + character, size, weight) > width) {
              lines.push(line)
              line = ''
            }
            line += character
          }
        } else {
          if (line && textWidth(line + cluster, size, weight) > width) {
            lines.push(line)
            line = ''
          }
          line += cluster
        }
      }
    }
    if (line) lines.push(line)
  }
  return { lines, width, size, weight, height: lines.length * leading(size) }
}

class Drawing {
  parts: string[] = []
  definitions: string[] = []
  textBounds: TextBound[] = []
  bottom = 0
  uid: string

  constructor(uid: string) { this.uid = uid }

  add(markup: string): void { this.parts.push(markup) }

  rect(x: number, y: number, width: number, height: number, fill = IVORY, stroke = 'none', radius = 0): void {
    this.add(`<rect x="${n(x)}" y="${n(y)}" width="${n(width)}" height="${n(height)}" rx="${n(radius)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="3"/>`)
    this.bottom = Math.max(this.bottom, y + height + (stroke === 'none' ? 0 : 1.5))
  }

  circle(cx: number, cy: number, radius: number, fill = IVORY, stroke = INK): void {
    this.add(`<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(radius)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="3"/>`)
    this.bottom = Math.max(this.bottom, cy + radius + 1.5)
  }

  path(path: string, stroke = INK, fill = 'none', dash = '', marker = ''): void {
    this.add(`<path d="${escapeXml(path)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${escapeXml(dash)}"` : ''}${marker ? ` marker-end="url(#${escapeXml(marker)})"` : ''}/>`)
  }

  line(a: Point, b: Point, stroke = INK, dash = '', marker = ''): void {
    this.path(`M ${n(a.x)} ${n(a.y)} L ${n(b.x)} ${n(b.y)}`, stroke, 'none', dash, marker)
    this.bottom = Math.max(this.bottom, a.y + 2, b.y + 2)
  }

  paint(text: TextBlock, x: number, y: number, fill = INK, align: Align = 'left'): number {
    text.lines.forEach((line, index) => {
      if (!line) return
      const width = textWidth(line, text.size, text.weight)
      const left = x + (align === 'center' ? (text.width - width) / 2 : align === 'right' ? text.width - width : 0)
      const top = y + index * leading(text.size)
      this.textBounds.push({ text: line, x: left, y: top, width, height: leading(text.size) })
      // The explicit advance constrains fallback fonts too. These remain estimated
      // line boxes, not claims about measured glyph pixels or display calibration.
      this.add(`<text x="${n(left + TEXT_PAD)}" y="${n(top + text.size * 1.04)}" font-size="${n(text.size)}" font-weight="${text.weight}" fill="${escapeXml(fill)}" textLength="${n(width - TEXT_PAD * 2)}" lengthAdjust="spacingAndGlyphs" style="line-height:1.4">${escapeXml(line)}</text>`)
    })
    this.bottom = Math.max(this.bottom, y + text.height)
    return text.height
  }

  text(text: string, x: number, y: number, width: number, size = BODY, weight: Weight = 400, fill = INK, align: Align = 'left'): number {
    return this.paint(block(text, width, size, weight), x, y, fill, align)
  }

  badge(label: string, cx: number, cy: number, fill = INK): Rect {
    const width = Math.max(44, textWidth(label, 24, 700) + 12)
    const box = { x: cx - width / 2, y: cy - 22, width, height: 44 }
    if (width === 44) this.circle(cx, cy, 22, fill, fill)
    else this.rect(box.x, box.y, width, 44, fill, fill, 22)
    this.text(label, box.x + 6, cy - leading(24) / 2, width - 12, 24, 700, IVORY, 'center')
    return box
  }
}

function inflated(rect: Rect, gap: number): Rect {
  return { x: rect.x - gap, y: rect.y - gap, width: rect.width + 2 * gap, height: rect.height + 2 * gap }
}

function overlaps(a: Rect, b: Rect, gap = 0): boolean {
  return a.x < b.x + b.width + gap && a.x + a.width + gap > b.x
    && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y
}

function contains(rect: Rect, point: Point): boolean {
  return point.x >= rect.x && point.x <= rect.x + rect.width
    && point.y >= rect.y && point.y <= rect.y + rect.height
}

function inside(rect: Rect, outer: Rect): boolean {
  return rect.x >= outer.x && rect.y >= outer.y
    && rect.x + rect.width <= outer.x + outer.width
    && rect.y + rect.height <= outer.y + outer.height
}

function mix(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }
}

function distance(a: Point, b: Point): number { return Math.hypot(b.x - a.x, b.y - a.y) }

function splitCurve(curve: Curve, t: number): [Curve, Curve] {
  const a = mix(curve[0], curve[1], t)
  const b = mix(curve[1], curve[2], t)
  const c = mix(curve[2], curve[3], t)
  const d = mix(a, b, t)
  const e = mix(b, c, t)
  const f = mix(d, e, t)
  return [[curve[0], a, d, f], [f, e, c, curve[3]]]
}

function curvePoint(curve: Curve, t: number): Point {
  const s = 1 - t
  return {
    x: s ** 3 * curve[0].x + 3 * s ** 2 * t * curve[1].x + 3 * s * t ** 2 * curve[2].x + t ** 3 * curve[3].x,
    y: s ** 3 * curve[0].y + 3 * s ** 2 * t * curve[1].y + 3 * s * t ** 2 * curve[2].y + t ** 3 * curve[3].y,
  }
}

function trimCurve(curve: Curve, from: Rect, to: Rect): Curve | undefined {
  let start = -1
  let end = -1
  for (let i = 1; i < 160; i++) {
    if (start < 0 && !contains(from, curvePoint(curve, i / 160))) start = i / 160
    if (end < 0 && !contains(to, curvePoint(curve, 1 - i / 160))) end = 1 - i / 160
    if (start >= 0 && end >= 0) break
  }
  if (start < 0 || end <= start) return undefined
  let lo = start - 1 / 160
  let hi = start
  for (let i = 0; i < 16; i++) {
    const mid = (lo + hi) / 2
    if (contains(from, curvePoint(curve, mid))) lo = mid
    else hi = mid
  }
  start = hi
  lo = end
  hi = end + 1 / 160
  for (let i = 0; i < 16; i++) {
    const mid = (lo + hi) / 2
    if (contains(to, curvePoint(curve, mid))) hi = mid
    else lo = mid
  }
  end = lo
  return splitCurve(splitCurve(curve, end)[0], start / end)[1]
}

function curvePath(curve: Curve): string {
  return `M ${n(curve[0].x)} ${n(curve[0].y)} C ${n(curve[1].x)} ${n(curve[1].y)} ${n(curve[2].x)} ${n(curve[2].y)} ${n(curve[3].x)} ${n(curve[3].y)}`
}

function segmentHits(a: Point, b: Point, rect: Rect): boolean {
  let low = 0
  let high = 1
  for (const axis of ['x', 'y'] as const) {
    const delta = b[axis] - a[axis]
    const min = rect[axis]
    const max = min + (axis === 'x' ? rect.width : rect.height)
    if (Math.abs(delta) < .0001) {
      if (a[axis] < min || a[axis] > max) return false
    } else {
      const first = (min - a[axis]) / delta
      const last = (max - a[axis]) / delta
      low = Math.max(low, Math.min(first, last))
      high = Math.min(high, Math.max(first, last))
      if (low > high) return false
    }
  }
  return true
}

function roundedPath(points: Point[]): string {
  let result = `M ${n(points[0].x)} ${n(points[0].y)}`
  for (let i = 1; i < points.length - 1; i++) {
    const a = points[i - 1]
    const b = points[i]
    const c = points[i + 1]
    const before = distance(a, b)
    const after = distance(b, c)
    if (before < .01 || after < .01) continue
    const radius = Math.min(10, before / 2, after / 2)
    const p = mix(b, a, radius / before)
    const q = mix(b, c, radius / after)
    result += ` L ${n(p.x)} ${n(p.y)} Q ${n(b.x)} ${n(b.y)} ${n(q.x)} ${n(q.y)}`
  }
  const last = points[points.length - 1]
  return `${result} L ${n(last.x)} ${n(last.y)}`
}

function samplePolyline(points: Point[]): Point[] {
  return points.slice(1).flatMap((point, index) => {
    const count = Math.max(2, Math.ceil(distance(points[index], point) / 8))
    return Array.from({ length: count }, (_, step) => mix(points[index], point, step / (count - 1)))
  })
}

function ports(box: Rect): Point[] {
  return [
    { x: box.x - 2, y: box.y + box.height / 2 },
    { x: box.x + box.width + 2, y: box.y + box.height / 2 },
    { x: box.x + box.width / 2, y: box.y - 2 },
    { x: box.x + box.width / 2, y: box.y + box.height + 2 },
  ]
}

function orthogonalRoute(from: Rect, to: Rect, obstacles: Rect[], outer: Rect, prior: Route[]): Point[] | undefined {
  const xs = [outer.x + 14, outer.x + outer.width - 14, ...obstacles.flatMap((box) => [box.x - 14, box.x + box.width + 14])]
  const ys = [outer.y + 14, outer.y + outer.height - 14, ...obstacles.flatMap((box) => [box.y - 14, box.y + box.height + 14])]
  let best: Point[] | undefined
  let bestScore = Infinity
  const test = (points: Point[]) => {
    const clean = points.filter((point, i) => i === 0 || distance(point, points[i - 1]) > .01)
    if (clean.length < 2) return
    if (clean.some((point) => !contains(outer, point))) return
    for (let i = 1; i < clean.length; i++) {
      // Clearance also leaves space for the ten-pixel rounded corners.
      if (obstacles.some((box) => segmentHits(clean[i - 1], clean[i], box))) return
    }
    let score = clean.length * 16
    for (let i = 1; i < clean.length; i++) score += distance(clean[i - 1], clean[i])
    for (const route of prior) {
      for (const point of route.points) {
        for (let i = 1; i < clean.length; i++) {
          if (segmentHits(clean[i - 1], clean[i], { x: point.x - 5, y: point.y - 5, width: 10, height: 10 })) score += 3
        }
      }
    }
    if (score < bestScore) { best = clean; bestScore = score }
  }
  for (const a of ports(from)) {
    for (const b of ports(to)) {
      test([a, { x: a.x, y: b.y }, b])
      test([a, { x: b.x, y: a.y }, b])
      for (const x of xs) test([a, { x, y: a.y }, { x, y: b.y }, b])
      for (const y of ys) test([a, { x: a.x, y }, { x: b.x, y }, b])
    }
  }
  return best
}

function edgeStyle(edge: Arrow): { color: string; dash: string; marker: string } {
  const label = edge.label ?? ''
  if (/\b(view|views|viewing|look|sight|camera view)\b/i.test(label)) return { color: GRAY, dash: '9 7', marker: 'view' }
  if (/light|bounce|reflect|illumina/i.test(label)) return { color: RED, dash: '', marker: 'light' }
  return { color: INK, dash: '', marker: 'link' }
}

function drawEdge(drawing: Drawing, edge: Edge, path: string): void {
  const style = edgeStyle(edge)
  drawing.add(`<g data-edge-index="${n(edge.order)}" data-from="${n(edge.from)}" data-to="${n(edge.to)}">`)
  drawing.path(path, style.color, 'none', style.dash, `${drawing.uid}-${style.marker}`)
  drawing.add('</g>')
}

function layoutItem(item: Item, width: number, unit?: string) {
  const label = block(item.label, width, LABEL, 700)
  const detail = block(item.detail, width)
  const value = block(valueText(item, unit), width, 24, 700)
  const height = label.height + (detail.height ? detail.height + 8 : 0) + (value.height ? value.height + 8 : 0)
  return { label, detail, value, height }
}

function paintItem(drawing: Drawing, item: ReturnType<typeof layoutItem>, x: number, y: number): number {
  let cursor = y + drawing.paint(item.label, x, y)
  if (item.detail.height) cursor += 8 + drawing.paint(item.detail, x, cursor + 8)
  if (item.value.height) cursor += 8 + drawing.paint(item.value, x, cursor + 8)
  return cursor
}

function key(drawing: Drawing, visual: TeachingVisual, y: number, colors = false): number {
  y += drawing.text('Key', MARGIN, y, CONTENT, LABEL, 700) + 16
  visual.items.forEach((item, index) => {
    const content = layoutItem(item, CONTENT - 64, visual.unit)
    drawing.badge(String(index + 1), MARGIN + 23, y + 23, FILLS[index % FILLS.length])
    const start = y
    y = paintItem(drawing, content, MARGIN + 64, y)
    if (colors) {
      const actual = hex(item.color)
      const isValid = item.color !== undefined && hex(item.color, '') !== ''
      const description = isValid ? actual : `${actual} (fallback; no valid hex supplied)`
      y += 8 + drawing.text(description, MARGIN + 64, y + 8, CONTENT - 64, 24, 700)
    }
    y = Math.max(y, start + 46) + 24
  })
  return y
}

function connectionKey(drawing: Drawing, edges: Edge[], y: number): number {
  if (!edges.length) return y
  y += drawing.text('Connections', MARGIN, y, CONTENT, LABEL, 700) + 18
  edges.forEach((edge) => {
    const label = block(edge.label ?? '', CONTENT - 166)
    const height = Math.max(50, label.height)
    const a = drawing.badge(String(edge.from + 1), MARGIN + 23, y + 24)
    const b = drawing.badge(String(edge.to + 1), MARGIN + 117, y + 24)
    drawEdge(drawing, edge, `M ${n(a.x + a.width + 6)} ${n(y + 24)} L ${n(b.x - 9)} ${n(y + 24)}`)
    drawing.paint(label, MARGIN + 166, y)
    y += height + 20
  })
  return y
}

// All pictograms are original paths. Numbers and captions are separate SVG text,
// so transforming a pictogram never invalidates the returned text bounds.
function shape(drawing: Drawing, item: Item, point: Point, scale = 1, rotation = 0): void {
  const fill = hex(item.color)
  const label = item.label.toLowerCase()
  drawing.add(`<g transform="translate(${n(point.x)} ${n(point.y)}) rotate(${n(rotation)}) scale(${n(scale)})" fill="${escapeXml(fill)}" stroke="${INK}" stroke-width="${n(3 / scale)}" stroke-linecap="round" stroke-linejoin="round">`)
  switch (item.shape ?? 'box') {
    case 'person':
      drawing.add('<circle cx="0" cy="-20" r="12"/><path d="M -27 28 L -23 6 Q 0 -12 23 6 L 27 28 M -12 7 L -12 30 M 12 7 L 12 30"/>')
      break
    case 'camera':
      drawing.add('<rect x="-31" y="-20" width="44" height="40" rx="5"/><path d="M 13 -11 L 32 -22 L 32 22 L 13 11 Z M -23 -20 L -20 -28 L -7 -28 L -4 -20"/><circle cx="-10" cy="0" r="9" fill="none"/>')
      break
    case 'light':
      if (/window|doorway|daylight/.test(label)) {
        drawing.add('<rect x="-25" y="-32" width="50" height="64"/><path d="M 0 -32 V 32 M -25 0 H 25 M -32 32 H 32" fill="none"/>')
      } else if (/lamp/.test(label)) {
        drawing.add('<path d="M -13 -30 H 13 L 29 -1 H -29 Z M 0 0 V 28 M -21 30 H 21"/><path d="M -17 10 L -22 20 M 17 10 L 22 20" fill="none"/>')
      } else {
        drawing.add('<circle cx="0" cy="0" r="18"/><path d="M 0 -33 V -26 M 0 26 V 33 M -33 0 H -26 M 26 0 H 33 M -24 -24 L -19 -19 M 19 19 L 24 24 M -24 24 L -19 19 M 19 -19 L 24 -24" fill="none"/>')
      }
      break
    case 'screen':
      drawing.add('<rect x="-33" y="-26" width="66" height="46" rx="4"/><path d="M -26 -18 H 26 V 11 H -26 Z M 0 20 V 31 M -19 32 H 19" fill="none"/>')
      break
    case 'paper':
      drawing.add('<path d="M -24 -32 H 10 L 25 -17 V 32 H -24 Z M 10 -32 V -17 H 25"/><path d="M -15 -6 H 15 M -15 5 H 15 M -15 16 H 6" fill="none"/>')
      break
    case 'eye':
      drawing.add('<path d="M -34 0 Q 0 -31 34 0 Q 0 31 -34 0 Z"/><circle cx="0" cy="0" r="12"/><circle cx="0" cy="0" r="5" fill="#231f20"/>')
      break
    case 'circle':
      drawing.add('<circle cx="0" cy="0" r="29"/>')
      break
    case 'object':
      if (/mug|cup/.test(label)) {
        drawing.add('<path d="M 15 -14 H 24 Q 37 -14 33 4 Q 31 16 15 16" fill="none"/><path d="M -26 -21 H 16 V 20 Q -5 35 -26 20 Z"/><ellipse cx="-5" cy="-21" rx="21" ry="7"/>')
      } else if (/finger|hand/.test(label)) {
        drawing.add('<path d="M -18 30 L -23 7 Q -25 -5 -15 -2 L -9 7 V -25 Q -9 -36 2 -30 L 5 -6 Q 20 -8 23 4 L 18 30 Z"/>')
      } else if (/book/.test(label)) {
        drawing.add('<path d="M 0 -23 Q -15 -33 -32 -24 V 24 Q -15 16 0 28 Q 15 16 32 24 V -24 Q 15 -33 0 -23 Z M 0 -23 V 28"/><path d="M -24 -11 L -8 -8 M 8 -8 L 24 -11 M -24 0 L -8 3 M 8 3 L 24 0" fill="none"/>')
      } else if (/plant|leaf/.test(label)) {
        drawing.add('<path d="M 0 24 Q -26 5 -28 -22 Q -3 -23 0 5 Q 4 -28 30 -29 Q 28 2 0 12 M 0 5 V 32"/>')
      } else {
        drawing.add('<path d="M -28 -17 L 9 -30 L 30 -9 L 27 23 L -11 32 L -30 10 Z M -28 -17 L -7 4 L 30 -9 M -7 4 L -11 32"/>')
      }
      break
    case 'box':
      drawing.add('<rect x="-33" y="-24" width="66" height="48" rx="4"/><path d="M -23 -12 H 23 M -23 0 H 4 M -23 12 H -16 M -7 12 H 0 M 9 12 H 16" fill="none"/>')
      break
  }
  drawing.add('</g>')
  drawing.bottom = Math.max(drawing.bottom, point.y + 50 * scale)
}

function comparison(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  const columns = Math.min(2, visual.items.length)
  const gap = 36
  const width = (CONTENT - gap * (columns - 1)) / columns
  for (let start = 0; start < visual.items.length; start += columns) {
    const row = visual.items.slice(start, start + columns)
    const entries = row.map((item) => layoutItem(item, width - 12, visual.unit))
    const artHeight = row.some((item) => item.shape !== undefined) ? 98 : 0
    const rowHeight = Math.max(...entries.map((entry) => entry.height)) + 76 + artHeight
    row.forEach((item, column) => {
      const x = MARGIN + column * (width + gap)
      const color = FILLS[(start + column) % FILLS.length]
      drawing.add(`<g data-item-index="${n(start + column)}" data-column="${n(column)}">`)
      drawing.badge(String(start + column + 1), x + 23, y + 23, color)
      drawing.line({ x: x + 58, y: y + 23 }, { x: x + width - 6, y: y + 23 }, color)
      if (item.shape) shape(drawing, item, { x: x + width / 2, y: y + 101 })
      paintItem(drawing, entries[column], x + 6, y + 66 + artHeight)
      drawing.add('</g>')
    })
    if (row.length === 2) drawing.line({ x: WIDTH / 2, y: y + 8 }, { x: WIDTH / 2, y: y + rowHeight - 12 }, PALE)
    y += rowHeight + 32
  }
  return connectionKey(drawing, edges, y)
}

function flow(drawing: Drawing, visual: TeachingVisual, supplied: Edge[], y: number): number {
  const edges: Edge[] = visual.arrows === undefined
    ? visual.items.slice(1).map((_, i) => ({ from: i, to: i + 1, order: i })) : supplied
  const pairs = new Set(edges.map((edge) => `${edge.from}:${edge.to}`))
  const linear = pairs.size === edges.length && edges.every((edge) => edge.to === edge.from + 1)
  const rail = linear ? MARGIN + 28 : MARGIN + 94
  const textX = rail + 54
  const width = WIDTH - MARGIN - textX
  const steps = visual.items.map((item, index) => {
    const entry = layoutItem(item, width, visual.unit)
    const top = y
    const height = Math.max(50, entry.height)
    const edge = edges.find((candidate) => candidate.from === index && candidate.to === index + 1)
    const linkText = block(linear ? edge?.label ?? '' : '', width)
    y += height + Math.max(48, linkText.height + 28)
    return { top, height, entry, linkText }
  })
  edges.forEach((edge, index) => {
    const from = { x: rail, y: steps[edge.from].top + 23 }
    const to = { x: rail, y: steps[edge.to].top + 23 }
    if (linear) {
      drawEdge(drawing, edge, `M ${n(rail)} ${n(from.y + 29)} L ${n(rail)} ${n(to.y - 30)}`)
      const step = steps[edge.from]
      drawing.paint(step.linkText, textX, step.top + step.height + 14, GRAY)
    } else {
      const lane = MARGIN + 6 + (index % 5) * 11
      const x = rail - 30
      const direction = to.y >= from.y ? 1 : -1
      const endY = edge.from === edge.to ? from.y + 13 : to.y
      const startY = edge.from === edge.to ? from.y - 13 : from.y
      const path = `M ${n(x)} ${n(startY)} H ${n(lane + 10)} Q ${n(lane)} ${n(startY)} ${n(lane)} ${n(startY + 10 * direction)} V ${n(endY - 10 * direction)} Q ${n(lane)} ${n(endY)} ${n(lane + 10)} ${n(endY)} H ${n(x)}`
      drawEdge(drawing, edge, path)
    }
  })
  steps.forEach((step, index) => {
    drawing.add(`<g data-node-index="${n(index)}">`)
    drawing.badge(String(index + 1), rail, step.top + 23, FILLS[index % FILLS.length])
    paintItem(drawing, step.entry, textX, step.top)
    drawing.add('</g>')
  })
  return linear ? y : connectionKey(drawing, edges, y)
}

function timeline(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  y += drawing.text('Event order only; spacing is not proportional to time.', MARGIN, y, CONTENT) + 26
  const axis = MARGIN + 230
  const textX = axis + 34
  const rows = visual.items.map((item) => {
    const label = block(item.label, 198, LABEL, 700)
    const detail = block(item.detail, WIDTH - MARGIN - textX)
    const value = block(valueText(item, visual.unit), WIDTH - MARGIN - textX, 24, 700)
    const height = Math.max(54, label.height, detail.height + (value.height ? value.height + 8 : 0))
    const top = y
    y += height + 34
    return { label, detail, value, top }
  })
  drawing.add('<g data-time-spacing="ordinal">')
  drawing.line({ x: axis, y: rows[0].top + 17 }, { x: axis, y: rows[rows.length - 1].top + 17 }, GRAY)
  rows.forEach((row, index) => {
    drawing.add(`<g data-item-index="${n(index)}">`)
    drawing.paint(row.label, MARGIN, row.top)
    drawing.paint(row.detail, textX, row.top)
    if (row.value.height) drawing.paint(row.value, textX, row.top + row.detail.height + 8)
    const cy = row.top + 17
    drawing.path(`M ${n(axis)} ${n(cy - 9)} L ${n(axis + 9)} ${n(cy)} L ${n(axis)} ${n(cy + 9)} L ${n(axis - 9)} ${n(cy)} Z`, INK, index % 2 ? RED : IVORY)
    drawing.add('</g>')
  })
  drawing.add('</g>')
  return connectionKey(drawing, edges, y)
}

function bars(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  y += drawing.text('Zero baseline; bar lengths use the supplied values.', MARGIN, y, CONTENT) + 12
  if (visual.unit) y += drawing.text(`Unit: ${visual.unit}`, MARGIN, y, CONTENT, 24, 700) + 12
  let positive = 0
  let negative = 0
  for (const item of visual.items) {
    if (item.value === undefined || !Number.isFinite(item.value)) continue
    positive = Math.max(positive, item.value)
    negative = Math.max(negative, -item.value)
  }
  // Normalize first, avoiding overflow when finite values span both extremes.
  const magnitude = Math.max(positive, negative)
  const lower = magnitude ? negative / magnitude : 0
  const upper = magnitude ? positive / magnitude : 0
  const span = lower + upper
  const plotX = MARGIN + 18
  const plotWidth = CONTENT - 36
  const position = (value: number) => plotX + (span ? (value / magnitude + lower) / span : 0) * plotWidth
  const zero = position(0)
  const zeroWidth = textWidth('0', 24, 700) + 4
  drawing.text('0', clamp(zero - zeroWidth / 2, MARGIN, WIDTH - MARGIN - zeroWidth), y, zeroWidth, 24, 700, INK, 'center')
  y += leading(24) + 12
  visual.items.forEach((item, index) => {
    const color = FILLS[index % FILLS.length]
    drawing.add(`<g data-item-index="${n(index)}" data-zero-x="${n(zero)}">`)
    y += drawing.text(item.label, MARGIN, y, CONTENT, LABEL, 700) + 6
    const finite = item.value !== undefined && Number.isFinite(item.value)
    const numeric = item.value === undefined ? 'Value not supplied' : finite
      ? valueText(item, visual.unit) : `Non-finite value: ${numberText(item.value)}`
    y += drawing.text(numeric, MARGIN, y, CONTENT, LABEL, 700, color) + 10
    drawing.line({ x: plotX, y: y + 32 }, { x: plotX + plotWidth, y: y + 32 }, PALE)
    drawing.line({ x: zero, y: y - 5 }, { x: zero, y: y + 40 }, INK)
    if (finite) {
      const end = position(item.value as number)
      const width = Math.abs(end - zero)
      // A real zero has no filled area. No minimum-length bars are invented.
      if (width > 0) drawing.rect(Math.min(zero, end), y, width, 32, color)
      drawing.add(`<path data-value="${escapeXml(numberText(item.value as number))}" d="M ${n(end)} ${n(y - 3)} V ${n(y + 35)}" stroke="${color}" stroke-width="3"/>`)
    }
    y += 52
    y += drawing.text(item.detail, MARGIN, y, CONTENT) + 30
    drawing.add('</g>')
  })
  return connectionKey(drawing, edges, y)
}

function routeSpatial(edge: Edge, centers: Point[], bodies: Rect[], obstacles: Rect[], outer: Rect, edges: Edge[], prior: Route[]): Route {
  const from = centers[edge.from]
  const to = centers[edge.to]
  const length = distance(from, to)
  const normal = length ? { x: -(to.y - from.y) / length, y: (to.x - from.x) / length } : { x: 0, y: -1 }
  const reverse = edges.some((other) => other.from === edge.to && other.to === edge.from && other.order !== edge.order)
  const duplicate = edges.filter((other) => other.from === edge.from && other.to === edge.to && other.order < edge.order).length
  const offsets = reverse || duplicate ? [48 + duplicate * 30, 84 + duplicate * 30, -48 - duplicate * 30] : [0, 38, -38]
  offsets.push(112, -112, 168, -168, 232, -232, 310, -310)
  let best: Route | undefined
  let bestScore = Infinity
  for (const offset of offsets) {
    let raw: Curve
    if (length < 1) {
      const direction = offset < 0 ? -1 : 1
      const extent = Math.max(126, Math.abs(offset))
      raw = [from, { x: from.x + extent, y: from.y - extent * direction }, { x: from.x - extent, y: from.y - extent * direction }, to]
    } else {
      const a = mix(from, to, 1 / 3)
      const b = mix(from, to, 2 / 3)
      raw = [from, { x: a.x + normal.x * offset, y: a.y + normal.y * offset }, { x: b.x + normal.x * offset, y: b.y + normal.y * offset }, to]
    }
    const curve = trimCurve(raw, inflated(bodies[edge.from], 9), inflated(bodies[edge.to], 9))
    if (!curve) continue
    const points = Array.from({ length: 101 }, (_, index) => curvePoint(curve, index / 100))
    let score = Math.abs(offset) * .02
    for (let i = 1; i < points.length; i++) {
      score += distance(points[i - 1], points[i]) * .001
      if (!contains(outer, points[i])) score += 10000
      if (obstacles.some((box) => segmentHits(points[i - 1], points[i], box))) score += 1000
    }
    for (const previous of prior) {
      for (let i = 12; i < points.length - 12; i += 4) {
        if (previous.points.some((point) => distance(point, points[i]) < 8)) score += 8
      }
    }
    if (score < bestScore) { bestScore = score; best = { edge, path: curvePath(curve), points } }
    if (score < 1 && !reverse && !duplicate) break
  }
  if (!best || bestScore >= 1000) {
    const orthogonal = orthogonalRoute(inflated(bodies[edge.from], 9), inflated(bodies[edge.to], 9), obstacles, outer, prior)
    if (orthogonal) return { edge, path: roundedPath(orthogonal), points: samplePolyline(orthogonal) }
  }
  if (best) return best
  // Coincident or touching anchors can make a free path impossible. The mask
  // below still prevents a connector from painting over a node or its number.
  const fallback: Curve = [from, { x: from.x + 100, y: from.y - 130 }, { x: to.x - 100, y: to.y - 130 }, to]
  return { edge, path: curvePath(fallback), points: Array.from({ length: 101 }, (_, i) => curvePoint(fallback, i / 100)) }
}

function spatial(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  y += drawing.text('Schematic positions and routed links, not measured distances.', MARGIN, y, CONTENT) + 16
  const count = visual.items.length
  const columns = Math.min(3, count)
  const rows = Math.ceil(count / columns)
  let missingPosition = false
  const coordinates = visual.items.map((item, index) => {
    const hasX = item.x !== undefined && Number.isFinite(item.x)
    const hasY = item.y !== undefined && Number.isFinite(item.y)
    if (!hasX || !hasY) missingPosition = true
    return {
      x: hasX ? clamp(item.x as number, 0, 100) : columns === 1 ? 50 : 15 + (index % columns) / (columns - 1) * 70,
      y: hasY ? clamp(item.y as number, 0, 100) : rows === 1 ? 50 : 15 + Math.floor(index / columns) / (rows - 1) * 70,
    }
  })
  if (missingPosition) y += drawing.text('Unspecified coordinates use a numbered grid.', MARGIN, y, CONTENT) + 12
  const map: Rect = { x: MARGIN + 58, y: y + 108, width: CONTENT - 116, height: Math.max(430, rows * 180) }
  // Extra height separates close rows without changing their normalized y values.
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = Math.abs(coordinates[i].x - coordinates[j].x) / 100 * map.width
      const dy = Math.abs(coordinates[i].y - coordinates[j].y) / 100
      if (dx < 95 && dy > .015) map.height = Math.max(map.height, Math.sqrt(95 ** 2 - dx ** 2) / dy)
    }
  }
  const outer: Rect = { x: MARGIN + 4, y, width: CONTENT - 8, height: map.height + 220 }
  const centers = coordinates.map((point) => ({ x: map.x + point.x / 100 * map.width, y: map.y + point.y / 100 * map.height }))
  const scales = centers.map((point, index) => {
    let nearest = Infinity
    centers.forEach((other, i) => { if (i !== index) nearest = Math.min(nearest, distance(point, other)) })
    return clamp(nearest / 90, .45, 1)
  })
  const bodies = centers.map((point, index) => ({ x: point.x - 38 * scales[index], y: point.y - 38 * scales[index], width: 76 * scales[index], height: 76 * scales[index] }))
  const occupied = bodies.map((body) => inflated(body, 5))
  const badges: Rect[] = []
  const badgeCenters: Point[] = []
  const labels: { text: string; box: Rect; index: number }[] = []
  let overflow = 0
  centers.forEach((point, index) => {
    const width = Math.max(44, textWidth(String(index + 1), 24, 700) + 12)
    let chosen: Rect | undefined
    for (const radius of [65, 91, 122, 158]) {
      for (const offset of [[0, -1], [0, 1], [1, 0], [-1, 0], [.72, -.72], [-.72, -.72], [.72, .72], [-.72, .72]]) {
        const box = { x: point.x + offset[0] * radius - width / 2, y: point.y + offset[1] * radius - 22, width, height: 44 }
        if (inside(inflated(box, 5), outer) && !occupied.some((other) => overlaps(box, other, 9))) { chosen = box; break }
      }
      if (chosen) break
    }
    if (!chosen) {
      chosen = { x: MARGIN + 18 + (overflow % 6) * 106, y: y + map.height + 224 + Math.floor(overflow / 6) * 66, width, height: 44 }
      overflow++
    }
    badges.push(chosen)
    badgeCenters.push({ x: chosen.x + chosen.width / 2, y: chosen.y + 22 })
    occupied.push(inflated(chosen, 5))
  })
  if (overflow) outer.height += Math.ceil(overflow / 6) * 66 + 20
  badges.forEach((badge, index) => {
    const label = visual.items[index].label
    const width = textWidth(label, 24, 700)
    if (!label || /\s*\n/.test(label) || width > 146) return
    const candidates = [
      { x: badge.x + badge.width + 9, y: badge.y + 5, width, height: leading(24) },
      { x: badge.x - width - 9, y: badge.y + 5, width, height: leading(24) },
      { x: badge.x + (badge.width - width) / 2, y: badge.y + badge.height + 9, width, height: leading(24) },
    ]
    const chosen = candidates.find((candidate) => inside(inflated(candidate, 4), outer) && !occupied.some((other) => overlaps(candidate, other, 4)))
    if (chosen) { labels.push({ text: label, box: chosen, index }); occupied.push(inflated(chosen, 4)) }
  })
  const obstacles = [...bodies.map((body) => inflated(body, 7)), ...badges.map((badge) => inflated(badge, 7)), ...labels.map((label) => inflated(label.box, 7))]
  const routes: Route[] = []
  for (const edge of edges) routes.push(routeSpatial(edge, centers, bodies, obstacles, outer, edges, routes))
  const maskId = `${drawing.uid}-connections-mask`
  // A mask handles intersecting exclusion rectangles correctly, unlike even-odd
  // clip holes, which would expose their overlapping regions again.
  const masks = obstacles.map((box) => `<rect x="${n(box.x)}" y="${n(box.y)}" width="${n(box.width)}" height="${n(box.height)}" fill="#000000"/>`).join('')
  drawing.definitions.push(`<mask id="${escapeXml(maskId)}" maskUnits="userSpaceOnUse" x="${n(outer.x)}" y="${n(outer.y)}" width="${n(outer.width)}" height="${n(outer.height)}" style="mask-type:luminance"><rect x="${n(outer.x)}" y="${n(outer.y)}" width="${n(outer.width)}" height="${n(outer.height)}" fill="#ffffff"/>${masks}</mask>`)
  drawing.add(`<g data-coordinate-space="0..100" data-plot-x="${n(map.x)}" data-plot-y="${n(map.y)}" data-plot-width="${n(map.width)}" data-plot-height="${n(map.height)}">`)
  for (const [x, direction] of [[outer.x, 1], [outer.x + outer.width, -1]]) {
    drawing.path(`M ${n(x)} ${n(y + 22)} V ${n(y)} H ${n(x + 22 * direction)}`, PALE)
    drawing.path(`M ${n(x)} ${n(y + outer.height - 22)} V ${n(y + outer.height)} H ${n(x + 22 * direction)}`, PALE)
  }
  // Number leaders are undirected; connection arrowheads are a separate layer.
  centers.forEach((point, index) => drawing.line(point, badgeCenters[index], PALE))
  drawing.add(`<g mask="url(#${escapeXml(maskId)})">`)
  routes.forEach((route) => drawEdge(drawing, route.edge, route.path))
  drawing.add('</g>')
  const arrowLabelBoxes: Rect[] = []
  routes.forEach((route) => {
    if (!route.edge.label || route.points.length < 3) return
    const raw = route.edge.label.replace(/\s+/gu, ' ').trim()
    if (!raw) return
    const label = textWidth(raw, BODY) <= 158 ? raw : `${route.edge.from + 1} to ${route.edge.to + 1}`
    const width = textWidth(label, BODY)
    let placed: Rect | undefined
    for (const fraction of [.5, .32, .68, .2, .8]) {
      const index = clamp(Math.round((route.points.length - 1) * fraction), 1, route.points.length - 2)
      const point = route.points[index]
      const before = route.points[index - 1]
      const after = route.points[index + 1]
      const length = distance(before, after) || 1
      const normal = { x: -(after.y - before.y) / length, y: (after.x - before.x) / length }
      for (const offset of [30, -30, 48, -48, 68, -68]) {
        const box = { x: point.x + normal.x * offset - width / 2 - 5, y: point.y + normal.y * offset - leading(BODY) / 2 - 4, width: width + 10, height: leading(BODY) + 8 }
        if (!inside(box, outer) || [...obstacles, ...arrowLabelBoxes].some((other) => overlaps(box, other, 4))) continue
        if (routes.some((other) => other.points.slice(1).some((p, i) => segmentHits(other.points[i], p, inflated(box, 2))))) continue
        placed = box
        break
      }
      if (placed) break
    }
    if (placed) {
      arrowLabelBoxes.push(placed)
      drawing.rect(placed.x, placed.y, placed.width, placed.height, IVORY, 'none', 3)
      drawing.text(label, placed.x + 5, placed.y + 4, width, BODY, 400, edgeStyle(route.edge).color)
    }
  })
  visual.items.forEach((item, index) => {
    const point = centers[index]
    const target = edges.find((edge) => edge.from === index && edge.to !== index)
    const rotation = item.shape === 'camera' && target
      ? Math.atan2(centers[target.to].y - point.y, centers[target.to].x - point.x) * 180 / Math.PI : 0
    drawing.add(`<g data-node-index="${n(index)}" data-x="${n(coordinates[index].x)}" data-y="${n(coordinates[index].y)}">`)
    shape(drawing, item, point, scales[index], rotation)
    drawing.badge(String(index + 1), badgeCenters[index].x, badgeCenters[index].y)
    drawing.add('</g>')
  })
  labels.forEach((label) => drawing.text(label.text, label.box.x, label.box.y, label.box.width, 24, 700))
  drawing.add('</g>')
  y = y + outer.height + 32
  y = key(drawing, visual, y)
  return connectionKey(drawing, edges, y)
}

function layers(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  y += drawing.text('Stacked schematic; spacing is not a time or size scale.', MARGIN, y, CONTENT) + 24
  const textX = MARGIN + 266
  const rows = visual.items.map((item) => {
    const entry = layoutItem(item, WIDTH - MARGIN - textX, visual.unit)
    const top = y
    y += Math.max(110, entry.height) + 30
    return { entry, top }
  })
  const spine = MARGIN + 14
  drawing.line({ x: spine, y: rows[0].top + 33 }, { x: spine, y: rows[rows.length - 1].top + 33 }, GRAY, '5 7')
  rows.forEach((row, index) => {
    const x = MARGIN + 34 + (index % 2) * 10
    const top = row.top + 3
    const fill = hex(visual.items[index].color, index % 2 ? PALE : IVORY)
    drawing.add(`<g data-layer-index="${n(index)}">`)
    drawing.line({ x: spine, y: top + 30 }, { x, y: top + 30 }, GRAY)
    drawing.path(`M ${n(x)} ${n(top)} H ${n(x + 155)} L ${n(x + 181)} ${n(top + 22)} H ${n(x + 26)} Z`, INK, fill)
    drawing.path(`M ${n(x + 26)} ${n(top + 22)} H ${n(x + 181)} V ${n(top + 76)} H ${n(x + 26)} Z`, INK, IVORY)
    drawing.path(`M ${n(x)} ${n(top)} L ${n(x + 26)} ${n(top + 22)} V ${n(top + 76)} L ${n(x)} ${n(top + 54)} Z`, INK, FILLS[index % FILLS.length])
    drawing.text(String(index + 1), x + 47, top + 30, 110, LABEL, 700, INK, 'center')
    drawing.line({ x: x + 185, y: top + 43 }, { x: textX - 12, y: top + 43 }, GRAY)
    paintItem(drawing, row.entry, textX, row.top)
    drawing.add('</g>')
  })
  return connectionKey(drawing, edges, y)
}

function swatches(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  y += drawing.text('Match each numbered patch to its hex value in the key.', MARGIN, y, CONTENT) + 22
  for (let start = 0; start < visual.items.length; start += 6) {
    const row = visual.items.slice(start, start + 6)
    const width = CONTENT / row.length
    row.forEach((item, index) => {
      const x = MARGIN + index * width
      drawing.add(`<g data-swatch-index="${n(start + index)}" data-color="${escapeXml(hex(item.color))}">`)
      drawing.rect(x, y, width, 106, hex(item.color), INK)
      drawing.line({ x: x + width / 2, y: y + 109 }, { x: x + width / 2, y: y + 121 }, INK)
      drawing.badge(String(start + index + 1), x + width / 2, y + 146)
      drawing.add('</g>')
    })
    y += 196
  }
  y = key(drawing, visual, y, true)
  return connectionKey(drawing, edges, y)
}

function matrix(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  // Infer axes only from an explicit, consistent "row / column" label contract.
  // An arbitrary flat list never becomes invented permission or quadrant data.
  const pairs = visual.items.map((item) => item.label.split(/\s+\/\s+/u))
  const named = pairs.every((pair) => pair.length === 2 && pair.every((part) => part.trim().length > 0))
  const rowNames = named ? [...new Set(pairs.map((pair) => pair[0].trim()))]
    : Array.from({ length: Math.ceil(visual.items.length / 2) }, (_, i) => `Row ${i + 1}`)
  const columnNames = named ? [...new Set(pairs.map((pair) => pair[1].trim()))] : ['Column 1', 'Column 2']
  const cells = new Map<string, number[]>()
  visual.items.forEach((_, index) => {
    const row = named ? rowNames.indexOf(pairs[index][0].trim()) : Math.floor(index / 2)
    const column = named ? columnNames.indexOf(pairs[index][1].trim()) : index % 2
    const address = `${row}:${column}`
    cells.set(address, [...(cells.get(address) ?? []), index])
  })
  y += drawing.text(named ? 'Read the row and column together; numbered cells refer to the key.' : 'Items in reading order; semantic axes were not supplied.', MARGIN, y, CONTENT) + 24
  const rowWidth = 160
  for (let start = 0; start < columnNames.length; start += 3) {
    const columns = columnNames.slice(start, start + 3)
    const cellWidth = (CONTENT - rowWidth) / columns.length
    const headers = columns.map((name) => block(name, cellWidth - 24, 24, 700))
    const headerHeight = Math.max(66, ...headers.map((header) => header.height + 24))
    const top = y
    drawing.rect(MARGIN + rowWidth, y, CONTENT - rowWidth, headerHeight, PALE)
    headers.forEach((header, i) => drawing.paint(header, MARGIN + rowWidth + i * cellWidth + 12, y + 12))
    y += headerHeight
    drawing.line({ x: MARGIN, y }, { x: WIDTH - MARGIN, y })
    rowNames.forEach((name, row) => {
      const heading = block(name, rowWidth - 24, LABEL, 700)
      const entries = columns.map((_, column) => (cells.get(`${row}:${start + column}`) ?? []).map((index) => {
        const item = visual.items[index]
        const colon = item.detail.indexOf(':')
        const literal = named && colon > 0 ? item.detail.slice(0, colon) : named ? '' : item.label
        const summary = block(literal, cellWidth - 24, named ? 24 : LABEL, 700)
        return { index, summary, height: 64 + summary.height }
      }))
      const missing = block('Not supplied', cellWidth - 24)
      const rowHeight = Math.max(98, heading.height + 28, missing.height + 28, ...entries.map((entry) => entry.reduce((sum, cell) => sum + cell.height, 20)))
      drawing.paint(heading, MARGIN + 12, y + 14)
      entries.forEach((entry, column) => {
        const x = MARGIN + rowWidth + column * cellWidth
        if (!entry.length) { drawing.paint(missing, x + 12, y + 14, GRAY); return }
        let cursor = y + 12
        entry.forEach((cell) => {
          drawing.add(`<g data-cell-item-index="${n(cell.index)}" data-row="${n(row)}" data-column="${n(start + column)}">`)
          drawing.badge(String(cell.index + 1), x + cellWidth / 2, cursor + 23, FILLS[cell.index % FILLS.length])
          drawing.paint(cell.summary, x + 12, cursor + 54, INK, 'center')
          drawing.add('</g>')
          cursor += cell.height
        })
      })
      y += rowHeight
      drawing.line({ x: MARGIN, y }, { x: WIDTH - MARGIN, y })
    })
    drawing.line({ x: MARGIN, y: top }, { x: WIDTH - MARGIN, y: top })
    drawing.line({ x: MARGIN, y: top }, { x: MARGIN, y })
    for (let column = 0; column <= columns.length; column++) {
      const x = MARGIN + rowWidth + column * cellWidth
      drawing.line({ x, y: top }, { x, y })
    }
    y += 32
  }
  y = key(drawing, visual, y)
  return connectionKey(drawing, edges, y)
}

function dialogue(drawing: Drawing, visual: TeachingVisual, edges: Edge[], y: number): number {
  visual.items.forEach((item, index) => {
    const right = index % 2 === 1
    const available = CONTENT - 92
    const advanceWidth = textWidth(item.detail, BODY)
    const estimatedLines = Math.max(1, Math.ceil(advanceWidth / (available - 48)))
    const width = clamp(Math.ceil(advanceWidth / estimatedLines) + 48, 330, available)
    const x = right ? WIDTH - MARGIN - 24 - width : MARGIN + 24
    const header = block(item.label, width - 60, LABEL, 700)
    const headerHeight = Math.max(46, header.height)
    drawing.badge(String(index + 1), right ? x + width - 23 : x + 23, y + 23, right ? RED : INK)
    drawing.paint(header, right ? x : x + 60, y, INK, right ? 'right' : 'left')
    y += headerHeight + 12
    const detail = block(item.detail, width - 48)
    const value = block(valueText(item, visual.unit), width - 48, 24, 700)
    const height = Math.max(82, detail.height + 40 + (value.height ? value.height + 8 : 0))
    const end = x + width
    const bottom = y + height
    const color = right ? RED : INK
    const tail = right
      ? `L ${n(end)} ${n(bottom - 41)} L ${n(end + 18)} ${n(bottom - 14)} L ${n(end)} ${n(bottom - 21)}`
      : ''
    const leftTail = !right
      ? `L ${n(x)} ${n(bottom - 21)} L ${n(x - 18)} ${n(bottom - 14)} L ${n(x)} ${n(bottom - 41)}` : ''
    const path = `M ${n(x + 22)} ${n(y)} H ${n(end - 22)} Q ${n(end)} ${n(y)} ${n(end)} ${n(y + 22)} ${tail} L ${n(end)} ${n(bottom - 22)} Q ${n(end)} ${n(bottom)} ${n(end - 22)} ${n(bottom)} H ${n(x + 22)} Q ${n(x)} ${n(bottom)} ${n(x)} ${n(bottom - 22)} ${leftTail} L ${n(x)} ${n(y + 22)} Q ${n(x)} ${n(y)} ${n(x + 22)} ${n(y)} Z`
    drawing.add(`<g data-turn-index="${n(index)}" data-side="${right ? 'right' : 'left'}">`)
    drawing.path(path, color, right ? '#eee8dc' : IVORY)
    drawing.paint(detail, x + 24, y + 20)
    if (value.height) drawing.paint(value, x + 24, y + 28 + detail.height)
    drawing.add('</g>')
    y = bottom + 36
  })
  return connectionKey(drawing, edges, y)
}

function validEdge(edge: Arrow, count: number): boolean {
  return Number.isInteger(edge.from) && Number.isInteger(edge.to)
    && edge.from >= 0 && edge.to >= 0 && edge.from < count && edge.to < count
}

function identifier(id: string, index: number): string {
  // Lossless ASCII encoding avoids both markup injection and slug/hash collisions.
  const encode = (text: string) => Array.from(text, (character) => character.codePointAt(0)?.toString(16)).join('-') || 'empty'
  return `teaching-${encode(id)}-v-${encode(String(index))}`
}

/**
 * Render one original teaching schematic without I/O or ambient browser state.
 * Inputs are not mutated. Text bounds are conservative line-layout boxes in SVG
 * coordinates, including every visible text element, not a pixel-measurement API.
 * The reader owns the caption; it is deliberately not repeated inside the SVG.
 */
export function renderTeachingVisual(visual: TeachingVisual, id: string, index: number): {
  svg: string
  width: number
  height: number
  textBounds: Array<{ text: string; x: number; y: number; width: number; height: number }>
} {
  const uid = identifier(id, index)
  const drawing = new Drawing(uid)
  const arrows = visual.arrows ?? []
  const edges: Edge[] = arrows.flatMap((edge, order) => validEdge(edge, visual.items.length) ? [{ ...edge, order }] : [])
  const title = visual.title || FORMAT_NAMES[visual.type]
  let y = MARGIN
  y += drawing.text(FORMAT_NAMES[visual.type], MARGIN, y, CONTENT, 24, 700, RED) + 6
  y += drawing.text(title, MARGIN, y, CONTENT, 32, 700) + 28
  if (!visual.items.length) {
    y += drawing.text('No items supplied.', MARGIN, y, CONTENT) + 16
  } else {
    switch (visual.type) {
      case 'comparison': y = comparison(drawing, visual, edges, y); break
      case 'flow': y = flow(drawing, visual, edges, y); break
      case 'timeline': y = timeline(drawing, visual, edges, y); break
      case 'bars': y = bars(drawing, visual, edges, y); break
      case 'spatial': y = spatial(drawing, visual, edges, y); break
      case 'layers': y = layers(drawing, visual, edges, y); break
      case 'swatches': y = swatches(drawing, visual, edges, y); break
      case 'matrix': y = matrix(drawing, visual, edges, y); break
      case 'dialogue': y = dialogue(drawing, visual, edges, y); break
      default: {
        const unsupported: never = visual.type
        throw new TypeError(`Unsupported teaching format: ${String(unsupported)}`)
      }
    }
  }
  arrows.filter((edge) => !validEdge(edge, visual.items.length)).forEach((edge) => {
    const label = `Connection not drawn: item indices ${numberText(edge.from)} to ${numberText(edge.to)} are outside this item list.${edge.label ? ` ${edge.label}` : ''}`
    y += drawing.text(label, MARGIN, y, CONTENT) + 16
  })
  y = Math.max(y, drawing.bottom) + 24
  drawing.line({ x: MARGIN, y: y + 16 }, { x: MARGIN + 66, y: y + 16 }, RED)
  y += drawing.text('Explanatory diagram', MARGIN + 84, y, CONTENT - 84, BODY, 400, GRAY)
  const height = Math.ceil(Math.max(y, drawing.bottom) + MARGIN)
  for (const bound of drawing.textBounds) {
    if (bound.x < 0 || bound.y < 0 || bound.x + bound.width > WIDTH + .01 || bound.y + bound.height > height + .01) {
      throw new RangeError('Teaching visual text extends beyond the SVG viewBox')
    }
  }
  const markers = [['link', INK], ['light', RED], ['view', GRAY]].map(([name, color]) =>
    `<marker id="${escapeXml(`${uid}-${name}`)}" viewBox="0 0 14 14" refX="12" refY="7" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" orient="auto"><path d="M 2 2 L 12 7 L 2 12 Z" fill="${color}" stroke="${color}" stroke-width="3" stroke-linejoin="round"/></marker>`,
  ).join('')
  const itemDescriptions = visual.items.map((item, itemIndex) => {
    const value = valueText(item, visual.unit)
    const color = visual.type === 'swatches' ? ` Hex ${hex(item.color)}.` : ''
    return `${itemIndex + 1}. ${item.label}. ${item.detail}${value ? ` Value: ${value}.` : ''}${color}`
  }).join('\n')
  const edgeDescriptions = edges.map((edge) => `${edge.from + 1} to ${edge.to + 1}${edge.label ? `: ${edge.label}` : ''}.`).join('\n')
  const description = [visual.alt, itemDescriptions, edgeDescriptions].filter(Boolean).join('\n')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${height}" viewBox="0 0 ${WIDTH} ${height}" role="img" aria-labelledby="${escapeXml(`${uid}-title`)}" aria-describedby="${escapeXml(`${uid}-desc`)}" font-family="Arial, sans-serif" data-format="${escapeXml(visual.type)}" data-visual-id="${escapeXml(id)}" data-visual-index="${escapeXml(String(index))}"><title id="${escapeXml(`${uid}-title`)}">${escapeXml(title)}</title><desc id="${escapeXml(`${uid}-desc`)}">${escapeXml(description)}</desc><defs>${markers}${drawing.definitions.join('')}</defs><rect width="${WIDTH}" height="${height}" fill="${IVORY}"/><g aria-hidden="true">${drawing.parts.join('')}</g></svg>`
  return { svg, width: WIDTH, height, textBounds: drawing.textBounds }
}