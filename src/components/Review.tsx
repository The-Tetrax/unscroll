import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Library } from '../hooks/useLibrary'
import type { Route } from '../hooks/useRoute'
import { dueReviewIds } from '../lib/learning'
import { EmptyState, LessonCard, SectionHeading } from './shared'

export function Review({ library, route }: { library: Library; route: Route }) {
  const ids = dueReviewIds(library.state, library.today)
  const due = ids.flatMap((id) => { const lesson = library.getLesson(id); return lesson ? [lesson] : [] })
  const upcoming = Object.entries(library.state.reviews).filter(([, review]) => review.due > library.today).sort((a, b) => a[1].due.localeCompare(b[1].due))
  const reviewedToday = Object.values(library.state.reviews).filter((review) => review.lastReviewed === library.today).length
  return <>
    <header className="page-header"><h1>DON’T JUST READ IT.<br/>REMEMBER IT.</h1><p className="page-intro">Pull an idea from memory before looking. That effort is the point.</p></header>
    <div className="review-overview"><div><strong>{due.length}</strong><span>ready to revisit</span></div><div><strong>{reviewedToday}</strong><span>recalled today</span></div><div><strong>{upcoming.length}</strong><span>scheduled later</span></div></div>
    {due.length ? <><section className="review-start"><h2>A short recall session</h2><p>Up to 10 bites. No time pressure. You decide how well each idea stuck.</p><button type="button" className="button button-primary" onClick={() => route.navigate('review', { lesson: due[0].id, mode: 'review', session: due.slice(0, 10).map((lesson) => lesson.id).join(',') })}>Start recall<ArrowRight size={19} aria-hidden="true"/></button></section><SectionHeading title="Ready when you are"><span>First {Math.min(10, due.length)} of {due.length}</span></SectionHeading><div className="lesson-list">{due.slice(0, 10).map((lesson) => <LessonCard key={lesson.id} lesson={lesson} saved={library.state.saved.includes(lesson.id)} completed onOpen={() => route.navigate('review', { lesson: lesson.id, mode: 'review' })} onSave={() => library.toggleSave(lesson.id)}/>)}</div></>
      : <EmptyState title={reviewedToday ? 'You’re caught up.' : 'A little space helps it stick.'} action="Back to today" onAction={() => route.navigate('today')} symbol="◎">{upcoming.length ? `Your next review is ${upcoming[0][1].due}. You don’t need to cram it now.` : 'Complete your first lesson and it will return here tomorrow. Reviews are deliberate repeats, separate from new learning.'}</EmptyState>}
    <section className="review-method"><h2>Why a question, not another read?</h2><p>Recognizing a sentence can feel like knowing it. Recalling it without the text is a better check. Our simple schedule starts tomorrow, then spreads reviews out based on your answer.</p><a href="https://doi.org/10.1111/j.1467-9280.2006.01693.x" target="_blank" rel="noopener noreferrer" className="text-action">Read the retrieval-practice research<ArrowUpRight size={17} aria-label="Opens in a new tab"/></a></section>
  </>
}