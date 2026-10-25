import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Check, X } from 'lucide-react'
import { categories, lessonById } from '../data'
import type { Library } from '../hooks/useLibrary'
import type { AppState } from '../types'
import { readingMinutes } from '../lib/learning'
import { ProgressBar } from './shared'

const sample = lessonById.get('cinema-027')!

export function OnboardingInvite({ onOpen, onDismiss }: { onOpen: () => void; onDismiss: () => void }) {
  return <section className="onboarding-invite" aria-labelledby="setup-invite-title">
    <BookOpen size={28} aria-hidden="true"/>
    <div><h2 id="setup-invite-title">Start with one useful idea.</h2><p>Choose your topics, set a manageable pace, and see how a lesson works.</p>
      <button type="button" className="button button-quiet" onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); onOpen() }}>Set up my learning<ArrowRight size={18} aria-hidden="true"/></button>
    </div>
    <button type="button" className="icon-button" aria-label="Dismiss welcome" onClick={onDismiss}><X size={19} aria-hidden="true"/></button>
  </section>
}

export function Onboarding({ library, onClose }: { library: Library; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [interests, setInterests] = useState([...library.state.interests])
  const [goal, setGoal] = useState<AppState['goal']>(library.state.goal)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const lock = useRef(false)

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const node = dialog.current
    node?.showModal()
    return () => { node?.close(); opener?.focus({ preventScroll: true }) }
  }, [])
  useEffect(() => { heading.current?.focus({ preventScroll: true }); content.current?.scrollTo({ top: 0 }) }, [step])

  async function finish() {
    if (lock.current || !interests.length) return
    lock.current = true
    setSaving(true)
    setError('')
    try {
      library.updateState((current) => ({ ...current, interests: [...interests], goal, welcomeDismissed: true, onboardingVersion: 1 }))
      await library.flushStorage()
      onClose()
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Preferences could not be saved to this device. Keep this tab open and export a backup from settings.')
    } finally { lock.current = false; setSaving(false) }
  }

  return <dialog ref={dialog} className="onboarding-dialog" aria-labelledby="setup-heading" aria-describedby="setup-progress" onCancel={(event) => { event.preventDefault(); if (!saving) onClose() }} onKeyDown={(event) => {
    if (event.key !== 'Tab') return
    const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]')].filter((node) => node.getClientRects().length)
    const first = controls[0], last = controls.at(-1)
    if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) { event.preventDefault(); last?.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
  }}>
    <header className="setup-header"><span id="setup-progress">Getting started: {step + 1} of 3</span><button type="button" className="icon-button" aria-label="Close setup without saving" disabled={saving} onClick={onClose}><X size={22} aria-hidden="true"/></button></header>
    <ProgressBar value={step + 1} max={3} label={`Setup step ${step + 1} of 3`}/>
    <div ref={content} className="setup-body">
      <h1 ref={heading} id="setup-heading" tabIndex={-1}>{['Read it. Try it. Recall it.', 'What are you curious about?', 'Choose a pace you can keep.'][step]}</h1>
      {step === 0 && <>
        <p className="setup-intro">Each lesson explains one idea, shows an example, and gives you something concrete to try.</p>
        <figure className="setup-sample"><img src="/lesson-visuals/guided-v1-cinema-027-1.svg" alt="A window lights a mug from the left. White paper on the right bounces some light onto its darker side." width="680" height="630"/><figcaption>A real lesson: {sample.title}. About {readingMinutes(sample)} minutes of reading, plus time to try it.</figcaption></figure>
        <ol className="setup-learning-steps"><li><strong>Understand.</strong> Read the explanation and enlarge its diagrams.</li><li><strong>Try it.</strong> Follow the steps now, or save the experiment for later.</li><li><strong>Recall.</strong> Think through a new situation. A hint is there if you need it.</li></ol>
        <p className="field-hint">You can leave mid-lesson and resume from Vault. Tomorrow's recall helps you revisit what you learned.</p>
      </>}
      {step === 1 && <fieldset className="setup-interests" aria-describedby="setup-interest-hint"><legend className="sr-only">Your interests</legend><p id="setup-interest-hint">Choose at least one. These topics guide future daily sessions; the whole library stays available.</p><div className="setup-topic-grid">{categories.map((category) => <label className={interests.includes(category.id) ? 'setup-topic is-selected' : 'setup-topic'} key={category.id}><input type="checkbox" checked={interests.includes(category.id)} onChange={(event) => setInterests((current) => event.target.checked ? [...current, category.id] : current.filter((id) => id !== category.id))}/><span><strong>{category.name}</strong><span>{category.subtitle}</span></span></label>)}</div>{!interests.length && <p className="error-message" role="status">Choose at least one topic to continue.</p>}</fieldset>}
      {step === 2 && <>
        <fieldset className="field" disabled={saving}><legend className="field-label">Lessons in a daily session</legend><div className="setup-pace">{([1, 3, 5, 7] as const).map((value) => <label key={value} className={goal === value ? 'setup-pace-option is-selected' : 'setup-pace-option'}><input type="radio" name="setup-goal" checked={goal === value} onChange={() => setGoal(value)}/><strong>{value}</strong><span>{value === 1 ? 'One idea, no rush' : `${value} lessons`}</span></label>)}</div></fieldset>
        <p>Reading and trying are separate. Finishing one lesson thoughtfully is enough; there is no penalty for leaving the rest.</p>
        <p className="field-hint">Today's issued list stays the same. Your new goal and topics apply to the next daily session. Change them anytime in You.</p>
        <div className="setup-data-note"><h2>Keep your learning on this device</h2><p>Notes and progress are not synced. Export a backup before switching browsers or phones. A private hosted site can still ask you to sign in before you open it online.</p><p>The illustrated library downloads for offline use. Check its status in You before disconnecting. New discoveries and source links need a connection.</p></div>
      </>}
      {error && <p className="error-message" role="alert">{error}</p>}
    </div>
    <footer className="setup-actions"><button type="button" className="button button-quiet" disabled={saving} onClick={() => step ? setStep(step - 1) : onClose()}>{step ? <><ArrowLeft size={18} aria-hidden="true"/>Back</> : 'Not now'}</button>{step < 2 ? <button type="button" className="button button-primary" disabled={step === 1 && !interests.length} onClick={() => setStep(step + 1)}>Continue<ArrowRight size={18} aria-hidden="true"/></button> : <button type="button" className="button button-primary" disabled={saving || !interests.length} onClick={() => { void finish() }}>{saving ? 'Saving preferences...' : 'Save and start learning'}<Check size={18} aria-hidden="true"/></button>}</footer>
  </dialog>
}