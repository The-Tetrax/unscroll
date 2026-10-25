import { useState } from 'react'
import { Check, Plus, RotateCcw, X } from 'lucide-react'
import type { Library } from '../hooks/useLibrary'
import type { Lesson } from '../types'

export function PracticeActions({ library, lesson }: { library: Library; lesson: Lesson }) {
  const [error, setError] = useState('')
  const practice = library.state.practices?.[lesson.id]
  const change = (status: 'planned' | 'tried' | null) => {
    try { library.setPractice(lesson.id, status); setError('') }
    catch (issue) { setError(issue instanceof Error ? issue.message : 'Practice could not be updated. Try again.') }
  }
  return <div className="practice-actions" role="group" aria-label={`Practice for ${lesson.title}`}>
    {practice && <p className="field-hint">{practice.status === 'tried' ? `Tried ${practice.triedOn}. Your own record, not a skill rating.` : 'On your practice list. Choose when it fits your day.'}</p>}
    <div className="practice-buttons">
      {!practice && <button type="button" className="button button-quiet" onClick={() => change('planned')}><Plus size={17} aria-hidden="true"/>Plan this experiment</button>}
      {practice?.status === 'planned' && <button type="button" className="button button-quiet" onClick={() => change('tried')}><Check size={17} aria-hidden="true"/>Mark as tried</button>}
      {practice?.status === 'tried' && <button type="button" className="button button-quiet" onClick={() => change('planned')}><RotateCcw size={17} aria-hidden="true"/>Undo tried</button>}
      {practice && <button type="button" className="icon-button" aria-label={`Remove practice for ${lesson.title}`} onClick={() => change(null)}><X size={18} aria-hidden="true"/></button>}
    </div>
    {error && <p className="error-message" role="alert">{error}</p>}
    {!practice && <p className="field-hint">Keep up to five experiments planned. No deadline or extra XP.</p>}
  </div>
}