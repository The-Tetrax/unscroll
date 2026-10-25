import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Bookmark, Check, CheckCircle2, ChevronDown, Copy, Lightbulb, X } from 'lucide-react'
import { categoryById } from '../data'
import type { Lesson, ReaderDraft } from '../types'
import type { Library } from '../hooks/useLibrary'
import type { ReviewGrade } from '../lib/learning'
import { readingMinutes } from '../lib/learning'
import { PracticeActions } from './PracticeActions'
import { TeachingContent, GuidedPractice } from './TeachingContent'

const evidenceLabels = { research: 'Research-informed', framework: 'A useful framework', reference: 'Reference knowledge' }
type Stage = 'read' | 'try' | 'recall' | 'done'

export function Reader({ lesson, library, reviewMode, onClose, onNext, nextLabel, returnLabel, initialStage = 'read' }: {
  lesson: Lesson; library: Library; reviewMode: boolean; onClose: () => void; onNext?: () => void; nextLabel?: string; returnLabel: string; initialStage?: 'read' | 'try'
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const feedback = useRef<HTMLDivElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const [previousDraft] = useState(() => !reviewMode && !library.state.completed[lesson.id] ? library.state.readerDrafts?.[lesson.id] : undefined)
  const draftChanged = Boolean(previousDraft && previousDraft.lessonRevision !== lesson.revision)
  const draft = draftChanged ? undefined : previousDraft
  const [resumed, setResumed] = useState(Boolean(draft))
  const [stage, setStage] = useState<Stage>(reviewMode ? 'recall' : initialStage === 'try' ? 'try' : draft?.stage ?? 'read')
  const [choice, setChoice] = useState<0 | 1 | 2 | null>(draft?.choice ?? null)
  const [revealed, setRevealed] = useState(Boolean(draft?.revealed && (!lesson.quiz || draft.choice !== null)))
  const [copyState, setCopyState] = useState('')
  const [noteError, setNoteError] = useState('')
  const [reviewRecorded, setReviewRecorded] = useState(false)
  const [recallAnswerShown, setRecallAnswerShown] = useState(false)
  const [completedBefore] = useState(() => Boolean(library.state.completed[lesson.id]))
  const saved = library.state.saved.includes(lesson.id)
  const category = categoryById[lesson.category]
  const isCorrect = choice === lesson.quiz?.correctIndex

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    dialog.current?.showModal()
    const original = document.body.style.overflowY
    document.body.style.overflowY = 'hidden'
    heading.current?.focus({ preventScroll: true })
    return () => { document.body.style.overflowY = original; previous?.focus({ preventScroll: true }) }
  }, [])

  const remember = (next: Omit<ReaderDraft, 'updatedAt'>) => {
    if (!reviewMode && !completedBefore) library.saveDraft(lesson.id, lesson.revision ? { ...next, lessonRevision: lesson.revision } : next)
  }
  const changeStage = (next: Stage) => {
    setStage(next)
    if (next !== 'done') remember({ stage: next, choice, revealed })
    scroller.current?.scrollTo({ top: 0 }); heading.current?.focus({ preventScroll: true })
  }
  useEffect(() => {
    if (!revealed || stage !== 'recall') return
    feedback.current?.scrollIntoView({ block: 'nearest' })
  }, [revealed, stage])
  const finish = () => {
    library.complete(lesson, lesson.quiz ? isCorrect : null)
    changeStage('done')
  }
  const grade = (value: ReviewGrade) => { setReviewRecorded(library.review(lesson.id, value)); changeStage('done') }
  const copyLink = async () => {
    const url = new URL(window.location.href)
    // Share only the lesson identity, never a Vault search or note text in the current route.
    url.search = ''
    url.hash = `/explore?lesson=${encodeURIComponent(lesson.id)}`
    try { await navigator.clipboard.writeText(url.href); setCopyState('Link copied') }
    catch { setCopyState('Could not copy. Share the address from your browser.') }
  }

  return <dialog ref={dialog} className={`reader-dialog category-${lesson.category}`} aria-labelledby="reader-title" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === dialog.current) onClose() }} onKeyDown={(event) => {
    if ((event.target as HTMLElement).closest('dialog') !== event.currentTarget) return
    if (event.key !== 'Tab') return
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), summary'))
      .filter((element) => element.getClientRects().length > 0 && !element.closest('details:not([open]) :not(summary)'))
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
  }}>
    <div className="reader-shell">
      <header className="reader-toolbar"><button type="button" className="icon-button" aria-label="Close lesson" onClick={onClose}><X size={23} aria-hidden="true"/></button><span>{reviewMode ? 'Recall practice' : category.name}</span><div className="reader-tools"><button type="button" className={`icon-button${saved ? ' is-saved' : ''}`} aria-label={saved ? 'Unsave this bite' : 'Save this bite'} aria-pressed={saved} onClick={() => library.toggleSave(lesson.id)}><Bookmark size={21} fill={saved ? 'currentColor' : 'none'} aria-hidden="true"/></button><button type="button" className="icon-button" aria-label="Copy lesson link" onClick={() => { void copyLink() }}><Copy size={19} aria-hidden="true"/></button></div></header>
      {!reviewMode && stage !== 'done' && <nav className="reader-steps" aria-label="Lesson stages">{(['read', 'try', 'recall'] as const).map((step, index) => <button type="button" key={step} className={stage === step ? 'is-active' : ''} aria-current={stage === step ? 'step' : undefined} onClick={() => changeStage(step)}><span>{index + 1}</span>{step === 'read' ? 'Understand' : step === 'try' ? 'Put it to use' : 'Make it stick'}</button>)}</nav>}
      <div ref={scroller} className="reader-content">
        {copyState && <p className="inline-notice" role="status">{copyState}</p>}
        {draftChanged && stage !== 'done' && <p className="inline-notice">This lesson now has a fuller explanation and a new question. Start with the updated lesson; your notes, saved items, and previous completions are unchanged.</p>}
        {resumed && stage !== 'done' && <p className="resume-notice" role="status">Your unfinished bite is restored. No completion was recorded.<button type="button" className="text-action" onClick={() => { library.discardDraft(lesson.id); setResumed(false); setChoice(null); setRevealed(false); setStage('read'); scroller.current?.scrollTo({ top: 0 }) }}>Start this bite again</button></p>}
        {library.storageError && <p className="error-message" role="alert">{library.storageError}</p>}
        <h1 ref={heading} tabIndex={-1} id="reader-title">{stage === 'done' ? (reviewMode ? 'A little more likely to stick.' : 'One idea. Yours now.') : lesson.title}</h1>
        {stage !== 'done' && <div className="reader-meta"><span>{lesson.kind === 'discovery' ? 'Wikipedia reference extract' : evidenceLabels[lesson.evidence]}</span><span>{readingMinutes(lesson)} min read</span>{completedBefore && !reviewMode && <span>Revisiting / no extra completion XP</span>}</div>}
        {stage === 'read' && <>
          <p className="reader-hook">{lesson.hook}</p>
          <TeachingContent lesson={lesson}/>
          <div className="takeaway"><Lightbulb size={22} aria-hidden="true"/><p>{lesson.takeaway}</p></div>
          {lesson.kind === 'discovery' && <p className="field-hint">This is an external reference, not an expert-reviewed practical lesson. Check the article’s sources and context before applying it.</p>}
        </>}

        {stage === 'try' && <>
          <h2 className="reader-section-title">Take it into the real world.</h2><GuidedPractice lesson={lesson}/>
          <PracticeActions library={library} lesson={lesson}/>
          <label className="field"><span className="field-label">Your note or experiment</span><textarea className="field-input" name="lesson-note" maxLength={5000} rows={5} value={library.state.notes[lesson.id] ?? ''} aria-describedby="note-limit" onChange={(event) => { try { library.saveNote(lesson.id, event.target.value); setNoteError('') } catch (issue) { setNoteError(issue instanceof Error ? issue.message : 'Note could not be saved.') } }} onPaste={(event) => { const input = event.currentTarget; const size = input.value.length - (input.selectionEnd - input.selectionStart) + event.clipboardData.getData('text').length; if (size > 5000) { event.preventDefault(); setNoteError('That paste exceeds 5,000 characters. Nothing was pasted; shorten it first.') } }} placeholder="What did you notice? Where could you try this?"/><span className="field-hint">Optional. Stored on this device, never sent to the content service.</span></label>
          <p id="note-limit" className="field-hint">{(library.state.notes[lesson.id] ?? '').length.toLocaleString()} / 5,000 characters{(library.state.notes[lesson.id] ?? '').length === 5000 ? '. Note limit reached.' : '.'}</p>
          {noteError && <p className="error-message" role="alert">{noteError}</p>}
          <details className="collection-picker"><summary>Add to a collection<ChevronDown size={16} aria-hidden="true"/></summary>{library.state.collections.length ? library.state.collections.map((collection) => <label className="collection-checkbox" key={collection.id}><input type="checkbox" checked={collection.lessonIds.includes(lesson.id)} onChange={(event) => library.updateState((old) => ({ ...old, saved: event.target.checked ? [...new Set([...old.saved, lesson.id])] : old.saved, collections: old.collections.map((entry) => entry.id === collection.id ? { ...entry, lessonIds: event.target.checked ? [...new Set([...entry.lessonIds, lesson.id])] : entry.lessonIds.filter((id) => id !== lesson.id) } : entry) }))}/>{collection.name}</label>) : <p className="field-hint">Create collections in your Vault first. You can save this bite with the bookmark button.</p>}</details>
        </>}

        {stage === 'recall' && <div className="quiz-section">
          <p className="reader-hook">{reviewMode ? 'Try recalling before you reveal the explanation.' : 'Close the loop. What stayed with you?'}</p>
          {lesson.guide && <section className="transfer-question" aria-label="Apply the idea to a new situation"><h2>Try the idea somewhere new</h2><p>{lesson.guide.recall.prompt}</p><p className="field-hint">Think of your answer first. There is no timer or penalty for needing help.</p><details><summary>I’m not sure yet</summary><p>{lesson.guide.recall.hint}</p><button type="button" className="text-action" onClick={() => changeStage('read')}>Revisit the explanation</button></details><button type="button" className="button button-quiet" aria-expanded={recallAnswerShown} onClick={() => setRecallAnswerShown(!recallAnswerShown)}>{recallAnswerShown ? 'Hide the example reasoning' : 'Compare with an example answer'}</button>{recallAnswerShown && <p className="transfer-answer" role="status">{lesson.guide.recall.answer}</p>}<h3 className="recognition-heading">One more check</h3><p className="field-hint">Choose a response below, then inspect why it fits.</p></section>}
          {lesson.quiz ? <fieldset className="quiz-options"><legend>{lesson.quiz.question}</legend>{lesson.quiz.options.map((option, index) => <label key={option} className={`quiz-option${choice === index ? ' is-selected' : ''}${revealed && index === lesson.quiz!.correctIndex ? ' is-correct' : ''}${revealed && choice === index && !isCorrect ? ' is-incorrect' : ''}`}><input type="radio" name="recall-answer" checked={choice === index} disabled={revealed} onChange={() => { const selected = index as 0 | 1 | 2; setChoice(selected); remember({ stage: 'recall', choice: selected, revealed: false }) }}/><span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{option}</span>{revealed && index === lesson.quiz!.correctIndex && <Check size={20} aria-label="Correct answer"/>}</label>)}</fieldset> : <div className="reference-recall"><h2>Explain this idea without looking.</h2><p>What does “{lesson.title}” mean? Name one question you would investigate before applying it.</p></div>}
          {revealed && <div ref={feedback} className={`quiz-feedback${isCorrect || !lesson.quiz ? ' feedback-correct' : ''}`} role="status"><h2>{lesson.quiz ? isCorrect ? 'That’s the distinction.' : 'Here’s the distinction.' : 'Compare your explanation.'}</h2><p>{lesson.quiz?.explanation ?? lesson.takeaway}</p>{!lesson.quiz && <p>{lesson.body[0]}</p>}</div>}
          {!revealed && <button type="button" className="button button-primary" disabled={Boolean(lesson.quiz) && choice === null} onClick={() => { setRevealed(true); remember({ stage: 'recall', choice, revealed: true }) }}>{lesson.quiz ? 'Check my answer' : 'Reveal the reference'}<ArrowRight size={18} aria-hidden="true"/></button>}
          {reviewMode && revealed && <div className="review-grades"><p>How well did you remember?</p><div><button type="button" className="button button-quiet" onClick={() => grade('again')}>Need practice</button><button type="button" className="button button-quiet" onClick={() => grade('good')}>Got it</button><button type="button" className="button button-primary" onClick={() => grade('easy')}>Easy recall</button></div><p className="field-hint">Your next review is spaced by recall, not by a streak deadline.</p></div>}
          {reviewMode && <details className="review-explanation"><summary>Read the full explanation<ChevronDown size={16} aria-hidden="true"/></summary><TeachingContent lesson={lesson}/><p><strong>Try it:</strong> {lesson.guide?.practice.notice ?? lesson.action}</p></details>}
        </div>}

        {stage === 'done' && <div className="reader-done"><CheckCircle2 size={54} strokeWidth={1.4} aria-hidden="true"/><p className="reader-hook">{lesson.takeaway}</p><p>{reviewMode ? reviewRecorded ? 'Your next review is scheduled.' : 'Practice only. This review was not due; its date and XP are unchanged.' : completedBefore ? 'Revisited. Your completion XP stays the same.' : `+${lesson.kind === 'discovery' ? 10 : 20} XP. Recall this tomorrow.`}</p><div className="done-experiment"><h2>The part that matters</h2><p>{lesson.guide?.practice.notice ?? lesson.action}</p><PracticeActions library={library} lesson={lesson}/></div><button type="button" className="button button-quiet" onClick={() => library.toggleSave(lesson.id)}><Bookmark size={18} fill={saved ? 'currentColor' : 'none'} aria-hidden="true"/>{saved ? 'Saved to your Vault' : 'Save this idea'}</button></div>}

        {(stage === 'read' || (reviewMode && revealed)) && <details className="sources"><summary>Sources & context<ChevronDown size={16} aria-hidden="true"/></summary><p className="field-hint">{lesson.kind === 'discovery' ? 'External text, shown as plain-text reference material.' : lesson.guide?.sourceNote ?? 'Original UNSCROLL explanation and exercise. The sources explain the underlying concepts; examples are ours.'}</p><ul>{lesson.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<ArrowUpRight size={15} aria-label="Opens a new tab"/></a><span>{source.publisher}</span></li>)}</ul>{lesson.attribution && <p className="attribution">By {lesson.attribution.author}. <a href={lesson.attribution.licenseUrl} target="_blank" rel="noopener noreferrer">{lesson.attribution.license}</a>. Plain-text excerpt; truncated if indicated. <a href={lesson.attribution.historyUrl} target="_blank" rel="noopener noreferrer">Article history and authors</a>.</p>}{lesson.category === 'money' && <p className="field-hint">General financial education, not a personal investment recommendation. Rules and protections vary by country.</p>}{lesson.category === 'wellbeing' && <p className="field-hint">General wellbeing information, not diagnosis or personal medical advice.</p>}</details>}
      </div>

      <footer className="reader-footer">
        {stage === 'done' ? <><button type="button" className="button button-quiet" onClick={onClose}>{returnLabel}</button>{onNext && <button type="button" className="button button-primary" onClick={onNext}>{nextLabel ?? 'Next bite'}<ArrowRight size={18} aria-hidden="true"/></button>}</>
          : reviewMode ? <span className="field-hint">Recall first. Then choose your next review interval.</span>
            : <><button type="button" className="button button-quiet" onClick={() => stage === 'read' ? onClose() : changeStage(stage === 'try' ? 'read' : 'try')}><ArrowLeft size={18} aria-hidden="true"/>{stage === 'read' ? 'Not now' : 'Back'}</button><button type="button" className="button button-primary" disabled={stage === 'recall' && !revealed} onClick={() => stage === 'read' ? changeStage('try') : stage === 'try' ? changeStage('recall') : finish()}>{stage === 'read' ? 'Try this idea' : stage === 'try' ? 'Test my recall' : completedBefore ? 'Finish revisit' : 'Complete bite'}<ArrowRight size={18} aria-hidden="true"/></button></>}
      </footer>
    </div>
  </dialog>
}