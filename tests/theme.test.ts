import fs from 'node:fs'
import { describe, expect, it } from 'vitest'
import { lessons } from '../src/data'
import { createInitialState } from '../src/lib/learning'
import { stateSchema } from '../src/lib/schema'
import { parseBackup, serializeBackup } from '../src/lib/storage'
import { resolveTheme, THEME_COLORS, THEME_HINT_KEY } from '../src/lib/theme'

const css = fs.readFileSync('src/tokens.css', 'utf8')

function tokens(selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`)
  expect(start, `${selector} block`).toBeGreaterThanOrEqual(0)
  const block = css.slice(start, css.indexOf('}', start))
  return Object.fromEntries([...block.matchAll(/--(color-[a-z0-9-]+):\s*(#[0-9a-f]{6,8})\b/gi)].map((match) => [match[1], match[2].toLowerCase()]))
}

const light = tokens(':root')
const palettes = { light, dark: { ...light, ...tokens(":root[data-theme='dark']") } }

function luminance(hex: string): number {
  const [red, green, blue] = [1, 3, 5].map((index) => {
    const channel = parseInt(hex.slice(index, index + 2), 16) / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrast(foreground: string, background: string): number {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (lighter + 0.05) / (darker + 0.05)
}

const categoryTokens = Object.keys(light).filter((name) => name.startsWith('color-cat-'))
// [text, surface] pairs that carry body-size text. WCAG 2.2 SC 1.4.3 asks for 4.5:1.
const textPairs: [string, string][] = [
  ['color-ink', 'color-paper'], ['color-ink', 'color-paper-2'], ['color-ink', 'color-paper-3'],
  ['color-ink-2', 'color-paper'], ['color-ink-2', 'color-paper-2'],
  ['color-muted', 'color-paper'], ['color-muted', 'color-paper-2'], ['color-muted', 'color-paper-3'],
  ['color-accent', 'color-paper'], ['color-accent', 'color-paper-2'],
  ['color-accent-ink', 'color-accent'], ['color-accent-ink', 'color-accent-hover'],
  ['color-success', 'color-success-paper'], ['color-ink', 'color-success-paper'],
  ['color-error', 'color-error-paper'], ['color-error', 'color-paper'], ['color-error', 'color-paper-2'],
  ['color-on-inverse', 'color-inverse'], ['color-on-dark-muted', 'color-inverse'],
  ['color-field-ink', 'color-field'], ['color-paper', 'color-ink'],
  ['color-ink-2', 'color-cat-cinema'], ['color-ink-2', 'color-cat-thinking'],
  ...categoryTokens.map((name): [string, string] => ['color-ink', name]),
]
// Control boundaries and focus rings. WCAG 2.2 SC 1.4.11 asks for 3:1.
const boundaryPairs: [string, string][] = [
  ['color-input-border', 'color-paper'], ['color-input-border', 'color-paper-2'],
  ['color-focus', 'color-paper'], ['color-focus', 'color-paper-2'],
  ['color-on-inverse', 'color-inverse'], ['color-success', 'color-paper'],
]

describe.each(['light', 'dark'] as const)('%s theme contrast', (theme) => {
  const palette = palettes[theme]
  it.each(textPairs)('%s on %s reaches 4.5:1', (foreground, background) => {
    expect(contrast(palette[foreground], palette[background])).toBeGreaterThanOrEqual(4.5)
  })
  it.each(boundaryPairs)('%s against %s reaches 3:1', (foreground, background) => {
    expect(contrast(palette[foreground], palette[background])).toBeGreaterThanOrEqual(3)
  })
})

describe('dark theme tokens', () => {
  it('redefines every surface, text and category color', () => {
    const dark = tokens(":root[data-theme='dark']")
    for (const name of ['color-paper', 'color-paper-2', 'color-paper-3', 'color-ink', 'color-ink-2', 'color-muted', 'color-rule',
      'color-input-border', 'color-accent', 'color-accent-ink', 'color-focus', 'color-inverse', 'color-success', 'color-success-paper',
      'color-error', 'color-error-paper', ...categoryTokens]) expect(dark[name], name).toMatch(/^#[0-9a-f]{6}$/)
  })
  it('avoids pure black paper and pure white text', () => {
    expect(palettes.dark['color-paper']).not.toBe('#000000')
    expect(palettes.dark['color-ink']).not.toBe('#ffffff')
  })
  it('raises surfaces by making them lighter', () => {
    const { dark } = palettes
    expect(luminance(dark['color-paper-2'])).toBeGreaterThan(luminance(dark['color-paper']))
    expect(luminance(dark['color-paper-3'])).toBeGreaterThan(luminance(dark['color-paper-2']))
  })
  it('keeps the mascot and the red field the same in both themes', () => {
    const dark = tokens(":root[data-theme='dark']")
    for (const name of ['color-mascot-paper', 'color-mascot-ink', 'color-mascot-line', 'color-field', 'color-field-ink', 'color-on-inverse']) expect(dark[name], name).toBeUndefined()
  })
})

describe('theme preference', () => {
  it.each([
    [undefined, false, 'light'], [undefined, true, 'dark'], ['system', false, 'light'], ['system', true, 'dark'],
    ['light', true, 'light'], ['light', false, 'light'], ['dark', false, 'dark'], ['dark', true, 'dark'],
  ] as const)('resolves %s with a dark device %s to %s', (choice, systemDark, expected) => {
    expect(resolveTheme(choice, systemDark)).toBe(expected)
  })
  it('uses the paper colors for the browser toolbar', () => {
    expect(THEME_COLORS).toEqual({ light: palettes.light['color-paper'], dark: palettes.dark['color-paper'] })
  })
  it('keeps the first-paint script in step with the app', () => {
    const script = fs.readFileSync('public/theme.js', 'utf8')
    expect(script).toContain(`'${THEME_HINT_KEY}'`)
    expect(script).toContain(`'${THEME_COLORS.light}'`)
    expect(script).toContain(`'${THEME_COLORS.dark}'`)
    expect(fs.readFileSync('index.html', 'utf8')).toMatch(/<meta name="theme-color" content="#f7f4ed" \/>\s*<script src="\/theme\.js"><\/script>/)
  })
  it.each(['system', 'light', 'dark'] as const)('keeps %s through a version-one backup', (theme) => {
    const snapshot = { state: { ...createInitialState('2030-06-15'), theme }, discoveries: [] }
    expect(parseBackup(serializeBackup(snapshot), new Set(lessons.map((lesson) => lesson.id)))).toEqual(snapshot)
  })
  it('leaves the field out of libraries that never chose a theme', () => {
    expect(stateSchema.parse(createInitialState('2030-06-15'))).not.toHaveProperty('theme')
  })
  it.each(['sepia', '', 1, null])('rejects the malformed theme %j', (theme) => {
    expect(stateSchema.safeParse({ ...createInitialState(), theme }).success).toBe(false)
  })
})
