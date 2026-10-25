// Original, static teaching drawings. No downloaded images or film frames.
// Only visual index 0 is overridden. The approved cinema-027 stays separate.
// Follow the current guide IDs: 032 is flicker; 034 is equipment safety.

type Rendered = { svg: string; width: number; height: number }
type TextBox = { x: number; y: number; width: number; height: number; text: string }
type Weight = 400 | 700

const WIDTH = 720
const HEIGHT = 840
const INK = '#272322'
const PAPER = '#fffdf7'
const IVORY = '#f5efe5'
const GRAY = '#625b54'
const BLUE = '#295d76'
const AMBER = '#98601f'
const RED = '#a92c3b'
const GREEN = '#365e4c'
const COOL = '#e0eaee'
const WARM = '#f1dfc9'
const SKIN = '#896047'

function escapeXml(value: string): string {
  // XML 1.0 disallows control characters and unpaired surrogate code points.
  return Array.from(value, (character) => {
    const code = character.codePointAt(0) ?? 0
    return code === 9 || code === 10 || code === 13
      || (code >= 0x20 && code <= 0xd7ff)
      || (code >= 0xe000 && code <= 0xfffd)
      || (code >= 0x10000 && code <= 0x10ffff) ? character : '\ufffd'
  }).join('').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character)
}

function n(value: number): string {
  if (!Number.isFinite(value)) throw new RangeError('Non-finite drawing coordinate')
  return String(Math.round(value * 1000) / 1000)
}

function advance(text: string, size: number, weight: Weight): number {
  // Explicit textLength constrains these estimated Arial advances in SVG too.
  const units = Array.from(text).reduce((sum, character) => {
    if (' ilI.,:;!\'|'.includes(character)) return sum + .278
    if ('mwMW@%'.includes(character)) return sum + .86
    if ('frt()[]/-'.includes(character)) return sum + .36
    if (/[A-Z]/.test(character)) return sum + .68
    if (/[a-z0-9]/.test(character)) return sum + .55
    return sum + .7
  }, 0)
  return units * size * (weight === 700 ? 1.06 : 1.025)
}

class Diagram {
  private readonly parts: string[] = []
  private readonly definitions: string[] = []
  private readonly textBoxes: TextBox[] = []
  private readonly title: string
  private readonly description: string
  private readonly caption: readonly [string, string]
  readonly uid: string

  constructor(
    id: string,
    title: string,
    description: string,
    caption: readonly [string, string],
  ) {
    this.uid = `light-edit-${id}`
    this.title = title
    this.description = description
    this.caption = caption
    this.rect(0, 0, WIDTH, HEIGHT, IVORY, 'none', 0)
    this.text(`CINEMA / ${id}`, 32, 22, 656, 22, 700, RED)
    this.text(title, 32, 62, 656, 26, 700)
    this.line(32, 112, 688, 112, '#cfc4b6')
  }

  ref(name: string): string { return `url(#${this.uid}-${name})` }

  gradient(name: string, stops: readonly [number, string][], direction: 'horizontal' | 'vertical' | 'radial' = 'horizontal'): string {
    const tag = direction === 'radial' ? 'radialGradient' : 'linearGradient'
    const geometry = direction === 'radial' ? 'cx="50%" cy="50%" r="50%"'
      : direction === 'vertical' ? 'x1="0%" y1="0%" x2="0%" y2="100%"'
      : 'x1="0%" y1="0%" x2="100%" y2="0%"'
    this.definitions.push(`<${tag} id="${escapeXml(this.uid)}-${escapeXml(name)}" ${geometry}>${stops.map(([offset, color]) => `<stop offset="${n(offset)}%" stop-color="${escapeXml(color)}"/>`).join('')}</${tag}>`)
    return this.ref(name)
  }

  rect(x: number, y: number, width: number, height: number, fill = PAPER, stroke = INK, radius = 8): void {
    this.parts.push(`<rect x="${n(x)}" y="${n(y)}" width="${n(width)}" height="${n(height)}" rx="${n(radius)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="2"/>`)
  }

  path(data: string, fill = 'none', stroke = INK, thickness = 3, dash = ''): void {
    this.parts.push(`<path d="${escapeXml(data)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="${n(thickness)}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${escapeXml(dash)}"` : ''}/>`)
  }

  line(x1: number, y1: number, x2: number, y2: number, color = INK, dash = '', thickness = 2): void {
    this.path(`M${n(x1)} ${n(y1)} L${n(x2)} ${n(y2)}`, 'none', color, thickness, dash)
  }

  ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, stroke = 'none'): void {
    this.parts.push(`<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}" fill="${escapeXml(fill)}" stroke="${escapeXml(stroke)}" stroke-width="2"/>`)
  }

  arrow(x1: number, y1: number, x2: number, y2: number, color = AMBER, dashed = false): void {
    this.line(x1, y1, x2, y2, color, dashed ? '7 6' : '', 3)
    const angle = Math.atan2(y2 - y1, x2 - x1)
    const left = [x2 - 10 * Math.cos(angle - .45), y2 - 10 * Math.sin(angle - .45)]
    const right = [x2 - 10 * Math.cos(angle + .45), y2 - 10 * Math.sin(angle + .45)]
    this.path(`M${n(left[0])} ${n(left[1])} L${n(x2)} ${n(y2)} L${n(right[0])} ${n(right[1])}`, 'none', color, 3)
  }

  text(value: string, x: number, y: number, width: number, size: 22 | 24 | 26 = 22, weight: Weight = 400, fill = INK, centered = false): void {
    const lines: string[] = []
    for (const paragraph of value.split('\n')) {
      let line = ''
      for (const word of paragraph.trim().split(/\s+/).filter(Boolean)) {
        if (advance(word, size, weight) > width - 4) throw new RangeError(`Label word exceeds its slot: ${word}`)
        const candidate = line ? `${line} ${word}` : word
        if (line && advance(candidate, size, weight) > width - 4) {
          lines.push(line)
          line = word
        } else line = candidate
      }
      lines.push(line)
    }
    const leading = Math.ceil(size * 1.3)
    lines.forEach((line, index) => {
      if (!line) return
      const actual = advance(line, size, weight)
      const left = x + (centered ? (width - actual) / 2 : 2)
      const top = y + index * leading
      this.textBoxes.push({ x: left, y: top, width: actual, height: leading, text: line })
      this.parts.push(`<text x="${n(left)}" y="${n(top + size)}" font-size="${size}" font-weight="${weight}" fill="${escapeXml(fill)}" textLength="${n(actual)}" lengthAdjust="spacingAndGlyphs">${escapeXml(line)}</text>`)
    })
  }

  art(markup: string, x: number, y: number, width: number, height: number, viewBox = '0 0 200 150'): void {
    if (x < 24 || y < 120 || x + width > 696 || y + height > 696) {
      throw new RangeError('Illustration exceeds its drawing area')
    }
    // Only private, original shape builders supply markup. Each illustration is
    // clipped to a declared rectangle; text is drawn separately at 22-26 px.
    this.parts.push(`<svg x="${n(x)}" y="${n(y)}" width="${n(width)}" height="${n(height)}" viewBox="${escapeXml(viewBox)}" preserveAspectRatio="xMidYMid meet" overflow="hidden"><g stroke="${INK}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${markup}</g></svg>`)
  }

  cut(x: number, y: number, height: number): void {
    this.line(x, y, x, y + height, RED, '', 4)
    this.path(`M${n(x - 6)} ${n(y - 7)} H${n(x + 6)} L${n(x)} ${n(y)} Z`, RED, 'none')
  }

  finish(): Rendered {
    this.line(32, 707, 688, 707, '#cfc4b6')
    this.text(this.caption.join('\n'), 32, 720, 656)
    this.text('Original UNSCROLL schematic. No external media.', 32, 798, 656, 22, 400, GRAY)
    // Checks constrain text advances, not measured font pixels. Illustrations
    // have their own clips and dedicated spaces separate from annotation rows.
    for (const [index, box] of this.textBoxes.entries()) {
      if (box.x < 24 || box.y < 16 || box.x + box.width > 696 || box.y + box.height > HEIGHT - 12) {
        throw new RangeError(`Text outside ${this.uid}`)
      }
      const overlap = this.textBoxes.slice(index + 1).find((other) => box.x < other.x + other.width
        && box.x + box.width > other.x && box.y < other.y + other.height && box.y + box.height > other.y)
      if (overlap) {
        throw new RangeError(`Overlapping labels in ${this.uid}: ${box.text} (${box.x}, ${box.y}) / ${overlap.text} (${overlap.x}, ${overlap.y})`)
      }
    }
    const description = `${this.description} ${this.caption.join(' ')} All objects are original schematic drawings, not photographed frames. Colors and spacing are illustrative, not measurements.`
    return {
      width: WIDTH,
      height: HEIGHT,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-labelledby="${escapeXml(this.uid)}-title ${escapeXml(this.uid)}-desc" font-family="Arial" font-size="22"><title id="${escapeXml(this.uid)}-title">${escapeXml(this.title)}</title><desc id="${escapeXml(this.uid)}-desc">${escapeXml(description)}</desc><metadata>Source: original UNSCROLL vector artwork. No external media, film stills, or third-party characters.</metadata><defs>${this.definitions.join('')}</defs>${this.parts.join('')}</svg>`,
    }
  }
}

function windowArt(): string {
  return `<rect x="26" y="9" width="148" height="125" rx="3" fill="${COOL}"/><path d="M100 9V134 M26 71H174 M18 139H183" fill="none"/><path d="M38 24H84 M38 34H64" stroke="${PAPER}" stroke-width="6"/>`
}

function lampArt(on = true): string {
  return `<ellipse cx="83" cy="137" rx="58" ry="9" fill="#b4afa4"/><path d="M83 128L84 91L129 47" fill="none" stroke-width="8"/><circle cx="84" cy="91" r="7" fill="${PAPER}"/><path d="M112 15L149 21L177 62L88 54Z" fill="#646a65"/><ellipse cx="133" cy="57" rx="42" ry="8" fill="${on ? '#f5d386' : '#bbb8ad'}"/><path d="M52 139H115" fill="none"/>`
}

function phone(d: Diagram, x: number, y: number, direction: 'up' | 'down' | 'left' = 'up'): void {
  const horizontal = direction === 'left'
  d.rect(x, y, horizontal ? 48 : 30, horizontal ? 30 : 48, INK, INK, 5)
  d.rect(x + 5, y + 6, horizontal ? 36 : 20, horizontal ? 18 : 34, COOL, 'none', 2)
  const lensY = direction === 'down' ? y + 41 : y + 7
  d.ellipse(x + (horizontal ? 6 : 15), horizontal ? y + 15 : lensY, 3, 3, PAPER)
}

function portrait(fill: string, mode: 'front' | 'side' | 'silhouette' | 'dim' = 'front'): string {
  const silhouette = mode === 'silhouette'
  const background = silhouette || mode === 'dim' ? COOL : '#dcd8cf'
  const face = silhouette ? '#34302e' : fill
  const features = mode === 'dim' ? '#584235' : '#231e1b'
  return `<rect x="2" y="2" width="196" height="186" rx="6" fill="${background}" stroke="none"/>
    ${silhouette || mode === 'dim' ? `<path d="M28 4V154 M172 4V154 M28 25H172" fill="none" stroke="${PAPER}" stroke-width="9"/>` : ''}
    <path d="M20 188Q25 145 73 141L81 121H119L127 141Q175 145 180 188" fill="#555c59"/>
    <path d="M80 115V142Q100 158 120 142V115" fill="${escapeXml(face)}"/>
    <ellipse cx="55" cy="86" rx="9" ry="15" fill="${escapeXml(face)}"/><ellipse cx="145" cy="86" rx="9" ry="15" fill="${escapeXml(face)}"/>
    <ellipse cx="100" cy="80" rx="44" ry="59" fill="${escapeXml(face)}"/>
    <path d="M55 71Q45 13 96 12Q154 8 145 72L130 42Q107 53 77 37L62 74Z" fill="#302b28"/>
    ${silhouette ? '' : `<path d="M70 73Q80 68 89 73 M111 73Q121 68 132 73" fill="none" stroke="${features}"/>
      <ellipse cx="80" cy="81" rx="9" ry="4" fill="${mode === 'dim' ? '#75523e' : '#d4c4ac'}" stroke="none"/><ellipse cx="122" cy="81" rx="9" ry="4" fill="${mode === 'dim' || mode === 'side' ? '#75523e' : '#d4c4ac'}" stroke="none"/>
      <circle cx="81" cy="81" r="3" fill="${features}"/><circle cx="121" cy="81" r="3" fill="${features}"/>
      ${mode === 'side' ? '<path d="M102 78L119 107L103 104Z" fill="#42352d" stroke="none"/>' : ''}
      <path d="M100 82L96 103L104 104 M86 116Q100 121 114 115" fill="none" stroke="${features}"/>`}`
}

function bookArt(crease = '#6c5c4d'): string {
  return `<path d="M8 34Q49 14 96 35Q143 15 190 29L190 118Q143 105 101 132Q55 112 8 123Z" fill="${PAPER}"/>
    <path d="M96 35Q140 16 190 29V118Q139 105 101 132Z" fill="#e9e3d7"/>
    <path d="M87 34Q93 77 94 128L106 129Q109 80 102 34Z" fill="${escapeXml(crease)}" stroke="none"/>
    <path d="M20 51Q52 40 78 48 M20 66Q52 55 80 62 M20 82Q52 72 82 80 M20 99Q52 89 84 97 M117 48Q149 36 177 42 M119 65Q149 51 177 58 M121 83Q151 67 177 75 M122 100Q151 85 177 92" fill="none" stroke="#afa89b" stroke-width="2"/>`
}

function handArt(fill = SKIN): string {
  return `<path d="M76 146L72 112Q48 100 31 81Q22 70 32 64Q39 61 49 72L63 83L51 34Q48 20 59 18Q67 17 70 32L79 63L72 17Q70 5 81 5Q90 4 92 18L99 60L101 16Q102 5 112 7Q120 9 119 21L118 65L128 31Q132 20 141 25Q148 29 144 42L135 87Q151 70 161 79Q167 86 155 99L133 121L132 146Z" fill="${escapeXml(fill)}"/>
    <path d="M76 105Q92 87 116 94 M87 119Q107 105 126 110 M66 83L72 104 M97 65L100 79 M118 65L116 80" fill="none" stroke="#583e30" stroke-width="2"/>`
}

function cardHand(page = PAPER, skin = SKIN): string {
  return `<rect x="6" y="7" width="188" height="136" rx="3" fill="${escapeXml(page)}"/><path d="M19 24H48 M19 35H42 M162 119H183" fill="none" stroke="#938777"/><g transform="translate(26 0) scale(.77)">${handArt(skin)}</g>`
}

function drawingArt(): string {
  return `<path d="M12 15H171L190 135H28Z" fill="${PAPER}"/><path d="M46 99V52H94V83" fill="none" stroke="#514e49" stroke-width="3"/>
    <path d="M98 100L147 34" fill="none" stroke="#b6aea0" stroke-width="6"/>
    <path d="M197 116L151 102L126 77Q118 69 110 78L99 93Q95 102 105 107L137 115L164 144H197" fill="${SKIN}"/>
    <path d="M89 91L139 25L147 31L97 98Z" fill="#dbaf60"/><path d="M89 91L85 104L97 98Z" fill="${INK}"/>
    <path d="M116 89Q136 85 139 100 M133 115L142 106" fill="none"/>`
}

function fingerArt(): string {
  return `<path d="M194 22H60Q20 22 20 44Q20 67 60 67H194Z" fill="${SKIN}"/><path d="M43 30Q28 43 43 57H66V30Z" fill="#b58970"/><path d="M117 28Q110 45 118 61 M129 29Q124 43 130 60" fill="none" stroke="#654936"/>`
}

function shoeArt(): string {
  return `<ellipse cx="117" cy="101" rx="74" ry="32" transform="rotate(27 117 101)" fill="#b6aea2" stroke="none"/>
    <path d="M26 30Q41 9 71 24L124 64Q147 77 174 109Q181 121 169 131Q153 143 135 132L51 87Q20 68 21 47Z" fill="#d8d5c9"/>
    <path d="M26 54Q54 42 73 33 M31 68Q54 64 70 50 M62 88L144 130 M110 60Q132 62 144 83L120 100L89 74Z" fill="#a7afa9"/>
    <path d="M71 46L108 53L80 58L120 66L93 72L132 80L108 86" fill="none" stroke="#736659" stroke-width="6"/>
    <path d="M67 42L104 49L76 54L116 62L89 68L128 76L104 82" fill="none" stroke="${PAPER}" stroke-width="4"/>
    <path d="M95 65Q68 39 69 65Q74 82 100 70Q127 56 125 80Q116 88 100 70L87 94 M100 70L117 99" fill="none" stroke="${PAPER}" stroke-width="4"/>
    <path d="M27 76L135 136Q158 149 176 130" fill="none" stroke="#777c76"/>`
}

function notebookArt(phase: 'closed' | 'half' | 'next' | 'open'): string {
  const cover = {
    closed: 'M29 111L151 124L183 82L63 71Z',
    half: 'M29 111L151 124L160 26L48 16Z',
    next: 'M29 111L151 124L137 13L32 9Z',
    open: 'M29 111L151 124L126 59L8 52Z',
  }[phase]
  return `<path d="M29 118L151 132L186 85L64 73Z" fill="#435756"/>
    <path d="M29 111L151 124L183 82L63 71Z" fill="${PAPER}"/>
    <path d="${cover}" fill="#a9beb7"/>
    <path d="M30 112L151 125" fill="none" stroke="${INK}" stroke-width="4"/>
    <path d="M198 45L174 38Q160 29 157 36L150 48Q146 55 155 59L175 65L198 77" fill="${SKIN}"/>
    ${phase === 'half' || phase === 'next' ? `<path d="M20 87Q8 58 19 34 M11 39L19 32L23 43" fill="none" stroke="${RED}" stroke-width="3"/>` : ''}`
}

function headphonesArt(covered = false, lifting = false): string {
  return `<rect x="6" y="115" width="188" height="27" rx="3" fill="#c5b69f"/>
    <path d="M60 113V69Q60 34 100 34Q140 34 140 69V113" fill="none" stroke="#455151" stroke-width="13"/>
    <rect x="49" y="84" width="27" height="40" rx="10" fill="#637a77"/><rect x="124" y="84" width="27" height="40" rx="10" fill="#637a77"/>
    ${covered || lifting ? `<path d="${lifting ? 'M20 103L71 80L107 21L155 47L153 119L29 130Z' : 'M22 76Q86 52 176 88L168 128L23 128Z'}" fill="#c08968"/><path d="M38 115L80 98 M101 44L130 58" fill="none" stroke="#81563e"/>` : ''}
    ${lifting ? `<path d="M153 3L133 24L111 27Q99 28 101 38Q104 44 117 42L145 40L176 11" fill="${SKIN}"/>` : ''}`
}

function emptyHookArt(): string {
  return `<rect x="9" y="7" width="182" height="133" fill="#e4dbcb" stroke="none"/><rect x="55" y="14" width="90" height="30" rx="5" fill="#bdab8b"/>
    <path d="M97 34V57Q97 76 111 76Q127 76 127 60" fill="none" stroke="#454d48" stroke-width="8"/>
    <rect x="13" y="111" width="174" height="20" fill="#b99d78"/><path d="M26 130V147 M174 130V147" fill="none"/>
    <path d="M32 109Q91 82 170 111L165 123H32Z" fill="#c08968"/>`
}

function towelsArt(count: 1 | 3): string {
  return `<path d="M8 130H192" fill="none" stroke="#9a8a73"/>
    ${count === 1 ? `<path d="M90 108L154 54L187 104L141 126Z M11 91L48 59L95 81L58 118Z" fill="#c3d1cf"/>` : ''}
    ${Array.from({ length: count }, (_, index) => `<path d="M44 ${117 - index * 26}Q100 ${105 - index * 26} 162 ${117 - index * 26}V${137 - index * 26}H44Z" fill="${index % 2 ? '#b5c4c3' : '#dde3d9'}"/><path d="M53 ${128 - index * 26}H149" fill="none" stroke="#7b8e8a"/>`).join('')}`
}

function hallwayArt(): string {
  return `<path d="M6 6H194V144H6Z" fill="#ded7c9"/><path d="M38 8V109L7 144 M164 8V109L194 144 M38 109H164" fill="none" stroke="#9f9586"/>
    <path d="M73 28H132V109H73Z" fill="#adbaaF"/><path d="M80 34H126V107H80Z" fill="#7d8a80"/><circle cx="118" cy="76" r="3" fill="${PAPER}"/>`
}

function cushionArt(): string {
  return `<path d="M8 126H193" fill="none" stroke="#a89c87"/><path d="M24 111L53 48Q109 26 170 63L185 120Q112 149 24 111Z" fill="#b8c9bf"/>
    <path d="M33 106Q106 127 174 116 M59 57Q109 40 161 70 M62 83L70 85 M147 92L154 94" fill="none" stroke="#678477"/>
    <path d="M20 141L190 141" fill="none" stroke="#c7bba7"/>`
}

function calendarArt(): string {
  return `<rect x="27" y="12" width="146" height="127" rx="4" fill="${PAPER}"/><path d="M27 38H173 M48 4V23 M151 4V23" fill="none" stroke-width="5"/>
    <path d="M46 59H61 M78 59H93 M112 59H126 M139 59H153 M46 79H61 M78 79H93 M46 101H61 M78 101H93" fill="none" stroke="#beb7ac"/>
    <ellipse cx="123" cy="101" rx="45" ry="28" fill="none" stroke="${RED}" stroke-width="3"/>`
}

function brushesArt(): string {
  return `<path d="M17 104L169 81L187 121L35 145Z" fill="#c6d1c8"/><path d="M40 103L26 34 M89 107L103 24 M139 106L170 43" fill="none" stroke="#ad7d4e" stroke-width="9"/>
    <path d="M18 31L14 12L34 9L36 29Z M93 24L94 6L116 8L111 27Z M160 41L164 21Q182 19 181 36L176 47Z" fill="#566e67"/>
    <path d="M29 113L174 92" fill="none" stroke="#81968c"/>`
}

function bagArt(): string {
  return `<path d="M23 57Q96 43 177 56L186 129Q103 148 15 130Z" fill="#b98962"/><path d="M67 55V30Q99 3 132 31V55" fill="none" stroke="#674b37" stroke-width="10"/>
    <path d="M27 69Q101 56 174 67 M45 63L38 129 M157 64L164 131" fill="none" stroke="#674b37"/><rect x="86" y="85" width="44" height="31" rx="3" fill="#d7b18a"/>`
}

function folderArt(failed = false): string {
  const folder = failed ? '#173442' : '#7e9cab'
  return `<path d="M8 47V18H69L87 31H140V131H8Z" fill="${folder}"/><path d="M8 51L142 39L128 140H18Z" fill="${folder}"/>
    <path d="M38 63L35 118 M51 65L49 119 M74 68L72 120" fill="none" stroke="${failed ? folder : '#567789'}" stroke-width="4"/>
    <path d="M143 17H191V140H141Z" fill="${failed ? '#ffffff' : PAPER}"/>
    <path d="M152 45H182 M152 59H175 M152 92L159 85L177 101 M152 119H181" fill="none" stroke="${failed ? '#ffffff' : '#938a78'}" stroke-width="3"/>`
}

function shot(d: Diagram, x: number, y: number, width: number, height: number, label: string, time: string, art: string, color = BLUE, viewBox = '0 0 200 150'): void {
  d.rect(x, y, width, height, PAPER, '#93887a', 0)
  d.rect(x, y, width, 40, color, 'none', 0)
  d.text(label, x + 10, y + 6, width - 20, 22, 700, PAPER)
  d.art(art, x + 10, y + 48, width - 20, height - 92, viewBox)
  if (time) d.text(time, x + 10, y + height - 34, width - 20, 22, 400, INK, true)
}

function ticks(d: Diagram, y: number, values: readonly number[], unit: number, x = 48): void {
  for (const value of values) {
    const position = x + value * unit
    d.line(position, y, position, y + 7, GRAY)
    d.text(`${value} s`, position - 32, y + 10, 64, 22, 400, GRAY, true)
  }
}

function waveform(d: Diagram, x: number, y: number, width: number, color: string, quiet = false): void {
  // Deliberate schematic marks, not a sampled or measured soundtrack.
  d.line(x, y, x + width, y, color)
  const pattern = quiet ? [1, 2, 1, 3, 2] : [3, 7, 12, 5, 10, 16, 6, 11, 4]
  const count = Math.floor(width / 10)
  for (let index = 1; index < count; index++) {
    const amplitude = pattern[index % pattern.length]
    d.line(x + index * 10, y - amplitude, x + index * 10, y + amplitude, color)
  }
}

function lightPositions(): Rendered {
  const d = new Diagram('025', 'Window fixed, camera position changes',
    'Three plans share a fixed window and subject position. The person turns toward phone A on the window side, B at the side, or C opposite the window. Corresponding portraits show two readable eyes, a nose shadow on the far cheek, and a backlit outline.',
    ['Top: the person turns toward each phone position.', 'Solid arrows show light; dashed arrows show the view.'])
  const side = d.gradient('side-face', [[0, '#a5795a'], [44, SKIN], [62, '#65503f'], [100, '#352e29']])
  const columns = [
    { x: 32, title: 'A: front light', mode: 'front' as const, label: 'Both eyes' },
    { x: 256, title: 'B: side light', mode: 'side' as const, label: 'Cheek shadow' },
    { x: 480, title: 'C: backlight', mode: 'silhouette' as const, label: 'Head outline' },
  ]
  columns.forEach(({ x, title, mode, label }, index) => {
    d.rect(x, 136, 208, 546, PAPER, '#c8bdae')
    d.text(title, x + 10, 148, 188, 24, 700, INK, true)
    d.text('Window', x + 20, 188, 168, 22, 400, GRAY, true)
    d.art(windowArt(), x + 76, 221, 62, 47)
    d.arrow(x + 107, 271, x + 107, 298)
    d.ellipse(x + 107, 318, 18, 18, SKIN, INK)
    if (index === 0) {
      phone(d, x + 29, 263, 'down')
      d.arrow(x + 61, 293, x + 87, 306, GRAY, true)
      d.path(`M${x + 97} 304L${x + 89} 298L${x + 94} 312Z`, SKIN)
    } else if (index === 1) {
      phone(d, x + 149, 303, 'left')
      d.arrow(x + 146, 318, x + 129, 318, GRAY, true)
      d.path(`M${x + 122} 311L${x + 130} 318L${x + 122} 325Z`, SKIN)
    } else {
      phone(d, x + 92, 369)
      d.arrow(x + 107, 365, x + 107, 342, GRAY, true)
      d.path(`M${x + 100} 333L${x + 107} 341L${x + 114} 333Z`, SKIN)
    }
    d.line(x + 16, 430, x + 192, 430, '#ded4c5')
    d.art(portrait(index === 1 ? side : SKIN, mode), x + 18, 443, 172, 164, '0 0 200 190')
    d.text(label, x + 10, 633, 188, 22, 700, INK, true)
  })
  return d.finish()
}

function shadowEdges(): Rendered {
  const d = new Diagram('026', 'Look at the shadow on the paper',
    'Two finger tests keep a similar finger-to-paper gap. A small apparent lamp produces an abrupt finger-shadow edge in this example. A broad indirect window produces a continuously graded boundary on the actual white receiving sheet. Both shadows have a dark core; softness is not global dimming.',
    ['Keep the finger gap similar. Compare the edge width.', 'Illustrative outcomes; not every lamp gives a hard edge.'])
  const soft = d.gradient('penumbra', [[0, '#5b554e'], [43, '#5b554e'], [60, '#80796f'], [76, '#b5ada0'], [90, '#e1dbd0'], [100, PAPER]], 'radial')
  ;[32, 372].forEach((x, index) => {
    d.rect(x, 136, 316, 548, PAPER, '#c8bdae')
    d.text(index ? 'Broad window' : 'Small apparent lamp', x + 16, 150, 284, 24, 700)
    d.art(index ? windowArt() : lampArt(), x + 20, 204, 116, 92)
    d.arrow(x + 129, 263, x + 184, 312)
    d.art(fingerArt(), x + 159, 286, 125, 58, '0 0 200 85')
    d.line(x + 30, 366, x + 281, 366, '#9c9385', '', 5)
    d.line(x + 272, 341, x + 272, 360, GRAY)
    d.line(x + 265, 341, x + 279, 341, GRAY)
    d.line(x + 265, 360, x + 279, 360, GRAY)
    d.text('Same finger gap', x + 30, 380, 256, 22, 400, GRAY, true)
    d.text('Paper seen from above', x + 16, 429, 284, 22, 700)
    d.rect(x + 22, 473, 272, 141, PAPER, '#a89c8d', 2)
    if (index) {
      d.ellipse(x + 160, 544, 113, 50, soft)
      d.line(x + 224, 590, x + 271, 590, RED, '', 3)
      d.line(x + 224, 583, x + 224, 597, RED)
      d.line(x + 271, 583, x + 271, 597, RED)
    } else {
      d.path(`M${x + 88} 519H${x + 244}Q${x + 269} 519 ${x + 269} 544Q${x + 269} 569 ${x + 244} 569H${x + 88}Q${x + 60} 569 ${x + 60} 544Q${x + 60} 519 ${x + 88} 519Z`, '#5b554e', 'none')
      d.line(x + 263, 590, x + 271, 590, RED, '', 3)
      d.line(x + 263, 583, x + 263, 597, RED)
      d.line(x + 271, 583, x + 271, 597, RED)
    }
    d.text(index ? 'Gradual boundary' : 'Abrupt boundary', x + 16, 635, 284, 22, 700, INK, true)
  })
  return d.finish()
}

function negativeFill(): Rendered {
  const d = new Diagram('028', 'Intercept the wall light, not daylight',
    'Paired top views show an open white paperback, window at left, and pale wall at right. Without a flag, reflected light reaches the crease. With a matte dark cover between wall and book, the returning arrows stop at the cover. Lower drawings retain the same bright left page but deepen the crease.',
    ['Top views: the main window-to-book path stays open.', 'The dark cover stops returning light; it emits no darkness.'])
  ;[32, 372].forEach((x, index) => {
    d.rect(x, 136, 316, 548, PAPER, '#c8bdae')
    d.text(index ? 'With dark cover' : 'Without dark cover', x + 14, 150, 288, 24, 700)
    d.text('Window', x + 14, 200, 128)
    d.text('Pale wall', x + 166, 200, 136, 22, 400, INK, true)
    d.art(windowArt(), x + 18, 239, 64, 54)
    d.rect(x + 281, 237, 13, 166, '#ddd8cc', '#938c80', 0)
    d.arrow(x + 86, 248, x + 273, 248)
    d.arrow(x + 77, 292, x + 112, 315)
    d.art(bookArt('#c0b5a4'), x + 90, 306, 130, 98)
    if (index) {
      d.rect(x + 241, 285, 15, 111, '#302d2a', INK, 2)
      d.arrow(x + 277, 330, x + 259, 330, BLUE)
      d.arrow(x + 277, 372, x + 259, 372, BLUE)
      d.text('Return stopped', x + 24, 421, 268, 22, 700, BLUE, true)
    } else {
      d.arrow(x + 276, 330, x + 218, 349, BLUE)
      d.arrow(x + 276, 372, x + 216, 374, BLUE)
      d.text('Wall returns light', x + 24, 421, 268, 22, 700, BLUE, true)
    }
    d.line(x + 20, 466, x + 296, 466, '#ded4c5')
    d.art(bookArt(index ? '#625347' : '#c0b5a4'), x + 29, 480, 258, 136)
    d.text(index ? 'Crease is darker' : 'Crease is faint', x + 16, 639, 284, 22, 700, INK, true)
  })
  return d.finish()
}

function practicalLamp(): Rendered {
  const d = new Diagram('029', 'The lamp stays; the framing changes',
    'A wide drawing shows an intact desk lamp shining onto a notebook and a pencil held by a hand. The close drawing excludes the lamp but preserves the same left-to-right light and pencil shadow. A visible lamp and its useful illumination are separate things.',
    ['Move the page into existing light, not toward the fitting.', 'Close view: same light direction, lamp outside the frame.'])
  d.text('Wide: source and light pool', 42, 140, 636, 24, 700)
  d.rect(40, 183, 640, 210, '#e5dbca', '#a69783', 3)
  d.ellipse(435, 319, 166, 57, '#f5e6b8')
  d.art(lampArt(), 60, 199, 196, 154)
  d.path('M229 246L335 290L311 339Z', '#ecd49d', 'none')
  d.arrow(240, 248, 334, 287)
  d.art(drawingArt(), 318, 219, 250, 163)
  d.text('Close: same lamp position', 42, 425, 636, 24, 700)
  d.rect(40, 469, 640, 213, '#e5dbca', '#a69783', 3)
  d.art(drawingArt(), 68, 478, 303, 191)
  d.arrow(59, 490, 121, 524)
  d.text('Light still arrives\nfrom the left.', 426, 486, 234, 22, 700)
  d.text('Check the pencil\nline and shadow.', 426, 579, 234)
  return d.finish()
}

function doorwayPortrait(): Rendered {
  const d = new Diagram('030', 'Move the phone, not the skin-tone goal',
    'Before: an indoor phone looks toward a person with a bright doorway behind their head. After: the phone moves beside the opening, still indoors, and the person turns toward daylight. The same person is drawn with clearer eyes and mouth against a quieter background, not a different skin identity.',
    ['Both phone positions stay inside; keep the doorway clear.', 'Compare expression and appearance, not a paler-skin target.'])
  ;[32, 372].forEach((x, index) => {
    d.rect(x, 136, 316, 548, PAPER, '#c8bdae')
    d.text(index ? 'B: phone by doorway' : 'A: doorway behind', x + 14, 150, 288, 24, 700)
    d.text('Daylight enters', x + 22, 198, 272, 22, 400, GRAY, true)
    d.line(x + 28, 244, x + 98, 244, '#8c8377', '', 7)
    d.line(x + 216, 244, x + 288, 244, '#8c8377', '', 7)
    d.path(`M${x + 98} 244L${x + 112} 222H${x + 200}L${x + 216} 244`, COOL, '#8c8377')
    d.arrow(x + 157, 252, x + 157, 300)
    d.ellipse(x + 157, 324, 19, 19, SKIN, INK)
    if (index) {
      phone(d, x + 63, 268, 'down')
      d.arrow(x + 95, 304, x + 134, 316, GRAY, true)
      d.path(`M${x + 142} 314L${x + 132} 310L${x + 140} 325Z`, SKIN)
    } else {
      phone(d, x + 142, 368)
      d.arrow(x + 157, 365, x + 157, 349, GRAY, true)
      d.path(`M${x + 150} 340L${x + 157} 348L${x + 164} 340Z`, SKIN)
    }
    d.art(portrait(index ? SKIN : '#594031', index ? 'front' : 'dim'), x + 68, 442, 180, 171, '0 0 200 190')
    d.text(index ? 'Eyes and mouth clearer' : 'Expression hard to see', x + 14, 636, 288, 22, 700, INK, true)
  })
  return d.finish()
}

function mixedLight(): Rendered {
  const d = new Diagram('031', 'One card under two different lights',
    'In A, a window and a warm lamp illuminate opposite sides of an actual drawn hand and white card. Both card and hand have a blue-to-amber cast. In B the optional lamp is off and daylight dominates both sides. An overall white-balance change cannot independently adjust the two regions.',
    ['For B, switch the optional lamp off using its normal control.', 'Compare both sides together; these are not calibrated colors.'])
  const mixedPage = d.gradient('mixed-page', [[0, '#c6dce6'], [42, '#dde0d5'], [62, '#e8d0ac'], [100, '#e7b879']])
  const mixedHand = d.gradient('mixed-hand', [[0, '#716f68'], [45, SKIN], [100, '#b47f4b']])
  ;[32, 372].forEach((x, index) => {
    d.rect(x, 136, 316, 548, PAPER, '#c8bdae')
    d.text(index ? 'B: daylight dominates' : 'A: daylight + lamp', x + 14, 150, 288, 24, 700)
    d.art(windowArt(), x + 22, 211, 94, 81)
    d.art(lampArt(index === 0), x + 203, 211, 95, 81)
    d.text('Window', x + 14, 300, 123, 22, 700, BLUE)
    d.text(index ? 'Lamp off' : 'Lamp on', x + 174, 300, 128, 22, 700, index ? GRAY : AMBER, true)
    d.arrow(x + 72, 342, x + 103, 401, BLUE)
    if (!index) d.arrow(x + 248, 342, x + 223, 401, AMBER)
    else d.line(x + 214, 229, x + 281, 271, GRAY, '', 3)
    d.art(cardHand(index ? '#e2e4da' : mixedPage, index ? SKIN : mixedHand), x + 20, 403, 276, 188)
    d.text(index ? 'Less competing color' : 'Two casts on one card', x + 14, 628, 288, 22, 700, INK, true)
  })
  return d.finish()
}

function flickerTest(): Rendered {
  const d = new Diagram('032', 'Check moving bands in saved playback',
    'Three successive schematic views of the same instruction card under a room lamp show a dark horizontal band at different heights. A second row, recorded in daylight with optional lamps off, has three stable cards. A single still cannot diagnose flicker; compare saved clips over time.',
    ['These are schematic playback samples, not measured frames.', 'Use supported timing tests or the daylight alternative.'])
  d.text('A: room lamp, then replay', 42, 140, 636, 24, 700)
  d.arrow(480, 159, 664, 159, GRAY)
  const band = d.gradient('band-edge', [[0, PAPER], [40, '#9c978f'], [60, '#9c978f'], [100, PAPER]], 'vertical')
  ;[48, 260, 472].forEach((x, index) => {
    d.rect(x, 191, 196, 183, '#ded7ca', '#a79885', 0)
    d.rect(x + 24, 211, 148, 125, PAPER, '#a0988b', 1)
    d.rect(x + 25, 216 + index * 33, 146, 28, band, 'none', 0)
    d.text('READ\nTHIS', x + 36, 225, 124, 22, 700, INK, true)
    d.text(['Earlier', 'Then', 'Later'][index], x + 12, 383, 172, 22, 400, GRAY, true)
  })
  d.text('B: daylight, optional lamps off', 42, 438, 636, 24, 700)
  ;[48, 260, 472].forEach((x, index) => {
    d.rect(x, 486, 196, 183, COOL, '#a79885', 0)
    d.rect(x + 24, 506, 148, 125, PAPER, '#a0988b', 1)
    d.text('READ\nTHIS', x + 36, 520, 124, 22, 700, INK, true)
    d.text(['Earlier', 'Then', 'Later'][index], x + 12, 638, 172, 22, 400, GRAY, true)
  })
  return d.finish()
}

function shoeContinuity(): Rendered {
  const d = new Diagram('033', 'Save the shoe position and its shadow',
    'A plan records the upper-left window, shoe toe pointing toward it, phone on the heel side, and table-edge landmark. A saved wider reference and a close knot drawing show the same lace shadows displaced toward the lower right. Restoring positions does not restore weather or guarantee matching color.',
    ['In both views, lace shadows fall toward the lower right.', 'Save the clip as well as the map; daylight can change.'])
  d.rect(40, 136, 640, 224, PAPER, '#c8bdae')
  d.text('Top-view position note', 54, 150, 360, 24, 700)
  d.art(windowArt(), 65, 203, 106, 83)
  d.art(shoeArt(), 260, 201, 176, 132)
  d.arrow(172, 213, 275, 244)
  phone(d, 469, 285, 'left')
  d.arrow(464, 300, 423, 293, GRAY, true)
  d.text('Phone', 529, 277, 131)
  d.line(56, 341, 655, 341, '#ad9a7c', '', 4)
  d.text('Window', 65, 296, 151)
  shot(d, 40, 406, 312, 270, 'Saved reference', 'Toe toward window', shoeArt(), BLUE)
  shot(d, 368, 406, 312, 270, 'Later close view', 'Compare the lace shadow', shoeArt(), GREEN, '57 28 98 82')
  return d.finish()
}

function safeSetup(): Rendered {
  const d = new Diagram('034', 'Redesign the shot, not the wiring',
    'A top-view desk plan shows an intact lamp and an existing socket along the rear wall. Its cord stays behind the desk. The supported phone and notebook are on the desk, while a wide walking route to the exit stays clear. A separate daylight drawing is the alternative when equipment suitability is uncertain.',
    ['The plan is not a clearance or electrical specification.', 'If suitability is uncertain, stop and choose daylight.'])
  d.text('Existing arrangement: keep the exit clear', 42, 140, 636, 24, 700)
  d.rect(40, 185, 640, 260, '#e6ded0', '#a79780', 3)
  d.line(54, 204, 662, 204, '#817565', '', 7)
  d.path('M183 249V219H609V250', 'none', INK, 4)
  d.text('Cord stays at rear wall', 243, 230, 318, 22, 700)
  d.art(lampArt(), 66, 231, 128, 100)
  d.rect(599, 235, 52, 56, PAPER, INK, 4)
  d.line(615, 247, 615, 260, INK, '', 4)
  d.line(636, 247, 636, 260, INK, '', 4)
  d.ellipse(626, 277, 4, 4, INK)
  d.art(drawingArt(), 296, 293, 155, 116)
  phone(d, 202, 365)
  d.rect(186, 414, 63, 10, '#877761', 'none', 2)
  d.arrow(199, 296, 306, 325)
  d.rect(42, 467, 636, 65, '#dce9df', 'none', 3)
  d.text('Clear walking route', 57, 482, 349, 22, 700, GREEN)
  d.arrow(421, 500, 580, 500, GREEN)
  d.text('Exit', 597, 482, 66, 22, 700, GREEN)
  d.rect(40, 552, 640, 136, PAPER, '#c8bdae')
  d.art(windowArt(), 58, 569, 100, 83)
  d.art(drawingArt(), 187, 569, 119, 89)
  d.arrow(151, 620, 187, 620)
  d.text('Daylight alternative\nNo lamp modification.\nKeep paper off fittings.', 329, 565, 333, 22, 700)
  return d.finish()
}

function pocketPhase(phase: 'reach' | 'unfold' | 'hold'): string {
  return `<path d="M22 6H177L193 144H10Z" fill="#afb1a4"/><path d="M35 74H169L156 136H47Z" fill="#7e8779"/><path d="M41 83H161" fill="none" stroke="#d3d4c5"/>
    ${phase === 'reach' ? `<path d="M6 22L72 45L105 67L86 93L56 77L6 62Z" fill="${SKIN}"/><path d="M115 56L136 60L129 84L108 80Z" fill="${PAPER}"/>` : `<path d="${phase === 'unfold' ? 'M58 22L99 37L145 16L153 97L103 113L62 95Z' : 'M54 17H155V112H54Z'}" fill="${PAPER}"/><path d="M102 37V106 M71 49H88 M117 46H139 M71 64H88 M117 61H139" fill="none" stroke="#9a8e7d"/><path d="M183 90L152 78L145 94L160 119L193 126" fill="${SKIN}"/>`}`
}

function chooseTake(): Rendered {
  const d = new Diagram('035', 'Choose the take that reveals the note',
    'Three takes show an original MEET AFTER CLASS note over a coat pocket. A thumb covers the last word in A. B exposes the whole note. C exposes the note but schematic scraping noise masks required speech. The lower six-second B strip preserves reaching, unfolding, and an open-note pause instead of keeping only the reach.',
    ['Choose B for the readable reveal and usable words.', 'B times are invented. Keep A and C as alternative takes.'])
  const xs = [40, 256, 472]
  xs.forEach((x, index) => {
    d.rect(x, 143, 208, 303, PAPER, '#a99a86', 0)
    d.rect(x, 143, 208, 41, index === 1 ? GREEN : BLUE, 'none', 0)
    d.text(`Take ${['A', 'B', 'C'][index]}`, x + 12, 149, 184, 24, 700, PAPER)
    d.art(pocketPhase('hold'), x + 12, 194, 184, 152)
    d.rect(x + 51, 199, 113, 117, PAPER, INK, 2)
    d.text('MEET\nAFTER\nCLASS', x + 58, 209, 99, 22, 700, INK, true)
    if (index === 0) {
      d.path(`M${x + 202} 291L${x + 119} 278Q${x + 100} 277 ${x + 100} 291Q${x + 100} 301 ${x + 117} 305L${x + 202} 331Z`, SKIN)
    }
    if (index === 2) waveform(d, x + 20, 355, 168, RED)
    else waveform(d, x + 20, 355, 168, GRAY, true)
    d.text(['Thumb hides\na word', 'Whole note;\nusable words', 'Scrape masks\nspeech'][index], x + 12, 375, 184, 22, 700)
  })
  d.text('One B take: reveal, then pause', 42, 468, 636, 24, 700)
  ;(['reach', 'unfold', 'hold'] as const).forEach((phase, index) => {
    shot(d, 48 + index * 208, 514, 208, 175, ['Reach', 'Unfold', 'Hold open'][index], ['0-2 s', '2-4 s', '4-6 s'][index], pocketPhase(phase), GREEN)
  })
  // These are phases within one source take, not three invented picture cuts.
  return d.finish()
}

function assembly(): Rendered {
  const d = new Diagram('036', 'Show the action that connects the views',
    'The incomplete order jumps from an empty hook above a bench to found headphones. The lower assembly adds the same bench with a hand lifting its scarf, connecting the absence to the headphones underneath. The corrected eight-second strip has two, three, and three seconds of picture with direct cuts.',
    ['The scarf lift supplies the missing action and location.', 'Invented 8 s assembly; red lines mark picture cuts.'])
  d.text('Gap: where did the search happen?', 42, 140, 636, 24, 700)
  shot(d, 48, 188, 256, 190, 'Empty hook', 'Missing object', emptyHookArt())
  shot(d, 416, 188, 256, 190, 'Headphones', 'Result alone', headphonesArt())
  d.arrow(317, 279, 403, 279, RED)
  d.text('?', 336, 310, 48, 26, 700, RED, true)
  d.text('Assembly: add the search action', 42, 426, 636, 24, 700)
  shot(d, 48, 477, 156, 207, 'Hook', '0-2 s', emptyHookArt())
  shot(d, 204, 477, 234, 207, 'Scarf lifts', '2-5 s', headphonesArt(false, true), GREEN)
  shot(d, 438, 477, 234, 207, 'Found here', '5-8 s', headphonesArt(), BLUE)
  d.cut(204, 477, 207)
  d.cut(438, 477, 207)
  return d.finish()
}

function actionMatch(): Rendered {
  const d = new Diagram('037', 'The cover should keep rising at the cut',
    'The first pair joins a halfway-open notebook to a closed notebook, restarting the action. The second pair joins the same halfway-wide pose to a slightly later close pose, both raised with the same hand in the same direction. Its output ranges are 0-2 and 2-4 seconds; the cut is instantaneous at 2 seconds.',
    ['Compare the outgoing last pose with the incoming first pose.', 'Invented timings. Check direction and speed during playback.'])
  d.text('Restart: the next view begins closed', 42, 140, 636, 24, 700, RED)
  shot(d, 48, 185, 312, 210, 'Wide ends halfway', 'Last outgoing pose', notebookArt('half'))
  shot(d, 360, 185, 312, 210, 'Close starts closed', 'Movement repeats', notebookArt('closed'), RED)
  d.cut(360, 185, 210)
  d.text('Continue: the next pose is farther along', 42, 431, 636, 24, 700, GREEN)
  shot(d, 48, 479, 312, 207, 'Wide ends halfway', '0-2 s', notebookArt('half'))
  shot(d, 360, 479, 312, 207, 'Close keeps rising', '2-4 s', notebookArt('next'), GREEN, '15 5 176 132')
  d.cut(360, 479, 207)
  return d.finish()
}

function omittedTime(): Rendered {
  const d = new Diagram('038', 'Forty source seconds, eight on screen',
    'A source ledger retains seconds 0-4 and 36-40 of an invented forty-second towel recording, omitting the middle thirty-two. The output strip joins one folded towel and two unfolded towels directly to a stack of three. With the camera fixed, the stack visibly jumps. Each timeline row has its own scale.',
    ['40 s source = 8 s kept + 32 s omitted. Row scales differ.', 'The fixed-view stack jumps; the middle folds are omitted.'])
  d.text('Source recording: 0-40 s', 42, 140, 636, 24, 700)
  d.art(towelsArt(1), 55, 189, 172, 111)
  d.art(`${towelsArt(1)}<path d="M92 106L148 56L128 110Z" fill="#e0e7df"/><g transform="translate(52 -2) scale(.7)">${handArt()}</g>`, 280, 190, 157, 110)
  d.art(towelsArt(3), 492, 189, 172, 111)
  d.text('One folded', 48, 309, 198, 22, 700, INK, true)
  d.text('Folding omitted', 258, 309, 204, 22, 700, GRAY, true)
  d.text('Three folded', 468, 309, 204, 22, 700, INK, true)
  d.line(137, 341, 79, 354, GREEN)
  d.line(578, 341, 641, 354, GREEN)
  const unit = 624 / 40
  d.rect(48, 358, 4 * unit, 50, GREEN, INK, 0)
  d.rect(48 + 4 * unit, 358, 32 * unit, 50, '#e1d8c8', INK, 0)
  d.rect(48 + 36 * unit, 358, 4 * unit, 50, GREEN, INK, 0)
  d.text('OMIT 32 s', 174, 367, 372, 24, 700, GRAY, true)
  ticks(d, 411, [0, 4, 36, 40], unit)
  d.text('Playback: join the two kept parts', 42, 468, 636, 24, 700)
  shot(d, 48, 515, 312, 174, 'One folded', '0-4 s output', towelsArt(1), GREEN)
  shot(d, 360, 515, 312, 174, 'Three folded', '4-8 s output', towelsArt(3), GREEN)
  d.cut(360, 515, 174)
  return d.finish()
}

function noteCard(d: Diagram, x: number, y: number, width: number, covered: boolean, departing = false): void {
  d.rect(x + 4, y, width - 8, 100, PAPER, '#82786c', 1)
  d.text('USE\nSIDE\nDOOR', x + 8, y + 5, width - 16, 22, 700, INK, true)
  if (covered) {
    d.path(`M${x + 5} ${y + 40}H${x + width - 5}V${y + 98}H${x + 5}Z`, '#c9c2b4', INK, 2)
    d.path(`M${x + width - 5} ${y + 23}L${x + width - 27} ${y + 34}L${x + width - 23} ${y + 53}L${x + width - 5} ${y + 57}`, SKIN)
  } else if (departing) {
    d.path(`M${x + width + 30} ${y + 7}L${x + width + 8} ${y + 19}Q${x + width + 1} ${y + 24} ${x + width + 7} ${y + 32}L${x + width + 30} ${y + 28}`, SKIN)
    d.arrow(x + width + 5, y + 66, x + width + 29, y + 44, RED)
  }
}

function readableHold(): Rendered {
  const d = new Diagram('039', 'Count time after all words are visible',
    'Two timelines use the same horizontal time scale. Both take one second to lift a cover and two seconds to withdraw. A leaves USE SIDE DOOR fully exposed for one second and ends at four. B leaves it exposed for three seconds and ends at six. The uncovered interval is longer, not the whole performance.',
    ['Only the fully readable hold changes. Both rows use one scale.', 'A: 1 + 1 + 2 = 4 s. B: 1 + 3 + 2 = 6 s; examples only.'])
  const unit = 104
  ;[190, 481].forEach((y, index) => {
    d.text(index ? 'B: 3 s readable hold' : 'A: 1 s readable hold', 42, y - 50, 636, 24, 700)
    const durations = index ? [1, 3, 2] : [1, 1, 2]
    let start = 0
    durations.forEach((duration, part) => {
      const x = 48 + start * unit
      const width = duration * unit
      d.rect(x, y, width, 159, part === 1 ? '#e1eadf' : '#e4ddd1', '#8a7e6d', 0)
      d.text(['Reveal', 'Read', 'Leave'][part], x + 7, y + 8, width - 14, 22, 700, part === 1 ? GREEN : INK, true)
      const cardWidth = Math.min(width - 12, 114)
      noteCard(d, x + (width - cardWidth) / 2, y + 48, cardWidth, part === 0, part === 2)
      if (part > 0) d.line(x, y, x, y + 159, GRAY, '', 2)
      start += duration
    })
    d.cut(48 + start * unit, y, 159)
    ticks(d, y + 160, index ? [0, 1, 4, 6] : [0, 1, 2, 4], unit)
    if (!index) d.text('End at 4 s', 491, y + 72, 174, 22, 700, GRAY, true)
  })
  return d.finish()
}

function jCut(): Rendered {
  const d = new Diagram('040', 'J-cut: hear the page before seeing it',
    'An eight-second picture row shows hallway A until output second four, then notebook B. The sound row switches to B at second three, giving a one-second lead. B picture uses source 1-5 seconds while B sound uses source 0-5. At output second four both reach B source second one, remaining synchronized afterward.',
    ['Incoming B sound starts 1 s before its picture.', 'Source ranges preserve sync; the sound marks are schematic.'])
  d.text('Picture', 42, 136, 240, 24, 700)
  shot(d, 48, 185, 312, 218, 'A: hallway', 'Output 0-4 s', hallwayArt(), BLUE)
  shot(d, 360, 185, 312, 218, 'B: notebook', 'Output 4-8 s', notebookArt('half'), GREEN)
  d.cut(360, 185, 218)
  d.text('Sound', 42, 435, 180, 24, 700)
  d.rect(48, 480, 234, 96, COOL, BLUE, 0)
  d.rect(282, 480, 390, 96, '#dce8dc', GREEN, 0)
  d.text('A: hallway', 61, 488, 208, 22, 700, BLUE)
  d.text('B: page rustle', 299, 488, 355, 22, 700, GREEN)
  waveform(d, 61, 550, 206, BLUE, true)
  waveform(d, 300, 550, 353, GREEN)
  d.line(282, 416, 282, 576, GREEN, '5 5')
  d.line(360, 415, 360, 576, RED, '5 5')
  d.line(282, 453, 360, 453, GREEN, '', 3)
  d.text('1 s lead', 388, 433, 246, 22, 700, GREEN)
  ticks(d, 578, [0, 3, 4, 8], 78)
  d.text('At output 4 s, both B tracks reach source 1 s.', 42, 634, 636, 22, 700)
  d.text('B picture: source 1-5 s. B sound: source 0-5 s.', 42, 666, 636)
  return d.finish()
}

function lCut(): Rendered {
  const d = new Diagram('041', 'L-cut: the invitation finishes off screen',
    'A seven-second picture row shows the speaker for three seconds and an empty cushion for four. The original invitation remains continuous from zero to five, crossing the picture cut by two seconds. Compatible quiet room tone follows from five to seven. Words are not duplicated to create the overlap.',
    ['From 3-5 s: outgoing voice, incoming cushion picture.', 'Keep the sentence intact and synchronized before the cut.'])
  d.text('Picture', 42, 136, 240, 24, 700)
  shot(d, 52, 185, 264, 218, 'Speaker', '0-3 s', portrait(SKIN), BLUE, '0 0 200 190')
  shot(d, 316, 185, 352, 218, 'Empty cushion', '3-7 s', cushionArt(), GREEN)
  d.cut(316, 185, 218)
  d.text('Sound', 42, 435, 180, 24, 700)
  d.rect(52, 480, 440, 96, COOL, BLUE, 0)
  d.rect(492, 480, 176, 96, '#e4e2d7', GRAY, 0)
  d.text('Original invitation, once', 67, 488, 410, 22, 700, BLUE)
  d.text('Room tone', 501, 488, 158, 22, 700, GRAY)
  waveform(d, 65, 550, 413, BLUE)
  waveform(d, 505, 550, 150, GRAY, true)
  d.line(316, 416, 316, 576, RED, '5 5')
  d.line(492, 416, 492, 576, BLUE, '5 5')
  d.line(316, 453, 492, 453, BLUE, '', 3)
  d.text('2 s overlap', 506, 433, 164, 22, 700, BLUE)
  ticks(d, 578, [0, 3, 5, 7], 88, 52)
  d.text('Picture changes at 3 s; the voice finishes at 5 s.', 42, 634, 636, 22, 700)
  d.text('Quiet room tone follows, not another copy of the words.', 42, 666, 636)
  return d.finish()
}

function calendarShot(d: Diagram, x: number, y: number, time: string): void {
  shot(d, x, y, 208, 180, 'Same calendar', time, calendarArt(), BLUE)
  // Artwork contains no scaled text. SAT stays 22 px in every repeated view.
  const scale = 88 / 150
  const centerX = x + 10 + (188 - 200 * scale) / 2 + 123 * scale
  const centerY = y + 48 + 101 * scale
  d.text('SAT', centerX - 28, centerY - 14.5, 56, 22, 700, INK, true)
}

function neighboringImages(): Rendered {
  const d = new Diagram('042', 'Change only the neighboring image',
    'Version A is the same Saturday calendar, a brush tray, then the identical calendar. Version B replaces only the tray with a packed bag. Both have three two-second pictures and no music change. Painting or departure are possible readings, but brushes can mean cleanup and a bag can mean storage.',
    ['Keep the calendar, 2 s holds, and sound alike in both versions.', 'An association invites a reading; it does not prove an event.'])
  d.text('A: Saturday, brushes, Saturday', 42, 134, 636, 24, 700)
  calendarShot(d, 48, 177, '0-2 s')
  shot(d, 256, 177, 208, 180, 'Brush tray', '2-4 s', brushesArt(), GREEN)
  calendarShot(d, 464, 177, '4-6 s')
  d.cut(256, 177, 180)
  d.cut(464, 177, 180)
  d.text('Possible: painting. Alternative: cleaning brushes.', 42, 367, 636)
  d.text('B: Saturday, bag, Saturday', 42, 418, 636, 24, 700)
  d.text('Possible: departure. Alternative: storage.', 42, 462, 636)
  calendarShot(d, 48, 506, '0-2 s')
  shot(d, 256, 506, 208, 180, 'Packed bag', '2-4 s', bagArt(), AMBER)
  calendarShot(d, 464, 506, '4-6 s')
  d.cut(256, 506, 180)
  d.cut(464, 506, 180)
  return d.finish()
}

function colorMatch(): Rendered {
  const d = new Diagram('043', 'Match first, then test a shared look',
    'A six-second check shows the same hand and marked white page as daylight A, warmer B, and corrected B for two seconds each. The corrected card and hand reduce the unwanted amber difference without changing their shapes or creases. Below, an optional restrained warm treatment is applied to both already matched shots.',
    ['Compare the hand and page together, keeping detail visible.', 'Page colors are illustrative, not calibrated skin-tone targets.'])
  d.text('Mismatch check: each view lasts 2 s', 42, 140, 636, 24, 700)
  shot(d, 48, 187, 208, 252, 'A: reference', '0-2 s', cardHand('#e8e5db', SKIN), BLUE)
  shot(d, 256, 187, 208, 252, 'B: warmer', '2-4 s', cardHand('#e8c499', '#aa7448'), AMBER)
  shot(d, 464, 187, 208, 252, 'B: corrected', '4-6 s', cardHand('#e8e5db', SKIN), GREEN)
  d.cut(256, 187, 252)
  d.cut(464, 187, 252)
  d.text('Optional shared look, after correction', 42, 474, 636, 24, 700)
  ;[48, 372].forEach((x, index) => {
    d.rect(x, 529, 300, 154, WARM, '#a89985', 0)
    d.text(index ? 'B matched' : 'A reference', x + 14, 539, 272, 22, 700)
    d.art(cardHand('#e5d9c2', '#92704f'), x + 74, 573, 152, 103)
  })
  return d.finish()
}

function formatCheck(): Rendered {
  const d = new Diagram('044', 'A flat picture does not identify log',
    'Three alternative picture tracks cover the same 0-3 source seconds, viewed one at a time. The original blue folder and a neutral saved copy retain separate crease lines and marks on the white page. An illustrative failed guessed conversion merges dark creases into the folder and light marks into the page.',
    ['Compare one alternative at a time, not three stacked effects.', 'Input format unknown? Leave unverified transforms off.'])
  d.text('Same 0-3 s source interval on each row', 42, 140, 636, 24, 700)
  ;[188, 358, 528].forEach((y, index) => {
    d.text(['Original\n0-3 s', 'Neutral copy\n0-3 s', 'Guessed\nconversion\n0-3 s'][index], 42, y + 13, 179, 22, 700, index === 2 ? RED : INK)
    d.rect(235, y, 439, 152, index === 2 ? '#f2e1d9' : COOL, index === 2 ? RED : BLUE, 0)
    d.art(folderArt(index === 2), 245, y + 9, 208, 132)
    d.text(index === 2 ? 'Creases merge.\nPage marks\ndisappear.' : 'Creases and\npage marks\nstay distinct.', 470, y + 21, 190, 22, 700)
  })
  return d.finish()
}

/** Return a bespoke first visual, leaving all other guide visuals untouched. */
export function lightEditOverride(id: string, index: number): { svg: string; width: number; height: number } | null {
  if (index !== 0) return null
  switch (id) {
    case 'cinema-025': return lightPositions()
    case 'cinema-026': return shadowEdges()
    case 'cinema-028': return negativeFill()
    case 'cinema-029': return practicalLamp()
    case 'cinema-030': return doorwayPortrait()
    case 'cinema-031': return mixedLight()
    case 'cinema-032': return flickerTest()
    case 'cinema-033': return shoeContinuity()
    case 'cinema-034': return safeSetup()
    case 'cinema-035': return chooseTake()
    case 'cinema-036': return assembly()
    case 'cinema-037': return actionMatch()
    case 'cinema-038': return omittedTime()
    case 'cinema-039': return readableHold()
    case 'cinema-040': return jCut()
    case 'cinema-041': return lCut()
    case 'cinema-042': return neighboringImages()
    case 'cinema-043': return colorMatch()
    case 'cinema-044': return formatCheck()
    default: return null
  }
}