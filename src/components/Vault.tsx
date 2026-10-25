import { useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { ChevronLeft, ChevronRight, NotebookPen, Plus, Search, Trash2 } from 'lucide-react'
import { categoryById } from '../data'
import type { Library } from '../hooks/useLibrary'
import type { Route } from '../hooks/useRoute'
import type { Lesson } from '../types'
import { EmptyState, LessonCard } from './shared'

const PAGE_SIZE = 12
const COLLECTION_LIMIT = 40
const COLLECTION_NAME_LIMIT = 40

export function Vault({ library, route }: { library: Library; route: Route }) {
  const prefix = useId()
  const collectionInput = useRef<HTMLInputElement>(null)
  const collectionSelect = useRef<HTMLSelectElement>(null)
  const resultsHeading = useRef<HTMLHeadingElement>(null)
  const [collectionName, setCollectionName] = useState('')
  const [collectionFeedback, setCollectionFeedback] = useState<{ message: string; error: boolean } | null>(null)
  const { state } = library
  const view = route.params.get('view') === 'notes' ? 'notes' : 'saved'
  const query = route.params.get('q') ?? ''
  const collectionId = route.params.get('collection') ?? ''
  const selectedCollection = state.collections.find((collection) => collection.id === collectionId)
  const missingCollection = Boolean(collectionId && !selectedCollection)
  const savedIds = new Set(state.saved)
  const noteIds = Object.keys(state.notes).filter((id) => state.notes[id].trim().length > 0)
  const search = query.trim().toLocaleLowerCase()
  const membership = selectedCollection ? new Set(selectedCollection.lessonIds) : null
  const editingDisabled = !library.ready || Boolean(library.fatal)
  const sourceIds = view === 'notes' ? noteIds : selectedCollection ? [...selectedCollection.lessonIds].reverse() : [...savedIds].reverse()
  const matchingLessons = sourceIds
    .map((id) => library.getLesson(id))
    .filter((lesson): lesson is Lesson => Boolean(lesson))
    .filter((lesson) => {
      if (missingCollection || (membership && !membership.has(lesson.id))) return false
      if (!search) return true
      const searchableText = [
        lesson.title, lesson.topic, lesson.hook, ...lesson.body, lesson.takeaway,
        lesson.action, categoryById[lesson.category].name,
        view === 'notes' ? state.notes[lesson.id] : '',
      ].join(' ').toLocaleLowerCase()
      return searchableText.includes(search)
    })
  const requestedPage = Number(route.params.get('page') ?? '1')
  const pageCount = Math.max(1, Math.ceil(matchingLessons.length / PAGE_SIZE))
  const page = Math.min(pageCount, Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1)
  const start = (page - 1) * PAGE_SIZE
  const visibleLessons = matchingLessons.slice(start, start + PAGE_SIZE)
  const hasFilters = Boolean(query || collectionId)
  const resultsId = `${prefix}-results`
  const feedbackId = `${prefix}-collection-feedback`

  function changeFilters(changes: Record<string, string>, replace = false) {
    const params = Object.fromEntries(route.params)
    delete params.page
    for (const [key, value] of Object.entries(changes)) {
      if (value) params[key] = value
      else delete params[key]
    }
    route.navigate('vault', params, replace)
  }

  function createCollection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (editingDisabled) return
    setCollectionFeedback(null)
    const name = collectionName.trim()
    try {
      if (!name) throw new Error('Enter a name for the collection.')
      if (name.length > COLLECTION_NAME_LIMIT) throw new Error('Use 40 characters or fewer for the collection name.')
      library.updateState((current) => {
        if (current.collections.length >= COLLECTION_LIMIT) {
          throw new Error('You can keep up to 40 collections. Delete a collection before creating another.')
        }
        if (current.collections.some((collection) => collection.name.trim().toLowerCase() === name.toLowerCase())) {
          throw new Error('A collection with that name already exists. Choose a different name.')
        }
        const existingIds = new Set(current.collections.map((collection) => collection.id))
        const baseId = `collection-${Date.now().toString(36)}`
        let id = baseId
        let suffix = 1
        while (existingIds.has(id)) id = `${baseId}-${suffix++}`
        return { ...current, collections: [...current.collections, { id, name, lessonIds: [] }] }
      })
      setCollectionName('')
      setCollectionFeedback({ message: `Collection "${name}" created. Open a lesson to add it to this collection.`, error: false })
      collectionInput.current?.focus()
    } catch (error) {
      setCollectionFeedback({ message: error instanceof Error ? error.message : 'The collection could not be created. Try again.', error: true })
      collectionInput.current?.focus()
    }
  }

  function deleteCollection(id: string) {
    if (editingDisabled) return
    const collection = state.collections.find((entry) => entry.id === id)
    if (!collection) return
    if (!window.confirm(`Delete the collection "${collection.name}"? This removes only the group. Your lessons, saved items, notes and progress will stay.`)) return
    setCollectionFeedback(null)
    try {
      library.updateState((current) => ({ ...current, collections: current.collections.filter((entry) => entry.id !== id) }))
      if (collectionId === id) changeFilters({ collection: '' })
      setCollectionFeedback({ message: `Collection "${collection.name}" deleted. Its lessons and notes have not been deleted.`, error: false })
      collectionSelect.current?.focus()
    } catch (error) {
      setCollectionFeedback({ message: error instanceof Error ? error.message : 'The collection could not be deleted. Try again.', error: true })
    }
  }

  function goToPage(nextPage: number) {
    route.setParam('page', nextPage === 1 ? '' : String(nextPage))
    resultsHeading.current?.focus()
  }

  const emptyTitle = missingCollection
    ? 'This collection is unavailable'
    : hasFilters
      ? 'No matching lessons'
      : view === 'notes' ? 'Your notes will appear here' : 'Nothing saved yet'
  const emptyDescription = missingCollection
    ? 'The collection may have been deleted. Clear the filter to see the rest of your vault.'
    : hasFilters
      ? view === 'notes'
        ? 'Try a different search or collection. Notes appear here even when their lessons are not saved.'
        : 'Try a different search or collection. Open a saved lesson to change its collection membership.'
      : view === 'notes'
        ? 'Open a lesson and write a note. It will stay here even if you do not save the lesson.'
        : 'Save a lesson you want to return to. Explore has original lessons and downloaded discoveries to choose from.'

  return <>
    <header className="page-header">
      <h1>Your vault</h1>
      <p className="page-intro">{savedIds.size} saved {savedIds.size === 1 ? 'lesson' : 'lessons'} and {noteIds.length} {noteIds.length === 1 ? 'note' : 'notes'}. Keep what you want to return to.</p>
    </header>

    <div className="filter-row" role="group" aria-label="Vault view">
      <button type="button" className={`chip${view === 'saved' ? ' is-active' : ''}`} aria-pressed={view === 'saved'} aria-controls={resultsId} onClick={() => changeFilters({ view: 'saved' })}>Saved ({savedIds.size})</button>
      <button type="button" className={`chip${view === 'notes' ? ' is-active' : ''}`} aria-pressed={view === 'notes'} aria-controls={resultsId} onClick={() => changeFilters({ view: 'notes' })}>Notes ({noteIds.length})</button>
    </div>

    <div className="form-row">
      <div className="field">
        <label className="field-label" htmlFor={`${prefix}-search`}><Search size={18} aria-hidden="true"/> {view === 'notes' ? 'Search notes and lessons' : 'Search saved lessons'}</label>
        <input id={`${prefix}-search`} className="field-input" type="search" value={query} maxLength={200} autoComplete="off" aria-controls={resultsId} aria-describedby={`${prefix}-search-hint`} onChange={(event) => changeFilters({ q: event.currentTarget.value }, true)}/>
        <p className="field-hint" id={`${prefix}-search-hint`}>{view === 'notes' ? 'Search your note text, lesson titles and lesson content.' : 'Search lesson titles, topics and lesson content.'}</p>
      </div>
      <div className="field">
        <label className="field-label" htmlFor={`${prefix}-collection`}>Collection</label>
        <select ref={collectionSelect} id={`${prefix}-collection`} className="field-input" value={collectionId} aria-controls={resultsId} onChange={(event) => changeFilters({ collection: event.currentTarget.value })}>
          <option value="">All collections</option>
          {missingCollection && <option value={collectionId}>Unavailable collection</option>}
          {state.collections.map((collection) => <option key={collection.id} value={collection.id}>{collection.name}</option>)}
        </select>
      </div>
    </div>

    <details className="panel collection-manager" aria-label="Collections">
      <summary><span>Collections</span><span>{state.collections.length} / {COLLECTION_LIMIT}</span></summary>
      <p className="section-description">Open a lesson to add or remove it from a collection. Deleting a collection removes the group, not its lessons or notes.</p>
      <form onSubmit={createCollection} noValidate>
        <div className="form-row">
          <div className="field">
            <label className="field-label" htmlFor={`${prefix}-new-collection`}>New collection name</label>
            <input ref={collectionInput} id={`${prefix}-new-collection`} className="field-input" value={collectionName} maxLength={COLLECTION_NAME_LIMIT} autoComplete="off" disabled={editingDisabled} aria-invalid={collectionFeedback?.error || undefined} aria-describedby={`${prefix}-collection-hint ${feedbackId}`} onChange={(event) => { setCollectionName(event.currentTarget.value); setCollectionFeedback(null) }}/>
            <p className="field-hint" id={`${prefix}-collection-hint`}>{state.collections.length >= COLLECTION_LIMIT ? 'You have 40 collections. Delete a group to make room for another.' : 'Up to 40 characters. Names must be different, regardless of capitalization.'}</p>
          </div>
          <button type="submit" className="button button-primary" disabled={editingDisabled || state.collections.length >= COLLECTION_LIMIT}><Plus size={18} aria-hidden="true"/>Create collection</button>
        </div>
      </form>
      <p id={feedbackId} className={collectionFeedback?.error ? 'error-message' : 'inline-notice'} role="status" aria-live="polite" aria-atomic="true">{collectionFeedback?.message || '\u00a0'}</p>
      {state.collections.length > 0 && <details>
        <summary>Manage existing collections</summary>
        <ul className="collection-list">
          {state.collections.map((collection) => {
            const count = new Set(collection.lessonIds).size
            return <li className="collection-item" key={collection.id}>
              <span className="collection-name">{collection.name}</span>
              <span>{count} {count === 1 ? 'lesson' : 'lessons'}</span>
              <button type="button" className="icon-button" disabled={editingDisabled} aria-label={`Delete collection ${collection.name}`} onClick={() => deleteCollection(collection.id)}><Trash2 size={18} aria-hidden="true"/></button>
            </li>
          })}
        </ul>
      </details>}
    </details>

    <section id={resultsId} aria-labelledby={`${prefix}-results-title`}>
      <div className="section-heading"><h2 id={`${prefix}-results-title`} ref={resultsHeading} tabIndex={-1}>{view === 'notes' ? 'Your notes' : selectedCollection ? selectedCollection.name : 'Saved lessons'}</h2></div>
      <p className="section-description" role="status" aria-live="polite" aria-atomic="true">{matchingLessons.length
        ? `Showing ${start + 1} to ${start + visibleLessons.length} of ${matchingLessons.length} ${view === 'notes' ? 'lessons with notes' : selectedCollection ? 'collected lessons' : 'saved lessons'}${selectedCollection ? ` in ${selectedCollection.name}` : ''}.`
        : `No ${view === 'notes' ? 'notes' : 'saved lessons'}${hasFilters ? ' match these filters' : ' to show'}.`}</p>
      {visibleLessons.length > 0 ? <ul className="lesson-list">
        {visibleLessons.map((lesson) => {
          const note = (state.notes[lesson.id] ?? '').replace(/\s+/g, ' ').trim()
          const excerpt = note.length > 240 ? `${note.slice(0, 240)}...` : note
          return <li key={lesson.id}>
            <LessonCard lesson={lesson} saved={savedIds.has(lesson.id)} completed={Boolean(state.completed[lesson.id])} onOpen={() => route.setParam('lesson', lesson.id)} onSave={() => library.toggleSave(lesson.id)}/>
            {view === 'notes' && <div className="panel">
              <p className="section-description">{excerpt}</p>
              <button type="button" className="button button-quiet" aria-label={`Open note for ${lesson.title}`} onClick={() => route.navigate('vault', { ...Object.fromEntries(route.params), lesson: lesson.id, stage: 'try' })}><NotebookPen size={18} aria-hidden="true"/>Open note</button>
            </div>}
          </li>
        })}
      </ul> : <EmptyState title={emptyTitle} action="Explore lessons" onAction={() => route.navigate('explore')} symbol="">{emptyDescription}</EmptyState>}
      {hasFilters && <button type="button" className="button button-quiet" onClick={() => changeFilters({ q: '', collection: '' })}>Clear search and collection filter</button>}
      {pageCount > 1 && <nav className="form-row" aria-label="Vault pages">
        <button type="button" className="button button-quiet" disabled={page === 1} aria-controls={resultsId} onClick={() => goToPage(page - 1)}><ChevronLeft size={18} aria-hidden="true"/>Previous page</button>
        <span aria-live="polite" aria-atomic="true">Page {page} of {pageCount}</span>
        <button type="button" className="button button-quiet" disabled={page === pageCount} aria-controls={resultsId} onClick={() => goToPage(page + 1)}>Next page<ChevronRight size={18} aria-hidden="true"/></button>
      </nav>}
    </section>
  </>
}