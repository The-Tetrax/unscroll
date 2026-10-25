import { useCallback, useEffect, useRef, useState } from 'react'
import { lessons, learningPaths, lessonById } from '../data'
import type { AppState, DiscoveryEdition, Lesson, ReaderDraft } from '../types'
import { completeLesson, createInitialState, ensureDaily, localDate, reviewLesson, saveReaderDraft, clearReaderDraft, setPractice } from '../lib/learning'
import type { ReviewGrade } from '../lib/learning'
import { downloadFile, loadLibrary, parseBackup, persistLibrary, persistLibraryIfUnchanged, retainDiscoveries, serializeBackup } from '../lib/storage'
import type { LibrarySnapshot } from '../lib/storage'
import { cachedEdition, labelEdition, readDiscoveryResponse } from '../lib/discovery-client'

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
  const activeRequest = useRef<AbortController | null>(null)
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
      if (loaded.discoveries.length) setEdition(cachedEdition(loaded.discoveries, new Date().toISOString().slice(0, 10)))
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
    if (!navigator.onLine) {
      setEdition(cachedEdition(current.current.discoveries, editionDay))
      return
    }
    const startedGeneration = generation.current
    const controller = new AbortController()
    activeRequest.current = controller
    const timeout = setTimeout(() => controller.abort(), 25_000)
    fetching.current = true
    setDiscoveryLoading(true)
    try {
      const response = await fetch('/.netlify/functions/discover', { signal: controller.signal, headers: { Accept: 'application/json' } })
      const parsed = labelEdition(await readDiscoveryResponse(response), new Date().toISOString().slice(0, 10), navigator.onLine)
      if (startedGeneration !== generation.current) return
      setEdition(parsed.status === 'unavailable' && current.current.discoveries.length ? cachedEdition(current.current.discoveries, editionDay) : parsed)
      if (parsed.lessons.length) update((old) => {
        const discoveries = retainDiscoveries(old, parsed.lessons)
        return JSON.stringify(discoveries) === JSON.stringify(old.discoveries) ? old : { ...old, discoveries }
      })
    } catch {
      if (startedGeneration !== generation.current) return
      setEdition(cachedEdition(current.current.discoveries, editionDay))
    } finally {
      clearTimeout(timeout)
      if (activeRequest.current === controller) { activeRequest.current = null; fetching.current = false; setDiscoveryLoading(false) }
    }
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
    if (replacing.current) throw new Error('A library replacement is already running. Wait for it to finish.')
    replacing.current = true
    generation.current += 1
    activeRequest.current?.abort()
    activeRequest.current = null
    fetching.current = false
    setDiscoveryLoading(false)
    try {
      await writes.current.catch(() => {})
      await persistLibrary(replacement)
      checkpoint.current = JSON.stringify(replacement)
      current.current = replacement
      setSnapshot(replacement)
      setEdition(cachedEdition(replacement.discoveries, new Date().toISOString().slice(0, 10)))
      setFatal('')
      setStorageError('')
      setReady(true)
    } finally { replacing.current = false }
  }

  return {
    state: snapshot.state, allLessons, ready, fatal, storageError, today, edition, discoveryLoading, updateState, refreshDiscoveries,
    getLesson: (id: string) => lessonById.get(id) ?? snapshot.discoveries.find((lesson) => lesson.id === id),
    complete: (lesson: Lesson, correct: boolean | null) => updateState((state) => completeLesson(state, lesson, correct)),
    review: (id: string, grade: ReviewGrade) => {
      let recorded = false
      updateState((state) => { const next = reviewLesson(state, id, grade); recorded = next !== state; return next })
      return recorded
    },
    saveDraft: (id: string, draft: Omit<ReaderDraft, 'updatedAt'>) => updateState((state) => saveReaderDraft(state, id, draft)),
    discardDraft: (id: string) => updateState((state) => clearReaderDraft(state, id)),
    setPractice: (id: string, status: 'planned' | 'tried' | null) => updateState((state) => setPractice(state, id, status)),
    toggleSave: (id: string) => updateState((state) => ({ ...state, saved: state.saved.includes(id) ? state.saved.filter((saved) => saved !== id) : [...state.saved, id] })),
    saveNote: (id: string, note: string) => updateState((state) => {
      if (note.length > 5000) throw new Error('Keep a note within 5,000 characters. Your previous note has not changed.')
      const notes = { ...state.notes }
      if (note.trim()) notes[id] = note
      else delete notes[id]
      return { ...state, notes }
    }),
    exportBackup: async () => { await writes.current; downloadFile(serializeBackup(current.current), `unscroll-backup-${localDate()}.json`) },
    flushStorage: async () => {
      await writes.current
      if (JSON.stringify(current.current) !== checkpoint.current) throw new Error('Export a backup before updating. This tab has changes that are not saved to device storage.')
    },
    importBackup: async (file: File) => {
      if (file.size > 20_000_000) throw new Error('Choose a backup smaller than 20 MB.')
      const imported = parseBackup(await file.text(), new Set(lessonById.keys()))
      await replaceLibrary(imported)
    },
    reset: async () => {
      const empty = { state: createInitialState(), discoveries: [] }
      await replaceLibrary(empty)
    },
  }
}

export type Library = ReturnType<typeof useLibrary>