import { useCallback, useEffect, useRef, useState } from 'react'
import { lessons, learningPaths, lessonById } from '../data'
import type { AppState, DiscoveryEdition, Lesson } from '../types'
import { completeLesson, createInitialState, ensureDaily, localDate, reviewLesson } from '../lib/learning'
import type { ReviewGrade } from '../lib/learning'
import { downloadFile, loadLibrary, parseBackup, persistLibrary, persistLibraryIfUnchanged, retainDiscoveries, serializeBackup } from '../lib/storage'
import type { LibrarySnapshot } from '../lib/storage'
import { editionSchema } from '../lib/schema'

const INITIAL: LibrarySnapshot = { state: createInitialState(), discoveries: [] }

export function useLibrary() {
  const [snapshot, setSnapshot] = useState<LibrarySnapshot>(INITIAL)
  const current = useRef(snapshot)
  const writes = useRef<Promise<void>>(Promise.resolve())
  const checkpoint = useRef<string | null>(null)
  const replacing = useRef(false)
  const generation = useRef(0)
  const [ready, setReady] = useState(false)
  const [fatal, setFatal] = useState('')
  const [storageError, setStorageError] = useState('')
  const [edition, setEdition] = useState<DiscoveryEdition | null>(null)
  const [discoveryLoading, setDiscoveryLoading] = useState(false)
  const fetching = useRef(false)
  const [today, setToday] = useState(localDate)
  const [editionDay, setEditionDay] = useState(() => new Date().toISOString().slice(0, 10))

  const update = useCallback((change: (value: LibrarySnapshot) => LibrarySnapshot) => {
    if (replacing.current) return
    const next = change(current.current)
    if (next === current.current) return
    current.current = next
    setSnapshot(next)
    writes.current = writes.current.catch(() => {}).then(async () => {
      await persistLibraryIfUnchanged(next, checkpoint.current)
      checkpoint.current = JSON.stringify(next)
      setStorageError('')
    }).catch((error: unknown) => setStorageError(error instanceof Error && error.message.startsWith('Another tab')
      ? error.message : 'This change is only in memory. Device storage could not save it. Export a backup before closing the app.'))
  }, [])

  const updateState = useCallback((change: (state: AppState) => AppState) => update((old) => {
    const state = change(old.state)
    return state === old.state ? old : { ...old, state }
  }), [update])

  useEffect(() => {
    let active = true
    void loadLibrary().then(({ snapshot: loaded, warning, checkpoint: storedCheckpoint }) => {
      if (!active) return
      current.current = loaded
      checkpoint.current = storedCheckpoint
      setSnapshot(loaded)
      setStorageError(warning)
      setReady(true)
    }).catch((error: Error) => { if (active) setFatal(error.message) })
    return () => { active = false }
  }, [])

  useEffect(() => {
    const checkDay = () => { setToday(localDate()); setEditionDay(new Date().toISOString().slice(0, 10)) }
    const timer = setInterval(checkDay, 30_000)
    document.addEventListener('visibilitychange', checkDay)
    window.addEventListener('focus', checkDay)
    window.addEventListener('online', checkDay)
    return () => { clearInterval(timer); document.removeEventListener('visibilitychange', checkDay); window.removeEventListener('focus', checkDay); window.removeEventListener('online', checkDay) }
  }, [])

  useEffect(() => {
    if (!ready) return
    update((old) => {
      const path = learningPaths.find((entry) => entry.id === old.state.followedPath)
      const state = ensureDaily(old.state, [...lessons, ...old.discoveries], today, path?.lessonIds)
      return state === old.state ? old : { ...old, state }
    })
  }, [ready, today, snapshot.discoveries, update])

  const refreshDiscoveries = useCallback(async () => {
    if (fetching.current || replacing.current) return
    const startedGeneration = generation.current
    fetching.current = true
    setDiscoveryLoading(true)
    try {
      const response = await fetch('/.netlify/functions/discover', { signal: AbortSignal.timeout(25_000), headers: { Accept: 'application/json' } })
      if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Unavailable')
      const text = await response.text()
      if (text.length > 300_000) throw new Error('Response too large')
      const parsed = editionSchema.parse(JSON.parse(text)) as DiscoveryEdition
      if (startedGeneration !== generation.current) return
      setEdition(parsed)
      update((old) => ({ ...old, discoveries: retainDiscoveries(old, parsed.lessons) }))
    } catch {
      if (startedGeneration !== generation.current) return
      const latest = [...current.current.discoveries].sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))[0]?.publishedAt
      const cached = current.current.discoveries.filter((lesson) => lesson.publishedAt === latest).slice(0, 6)
      setEdition({ date: latest ?? editionDay, lessons: cached, status: cached.length ? 'cached' : 'unavailable',
        message: cached.length ? 'Showing the last downloaded edition. Your saved lessons still work offline.' : 'Daily discoveries need a connection and the Netlify content service. All original lessons are available offline.' })
    } finally { fetching.current = false; setDiscoveryLoading(false) }
  }, [editionDay, update])

  useEffect(() => {
    if (!ready) return
    // Fetching is an external synchronization, not derived render state.
    queueMicrotask(() => { void refreshDiscoveries() })
    const online = () => { void refreshDiscoveries() }
    window.addEventListener('online', online)
    return () => window.removeEventListener('online', online)
  }, [ready, refreshDiscoveries])

  const allLessons = [...lessons, ...snapshot.discoveries]

  const replaceLibrary = async (replacement: LibrarySnapshot) => {
    replacing.current = true
    generation.current += 1
    try {
      await writes.current.catch(() => {})
      await persistLibrary(replacement)
      checkpoint.current = JSON.stringify(replacement)
      current.current = replacement
      setSnapshot(replacement)
      setFatal('')
      setStorageError('')
      setReady(true)
    } finally { replacing.current = false }
  }

  return {
    state: snapshot.state, allLessons, ready, fatal, storageError, today, edition, discoveryLoading, updateState, refreshDiscoveries,
    getLesson: (id: string) => lessonById.get(id) ?? snapshot.discoveries.find((lesson) => lesson.id === id),
    complete: (lesson: Lesson, correct: boolean | null) => updateState((state) => completeLesson(state, lesson, correct)),
    review: (id: string, grade: ReviewGrade) => updateState((state) => reviewLesson(state, id, grade)),
    toggleSave: (id: string) => updateState((state) => ({ ...state, saved: state.saved.includes(id) ? state.saved.filter((saved) => saved !== id) : [...state.saved, id] })),
    saveNote: (id: string, note: string) => updateState((state) => {
      const notes = { ...state.notes }
      if (note.trim()) notes[id] = note.slice(0, 5000)
      else delete notes[id]
      return { ...state, notes }
    }),
    exportBackup: async () => { await writes.current; downloadFile(serializeBackup(current.current), `unscroll-backup-${localDate()}.json`) },
    importBackup: async (file: File) => {
      if (file.size > 20_000_000) throw new Error('Choose a backup smaller than 20 MB.')
      const imported = parseBackup(await file.text(), new Set(lessonById.keys()))
      await replaceLibrary(imported)
    },
    reset: async () => {
      const empty = { state: createInitialState(), discoveries: [] }
      await replaceLibrary(empty)
      setEdition(null)
    },
  }
}

export type Library = ReturnType<typeof useLibrary>