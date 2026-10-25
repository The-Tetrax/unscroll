// Original component illustrations for the complete design-025 through design-036 guides.
// Pure, offline SVG only. The caller owns integration, asset generation and live UI testing.
// Text bounds use estimated Arial advances, constrained with textLength, not measured glyphs.

type Graphic = { svg: string; width: number; height: number }
type Box = { x: number; y: number; width: number; height: number }
type TextBound = Box & { value: string }
type FontSize = 22 | 24 | 26 | 28
type TextStyle = {
  size?: FontSize
  weight?: 400 | 700
  fill?: string
  align?: 'left' | 'center' | 'right'
  underline?: boolean
}
type Attributes = Readonly<Record<string, string | number>>

const WIDTH = 720
const C = {
  ink: '#231F20', ivory: '#F7F4ED', white: '#FFFFFF', red: '#BC2031',
  muted: '#69635F', rule: '#C9C2B6', pale: '#EAE5DB', rose: '#FBEDEF',
  green: '#326448', leaf: '#CCD8C0', blue: '#DCEBED', water: '#7397A3',
  clay: '#B77755', clayLight: '#E3B493', shade: '#B4ACA0',
}

function escapeXml(value: string): string {
  const valid = Array.from(value, (character) => {
    const code = character.codePointAt(0) ?? 0
    return code === 9 || code === 10 || code === 13
      || (code >= 0x20 && code <= 0xD7FF)
      || (code >= 0xE000 && code <= 0xFFFD)
      || (code >= 0x10000 && code <= 0x10FFFF) ? character : '\uFFFD'
  }).join('')
  return valid.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character)
}

function n(value: number): string {
  if (!Number.isFinite(value)) throw new RangeError('Non-finite design UX coordinate')
  return String(Math.round(value * 1000) / 1000)
}

function nonnegative(...values: number[]): void {
  for (const value of values) {
    n(value)
    if (value < 0) throw new RangeError('Negative design UX dimension')
  }
}

function element(name: string, attributes: Attributes, body = ''): string {
  // Element names, attributes and reference IDs are internal, never user input.
  const properties = Object.entries(attributes).map(([key, value]) =>
    ` ${key}="${escapeXml(typeof value === 'number' ? n(value) : value)}"`,
  ).join('')
  return `<${name}${properties}>${body}</${name}>`
}

function rect(x: number, y: number, width: number, height: number, fill = C.white, stroke = C.rule, radius = 0, strokeWidth = 2): string {
  nonnegative(width, height, radius, strokeWidth)
  return element('rect', { x, y, width, height, rx: radius, fill, stroke, 'stroke-width': strokeWidth })
}

function line(x1: number, y1: number, x2: number, y2: number, stroke = C.rule, width = 2, dash = ''): string {
  nonnegative(width)
  return element('line', { x1, y1, x2, y2, stroke, 'stroke-width': width, 'stroke-dasharray': dash })
}

function path(d: string, fill = 'none', stroke = C.ink, width = 2, dash = ''): string {
  // Also validate numbers embedded in path strings, including exponent overflow.
  const numeric = /[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g
  for (const token of d.match(numeric) ?? []) n(Number(token))
  if (d.replace(numeric, '').replace(/[MLHVCSQTAZmlhvcsqtaz\s,]/g, '')) {
    throw new RangeError('Invalid design UX path token')
  }
  nonnegative(width)
  return element('path', {
    d, fill, stroke, 'stroke-width': width, 'stroke-dasharray': dash,
    'stroke-linecap': 'round', 'stroke-linejoin': 'round',
  })
}

function circle(cx: number, cy: number, radius: number, fill = C.white, stroke = C.ink, width = 2, dash = ''): string {
  nonnegative(radius, width)
  return element('circle', { cx, cy, r: radius, fill, stroke, 'stroke-width': width, 'stroke-dasharray': dash })
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, stroke = 'none', width = 2): string {
  nonnegative(rx, ry, width)
  return element('ellipse', { cx, cy, rx, ry, fill, stroke, 'stroke-width': width })
}

function group(x: number, y: number, scale: number, body: string): string {
  if (!Number.isFinite(scale) || scale <= 0) throw new RangeError('Invalid design UX artwork scale')
  return element('g', { transform: `translate(${n(x)} ${n(y)}) scale(${n(scale)})` }, body)
}

const ADVANCES: Readonly<Record<string, number>> = {
  ' ': .278, '!': .278, '"': .355, '#': .556, '%': .889, '&': .667,
  "'": .222, '(': .333, ')': .333, '+': .584, ',': .278, '-': .333,
  '.': .278, '/': .278, ':': .278, ';': .278, '<': .584, '=': .584,
  '>': .584, '?': .556, '@': 1.015, '[': .278, ']': .278, '|': .26,
  A: .667, B: .667, C: .722, D: .722, E: .667, F: .611, G: .778,
  H: .722, I: .278, J: .5, K: .667, L: .556, M: .833, N: .722,
  O: .778, P: .667, Q: .778, R: .722, S: .667, T: .611, U: .722,
  V: .667, W: .944, X: .667, Y: .667, Z: .611,
  a: .556, b: .556, c: .5, d: .556, e: .556, f: .278, g: .556,
  h: .556, i: .222, j: .222, k: .5, l: .222, m: .833, n: .556,
  o: .556, p: .556, q: .556, r: .333, s: .5, t: .278, u: .556,
  v: .5, w: .722, x: .5, y: .5, z: .5,
}

function measure(value: string, size: FontSize, weight: 400 | 700): number {
  const units = Array.from(value).reduce((sum, character) =>
    sum + (ADVANCES[character] ?? (/\d/.test(character) ? .556 : .9)), 0)
  return Math.ceil(units * size * (weight === 700 ? 1.09 : 1.035) + 6)
}

function wrap(value: string, width: number, size: FontSize, weight: 400 | 700): string[] {
  if (!Number.isFinite(width) || width < 24) throw new RangeError('Design UX text column is too narrow')
  const result: string[] = []
  for (const paragraph of value.replace(/\r\n?/g, '\n').split('\n')) {
    let current = ''
    for (const word of paragraph.trim().split(/\s+/).filter(Boolean)) {
      const candidate = current ? `${current} ${word}` : word
      if (measure(candidate, size, weight) <= width) {
        current = candidate
        continue
      }
      if (current) result.push(current)
      current = ''
      for (const character of Array.from(word)) {
        if (measure(character, size, weight) > width) throw new RangeError('Design UX glyph exceeds its column')
        if (current && measure(current + character, size, weight) > width) {
          result.push(current)
          current = ''
        }
        current += character
      }
    }
    if (current) result.push(current)
  }
  return result
}

function intersection(a: Box, b: Box): Box | null {
  const x = Math.max(a.x, b.x)
  const y = Math.max(a.y, b.y)
  const right = Math.min(a.x + a.width, b.x + b.width)
  const bottom = Math.min(a.y + a.height, b.y + b.height)
  return right > x && bottom > y ? { x, y, width: right - x, height: bottom - y } : null
}

class Plate {
  readonly id: string
  readonly height: number
  readonly title: string
  readonly description: string
  readonly parts: string[] = []
  readonly definitions: string[] = []
  readonly bounds: TextBound[] = []
  private serial = 0

  constructor(lesson: number, height: number, title: string, description: string, subtitle: string) {
    if (!Number.isInteger(height) || height < 600 || height > 1050) throw new RangeError('Design UX height must be 600 to 1050')
    this.id = `design-ux-${n(lesson).padStart(3, '0')}`
    this.height = height
    this.title = title
    this.description = description
    if (wrap(title, 656, 28, 700).length !== 1 || wrap(subtitle, 656, 22, 400).length !== 1) {
      throw new RangeError('Design UX header needs a shorter line')
    }
    this.text(title, 32, 24, 656, { size: 28, weight: 700 })
    this.text(subtitle, 32, 72, 656, { fill: C.muted })
    this.add(line(32, 114, 688, 114, C.ink))
  }

  add(...parts: string[]): void { this.parts.push(...parts) }

  private checkBox(box: Box): void {
    for (const coordinate of [box.x, box.y, box.width, box.height]) n(coordinate)
    if (box.width < 0 || box.height < 0 || box.x < 16 || box.y < 16
      || box.x + box.width > WIDTH - 16 || box.y + box.height > this.height - 16) {
      throw new RangeError(`${this.id}: content outside the drawing`)
    }
  }

  text(value: string, x: number, top: number, width: number, style: TextStyle = {}, clip?: Box): number {
    const size = style.size ?? 22
    const weight = style.weight ?? 400
    const leading = size + 8
    const rows = wrap(value, width, size, weight)
    const markup: string[] = []
    for (const [index, row] of rows.entries()) {
      const estimated = measure(row, size, weight)
      const left = x + (style.align === 'center' ? (width - estimated) / 2 : style.align === 'right' ? width - estimated : 0)
      const y = top + index * leading
      const full = { x: left, y, width: estimated, height: leading }
      const visible = clip ? intersection(full, clip) : full
      if (visible) {
        this.checkBox(visible)
        this.bounds.push({ ...visible, value: row })
      }
      markup.push(element('text', {
        x: left + 3, y: y + size, 'font-size': size, 'font-weight': weight,
        fill: style.fill ?? C.ink, textLength: estimated - 6, lengthAdjust: 'spacingAndGlyphs',
        'text-decoration': style.underline ? 'underline' : 'none',
      }, escapeXml(row)))
    }
    if (clip) {
      this.checkBox(clip)
      const id = `${this.id}-text-clip-${this.serial++}`
      this.definitions.push(element('clipPath', { id, clipPathUnits: 'userSpaceOnUse' },
        rect(clip.x, clip.y, clip.width, clip.height, C.white, 'none')))
      this.add(element('g', { 'clip-path': `url(#${id})`, 'data-intentional-clip': 'true' }, markup.join('')))
    } else this.add(markup.join(''))
    return rows.length * leading
  }

  button(value: string, x: number, y: number, width: number, height = 54, kind: 'primary' | 'secondary' | 'pending' = 'primary', size: FontSize = 24): void {
    const textHeight = wrap(value, width - 24, size, 700).length * (size + 8)
    if (textHeight > height - 12) throw new RangeError(`${this.id}: button label needs more space: ${value}`)
    this.add(rect(x, y, width, height,
      kind === 'primary' ? C.ink : kind === 'pending' ? C.pale : C.white,
      kind === 'pending' ? C.rule : C.ink, 7))
    this.text(value, x + 12, y + (height - textHeight) / 2, width - 24, {
      size, weight: 700, align: 'center', fill: kind === 'primary' ? C.white : C.ink,
    })
  }

  field(label: string, value: string, x: number, top: number, width: number, error = false): void {
    if (wrap(label, width, 22, 400).length !== 1 || wrap(value, width - 24, 24, 400).length !== 1) {
      throw new RangeError(`${this.id}: field needs more space: ${label}`)
    }
    this.text(label, x, top, width)
    this.add(rect(x, top + 36, width, 52, C.white, error ? C.red : C.ink, 5))
    this.text(value, x + 12, top + 46, width - 24, { size: 24 })
  }

  badge(value: number, cx: number, cy: number): void {
    this.add(circle(cx, cy, 18, C.ink, C.ink))
    this.text(String(value), cx - 18, cy - 15, 36, { weight: 700, fill: C.white, align: 'center' })
  }

  art(x: number, y: number, width: number, height: number, body: string, sourceWidth = 360, sourceHeight = 220): void {
    this.checkBox({ x, y, width, height })
    if (sourceWidth <= 0 || sourceHeight <= 0) throw new RangeError('Empty design UX artwork')
    const scale = Math.min(width / sourceWidth, height / sourceHeight)
    const id = `${this.id}-art-${this.serial++}`
    this.definitions.push(element('clipPath', { id, clipPathUnits: 'userSpaceOnUse' }, rect(x, y, width, height, C.white, 'none')))
    this.add(rect(x, y, width, height, C.ivory, 'none'),
      element('g', { 'clip-path': `url(#${id})` },
        group(x + (width - sourceWidth * scale) / 2, y + (height - sourceHeight * scale) / 2, scale, body)),
      rect(x, y, width, height, 'none', C.rule, 3))
  }

  checkerboard(x: number, y: number, width: number, height: number): void {
    this.checkBox({ x, y, width, height })
    const id = `${this.id}-checker-${this.serial++}`
    this.definitions.push(element('pattern', { id, width: 24, height: 24, patternUnits: 'userSpaceOnUse' },
      rect(0, 0, 24, 24, C.white, 'none') + rect(0, 0, 12, 12, C.pale, 'none') + rect(12, 12, 12, 12, C.pale, 'none')))
    this.add(rect(x, y, width, height, `url(#${id})`, C.rule, 3))
  }

  footer(value: string): void {
    const height = wrap(value, 656, 22, 400).length * 30
    const top = this.height - 26 - height
    this.add(line(32, top - 14, 688, top - 14))
    this.text(value, 32, top, 656, { fill: C.muted })
  }

  render(): Graphic {
    // Check the visible portions of deliberately clipped text; every other line
    // must fit in full. Shapes containing their own labels are not collisions.
    for (let i = 0; i < this.bounds.length; i++) {
      for (let j = i + 1; j < this.bounds.length; j++) {
        if (intersection(this.bounds[i], this.bounds[j])) {
          throw new RangeError(`${this.id}: text overlap: ${this.bounds[i].value} / ${this.bounds[j].value}`)
        }
      }
    }
    const titleId = `${this.id}-title`
    const descId = `${this.id}-desc`
    return {
      width: WIDTH, height: this.height,
      svg: element('svg', {
        xmlns: 'http://www.w3.org/2000/svg', width: WIDTH, height: this.height,
        viewBox: `0 0 ${WIDTH} ${this.height}`, role: 'img', focusable: 'false',
        'aria-labelledby': titleId, 'aria-describedby': descId,
        'font-family': 'Arial, sans-serif', 'font-size': 22,
        'data-layout-guard': 'estimated-arial-line-boxes',
      }, element('title', { id: titleId }, escapeXml(this.title))
        + element('desc', { id: descId }, escapeXml(this.description))
        + element('defs', {}, this.definitions.join(''))
        + rect(0, 0, WIDTH, this.height, C.ivory, 'none')
        + element('g', { 'aria-hidden': 'true' }, this.parts.join(''))),
    }
  }
}

// Reused artwork stays identical across states. Only its frame or scale changes.
function leafDrawing(): string {
  return line(42, 205, 316, 205, C.rule, 1)
    + path('M 91 198 C 105 162 95 89 128 55 Q 139 41 149 49', 'none', C.green, 5)
    + path('M 149 49 C 195 24 256 49 278 99 C 295 137 285 170 289 193 C 241 174 205 148 181 113 C 164 88 156 68 149 49 Z', C.leaf, C.ink, 2.5)
    + path('M 149 49 C 197 66 248 121 285 187', 'none', C.green, 3)
    + path('M 174 65 L 190 49 M 195 83 L 224 64 M 218 108 L 254 88 M 239 138 L 278 121 M 258 161 L 286 151', 'none', C.green, 1.5)
    + path('M 184 74 L 180 99 M 207 96 L 210 140 M 229 123 L 242 163 M 252 153 L 264 180', 'none', C.green, 1.5)
    + ellipse(90, 200, 9, 3, C.shade)
}

function potteryDrawing(): string {
  return rect(22, 184, 316, 14, C.shade, 'none', 2)
    + ellipse(112, 182, 71, 12, C.pale)
    + ellipse(248, 180, 54, 12, C.pale)
    + path('M 197 77 Q 212 48 217 29 H 256 Q 262 53 279 77 C 300 109 287 165 267 176 H 211 C 185 158 178 111 197 77 Z', C.clay, C.ink, 3)
    + ellipse(237, 30, 20, 7, C.clayLight, C.ink)
    + ellipse(237, 30, 13, 3, C.ink)
    + path('M 199 112 Q 238 125 286 108 M 199 143 Q 242 157 281 139', 'none', C.clayLight, 7)
    + path('M 49 112 Q 51 169 79 181 H 144 Q 171 164 176 112 Z', C.clayLight, C.ink, 3)
    + ellipse(112, 112, 64, 18, C.clay, C.ink, 3)
    + ellipse(112, 110, 48, 10, C.ivory)
    + path('M 64 148 Q 111 163 162 148', 'none', C.clay, 4)
}

function tree(x: number, y: number, scale = 1): string {
  return group(x, y, scale,
    path('M 0 24 V 42', 'none', C.green, 3)
    + path('M 0 0 C -17 5 -21 22 -10 29 Q 0 35 10 29 C 23 19 16 4 0 0 Z', C.leaf, C.green, 2)
    + path('M 0 9 V 27 M 0 21 L -7 15 M 0 25 L 8 18', 'none', C.green, 1))
}

function parkDrawing(): string {
  return path('M 13 31 Q 97 7 168 26 Q 243 7 344 24 L 342 184 Q 251 193 187 181 Q 89 196 19 181 Z', '#EDF0E4', C.rule)
    + path('M 32 13 C 78 47 32 80 76 111 C 112 137 75 168 91 196 L 114 196 C 98 157 139 135 98 101 C 60 69 101 37 60 9 Z', C.blue, C.water, 1.5)
    + path('M 153 58 C 167 39 221 39 234 65 C 245 91 220 108 188 100 C 150 105 139 81 153 58 Z', C.blue, C.water, 1.5)
    + path('M 171 191 L 174 149 Q 178 123 225 126 L 301 146 M 177 143 Q 144 123 126 85 L 115 41', 'none', C.ivory, 12)
    + path('M 171 191 L 174 149 Q 178 123 225 126 L 301 146 M 177 143 Q 144 123 126 85 L 115 41', 'none', C.muted, 2.5, '7 5')
    + tree(269, 28, .8) + tree(305, 45, .65) + tree(137, 136, .65) + tree(40, 130, .65)
    + path('M 265 157 H 324 V 182 H 265 Z M 258 157 L 295 136 L 332 157 Z', C.clayLight, C.ink, 2)
    + rect(288, 166, 13, 16, C.ivory, C.ink, 0, 1)
    + line(243, 81, 282, 81, C.ink, 3) + line(249, 82, 249, 94, C.ink, 2) + line(276, 82, 276, 94, C.ink, 2)
}

function staircaseDrawing(): string {
  let steps = path('M 176 216 L 320 156 V 60 L 296 70 V 86 L 272 96 V 112 L 248 122 V 138 L 224 148 V 164 L 200 174 V 190 L 176 200 Z', C.shade, C.ink, 2)
  for (let i = 5; i >= 0; i--) {
    const x = 48 + i * 24
    const y = 200 - i * 26
    steps += path(`M ${n(x)} ${n(y)} H ${n(x + 128)} L ${n(x + 152)} ${n(y - 10)} H ${n(x + 24)} Z`, C.ivory, C.ink, 2)
      + rect(x, y, 128, 16, C.pale, C.ink, 0, 1.5)
      + line(x + 7, y + 7, x + 120, y + 7, C.rule, 1)
  }
  return line(22, 217, 343, 217, C.rule, 1) + steps
    + [0, 2, 4, 5].map((i) => line(44 + i * 24, 200 - i * 26, 44 + i * 24, 162 - i * 26, C.ink, 3)).join('')
    + path('M 44 162 L 164 32 L 188 22', 'none', C.ink, 4)
}

function bookingDate(): Graphic {
  const p = new Plate(25, 1000, 'Review the date before confirming',
    'Three fictional booking components show Saturday with Change date, a selected Sunday, and Review change with Confirm and Cancel. Sunday is only proposed; no booking has been changed, and Cancel keeps Saturday.',
    'Illustrative booking states; no transaction')
  p.add(rect(32, 134, 656, 214, C.white, C.ink, 12))
  p.text('1  Your booking', 52, 150, 612, { size: 26, weight: 700 })
  p.art(52, 194, 148, 132, potteryDrawing())
  p.text('Pottery workshop', 220, 196, 440, { size: 24, weight: 700 })
  p.text('Saturday', 220, 244, 184, { size: 26 })
  p.button('Change date', 420, 238, 244, 54, 'secondary')
  p.text('Your current booking', 220, 302, 440)

  p.add(rect(32, 374, 656, 204, C.white, C.ink, 12))
  p.text('2  Choose a day', 52, 390, 612, { size: 26, weight: 700 })
  p.add(circle(76, 464, 12), rect(354, 436, 310, 56, C.rose, C.red, 7),
    circle(378, 464, 12, C.white, C.red), circle(378, 464, 6, C.red, 'none'))
  p.text('Saturday', 98, 447, 236, { size: 24 })
  p.text('Sunday', 402, 447, 242, { size: 24, weight: 700 })
  p.text('Sunday selected', 52, 519, 284)
  p.button('Review change', 354, 508, 310, 54)

  p.add(rect(32, 604, 656, 286, C.white, C.ink, 12))
  p.text('3  Review change', 52, 620, 612, { size: 26, weight: 700 })
  p.text('Current: Saturday', 52, 669, 422, { size: 24 })
  p.text('Proposed: Sunday', 52, 713, 422, { size: 24, weight: 700 })
  p.art(506, 665, 158, 88, potteryDrawing())
  p.button('Confirm', 52, 773, 274)
  p.button('Cancel', 350, 773, 314, 54, 'secondary')
  p.text('Not confirmed. Cancel keeps Saturday.', 52, 845, 612)
  p.footer('The proposed date is not a completed booking change.')
  return p.render()
}

function galleryActions(): Graphic {
  const p = new Plate(26, 840, 'Name the two gallery actions',
    'An original Bent stem leaf drawing and a separate title sit above a View study link and a Keep offline button with distinct targets. Numbered focus stops put the outlined link first and the button second; this is a focus plan, not tested keyboard or storage behavior.',
    'Illustrative gallery card; planned focus order')
  p.add(rect(72, 136, 576, 580, C.white, C.ink, 12))
  p.art(96, 158, 528, 280, leafDrawing())
  p.text('Bent stem', 96, 461, 528, { size: 28, weight: 700 })
  p.text('Original leaf study', 96, 502, 528)
  p.add(rect(138, 550, 206, 76, 'none', C.red, 7, 3), rect(144, 556, 194, 64, C.white, C.rule, 4))
  p.badge(1, 110, 588)
  p.text('View study', 154, 572, 174, { size: 24, underline: true, align: 'center' })
  p.badge(2, 386, 588)
  p.button('Keep offline', 420, 556, 204, 64, 'primary', 22)
  p.text('Opens the study', 96, 647, 248)
  p.text('Requests a local copy', 382, 647, 242)
  p.footer('The outlined link is focus stop 1. Verify Tab in a live UI.')
  return p.render()
}

function offlineMapStates(): Graphic {
  const p = new Plate(27, 1020, 'A download is not an offline copy',
    'The same original park sketch appears in ready, downloading, interrupted-update and available-offline components. The pending state gives no percentage or duplicate action; Retry retains an older saved map, while Open saved map follows confirmed storage in this fictional example.',
    'Illustrative map states; no actual download')
  const states = [
    { x: 32, y: 132, title: 'Ready', status: 'Park map', note: 'No offline copy yet.', action: 'Download area', kind: 'primary' },
    { x: 372, y: 132, title: 'Downloading', status: 'Downloading park map', note: 'Please wait. No second request.', action: 'Downloading...', kind: 'pending' },
    { x: 32, y: 546, title: 'Interrupted', status: 'Download interrupted', note: 'Older saved map retained.', action: 'Retry', kind: 'secondary' },
    { x: 372, y: 546, title: 'Available offline', status: 'Park map', note: 'Storage confirmed in this example.', action: 'Open saved map', kind: 'primary' },
  ] as const
  for (const state of states) {
    const { x, y } = state
    p.add(rect(x, y, 316, 394, C.white, C.ink, 10))
    p.text(state.title, x + 16, y + 16, 284, { size: 26, weight: 700 })
    p.art(x + 16, y + 64, 284, 140, parkDrawing(), 360, 200)
    p.text(state.status, x + 16, y + 218, 284, { weight: 700 })
    p.text(state.note, x + 16, y + 254, 284)
    p.button(state.action, x + 16, y + 320, 284, 54, state.kind, 22)
  }
  p.footer('A pending request is not proof of offline storage.')
  return p.render()
}

function checkoutRepair(): Graphic {
  const p = new Plate(28, 996, 'Repair the email. Keep the basket.',
    'The first fictional checkout retains two leaf prints, pickup name Lee and lee@ while adding the nearby error Add the part after @. The corrected review retains the same basket and name with the example address lee@example.test; no order is placed and deliverability is not asserted.',
    'Illustrative checkout; no purchase or payment')
  p.add(rect(32, 136, 656, 406, C.white, C.ink, 12))
  p.text('1  Repair receipt email', 52, 150, 612, { size: 26, weight: 700 })
  p.add(rect(52, 198, 612, 88, C.pale, 'none', 5))
  p.art(64, 205, 68, 72, leafDrawing())
  p.text('Basket: 2 leaf prints', 152, 222, 492, { size: 24, weight: 700 })
  p.field('Pickup name', 'Lee', 52, 302, 238)
  p.field('Receipt email', 'lee@', 326, 302, 338, true)
  p.text('Pickup name kept', 52, 408, 238)
  p.text('Add the part after @', 338, 406, 312, { fill: C.red, weight: 700 })
  p.text('Example: lee@example.test', 338, 444, 312)
  p.button('Review order', 52, 466, 238, 54)

  p.add(rect(32, 576, 656, 340, C.white, C.ink, 12))
  p.text('2  Corrected review', 52, 592, 612, { size: 26, weight: 700 })
  p.add(rect(52, 640, 612, 88, C.pale, 'none', 5))
  p.art(64, 647, 68, 72, leafDrawing())
  p.text('Basket: 2 leaf prints', 152, 664, 492, { size: 24, weight: 700 })
  p.field('Pickup name', 'Lee', 52, 746, 238)
  p.field('Receipt email', 'lee@example.test', 326, 746, 338)
  p.text('Review only. No order placed.', 52, 860, 612)
  p.footer('Fix the known field error without discarding valid work.')
  return p.render()
}

function menuSearch(): Graphic {
  const p = new Plate(29, 970, 'Two menus, the same eight commands',
    'The flat alphabetical menu and the expanded File and Edit groups contain exactly the same eight commands, with Resize highlighted in both. File and Edit are shown open to expose their contents; the drawings predict no speed advantage and supply no measured search result.',
    'Illustrative menus; grouped contents shown open')
  const commands = [
    { label: 'Crop', group: 'Edit' }, { label: 'Export', group: 'File' },
    { label: 'Flip', group: 'Edit' }, { label: 'Import', group: 'File' },
    { label: 'Print', group: 'File' }, { label: 'Rename', group: 'File' },
    { label: 'Resize', group: 'Edit' }, { label: 'Rotate', group: 'Edit' },
  ] as const
  p.text('Goal: smaller pixel width, without cutting the picture.', 32, 132, 656)
  p.text('Alphabetical list', 48, 185, 284, { size: 24, weight: 700 })
  p.text('Grouped menus', 388, 185, 284, { size: 24, weight: 700 })
  p.add(rect(32, 228, 316, 542, C.white, C.ink, 8), rect(372, 228, 316, 542, C.white, C.ink, 8))
  for (const [index, command] of commands.entries()) {
    const y = 242 + index * 62
    if (command.label === 'Resize') p.add(rect(48, y, 284, 50, C.rose, C.red, 4))
    p.text(command.label, 64, y + 9, 252, { size: 24, weight: command.label === 'Resize' ? 700 : 400 })
  }
  for (const [groupIndex, name] of (['File', 'Edit'] as const).entries()) {
    const top = groupIndex === 0 ? 242 : 493
    p.add(path(`M 392 ${n(top + 10)} L 410 ${n(top + 10)} L 401 ${n(top + 21)} Z`, C.ink, 'none'))
    p.text(name, 424, top, 240, { size: 24, weight: 700 })
    p.add(line(388, top + 38, 672, top + 38))
    for (const [index, command] of commands.filter((item) => item.group === name).entries()) {
      const y = top + 48 + index * 48
      if (command.label === 'Resize') p.add(rect(388, y - 4, 284, 44, C.rose, C.red, 4))
      p.text(command.label, 420, y + 2, 238, { size: 24, weight: command.label === 'Resize' ? 700 : 400 })
    }
  }
  p.text('Resize keeps the whole image.', 48, 806, 624)
  p.text('Crop removes part of the picture.', 48, 846, 624)
  p.footer('Fewer first-level labels do not predict the whole search.')
  return p.render()
}

function contrastOnWhite(color: string): number {
  if (!/^#[0-9A-F]{6}$/i.test(color)) throw new TypeError('Expected an opaque sRGB color')
  const channels = [1, 3, 5].map((offset) => {
    const channel = parseInt(color.slice(offset, offset + 2), 16) / 255
    return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4
  })
  const luminance = .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2]
  return 1.05 / (luminance + .05)
}

function captionContrast(): Graphic {
  const p = new Plate(30, 952, 'Contrast at the actual caption',
    'Identical captions use #777777 and #595959 on opaque #FFFFFF beside the same original leaf print. Their approximate ratios are 4.478:1 and 7.005:1; the unrounded values respectively fail and pass the ordinary-text AA threshold of 4.5:1, without establishing full WCAG conformance.',
    'Illustrative catalog; specified opaque sRGB colors')
  p.text('Both captions use the same words, size and weight.', 32, 132, 656)
  const caption = 'A5 print | pickup Saturday'
  for (const [index, color] of ['#777777', '#595959'].entries()) {
    const top = 180 + index * 306
    const ratio = contrastOnWhite(color)
    const passes = ratio >= 4.5 // Never classify using the rounded display string.
    p.add(rect(32, top, 656, 276, C.white, C.ink, 10))
    p.text(`Caption ${index === 0 ? 'A' : 'B'}: ${color}`, 52, top + 14, 612, { size: 24, weight: 700 })
    p.add(rect(52, top + 58, 340, 180, '#FFFFFF', C.rule, 4))
    p.art(68, top + 72, 84, 86, leafDrawing())
    p.text('Leaf study', 168, top + 86, 208, { size: 24 })
    p.text(caption, 68, top + 174, 308, { size: 22, weight: 400, fill: color })
    p.text(`${ratio.toFixed(3)}:1`, 422, top + 70, 238, { size: 28, weight: 700 })
    p.text(passes ? 'Above 4.5:1' : 'Below 4.5:1', 422, top + 120, 238)
    p.text(passes ? 'Ordinary AA: passes' : 'Ordinary AA: fails', 422, top + 166, 238, { weight: 700 })
  }
  p.text('Ordinary AA: 4.5:1. Large-text AA: 3:1.', 32, 794, 656)
  p.text('Large: at least 18 pt, or 14 pt bold.', 32, 834, 656)
  p.footer('Compare unrounded ratios with the applicable threshold.')
  return p.render()
}

function routeStatus(): Graphic {
  const p = new Plate(31, 914, 'Give each route a named status',
    'An original fictional map forks beside a pond: Riverside is dashed, crossed and labeled closed, while Garden is labeled open, with the same statuses repeated in a text list. Open does not assert safety or accessibility, and this invented drawing is not navigation advice.',
    'Invented routes; not navigation advice')
  p.add(rect(32, 136, 656, 500, C.white, C.ink, 10), rect(48, 152, 624, 466, '#F1F2E9', 'none', 4))
  p.text('Riverside: closed', 64, 170, 292, { size: 24, weight: 700, fill: '#923B36' })
  p.text('Garden: open', 406, 170, 246, { size: 24, weight: 700, fill: C.green })
  p.add(path('M 72 242 C 139 270 138 319 157 363 C 175 408 116 474 142 554 L 177 568 C 147 476 211 417 188 353 C 168 307 171 274 107 222 Z', C.blue, C.water, 2),
    path('M 284 301 C 305 278 363 285 389 305 C 425 341 387 379 342 371 C 300 384 266 354 278 326 Z', C.blue, C.water, 2),
    path('M 334 551 L 334 465 Q 334 437 348 424', 'none', C.muted, 7),
    path('M 348 424 Q 266 413 249 351 Q 227 290 150 269', 'none', '#923B36', 6, '12 8'),
    path('M 348 424 Q 445 424 491 357 L 538 297', 'none', C.green, 6),
    circle(348, 424, 7, C.white, C.ink),
    line(229, 337, 261, 369, C.ink, 6), line(261, 337, 229, 369, C.ink, 6),
    line(197, 211, 231, 320, '#923B36', 2), line(529, 211, 539, 282, C.green, 2),
    path('M 448 242 L 480 226 L 503 255 L 471 271 Z M 504 242 L 536 226 L 559 255 L 527 271 Z M 560 242 L 592 226 L 615 255 L 583 271 Z', C.clayLight, C.green, 2),
    tree(597, 401, 1.1), tree(539, 475, .85), tree(245, 483, .8), tree(83, 488, .7))
  p.text('Pond', 300, 318, 92)
  p.text('Fork', 365, 447, 120)
  p.text('Entrance', 266, 566, 200, { size: 24 })
  p.add(rect(32, 670, 656, 132, C.white, C.ink, 8))
  p.text('Matching route list', 52, 684, 612, { size: 24, weight: 700 })
  p.text('Riverside: closed', 52, 739, 296)
  p.text('Garden: open', 390, 739, 274)
  p.footer('The words and closure mark still work without hue.')
  return p.render()
}

function growingReminder(): Graphic {
  const p = new Plate(32, 914, 'Keep the label, not the row height',
    'Both component drawings contain Email me about changes to this journey at the same enlarged lettering and available width. An actual SVG clip cuts the fixed row; the taller row shows the complete wrapped label and moves Reminder help down, without claiming a live 200 percent resize test.',
    'Component drawing; not a screenshot or zoom test')
  const reminder = 'Email me about changes to this journey'
  p.text('Same words, width and enlarged lettering.', 32, 132, 656)
  p.text('Fixed-height row', 48, 186, 624, { size: 24, weight: 700 })
  p.add(rect(48, 226, 624, 224, C.white, C.ink, 10), rect(72, 252, 400, 66, C.ivory, C.ink, 4),
    rect(88, 267, 28, 28, C.white, C.ink, 3))
  p.text(reminder, 134, 264, 310, { size: 28 }, { x: 128, y: 254, width: 336, height: 62 })
  p.add(line(128, 318, 464, 318, C.red, 3), line(496, 252, 496, 318, C.red),
    line(488, 252, 504, 252, C.red), line(488, 318, 504, 318, C.red))
  p.text('Fixed\nheight', 520, 253, 132)
  p.text('Reminder help', 88, 344, 368, { underline: true })
  p.text('Journey details', 88, 398, 368)

  p.text('Growing row', 48, 486, 624, { size: 24, weight: 700 })
  p.add(rect(48, 526, 624, 240, C.white, C.ink, 10), rect(72, 556, 400, 100, C.ivory, C.ink, 4),
    rect(88, 571, 28, 28, C.white, C.ink, 3), line(496, 556, 496, 656, C.green),
    line(488, 556, 504, 556, C.green), line(488, 656, 504, 656, C.green))
  p.text(reminder, 134, 568, 310, { size: 28 })
  p.text('Row\ngrows', 520, 574, 132)
  p.text('Reminder help', 88, 682, 368, { underline: true })
  p.text('Journey details', 88, 730, 368)
  p.text('The complete label stays beside its checkbox.', 32, 794, 656)
  p.footer('Following content moves down instead of covering the label.')
  return p.render()
}

function saveIcon(cx: number, cy: number): string {
  // The same 48-unit icon canvas is used inside both target sizes.
  return group(cx - 24, cy - 24, 1, path('M 8 4 H 40 V 44 L 24 32 L 8 44 Z', C.ink, 'none'))
}

function removeIcon(cx: number, cy: number): string {
  return group(cx - 24, cy - 24, 1,
    path('M 12 15 H 36 L 33 44 H 15 Z', 'none', C.ink, 3)
    + path('M 6 11 H 42 M 18 11 V 4 H 30 V 11 M 20 20 V 37 M 28 20 V 37', 'none', C.ink, 3))
}

function targetSquare(x: number, y: number, side: number): string {
  // Inset the visual stroke so the outer target boundary remains exactly side.
  return rect(x, y, side, side, C.pale, 'none')
    + rect(x + 1, y + 1, side - 2, side - 2, 'none', C.ink, 0, 2)
}

function horizontalDimension(x1: number, x2: number, y: number): string {
  return line(x1, y, x2, y, C.ink)
    + line(x1, y - 6, x1, y + 6, C.ink)
    + line(x2, y - 6, x2, y + 6, C.ink)
}

function pointerTargets(): Graphic {
  const p = new Plate(33, 1036, 'Measure targets, not icon strokes',
    'At four SVG units per stated CSS pixel, 20-by-20 targets with a 2-pixel gap have centers 22 apart and overlapping 24-diameter spacing circles; 32-by-32 targets with an 8-pixel gap have centers 40 apart and meet the basic size check. The Save and Remove artwork is unchanged; this scaled diagram is not a CSS-pixel ruler, comfort study or full assessment of the criterion and its exceptions.',
    'Hypothetical geometry; icon artwork unchanged')
  const scale = 4
  const minimum = 24
  const small = 20 * scale
  const smallGap = 2 * scale
  const smallX = 104
  const smallY = 262
  const leftCenter = smallX + small / 2
  const rightCenter = smallX + small + smallGap + small / 2
  const cy = smallY + small / 2
  const radius = minimum * scale / 2
  p.add(rect(32, 166, 656, 366, C.white, C.ink, 10))
  p.text('20 x 20 targets; gap 2', 48, 183, 624, { size: 26, weight: 700 })
  p.add(targetSquare(smallX, smallY, small), targetSquare(smallX + small + smallGap, smallY, small),
    saveIcon(leftCenter, cy), removeIcon(rightCenter, cy))
  const overlapId = `${p.id}-spacing-intersection`
  p.definitions.push(element('clipPath', { id: overlapId, clipPathUnits: 'userSpaceOnUse' }, circle(leftCenter, cy, radius, C.white, 'none')))
  p.add(element('g', { 'clip-path': `url(#${overlapId})`, opacity: .28 }, circle(rightCenter, cy, radius, C.red, 'none')),
    circle(leftCenter, cy, radius, 'none', C.red, 2, '5 4'), circle(rightCenter, cy, radius, 'none', C.red, 2, '5 4'),
    circle(leftCenter, cy, 3, C.red, 'none'), circle(rightCenter, cy, 3, C.red, 'none'),
    horizontalDimension(leftCenter, rightCenter, 239))
  p.text('Save', leftCenter - 60, 372, 120, { align: 'center' })
  p.text('Remove', rightCenter - 62, 372, 124, { align: 'center' })
  p.add(horizontalDimension(smallX, smallX + small, 432), horizontalDimension(smallX + small, smallX + small + smallGap, 432))
  p.text('20', smallX, 447, small, { align: 'center' })
  p.text('24-diameter circles', 380, 237, 284)
  p.text('Centers: 20 + 2 = 22', 380, 280, 284)
  p.text('22 < 24: circles overlap', 380, 323, 284)
  p.text('Below the size minimum', 380, 388, 284)
  p.text('Other exceptions not assessed.', 380, 429, 284)

  const large = 32 * scale
  const largeGap = 8 * scale
  const largeX = 64
  const largeY = 650
  const firstCenter = largeX + large / 2
  const secondCenter = largeX + large + largeGap + large / 2
  const largeCy = largeY + large / 2
  p.add(rect(32, 550, 656, 358, C.white, C.ink, 10))
  p.text('32 x 32 targets; gap 8', 48, 567, 624, { size: 26, weight: 700 })
  p.add(targetSquare(largeX, largeY, large), targetSquare(largeX + large + largeGap, largeY, large),
    saveIcon(firstCenter, largeCy), removeIcon(secondCenter, largeCy),
    horizontalDimension(firstCenter, secondCenter, 624))
  p.text('Save', firstCenter - 62, 805, 124, { align: 'center' })
  p.text('Remove', secondCenter - 62, 805, 124, { align: 'center' })
  p.text('Centers: 32 + 8 = 40', 390, 645, 274)
  p.text('32 >= 24 on each side', 390, 687, 274)
  p.text('Basic size check met.', 390, 733, 274)
  p.text('Not a comfort or full accessibility verdict.', 390, 778, 274)
  p.footer('4x diagram: 1 stated CSS px = 4 SVG units.\nNot a CSS-pixel ruler or a live target test.')
  return p.render()
}

function seedPacket(p: Plate, x: number, y: number): void {
  // Absolute label coordinates keep BASIL at 22 units in both previews.
  p.add(path(`M ${n(x + 10)} ${n(y)} H ${n(x + 110)} L ${n(x + 120)} ${n(y + 12)} V ${n(y + 158)} H ${n(x)} V ${n(y + 12)} Z`, '#F5EBDD', C.ink, 2),
    line(x + 6, y + 146, x + 114, y + 146, C.rule, 1),
    line(x + 10, y, x + 17, y + 10, C.rule, 1), line(x + 110, y, x + 103, y + 10, C.rule, 1))
  p.text('BASIL', x + 12, y + 14, 96, { weight: 700, align: 'center', fill: C.green })
  p.add(group(x + 15, y + 49, 1,
    path('M 43 79 C 44 55 45 31 46 5', 'none', C.green, 3)
    + path('M 46 25 C 18 24 8 9 18 2 C 34 0 43 10 46 25 Z M 45 44 C 65 44 80 27 72 18 C 55 19 47 30 45 44 Z M 44 66 C 19 68 7 51 14 42 C 29 42 41 51 44 66 Z M 44 79 C 66 77 80 59 72 51 C 55 55 49 66 44 79 Z', C.leaf, C.green, 1.5)
    + path('M 21 7 L 46 25 M 68 24 L 45 44 M 19 48 L 44 66 M 68 57 L 44 79', 'none', C.green, 1)
    + ellipse(17, 87, 4, 2, C.clay) + ellipse(27, 89, 4, 2, C.clay) + ellipse(68, 88, 4, 2, C.clay)))
}

function exportDisclosure(): Graphic {
  const p = new Plate(34, 1046, 'Disclosure without hiding the result',
    'The same original basil seed-packet design appears with a checkerboard representing transparent surroundings and with the white surroundings of a JPEG copy. Filename, format, destination, conversion notice, unchanged-original summary and Save a copy remain visible while Image quality options is collapsed; no export is performed.',
    'Illustrative export panel; original artwork')
  p.add(rect(32, 132, 656, 836, C.white, C.ink, 12))
  p.text('Export a copy', 52, 148, 612, { size: 26, weight: 700 })
  p.text('Original', 52, 194, 268, { weight: 700 })
  p.text('JPEG copy', 404, 194, 260, { weight: 700 })
  p.checkerboard(52, 238, 268, 174)
  p.add(rect(404, 238, 260, 174, C.white, C.rule, 3))
  seedPacket(p, 126, 246)
  seedPacket(p, 474, 246)
  p.add(line(338, 326, 384, 326, C.red, 3), path('M 374 316 L 384 326 L 374 336', 'none', C.red, 3))
  p.text('Transparent surround', 52, 423, 268)
  p.text('White surround', 404, 423, 260)
  p.field('Filename', 'seed-packet.jpg', 52, 472, 376)
  p.field('Format', 'JPEG', 452, 472, 212)
  p.add(path('M 629 530 H 645 L 637 540 Z', C.ink, 'none'))
  p.field('Destination', 'Pictures / Prints', 52, 578, 612)
  p.text('JPEG replaces transparency with white.', 52, 684, 612, { weight: 700 })
  p.add(rect(52, 730, 612, 56, C.ivory, C.ink, 5), path('M 70 749 L 70 767 L 81 758 Z', C.ink, 'none'))
  p.text('Image quality options', 94, 741, 372, { size: 24 })
  p.text('Optional', 500, 743, 146, { align: 'right', fill: C.muted })
  p.add(rect(52, 802, 612, 80, C.pale, 'none', 5))
  p.text('Copy to Pictures / Prints', 68, 810, 580)
  p.text('Original unchanged', 68, 846, 580, { weight: 700 })
  p.button('Save a copy', 52, 900, 264)
  p.text('Creates a new JPEG', 344, 912, 320)
  p.footer('Optional compression does not hide the export consequence.')
  return p.render()
}

function preparedStaircaseStates(): Graphic {
  const p = new Plate(35, 1030, 'Prepare the staircase states',
    'Four prepared fictional components show an original staircase sketch in Gallery, Study detail, Kept for later and Saved items, including controls for opening and keeping it. These are author-prepared responses to possible actions, not participant instructions, observed behavior or evidence of successful usability testing.',
    'Author preparation, not observed behavior')
  p.text('Keep this staircase sketch so you can return to it tomorrow.', 32, 132, 656)
  const cards = [
    { x: 32, y: 210, title: 'Gallery' }, { x: 372, y: 210, title: 'Study detail' },
    { x: 32, y: 582, title: 'Kept for later' }, { x: 372, y: 582, title: 'Saved items' },
  ] as const
  for (const card of cards) {
    p.add(rect(card.x, card.y, 316, 346, C.white, C.ink, 10))
    p.text(card.title, card.x + 16, card.y + 16, 284, { size: 26, weight: 700 })
  }
  p.art(64, 274, 252, 124, staircaseDrawing())
  p.text('Staircase', 48, 421, 284, { size: 24, weight: 700 })
  p.add(rect(48, 470, 284, 54, C.white, C.rule, 5))
  p.text('View study', 64, 481, 252, { size: 24, underline: true, align: 'center' })
  p.art(388, 264, 284, 154, staircaseDrawing())
  p.text('Staircase', 388, 432, 284, { size: 24, weight: 700 })
  p.button('Keep for later', 388, 480, 284, 54, 'primary', 22)

  p.art(48, 646, 108, 118, staircaseDrawing())
  p.text('Staircase', 174, 650, 156, { size: 22, weight: 700 })
  p.add(circle(202, 722, 22, C.leaf, C.green), path('M 190 722 L 199 731 L 214 712', 'none', C.green, 3))
  p.text('Kept', 238, 706, 92)
  p.text('Not shared publicly', 48, 800, 284)
  p.button('View saved items', 48, 850, 284, 54, 'secondary', 22)

  p.add(rect(388, 638, 284, 156, C.ivory, C.rule, 4))
  p.art(396, 648, 108, 130, staircaseDrawing())
  p.text('Staircase', 518, 662, 144, { weight: 700 })
  p.text('View study', 518, 709, 144, { underline: true })
  p.text('1 saved study', 388, 813, 284)
  p.text('Returns to study detail', 388, 860, 284)
  p.footer('Show a prepared state only after their chosen action.')
  return p.render()
}

function pickupOrder(): Graphic {
  const p = new Plate(36, 968, 'Put pickup details before Continue',
    'Both fictional pickup panels use identical print artwork, quotation, Saturday date, 14:00-16:00 time and Continue label. The proposed panel moves the date-and-time group before Continue; whether readers find the time or expect a review rather than confirmation remains untested.',
    'Fictional copy; only the information order changes')
  // Both variants paste the exact same copy; only the two block positions change.
  const copy = {
    title: 'Print pickup', quote: '"A little art,\na little pause."',
    dateLabel: 'Pickup date', date: 'Saturday', timeLabel: 'Collection time',
    time: '14:00-16:00', action: 'Continue',
  }
  p.text('Current panel', 48, 132, 284, { size: 24, weight: 700 })
  p.text('Proposed relationship', 388, 132, 284, { size: 24, weight: 700 })
  for (const [index, x] of [32, 372].entries()) {
    p.add(rect(x, 184, 316, 676, C.white, C.ink, 10))
    p.text(copy.title, x + 20, 207, 276, { size: 26, weight: 700 })
    p.art(x + 20, 254, 276, 154, leafDrawing())
    p.text(copy.quote, x + 20, 438, 276, { size: 24, fill: C.muted })
    const detailTop = index === 0 ? 616 : 536
    const actionTop = index === 0 ? 536 : 726
    p.text(copy.dateLabel, x + 20, detailTop, 276, { fill: C.muted })
    p.text(copy.date, x + 20, detailTop + 34, 276, { size: 24 })
    p.text(copy.timeLabel, x + 20, detailTop + 84, 276, { fill: C.muted })
    p.text(copy.time, x + 20, detailTop + 118, 276, { size: 24, fill: C.muted })
    p.button(copy.action, x + 20, actionTop, 276, 56)
  }
  p.footer('Retest time lookup and what the Continue label means.')
  return p.render()
}

const PRIMARY = new Map<string, () => Graphic>([
  ['design-025', bookingDate],
  ['design-026', galleryActions],
  ['design-027', offlineMapStates],
  ['design-028', checkoutRepair],
  ['design-029', menuSearch],
  ['design-030', captionContrast],
  ['design-031', routeStatus],
  ['design-032', growingReminder],
  ['design-033', pointerTargets],
  ['design-034', exportDisclosure],
  ['design-035', preparedStaircaseStates],
  ['design-036', pickupOrder],
])

export function designUxOverride(id: string, index: number): { svg: string; width: number; height: number } | null {
  if (index !== 0) return null
  const render = PRIMARY.get(id)
  return render ? render() : null
}