// Original primary illustrations for all 24 records in src/teaching/cinema-camera.ts.
// These are drawn examples, not captured footage, calibrated optics, or phone UI.
// Keep this module pure: asset generation and secondary visuals belong to the caller.

type CameraVisual = { svg: string; width: number; height: number }
type Attributes = Readonly<Record<string, string | number>>

const WIDTH = 720
const C = {
  ink: '#231f20', ivory: '#f7f4ed', red: '#bc2031', muted: '#69635f',
  paper: '#fffdf5', pale: '#e6dfd3', table: '#dfc9a9', wood: '#b98b60',
  blue: '#557986', green: '#657e51', leaf: '#91a56c', clay: '#bd7954',
  skin: '#deb18d', white: '#ffffff', darkBlue: '#354d59',
}

function escapeXml(value: string): string {
  const valid = Array.from(value, (character) => {
    const code = character.codePointAt(0) ?? 0
    return code === 9 || code === 10 || code === 13
      || (code >= 0x20 && code <= 0xd7ff)
      || (code >= 0xe000 && code <= 0xfffd)
      || (code >= 0x10000 && code <= 0x10ffff) ? character : '\ufffd'
  }).join('')
  return valid.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character)
}

function number(value: number): string {
  if (!Number.isFinite(value)) throw new RangeError('Non-finite camera drawing coordinate')
  return String(Math.round(value * 10000) / 10000)
}

function element(name: string, attributes: Attributes, body = ''): string {
  // Element and attribute names are internal constants, never lesson/user input.
  const attributesText = Object.entries(attributes).map(([key, value]) =>
    ` ${key}="${escapeXml(typeof value === 'number' ? number(value) : value)}"`,
  ).join('')
  return `<${name}${attributesText}>${body}</${name}>`
}

function rect(x: number, y: number, width: number, height: number, fill: string = C.paper, stroke: string = C.ink, radius = 0): string {
  return element('rect', { x, y, width, height, rx: radius, fill, stroke, 'stroke-width': 2.5 })
}

function path(d: string, fill = 'none', stroke: string = C.ink, width = 2.5): string {
  return element('path', { d, fill, stroke, 'stroke-width': width })
}

function line(x1: number, y1: number, x2: number, y2: number, stroke: string = C.ink, dash = ''): string {
  return element('line', { x1, y1, x2, y2, stroke, 'stroke-width': 2.5, 'stroke-dasharray': dash })
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string = C.paper, stroke: string = C.ink): string {
  return element('ellipse', { cx, cy, rx, ry, fill, stroke, 'stroke-width': 2.5 })
}

function circle(cx: number, cy: number, radius: number, fill: string = C.ink, stroke = 'none'): string {
  return element('circle', { cx, cy, r: radius, fill, stroke, 'stroke-width': 2.5 })
}

function group(x: number, y: number, scale: number, body: string, rotation = 0): string {
  return element('g', { transform: `translate(${number(x)} ${number(y)}) rotate(${number(rotation)}) scale(${number(scale)})` }, body)
}

function text(x: number, y: number, value: string, size = 24, fill: string = C.ink, weight = 400, anchor = 'start'): string {
  return element('text', {
    x, y, 'font-size': size, 'font-weight': weight, fill, 'text-anchor': anchor,
    'data-drawn-text': 'true',
  }, escapeXml(value))
}

function lines(x: number, y: number, values: readonly string[], size = 22, fill: string = C.ink, weight = 400): string {
  return values.map((value, index) => text(x, y + index * 29, value, size, fill, weight)).join('')
}

function arrow(x1: number, y1: number, x2: number, y2: number, color: string = C.red, dashed = false): string {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const a = angle + Math.PI * .83
  const b = angle - Math.PI * .83
  return line(x1, y1, x2, y2, color, dashed ? '7 6' : '')
    + path(`M ${number(x2 + 12 * Math.cos(a))} ${number(y2 + 12 * Math.sin(a))} L ${number(x2)} ${number(y2)} L ${number(x2 + 12 * Math.cos(b))} ${number(y2 + 12 * Math.sin(b))}`, 'none', color, 3.5)
}

function cross(x: number, y: number, radius = 12): string {
  return line(x - radius, y - radius, x + radius, y + radius, C.red)
    + line(x - radius, y + radius, x + radius, y - radius, C.red)
}

class Plate {
  id: string
  height: number
  title: string
  description: string
  parts: string[] = []
  definitions: string[] = []
  serial = 0

  constructor(lesson: number, height: number, title: string, description: string) {
    this.id = `camera-${String(lesson).padStart(3, '0')}`
    this.height = height
    this.title = title
    this.description = description
  }

  add(...parts: string[]): void { this.parts.push(...parts) }

  frame(x: number, y: number, width: number, height: number, body: string, background: string = C.table): string {
    const id = `${this.id}-frame-${this.serial++}`
    this.definitions.push(element('clipPath', { id, clipPathUnits: 'userSpaceOnUse' }, rect(0, 0, width, height, C.white, 'none')))
    return group(x, y, 1,
      rect(0, 0, width, height, background, 'none')
      + element('g', { 'clip-path': `url(#${id})` }, body)
      + rect(0, 0, width, height, 'none'),
    )
  }

  blur(body: string, deviation = 4): string {
    const id = `${this.id}-blur-${this.serial++}`
    this.definitions.push(element('filter', {
      id, x: '-40%', y: '-40%', width: '180%', height: '180%',
      'color-interpolation-filters': 'sRGB',
    }, element('feGaussianBlur', { stdDeviation: deviation })))
    return element('g', { filter: `url(#${id})` }, body)
  }

  footer(values: readonly string[]): void {
    const y = this.height - 29 - (values.length - 1) * 29
    this.add(line(32, y - 27, 688, y - 27, C.pale), lines(32, y, values))
  }

  render(): CameraVisual {
    const titleId = `${this.id}-title`
    const descriptionId = `${this.id}-description`
    const body = element('title', { id: titleId }, escapeXml(this.title))
      + element('desc', { id: descriptionId }, escapeXml(this.description))
      + element('defs', {}, this.definitions.join(''))
      + rect(0, 0, WIDTH, this.height, C.ivory, 'none')
      + text(32, 34, this.id.toUpperCase().replace('-', ' '), 22, C.red, 700)
      + text(32, 73, this.title, 26, C.ink, 700)
      + line(32, 92, 688, 92, C.ink)
      + this.parts.join('')
    return {
      svg: element('svg', {
        xmlns: 'http://www.w3.org/2000/svg', width: WIDTH, height: this.height,
        viewBox: `0 0 ${WIDTH} ${this.height}`, role: 'img',
        'aria-labelledby': `${titleId} ${descriptionId}`,
        'font-family': 'Arial, Helvetica, sans-serif',
        'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      }, body),
      width: WIDTH, height: this.height,
    }
  }
}

// Shared props retain their identifying details across different views of an event.
function foldedNote(x: number, y: number, width = 88, height = 54, writing = ''): string {
  return rect(x, y, width, height, C.paper)
    + path(`M ${x} ${y} L ${x + width / 2} ${y + height * .53} L ${x + width} ${y}`)
    + line(x, y + height, x + width * .32, y + height * .49, C.muted)
    + (writing ? text(x + width / 2, y + height * .76, writing, 24, C.ink, 700, 'middle') : '')
}

function rightHand(x: number, y: number, scale = 1, rotation = 0): string {
  // Dorsal right hand: fingers point left, thumb lies below; rotations do not mirror it.
  return group(x, y, scale,
    path('M 146 27 L 107 25 C 87 8 67 6 41 10 L 12 14 Q 2 17 9 26 L 53 25 L 9 32 Q 0 36 7 44 L 54 40 L 18 48 Q 8 53 16 61 L 61 52 L 39 63 Q 33 71 43 77 L 81 63 L 64 85 Q 58 94 68 98 Q 74 101 83 91 L 108 73 L 146 77 Z', C.skin)
    + path('M 83 34 Q 75 48 81 63 M 57 25 L 73 27 M 57 40 L 71 40', 'none', C.wood, 2)
    + rect(126, 25, 24, 53, C.blue), rotation,
  )
}

function leftHand(x: number, y: number, scale = 1): string {
  // Mirror only for two-handed support/folding, never the right-handed reset tests.
  return group(x, y, scale, element('g', { transform: 'translate(150 0) scale(-1 1)' }, rightHand(0, 0)))
}

function phonePlan(cx: number, cy: number, rotation = 0, scale = 1): string {
  // Zero degrees aims up the page; the lens is the short protrusion at the top.
  return group(cx, cy, scale,
    rect(-23, 0, 46, 30, C.darkBlue, C.ink, 4)
    + rect(-10, -9, 20, 9, C.ink)
    + rect(-16, 6, 24, 17, C.pale, 'none', 2)
    + circle(15, 15, 3, C.red), rotation,
  )
}

function paperArrow(cx: number, cy: number, width = 100): string {
  return group(cx - width / 2, cy - 35, 1,
    rect(0, 0, width, 70)
    + path(`M 0 0 L ${width * .18} 13 L ${width} 13`, 'none', C.pale)
    + path(`M 17 29 H ${width - 40} V 20 L ${width - 15} 42 L ${width - 40} 61 V 48 H 17 Z`, C.red, C.red),
  )
}

function shoes(): string {
  const shoe = (x: number, y: number, rotation: number) => group(x, y, 1,
    path('M 4 37 L 14 8 Q 31 -2 47 12 L 61 36 Q 85 40 99 52 L 100 69 L 6 69 Q -2 56 4 37 Z', C.blue)
    + path('M 5 59 Q 51 66 100 58 L 100 69 L 6 69 Z', C.paper)
    + path('M 20 14 L 45 18 L 57 39 L 29 43 Z', C.pale)
    + [0, 1, 2].map((i) => line(24 + i * 3, 23 + i * 7, 46 + i * 3, 22 + i * 7, C.ink)).join('')
    + path('M 65 45 Q 77 48 86 54 M 11 52 L 20 45', 'none', C.paper, 2), rotation)
  return shoe(0, 18, -9) + shoe(77, 0, 8)
}

function bag(x: number, y: number, scale = 1, openPocket = false): string {
  return group(x, y, scale,
    path('M 39 18 Q 35 -8 64 -8 Q 91 -8 88 18', 'none', C.darkBlue, 9)
    + path('M 23 18 Q 65 5 106 18 L 120 151 Q 62 174 8 151 Z', C.blue)
    + line(32, 28, 23, 149, C.pale)
    + rect(29, 85, 70, 65, C.red, C.ink, 8)
    + line(35, 140, 92, 140, C.paper, '4 5')
    + (openPocket ? ellipse(64, 88, 34, 12, C.darkBlue) : line(32, 91, 96, 91, C.paper))
    + circle(93, 94, 3, C.paper),
  )
}

function passSleeve(x: number, y: number, scale = 1): string {
  return group(x, y, scale,
    path('M 0 6 L 102 6 L 102 120 L 0 120 Z', C.paper)
    + path('M 0 6 Q 51 28 102 6 L 102 26 Q 51 45 0 26 Z', C.pale)
    + path('M 0 6 Q 51 -8 102 6 Q 51 28 0 6 Z', C.darkBlue)
    + line(8, 39, 8, 110, C.muted)
    + text(51, 80, 'PASS', 25, C.ink, 700, 'middle'),
  )
}

function plant(x: number, y: number, scale = 1): string {
  return group(x, y, scale,
    path('M -37 -50 L -27 0 L 26 0 L 36 -50 Z', C.clay)
    + ellipse(0, -50, 36, 9, C.wood)
    + path('M 0 -51 Q -7 -88 1 -134', 'none', C.green, 5)
    + path('M -2 -81 C -50 -73 -56 -111 -47 -116 C -22 -117 -7 -104 -2 -81 Z', C.green)
    + path('M -3 -101 C 46 -104 54 -138 42 -142 C 19 -140 4 -126 -3 -101 Z', C.leaf)
    + path('M 0 -127 C -31 -129 -36 -154 -25 -164 C -6 -164 7 -146 0 -127 Z', C.green)
    + line(-24, -106, -2, -84, C.ivory)
    + line(27, -132, 0, -104, C.ivory)
    + line(-25, -36, 25, -36, C.paper),
  )
}

function book(x: number, y: number, scale = 1, rotation = 0): string {
  return group(x, y, scale,
    rect(4, 6, 99, 126, C.paper, C.ink, 2)
    + line(11, 126, 98, 126, C.muted)
    + rect(0, 0, 98, 123, C.red, C.ink, 3)
    + rect(9, 0, 12, 123, C.pale)
    + rect(36, 33, 43, 47, C.paper)
    + path('M 46 70 L 67 42 M 49 48 L 69 68', 'none', C.green, 3), rotation,
  )
}

function openBook(x: number, y: number, scale = 1): string {
  return group(x, y, scale,
    path('M 0 9 Q 45 -5 94 12 Q 145 -5 192 9 L 192 122 Q 144 111 94 131 Q 46 111 0 122 Z', C.red)
    + path('M 7 4 Q 46 -4 94 13 Q 141 -4 185 4 L 185 112 Q 140 106 94 122 Q 47 106 7 112 Z', C.paper)
    + line(94, 13, 94, 122, C.wood)
    + [35, 56, 77].map((y0) => line(21, y0, 76, y0 + 3, C.pale) + line(113, y0 + 3, 170, y0, C.pale)).join(''),
  )
}

function paperPerson(cx: number, baseline: number, height: number, label: string, color: string = C.blue, look: 'left' | 'right' | 'front' = 'front'): string {
  const s = height / 142
  const direction = look === 'left' ? -1 : look === 'right' ? 1 : 0
  // Name labels remain unscaled and at caption size, even on smaller paper figures.
  return group(cx, baseline, s,
    path('M -37 -9 L 30 -9 L 43 0 L -44 0 Z', C.paper)
    + path('M -30 -82 L 29 -82 L 35 -10 L -35 -10 Z', color)
    + ellipse(0, -110, 26, 29, C.paper)
    + (direction ? path(`M ${direction * 22} -121 L ${direction * 34} -111 L ${direction * 23} -105`, C.paper) : '')
    + circle(direction * 11 - 5, -114, 3)
    + (direction === 0 ? circle(9, -114, 3) : '')
    + line(-5, -97, 8, -97, C.ink)
    + line(-22, -12, -19, -4, C.muted),
  ) + text(cx, baseline - height * .28, label, 24, C.paper, 700, 'middle')
}

function envelope(x: number, y: number, width: number, state: 'closed' | 'open' | 'reveal', direction: 'left' | 'right' = 'right', marked = true): string {
  const height = width * .56
  const flap = state === 'closed'
    ? path(`M ${x} ${y} L ${x + width / 2} ${y + height * .64} L ${x + width} ${y}`, C.pale)
    : path(`M ${x} ${y} L ${x + width / 2} ${y - height * .65} L ${x + width} ${y} Z`, C.pale)
  const card = state === 'reveal'
    ? rect(x + 12, y - 29, width - 24, height, C.paper)
      + text(x + width / 2, y - 3, 'HELLO', 24, C.ink, 700, 'middle')
    : ''
  return flap + rect(x, y, width, height, C.wood) + card
    + path(`M ${x} ${y} L ${x + width / 2} ${y + height * .54} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} Z`, C.paper)
    + (state === 'closed' ? flap : '')
    + (marked ? arrow(
      x + width * (direction === 'right' ? .3 : .7), y + height * .8,
      x + width * (direction === 'right' ? .7 : .3), y + height * .8,
    ) : '')
}

function parcel(x: number, y: number, scale = 1): string {
  return group(x, y, scale,
    path('M 8 29 L 104 18 L 125 42 L 119 111 L 5 119 L 0 54 Z', C.wood)
    + path('M 8 29 L 56 54 L 104 18 M 56 54 L 61 115 M 0 54 L 37 81 L 5 119 M 125 42 L 94 79 L 119 111')
    + path('M 27 43 L 82 32 M 78 96 L 108 91', 'none', C.pale, 3)
    + line(29, 110, 39, 96, C.ink),
  )
}

function camera001(): CameraVisual {
  const p = new Plate(1, 760, 'Compare the saved doorway view',
    'Two matching doorway drawings retain the same shoes, laces, OUT card and door edge. Ghost door edges in the unsupported example indicate possible drift, not measured footage. Below, hands support a phone over a table.')
  const scene = (drift: boolean) => rect(0, 0, 314, 231, C.pale, 'none')
    + rect(242, 12, 59, 252, C.paper)
    + line(253, 12, 253, 264)
    + circle(286, 132, 5, C.wood)
    + line(0, 231, 314, 231)
    + group(21, 181, .95, shoes())
    + group(119, 149, 1, rect(0, 0, 106, 66) + text(53, 45, 'OUT', 32, C.ink, 700, 'middle'), -4)
    + (drift ? line(240, 16, 240, 260, C.red, '7 7') + line(266, 16, 266, 260, C.red, '7 7') : '')
  p.add(text(32, 124, 'A / Unsupported', 24, C.ink, 700), text(374, 124, 'B / Forearms supported', 24, C.ink, 700))
  p.add(p.frame(32, 142, 314, 282, scene(true)), p.frame(374, 142, 314, 282, scene(false)))
  p.add(lines(32, 458, ['OUT and laces stay crisp.', 'Ghost edges suggest drift.']))
  p.add(lines(374, 458, ['Same scene and details.', 'Compare the saved files.']))
  p.add(line(60, 610, 660, 610, C.wood), rect(60, 611, 600, 17, C.table, C.wood))
  p.add(rightHand(229, 539, .9), leftHand(99, 539, .9))
  p.add(rect(221, 518, 53, 87, C.darkBlue, C.ink, 8), circle(232, 532, 6, C.ink))
  p.add(lines(398, 552, ['Support below.', 'Keep the lens clear.'], 24))
  p.footer(['Original schematic, not recorded motion or a stability test.', 'Keep light, distance and framing fixed between takes.', 'Replay lettering, texture and the same straight door edge.'])
  return p.render()
}

function camera002(): CameraVisual {
  const p = new Plate(2, 850, 'Fit the entire note delivery',
    'A true 16:9 frame contains a sideways folded-note delivery; a 9:16 frame contains a near-to-far route. A tall crop of the original wide view excludes the starting hand and landing square.')
  const wide = rect(284, 71, 77, 77, 'none') + foldedNote(44, 84, 78, 46)
    + rightHand(-46, 67, .7, 0) + arrow(139, 108, 264, 108)
    + foldedNote(292, 87, 60, 39) + line(290, 145, 353, 145, C.muted)
  const tall = rect(49, 28, 82, 82, 'none') + foldedNote(58, 44, 65, 43)
    + foldedNote(49, 230, 82, 49) + rightHand(163, 283, .6, 180)
    + arrow(91, 211, 91, 130)
  p.add(text(32, 124, 'Wide / 16:9', 24, C.ink, 700), text(476, 124, 'Tall / 9:16', 24, C.ink, 700))
  p.add(p.frame(32, 142, 384, 216, wide), p.frame(476, 142, 180, 320, tall))
  p.add(lines(32, 392, ['Across the table:', 'start and arrival both fit.'], 24))
  p.add(text(465, 492, 'Reblock up the frame.', 22))
  p.add(text(32, 516, 'Cropping is not reblocking', 24, C.ink, 700))
  const cropX = (384 - 216 * 9 / 16) / 2
  const cropWidth = 216 * 9 / 16
  p.add(p.frame(32, 534, 384, 216, wide
    + element('g', { opacity: .52 }, rect(0, 0, cropX, 216, C.ink, 'none') + rect(cropX + cropWidth, 0, cropX, 216, C.ink, 'none'))
    + element('rect', { x: cropX, y: 0, width: cropWidth, height: 216, fill: 'none', stroke: C.red, 'stroke-width': 4 })))
  p.add(lines(444, 579, ['Same wide take,', 'cropped to 9:16:', 'the hand and square', 'are outside the cut.'], 22))
  p.footer(['Drawn routes, not a claim about available phone modes.', 'A later crop cannot restore action that was never recorded.'])
  return p.render()
}

function camera003(): CameraVisual {
  const p = new Plate(3, 840, 'Three views, three readable facts',
    'A wide view shows a teal bag by a doorway. A medium view shows a right hand opening its red pocket. A close view shows the same empty paper sleeve marked PASS, including its open mouth.')
  const wide = rect(210, 0, 88, 221, C.paper) + line(221, 0, 221, 221)
    + line(0, 222, 314, 222) + bag(68, 100, .83)
    + passSleeve(103, 161, .4)
  const medium = bag(54, 28, 1.45, true) + passSleeve(108, 122, .7)
    + rightHand(144, 62, .9, 10)
  p.add(text(32, 125, '1 / Where?  2 s', 24, C.ink, 700), text(374, 125, '2 / What happens?  3 s', 24, C.ink, 700))
  p.add(p.frame(32, 144, 314, 256, wide, C.pale), p.frame(374, 144, 314, 256, medium))
  p.add(text(32, 432, 'Bag beside the doorway.', 22), text(374, 432, 'Hand opens the red pocket.', 22))
  p.add(text(32, 477, '3 / What is missing?  2 s', 24, C.ink, 700))
  p.add(p.frame(32, 495, 656, 221,
    rect(0, 157, 656, 90, C.blue, 'none') + rect(139, 173, 251, 67, C.red)
    + passSleeve(197, 17, 1.55)
    + arrow(493, 60, 357, 33)
    + lines(424, 98, ['Open mouth.', 'No pass inside.'], 24), C.pale))
  p.footer(['The teal bag, red pocket and PASS sleeve stay identifiable.', 'Original 7 s storyboard, not a compulsory three-shot formula.', 'Add a closer view only when it supplies needed information.'])
  return p.render()
}

function camera004(): CameraVisual {
  const p = new Plate(4, 670, 'Give rightward travel usable room',
    'Equal-sized paper arrows start at exactly one half and one third of equal frames. The drawn doorway stays near the right edge. Thirds guides divide each frame equally; the second start leaves a longer route ahead.')
  const scene = (fraction: number) => {
    const x = 656 * fraction
    return [1, 2].map((i) => line(656 * i / 3, 0, 656 * i / 3, 174, C.muted, '5 8')
      + line(0, 174 * i / 3, 656, 174 * i / 3, C.muted, '5 8')).join('')
      + rect(554, 27, 79, 121, C.paper) + rect(573, 43, 43, 105, C.pale)
      + line(573, 148, 616, 148) + paperArrow(x, 87)
      + arrow(x + 66, 101, 541, 101)
  }
  p.add(text(32, 126, 'Centered start / 50% across', 24, C.ink, 700))
  p.add(p.frame(32, 144, 656, 174, scene(.5)))
  p.add(text(32, 361, 'Left-third start / one third across', 24, C.ink, 700))
  p.add(p.frame(32, 379, 656, 174, scene(1 / 3)))
  p.footer(['Same arrow size and destination; only the start shifts.', 'Inspect the room ahead, not whether a grid predicts a mood.', 'Original frame schematic; centering can also serve a scene.'])
  return p.render()
}

function camera005(): CameraVisual {
  const p = new Plate(5, 820, 'Paper brightness is not letter focus',
    'Four BUS 4 card views separate a brightness change from a focus change. A near dark sleeve enters without covering the card. The out-of-plane card is actually blurred with an SVG filter while the sleeve remains sharp.')
  const sleeve = group(-5, 117, 1,
    path('M 0 0 L 110 8 L 145 67 L 100 135 L 0 135 Z', C.darkBlue)
    + [15, 28, 41, 54, 67].map((x) => line(x, 19, x + 46, 113, C.blue)).join('')
    + path('M 111 10 Q 123 49 145 67', 'none', C.paper, 2),
  )
  const scene = (near: boolean, bright: boolean, soft: boolean) => {
    const card = rect(128, 34, 161, 111, bright ? C.white : '#e7d9bd')
      + text(208.5, 103, 'BUS 4', 31, C.ink, 700, 'middle')
    return line(0, 174, 314, 174, C.wood)
      + (soft ? p.blur(card, 4.2) : card) + (near ? sleeve : '')
      + (soft ? rect(20, 162, 77, 58, 'none', C.red) : rect(117, 24, 184, 133, 'none', C.red))
  }
  p.add(text(32, 125, '1 / Card sharp', 24, C.ink, 700), text(374, 125, '2 / Brighter, still sharp', 24, C.ink, 700))
  p.add(p.frame(32, 143, 314, 228, scene(false, false, false)), p.frame(374, 143, 314, 228, scene(true, true, false)))
  p.add(text(32, 403, 'Inspect the letter edges.', 22), text(374, 403, 'Paper tone changes.', 22))
  p.add(text(32, 445, '3 / Focus shifts nearer', 24, C.ink, 700), text(374, 445, '4 / Card focus restored', 24, C.ink, 700))
  p.add(p.frame(32, 463, 314, 228, scene(true, false, true)), p.frame(374, 463, 314, 228, scene(true, false, false)))
  p.footer(['SVG blur is schematic, not measured depth of field.', 'Red outlines mark the illustrated focus target, not phone UI.', 'Brightness and focus need separate checks in the saved file.'])
  return p.render()
}

function camera006(): CameraVisual {
  const p = new Plate(6, 750, 'A larger BASIL label can be softer',
    'Far, middle and near trials show the same handwritten BASIL label increasing in size. Far and middle lettering is sharp; the largest near label is blurred with an SVG filter. A separate distance sketch shows the fixed phone and trial positions.')
  const trials = [
    { x: 32, label: '1 / Far', width: 126, height: 81, size: 25, soft: false, result: 'Clear' },
    { x: 256, label: '2 / Middle', width: 164, height: 112, size: 32, soft: false, result: 'Clear again' },
    { x: 480, label: '3 / Near', width: 199, height: 157, size: 39, soft: true, result: 'Too close: soft' },
  ]
  for (const trial of trials) {
    const x = (208 - trial.width) / 2
    const y = 168 - trial.height / 2
    const card = rect(x, y, trial.width, trial.height)
      + line(x + 9, y + trial.height - 17, x + trial.width - 9, y + trial.height - 17, C.green)
      + text(104, y + trial.height * .57, 'BASIL', trial.size, C.ink, 700, 'middle')
    p.add(text(trial.x, 127, trial.label, 24, C.ink, 700))
    p.add(p.frame(trial.x, 145, 208, 282, trial.soft ? p.blur(card, 4.7) : card))
    p.add(text(trial.x + 104, 461, trial.result, 22, C.ink, 400, 'middle'))
  }
  p.add(text(32, 511, 'Fixed phone; move only the label', 24, C.ink, 700))
  p.add(phonePlan(68, 573, 90), line(104, 573, 663, 573, C.muted, '5 8'))
  for (const [x, label] of [[230, 'Near'], [418, 'Middle'], [624, 'Far']] as const) {
    p.add(rect(x - 16, 552, 32, 42), text(x, 627, label, 22, C.ink, 400, 'middle'))
  }
  p.add(arrow(599, 533, 249, 533))
  p.footer(['SVG blur illustrates a failed close trial, not a lens model.', 'Middle is the nearest successful test, not an exact limit.', 'No centimeter recommendation or macro mode is assumed.'])
  return p.render()
}

function towel(x: number, y: number, detailed: boolean, darkened = false): string {
  const outline = 'M 9 24 Q 80 -9 174 20 L 187 180 Q 145 202 109 184 Q 60 207 0 182 Z'
  return group(x, y, 1,
    rect(5, 54, 174, 145, C.wood)
    + path(outline, darkened ? '#b9b6b0' : C.white)
    + (detailed ? path('M 9 24 Q 41 42 63 25 L 59 188 Q 37 179 18 187 Z', '#eee5d6', 'none')
      + path('M 95 19 Q 114 32 126 20 L 136 190 L 109 184 Z', '#bdb6a5', 'none')
      + path('M 156 22 L 167 192 L 180 184 L 174 20 Z', '#d7d1c4', 'none')
      + path('M 62 29 L 59 178 M 111 37 L 109 173 M 160 30 L 167 175', 'none', C.muted, 2)
      + [0, 1, 2].map((i) => path(`M 14 ${163 + i * 7} Q 43 ${172 + i * 5} 62 ${165 + i * 5}`, 'none', '#bdb6a5', 2)).join('') : ''),
  )
}

function camera007(): CameraVisual {
  const p = new Plate(7, 830, 'White folds need distinct recorded tones',
    'The same towel outline contains a flat clipped white patch in one view and distinct ridges, creases and weave lines in another. A dimmed copy of the clipped patch remains featureless. A top view locates window, towel and alternative camera positions.')
  p.add(text(32, 124, 'Clipped fold patch', 24, C.ink, 700), text(374, 124, 'Retained fold detail', 24, C.ink, 700))
  p.add(p.frame(32, 143, 314, 260,
    rect(169, 0, 145, 209, C.white, C.pale) + line(238, 0, 238, 209, C.pale) + towel(59, 40, false), C.pale))
  p.add(p.frame(374, 143, 314, 260, towel(59, 40, true), '#d6cebf'))
  p.add(text(32, 435, 'Fold differences are gone.', 22), text(374, 435, 'Ridges and creases differ.', 22))
  p.add(text(32, 478, 'Try the window side', 24, C.ink, 700))
  p.add(rect(112, 506, 175, 12, C.paper, C.blue), text(129, 549, 'Window', 22))
  p.add(rect(209, 579, 62, 53, C.paper), path('M 222 583 L 219 624 M 247 583 L 252 624', 'none', C.muted))
  p.add(phonePlan(239, 684), phonePlan(73, 536, 124), arrow(99, 552, 202, 598, C.blue), arrow(239, 551, 239, 575))
  p.add(text(36, 648, 'Light-side', 22), text(287, 685, 'Backlit', 22))
  p.add(lines(424, 500, ['Darken the clipped file:', 'still one flat patch.'], 22))
  p.add(group(453, 554, .75, towel(0, 0, false, true)))
  p.footer(['Illustrative tones, not measured exposure or HDR recovery.', 'The light-side camera aims at the towel, into the room.', 'A dimmer flat patch cannot reconstruct the lost fold lines.'])
  return p.render()
}

function paperHouse(x: number, y: number, width: number, height: number, roof: string): string {
  return path(`M ${x} ${y + height * .34} L ${x + width / 2} ${y} L ${x + width} ${y + height * .34} L ${x + width} ${y + height} L ${x} ${y + height} Z`, C.paper)
    + path(`M ${x} ${y + height * .34} L ${x + width / 2} ${y} L ${x + width} ${y + height * .34} Z`, roof)
    + rect(x + width * .4, y + height * .67, width * .23, height * .33, C.wood)
    + rect(x + width * .13, y + height * .46, width * .23, height * .19, C.pale)
    + line(x + width * .8, y + height * .4, x + width * .8, y + height, C.pale)
}

function camera008(): CameraVisual {
  const p = new Plate(8, 840, 'Match the front house; compare the rear',
    'Pinhole-projected equal-height paper houses compare an original view, a digital crop and a nearer viewpoint. Actual rear-to-front drawing heights are one half, one half and one third. Camera positions at zero and twenty centimeters face houses at forty and eighty centimeters. A small fixed lateral offset keeps both houses visible.')
  // World units are the guide's hypothetical centimeters. Both paper houses have
  // height 14 and width 10. Camera height is 16; neither house moves between views.
  // Projection: u = cx + f*X/Z; v = cy + f*(cameraHeight - Y)/Z.
  const projected = (focal: number, cameraZ: number) => {
    const projectHouse = (worldX: number, worldZ: number, color: string) => {
      const depth = worldZ - cameraZ
      const height = focal * 14 / depth
      const width = focal * 10 / depth
      const x = 128 + focal * worldX / depth - width / 2
      const y = 20 + focal * (16 - 14) / depth
      return paperHouse(x, y, width, height, color)
    }
    return line(0, 20, 208, 20, C.pale)
      + projectHouse(10, 80, C.blue) + projectHouse(-5, 40, C.red)
  }
  const originalFocal = 240
  const enlargedFocal = 400
  const magnification = enlargedFocal / originalFocal
  const crop = element('rect', {
    x: 128 - 128 / magnification, y: 20 - 20 / magnification,
    width: 208 / magnification, height: 244 / magnification,
    fill: 'none', stroke: C.red, 'stroke-width': 2.5, 'stroke-dasharray': '6 5',
  })
  const variants = [
    { x: 32, label: 'Original view', art: projected(240, 0) + crop, ratio: 'Rear = 50%' },
    { x: 256, label: 'Digital crop', art: projected(400, 0), ratio: 'Rear = 50%' },
    { x: 480, label: 'Move nearer', art: projected(200, 20), ratio: 'Rear = 33.3%*' },
  ]
  for (const variant of variants) {
    p.add(text(variant.x, 125, variant.label, 24, C.ink, 700))
    p.add(p.frame(variant.x, 144, 208, 244, variant.art, C.pale))
    p.add(text(variant.x + 104, 422, variant.ratio, 22, C.ink, 400, 'middle'))
  }
  p.add(text(32, 461, 'Dashed box = crop. Front heights match in views 2 + 3.', 22))
  p.add(text(32, 505, 'Only the camera advances 20 cm', 24, C.ink, 700))
  const axis = (z: number) => 66 + z * 7.2
  p.add(line(axis(0), 584, axis(80), 584, C.muted))
  p.add(phonePlan(axis(0), 562, 90, .85), phonePlan(axis(20), 562, 90, .85))
  p.add(paperHouse(axis(40) - 24, 529, 48, 55, C.red), paperHouse(axis(80) - 24, 529, 48, 55, C.blue))
  for (const z of [0, 20, 40, 80]) {
    p.add(line(axis(z), 583, axis(z), 595), text(axis(z), 622, `${z} cm`, 22, C.ink, 400, 'middle'))
  }
  p.add(lines(32, 666, ['Far camera: front 40 cm / rear 80 cm.', 'After the move: front 20 cm / rear 60 cm.'], 24))
  p.footer(['Ideal pinhole geometry, not phone or close-focus measurements.', 'Equal physical houses have a fixed small sideways offset.', '*One third, rounded. Cropping preserves the original ratio.'])
  return p.render()
}

function camera009(): CameraVisual {
  const p = new Plate(9, 810, 'Raise the view above the blocking wall',
    'A low view of a shallow box hides its folded message behind the front wall. A higher view reveals the same message inside. In a side elevation the lower sightline hits the wall, while the higher sightline clears it.')
  const low = path('M 36 111 L 77 91 L 277 91 L 251 111 Z', C.wood)
    + foldedNote(152, 121, 80, 42)
    + rect(36, 111, 215, 96, C.table)
    + path('M 251 111 L 277 91 L 277 185 L 251 207 Z', C.wood)
    + line(49, 198, 231, 198, C.wood)
  const high = path('M 36 126 L 78 41 L 276 41 L 248 126 Z', C.wood)
    + path('M 54 116 L 91 55 L 258 55 L 235 116 Z', C.table)
    + path('M 124 76 L 205 72 L 185 111 L 108 113 Z', C.paper)
    + path('M 124 76 L 154 101 L 205 72', 'none', C.ink)
    + rect(36, 126, 212, 81, C.table)
    + path('M 248 126 L 276 41 L 276 173 L 248 207 Z', C.wood)
    + line(49, 198, 231, 198, C.wood)
  p.add(text(32, 125, 'Low / wall hides message', 24, C.ink, 700), text(374, 125, 'Higher / message revealed', 24, C.ink, 700))
  p.add(p.frame(32, 144, 314, 237, low), p.frame(374, 144, 314, 237, high))
  p.add(text(32, 423, 'Side elevation / why tilt alone cannot clear the wall', 24, C.ink, 700))
  p.add(line(37, 679, 682, 679, C.wood), rect(342, 576, 15, 103, C.wood))
  p.add(rect(550, 649, 86, 15, C.paper), line(550, 649, 592, 657), line(592, 657, 636, 649))
  p.add(phonePlan(78, 484, 108), phonePlan(78, 650, 90))
  p.add(arrow(92, 484, 590, 649, C.blue), line(92, 650, 342, 650, C.red), cross(342, 650, 10))
  p.add(text(35, 461, 'Higher lens', 22), text(35, 621, 'Lower lens', 22))
  p.add(text(367, 597, 'Front wall', 22), text(537, 626, 'Message', 22))
  p.footer(['The upper ray clears the wall; the lower ray hits it.', 'Schematic visibility, not a measured camera-height setup.', 'Raise comfortably and note any tilt; do not climb furniture.'])
  return p.render()
}

function camera010(): CameraVisual {
  const p = new Plate(10, 790, 'Separate the post, plant and paper hill',
    'The same sharp foreground paper post, middle plant and folded background hill are initially aligned. A sideways camera change shifts the post most, the plant less and the hill least, revealing the plant outline without a blur effect.')
  const landscape = (shift: number) => {
    // A fixed lateral camera move gives inverse-depth shifts: 144, 72, 36.
    const postX = 190 - shift
    const plantX = 190 - shift / 2
    const hillX = 190 - shift / 4
    return path(`M ${hillX - 108} 243 L ${hillX - 14} 69 L ${hillX + 95} 243 Z`, '#b3b39a')
      + path(`M ${hillX - 14} 69 L ${hillX + 13} 243 L ${hillX + 95} 243 Z`, '#89917a')
      + line(hillX - 14, 69, hillX + 13, 243, C.paper)
      + plant(plantX, 259, .92)
      + rect(postX - 41, 31, 82, 240, C.paper)
      + path(`M ${postX - 41} 31 L ${postX - 23} 45 L ${postX + 41} 45 M ${postX - 23} 45 L ${postX - 23} 271`, 'none', C.muted)
      + line(0, 275, 314, 275, C.wood)
  }
  p.add(text(32, 126, 'A / Almost aligned', 24, C.ink, 700), text(374, 126, 'B / Camera shifted sideways', 22, C.ink, 700))
  p.add(p.frame(32, 145, 314, 290, landscape(0)), p.frame(374, 145, 314, 290, landscape(144)))
  p.add(lines(32, 469, ['The near post hides', 'much of the plant.']))
  p.add(lines(374, 469, ['The stem and most leaves', 'emerge beside the post.']))
  p.add(text(32, 552, 'Camera moves right', 24, C.ink, 700))
  p.add(phonePlan(70, 626), phonePlan(226, 626), arrow(102, 637, 192, 637))
  p.add(lines(346, 573, ['Near post shifts most.', 'Plant shifts half as far.', 'Far hill shifts least.', 'All three remain sharp.'], 24))
  p.footer(['Original parallax schematic, not measured screen motion.', 'The second stationary view needs no artificial background blur.', 'Choose overlaps that explain depth without hiding the subject.'])
  return p.render()
}

function bookRow(): string {
  const books = [
    { x: 46, width: 88, height: 170, color: C.red },
    { x: 138, width: 108, height: 191, color: C.blue },
    { x: 250, width: 76, height: 157, color: C.green },
    { x: 330, width: 102, height: 185, color: C.wood },
    { x: 436, width: 104, height: 174, color: C.darkBlue },
  ]
  return line(0, 253, 656, 253, C.wood)
    + books.map((b) => rect(b.x, 253 - b.height, b.width, b.height, b.color)
      + line(b.x + 12, 265 - b.height, b.x + 12, 242, C.paper)
      + line(b.x + 24, 235, b.x + b.width - 9, 235, C.pale)).join('')
    + path('M 620 185 L 644 185 L 644 248 L 632 238 L 620 248 Z', C.paper)
    + circle(632, 200, 4, C.red)
}

function camera011(): CameraVisual {
  const p = new Plate(11, 820, 'Steady hands still need safe frame margins',
    'Closed books and a paper marker appear in a full source view. A dashed inner crop excludes the marker. Two proportional saved-view examples compare that loss with a wider capture that retains the same marker. The crop amount is illustrative, not a phone specification.')
  const sourceWidth = 656
  const sourceHeight = 288
  const retainedScale = .84
  const insetX = sourceWidth * (1 - retainedScale) / 2
  const insetY = sourceHeight * (1 - retainedScale) / 2
  p.add(text(32, 126, 'Possible stabilization reserve', 24, C.ink, 700))
  const margin = path(`M 0 0 H 656 V 288 H 0 Z M ${insetX} ${insetY} V ${288 - insetY} H ${656 - insetX} V ${insetY} Z`, C.ink, 'none')
  p.add(p.frame(32, 144, 656, 288, bookRow()
    + element('g', { opacity: .2, 'fill-rule': 'evenodd' }, margin)
    + element('rect', { x: insetX, y: insetY, width: 656 * retainedScale, height: 288 * retainedScale, fill: 'none', stroke: C.red, 'stroke-width': 3, 'stroke-dasharray': '9 6' })
    + rect(177, 33, 337, 39, C.ivory, 'none') + text(345, 61, 'Illustrative retained area', 22, C.red, 700, 'middle')))
  p.add(text(32, 468, 'Same supported phone. Recheck the saved edges.', 24))
  p.add(text(32, 521, 'Little margin / marker lost', 22, C.ink, 700), text(374, 521, 'Wider capture / marker kept', 22, C.ink, 700))
  const outputWidth = 314
  const outputHeight = outputWidth * sourceHeight / sourceWidth
  const zoom = outputWidth / (sourceWidth * retainedScale)
  const saved = (wider: boolean) => group(-insetX * zoom, -insetY * zoom, zoom,
    wider ? group(82, 36, .75, bookRow()) : bookRow(),
  )
  p.add(p.frame(32, 539, outputWidth, outputHeight, saved(false)), p.frame(374, 539, outputWidth, outputHeight, saved(true)))
  p.footer(['A schematic crop, not a promised mode, amount or result.', 'Support reduces movement; extra margin protects the marker.', 'Stabilization does not reliably repair blur within a frame.'])
  return p.render()
}

function shelfShapes(offset = 0): string {
  return path(`M ${91 - offset} 26 L ${57 - offset} 99 L ${126 - offset} 99 Z`, C.red)
    + rect(263 - offset, 33, 66, 66, C.blue)
    + circle(520 - offset, 65, 34, C.green, C.ink)
    + line(-20, 102, 690, 102, C.wood)
    + line(78 - offset, 83, 101 - offset, 38, C.pale)
    + line(274 - offset, 42, 274 - offset, 89, C.pale)
}

function camera012(): CameraVisual {
  const p = new Plate(12, 840, 'A slower pan makes smaller sample steps',
    'Triangle, square and circle mark a shelf pan from left to right. At the same illustrative 30 fps, four consecutive triangle views shift left twice as far in the four-second pan as in the eight-second pan. Sample displacement is enlarged for legibility, not drawn to the shelf overview scale. Counts are 120 and 240 movement frames, excluding one-second endpoint holds.')
  p.add(text(32, 124, 'Triangle start / square / circle finish', 24, C.ink, 700))
  p.add(p.frame(32, 142, 656, 120, shelfShapes(), C.pale))
  p.add(text(32, 294, 'Pan right in place; use the same beginning and end.', 22))
  const sequence = (y: number, displacement: number) => {
    for (let i = 0; i < 4; i++) {
      const x = 32 + i * 170
      p.add(p.frame(x, y, 146, 115, shelfShapes(displacement * i), C.pale))
      p.add(text(x + 73, y + 143, i === 0 ? '0 s' : `${i}/30 s`, 22, C.ink, 400, 'middle'))
    }
  }
  p.add(text(32, 339, '4 s movement / 120 frames at 30 fps', 24, C.ink, 700))
  sequence(357, 18)
  p.add(text(32, 544, '8 s movement / 240 frames at 30 fps', 24, C.ink, 700))
  sequence(562, 9)
  p.footer(['Four samples shown; displacement enlarged for legibility.', 'Constant 30 fps assumed; add a 1 s hold at each end.', 'Sharp drawings cannot prove motion blur or playback style.'])
  return p.render()
}

function camera013(): CameraVisual {
  const p = new Plate(13, 820, 'The reminder changes where the book lands',
    'Four original tabletop storyboard panels follow a red book toward an open bag, discovery of a slip, the readable message LEAVE FOR JO, and the book left away from the bag. Suggested phases last one, two, two and two seconds.')
  const openBag = (x: number, y: number) => bag(x, y, .8) + ellipse(x + 51, y + 17, 35, 16, C.darkBlue)
  const arts = [
    openBag(200, 49) + book(30, 58, .8, -8) + arrow(124, 113, 190, 96) + rightHand(45, 158, .58, -8),
    openBag(222, 67) + openBook(23, 67, 1.05) + rect(144, 30, 59, 91) + rightHand(154, 131, .69, -16),
    openBook(44, 93, 1.1) + rect(48, 34, 218, 137)
      + text(157, 91, 'LEAVE', 31, C.ink, 700, 'middle') + text(157, 134, 'FOR JO', 31, C.ink, 700, 'middle'),
    book(27, 62, .94) + openBag(224, 56) + line(150, 152, 209, 152, C.muted, '5 6'),
  ]
  const captions = ['1 / Begin packing · 1 s', '2 / Discover slip · 2 s', '3 / Read instruction · 2 s', '4 / Leave it aside · 2 s']
  const jobs = ['Book heads toward the bag.', 'The slip interrupts the action.', 'Keep the words readable.', 'Book and bag stay separated.']
  for (let i = 0; i < 4; i++) {
    const x = i % 2 === 0 ? 32 : 374
    const y = i < 2 ? 145 : 464
    p.add(text(x, y - 18, captions[i], 24, C.ink, 700))
    p.add(p.frame(x, y, 314, 220, arts[i]), text(x, y + 253, jobs[i], 22))
  }
  p.footer(['Original 7 s sketch; adjust the pauses for the actual action.', 'The final placement shows a changed plan, not just a pause.'])
  return p.render()
}

function camera014(): CameraVisual {
  const p = new Plate(14, 840, 'Open a visible gap for the handoff',
    'Top views compare an aligned camera, nearer Giver and farther Receiver with the same camera facing separated stand-ins. Lower camera-view drawings show the aligned Giver concealing the note and the spread Giver on the left handing a note across a visible gap to Receiver on the right.')
  const tent = (x: number, y: number, label: string, color: string) => rect(x - 29, y - 20, 58, 40, color)
    + line(x - 29, y - 8, x + 29, y - 8, C.paper)
    + text(x, y + 14, label, 24, C.paper, 700, 'middle')
  const aligned = arrow(157, 178, 157, 45, C.muted, true)
    + tent(157, 38, 'R', C.clay) + foldedNote(139, 76, 36, 24)
    + tent(157, 124, 'G', C.blue) + phonePlan(157, 191)
    + cross(157, 151, 8)
  const spread = arrow(157, 178, 157, 100, C.blue, true)
    + tent(69, 50, 'G', C.blue) + tent(245, 50, 'R', C.clay)
    + foldedNote(133, 96, 48, 30) + arrow(99, 76, 126, 103) + arrow(186, 101, 218, 75)
    + phonePlan(157, 191)
  p.add(text(32, 126, 'Top view / aligned', 24, C.ink, 700), text(374, 126, 'Top view / spread', 24, C.ink, 700))
  p.add(p.frame(32, 144, 314, 233, aligned), p.frame(374, 144, 314, 233, spread))
  p.add(text(32, 413, 'G = Giver. R = Receiver. Camera position unchanged.', 22))
  p.add(text(32, 458, 'What the camera can see', 26, C.ink, 700))
  const blocked = paperPerson(159, 177, 133, 'R', C.clay)
    + foldedNote(133, 154, 50, 30) + paperPerson(157, 220, 193, 'G', C.blue)
  const clear = paperPerson(54, 215, 162, 'G', C.blue)
    + paperPerson(262, 215, 162, 'R', C.clay)
    + foldedNote(130, 126, 61, 39) + arrow(95, 180, 211, 180)
  p.add(p.frame(32, 477, 314, 231, blocked), p.frame(374, 477, 314, 231, clear))
  p.footer(['Top views expose the layout; lower frames show the blockage.', 'Original paper rehearsal. Recheck hands at recording height.', 'Move the obstruction before asking the camera to follow it.'])
  return p.render()
}

function camera015(): CameraVisual {
  const p = new Plate(15, 850, 'Map the cameras and the resulting eyelines',
    'Top view: A is left and B right on a horizontal conversation axis. The lower-left camera aims at B; the lower-right camera aims at A. Both are below the axis. The crossed camera is above it. Lower screen views show A looking right, B looking left, and a crossed shared view with B left and A right.')
  const figure = (x: number, y: number, label: string, color: string, direction: number) =>
    rect(x - 29, y - 33, 58, 66, C.paper)
    + rect(x - 23, y - 28, 46, 25, color, 'none')
    + text(x, y - 7, label, 24, C.paper, 700, 'middle')
    + arrow(x - direction * 18, y + 16, x + direction * 18, y + 16)
  const top = rect(0, 147, 656, 207, '#e6e8dc', 'none')
    + line(34, 147, 622, 147, C.muted, '9 7')
    + text(328, 112, 'Conversation axis', 22, C.ink, 400, 'middle')
    + arrow(140, 275, 492, 165, C.blue, true)
    + arrow(512, 275, 160, 165, C.blue, true)
    + figure(140, 147, 'A', C.blue, 1) + figure(512, 147, 'B', C.clay, -1)
    + phonePlan(140, 291, 69) + phonePlan(512, 291, -69)
    + phonePlan(328, 38, 180)
    + arrow(328, 49, 328, 89, C.red, true)
    + text(393, 44, 'Crossed side', 22, C.red, 700)
    + text(140, 337, 'View of B', 24, C.ink, 700, 'middle')
    + text(512, 337, 'View of A', 24, C.ink, 700, 'middle')
  p.add(p.frame(32, 123, 656, 354, top, C.pale))
  const lower = [
    { x: 32, label: 'View of A', art: paperPerson(93, 159, 134, 'A', C.blue, 'right') + arrow(137, 62, 186, 62), caption: 'A looks right' },
    { x: 256, label: 'View of B', art: paperPerson(115, 159, 134, 'B', C.clay, 'left') + arrow(71, 62, 23, 62), caption: 'B looks left' },
    { x: 480, label: 'Crossed view', art: paperPerson(48, 159, 112, 'B', C.clay, 'right') + paperPerson(159, 159, 112, 'A', C.blue, 'left'), caption: 'B left / A right' },
  ]
  for (const view of lower) {
    p.add(text(view.x, 522, view.label, 24, C.ink, 700))
    p.add(p.frame(view.x, 540, 208, 172, view.art, C.pale))
    p.add(text(view.x + 104, 742, view.caption, 22, C.ink, 400, 'middle'))
  }
  p.footer(['Crossing changes the map; establish it with a shared view.', '180° means a half-plane, not the angle between two shots.'])
  return p.render()
}

function camera016(): CameraVisual {
  const p = new Plate(16, 820, 'Give each plant shot an information job',
    'A wide table view separates a plant from its FOR JO label. A closer label view makes the recipient readable. A medium view shows the right hand returning the label to a visible position beside the plant. The three proposed durations total eight seconds.')
  const tag = (x: number, y: number, width: number, height: number, fontSize: number) =>
    rect(x, y, width, height) + text(x + width / 2, y + height * .64, 'FOR JO', fontSize, C.ink, 700, 'middle')
  p.add(text(32, 126, '1 / Separation · 2 s', 24, C.ink, 700), text(374, 126, '2 / Recipient · 3 s', 24, C.ink, 700))
  p.add(p.frame(32, 145, 314, 228, plant(233, 200, .91) + tag(20, 148, 112, 52, 24)))
  p.add(p.frame(374, 145, 314, 228, tag(32, 54, 250, 125, 39)))
  p.add(text(32, 406, 'Wide / table end: apart.', 22), text(374, 406, 'Close / same side: read.', 22))
  p.add(text(32, 454, '3 / Restore the connection · 3 s', 24, C.ink, 700))
  p.add(p.frame(32, 473, 656, 230,
    plant(510, 204, 1.06)
    + element('g', { opacity: .5 }, rect(100, 136, 121, 59, 'none', C.muted))
    + arrow(227, 171, 337, 171)
    + tag(345, 141, 121, 59, 25) + rightHand(466, 102, .94, -7)))
  p.footer(['Medium / table end: the return stays visible beside the plant.', 'Original 8 s sketch. Keep views for their information, not size.', 'A duplicate label angle is an alternative, not a required shot.'])
  return p.render()
}

function cup(cx: number, baseline: number): string {
  return group(cx, baseline, 1,
    path('M -29 -78 L -22 0 Q 0 8 22 0 L 29 -78 Z', '#dce6e5')
    + ellipse(0, -78, 29, 9, C.paper, C.blue)
    + ellipse(0, -77, 23, 5, C.pale, C.blue)
    + path('M -26 -47 L 26 -47 L 24 -20 L -24 -20 Z', C.paper)
    + circle(10, -32, 5, C.red)
    + line(-17, -66, -13, -53, C.white),
  )
}

function camera017(): CameraVisual {
  const p = new Plate(17, 850, 'Both views need the same lift',
    'Two rows depict separate wider and closer performances of a right-handed empty plastic cup lift between the same paper marks. Selected moments show reach, shared mid-lift and placement. Cup sleeve dot, right hand and marks retain their orientation. Handles and all intervening phases are required in both takes.')
  const moment = (phase: number, closer: boolean) => {
    const cx = [48, 104, 160][phase]
    const baseline = phase === 1 ? 115 : 175
    const art = rect(18, 165, 61, 28, C.paper)
      + rect(132, 165, 61, 28, C.paper)
      + line(30, 180, 67, 180, C.red) + line(144, 180, 181, 180, C.blue)
      + cup(cx, baseline)
      + rightHand(cx + 14, baseline - 93, .64, 0)
    // A tighter framing of the same drawn action preserves both endpoints.
    return closer ? group(-12.48, -15.6, 1.12, art) : art
  }
  const labels = ['Start / reach', 'Shared mid-lift', 'Place / settle']
  for (let row = 0; row < 2; row++) {
    const y = row === 0 ? 148 : 473
    p.add(text(32, y - 19, row === 0 ? 'Wider take / complete action' : 'Closer take / repeat the complete action', 24, C.ink, 700))
    for (let phase = 0; phase < 3; phase++) {
      const x = 32 + phase * 224
      p.add(p.frame(x, y, 208, 199, moment(phase, row === 1)))
      p.add(text(x + 104, y + 229, labels[phase], 22, C.ink, 400, 'middle'))
    }
  }
  p.add(arrow(360, 389, 360, 429), text(382, 416, 'Possible shared cut phase', 22, C.red, 700))
  p.footer(['Same right hand, sleeve dot and start/destination marks.', 'Record 1 s still + 2 reach + 2 lift + 2 place + 1 still = 8 s.', 'Selected drawings, not every phase or simultaneous footage.', 'Keep the full movement and handles in both separate takes.'])
  return p.render()
}

function camera018(): CameraVisual {
  const p = new Plate(18, 840, 'Match the envelope at the same story moment',
    'Three states show a closed right-arrow envelope, a raised flap with the card hidden, and a partly visible HELLO card. A lower pair compares a correct raised-flap reset with an incorrect left arrow and prematurely visible card. Right hands are not mirrored.')
  const states = ['closed', 'open', 'reveal'] as const
  const titles = ['Before / 1 s', 'Opening / 2 s', 'Reveal / 2 s']
  for (let i = 0; i < 3; i++) {
    const x = 32 + i * 224
    p.add(text(x, 125, titles[i], 24, C.ink, 700))
    p.add(p.frame(x, 144, 208, 204,
      envelope(22, 94, 164, states[i]) + rightHand(155, 61, .48, 0)))
  }
  p.add(text(32, 389, 'Compare two raised-flap moments, not two starts', 24, C.ink, 700))
  p.add(text(32, 440, 'Reset matches', 24, C.ink, 700), text(374, 440, 'Reset changes the event', 24, C.ink, 700))
  p.add(p.frame(32, 459, 314, 225, envelope(42, 99, 225, 'open') + rightHand(244, 56, .57)))
  p.add(p.frame(374, 459, 314, 225, envelope(42, 99, 225, 'reveal', 'left') + rightHand(244, 56, .57)))
  p.add(text(32, 716, 'Arrow right; card still hidden.', 22), text(374, 716, 'Arrow reversed; card too early.', 22))
  p.footer(['Track the opening hand, orientation and current card state.', 'The 5 s top sequence is a sketch, not a required duration.', 'A state change within the event is not itself a reset mistake.'])
  return p.render()
}

function originalSketch(x: number, y: number, width = 205, height = 191): string {
  return rect(x, y, width, height)
    + path(`M ${x + 22} ${y + height - 38} L ${x + width * .42} ${y + height * .44} L ${x + width * .71} ${y + height - 38}`, 'none', C.blue)
    + circle(x + width * .72, y + height * .26, 18, 'none', C.wood)
    + path(`M ${x + 25} ${y + height - 25} Q ${x + width * .43} ${y + height - 54} ${x + width * .67} ${y + height - 27}`, 'none', C.green)
    + line(x + width * .69, y + height - 27, x + width - 15, y + height - 24, C.muted, '4 6')
    + line(x + width - 12, y + height - 44, x + width - 12, y + height - 9, C.pale)
}

function camera019(): CameraVisual {
  const p = new Plate(19, 820, 'Same words, different playable invitations',
    'Both tabletop views use the line Have a look at this and the same original unfinished landscape sketch. In the welcome option the page is available; in the delay option a hand and pencil attend to its unfinished corner. A lower drawing shows a no-contact table placement rather than a compulsory handoff.')
  p.add(text(360, 123, '“Have a look at this.”', 26, C.ink, 700, 'middle'))
  p.add(text(32, 163, 'Welcome / make it available', 22, C.ink, 700), text(374, 163, 'Delay / finish this corner', 22, C.ink, 700))
  const page = originalSketch(48, 35, 214, 200)
  p.add(p.frame(32, 181, 314, 273, page + rightHand(265, 201, .66, 25)))
  p.add(p.frame(374, 181, 314, 273, page
    + path('M 222 211 L 278 120 L 289 127 L 232 217 Z', C.wood)
    + path('M 222 211 L 216 223 L 232 217 Z', C.ink)
    + rightHand(229, 132, .7, 15)))
  p.add(text(32, 491, 'Possible choices, not prescribed gestures.', 24))
  p.add(text(32, 540, 'A no-contact alternative', 24, C.ink, 700))
  p.add(p.frame(32, 558, 656, 135,
    group(27, 3, .63, originalSketch(0, 0))
    + rightHand(164, 22, .83, 0)
    + lines(362, 48, ['Place it on the table.', 'Leave room to respond.'], 24)))
  p.footer(['Original fictional rehearsal, not an emotion-reading test.', 'Agree on boundaries; no handoff or physical contact is needed.', 'Discuss the action and timing, not the performer’s worth.'])
  return p.render()
}

function meetingCard(stage: 'unfold' | 'hold' | 'refold'): string {
  const writing = text(105, 67, 'MEET', 28, C.ink, 700, 'middle')
    + text(105, 104, 'AT SIX', 28, C.ink, 700, 'middle')
  if (stage === 'hold') return rect(19, 23, 172, 104) + writing + line(105, 27, 105, 39, C.pale)
  if (stage === 'unfold') return rect(19, 23, 172, 104) + writing
    + path('M 105 23 L 157 9 L 157 112 L 105 127 Z', C.pale)
    + rightHand(167, 69, .47)
  return rect(62, 23, 87, 104) + line(70, 27, 70, 124, C.pale) + rightHand(136, 71, .47)
}

function camera020(): CameraVisual {
  const p = new Plate(20, 820, 'Change only the open-card hold',
    'Two rows contain identical unfold, readable MEET AT SIX, and refold drawings. Below, proportional one-second-unit bars show take A lasting one plus one plus one seconds, and take B one plus three plus one seconds. Only the middle hold grows.')
  const stages = ['unfold', 'hold', 'refold'] as const
  const timeBar = (y: number, hold: number) => {
    const unit = 112
    const segments = [
      { length: 1, name: 'Open 1 s', color: C.ink },
      { length: hold, name: `Hold ${hold} s`, color: C.red },
      { length: 1, name: 'Close 1 s', color: C.ink },
    ]
    let x = 32
    for (const segment of segments) {
      p.add(rect(x, y, segment.length * unit, 42, segment.color, C.ivory))
      p.add(text(x + segment.length * unit / 2, y + 29, segment.name, 22, C.paper, 700, 'middle'))
      x += segment.length * unit
    }
  }
  for (let row = 0; row < 2; row++) {
    const y = row === 0 ? 146 : 459
    p.add(text(32, y - 18, row === 0 ? 'Take A / 1 + 1 + 1 = 3 s' : 'Take B / 1 + 3 + 1 = 5 s', 24, C.ink, 700))
    for (let i = 0; i < 3; i++) p.add(p.frame(32 + i * 224, y, 208, 153, meetingCard(stages[i])))
    timeBar(y + 172, row === 0 ? 1 : 3)
  }
  p.footer(['Bars use 1 s units; pictures are selected moments, not duration.', 'MEET AT SIX has the same sharpness and placement in both.', 'The longer hold is a rehearsal test, not a reading-time rule.'])
  return p.render()
}

function drawnFace(downward: boolean): string {
  const dx = downward ? 4 : 0
  const dy = downward ? 4 : 0
  return rect(27, 10, 150, 147)
    + ellipse(101, 68, 43, 48, C.paper)
    + path('M 47 155 Q 54 114 101 117 Q 153 114 159 155', C.blue)
    + ellipse(85, 63, 10, 7) + ellipse(119, 63, 10, 7)
    + circle(85 + dx, 63 + dy, 3.3) + circle(119 + dx, 63 + dy, 3.3)
    + path('M 101 67 L 97 81 L 104 82 M 89 95 L 111 95', 'none', C.ink)
    + (downward ? arrow(151, 82, 192, 125) : '')
}

function camera021(): CameraVisual {
  const p = new Plate(21, 850, 'Keep the look and pause; change the object',
    'Two three-panel sequences repeat identical original downward-right-looking and response faces. The first insert is a THANK YOU card on a low table; the second is a blank envelope from the same downward direction. A side elevation aligns drawn eyes and an insert camera above the low object. Neither sequence proves a real emotion.')
  const card = path('M 33 58 L 153 28 L 188 115 L 58 145 Z', C.paper)
    + text(112, 87, 'THANK', 25, C.ink, 700, 'middle')
    + text(117, 120, 'YOU', 25, C.ink, 700, 'middle')
  const blank = group(15, 19, 1, envelope(17, 62, 158, 'closed', 'right', false), -9)
  const row = (y: number, insert: string) => {
    p.add(p.frame(32, y, 208, 166, drawnFace(true), C.pale))
    p.add(p.frame(256, y, 208, 166, insert))
    p.add(p.frame(480, y, 208, 166, drawnFace(false), C.pale))
    for (const [i, label] of ['Look / 1 s', 'Object / 2 s', 'Pause / 2 s'].entries()) {
      p.add(text(136 + i * 224, y + 195, label, 22, C.ink, 400, 'middle'))
    }
  }
  p.add(text(32, 127, 'A / Card on the low table', 24, C.ink, 700))
  row(145, card)
  p.add(text(32, 383, 'Side view / compatible downward directions', 24, C.ink, 700))
  p.add(lines(32, 428, ['Both views', 'aim downward.'], 22))
  p.add(ellipse(244, 410, 26, 13), circle(250, 414, 6), phonePlan(356, 410, 119.5))
  p.add(rect(440, 482, 87, 17, C.paper), line(413, 502, 557, 502, C.wood))
  p.add(arrow(263, 416, 483.5, 482, C.blue), arrow(369, 417.3, 483.5, 482, C.red))
  p.add(text(32, 537, 'B / Blank envelope; same surrounding faces', 24, C.ink, 700))
  row(555, blank)
  p.footer(['Original staged drawings, not evidence of real feelings.', 'A compatible insert is not necessarily a literal eye view.'])
  return p.render()
}

function camera022(): CameraVisual {
  const p = new Plate(22, 830, 'Hear the rustle before revealing its source',
    'A top-view table plan places an empty drawn square left and a paper parcel right. A phone turns in place from left to right. Three lower frames first show only the square, keep the same square during an offscreen rustle, then reveal the parcel. The sound cue is notation, not embedded audio.')
  const plan = rect(51, 27, 143, 112, C.paper) + rect(82, 44, 81, 70, 'none')
    + parcel(477, 16, .94)
    + arrow(321, 204, 166, 128, C.blue, true) + arrow(342, 204, 518, 128, C.red, true)
    + phonePlan(327, 220, -57) + arrow(347, 178, 403, 178)
    + text(30, 182, 'Start left', 22, C.blue, 700) + text(475, 182, 'Reveal right', 22, C.red, 700)
  p.add(text(32, 126, 'Top view / one fixed phone position', 24, C.ink, 700))
  p.add(p.frame(32, 145, 656, 266, plan))
  p.add(text(32, 451, 'Recorded view: the parcel is absent until the reveal', 24, C.ink, 700))
  const square = rect(16, 29, 177, 126, C.paper) + rect(53, 51, 100, 80, 'none')
  const shots = [
    { x: 32, title: '1 / Hold · 2 s', art: square, note: ['Only the square', 'is visible.'] },
    { x: 256, title: '2 / Rustle · 1 s', art: square, note: ['Source heard', 'offscreen.'] },
    { x: 480, title: '3 / Reveal · 3 s', art: parcel(29, 27, 1.18), note: ['Pan right, then', 'settle on parcel.'] },
  ]
  for (const shot of shots) {
    p.add(text(shot.x, 497, shot.title, 24, C.ink, 700))
    p.add(p.frame(shot.x, 516, 208, 180, shot.art), lines(shot.x, 726, shot.note))
  }
  p.footer(['Original 6 s sketch. Sound is a cue here, not actual audio.'])
  return p.render()
}

function foldingHands(x = 0, y = 0, scale = 1): string {
  return group(x, y, scale,
    rect(41, 24, 144, 110)
    + path('M 41 134 L 112 62 L 185 134 Z', C.pale)
    + line(41, 24, 112, 62, C.muted)
    + rightHand(151, 35, .68, 0)
    + leftHand(-8, 74, .62),
  )
}

function camera023(): CameraVisual {
  const p = new Plate(23, 840, 'Recording yes does not mean posting yes',
    'Four illustrated panels show an agreed five-minute hands-only paper-folding recording, review by the two participants today, a separately declined public post, and tonight’s deletion plan for controlled copies. The same folded-paper image appears on each phone. Text warns that sound, reflections and backups need checking.')
  const phone = (x: number, y: number, scale = 1) => group(x, y, scale,
    rect(0, 0, 131, 170, C.darkBlue, C.ink, 10)
    + rect(9, 22, 113, 117, C.table, C.paper, 3)
    + group(8, 43, .44, foldingHands()) + circle(65, 153, 6, C.paper),
  )
  const recording = foldingHands(18, 33, 1.05)
  const review = ellipse(43, 64, 26, 29, C.paper)
    + path('M 5 145 Q 8 94 43 95 Q 78 94 81 145 Z', C.blue)
    + ellipse(271, 64, 26, 29, C.paper)
    + path('M 233 145 Q 236 94 271 95 Q 306 94 309 145 Z', C.clay)
    + rect(26, 142, 262, 53, C.wood) + phone(103, 40, .83)
  const posting = phone(19, 24, .93) + arrow(154, 98, 201, 98)
    + circle(237, 65, 18, C.pale, C.muted) + circle(272, 85, 18, C.pale, C.muted)
    + path('M 211 119 Q 212 88 237 88 Q 260 88 261 119 M 249 136 Q 249 108 272 108 Q 296 108 299 136', C.pale, C.muted)
    + cross(178, 97, 25)
  const retention = phone(26, 29, .9)
    + rect(206, 54, 75, 97, C.paper)
    + path('M 195 51 H 290 M 224 41 H 265 M 221 70 V 136 M 241 70 V 136 M 263 70 V 136')
    + arrow(154, 94, 192, 94)
    + path('M 258 5 A 20 20 0 1 0 284 30 A 23 23 0 0 1 258 5 Z', C.blue, C.blue)
  const scenes = [
    { title: 'Record / 5 minutes', art: recording, caption: 'Hands only, if agreed.' },
    { title: 'Review / just you two', art: review, caption: 'Today. Not a hobby group.' },
    { title: 'Public posting / no', art: posting, caption: 'A separate request was declined.' },
    { title: 'Retention / tonight', art: retention, caption: 'Delete copies you control.' },
  ]
  scenes.forEach((scene, i) => {
    const x = i % 2 === 0 ? 32 : 374
    const y = i < 2 ? 145 : 451
    p.add(text(x, y - 18, scene.title, 24, C.ink, 700))
    p.add(p.frame(x, y, 314, 214, scene.art), text(x, y + 246, scene.caption, 22))
  })
  p.footer(['Fictional agreement, not a release or an identity guarantee.', 'Check sound, reflections, storage and backups before promising.', 'Stopping or choosing an unrecorded paper rehearsal is allowed.'])
  return p.render()
}

function paperTrain(x: number, y: number): string {
  return group(x, y, 1,
    path('M 0 14 L 17 0 L 116 0 L 145 20 L 145 62 L 0 62 Z', C.paper)
    + path('M 0 14 L 17 0 L 116 0 L 131 14 Z', C.red)
    + rect(16, 24, 24, 20, C.blue) + rect(53, 24, 24, 20, C.blue) + rect(91, 24, 24, 20, C.blue)
    + path('M 121 18 L 135 25 L 135 43 L 121 43 Z', C.pale)
    + line(0, 52, 145, 52, C.red)
    + circle(28, 62, 9, C.ink) + circle(117, 62, 9, C.ink)
    + line(116, 0, 121, 43, C.muted),
  )
}

function camera024(): CameraVisual {
  const p = new Plate(24, 850, 'Let the paper train leave; keep the figure still',
    'Three equal fixed-camera storyboard frames keep a paper figure and drawn platform in the same place while the same folded train moves right. A hand is openly visible during the slide. The final frame holds an increased gap, with all action remaining inside the tabletop.')
  const trainPositions = [137, 310, 478]
  const titles = ['1 / Share the frame · 1 s', '2 / Slide right · 3 s', '3 / Hold the larger gap · 2 s']
  for (let i = 0; i < 3; i++) {
    const y = 143 + i * 211
    const platform = rect(26, 109, 603, 31, C.paper)
      + line(34, 116, 619, 116, C.ink)
      + [0, 1, 2, 3, 4, 5, 6].map((n) => line(43 + n * 78, 125, 72 + n * 78, 136, C.muted)).join('')
    const body = platform + paperPerson(86, 114, 98, '', C.blue)
      + paperTrain(trainPositions[i], 68)
      + (i === 1 ? rightHand(429, 20, .8, 0) + arrow(254, 48, 388, 48) : '')
      + (i === 2 ? line(120, 43, 463, 43, C.red)
        + line(120, 34, 120, 51, C.red) + line(463, 34, 463, 51, C.red)
        + text(292, 31, 'More separation', 22, C.red, 700, 'middle') : '')
    p.add(text(32, y - 18, titles[i], 24, C.ink, 700), p.frame(32, y, 656, 155, body))
  }
  p.footer(['Original 6 s paper-model sketch. Only the train changes place.', 'Keep the route inside the tabletop and the camera supported.', 'No roads, tracks, climbing or elevated improvised mounts.'])
  return p.render()
}

/** Replace only the first visual. Unknown IDs and all secondary indexes fall back. */
export function cameraOverride(id: string, index: number): { svg: string; width: number; height: number } | null {
  if (index !== 0) return null
  switch (id) {
    case 'cinema-001': return camera001()
    case 'cinema-002': return camera002()
    case 'cinema-003': return camera003()
    case 'cinema-004': return camera004()
    case 'cinema-005': return camera005()
    case 'cinema-006': return camera006()
    case 'cinema-007': return camera007()
    case 'cinema-008': return camera008()
    case 'cinema-009': return camera009()
    case 'cinema-010': return camera010()
    case 'cinema-011': return camera011()
    case 'cinema-012': return camera012()
    case 'cinema-013': return camera013()
    case 'cinema-014': return camera014()
    case 'cinema-015': return camera015()
    case 'cinema-016': return camera016()
    case 'cinema-017': return camera017()
    case 'cinema-018': return camera018()
    case 'cinema-019': return camera019()
    case 'cinema-020': return camera020()
    case 'cinema-021': return camera021()
    case 'cinema-022': return camera022()
    case 'cinema-023': return camera023()
    case 'cinema-024': return camera024()
    default: return null
  }
}