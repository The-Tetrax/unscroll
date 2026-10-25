import { describe, expect, it } from 'vitest'
import { lessons } from '../src/data'
import { createInitialState, ensureDaily } from '../src/lib/learning'
import { countCachedFiles, offlineManifestSchema, type OfflineManifest } from '../src/lib/offline'
import { stateSchema } from '../src/lib/schema'
import { parseBackup, serializeBackup } from '../src/lib/storage'

describe('reading and setup compatibility', () => {
  it('preserves optional preferences through a version-one backup', () => {
    const state = { ...createInitialState('2030-06-15'), goal: 1 as const, readingSize: 'large' as const, onboardingVersion: 1 as const }
    const snapshot = { state, discoveries: [] }
    expect(parseBackup(serializeBackup(snapshot), new Set(lessons.map((lesson) => lesson.id)))).toEqual(snapshot)
  })
  it('keeps old backups valid without adding preference fields', () => {
    const snapshot = { state: createInitialState('2030-06-15'), discoveries: [] }
    expect(parseBackup(serializeBackup(snapshot), new Set(lessons.map((lesson) => lesson.id)))).toEqual(snapshot)
    expect(stateSchema.parse(snapshot.state)).not.toHaveProperty('readingSize')
  })
  it.each([{ goal: 0 }, { goal: 2 }, { readingSize: 'tiny' }, { onboardingVersion: 999 }])('rejects malformed preference %j', (field) => {
    expect(stateSchema.safeParse({ ...createInitialState(), ...field }).success).toBe(false)
  })
  it('issues only one new lesson for a one-lesson goal without changing an issued session', () => {
    const state = { ...createInitialState('2030-06-15'), goal: 1 as const }
    const first = ensureDaily(state, lessons, '2030-06-15')
    expect(first.daily.ids).toHaveLength(1)
    expect(ensureDaily({ ...first, goal: 7 }, lessons, '2030-06-15').daily).toEqual(first.daily)
    const next = ensureDaily(first, lessons, '2030-06-16')
    expect(next.daily.ids).toHaveLength(1)
    expect(next.daily.ids[0]).not.toBe(first.daily.ids[0])
    expect(next.xp).toBe(0)
  })
})

describe('offline file inventory', () => {
  const manifest: OfflineManifest = { build: 'test-build', builtAt: '2030-06-15T10:00:00.000Z', lessons: 544, illustrations: 604,
    bytes: 10000, paths: ['/index.html', '/assets/example.js', '/lesson-visuals/example.svg'] }
  it('counts only current required same-origin paths, ignoring duplicate entries and old files', () => {
    expect(countCachedFiles(manifest, ['https://test.example/index.html?__WB_REVISION__=abc', 'https://test.example/index.html',
      'https://test.example/assets/old.js', 'https://evil.example/assets/example.js', 'not a url',
      'https://test.example/lesson-visuals/example.svg?__WB_REVISION__=def'], 'https://test.example')).toBe(2)
  })
  it('reports a missing file instead of treating an app shell as the entire library', () => {
    expect(countCachedFiles(manifest, ['https://test.example/index.html'], 'https://test.example')).toBe(1)
    expect(countCachedFiles(manifest, manifest.paths.map((path) => `https://test.example${path}`), 'https://test.example')).toBe(3)
  })
  it.each(['//elsewhere.example/file.js', '/../../private', '/path?token=anything', '/file#part'])('rejects unsafe inventory path %s', (path) => {
    expect(offlineManifestSchema.safeParse({ ...manifest, paths: ['/index.html', path] }).success).toBe(false)
  })
  it('rejects duplicate paths and a missing app shell', () => {
    expect(offlineManifestSchema.safeParse({ ...manifest, paths: ['/index.html', '/index.html'] }).success).toBe(false)
    expect(offlineManifestSchema.safeParse({ ...manifest, paths: ['/assets/example.js'] }).success).toBe(false)
  })
})