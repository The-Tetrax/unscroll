export type ThemeChoice = 'system' | 'light' | 'dark'
export type ResolvedTheme = 'light' | 'dark'

// public/theme.js repeats these two values so the first paint matches. tests/theme.test.ts keeps them in step.
export const THEME_HINT_KEY = 'unscroll-theme'
export const THEME_COLORS: Record<ResolvedTheme, string> = { light: '#f7f4ed', dark: '#1a1617' }

export const themeOptions: { id: ThemeChoice; label: string; saved: string }[] = [
  { id: 'system', label: 'Match device', saved: 'Appearance now follows your device setting.' },
  { id: 'light', label: 'Light', saved: 'Light appearance saved.' },
  { id: 'dark', label: 'Dark', saved: 'Dark appearance saved.' },
]

export function resolveTheme(choice: ThemeChoice | undefined, systemDark: boolean): ResolvedTheme {
  return choice === 'dark' || (choice !== 'light' && systemDark) ? 'dark' : 'light'
}
