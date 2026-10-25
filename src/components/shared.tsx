import { ArrowUpRight, Bookmark, Check, ChevronRight, Clock3 } from 'lucide-react'
import type { ReactNode } from 'react'
import { categoryById } from '../data'
import type { Lesson } from '../types'
import { readingMinutes } from '../lib/learning'

export function Brand({ compact = false }: { compact?: boolean }) {
  return <a href="#/today" className="brand" aria-label="UNSCROLL home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M6 6 19 12 33 3 30 26 19 36 7 26Z" fill="currentColor"/><path d="m11 17 7 4-4 4m13-11-5 7 6-1" stroke="var(--color-paper)" strokeWidth="3" strokeLinejoin="round"/></svg></span>{!compact && <span>UNSCROLL<span className="brand-stop">.</span></span>}</a>
}

export function Mascot({ className = '' }: { className?: string }) {
  return <svg className={`mascot ${className}`} viewBox="0 0 400 350" role="img" aria-label="Ink, the original UNSCROLL fox mascot">
    <g className="mascot-orbit" fill="none" stroke="var(--color-mascot-line)" strokeWidth="1"><circle cx="200" cy="174" r="138"/><circle cx="200" cy="174" r="153" strokeDasharray="4 12"/><path d="M10 174h40m300 0h40M200 4v28m0 284v28"/></g>
    <g className="mascot-body" stroke="var(--color-ink)" strokeWidth="5" strokeLinejoin="round">
      <path d="M255 229q110-22 105-125 54 129-45 177l-65-10Z" fill="var(--color-paper)"/>
      <path d="m340 186 20-82q36 71 6 120Z" fill="var(--color-field)"/>
      <path d="m140 218-36 76 74-4 43 23 76-32-39-67Z" fill="var(--color-ink)"/>
      <path d="m156 266-22 52 42 7 27-48m34-6 11 56 39-8-13-57" fill="var(--color-paper)"/>
      <path d="M105 174 67 28l101 55 42-14 77 12 66-54-15 136-36 68-88 37-94-41Z" fill="var(--color-paper)"/>
      <path d="M107 118 85 54l71 41m137 12 40-56-10 88" fill="var(--color-field)"/>
      <path d="m159 85 17-27 16 24 24-37 18 36 28-16-3 32" fill="var(--color-paper)"/>
      <path d="m102 150 94 30-55 51-29-31m223-56-107 39 64 43 30-39" fill="var(--color-ink)"/>
      <path className="mascot-eyes" d="m128 165 50 16-25 11Zm182-3-51 19 25 10Z" fill="var(--color-field)" stroke="none"/>
      <path d="m198 210 26 0-12 13Z" fill="var(--color-ink)"/>
      <path d="m212 223-3 14 16-6" fill="none" strokeWidth="3"/>
      <path d="m130 218 47 29 117-16-21 28-95 13-57-23Z" fill="var(--color-field)"/>
      <path className="mascot-scarf" d="m280 239 69 18-31 9 21 26-71-31" fill="var(--color-field)"/>
      <path d="m162 282 10-31 66 6 18 42-48 10Z" fill="var(--color-paper)"/>
      <path d="m170 263 37 11 32-9m-32 9 1 30" fill="none" strokeWidth="3"/>
    </g>
    <g fill="var(--color-paper)" aria-hidden="true"><path d="m64 194 5 13 13 5-13 5-5 13-5-13-13-5 13-5Zm269-144 3 8 9 3-9 3-3 9-3-9-9-3 9-3Z"/></g>
  </svg>
}

export function SectionHeading({ title, children }: { title: string; children?: ReactNode }) {
  return <div className="section-heading"><h2>{title}</h2>{children}</div>
}

export function LessonCard({ lesson, saved, completed, onOpen, onSave, index }: {
  lesson: Lesson; saved: boolean; completed: boolean; onOpen: () => void; onSave: () => void; index?: number
}) {
  const category = categoryById[lesson.category]
  return <article className={`lesson-card category-${lesson.category}${completed ? ' is-complete' : ''}`}>
    <button type="button" className="lesson-card-main" onClick={onOpen}>
      <span className="lesson-card-glyph" aria-hidden="true">{category.symbol}</span>
      <span className="lesson-card-copy">
        <h3>{lesson.title}</h3>
        <span className="lesson-card-meta"><span>{category.name}</span><span><Clock3 size={14} aria-hidden="true"/>{readingMinutes(lesson)} min</span>{completed && <span><Check size={14} aria-hidden="true"/>Learned</span>}</span>
        <span className="lesson-card-hook">{lesson.hook}</span>
      </span>
      {index !== undefined ? <span className="lesson-order" aria-label={`Bite ${index + 1}`}>{String(index + 1).padStart(2, '0')}</span> : <ChevronRight className="lesson-chevron" size={20} aria-hidden="true"/>}
    </button>
    <button type="button" className={`icon-button save-button${saved ? ' is-saved' : ''}`} aria-label={`${saved ? 'Unsave' : 'Save'} ${lesson.title}`} aria-pressed={saved} onClick={onSave}><Bookmark size={19} fill={saved ? 'currentColor' : 'none'} aria-hidden="true"/></button>
  </article>
}

export function EmptyState({ title, children, action, onAction, symbol = '◇' }: { title: string; children: ReactNode; action?: string; onAction?: () => void; symbol?: string }) {
  return <div className="empty-state"><span className="empty-symbol" aria-hidden="true">{symbol}</span><h2>{title}</h2><p>{children}</p>{action && <button type="button" className="button button-primary" onClick={onAction}>{action}<ArrowUpRight size={18} aria-hidden="true"/></button>}</div>
}

export function ProgressBar({ value, max, label }: { value: number; max: number; label: string }) {
  return <div className="progress-track" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={max || 1} aria-valuenow={Math.min(max, value)}><span style={{ transform: `scaleX(${max ? Math.min(1, value / max) : 0})` }}/></div>
}