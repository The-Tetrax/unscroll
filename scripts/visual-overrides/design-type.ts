// Original explanatory vectors for the design-colour-type guides.
// No font files, image assets, DOM, network, or renderer dependencies are needed.
// Font specimens retain native glyph shapes: no textLength or glyph stretching.
// Dimensions refer to SVG user units, equal to px at the declared export size.

type Graphic = { svg: string; width: number; height: number }
type TextStyle = {
  size?: number
  weight?: 400 | 700
  fill?: string
  family?: 'Arial' | 'Georgia'
  anchor?: 'start' | 'middle' | 'end'
}

const WIDTH = 720
const INK = '#231F20'
const PAPER = '#F7F4ED'
const RED = '#BC2031'
const GUIDE = '#AAA398'
const WHITE = '#FFFFFF'

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
  if (!Number.isFinite(value)) throw new RangeError('Non-finite SVG coordinate')
  return String(Math.round(value * 1000) / 1000)
}

function text(value: string, x: number, y: number, style: TextStyle = {}): string {
  const family = style.family === 'Georgia' ? 'Georgia, serif' : 'Arial, sans-serif'
  return `<text x="${n(x)}" y="${n(y)}" font-family="${family}" font-size="${n(style.size ?? 24)}" font-weight="${style.weight ?? 400}" text-anchor="${style.anchor ?? 'start'}" fill="${escapeXml(style.fill ?? INK)}">${escapeXml(value)}</text>`
}

function lines(values: readonly string[], x: number, baseline: number, step: number, style: TextStyle = {}): string {
  return values.map((value, index) => text(value, x, baseline + index * step, style)).join('')
}

function rect(x: number, y: number, width: number, height: number, fill: string, stroke = 'none', radius = 0): string {
  return `<rect x="${n(x)}" y="${n(y)}" width="${n(width)}" height="${n(height)}" rx="${n(radius)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="2"/>`
}

function path(d: string, fill = 'none', stroke = INK, width = 2): string {
  return `<path d="${escapeXml(d)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="${n(width)}" stroke-linecap="round" stroke-linejoin="round"/>`
}

function line(x1: number, y1: number, x2: number, y2: number, color = GUIDE, width = 2, dashed = false): string {
  return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${escapeXml(color)}" stroke-width="${n(width)}"${dashed ? ' stroke-dasharray="6 6"' : ''}/>`
}

function circle(cx: number, cy: number, radius: number, fill: string, stroke = 'none', width = 2): string {
  return `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(radius)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="${n(width)}"/>`
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, stroke = 'none'): string {
  return `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="2"/>`
}

function arrow(x1: number, y1: number, x2: number, y2: number, color = RED): string {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const a = angle + Math.PI / 6
  const b = angle - Math.PI / 6
  return line(x1, y1, x2, y2, color, 2)
    + path(`M ${n(x2 - 10 * Math.cos(a))} ${n(y2 - 10 * Math.sin(a))} L ${n(x2)} ${n(y2)} L ${n(x2 - 10 * Math.cos(b))} ${n(y2 - 10 * Math.sin(b))}`, 'none', color)
}

function dimension(x1: number, x2: number, y: number, label: string): string {
  return line(x1, y, x2, y, INK)
    + line(x1, y - 7, x1, y + 7, INK)
    + line(x2, y - 7, x2, y + 7, INK)
    + text(label, (x1 + x2) / 2, y + 34, { anchor: 'middle' })
}

function graphic(id: string, title: string, description: string, body: string, height = 720): Graphic {
  const key = `design-type-${id}`
  return {
    width: WIDTH,
    height,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${n(height)}" viewBox="0 0 ${WIDTH} ${n(height)}" role="img" aria-labelledby="${key}-title" aria-describedby="${key}-desc" focusable="false">
<title id="${key}-title">${escapeXml(title)}</title>
<desc id="${key}-desc">${escapeXml(description)}</desc>
${rect(0, 0, WIDTH, height, PAPER)}
<g aria-hidden="true">
${text(title, 32, 54, { size: 28, weight: 700 })}
${line(32, 80, 688, 80)}
${body}
</g></svg>`,
  }
}

function pear(cx: number, top: number): string {
  // Exactly the same unoutlined silhouette is used against both fields.
  return path(`M ${cx} ${top + 14} C ${cx - 30} ${top + 4} ${cx - 31} ${top + 48} ${cx - 42} ${top + 67} C ${cx - 63} ${top + 98} ${cx - 91} ${top + 122} ${cx - 75} ${top + 165} C ${cx - 57} ${top + 210} ${cx + 57} ${top + 210} ${cx + 75} ${top + 165} C ${cx + 91} ${top + 122} ${cx + 63} ${top + 98} ${cx + 42} ${top + 67} C ${cx + 31} ${top + 48} ${cx + 30} ${top + 4} ${cx} ${top + 14} Z`, '#35654D', 'none')
    + path(`M ${cx} ${top + 18} Q ${cx - 3} ${top - 4} ${cx + 10} ${top - 15}`, 'none', '#35654D', 8)
}

function pearFields(): Graphic {
  return graphic('001', 'Keep the pear. Change the field.',
    'Two identical, unoutlined pear silhouettes are #35654D. The left field is dark green #486754; the right field is pale ivory #F3EBDD. Neither the pear shape nor its color changes. The larger light-dark difference comes from the replacement field.',
    text('Same silhouette, different neighboring value.', 40, 120)
    + rect(40, 152, 296, 296, '#486754')
    + rect(384, 152, 296, 296, '#F3EBDD')
    + pear(188, 204) + pear(532, 204)
    + text('Before: #486754', 188, 489, { anchor: 'middle' })
    + text('After: #F3EBDD', 532, 489, { anchor: 'middle' })
    + rect(48, 531, 128, 64, '#35654D')
    + text('Pear stays #35654D', 204, 554, { weight: 700 })
    + text('Only the field changes.', 204, 589)
    + text('Fix the boundary before adding speckles.', 40, 644), 680)
}

function basil(cx: number, y: number, fill: string): string {
  return path(`M ${cx} ${y + 132} Q ${cx - 3} ${y + 70} ${cx + 1} ${y}`, 'none', fill, 5)
    + path(`M ${cx} ${y + 36} C ${cx - 50} ${y + 33} ${cx - 60} ${y - 1} ${cx - 42} ${y - 18} C ${cx - 10} ${y - 10} ${cx - 6} ${y + 7} ${cx} ${y + 36} Z`, fill, 'none')
    + path(`M ${cx} ${y + 65} C ${cx + 40} ${y + 69} ${cx + 62} ${y + 39} ${cx + 45} ${y + 19} C ${cx + 18} ${y + 24} ${cx + 9} ${y + 36} ${cx} ${y + 65} Z`, fill, 'none')
    + path(`M ${cx} ${y + 105} C ${cx - 49} ${y + 112} ${cx - 62} ${y + 76} ${cx - 46} ${y + 55} C ${cx - 16} ${y + 65} ${cx - 6} ${y + 80} ${cx} ${y + 105} Z`, fill, 'none')
}

function basilCandidates(): Graphic {
  const colors = ['#2F8F57', '#687A6E', '#17482C', '#2F578F']
  const labels = ['Initial', 'Muted', 'Darker', 'Blue hue']
  return graphic('002', 'Name the change to the basil',
    'The same basil sprig and unchanged BASIL RECIPES heading accompany four adjacent screen-color chips. Initial #2F8F57 becomes muted #687A6E, darker #17482C, or blue #2F578F in separate candidates. These selections do not isolate perceptual properties mathematically.',
    text('One shape. Four chosen screen colors.', 40, 120)
    + text('BASIL RECIPES', 48, 193, { size: 52, weight: 700 })
    + colors.map((color, i) => basil(116 + i * 164, 270, color)).join('')
    + colors.map((color, i) => rect(40 + i * 160, 450, 160, 82, color)).join('')
    + labels.map((label, i) => text(label, 120 + i * 160, 570, { anchor: 'middle', weight: 700 })).join('')
    + colors.map((color, i) => text(color, 120 + i * 160, 609, { anchor: 'middle' })).join('')
    + text('Compare each leaf beside the unchanged title.', 40, 664), 704)
}

function simultaneousContrast(): Graphic {
  return graphic('003', 'Same center, different surround',
    'Two 112 by 112 px centers have identical opaque #808080 fill. The left center is surrounded continuously by #202020; the right by #F2F2F2. Both surrounds measure 304 by 304 px. Compare apparent lightness while holding the target values and sizes fixed.',
    text('Surround #202020', 32, 128)
    + text('Surround #F2F2F2', 384, 128)
    + rect(32, 160, 304, 304, '#202020')
    + rect(384, 160, 304, 304, '#F2F2F2')
    + rect(128, 256, 112, 112, '#808080')
    + rect(480, 256, 112, 112, '#808080')
    + line(184, 490, 184, 520) + line(536, 490, 536, 520)
    + line(184, 520, 536, 520)
    + text('#808080 in both centers', 360, 568, { anchor: 'middle', weight: 700 })
    + text('Cover the surrounds; keep the samples fixed.', 40, 625), 668)
}

function platformPalette(): Graphic {
  return graphic('004', 'Which blue is warmer than which?',
    'An original railway-platform drawing uses violet-blue #5869A8 for its roof, green-blue #297E91 for the puddle, and amber #D79A45 for the hanging shelter lamp. Three adjacent chips repeat these exact colors. The roof blue is redder relative to the puddle blue; both are cool relative to the lamp.',
    text('Compare the roof, the puddle and the lamp.', 40, 120)
    + path('M 76 274 L 172 182 H 558 L 654 274 Z', '#5869A8', 'none')
    + line(136, 274, 136, 402, '#5869A8', 12)
    + line(598, 274, 598, 402, '#5869A8', 12)
    + line(64, 405, 664, 405, INK, 3)
    + line(474, 274, 474, 296, INK, 3)
    + circle(474, 319, 23, '#D79A45')
    + line(228, 352, 396, 352, INK, 6)
    + line(228, 365, 396, 365, INK, 6)
    + line(248, 369, 248, 402, INK, 4)
    + line(376, 369, 376, 402, INK, 4)
    + path('M 102 434 C 162 417 224 421 268 434 C 326 427 388 438 417 453 C 347 474 229 463 184 468 C 113 463 77 451 102 434 Z', '#297E91', 'none')
    + [76, 104, 634, 662].map((x) => line(x, 306, x - 16, 341, '#297E91', 2)).join('')
    + ['Roof', 'Puddle', 'Lamp'].map((label, i) => text(label, 152 + i * 208, 514, { anchor: 'middle', weight: 700 })).join('')
    + ['#5869A8', '#297E91', '#D79A45'].map((color, i) => rect(48 + i * 208, 534, 208, 64, color)
      + text(color, 152 + i * 208, 635, { anchor: 'middle' })).join('')
    + text('Relative hue, not a fixed emotional code.', 40, 682))
}

function invitationPalette(): Graphic {
  return graphic('005', 'Give each invitation color a job',
    'A seed-swap invitation has a #F5EBDD cream field. SEED SWAP, Saturday at 11, and Community room are all dark green #243F35. Three small terracotta #C55A30 seeds supply an optional accent. Covering those seeds does not remove any event information. Adjacent chips repeat the three role colors.',
    rect(64, 128, 592, 372, '#F5EBDD', '#243F35')
    + text('SEED SWAP', 100, 213, { size: 54, weight: 700, fill: '#243F35' })
    + line(104, 243, 610, 243, '#243F35', 2)
    + text('Saturday at 11', 104, 300, { size: 32, fill: '#243F35' })
    + text('Community room', 104, 346, { size: 32, fill: '#243F35' })
    + path('M 522 425 C 494 416 495 376 532 364 C 546 396 541 418 522 425 Z', '#C55A30', 'none')
    + path('M 554 446 C 535 427 550 396 586 400 C 584 433 573 448 554 446 Z', '#C55A30', 'none')
    + path('M 589 381 C 568 368 577 339 609 338 C 614 365 605 382 589 381 Z', '#C55A30', 'none')
    + ['Field', 'Essential words', 'Seed motif'].map((label, i) => text(label, 152 + i * 208, 544, { anchor: 'middle' })).join('')
    + ['#F5EBDD', '#243F35', '#C55A30'].map((color, i) => rect(48 + i * 208, 564, 208, 56, color)
      + text(color, 152 + i * 208, 654, { anchor: 'middle' })).join('')
    + text('Cover the seeds. Event, time and place remain.', 40, 690))
}

function paintDab(cx: number, y: number, color: string): string {
  return path(`M ${cx - 52} ${y + 32} Q ${cx - 72} ${y + 8} ${cx - 35} ${y + 6} Q ${cx - 5} ${y - 5} ${cx + 20} ${y + 6} Q ${cx + 68} ${y + 3} ${cx + 56} ${y + 33} Q ${cx + 44} ${y + 63} ${cx + 9} ${y + 55} Q ${cx - 41} ${y + 71} ${cx - 52} ${y + 32} Z`, color, 'none')
}

function lightAndPigment(): Graphic {
  const r = circle(166, 238, 80, '#FF0000')
  const g = circle(278, 238, 80, '#00FF00')
  const b = circle(222, 332, 80, '#0000FF')
  const key: readonly (readonly [string, string])[] = [
    ['R', '#FF0000'], ['G', '#00FF00'], ['B', '#0000FF'],
    ['RG', '#FFFF00'], ['RGB', '#FFFFFF'], ['0', '#000000'],
  ]
  // Intersections are explicit RGB channel unions, not alpha blending.
  const venn = `<defs>
<clipPath id="dt-006-r">${circle(166, 238, 80, WHITE)}</clipPath>
<clipPath id="dt-006-g">${circle(278, 238, 80, WHITE)}</clipPath>
<clipPath id="dt-006-b">${circle(222, 332, 80, WHITE)}</clipPath>
</defs>${r}${g}${b}
<g clip-path="url(#dt-006-r)">${circle(278, 238, 80, '#FFFF00')}${circle(222, 332, 80, '#FF00FF')}</g>
<g clip-path="url(#dt-006-g)">${circle(222, 332, 80, '#00FFFF')}</g>
<g clip-path="url(#dt-006-r)"><g clip-path="url(#dt-006-g)">${circle(222, 332, 80, WHITE)}</g></g>`
  return graphic('006', 'Light adds. Pigments absorb.',
    'Overlapping red, green and blue discs show full-channel additive combinations on black. Red plus green is #FFFF00; all three intersect at #FFFFFF. The key includes #FF0000, #00FF00, #0000FF, #FFFF00, #FFFFFF and zero-channel #000000. Below, irregular paint dabs show red #B44132 plus green #43694A and a possible muted #6A5542 outcome, not a paint recipe.',
    text('Emitted light: full-channel RGB', 40, 120)
    + rect(40, 144, 368, 292, '#000000') + venn
    + key.map(([label, color], i) => rect(446, 147 + i * 51, 32, 32, color, INK)
      + text(`${label} ${color}`, 492, 172 + i * 51)).join('')
    + text('Pigment: one possible outcome', 40, 501)
    + ['Red paint', 'Green paint', 'Possible mix'].map((label, i) => text(label, 128 + i * 232, 544, { anchor: 'middle' })).join('')
    + paintDab(128, 563, '#B44132') + paintDab(360, 563, '#43694A') + paintDab(592, 563, '#6A5542')
    + text('+', 244, 607, { size: 36, anchor: 'middle' })
    + arrow(456, 596, 496, 596, INK)
    + ['#B44132', '#43694A', '#6A5542'].map((color, i) => text(color, 128 + i * 232, 675, { anchor: 'middle' })).join(''))
}

function walkingMap(x: number, fill: string, pencil: string): string {
  return rect(x, 156, 296, 310, fill)
    + path(`M ${x + 30} 418 L ${x + 99} 354 L ${x + 103} 308 L ${x + 182} 277 L ${x + 230} 218`, 'none', pencil, 5)
    + path(`M ${x + 29} 214 H ${x + 120} V 265 H ${x + 29} Z M ${x + 48} 214 V 198 H ${x + 105} V 214`, 'none', pencil, 2)
    + text('MILL', x + 46, 248, { fill: pencil })
    + path(`M ${x + 168} 351 Q ${x + 229} 326 ${x + 269} 353 L ${x + 256} 416 Q ${x + 211} 435 ${x + 161} 407 Z`, 'none', pencil, 2)
    + text('PARK', x + 180, 388, { fill: pencil })
    + circle(x + 30, 418, 7, fill, pencil)
    + circle(x + 230, 218, 7, fill, pencil)
}

function viewingConditions(): Graphic {
  return graphic('007', 'Change the view, not the map file',
    'The same original walking-map linework appears twice. Stored paper #E8E5DD and pencil #424242 are shown on the left. The right uses explanatory warm-view stand-ins #E8D4AC and #494236. The right-hand colors describe possible appearance, not a saved file edit or a measured display transformation.',
    text('Stored map', 40, 125, { weight: 700 })
    + text('Warm-view stand-in', 384, 125, { weight: 700 })
    + walkingMap(40, '#E8E5DD', '#424242')
    + walkingMap(384, '#E8D4AC', '#494236')
    + ['#E8E5DD', '#424242', '#E8D4AC', '#494236'].map((color, i) => {
      const x = i < 2 ? 40 + i * 148 : 384 + (i - 2) * 148
      return rect(x, 507, 148, 56, color) + text(color, x + 74, 600, { anchor: 'middle' })
    }).join('')
    + text('Paper / pencil', 188, 641, { anchor: 'middle' })
    + text('Paper / pencil', 532, 641, { anchor: 'middle' })
    + text('Same file. Check the viewing conditions first.', 40, 685))
}

function waitingRoom(x: number, patch: string): string {
  return rect(x, 154, 192, 258, '#E9E5DC')
    + rect(x + 24, 180, 144, 144, patch, INK)
    + text('Timetable', x + 96, 212, { anchor: 'middle' })
    + line(x + 40, 227, x + 152, 227, INK, 1)
    + text('09:10', x + 96, 264, { size: 28, anchor: 'middle' })
    + text('09:40', x + 96, 302, { size: 28, anchor: 'middle' })
    + line(x + 20, 364, x + 172, 364, INK, 8)
    + line(x + 36, 368, x + 36, 400, INK, 4)
    + line(x + 156, 368, x + 156, 400, INK, 4)
}

function correctionAndGrade(): Graphic {
  return graphic('008', 'Keep a baseline before choosing a look',
    'Three copies of an original waiting-room timetable and bench retain the same drawing. The timetable patch changes from unwanted greenish #B6C8B7 to neutral baseline #C4C4C4, then to deliberate warm #D1C4AF. Neutral correction and creative warmth are separate decisions, with the baseline retained.',
    ['Start', 'Baseline', 'Look'].map((label, i) => text(label, 136 + i * 224, 128, { anchor: 'middle', weight: 700 })).join('')
    + waitingRoom(40, '#B6C8B7') + waitingRoom(264, '#C4C4C4') + waitingRoom(488, '#D1C4AF')
    + ['Unwanted cast', 'Neutral', 'Evening look'].map((label, i) => text(label, 136 + i * 224, 454, { anchor: 'middle' })).join('')
    + ['#B6C8B7', '#C4C4C4', '#D1C4AF'].map((color, i) => text(color, 136 + i * 224, 493, { anchor: 'middle' })).join('')
    + arrow(144, 542, 346, 542) + arrow(374, 542, 576, 542)
    + text('Remove cast', 245, 585, { anchor: 'middle' })
    + text('Choose warmth', 475, 585, { anchor: 'middle' })
    + text('Keep the neutral version when trying a look.', 40, 654), 696)
}

function scopes(): Graphic {
  return graphic('009', 'A waveform keeps horizontal position',
    'Eight equal 80 px wide image blocks contain six dark #333333 blocks at the left and two bright #CCCCCC blocks at the right. Beneath, a schematic waveform stays low over the first six blocks and high over the last two. A separate horizontal histogram has bar lengths 336 and 112 px: six and two blocks, or 75 and 25 percent. Waveform heights are schematic, not an IRE or luminance conversion.',
    text('Eight equal-area blocks: 6 dark + 2 bright.', 40, 120)
    + Array.from({ length: 8 }, (_, i) => rect(40 + i * 80, 152, 80, 116, i < 6 ? '#333333' : '#CCCCCC')).join('')
    + Array.from({ length: 7 }, (_, i) => line(120 + i * 80, 152, 120 + i * 80, 268, PAPER, 1)).join('')
    + text('DARK WALL', 68, 221, { size: 28, fill: WHITE, weight: 700 })
    + text('WINDOW', 600, 220, { anchor: 'middle' })
    + text('#333333', 280, 304, { anchor: 'middle' })
    + text('#CCCCCC', 600, 304, { anchor: 'middle' })
    + text('Signal level', 40, 348, { weight: 700 })
    + line(40, 369, 40, 512, INK) + line(40, 512, 680, 512, INK)
    + line(520, 324, 520, 512, GUIDE, 1, true)
    + path('M 40 478 H 520 V 389 H 680', 'none', RED, 4)
    + text('Low', 64, 463) + text('High', 589, 375)
    + text('Left-to-right image position', 360, 553, { anchor: 'middle' })
    + text('Histogram: counts, not location', 40, 596, { weight: 700 })
    + text('Dark', 40, 636) + rect(208, 613, 336, 26, '#333333')
    + text('6 / 75%', 568, 636)
    + text('Bright', 40, 681) + rect(208, 658, 112, 26, '#CCCCCC', INK)
    + text('2 / 25%', 568, 681))
}

function mixedLight(): Graphic {
  return graphic('010', 'Choose the light for your neutral',
    'An original room diagram separates a #AFCDE5 window lighting folded #C4C4C4 paper from an #E4B55F desk lamp lighting a #D6B47C amber wall. The folded paper has actual crease lines. Adjacent samples show paper before #B8C8BA, target #C4C4C4 and intentionally amber wall #D6B47C. Correcting the chosen paper sample does not require neutralizing the wall.',
    text('Window on paper', 48, 130, { weight: 700 })
    + text('Lamp on wall', 442, 130, { weight: 700 })
    + rect(426, 166, 238, 272, '#D6B47C')
    + path('M 160 275 L 336 422 H 176 L 100 280 Z', '#E5EEF3', 'none')
    + rect(68, 180, 132, 130, '#AFCDE5', INK)
    + line(134, 181, 134, 309, INK, 4) + line(69, 245, 199, 245, INK, 4)
    + line(64, 420, 374, 420, INK, 8)
    + line(92, 424, 92, 472, INK, 4) + line(346, 424, 346, 472, INK, 4)
    + path('M 192 345 L 309 335 L 344 405 L 183 405 Z', '#C4C4C4', INK)
    + path('M 192 345 L 262 373 L 309 335 M 262 373 L 273 405', 'none', '#737373', 2)
    + arrow(173, 322, 225, 356, '#4B6B83')
    + ellipse(555, 429, 45, 8, INK)
    + path('M 555 423 V 364 L 608 311 L 565 266', 'none', INK, 6)
    + path('M 535 242 L 565 234 L 607 279 L 538 298 Z', '#E4B55F', INK)
    + arrow(572, 305, 622, 367, '#7A4C13')
    + ['Paper before', 'Paper target', 'Wall'].map((label, i) => text(label, 152 + i * 208, 520, { anchor: 'middle' })).join('')
    + ['#B8C8BA', '#C4C4C4', '#D6B47C'].map((color, i) => rect(48 + i * 208, 541, 208, 67, color)
      + text(color, 152 + i * 208, 645, { anchor: 'middle' })).join('')
    + text("Choose the paper's light. Leave the wall amber.", 40, 688))
}

function foldedProgram(x: number, y: number, dark: string, light: string): string {
  return path(`M ${x} ${y + 30} L ${x + 122} ${y} V ${y + 138} L ${x} ${y + 156} Z`, dark, 'none')
    + path(`M ${x + 122} ${y} L ${x + 244} ${y + 30} V ${y + 156} L ${x + 122} ${y + 138} Z`, light, 'none')
}

function retainedDetail(): Graphic {
  return graphic('011', 'A darker blank is still blank',
    'Two featureless rectangular source patches have identical geometry: #FFFFFF before and #BBBBBB after lowering the tone. Neither contains a fold. Below, two folded-program drawings keep identical crisp polygon boundaries. The soft pair is #666666 and #AAAAAA; the harder pair is #222222 and #DDDDDD. Tonal separation changes without changing edge sharpness.',
    text('Blank source patch', 56, 129)
    + text('Lowered blank patch', 400, 129)
    + rect(56, 156, 256, 160, WHITE, GUIDE)
    + rect(400, 156, 256, 160, '#BBBBBB', GUIDE)
    + arrow(334, 236, 376, 236)
    + text('#FFFFFF', 184, 356, { anchor: 'middle' })
    + text('#BBBBBB', 528, 356, { anchor: 'middle' })
    + text('Soft tonal separation', 56, 413)
    + text('Hard tonal separation', 400, 413)
    + foldedProgram(56, 442, '#666666', '#AAAAAA')
    + foldedProgram(400, 442, '#222222', '#DDDDDD')
    + text('#666666 / #AAAAAA', 178, 642, { anchor: 'middle' })
    + text('#222222 / #DDDDDD', 522, 642, { anchor: 'middle' })
    + text('Same sharp edge; different tonal separation.', 40, 686))
}

function patternPaper(x: number, y: number, width: number, height: number, color: string): string {
  return path(`M ${x + 16} ${y} H ${x + width - 14} L ${x + width} ${y + 26} V ${y + height} H ${x} V ${y + 18} Z`, color, INK, 1)
    + line(x + width * .45, y + 10, x + width * .45, y + height - 10, '#625D52', 1, true)
    + path(`M ${x + width - 30} ${y + 26} L ${x + width - 20} ${y + 39} L ${x + width - 30} ${y + 52}`, 'none', '#625D52', 1)
}

function shotMatching(): Graphic {
  return graphic('012', 'Follow the paper across the cut',
    'An original vector wide view of a sewing table shows cream #C8C0AE pattern paper on blue cloth. Two larger views below retain the same pattern shape and cloth color. The close-view paper before is yellower #CFC3A4; the target repeats #C8C0AE. The close crops contain different paper-to-cloth proportions from the wide view. These are explanatory drawings, not sampled footage.',
    text('Wide reference: #C8C0AE', 48, 124)
    + rect(48, 145, 624, 207, '#586F89')
    + patternPaper(126, 179, 234, 137, '#C8C0AE')
    + rect(486, 205, 45, 79, '#DDD4C5', INK, 4)
    + ellipse(508.5, 205, 27, 9, '#DDD4C5', INK)
    + ellipse(508.5, 284, 27, 9, '#DDD4C5', INK)
    + [223, 237, 251, 265].map((y) => line(488, y, 529, y, '#817B71', 2)).join('')
    + path('M 530 268 Q 612 303 588 334 H 422', 'none', '#DDD4C5', 2)
    + text('Close view before', 48, 403, { weight: 700 })
    + text('Close-view target', 376, 403, { weight: 700 })
    + rect(48, 424, 296, 170, '#586F89')
    + rect(376, 424, 296, 170, '#586F89')
    + patternPaper(78, 442, 238, 136, '#CFC3A4')
    + patternPaper(406, 442, 238, 136, '#C8C0AE')
    + text('#CFC3A4', 196, 634, { anchor: 'middle' })
    + text('#C8C0AE', 524, 634, { anchor: 'middle' })
    + text('Check the shared paper, then the same blue cloth.', 40, 685))
}

function letterAnatomy(): Graphic {
  return graphic('013', 'Name the feature in the actual letter',
    'Large Arial h, e, o and g share a baseline at y = 338. A second dashed guide marks the approximate top of the Arial lowercase body. Callouts point to the h ascender, the open right side of e, the interior counter of o and the descender of g below the baseline. Hedge guide appears below at 56 and 28 px for a real-word inspection. Guides describe the system-font specimen, not every Latin typeface.',
    text('Ascender', 48, 141) + text('Aperture', 224, 181)
    + text('Counter', 431, 141)
    + line(48, 257, 672, 257, GUIDE, 1, true)
    + line(48, 338, 672, 338, RED, 2)
    + ['h', 'e', 'o', 'g'].map((letter, i) => text(letter, 108 + i * 164, 338, { size: 156, anchor: 'middle' })).join('')
    + path('M 107 152 L 84 197 V 224', 'none', RED)
    + path('M 279 192 L 328 231 L 308 301', 'none', RED)
    + circle(303, 306, 7, 'none', RED)
    + path('M 477 151 L 479 214 L 444 280', 'none', RED)
    + circle(436, 296, 16, 'none', RED)
    + text('Baseline', 48, 407, { weight: 700 })
    + line(154, 393, 171, 339, RED)
    + text('Descender', 672, 421, { anchor: 'end' })
    + path('M 601 397 L 585 371', 'none', RED)
    + circle(585, 367, 8, 'none', RED)
    + line(48, 257, 48, 338, INK)
    + text('Lowercase body: between the two guides', 48, 463)
    + line(40, 496, 680, 496)
    + text('Hedge guide', 48, 574, { size: 56 })
    + text('Hedge guide', 48, 627, { size: 28 })
    + text('Same words', 441, 564)
    + text('Two sizes', 441, 604)
    + text('Inspect the e at the final reading size.', 48, 682))
}

function studyX(x: number, baseline: number, width: number, height: number): string {
  const top = baseline - height
  // Original crossed-stroke glyph. Its visible top and bottom are exact geometry.
  return path(`M ${x} ${top} H ${x + width * .22} L ${x + width * .5} ${top + height * .36} L ${x + width * .78} ${top} H ${x + width} L ${x + width * .62} ${top + height * .5} L ${x + width} ${baseline} H ${x + width * .78} L ${x + width * .5} ${top + height * .64} L ${x + width * .22} ${baseline} H ${x} L ${x + width * .38} ${top + height * .5} Z`, INK, 'none')
}

function xHeight(): Graphic {
  const unit = 12
  const baseline = 310
  const frames = [84, 400].map((x, i) => {
    const units = i === 0 ? 7 : 9
    const top = baseline - units * unit
    return rect(x, 154, 208, 16 * unit, WHITE, GUIDE)
      + line(x, top, x + 208, top, RED, 1, true)
      + line(x, baseline, x + 208, baseline, RED, 2)
      + studyX(x + 68, baseline, 72, units * unit)
      + line(x + 226, top, x + 226, baseline, INK)
      + line(x + 220, top, x + 232, top, INK)
      + line(x + 220, baseline, x + 232, baseline, INK)
      + text(String(units), x + 239, (top + baseline) / 2 + 8)
      + text(`Study ${i === 0 ? 'A' : 'B'}: 16 units`, x + 104, 128, { anchor: 'middle', weight: 700 })
      + text(`x-height: ${units} units`, x + 104, 386, { anchor: 'middle' })
  }).join('')
  return graphic('014', 'Equal sizes, unequal lowercase bodies',
    'Two invented 16-unit design spaces are drawn at 12 SVG px per unit, hence 192 px high. Their baselines sit three units above the bottom. Original x glyphs have exact visible heights 84 and 108 px, representing 7 and 9 units. Below, Arial and Georgia render the same seed sentence at 36 px, without stretching. The named fonts are separate examples, not the sources of the invented metrics.',
    frames
    + text('1 unit = 12 SVG px. The x studies are invented.', 40, 427)
    + line(40, 451, 680, 451)
    + text('Same 36 px size, real system text', 40, 491, { weight: 700 })
    + text('Arial', 48, 533) + text('Georgia', 384, 533)
    + lines(['Mix six seeds', 'in loose soil.'], 48, 579, 45, { size: 36 })
    + lines(['Mix six seeds', 'in loose soil.'], 384, 579, 45, { size: 36, family: 'Georgia' })
    + text('Named fonts are not the 7 / 9-unit studies.', 40, 684))
}

function recipeReading(): Graphic {
  return graphic('015', 'Read the recipe as a sequence',
    'The same exact directions appear twice in 30 px Arial: Rinse the beans. Drain them well. Add the tomato. The first is one running block wrapping after well. The second gives each complete action its own line with more space between actions. Wording and glyph size remain unchanged.',
    text('One running block', 48, 133, { weight: 700 })
    + lines(['Rinse the beans. Drain them well.', 'Add the tomato.'], 64, 196, 42, { size: 30 })
    + line(48, 299, 672, 299)
    + text('Three action lines', 48, 347, { weight: 700 })
    + lines(['Rinse the beans.', 'Drain them well.', 'Add the tomato.'], 64, 415, 78, { size: 30 })
    + text('Same words and 30 px type.', 48, 637)
    + text('The action boundaries now match the line breaks.', 48, 677))
}

function lineLength(): Graphic {
  return graphic('016', 'Watch where the sentence wraps',
    'The same two sentences use 32 px Arial and 48 px baseline spacing in both trials: Walk past the old mill. Follow the path. In the 416 px column, each sentence occupies one line. In the 176 px column, the lines are Walk past; the old mill.; Follow the; path. Red return paths show movement back to the next left margin. Widths are construction dimensions, not recommendations.',
    text('Same words and 32 px Arial; two column widths.', 40, 120)
    + line(64, 162, 64, 282, GUIDE, 1, true)
    + line(480, 162, 480, 282, GUIDE, 1, true)
    + lines(['Walk past the old mill.', 'Follow the path.'], 64, 210, 48, { size: 32 })
    + path('M 382 211 C 462 231 458 236 54 236 V 253', 'none', RED)
    + path('M 48 246 L 54 254 L 60 246', 'none', RED)
    + text('Longer', 545, 206) + text('return', 545, 241)
    + dimension(64, 480, 300, '416 px')
    + text('Narrower column, unchanged letter size', 40, 385, { weight: 700 })
    + line(64, 408, 64, 588, GUIDE, 1, true)
    + line(240, 408, 240, 588, GUIDE, 1, true)
    + lines(['Walk past', 'the old mill.', 'Follow the', 'path.'], 64, 438, 48, { size: 32 })
    + path('M 212 438 C 287 457 284 464 54 464 V 481', 'none', RED)
    + path('M 48 474 L 54 482 L 60 474', 'none', RED)
    + lines(['More returns,', 'shorter trips.'], 345, 478, 38)
    + dimension(64, 240, 610, '176 px')
    + text('Compare wraps without reducing the letter size.', 40, 686))
}

function leading(): Graphic {
  const credits = ['Images: Héloise Ng', 'Sound: Hugo Gill', 'Thanks: Jo']
  const schematic = credits.map((value, i) => {
    const y = 206 + i * 60
    return line(48, y, 528, y, GUIDE, 1, true)
      + text(value, 64, y, { size: 50 })
      + text(`${i * 12} pt`, 575, y + 7)
  }).join('')
  return graphic('017', 'Move the baselines, not the font size',
    'Images: Héloise Ng, Sound: Hugo Gill, and Thanks: Jo occupy baselines 206, 266 and 326 SVG px. At the declared schematic scale of 5 SVG px per point, offsets are 0, 12 and 24 pt. A 10 pt body plus 2 pt added leading explains a 12 pt interval. Below, two real 32 px Arial credit blocks have 28 px and 48 px baseline spacing. Accents and g descenders remain present.',
    text('10 pt body + 2 pt added leading = 12 pt', 40, 122)
    + schematic
    + line(548, 206, 548, 326, INK)
    + [206, 266, 326].map((y) => line(540, y, 556, y, INK)).join('')
    + text('Two equal 12 pt baseline intervals', 48, 383)
    + text('Schematic scale: 1 pt = 5 SVG px', 48, 424)
    + line(40, 451, 680, 451)
    + text('Same 32 px type; different baseline spacing', 40, 486, { weight: 700 })
    + text('Tighter: 28 px', 40, 529)
    + text('Looser: 48 px', 392, 529)
    + credits.map((value, i) => line(40, 569 + i * 28, 328, 569 + i * 28, GUIDE, 1, true)
      + text(value, 40, 569 + i * 28, { size: 32 })).join('')
    + credits.map((value, i) => line(392, 569 + i * 48, 680, 569 + i * 48, GUIDE, 1, true)
      + text(value, 392, 569 + i * 48, { size: 32 })).join(''))
}

function kerningTracking(): Graphic {
  const rows = [
    { label: 'Initial: 20 / 50 / 80', units: [20, 50, 80] },
    { label: 'Kern AV: 20 / 44 / 74', units: [20, 44, 74] },
    { label: 'Track run: 14 / 50 / 86', units: [14, 50, 86] },
  ]
  const body = rows.map((row, i) => {
    const xs = row.units.map((unit) => 60 + unit * 6)
    const baseline = 222 + i * 200
    return text(row.label, 40, 112 + i * 200, { weight: 700 })
      + ['A', 'V', 'A'].map((letter, j) => text(letter, xs[j], baseline, { size: 112, family: 'Georgia', anchor: 'middle' })).join('')
      + xs.map((x) => line(x, baseline + 9, x, baseline + 19, GUIDE, 1)).join('')
      + dimension(xs[0], xs[1], baseline + 27, `${row.units[1] - row.units[0]} units`)
      + dimension(xs[1], xs[2], baseline + 27, `${row.units[2] - row.units[1]} units`)
  }).join('')
  return graphic('018', 'Kerning changes a pair; tracking a run',
    'Three rows use the same individual 112 px Georgia A, V and A glyphs with explicitly centered positions. A coordinate unit equals 6 SVG px, with a fixed 60 px origin. Initial centers 20,50,80 give 30/30 separations. Pair-adjusted centers 20,44,74 give 24/30: both trailing letters move left 36 px. Tracking centers 14,50,86 give 36/36. These are center placements, not ink-gap or automatic kerning measurements.',
    text('1 unit', 592, 245)
    + text('= 6 px', 592, 279)
    + body)
}

function gridFlyer(): Graphic {
  const widths = [60, 210, 60, 210, 60]
  let cursor = 60
  const ruler = widths.map((width, i) => {
    const x = cursor
    cursor += width
    return rect(x, 122, width, 32, i % 2 === 0 ? '#DDD7CC' : WHITE, GUIDE)
      + text(String(width / 30), x + width / 2, 147, { anchor: 'middle' })
  }).join('')
  return graphic('019', 'Give the flyer shared edges',
    'A 600 px wide screening flyer uses 30 SVG px per squared-paper unit. From left to right its widths are 60,210,60,210,60 px: margins 2 units each, columns 7 units each and a 2-unit gutter, totaling 20. The title spans both columns. An original roof-and-window drawing and its caption start at x = 120; Saturday, 19:15, Library room and Book at desk start at x = 390. The shared edges are shown as vertical guides.',
    text('20 units = 600 px. One unit = 30 px.', 40, 106)
    + ruler
    + rect(60, 168, 600, 422, WHITE, INK)
    + rect(330, 168, 60, 422, '#F1E5E3')
    + [120, 330, 390, 600].map((x) => line(x, 172, x, 580, GUIDE, 1, true)).join('')
    + text('NEIGHBORHOOD', 120, 221, { size: 28, weight: 700 })
    + text('SCREENING', 120, 278, { size: 48, weight: 700 })
    + rect(120, 318, 210, 136, '#E3E5DF')
    + path('M 131 419 V 370 L 180 338 L 232 370 V 419 Z', '#596C70', 'none')
    + rect(163, 373, 34, 45, '#F0D5A5')
    + line(180, 374, 180, 418, '#596C70', 3)
    + path('M 234 440 L 273 400 L 317 434 M 127 444 H 324', 'none', INK, 2)
    + lines(['An original', 'drawing'], 120, 493, 34)
    + text('Saturday', 390, 351, { size: 28 })
    + text('19:15', 390, 399, { size: 40, weight: 700 })
    + text('Library room', 390, 446, { size: 28 })
    + text('Book at desk', 390, 534, { weight: 700 })
    + text('Outer margins: 2 each. Columns: 7 each.', 40, 639)
    + text('Gutter: 2. The title spans both columns.', 40, 680))
}

function labelGroups(): Graphic {
  return graphic('020', 'Keep each label nearer its own field',
    'Two fictional forms show Date with Sat 14 Nov and Venue with Library room. On the left, similar visible gaps leave Venue between fields. On the right, Date moves closer to its field and Venue closer to its own field, while the complete pairs are separated. A third sample wraps Venue and room name over two lines and keeps its field below the whole label. These are drawings, not live programmatic labels.',
    text('Similar gaps', 48, 126, { weight: 700 })
    + text('Grouped gaps', 400, 126, { weight: 700 })
    + text('Date', 48, 180, { size: 28 })
    + rect(48, 222, 264, 66, WHITE, INK, 4)
    + text('Sat 14 Nov', 64, 264, { size: 28 })
    + text('Venue', 48, 348, { size: 28 })
    + rect(48, 396, 264, 66, WHITE, INK, 4)
    + text('Library room', 64, 438, { size: 28 })
    + text('Date', 400, 180, { size: 28 })
    + rect(400, 194, 272, 66, WHITE, INK, 4)
    + text('Sat 14 Nov', 416, 236, { size: 28 })
    + text('Venue', 400, 376, { size: 28 })
    + rect(400, 396, 272, 66, WHITE, INK, 4)
    + text('Library room', 416, 438, { size: 28 })
    + path('M 677 156 H 686 V 260 H 677 M 677 351 H 686 V 462 H 677', 'none', RED)
    + line(40, 501, 680, 501)
    + text('Wrapped label, same pairing', 48, 542, { weight: 700 })
    + lines(['Venue and room', 'name'], 48, 581, 34, { size: 28 })
    + rect(48, 632, 624, 54, WHITE, INK, 4)
    + text('Library room', 64, 669, { size: 28 }))
}

function ticketHierarchy(): Graphic {
  return graphic('021', 'Let the entrance question come first',
    'An original Museum Night ticket gives GATE C the strongest type at 82 px and places it high on the ticket. Admission and 19:15 follow; Museum Night is smaller below. A numbered rail proposes gate, time, then event identity. The rail is an intended scanning order, not eye-tracking evidence.',
    path('M 104 143 H 616 V 352 Q 592 352 592 376 Q 592 400 616 400 V 608 H 104 V 400 Q 128 400 128 376 Q 128 352 104 352 Z', WHITE, INK)
    + text('ENTRANCE', 148, 211, { size: 28 })
    + text('GATE C', 148, 301, { size: 82, weight: 700 })
    + text('Admission', 148, 381, { size: 28 })
    + text('19:15', 148, 448, { size: 54, weight: 700 })
    + line(148, 483, 570, 483, INK, 1, true)
    + text('Museum Night', 148, 550, { size: 30 })
    + [271, 416, 542].map((y, i) => circle(52, y, 20, RED)
      + text(String(i + 1), 52, y + 8, { fill: WHITE, anchor: 'middle', weight: 700 })
      + arrow(76, y, 95, y)).join('')
    + arrow(52, 300, 52, 383) + arrow(52, 445, 52, 509)
    + text('Gate, then time, then event identity.', 48, 666), 708)
}

function typeRoles(): Graphic {
  return graphic('022', 'Give display, body and folio distinct jobs',
    'A chapbook page uses Georgia 64 px for Small Rain, Arial 32 px for The roof holds yesterday\'s rain., and Arial 24 px for folio 12. Callouts identify actual title, body and page number. Below, the same title appears in Arial bold and Georgia regular at 44 px, labeled sans serif and serif. These are real system-font specimens; only the title family changes in the proposed alternative.',
    rect(48, 137, 624, 371, WHITE, GUIDE)
    + text('Small Rain', 88, 238, { size: 64, family: 'Georgia' })
    + lines(['The roof holds', "yesterday's rain."], 88, 321, 44, { size: 32 })
    + text('12', 624, 478, { anchor: 'end' })
    + text('Display', 511, 190)
    + path('M 500 196 L 442 209', 'none', RED)
    + text('Body', 528, 325)
    + path('M 514 320 H 399', 'none', RED)
    + text('Folio', 495, 477)
    + arrow(553, 469, 590, 469)
    + text('Title-only alternative; keep the body unchanged.', 40, 553)
    + text('Arial: sans serif', 48, 598)
    + text('Georgia: serif', 384, 598)
    + text('Small Rain', 48, 660, { size: 44, weight: 700 })
    + text('Small Rain', 384, 660, { size: 44, family: 'Georgia' }))
}

function luminance(hex: string): number {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new Error('Expected an opaque sRGB hex color')
  const channels = [1, 3, 5].map((offset) => {
    const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255
    return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4
  })
  return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722
}

function contrastRatio(foreground: string, background: string): number {
  const a = luminance(foreground)
  const b = luminance(background)
  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
}

function detailContrast(): Graphic {
  const pairs = ['#777777', '#595959'].map((color, i) => {
    const y = 142 + i * 238
    const ratio = contrastRatio(color, WHITE)
    // The threshold decision uses the raw ratio; only its displayed label rounds.
    const relation = ratio >= 4.5 ? 'above' : 'below'
    return rect(40, y, 640, 184, WHITE)
      + text('Repair workshop', 64, y + 46, { size: 32, weight: 700 })
      + text('Saturday 14 November', 64, y + 96, { size: 28, fill: color })
      + text('Library room', 64, y + 140, { size: 28, fill: color })
      + text(`${color}: ${ratio.toFixed(3)}:1 (${relation} 4.5:1)`, 48, y + 220, { weight: 700 })
  }).join('')
  return graphic('023', 'Read the date, not just the heading',
    'Two original repair-workshop samples use the exact same opaque #FFFFFF background. Both headings stay dark; the date Saturday 14 November and venue Library room change from #777777 to #595959 at the same enlarged display size. Their calculated opaque sRGB contrast ratios are approximately 4.478:1 and 7.005:1. The first is below the ordinary-text 4.5:1 threshold using the unrounded calculation. Sample enlargement does not redefine the large-text threshold or establish overall accessibility.',
    text('Both detail samples are on #FFFFFF.', 40, 119)
    + pairs
    + text('Enlarged samples. Ratios use opaque sRGB.', 40, 651)
    + text('Judge the ordinary-text threshold before rounding.', 40, 684))
}

function signupPanel(x: number, size: number, step: number, titleLines: readonly string[]): string {
  const baseline = 214
  const date = baseline + (titleLines.length - 1) * step + 54
  const meeting = date + 36
  const button = meeting + 40
  const bottom = button + 60 + 44
  return rect(x, 160, 296, bottom - 160, WHITE, INK, 6)
    + lines(titleLines, x + 24, baseline, step, { size })
    + text('Saturday at 10', x + 24, date, { size: 28 })
    + text('Library steps', x + 24, meeting, { size: 28 })
    + rect(x + 24, button, 248, 60, INK, 'none', 4)
    + text('Join', x + 148, button + 40, { size: 28, fill: WHITE, weight: 700, anchor: 'middle' })
}

function growingType(): Graphic {
  return graphic('024', 'Make room when the title grows',
    'A separate text-resize study shows the full title Saturday sketch walk for first-time visitors in two equally wide signup panels. At 32 px with 44 px line spacing it has three lines; at 40 px with 55 px spacing it has four. The 1.375 line-height ratio stays fixed. The last title baseline moves from 302 to 379, so Saturday at 10, Library steps, Join and the panel bottom all move down exactly 77 px. No word is removed and no later text is covered. This is a static reflow plan, not the distinct WCAG spacing-override test or a working signup control.',
    text('Title 32 px; lines 44 px', 40, 124)
    + text('Title 40 px; lines 55 px', 384, 124)
    + signupPanel(40, 32, 44, ['Saturday sketch', 'walk for first-time', 'visitors'])
    + signupPanel(384, 40, 55, ['Saturday', 'sketch walk', 'for first-time', 'visitors'])
    + text('Same words. Later content moves down 77 px.', 40, 652)
    + text('Text resizing is separate from spacing overrides.', 40, 685))
}

/** Only the first visual is replaced; unknown IDs and other indices fall back. */
export function designTypeOverride(id: string, index: number): { svg: string; width: number; height: number } | null {
  if (index !== 0) return null
  switch (id) {
    case 'design-001': return pearFields()
    case 'design-002': return basilCandidates()
    case 'design-003': return simultaneousContrast()
    case 'design-004': return platformPalette()
    case 'design-005': return invitationPalette()
    case 'design-006': return lightAndPigment()
    case 'design-007': return viewingConditions()
    case 'design-008': return correctionAndGrade()
    case 'design-009': return scopes()
    case 'design-010': return mixedLight()
    case 'design-011': return retainedDetail()
    case 'design-012': return shotMatching()
    case 'design-013': return letterAnatomy()
    case 'design-014': return xHeight()
    case 'design-015': return recipeReading()
    case 'design-016': return lineLength()
    case 'design-017': return leading()
    case 'design-018': return kerningTracking()
    case 'design-019': return gridFlyer()
    case 'design-020': return labelGroups()
    case 'design-021': return ticketHierarchy()
    case 'design-022': return typeRoles()
    case 'design-023': return detailContrast()
    case 'design-024': return growingType()
    default: return null
  }
}