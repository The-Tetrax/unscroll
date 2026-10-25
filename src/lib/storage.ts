import { get, set } from 'idb-keyval'
import { z } from 'zod'
import type { AppState, Lesson } from '../types'
import { createInitialState } from './learning'
import { backupSchema, lessonSchema, stateSchema } from './schema'

export const STORAGE_KEY = 'unscroll-library-v1'
export interface LibrarySnapshot { state: AppState; discoveries: Lesson[] }
const snapshotSchema = z.object({ state: stateSchema, discoveries: z.array(lessonSchema).max(10000) }).strict()

export async function loadLibrary(): Promise<{ snapshot: LibrarySnapshot; warning: string }> {
  const empty = { state: createInitialState(), discoveries: [] }
  let raw: unknown
  try { raw = await get(STORAGE_KEY) } catch {
    return { snapshot: empty, warning: 'Device storage is unavailable. Keep this tab open and export a backup before leaving.' }
  }
  if (raw === undefined) return { snapshot: empty, warning: '' }
  const parsed = snapshotSchema.safeParse(raw)
  if (!parsed.success) {
    // Never replace malformed data automatically. Preserve it for recovery.
    throw new Error('Saved data could not be read. Your original data has not been changed. Restore a valid backup, or download the recovery data before resetting.')
  }
  return { snapshot: parsed.data as LibrarySnapshot, warning: '' }
}

export async function persistLibrary(snapshot: LibrarySnapshot): Promise<void> {
  await set(STORAGE_KEY, snapshot)
}

export function retainDiscoveries(snapshot: LibrarySnapshot, incoming: Lesson[]): Lesson[] {
  const keep = new Set([
    ...snapshot.state.saved, ...Object.keys(snapshot.state.completed), ...Object.keys(snapshot.state.notes),
    ...Object.keys(snapshot.state.reviews), ...snapshot.state.daily.ids,
    ...snapshot.state.collections.flatMap((collection) => collection.lessonIds),
  ])
  const all = new Map([...snapshot.discoveries, ...incoming].map((lesson) => [lesson.id, lesson]))
  const recent = [...all.values()].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')).slice(0, 60)
  recent.forEach((lesson) => keep.add(lesson.id))
  return [...all.values()].filter((lesson) => keep.has(lesson.id))
}

export function serializeBackup(snapshot: LibrarySnapshot): string {
  return JSON.stringify({ app: 'UNSCROLL', version: 1, exportedAt: new Date().toISOString(), ...snapshot }, null, 2)
}

export function parseBackup(text: string, curatedIds: Set<string>): LibrarySnapshot {
  if (text.length > 20_000_000) throw new Error('That file is too large. Choose an UNSCROLL backup smaller than 20 MB.')
  let data: unknown
  try {
    data = JSON.parse(text, (key, value: unknown) => {
      if (['__proto__', 'constructor', 'prototype'].includes(key)) throw new Error('Reserved record key')
      return value
    })
  } catch { throw new Error('That file is not valid JSON for a backup. Choose an exported UNSCROLL backup.') }
  const result = backupSchema.safeParse(data)
  if (!result.success) throw new Error('This backup has an unsupported version or invalid fields. No data was changed.')
  const { state, discoveries } = result.data
  if (discoveries.some((lesson) => lesson.kind !== 'discovery')) throw new Error('The backup contains invalid discovery content.')
  const ids = new Set([...curatedIds, ...discoveries.map((lesson) => lesson.id)])
  const referenced = [...state.saved, ...Object.keys(state.completed), ...Object.keys(state.notes), ...Object.keys(state.reviews),
    ...state.daily.ids, ...state.collections.flatMap((collection) => collection.lessonIds)]
  if (referenced.some((id) => !ids.has(id))) throw new Error('This backup references missing lessons. Update the app or choose a complete backup.')
  if (new Set(discoveries.map((lesson) => lesson.id)).size !== discoveries.length
    || new Set(state.collections.map((collection) => collection.id)).size !== state.collections.length) {
    throw new Error('This backup contains duplicate records. No data was changed.')
  }
  return { state: state as AppState, discoveries: discoveries as Lesson[] }
}

export function downloadFile(text: string, filename: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
}

export async function downloadRecovery(): Promise<void> {
  const raw = await get(STORAGE_KEY)
  downloadFile(JSON.stringify(raw ?? {}, null, 2), 'unscroll-recovery.json')
}