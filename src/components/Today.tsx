import { ArrowRight, ArrowUpRight, Check, ChevronRight, Flame, RefreshCw } from 'lucide-react'
import { categories, learningPaths, lessons } from '../data'
import type { Library } from '../hooks/useLibrary'
import type { Route } from '../hooks/useRoute'
import { dueReviewIds, readingMinutes, streak } from '../lib/learning'
import { EmptyState, LessonCard, Mascot, ProgressBar, SectionHeading } from './shared'
import { OnboardingInvite } from './Onboarding'

export function Today({ library, route, onSetup }: { library: Library; route: Route; onSetup: () => void }) {
  const { state, today } = library
  const queue = state.daily.ids.flatMap((id) => { const lesson = library.getLesson(id); return lesson ? [lesson] : [] })
  const completed = queue.filter((lesson) => state.completed[lesson.id]).length
  const next = queue.find((lesson) => !state.completed[lesson.id])
  const done = queue.length > 0 && !next
  const due = dueReviewIds(state, today).length
  const dateLabel = new Date(`${today}T12:00:00`).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
  const currentPath = learningPaths.find((path) => path.id === state.followedPath)
  const featurePath = currentPath ?? learningPaths.find((path) => path.id === 'phone-eye') ?? learningPaths[0]
  const pathCompleted = featurePath.lessonIds.filter((id) => state.completed[id]).length
  const pathPosters: Record<string, [string, string]> = {
    observe: ['LOOK', 'CLOSER.'], reason: ['TEST', 'THE IDEA.'], remember: ['RECALL', 'THEN READ.'],
    speak: ['SAY IT', 'CLEARLY.'], presence: ['NOTICE', 'THE ROOM.'], perspective: ['CHANGE', 'THE LENS.'],
    'phone-eye': ['THINK', 'IN SCENES.'], directing: ['DIRECT', 'THE MOMENT.'], light: ['FOLLOW', 'THE LIGHT.'],
    editing: ['FIND', 'THE CUT.'], sound: ['LISTEN', 'CLOSER.'], 'cinema-study': ['WATCH', 'WITH INTENT.'],
    colour: ['SEE', 'THE COLOUR.'], 'type-space': ['GIVE TYPE', 'SOME SPACE.'], 'ux-eye': ['QUESTION', 'THE DESIGN.'], draw: ['DRAW', 'THE FORM.'],
    'evidence-checks': ['CHECK', 'THE CLAIM.'], 'shared-systems': ['TRACE', 'THE SYSTEM.'], 'invisible-work': ['NOTICE', 'THE WORK.'],
    'phone-detail': ['CHECK', 'THE DETAILS.'], 'drawing-marks': ['MAKE', 'YOUR MARK.'], 'beyond-screens': ['TEST', 'THE BEHAVIOR.'],
  }
  const poster = pathPosters[featurePath.id] ?? ['MAKE', 'IT REAL.']
  const unfinished = Object.keys(state.readerDrafts ?? {}).filter((id) => !state.completed[id])
  const planned = Object.values(state.practices ?? {}).filter((practice) => practice.status === 'planned').length

  return <>
    <div className="day-heading"><time dateTime={today}>{dateLabel}</time><span className="streak-label"><Flame size={17} aria-hidden="true"/>{streak(state, today)} day streak</span></div>
    <section className={`daily-hero${done ? ' hero-complete' : ''}`} aria-labelledby="daily-title">
      <div className="hero-copy">
        <h1 id="daily-title">{done ? <>THAT’S A WRAP.<br/>GO LIVE IT.</> : <>LESS SCROLL.<br/>MORE SUBSTANCE.</>}</h1>
        <p>{done ? 'One idea used beats a hundred ideas collected.' : 'Small lessons for a life beyond the feed.'}</p>
        {next ? <button type="button" className="button button-primary hero-action" onClick={() => route.setParam('lesson', next.id)}>{completed ? 'Continue session' : 'Start today’s session'}<ArrowRight size={20} aria-hidden="true"/></button>
          : <button type="button" className="button button-primary hero-action" onClick={() => route.navigate(done ? 'vault' : 'explore')}>{done ? 'Keep an idea close' : 'Explore the library'}<ArrowRight size={20} aria-hidden="true"/></button>}
        <span className="hero-footnote">{queue.length ? `${queue.length} bites. About ${queue.reduce((total, lesson) => total + readingMinutes(lesson), 0)} minutes of reading.` : 'The daily queue is clear. Explore at your own pace.'}</span>
      </div>
      <div className="hero-art"><div className="hero-art-sun" aria-hidden="true"/><Mascot/><span className="mascot-caption">Ink’s rule: stay curious.</span></div>
    </section>
    <div className="daily-progress"><div><span>{done ? 'Daily session complete' : 'Your daily session'}</span><strong>{completed}<span> / {queue.length || state.goal} bites</span></strong></div><ProgressBar value={completed} max={queue.length || state.goal} label="Daily bites completed"/></div>

    {!state.welcomeDismissed && <OnboardingInvite onOpen={onSetup} onDismiss={() => library.updateState((old) => ({ ...old, welcomeDismissed: true }))}/>}

    {(unfinished.length > 0 || planned > 0) && <div className="continuity-links">
      {unfinished.length > 0 && <button type="button" className="text-action" onClick={() => route.navigate('vault', { view: 'unfinished' })}>{unfinished.length} unfinished {unfinished.length === 1 ? 'bite' : 'bites'}<ArrowUpRight size={17} aria-hidden="true"/></button>}
      {planned > 0 && <button type="button" className="text-action" onClick={() => route.navigate('vault', { view: 'practice' })}>{planned} {planned === 1 ? 'experiment' : 'experiments'} to try offscreen<ArrowUpRight size={17} aria-hidden="true"/></button>}
    </div>}

    <div className="today-columns">
      <section className="daily-lineup" aria-labelledby="lineup-heading">
        <div className="section-heading"><h2 id="lineup-heading">Today’s lineup</h2><span>{queue.length} chosen for today</span></div>
        <div className="lesson-list">{queue.map((lesson, index) => <LessonCard key={lesson.id} lesson={lesson} index={index} saved={state.saved.includes(lesson.id)} completed={Boolean(state.completed[lesson.id])} onOpen={() => route.setParam('lesson', lesson.id)} onSave={() => library.toggleSave(lesson.id)}/>)}</div>
        {!queue.length && <EmptyState title="You’ve reached the end of new bites." action="Choose something to review" onAction={() => route.navigate('review')}>Previously delivered lessons stay in Explore. New discoveries appear when the content service finds them. Completed lessons are never disguised as new.</EmptyState>}
        {done && <div className="session-finish"><Check size={22} aria-hidden="true"/><p><strong>You showed up. That counts.</strong><br/>Pick one experiment from today and put the phone down.</p></div>}
      </section>
      <aside className="today-aside">
        <section className="path-spotlight">
          <div className="section-heading"><h2>{currentPath ? 'Your current arc' : 'Make something real'}</h2><span aria-hidden="true">↗</span></div>
          <div className="film-frame" aria-hidden="true"><span className="film-corner corner-a"/><span className="film-corner corner-b"/><span className="film-corner corner-c"/><span className="film-corner corner-d"/><div className="film-composition"><span/><span/><span/></div><span className="frame-copy">{poster[0]}<br/>{poster[1]}</span></div>
          <h3>{featurePath.title}</h3><p>{featurePath.description}</p>
          <div className="path-progress-label"><span>{pathCompleted} of {featurePath.lessonIds.length} learned</span><span>Learning path</span></div>
          <ProgressBar value={pathCompleted} max={featurePath.lessonIds.length} label={`${featurePath.title} progress`}/>
          <button type="button" className="text-action" onClick={() => route.navigate('explore', { path: featurePath.id })}>Open this path<ArrowUpRight size={19} aria-hidden="true"/></button>
        </section>
        <button type="button" className="review-nudge" onClick={() => route.navigate('review')}><span><strong>{due ? `${due} ideas ready to revisit` : 'Make it stick.'}</strong><span>{due ? 'A little recall goes a long way.' : 'Learn today. Recall tomorrow.'}</span></span><ChevronRight size={20} aria-hidden="true"/></button>
      </aside>
    </div>

    <section className="topic-section"><SectionHeading title="Follow your curiosity"><button type="button" className="text-action" onClick={() => route.navigate('explore')}>All {lessons.length} bites<ArrowUpRight size={17} aria-hidden="true"/></button></SectionHeading><div className="topic-grid">{categories.map((category) => <button type="button" key={category.id} className={`topic-link category-${category.id}`} onClick={() => route.navigate('explore', { category: category.id })}><span aria-hidden="true">{category.symbol}</span><span>{category.name}</span><ChevronRight size={16} aria-hidden="true"/></button>)}</div></section>

    <section className="discovery-section"><SectionHeading title="Beyond the library"><button type="button" className="text-action" disabled={library.discoveryLoading} onClick={() => { void library.refreshDiscoveries() }}><RefreshCw size={16} className={library.discoveryLoading ? 'spin' : ''} aria-hidden="true"/>{library.discoveryLoading ? 'Checking' : 'Refresh'}</button></SectionHeading>
      <p className="section-description">A daily selection of Wikipedia reference extracts. Different from our original, practical lessons.</p>
      {library.discoveryLoading && !library.edition && <div className="discovery-skeleton" role="status"><span/><span/><span/><p>Finding today’s references…</p></div>}
      {library.edition && <p className="edition-status" role="status">{library.edition.status === 'fresh' ? `Edition ${library.edition.date} (UTC)` : library.edition.message ?? `Downloaded edition ${library.edition.date} (UTC).`}</p>}
      <div className="discovery-grid">{library.edition?.lessons.filter((lesson) => !state.completed[lesson.id]).map((lesson) => <LessonCard key={lesson.id} lesson={lesson} saved={state.saved.includes(lesson.id)} completed={false} onOpen={() => route.setParam('lesson', lesson.id)} onSave={() => library.toggleSave(lesson.id)}/>)}</div>
      {library.edition?.lessons.length !== 0 && library.edition?.lessons.every((lesson) => state.completed[lesson.id]) && <p className="inline-notice">You’ve read this edition. No need to repeat it.</p>}
    </section>
    <p className="page-end">A little wiser. A little more present.</p>
  </>
}