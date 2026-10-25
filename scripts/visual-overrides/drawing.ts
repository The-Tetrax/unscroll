type Illustration = { svg: string; width: number; height: number }
type Anchor = 'start' | 'middle' | 'end'

const INK = '#231f20'
const IVORY = '#f7f4ed'
const RED = '#bc2031'
const GRAY = '#69635f'
const PALE = '#ddd7cc'

// Original geometry for the examples in design-ux-draw and field-guides.
// No source artwork, font files, images, or runtime dependencies are embedded.
function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  })[character] ?? character)
}

function label(
  x: number, y: number, words: string, anchor: Anchor = 'start',
  size: 22 | 24 | 26 = 24, color = INK, bold = false,
): string {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${bold ? 700 : 400}" fill="${color}">${escapeXml(words)}</text>`
}

function path(d: string, fill = 'none', stroke = INK, width = 3, attributes = ''): string {
  return `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${attributes}/>`
}

function leader(d: string): string {
  return path(d, 'none', GRAY, 2)
}

function arrow(id: string, d: string): string {
  return path(d, 'none', RED, 3.5, `marker-end="url(#${id}-arrow)"`)
}

function dot(x: number, y: number): string {
  return `<circle cx="${x}" cy="${y}" r="4.5" fill="${RED}" stroke="${IVORY}" stroke-width="1.5"/>`
}

function svg(
  id: string, title: string, description: string, body: string,
  height = 660, definitions = '',
): Illustration {
  return {
    width: 720,
    height,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="${height}" viewBox="0 0 720 ${height}" role="img" aria-labelledby="${id}-title ${id}-desc">
  <title id="${id}-title">${escapeXml(title)}</title>
  <desc id="${id}-desc">${escapeXml(description)}</desc>
  <defs>
    <marker id="${id}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="14" markerHeight="14" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M1 1 L9 5 L1 9 Z" fill="${RED}"/></marker>
    ${definitions}
  </defs>
  <rect width="720" height="${height}" rx="12" fill="${IVORY}"/>
  <g font-family="Arial, Helvetica, sans-serif" fill="${INK}" font-size="24">
    ${label(24, 44, title, 'start', 26, INK, true)}
    ${path('M24 68 H696', 'none', PALE, 1.5)}
    ${body}
  </g>
</svg>`,
  }
}

function leafGesture(): Illustration {
  const id = 'draw-design-037'
  return svg(id, 'Build the bend before the outline',
    'Two original leaf studies contrast a rigid upright symbol with the lesson\'s drooping leaf. At left, attachment, blade, and tip keep rising. At right, the stem rises from a visible attachment, turns at a high bend, and connects to a blade hanging right. Red paths trace proposed gesture, not measured forces. The stretched outer curve and compressed inner curve belong to the same blade.', `
    ${label(24, 109, 'Upright symbol', 'start', 24, INK, true)}
    ${label(378, 109, 'Observed droop', 'start', 24, INK, true)}
    ${path('M350 133 V549', 'none', PALE, 1.5)}
    ${path('M161 456 C168 429 170 396 169 366', 'none', INK, 5)}
    ${path('M169 366 C98 326 111 229 176 150 C249 236 259 320 169 366 Z', '#e8e2d6')}
    ${arrow(id, 'M161 456 C175 365 179 257 176 160')}
    ${dot(161, 456)}
    ${path('M405 456 C419 390 423 235 478 209', 'none', INK, 5)}
    ${path('M478 209 C538 162 646 226 647 399 C571 378 512 318 478 209 Z', '#e8e2d6')}
    ${arrow(id, 'M405 456 C419 348 432 209 486 207 C542 205 601 307 638 389')}
    ${dot(405, 456)}
    ${label(511, 153, 'High bend')}
    ${leader('M529 164 L493 194')}
    ${label(555, 453, 'Hanging tip')}
    ${leader('M632 429 L645 409')}
    ${label(93, 510, 'Still rising')}
    ${label(369, 510, 'Attachment')}
    ${leader('M428 484 L409 466')}
    ${label(24, 605, 'Move the tip; keep the attachment.')}
  `, 644)
}

function kettleConstruction(): Illustration {
  const id = 'draw-design-038'
  const body = 'M215 253 C202 304 182 354 190 423 C200 486 462 489 480 428 C489 374 474 298 449 253 Z'
  return svg(id, 'Connect the kettle\'s volumes',
    'An original tapered kettle is constructed from a rounded body, elliptical lid, loop handle, and tubular spout. The handle is behind the body and has two attachment points; one hidden join is dashed. A central axis passes through the lid and base, and curved cross-contours describe the belly. The spout has an elliptical opening and a direction continuing toward its attachment. Construction lines are scaffolding, not exact product dimensions.', `
    ${label(24, 137, 'Loop handle')}
    ${leader('M119 151 L151 287')}
    ${label(283, 111, 'Lid plane')}
    ${leader('M332 122 V156')}
    ${label(499, 137, 'Tube spout')}
    ${leader('M569 151 V208')}
    ${path('M216 282 C81 228 111 470 198 419', 'none', INK, 15)}
    ${path('M216 282 C81 228 111 470 198 419', 'none', IVORY, 8)}
    ${path('M456 350 C512 347 540 287 546 231 L594 215 C593 315 550 381 478 395 Z', '#b9b1a1')}
    <ellipse cx="570" cy="223" rx="26" ry="12" transform="rotate(-19 570 223)" fill="${IVORY}" stroke="${INK}" stroke-width="3"/>
    ${path('M516 338 Q534 346 552 329 M535 294 Q555 303 576 286', 'none', GRAY, 2)}
    ${path('M454 374 Q540 328 570 228', 'none', RED, 2.5, 'stroke-dasharray="8 7"')}
    ${path(body, '#e8e2d6')}
    <g clip-path="url(#${id}-body)">
      <ellipse cx="335" cy="367" rx="142" ry="47" fill="none" stroke="${RED}" stroke-width="2.5" stroke-dasharray="8 7"/>
      ${path('M194 367 C222 429 450 429 478 367', 'none', RED, 2.5)}
      <ellipse cx="335" cy="434" rx="135" ry="36" fill="none" stroke="${GRAY}" stroke-width="2" stroke-dasharray="7 7"/>
      ${path('M197 389 C219 382 222 423 198 422', 'none', RED, 2.5, 'stroke-dasharray="5 5"')}
    </g>
    <ellipse cx="332" cy="253" rx="117" ry="39" fill="none" stroke="${GRAY}" stroke-width="2" stroke-dasharray="8 7"/>
    ${path('M231 238 L241 219 C259 193 413 194 432 220 L441 239 C414 268 260 269 231 238 Z', IVORY)}
    <ellipse cx="336" cy="219" rx="95" ry="25" fill="${IVORY}" stroke="${INK}" stroke-width="3"/>
    ${path('M318 183 V205 C318 219 350 219 350 205 V183 Z', '#b9b1a1')}
    <ellipse cx="334" cy="183" rx="16" ry="7" fill="${IVORY}" stroke="${INK}" stroke-width="3"/>
    ${path('M334 157 V498', 'none', RED, 2, 'stroke-dasharray="9 8"')}
    ${dot(209, 284)}
    ${dot(198, 419)}
    ${label(24, 541, 'Hidden join')}
    ${leader('M156 533 L194 431')}
    ${label(257, 557, 'Rounded body')}
    ${leader('M338 532 V478')}
    ${label(485, 534, 'Shared axis')}
    ${leader('M472 527 L346 495')}
    ${label(26, 647, 'Attachments before highlights.')}
  `, 677, `<clipPath id="${id}-body"><path d="${body}"/></clipPath>`)
}

function utensilGap(): Illustration {
  const id = 'draw-design-039'
  return svg(id, 'Check the space between utensils',
    'A wooden spoon and slotted spatula cross near the bottoms of their handles. Their inner edges bound a red wedge from an opening at the top to the crossing below. A separate narrow trial has the same opening height and crossing height but steeper boundaries. The dashed top of each wedge checks the opening; it is not another utensil. Compare boundary slopes rather than adding wood grain.', `
    ${label(24, 109, 'Observed arrangement', 'start', 24, INK, true)}
    ${label(508, 109, 'Narrow trial', 'start', 24, INK, true)}
    ${path('M261 517 L356 300 L333 290 L366 171 Q371 159 384 164 L447 186 Q460 190 455 204 L407 315 L384 308 L287 529 Q280 542 267 534 Q257 528 261 517 Z', '#b9ae98')}
    ${path('M382 191 L356 271 M401 198 L374 280 M421 205 L393 287', 'none', IVORY, 8)}
    ${path('M293 527 L167 316 C133 321 102 293 88 263 C68 221 83 174 112 164 C148 155 181 188 197 225 C212 258 210 282 202 300 L312 515 Q319 526 307 532 Q299 534 293 527 Z', '#e8e2d6')}
    ${path('M108 198 C80 228 114 291 153 289 C184 286 189 250 168 218', 'none', '#b7aa91', 2.5)}
    ${path('M202 300 L285 462 L356 300', RED, RED, 3, 'fill-opacity="0.10"')}
    ${path('M202 300 H356', 'none', RED, 2.5, 'stroke-dasharray="7 6"')}
    ${dot(202, 300)}${dot(356, 300)}${dot(285, 462)}
    ${label(238, 275, 'Opening')}
    ${label(280, 369, 'Gap', 'middle', 24, RED)}
    ${label(240, 574, 'Crossing')}
    ${leader('M282 548 V478')}
    ${path('M534 300 L560 462 L586 300', RED, RED, 3, 'fill-opacity="0.10"')}
    ${path('M534 300 H586', 'none', RED, 2.5, 'stroke-dasharray="7 6"')}
    ${dot(534, 300)}${dot(586, 300)}${dot(560, 462)}
    ${label(495, 518, 'Same height')}
    ${label(24, 628, 'Check the inner-edge slopes.')}
  `, 662)
}

function shoeEnvelope(): Illustration {
  const id = 'draw-design-040'
  return svg(id, 'Check the shoe\'s outer extent',
    'An original side-view shoe sits inside a five-checkpoint envelope: heel top, high opening, furthest toe, lowest sole, and heel base. A faint trial puts the toe too high; a short red arrow lowers it before lace detail. The lower study deliberately raises the ankle into a boot while retaining a shoe-like foot and sole. These are construction comparisons, not standard shoe proportions.', `
    ${label(267, 138, 'Opening')}
    ${leader('M310 149 L324 168')}
    ${label(24, 215, 'Heel')}
    ${leader('M84 222 L128 242')}
    ${path('M325 179 L621 305 L363 428', 'none', '#b4ada1', 2, 'stroke-dasharray="7 7"')}
    <circle cx="621" cy="305" r="5" fill="${IVORY}" stroke="#b4ada1" stroke-width="2"/>
    ${label(485, 263, 'Lower toe')}
    ${arrow(id, 'M642 315 Q648 339 630 359')}
    ${path('M137 245 C170 255 205 281 236 258 L287 188 Q306 179 325 179 L385 275 C449 297 515 319 577 341 Q607 355 621 368 C562 380 455 407 363 428 L150 385 Q124 382 118 371 Z', '#e8e2d6')}
    ${path('M122 348 C221 392 458 405 604 357 L621 368 C562 380 455 407 363 428 L150 385 Q131 382 118 371 Z', '#aaa18e')}
    ${path('M161 249 Q211 229 284 217 L273 239 Q251 278 228 271 Q194 262 161 249 Z', '#77736a', INK, 2)}
    ${path('M300 218 L334 235 M310 241 L346 258 M322 264 L360 280', 'none', INK, 3)}
    ${path('M137 245 L325 179 L621 368 L363 428 L118 371 Z', 'none', RED, 2.5, 'stroke-dasharray="9 7"')}
    ${dot(137, 245)}${dot(325, 179)}${dot(621, 368)}${dot(363, 428)}${dot(118, 371)}
    ${label(590, 429, 'Toe')}
    ${leader('M619 406 L621 380')}
    ${label(331, 477, 'Sole')}
    ${leader('M356 451 L361 440')}
    ${path('M24 505 H696', 'none', PALE, 1.5)}
    ${label(24, 550, 'Invented boot', 'start', 24, INK, true)}
    ${label(24, 594, 'Raise the ankle.')}
    ${label(24, 630, 'Keep the foot.')}
    ${path('M400 565 L470 555 L488 614 L520 648 L615 672 Q640 681 644 694 Q619 714 560 718 L402 716 Q388 713 390 697 Z', '#e8e2d6')}
    ${path('M392 694 Q508 723 644 694 L638 706 Q604 727 555 729 L401 726 Q390 723 390 713 Z', '#aaa18e')}
    ${path('M400 565 Q428 542 470 555 L470 570 Q438 582 400 578 Z', '#77736a', RED, 3)}
    ${path('M400 578 L395 644 M470 570 L488 614', 'none', RED, 3)}
    ${path('M396 642 Q429 662 458 640 L472 623 L520 648', 'none', GRAY, 2, 'stroke-dasharray="6 6"')}
  `, 767)
}

function boxPerspective(): Illustration {
  const id = 'draw-design-041'
  // The rear corners use one common interpolation toward each VP. The top
  // back corner in the second view is the intersection of the two families.
  return svg(id, 'Make parallel edges share a VP',
    'Two complete unbranded boxes demonstrate upright linear perspective. In the one-point view, front edges stay horizontal or vertical; three visible depth edges and their red extensions converge at the same marked vanishing point on the horizon. In the corner view, the two horizontal edge families converge at left and right vanishing points on one horizon. All vertical edges remain vertical. The horizons describe the observer\'s eye level, not a tabletop edge.', `
    ${label(24, 105, 'One-point view', 'start', 24, INK, true)}
    ${label(24, 140, 'Horizon', 'start', 22)}
    ${label(598, 124, 'VP', 'middle', 24, RED, true)}
    ${path('M24 150 H696', 'none', GRAY, 2)}
    ${path('M331 226.8 L598 150 M446.2 226.8 L598 150 M446.2 313.2 L598 150', 'none', RED, 2, 'stroke-dasharray="7 6"')}
    ${path('M153 278 L345 278 L446.2 226.8 L331 226.8 Z', '#e8e2d6')}
    ${path('M345 278 L446.2 226.8 L446.2 313.2 L345 422 Z', '#aaa18e')}
    ${path('M153 278 H345 V422 H153 Z', IVORY)}
    ${dot(598, 150)}
    ${label(444, 393, 'Front plane', 'start', 22)}
    ${leader('M431 385 L317 363')}
    ${label(24, 456, 'Front edges stay parallel.')}
    ${path('M24 478 H696', 'none', PALE, 1.5)}
    ${label(24, 515, 'Corner view', 'start', 24, INK, true)}
    ${label(58, 546, 'VP 1', 'middle', 22, RED, true)}
    ${label(662, 546, 'VP 2', 'middle', 22, RED, true)}
    ${label(360, 546, 'Horizon', 'middle', 22)}
    ${path('M24 556 H696', 'none', GRAY, 2)}
    ${path('M209 611 L58 556 M209 671 L58 556 M511 611 L662 556 M511 671 L662 556 M360 592.666667 L58 556 M360 592.666667 L662 556', 'none', RED, 2, 'stroke-dasharray="7 6"')}
    ${path('M360 666 L209 611 L360 592.666667 L511 611 Z', '#e8e2d6')}
    ${path('M209 611 L360 666 V786 L209 671 Z', IVORY)}
    ${path('M360 666 L511 611 V671 L360 786 Z', '#aaa18e')}
    ${dot(58, 556)}${dot(662, 556)}
    ${label(360, 825, 'Verticals stay upright', 'middle')}
  `, 849)
}

function napkinValues(): Illustration {
  const id = 'draw-design-042'
  const front = 'M97 411 C138 353 177 278 239 246 Q290 259 336 299 C292 350 253 420 185 450 Q140 438 97 411 Z'
  const turn = 'M239 246 Q290 259 336 299 C353 346 380 403 422 436 Q368 423 333 388 C312 342 282 283 239 246 Z'
  const inward = 'M185 450 C253 420 292 350 336 299 C326 340 324 363 333 388 Q368 423 422 436 L333 482 Q255 491 185 450 Z'
  return svg(id, 'Group light before texture',
    'Side light reaches a folded white napkin and brown cardboard. The facing napkin plane is light, the lit cardboard is middle value, and a continuous sheltered white fold is dark. The three colors follow the lesson\'s illustrative value plan, not material names or measured brightness. Below, the same little fold is drawn with uniform hatch texture and with a connected shadow group. Texture alone leaves the inward plane poorly separated.', `
    ${label(24, 115, 'Side light')}
    ${arrow(id, 'M92 140 L206 255')}
    ${label(253, 148, 'Lit napkin')}
    ${leader('M285 162 L237 299')}
    ${path(front, '#E8E2D6', GRAY, 2.5)}
    ${path(turn, '#E8E2D6', GRAY, 2.5)}
    ${path(inward, '#55564E', 'none')}
    ${path('M185 450 L333 482 L422 436', 'none', GRAY, 2)}
    ${path('M475 319 L668 349 L624 458 L444 425 Z', '#A9A08B', GRAY, 2.5)}
    ${path('M444 425 L624 458 V471 L444 439 Z', '#857d6a', 'none')}
    ${label(210, 534, 'White fold')}
    ${leader('M286 510 L313 429')}
    ${label(493, 516, 'Lit cardboard')}
    ${leader('M564 490 L565 405')}
    ${path('M24 558 H696', 'none', PALE, 1.5)}
    ${label(59, 601, 'Texture only', 'start', 24, INK, true)}
    ${label(407, 601, 'Values first', 'start', 24, INK, true)}
    <g transform="translate(30 548) scale(.58)">
      ${path(front, IVORY, GRAY, 3)}${path(turn, IVORY, GRAY, 3)}${path(inward, IVORY, GRAY, 3)}
      <g clip-path="url(#${id}-small-fold)">
        ${Array.from({ length: 28 }, (_, i) => path(`M${54 + i * 15} 492 l120 -270`, 'none', GRAY, 2.5)).join('')}
      </g>
    </g>
    <g transform="translate(379 548) scale(.58)">
      ${path(front, '#E8E2D6', GRAY, 3)}${path(turn, '#E8E2D6', GRAY, 3)}${path(inward, '#55564E', 'none')}
    </g>
  `, 845, `<clipPath id="${id}-small-fold"><path d="${front}"/><path d="${turn}"/><path d="${inward}"/></clipPath>`)
}

function towelEdges(): Illustration {
  const id = 'draw-design-043'
  return svg(id, 'Let the towel\'s edges differ',
    'An original partly rolled towel contains three different transitions. A light hem meets its darker overlap abruptly without an extra black border. The broad roll changes gradually from light to shade. Its loose tail fades to the exact gray of the backdrop, so part of the boundary is genuinely absent; a neighboring visible segment still explains the tail. Equal tail and backdrop values illustrate a lost edge, not a claim that every real towel has one.', `
    ${label(24, 112, 'Hard hem')}
    ${label(277, 112, 'Soft roll')}
    ${label(531, 112, 'Lost tail')}
    <rect x="44" y="162" width="632" height="354" rx="8" fill="#77736A"/>
    ${path('M321 319 C453 315 476 363 531 365 C579 368 618 342 661 339 L661 452 C602 465 547 439 508 438 C419 437 365 407 294 406 Z', `url(#${id}-tail)`, 'none')}
    ${path('M163 234 Q267 222 375 271 L347 431 Q246 398 163 414 Z', `url(#${id}-roll)`, 'none')}
    <ellipse cx="163" cy="324" rx="65" ry="90" fill="url(#${id}-roll)"/>
    ${path('M100 344 C88 303 110 240 155 234 Q266 222 375 271', 'none', '#484741', 2.5)}
    ${path('M159 275 C212 276 209 359 169 369 C136 380 105 341 126 310 C142 286 181 297 181 324 Q180 341 158 339', 'none', '#77736A', 3)}
    ${path('M270 355 C307 363 356 381 397 400 L391 415 C349 397 302 378 266 370 Z', '#484741', 'none')}
    ${path('M281 330 C333 339 373 359 407 377 L397 400 C356 381 307 363 270 355 Z', '#DED8CB', 'none')}
    ${path('M315 409 Q362 436 459 440', 'none', `url(#${id}-found)`, 3)}
    ${leader('M127 124 L322 353')}
    ${leader('M335 124 L281 284')}
    ${leader('M587 124 L608 348')}
    ${label(434, 567, 'Tail = backdrop')}
    ${leader('M544 542 L591 447')}
    ${label(24, 624, 'No outline where values meet.')}
  `, 660, `
    <linearGradient id="${id}-roll" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#DED8CB"/><stop offset=".38" stop-color="#C8C3B6"/><stop offset="1" stop-color="#77736A"/>
    </linearGradient>
    <linearGradient id="${id}-tail" gradientUnits="userSpaceOnUse" x1="320" y1="350" x2="608" y2="350">
      <stop offset="0" stop-color="#DED8CB"/><stop offset=".46" stop-color="#a5a093"/><stop offset=".85" stop-color="#77736A"/><stop offset="1" stop-color="#77736A"/>
    </linearGradient>
    <linearGradient id="${id}-found"><stop stop-color="#b5ae9f"/><stop offset="1" stop-color="#77736A"/></linearGradient>
  `)
}

function orangeShadows(): Illustration {
  const id = 'draw-design-044'
  return svg(id, 'Two shadows, two surfaces',
    'An orange rests on a sheet of paper. The upper-left light corresponds to a bright upper-left fruit surface and a darker turning surface on the right. That form shadow stays on the orange. A separate connected cast shadow extends away toward lower right across the receiving paper, beginning at the contact. Red light arrows stop at the fruit. The drawing does not assert a shadow length, fixed darkness, or automatic bright reflected-light rim.', `
    ${label(24, 111, 'Upper-left light')}
    ${path('M61 415 L459 299 L689 513 L220 616 Z', '#e8e2d6', '#b9b1a1', 2)}
    ${path('M279 445 C330 427 430 440 555 479 C621 505 604 538 540 538 C446 537 335 490 279 449 Z', '#4F5147', 'none')}
    <ellipse cx="285" cy="447" rx="36" ry="10" fill="#34362f"/>
    <circle cx="285" cy="333" r="115" fill="url(#${id}-orange)"/>
    ${path('M209 247 C250 205 304 208 349 240', 'none', '#8f8470', 2)}
    <ellipse cx="267" cy="224" rx="8" ry="4" transform="rotate(-18 267 224)" fill="#8F8470"/>
    ${arrow(id, 'M91 147 L202 253')}
    ${arrow(id, 'M156 141 L263 217')}
    ${label(484, 249, 'Form shadow', 'start', 24, INK, true)}
    ${label(484, 281, 'On the orange')}
    ${leader('M473 291 L375 368')}
    ${label(99, 533, 'Contact')}
    ${leader('M194 522 L277 458')}
    ${label(436, 587, 'Cast shadow', 'start', 24, INK, true)}
    ${label(436, 621, 'On the paper')}
    ${leader('M487 559 L477 500')}
    ${label(24, 674, 'Turning surface. Blocked light.')}
  `, 709, `
    <radialGradient id="${id}-orange" cx=".27" cy=".23" r=".88">
      <stop offset="0" stop-color="#E5DBBF"/><stop offset=".43" stop-color="#d1c4a6"/><stop offset=".73" stop-color="#8F8470"/><stop offset="1" stop-color="#625b4f"/>
    </radialGradient>
  `)
}

function pouchRedesign(): Illustration {
  const id = 'draw-design-045'
  return svg(id, 'Observe, recall, redesign the pouch',
    'An original zip pouch appears in three labeled studies. Observation shows a top opening on the top plane, a side plane, and an attached loop. The memory trial intentionally loses the thickness and misplaces the opening on the front. An invented version restores the volume and adds an upward-opening pocket attached to the right face. The pocket has its own top and side planes; red marks identify the structural change rather than decorative stitching.', `
    ${label(24, 111, 'Observed', 'start', 24, INK, true)}
    ${label(393, 111, 'Memory trial', 'start', 24, INK, true)}
    ${label(77, 154, 'Top opening')}
    ${leader('M178 165 L185 201')}
    ${path('M84 237 C45 219 40 280 84 270', 'none', INK, 7)}
    ${path('M85 210 Q104 188 126 180 Q131 177 142 179 L285 190 Q298 192 302 194 L263 225 Z', '#e8e2d6')}
    ${path('M263 225 L296 199 Q302 202 302 216 V315 Q302 332 293 337 L265 356 Z', '#aaa18e')}
    ${path('M85 210 L257 224 Q266 225 266 238 L265 350 Q264 363 250 362 L89 346 Q78 344 78 332 L75 219 Q75 210 85 210 Z', IVORY)}
    ${path('M119 196 L278 210', 'none', INK, 5)}
    ${path('M121 201 L277 215', 'none', GRAY, 1.5)}
    ${path('M276 210 L288 217 L284 230 L273 222 Z', PALE, INK, 2)}
    ${label(86, 404, 'Side thickness')}
    ${leader('M242 385 L285 298')}
    ${path('M433 243 C401 221 400 280 433 274', 'none', INK, 7)}
    ${path('M440 224 L641 237 Q652 238 652 251 V345 Q652 358 638 356 L440 343 Q429 342 429 329 V238 Q429 224 440 224 Z', '#e8e2d6')}
    ${path('M449 275 L630 289', 'none', RED, 5)}
    ${label(535, 154, 'Flat body')}
    ${leader('M582 165 L612 227')}
    ${label(427, 404, 'Opening slipped')}
    ${leader('M509 379 L529 289')}
    ${path('M24 443 H696', 'none', PALE, 1.5)}
    ${label(24, 485, 'Invented side pocket', 'start', 24, INK, true)}
    ${path('M160 578 C106 549 98 624 158 619', 'none', INK, 8)}
    ${path('M162 544 L211 504 Q215 502 229 504 L482 524 Q498 526 498 537 L421 563 Z', '#e8e2d6')}
    ${path('M421 563 L493 531 Q499 536 499 553 V677 Q499 691 486 698 L420 730 Z', '#aaa18e')}
    ${path('M162 544 L410 562 Q422 564 421 580 L420 712 Q420 730 403 729 L164 708 Q149 706 149 690 V559 Q149 543 162 544 Z', IVORY)}
    ${path('M201 528 L463 549', 'none', INK, 5)}
    ${path('M201 534 L461 555', 'none', GRAY, 1.5)}
    ${path('M458 548 L472 557 L466 576 L451 563 Z', PALE, INK, 2)}
    ${path('M437 620 L488 595 L548 611 L496 637 Z', '#e8e2d6', RED, 3)}
    ${path('M496 637 L548 611 L548 679 L493 704 Z', '#aaa18e', RED, 3)}
    ${path('M437 620 L496 637 L493 704 L438 688 Z', '#c8beac', RED, 3)}
    ${path('M447 619 L489 601 L535 613 L495 629 Z', '#77736a', 'none')}
    ${path('M437 620 L438 688', 'none', RED, 2, 'stroke-dasharray="5 5"')}
    ${label(561, 593, 'New pocket', 'start', 22)}
    ${leader('M565 605 L544 622')}
    ${label(569, 668, 'Faces up', 'start', 22)}
    ${leader('M566 677 L509 621')}
    ${label(24, 772, 'Keep the volume; change one attachment.')}
  `, 806)
}

function paperBoat(x: number, y: number): string {
  return `<g transform="translate(${x} ${y})">
    ${path('M-60 0 L-14 -24 L5 -42 L30 0 Z', '#e8e2d6', INK, 2.5)}
    ${path('M5 -42 L59 0 L30 0 Z', IVORY, INK, 2.5)}
    ${path('M-60 0 H59 L36 25 L-34 25 Z', IVORY, INK, 3)}
    ${path('M-60 0 L4 14 L59 0 M5 -42 L4 14', 'none', INK, 2)}
  </g>`
}

function boatThumbnails(): Illustration {
  const id = 'draw-design-046'
  return svg(id, 'Compare three boat arrangements',
    'Three original composition thumbnails contain a folded paper boat, a stone, and a broad cloth fold. The first places the boat low left and the stone high right along a diagonal fold. The second moves the boat centrally and crops the stone near the upper-right edge. The third leaves a larger quiet region by keeping the boat left, reducing the fold, and cropping most of the stone. These test placement and crop, not progressively more finished drawings or a universally best composition.', `
    ${label(24, 147, 'Diagonal', 'start', 24, INK, true)}
    ${label(24, 361, 'Central', 'start', 24, INK, true)}
    ${label(24, 575, 'More space', 'start', 24, INK, true)}
    <g clip-path="url(#${id}-frame-a)">
      <rect x="180" y="105" width="516" height="170" fill="#e8e2d6"/>
      ${path('M195 259 C325 262 368 192 481 177 Q571 164 664 126 L680 141 C557 189 422 200 371 244 Q278 290 195 278 Z', '#c8c1b3', 'none')}
      ${path('M556 166 C550 146 571 122 600 124 Q637 121 648 150 L639 174 Q598 192 560 178 Z', '#8c877b', 'none')}
      ${path('M568 148 L596 135 L620 141', 'none', '#aaa18e', 3)}
      ${paperBoat(282, 236)}
    </g>
    <rect x="180" y="105" width="516" height="170" fill="none" stroke="${INK}" stroke-width="2"/>
    <g clip-path="url(#${id}-frame-b)">
      <rect x="180" y="319" width="516" height="170" fill="#e8e2d6"/>
      ${path('M183 454 Q273 411 349 469 L397 499 L357 504 Q276 442 186 479 Z', '#c8c1b3', 'none')}
      ${path('M638 347 Q642 307 681 303 C724 311 738 351 711 373 Q671 385 640 366 Z', '#8c877b', 'none')}
      ${paperBoat(434, 426)}
    </g>
    <rect x="180" y="319" width="516" height="170" fill="none" stroke="${INK}" stroke-width="2"/>
    <g clip-path="url(#${id}-frame-c)">
      <rect x="180" y="533" width="516" height="170" fill="#e8e2d6"/>
      ${path('M181 682 Q276 664 377 686 L438 710 H180 Z', '#cec7b9', 'none')}
      ${path('M681 548 C676 526 708 511 735 530 L739 572 Q707 594 684 569 Z', '#9b9588', 'none')}
      ${paperBoat(286, 645)}
    </g>
    <rect x="180" y="533" width="516" height="170" fill="none" stroke="${INK}" stroke-width="2"/>
    ${label(24, 748, 'Change placement, crop, or contrast.')}
  `, 783, `
    <clipPath id="${id}-frame-a"><rect x="180" y="105" width="516" height="170"/></clipPath>
    <clipPath id="${id}-frame-b"><rect x="180" y="319" width="516" height="170"/></clipPath>
    <clipPath id="${id}-frame-c"><rect x="180" y="533" width="516" height="170"/></clipPath>
  `)
}

function surfaceMaterials(): Illustration {
  const id = 'draw-design-047'
  const spoon = 'M123 193 C70 191 52 235 72 288 C81 324 101 345 123 348 L147 489 Q154 510 174 503 Q184 498 179 480 L145 345 C179 327 198 298 186 254 C178 215 151 191 123 193 Z'
  const cloth = 'M507 299 C523 265 538 264 552 278 L605 260 Q621 262 630 286 L661 419 Q600 398 506 437 Q493 373 507 299 Z'
  return svg(id, 'Study bands, matte tone, and folds',
    'Three original surface drawings share a steady light: a polished spoon with curved adjacent bright and dark reflected bands; unprinted matte paper with a broad, low-contrast tonal change; and folded cloth whose larger shadow shapes precede a little woven texture. Below, two bowl details keep the shape fixed while shifting a bright band for a separate viewpoint test. These are example reflection maps, not measured materials or permanent painted spoon markings.', `
    ${label(24, 108, 'One steady light')}
    ${arrow(id, 'M256 94 L305 131')}
    ${label(48, 161, 'Polished spoon', 'start', 22, INK, true)}
    ${label(285, 161, 'Matte paper', 'start', 22, INK, true)}
    ${label(540, 161, 'Folded cloth', 'start', 22, INK, true)}
    ${path(spoon, '#343A3B', INK, 2.5)}
    <g clip-path="url(#${id}-spoon)">
      ${path('M137 182 C97 222 83 272 126 313 C140 327 145 349 146 365 L170 511 L200 504 L163 349 C205 310 210 236 177 189 Z', '#E9E8E0', 'none')}
      ${path('M88 186 C60 246 99 304 120 313 C88 261 136 242 116 193 Z', '#a5a5a0', 'none')}
      ${path('M169 199 C186 243 175 291 151 315', 'none', '#9d9f99', 6)}
    </g>
    ${path('M279 227 L444 243 L427 406 Q346 406 266 389 Z', `url(#${id}-paper)`, '#a5a093', 2)}
    ${path(cloth, '#c8c3b6', '#9b9588', 2)}
    ${path('M552 278 Q580 330 571 412 L624 411 Q592 349 605 260 Z', '#767167', 'none')}
    ${path('M507 299 Q523 350 506 437 L541 428 Q548 342 552 278 Z', '#a49d8e', 'none')}
    <g clip-path="url(#${id}-cloth)"><rect x="492" y="360" width="175" height="83" fill="url(#${id}-weave)"/></g>
    ${label(69, 547, 'Sharp bands', 'start', 22)}
    ${label(298, 547, 'Broad tone', 'start', 22)}
    ${label(517, 547, 'Folds + weave', 'start', 22)}
    ${path('M24 578 H696', 'none', PALE, 1.5)}
    ${label(170, 621, 'View A', 'middle', 24, INK, true)}
    ${label(389, 621, 'View B', 'middle', 24, INK, true)}
    <ellipse cx="170" cy="703" rx="49" ry="64" fill="#343A3B" stroke="${INK}" stroke-width="2"/>
    <ellipse cx="389" cy="703" rx="49" ry="64" fill="#343A3B" stroke="${INK}" stroke-width="2"/>
    ${path('M164 634 C119 683 187 715 155 772', 'none', '#E9E8E0', 23, `clip-path="url(#${id}-bowl-a)"`)}
    ${path('M402 634 C357 683 425 715 393 772', 'none', '#E9E8E0', 23, `clip-path="url(#${id}-bowl-b)"`)}
    ${arrow(id, 'M244 704 H313')}
    ${label(517, 687, 'Bands move.')}
    ${label(517, 723, 'Not paint.')}
  `, 803, `
    <clipPath id="${id}-spoon"><path d="${spoon}"/></clipPath>
    <clipPath id="${id}-cloth"><path d="${cloth}"/></clipPath>
    <clipPath id="${id}-bowl-a"><ellipse cx="170" cy="703" rx="49" ry="64"/></clipPath>
    <clipPath id="${id}-bowl-b"><ellipse cx="389" cy="703" rx="49" ry="64"/></clipPath>
    <linearGradient id="${id}-paper"><stop stop-color="#ded9cd"/><stop offset="1" stop-color="#C8C3B6"/></linearGradient>
    <pattern id="${id}-weave" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M1 0 V12 M0 5 H12" fill="none" stroke="#69635f" stroke-width=".8" opacity=".38"/></pattern>
  `)
}

function leafArrangement(): Illustration {
  const id = 'draw-design-048'
  return svg(id, 'Let the leaf lead the arrangement',
    'An original fallen leaf sits in front of a darker opening in folded unprinted cardboard. A single upper-left light is indicated. The leaf\'s pale blade has a clear boundary against that opening; larger cardboard planes remain middle value. A small lower-right pebble has a quiet edge rather than the strongest outline. Gesture, planes, negative space, value grouping, and selective edges support the stated intention to notice the leaf first, without claiming a guaranteed attention result.', `
    ${label(24, 114, 'One light')}
    ${arrow(id, 'M79 135 L225 275')}
    ${path('M147 395 L338 195 L456 438 Z', '#35362F', 'none')}
    ${path('M147 395 L338 195 L543 248 L352 448 Z', '#ACA18A', '#8d826d', 2)}
    ${path('M338 195 L543 248 L661 491 L456 438 Z', '#bcb098', '#8d826d', 2)}
    ${path('M147 395 L338 195 L456 438 Z', '#35362F', 'none')}
    ${path('M147 395 L338 195 L456 438', 'none', '#9b907a', 3)}
    ${path('M215 466 C161 391 252 292 357 268 C377 379 330 461 215 466 Z', '#EEE6D1', '#595a51', 2)}
    ${path('M200 503 C217 463 258 362 357 268', 'none', '#8d7656', 3)}
    ${path('M235 419 L205 383 M264 369 L257 333 M287 344 L326 343', 'none', '#aaa18e', 2)}
    ${path('M498 529 C496 508 516 496 538 500 Q569 499 575 523 C577 541 538 553 511 543 Z', '#595A51', 'none')}
    ${path('M503 521 Q522 501 546 506', 'none', '#8c8b7c', 3)}
    ${label(479, 153, 'Quiet cardboard')}
    ${leader('M568 168 L574 296')}
    ${label(24, 559, 'Leaf against dark')}
    ${leader('M211 537 L266 418')}
    ${label(500, 594, 'Quiet pebble')}
    ${leader('M554 571 L544 548')}
    ${label(24, 642, 'Keep contrast with the leaf.')}
  `, 680)
}

function lidEllipses(): Illustration {
  const id = 'draw-fg-017'
  const profiles = [
    { x: 132, minor: 48, ratio: '0.8', name: 'More open' },
    { x: 360, minor: 30, ratio: '0.5', name: 'Middle' },
    { x: 588, minor: 12, ratio: '0.2', name: 'More closed' },
  ]
  return svg(id, 'Match the opening, not a habitual oval',
    'Three circular-lid profiles have equal drawn major spans and exact minor-to-major ratios 48/60 = 0.8, 30/60 = 0.5, and 12/60 = 0.2. Their actual ellipse heights change in those proportions. Below, an enlarged 60 by 30 example shows perpendicular major and minor axes crossing at the center and four rim landmarks. Millimeters name the lesson\'s planned drawing spans, not physical screen measurements or conversions to viewing angles.', `
    ${label(24, 111, 'Each wide span: 60 mm')}
    ${profiles.map(({ x, minor, ratio, name }) => {
      const ry = 88 * minor / 60
      return `
        ${label(x, 158, name, 'middle', 22, INK, true)}
        <ellipse cx="${x}" cy="247" rx="88" ry="${ry}" fill="#e8e2d6" stroke="${INK}" stroke-width="3" data-major-mm="60" data-minor-mm="${minor}"/>
        ${path(`M${x - 88} 247 H${x + 88} M${x} ${247 - ry} V${247 + ry}`, 'none', RED, 2)}
        ${label(x, 360, `${minor} / 60 = ${ratio}`, 'middle', 22)}
      `
    }).join('')}
    ${path('M24 393 H696', 'none', PALE, 1.5)}
    ${label(24, 433, 'Middle profile', 'start', 24, INK, true)}
    <ellipse cx="310" cy="552" rx="204" ry="102" fill="#e8e2d6" stroke="${INK}" stroke-width="3" data-major-mm="60" data-minor-mm="30"/>
    ${path('M106 552 H514 M310 450 V654', 'none', RED, 2.5)}
    ${dot(106, 552)}${dot(514, 552)}${dot(310, 450)}${dot(310, 654)}
    ${path('M548 450 V654 M539 450 H557 M539 654 H557 M106 684 H514 M106 675 V693 M514 675 V693', 'none', GRAY, 2)}
    ${label(569, 560, '30 mm')}
    ${label(310, 722, '60 mm', 'middle')}
  `, 753)
}

function hatchLines(x: number, y: number, side: number, step: number, cross = false): string {
  const strokes: string[] = []
  for (let offset = -side; offset <= side; offset += step) {
    strokes.push(path(`M${x + offset} ${y + side} l${side} -${side}`, 'none', INK, 2.2))
    if (cross) strokes.push(path(`M${x + offset} ${y} l${side} ${side}`, 'none', INK, 2.2))
  }
  return strokes.join('')
}

function hatchAndRibbon(): Illustration {
  const id = 'draw-fg-018'
  const patches = [
    { x: 24, name: 'Spaced', step: 19, cross: false },
    { x: 196, name: 'Closer', step: 10, cross: false },
    { x: 368, name: 'Crossed', step: 10, cross: true },
    { x: 540, name: 'Dense cross', step: 6, cross: true },
  ]
  const ribbon = 'M139 580 C117 470 196 419 295 427 C395 436 477 523 409 587 C367 628 285 618 282 654 C279 692 434 717 570 627 L616 673 C456 765 214 723 229 650 C241 585 367 604 373 556 C384 505 317 477 269 478 C201 475 179 525 195 573 Z'
  return svg(id, 'Build tone with gaps and layers',
    'Four original ballpoint-like patches contain actual strokes of equal width: spaced single hatching, closer single hatching, two crossing families, and denser crossing. The open paper gaps decrease rather than the pen stroke becoming heavier. Below, cross-contour strokes curve and change direction around a curled paper ribbon; a light section is left open. Coverage controls tone while direction describes a surface. The strokes are schematic, not calibrated ink or a required crossing angle.', `
    ${patches.map(({ x, name, step, cross }, i) => `
      ${label(x + 78, 112, name, 'middle', 22, INK, true)}
      <rect x="${x}" y="140" width="156" height="156" fill="${IVORY}" stroke="${PALE}" stroke-width="2"/>
      <g clip-path="url(#${id}-patch-${i})">${hatchLines(x, 140, 156, step, cross)}</g>
    `).join('')}
    ${label(24, 348, 'Same stroke width. Different coverage.')}
    ${path('M24 377 H696', 'none', PALE, 1.5)}
    ${label(24, 416, 'Curve strokes with the ribbon', 'start', 24, INK, true)}
    ${path(ribbon, IVORY, INK, 3)}
    <g clip-path="url(#${id}-ribbon)">
      ${path('M145 525 Q146 551 186 543 M155 497 Q153 527 194 522 M174 472 Q174 507 210 504 M201 450 Q198 484 230 488 M234 434 Q223 467 252 479 M272 429 Q251 453 270 478 M308 432 Q279 451 303 483 M343 445 Q314 460 329 493 M374 465 Q345 475 350 506 M399 490 Q366 488 367 526 M415 520 Q383 510 375 547 M414 549 Q389 531 371 569 M400 577 Q387 548 360 585 M379 596 Q369 563 338 600', 'none', INK, 2.2)}
      ${path('M392 481 Q376 501 365 514 M405 502 Q387 513 372 537 M417 534 Q393 539 374 558 M408 563 Q394 556 367 577 M389 586 Q377 570 349 594 M367 602 Q354 583 329 605 M352 610 Q339 589 314 612 M337 615 Q324 598 301 620', 'none', INK, 2.2)}
      ${path('M239 625 Q259 642 282 640 M230 647 Q253 660 283 656 M231 668 Q254 679 290 672 M246 691 Q263 692 311 687 M270 707 Q285 705 337 698 M302 720 Q318 718 367 706 M341 730 Q356 728 402 708 M382 736 Q397 729 438 705 M428 735 Q439 726 477 692 M473 726 Q484 713 510 676 M517 710 Q527 690 542 653', 'none', INK, 2.2)}
    </g>
    ${label(499, 478, 'Light paper')}
    ${leader('M555 492 L576 645')}
    ${label(24, 799, 'Direction describes the bend.')}
  `, 834, `
    ${patches.map(({ x }, i) => `<clipPath id="${id}-patch-${i}"><rect x="${x}" y="140" width="156" height="156"/></clipPath>`).join('')}
    <clipPath id="${id}-ribbon"><path d="${ribbon}"/></clipPath>
  `)
}

function ridgeShadows(): Illustration {
  const id = 'draw-fg-019'
  return svg(id, 'Suggest ridges with cast shadows',
    'Two original ridged-cardboard studies compare full ridge outlines with selected narrow cast-shadow shapes on the far side of the ridges. The second deliberately omits neighboring shadows. A lower cross-section explains the cause: parallel light arrows travel down and right, one stopping at a raised ridge and another at exposed paper to its left. A dark receiving patch is behind the ridge on the right. No light arrow continues into that blocked patch. Shadow length is illustrative, not measured.', `
    ${label(24, 113, 'Every ridge outlined', 'start', 24, INK, true)}
    ${label(391, 113, 'Selected shadows', 'start', 24, INK, true)}
    ${path('M30 181 L265 156 L338 376 L89 393 Z', '#e8e2d6', 'none')}
    ${[48, 92, 136, 180, 224].map((x) => `
      ${path(`M${x} 178 L${x + 15} 166 L${x + 67} 354 L${x + 49} 367 Z`, 'none', INK, 2.5)}
      ${path(`M${x + 15} 166 L${x + 29} 174 L${x + 80} 361 L${x + 67} 354`, 'none', INK, 2.5)}
    `).join('')}
    ${path('M391 181 L626 156 L696 376 L450 393 Z', '#eee9df', 'none')}
    ${path('M415 166 L429 174 L480 361 L467 354 Z', '#38312C', 'none')}
    ${path('M503 166 L517 174 L548 288 L534 282 Z', '#38312C', 'none')}
    ${path('M583 198 L595 201 L639 361 L626 354 Z', '#38312C', 'none')}
    ${path('M24 425 H696', 'none', PALE, 1.5)}
    ${label(24, 469, 'Side light', 'start', 24, INK, true)}
    ${label(365, 516, 'Raised ridge')}
    ${leader('M377 528 L344 568')}
    <rect x="24" y="685" width="672" height="15" fill="#e8e2d6"/>
    ${path('M24 685 H696', 'none', GRAY, 2)}
    ${path('M290 685 L330 539 L370 685 Z', '#b59c79', INK, 2.5)}
    <rect x="370" y="685" width="106" height="15" fill="#38312C"/>
    ${arrow(id, 'M223 432 L330 539')}
    ${arrow(id, 'M96 520 L261 685')}
    ${label(464, 612, 'Shadow behind')}
    ${leader('M542 624 L429 680')}
    ${label(24, 746, 'Lit paper')}
    ${leader('M134 737 L211 696')}
  `, 783)
}

function transferGrid(x: number, y: number, side: number, id: string): string {
  const cell = side / 4
  const leaf = 'M2 .5 C2.55 .82 3.25 1.3 3.25 2 C3.25 2.7 2.6 3.14 2 3.5 C1.4 3.14 .75 2.7 .75 2 C.75 1.3 1.45 .82 2 .5 Z'
  return `<g id="${id}" data-grid-side="${side}">
    <rect x="${x}" y="${y}" width="${side}" height="${side}" fill="${IVORY}" stroke="${INK}" stroke-width="2"/>
    <g transform="translate(${x} ${y}) scale(${cell})">${path(leaf, '#e8e2d6', 'none')}</g>
    ${[1, 2, 3].map((i) => path(`M${x + i * cell} ${y} V${y + side} M${x} ${y + i * cell} H${x + side}`, 'none', PALE, 1.5)).join('')}
    <g transform="translate(${x} ${y}) scale(${cell})">
      ${path(leaf, 'none', INK, 3, 'vector-effect="non-scaling-stroke"')}
      ${path('M2 3.5 V3.82', 'none', INK, 3, 'vector-effect="non-scaling-stroke"')}
    </g>
    ${[[2, .5], [2, 3.5], [.75, 2], [3.25, 2]].map(([a, b]) => dot(x + a * cell, y + b * cell)).join('')}
  </g>`
}

function leafGridTransfer(): Illustration {
  const id = 'draw-fg-020'
  return svg(id, 'Scale the leaf, not just the frame',
    'The same original curved leaf is drawn in a four-by-four grid inside a 4 cm square and an 8 cm square. The target is twice the source width and twice its height, not just a relabeled same-size grid. Source cells are 1 cm and target cells 2 cm. From each upper-left origin, tip (2, 0.5) becomes (4, 1), stem join (2, 3.5) becomes (4, 7), widest left (0.75, 2) becomes (1.5, 4), and widest right (3.25, 2) becomes (6.5, 4). All four landmarks retain their within-cell positions. Screen centimeters are not physically calibrated.', `
    ${label(336, 111, '8 × 8 cm', 'start', 24, INK, true)}
    ${label(32, 201, '4 × 4 cm', 'start', 24, INK, true)}
    ${transferGrid(32, 221, 176, `${id}-source`)}
    ${transferGrid(336, 133, 352, `${id}-target`)}
    ${label(283, 142, '(0, 0)', 'end', 22)}
    ${leader('M294 138 H328')}
    ${arrow(id, 'M225 309 H319')}
    ${label(272, 281, '×2', 'middle', 26, RED, true)}
    ${label(272, 349, 'Both axes', 'middle', 22)}
    ${label(120, 440, '1 cm cells', 'middle')}
    ${label(512, 527, '2 cm cells', 'middle')}
    ${label(24, 593, 'Tip: (2, 0.5) → (4, 1) cm')}
    ${label(24, 633, 'Stem: (2, 3.5) → (4, 7) cm')}
    ${label(24, 700, 'Same cells. Both dimensions double.')}
  `, 737)
}

const drawings = new Map<string, () => Illustration>([
  ['design-037', leafGesture],
  ['design-038', kettleConstruction],
  ['design-039', utensilGap],
  ['design-040', shoeEnvelope],
  ['design-041', boxPerspective],
  ['design-042', napkinValues],
  ['design-043', towelEdges],
  ['design-044', orangeShadows],
  ['design-045', pouchRedesign],
  ['design-046', boatThumbnails],
  ['design-047', surfaceMaterials],
  ['design-048', leafArrangement],
  ['fg-017', lidEllipses],
  ['fg-018', hatchAndRibbon],
  ['fg-019', ridgeShadows],
  ['fg-020', leafGridTransfer],
])

/** Replace only a listed guide's first visual; leave secondary rendering alone. */
export function drawingOverride(id: string, index: number): { svg: string; width: number; height: number } | null {
  if (index !== 0) return null
  const draw = drawings.get(id)
  return draw ? draw() : null
}