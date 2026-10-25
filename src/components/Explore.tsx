import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Search, X } from 'lucide-react'
import { categories, categoryById, learningPaths } from '../data'
import type { CategoryId } from '../types'
import type { Library } from '../hooks/useLibrary'
import type { Route } from '../hooks/useRoute'
import { EmptyState, LessonCard, ProgressBar, SectionHeading } from './shared'

const PAGE_SIZE = 12
const pathSymbols: Record<string, string> = { observe: '◎', reason: '◇', remember: '⌘', speak: '≈', presence: '⤮', perspective: '∞', 'phone-eye': '▧', directing: '▷', light: '☼', editing: '⌁', sound: '≈', 'cinema-study': '◉', colour: '◒', 'type-space': 'Aa', 'ux-eye': '⌗', draw: '✎' }

export function Explore({ library, route }: { library: Library; route: Route }) {
  const { state } = library
  const category = route.params.get('category') ?? ''
  const query = route.params.get('q') ?? ''
  const path = learningPaths.find((entry) => entry.id === route.params.get('path'))
  const view = route.params.get('view') ?? 'all'
  const topic = route.params.get('topic') ?? ''
  const page = Math.max(1, Number(route.params.get('page')) || 1)
  const updateFilter = (key: string, value: string) => {
    const params = Object.fromEntries(route.params)
    delete params.page
    delete params.lesson
    if (key === 'category') { delete params.path; delete params.topic }
    if (value) params[key] = value
    else delete params[key]
    route.navigate('explore', params, key === 'q')
  }
  const base = path ? path.lessonIds.flatMap((id) => { const lesson = library.getLesson(id); return lesson ? [lesson] : [] }) : library.allLessons
  const filtered = base.filter((lesson) => (!category || lesson.category === category) && (!topic || lesson.topic === topic)
    && (view !== 'unread' || !state.completed[lesson.id]) && (view !== 'learned' || Boolean(state.completed[lesson.id]))
    && (!query || [lesson.title, lesson.hook, lesson.topic, lesson.action, ...lesson.body].join(' ').toLowerCase().includes(query.toLowerCase())))
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const topics = [...new Set(base.filter((lesson) => !category || lesson.category === category).map((lesson) => lesson.topic))].sort()
  const completed = path?.lessonIds.filter((id) => state.completed[id]).length ?? 0
  const showPaths = !path && !query && !category && view === 'all'

  return <>
    <header className="page-header"><h1>{path ? path.title : 'FIND YOUR NEXT OBSESSION.'}</h1><p className="page-intro">{path ? path.description : 'Useful ideas. Unexpected connections. Something you can actually do.'}</p></header>
    {path && <section className="path-detail"><button type="button" className="text-action" onClick={() => route.navigate('explore')}><ArrowLeft size={18} aria-hidden="true"/>All learning paths</button><p>{path.inspiration}</p><p className="field-hint">{path.note}</p><div className="path-detail-progress"><span>{completed} of {path.lessonIds.length} learned</span><ProgressBar value={completed} max={path.lessonIds.length} label="Learning path progress"/></div><button type="button" className="button button-primary" onClick={() => library.updateState((old) => ({ ...old, followedPath: old.followedPath === path.id ? undefined : path.id }))}>{state.followedPath === path.id ? <><Check size={18} aria-hidden="true"/>Following this path</> : <>Add to my daily mix<ArrowUpRight size={18} aria-hidden="true"/></>}</button><p className="field-hint">The next unissued step joins tomorrow’s mix. You can read any step now.</p></section>}

    <div className="explore-controls"><label className="search-field"><Search size={20} aria-hidden="true"/><span className="sr-only">Search lessons</span><input type="search" name="lesson-search" placeholder="Try ‘lighting’, ‘body language’, ‘money’…" value={query} onChange={(event) => updateFilter('q', event.target.value)} autoComplete="off"/></label>
      {!path && <div className="filter-row" aria-label="Filter by topic"><button type="button" className={`chip${!category ? ' is-active' : ''}`} onClick={() => updateFilter('category', '')} aria-pressed={!category}>All topics</button>{categories.map((entry) => <button type="button" key={entry.id} className={`chip${category === entry.id ? ' is-active' : ''}`} aria-pressed={category === entry.id} onClick={() => updateFilter('category', entry.id)}>{entry.name}</button>)}</div>}
      <div className="filter-options"><div className="segmented-control" aria-label="Learning status">{[['all', 'All bites'], ['unread', 'Not learned'], ['learned', 'Learned']].map(([id, label]) => <button type="button" key={id} className={view === id ? 'is-active' : ''} aria-pressed={view === id} onClick={() => updateFilter('view', id)}>{label}</button>)}</div><label className="topic-select"><span className="sr-only">Focus topic</span><select aria-label="Focus topic" value={topic} onChange={(event) => updateFilter('topic', event.target.value)}><option value="">Every subtopic</option>{topics.map((entry) => <option key={entry} value={entry}>{entry}</option>)}</select></label></div>
    </div>

    {showPaths && <section className="learning-paths"><SectionHeading title="Go deeper, one step at a time"><span>{learningPaths.length} learning paths</span></SectionHeading><div className="paths-grid">{learningPaths.map((entry) => <button type="button" className={`path-tile${state.followedPath === entry.id ? ' is-following' : ''}`} key={entry.id} onClick={() => route.navigate('explore', { path: entry.id })}><span className="path-tile-symbol" aria-hidden="true">{pathSymbols[entry.id] ?? '◇'}</span><span className="path-tile-copy"><h3>{entry.title}</h3><span>{entry.lessonIds.length} bites{state.followedPath === entry.id ? ' / Following' : ''}</span></span><ArrowUpRight size={20} aria-hidden="true"/></button>)}</div></section>}

    <section className="explore-results"><SectionHeading title={category ? categoryById[category as CategoryId]?.name ?? 'Lessons' : path ? 'Your path, in order' : 'The whole collection'}><span role="status">{filtered.length} {filtered.length === 1 ? 'bite' : 'bites'}</span></SectionHeading>{query && <p className="search-summary">Results for “{query}”<button type="button" className="icon-button" aria-label="Clear search" onClick={() => updateFilter('q', '')}><X size={16} aria-hidden="true"/></button></p>}<div className="explore-lesson-grid">{visible.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} saved={state.saved.includes(lesson.id)} completed={Boolean(state.completed[lesson.id])} onOpen={() => route.setParam('lesson', lesson.id)} onSave={() => library.toggleSave(lesson.id)}/>)}</div>
      {!visible.length && <EmptyState title="Try a different angle." action="Clear filters" onAction={() => route.navigate('explore')}>No bites match these filters. Search a broader idea or switch topics.</EmptyState>}
      {pages > 1 && <nav className="pagination" aria-label="Lesson pages"><button type="button" className="button button-quiet" disabled={currentPage === 1} onClick={() => updateFilter('page', String(currentPage - 1))}><ArrowLeft size={18} aria-hidden="true"/>Previous</button><span>{currentPage} / {pages}</span><button type="button" className="button button-quiet" disabled={currentPage === pages} onClick={() => updateFilter('page', String(currentPage + 1))}>Next<ArrowRight size={18} aria-hidden="true"/></button></nav>}
    </section>
  </>
}