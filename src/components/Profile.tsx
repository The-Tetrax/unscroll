import { useEffect, useId, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { ArrowUpRight, Download, ShieldCheck, Smartphone, Trash2, Upload } from 'lucide-react'
import { categories, learningPaths } from '../data'
import type { Install } from '../hooks/useInstall'
import type { Library } from '../hooks/useLibrary'
import type { Route } from '../hooks/useRoute'
import { addDays, levelFor, streak } from '../lib/learning'
import type { AppState, CategoryId } from '../types'
import { EmptyState, ProgressBar, SectionHeading } from './shared'
import { AppStatus } from './AppStatus'
import type { AppStatus as PwaStatus } from '../hooks/useAppStatus'

type Notice = { kind: 'info' | 'success' | 'error'; message: string } | null
type BackupAction = 'export' | 'import' | 'reset'

function InlineNotice({ id, notice }: { id: string; notice: Notice }) {
  return <p id={id} className={notice?.kind === 'error' ? 'error-message' : 'inline-notice'} role="status" aria-live="polite" aria-atomic="true">{notice?.message || '\u00a0'}</p>
}

function errorMessage(error: unknown, fallback: string) {
  return error instanceof Error && error.message ? error.message : fallback
}

function formatLocalDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

function isStandaloneWindow() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  return (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches)
    || (navigator as Navigator & { standalone?: boolean }).standalone === true
}

export function Profile({ library, route, install, appStatus, onSetup }: { library: Library; route: Route; install: Install; appStatus: PwaStatus; onSetup: () => void }) {
  const prefix = useId()
  const fileInput = useRef<HTMLInputElement>(null)
  const nicknameInput = useRef<HTMLInputElement>(null)
  const backupLock = useRef(false)
  const persistenceLock = useRef(false)
  const installLock = useRef(false)
  const preferenceLock = useRef(false)
  const [nicknameDraft, setNicknameDraft] = useState<string | null>(null)
  const [nicknameInvalid, setNicknameInvalid] = useState(false)
  const [preferencesNotice, setPreferencesNotice] = useState<Notice>(null)
  const [savingPreferences, setSavingPreferences] = useState(false)
  const [backupNotice, setBackupNotice] = useState<Notice>(null)
  const [backupAction, setBackupAction] = useState<BackupAction | null>(null)
  const [persistenceNotice, setPersistenceNotice] = useState<Notice>(null)
  const [persistenceGranted, setPersistenceGranted] = useState<boolean | null>(null)
  const [requestingPersistence, setRequestingPersistence] = useState(false)
  const [installNotice, setInstallNotice] = useState<Notice>(null)
  const [installing, setInstalling] = useState(false)
  const [standalone, setStandalone] = useState(isStandaloneWindow)
  const { state } = library
  const disabled = !library.ready || Boolean(library.fatal) || backupAction !== null || savingPreferences
  const nickname = nicknameDraft ?? state.name
  const level = levelFor(state.xp)
  const followedPath = learningPaths.find((path) => path.id === state.followedPath)
  const pathIds = [...new Set(followedPath?.lessonIds ?? [])]
  const pathCompleted = pathIds.filter((id) => Boolean(state.completed[id])).length
  const activeStreak = streak(state, library.today)
  const savedCount = new Set(state.saved).size
  const activityDays = Array.from({ length: 28 }, (_, index) => {
    const date = addDays(library.today, index - 27)
    return { date, count: state.activity[date] ?? 0 }
  })
  const activityTotal = activityDays.reduce((total, day) => total + day.count, 0)
  const recentCompletions = Object.entries(state.completed)
    .sort(([, left], [, right]) => right.date.localeCompare(left.date))
    .slice(0, 6)
  const supportsPersistence = typeof navigator !== 'undefined' && typeof navigator.storage?.persist === 'function'
  const preferencesFeedbackId = `${prefix}-preferences-feedback`
  const backupFeedbackId = `${prefix}-backup-feedback`

  useEffect(() => {
    const section = route.params.get('section')
    if (section && ['preferences', 'learning', 'install', 'backup', 'offline', 'privacy'].includes(section)) {
      const target = document.getElementById(`${prefix}-${section}-section`)
      target?.scrollIntoView({ block: 'start' })
      target?.focus({ preventScroll: true })
    }
  }, [route.params, prefix])

  useEffect(() => {
    const media = typeof window.matchMedia === 'function' ? window.matchMedia('(display-mode: standalone)') : null
    const update = () => setStandalone(isStandaloneWindow())
    if (typeof media?.addEventListener === 'function') media.addEventListener('change', update)
    else media?.addListener?.(update)
    window.addEventListener('pageshow', update)
    return () => {
      if (typeof media?.removeEventListener === 'function') media.removeEventListener('change', update)
      else media?.removeListener?.(update)
      window.removeEventListener('pageshow', update)
    }
  }, [])

  useEffect(() => {
    let active = true
    if (typeof navigator.storage?.persisted === 'function') {
      void navigator.storage.persisted().then((granted) => { if (active && !persistenceLock.current) setPersistenceGranted(granted) }).catch(() => {})
    }
    return () => { active = false }
  }, [])

  async function updatePreferences(change: (current: AppState) => AppState, message: string) {
    if (disabled || backupLock.current || preferenceLock.current) return false
    preferenceLock.current = true
    setSavingPreferences(true)
    setPreferencesNotice({ kind: 'info', message: 'Saving this preference to your device...' })
    try {
      library.updateState(change)
      await library.flushStorage()
      setPreferencesNotice({ kind: 'success', message })
      return true
    } catch (error) {
      setPreferencesNotice({ kind: 'error', message: errorMessage(error, 'This preference could not be changed. Try again.') })
      return false
    } finally { preferenceLock.current = false; setSavingPreferences(false) }
  }

  async function saveNickname(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (disabled || backupLock.current) return
    const name = nickname.trim()
    setNicknameInvalid(false)
    if (name.length > 40) {
      setNicknameInvalid(true)
      setPreferencesNotice({ kind: 'error', message: 'Use 40 characters or fewer for your nickname, or leave it blank.' })
      nicknameInput.current?.focus()
      return
    }
    if (await updatePreferences((current) => ({ ...current, name }), name ? 'Nickname updated.' : 'Nickname cleared.')) {
      setNicknameDraft(null)
    }
  }

  function changeInterest(id: CategoryId, checked: boolean) {
    const category = categories.find((entry) => entry.id === id)
    void updatePreferences((current) => {
      const interests = checked ? [...new Set([...current.interests, id])] : current.interests.filter((interest) => interest !== id)
      if (!interests.length) throw new Error('Keep at least one interest selected.')
      return { ...current, interests }
    }, `${category?.name ?? 'Interest'} ${checked ? 'selected' : 'removed'}. Future daily sessions will use your interests.`)
  }

  async function runBackupAction(action: BackupAction, operation: () => Promise<void>, success: string) {
    if (!library.ready || library.fatal || backupLock.current) return
    backupLock.current = true
    setBackupAction(action)
    setBackupNotice({ kind: 'info', message: action === 'export' ? 'Preparing your backup...' : action === 'import' ? 'Validating and importing your backup...' : 'Clearing local data...' })
    try {
      await operation()
      if (action !== 'export') {
        setNicknameDraft(null)
        setNicknameInvalid(false)
        setPreferencesNotice(null)
      }
      setBackupNotice({ kind: 'success', message: success })
    } catch (error) {
      const detail = errorMessage(error, 'The browser could not finish this operation.')
      setBackupNotice({ kind: 'error', message: action === 'export'
        ? `Backup export failed. ${detail} Keep this tab open and try again.`
        : `${action === 'import' ? 'Backup not imported.' : 'Data not cleared.'} ${detail} Your current library has been kept.` })
    } finally {
      backupLock.current = false
      setBackupAction(null)
    }
  }

  function chooseBackup() {
    if (disabled || backupLock.current) return
    setBackupNotice(null)
    fileInput.current?.click()
  }

  function importBackup(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0]
    event.currentTarget.value = ''
    if (!file || disabled || backupLock.current) return
    if (!window.confirm(`Import "${file.name}" and replace the progress, saved lessons, notes, collections and preferences in this browser? Cancel and export a backup first if you want to keep your current library.`)) {
      setBackupNotice({ kind: 'info', message: 'Import canceled. Your current library is unchanged.' })
      return
    }
    void runBackupAction('import', () => library.importBackup(file), 'Backup imported. Your library now uses the progress, notes and preferences from that backup.')
  }

  function clearProgress() {
    if (disabled || backupLock.current) return
    if (!window.confirm('Clear all your UNSCROLL progress, saved lessons, notes, collections, preferences and downloaded discoveries from this browser? This cannot be undone without a backup. Cancel and export a backup first if you want to keep your data.')) {
      setBackupNotice({ kind: 'info', message: 'Nothing was cleared. Your current library is unchanged.' })
      return
    }
    void runBackupAction('reset', library.reset, 'Your local progress and library have been cleared. You can start a new daily session.')
  }

  async function requestPersistence() {
    if (!supportsPersistence || disabled || persistenceLock.current || persistenceGranted === true) return
    persistenceLock.current = true
    setRequestingPersistence(true)
    setPersistenceNotice({ kind: 'info', message: 'Asking this browser to protect local storage...' })
    try {
      const granted = await navigator.storage.persist()
      setPersistenceGranted(granted)
      setPersistenceNotice({ kind: granted ? 'success' : 'info', message: granted
        ? 'This browser granted persistent storage for this site. Keep backups: deleting site data or losing your device can still remove your library.'
        : 'This browser did not grant persistent storage. You can keep using UNSCROLL. Export backups to protect your library.' })
    } catch (error) {
      setPersistenceNotice({ kind: 'error', message: `Storage protection could not be requested. ${errorMessage(error, 'The browser rejected the request.')} Keep a backup of your library.` })
    } finally {
      persistenceLock.current = false
      setRequestingPersistence(false)
    }
  }

  async function requestInstall() {
    if (!install.available || install.installed || standalone || installing || installLock.current) return
    installLock.current = true
    setInstalling(true)
    setInstallNotice({ kind: 'info', message: 'Follow the installation prompt in your browser.' })
    try {
      const outcome = await install.install()
      setInstallNotice({ kind: 'info', message: outcome === 'accepted'
        ? 'Installation accepted. Follow your browser\'s remaining steps and look for UNSCROLL on your home screen.'
        : outcome === 'dismissed' ? 'Installation was dismissed. You can keep reading here or install later from the browser menu.'
          : 'No install prompt is available now. Use your browser menu or the device instructions below.' })
    } catch (error) {
      setInstallNotice({ kind: 'error', message: `The install request could not finish. ${errorMessage(error, 'Try your browser menu instead.')} You can still use UNSCROLL in this browser.` })
    } finally {
      installLock.current = false
      setInstalling(false)
    }
  }

  return <>
    <header className="page-header">
      <h1>Your profile</h1>
      <p className="page-intro">Make the reader comfortable. Keep your learning safe on this device.</p>
    </header>
    <nav className="profile-shortcuts" aria-label="Settings sections"><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'preferences', true)}>Reading and pace</button><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'offline', true)}>Offline and updates</button><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'install', true)}><Smartphone size={18} aria-hidden="true"/>Install on my phone</button><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'backup', true)}><Download size={18} aria-hidden="true"/>Backups and data</button><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'learning', true)}>Learning history</button><button type="button" className="button button-quiet" onClick={() => route.setParam('section', 'privacy', true)}>Help and privacy</button></nav>

    <section id={`${prefix}-preferences-section`} tabIndex={-1} className="panel settings-section" aria-label="Preferences">
      <SectionHeading title="Preferences"/>
      <form onSubmit={saveNickname} noValidate>
        <div className="form-row">
          <div className="field">
            <label className="field-label" htmlFor={`${prefix}-nickname`}>Nickname (optional)</label>
            <input ref={nicknameInput} id={`${prefix}-nickname`} className="field-input" value={nickname} maxLength={40} autoComplete="nickname" disabled={disabled} aria-invalid={nicknameInvalid || undefined} aria-describedby={`${prefix}-nickname-hint ${preferencesFeedbackId}`} onChange={(event) => { setNicknameDraft(event.currentTarget.value); setNicknameInvalid(false); setPreferencesNotice(null) }}/>
            <p className="field-hint" id={`${prefix}-nickname-hint`}>Up to 40 characters, kept in this browser. Leave it blank if you prefer.</p>
          </div>
          <button type="submit" className="button button-primary" disabled={disabled}>Save nickname</button>
        </div>
      </form>

      <fieldset className="field" disabled={disabled} aria-describedby={`${prefix}-goal-hint`}>
        <legend className="field-label">Daily goal</legend>
        <p className="field-hint" id={`${prefix}-goal-hint`}>Changes apply to the next day's session. Today's issued list stays the same. A session can be shorter when fewer new lessons remain.</p>
        <div className="filter-row">
          {([1, 3, 5, 7] as const).map((goal) => <label className={`chip${state.goal === goal ? ' is-active' : ''}`} key={goal}>
            <input type="radio" name={`${prefix}-goal`} value={goal} checked={state.goal === goal} onChange={() => { void updatePreferences((current) => ({ ...current, goal }), `Daily goal changed to ${goal} ${goal === 1 ? 'lesson' : 'lessons'} for the next day's session.`) }}/>
            {goal} {goal === 1 ? 'lesson' : 'lessons'}
          </label>)}
        </div>
      </fieldset>

      <fieldset className="field" disabled={disabled} aria-describedby={`${prefix}-interests-hint ${preferencesFeedbackId}`}>
        <legend className="field-label">Interests</legend>
        <p className="field-hint" id={`${prefix}-interests-hint`}>Choose at least one of these {categories.length} topics. They guide future daily sessions without replacing today's list.</p>
        <div className="filter-row">
          {categories.map((category) => <label className={`chip${state.interests.includes(category.id) ? ' is-active' : ''}`} key={category.id}>
            <input type="checkbox" checked={state.interests.includes(category.id)} onChange={(event) => changeInterest(category.id, event.currentTarget.checked)}/>
            {category.name}
          </label>)}
        </div>
      </fieldset>

      <div className="toggle-row">
        <div>
          <label className="field-label" htmlFor={`${prefix}-motion`}>Reduce motion</label>
          <p className="field-hint" id={`${prefix}-motion-hint`}>Reduce interface animations. Your device's reduced-motion setting is always respected, even when this switch is off.</p>
        </div>
        <input id={`${prefix}-motion`} className="toggle-control" type="checkbox" role="switch" checked={state.reducedMotion} disabled={disabled} aria-describedby={`${prefix}-motion-hint`} onChange={(event) => {
          const reducedMotion = event.currentTarget.checked
          void updatePreferences((current) => ({ ...current, reducedMotion }), reducedMotion ? 'Reduced motion enabled.' : 'Reduced motion preference turned off.')
        }}/>
      </div>
      <fieldset className="field" disabled={disabled} aria-describedby={`${prefix}-reading-hint`}><legend className="field-label">Lesson text size</legend><p className="field-hint" id={`${prefix}-reading-hint`}>Change explanations, practice, questions and diagram captions. You can also use your browser's zoom.</p><div className="filter-row">{(['standard', 'large'] as const).map((readingSize) => <label className={`chip${(state.readingSize ?? 'standard') === readingSize ? ' is-active' : ''}`} key={readingSize}><input type="radio" name={`${prefix}-reading-size`} checked={(state.readingSize ?? 'standard') === readingSize} onChange={() => { void updatePreferences((current) => ({ ...current, readingSize }), readingSize === 'large' ? 'Larger lesson text saved.' : 'Standard lesson text saved.') }}/>{readingSize === 'large' ? 'Larger text' : 'Standard text'}</label>)}</div><p className="reading-preview">Read the example, try one change, and look for what is different.</p></fieldset>
      <InlineNotice id={preferencesFeedbackId} notice={preferencesNotice}/>
    </section>

    <section className="panel settings-section" aria-label="Followed learning path">
      <SectionHeading title="Learning path"/>
      {followedPath ? <>
        <h3>{followedPath.title}</h3>
        <p className="section-description">{followedPath.description}</p>
        <p>{pathCompleted} of {pathIds.length} lessons completed.</p>
        <ProgressBar value={pathCompleted} max={pathIds.length} label={`${followedPath.title}: ${pathCompleted} of ${pathIds.length} lessons completed`}/>
      </> : <p className="section-description">{state.followedPath ? 'This path is no longer available. Your completed lessons are still recorded.' : 'No path followed. Choose one in Explore to guide future daily sessions.'}</p>}
      {state.followedPath && <>
        <p className="field-hint">Stopping keeps your completed lessons and today's issued list.</p>
        <button type="button" className="button button-quiet" disabled={disabled} aria-describedby={preferencesFeedbackId} onClick={() => { void updatePreferences((current) => {
          const next = { ...current }
          delete next.followedPath
          return next
        }, 'You are no longer following a path. Your completed lessons and saved lessons are unchanged.') }}>Stop following this path</button>
      </>}
      <button type="button" className="button button-quiet" onClick={() => route.navigate('explore')}>Explore learning paths<ArrowUpRight size={18} aria-hidden="true"/></button>
    </section>

    <section id={`${prefix}-learning-section`} tabIndex={-1} className="panel settings-section" aria-label="Learning progress">
      <SectionHeading title="Your learning"/>
      <p className="section-description">Learning history since <time dateTime={state.joined}>{formatLocalDate(state.joined)}</time>, stored in this browser.</p>
      <dl className="stats-grid">
        <div><dt className="stat-label">Total XP</dt><dd className="stat-value">{state.xp.toLocaleString()}</dd></div>
        <div><dt className="stat-label">Lessons completed</dt><dd className="stat-value">{Object.keys(state.completed).length.toLocaleString()}</dd></div>
        <div><dt className="stat-label">Saved lessons</dt><dd className="stat-value">{savedCount.toLocaleString()}</dd></div>
        <div><dt className="stat-label">Current streak</dt><dd className="stat-value">{activeStreak} {activeStreak === 1 ? 'day' : 'days'}</dd></div>
      </dl>
      <h3>Level {level.level}: {level.title}</h3>
      <ProgressBar value={state.xp % 200} max={200} label={`${state.xp % 200} of 200 XP toward level ${level.level + 1}`}/>
      <p className="field-hint">{level.next - state.xp} XP to level {level.level + 1}. Completing lessons and recording reviews adds XP.</p>
    </section>

    <section className="panel settings-section" aria-label="Recent learning activity">
      <SectionHeading title="The last 28 days"/>
      <p className="section-description">{formatLocalDate(activityDays[0].date)} to {formatLocalDate(library.today)}. Each count is a lesson completed or a review recorded, using local calendar dates.</p>
      <div className="activity-grid" role="group" aria-label="Daily learning activity for the last 28 local days">
        {activityDays.map(({ date, count }) => {
          const label = `${formatLocalDate(date)}: ${count} learning ${count === 1 ? 'activity' : 'activities'}${date === library.today ? ', today' : ''}`
          return <div key={date} className={`activity-day${count > 0 ? ' is-active' : ''}`} role="img" aria-label={label} title={label}>
            <span aria-hidden="true">{Number(date.slice(-2))}</span>
            <span aria-hidden="true">{count}</span>
          </div>
        })}
      </div>
      <p className="field-hint">{activityTotal === 0 ? 'No learning activity recorded in these 28 days yet.' : `${activityTotal} learning ${activityTotal === 1 ? 'activity' : 'activities'} recorded in these 28 days.`} Zero means no activity was recorded that day.</p>
    </section>

    <section className="panel settings-section" aria-label="Recent completions">
      <SectionHeading title="Recent completions"/>
      {recentCompletions.length ? <>
        <p className="section-description">Up to six lessons, ordered by completion date. Reviews are included in the activity counts above.</p>
        <ul className="lesson-list">
          {recentCompletions.map(([id, completion]) => {
            const lesson = library.getLesson(id)
            return <li className="collection-item" key={id}>
              {lesson ? <button type="button" className="button button-quiet" onClick={() => route.setParam('lesson', id)}>{lesson.title}<ArrowUpRight size={18} aria-hidden="true"/></button> : <span>Completed lesson no longer available</span>}
              <time dateTime={completion.date}>{formatLocalDate(completion.date)}</time>
            </li>
          })}
        </ul>
      </> : <EmptyState title="No completed lessons yet" action="Explore lessons" onAction={() => route.navigate('explore')} symbol="">Finish a lesson to record it here. Your completion history stays in this browser.</EmptyState>}
    </section>

    <section id={`${prefix}-backup-section`} tabIndex={-1} className="panel settings-section" aria-label="Backups and clearing data">
      <SectionHeading title="Backups and local data"/>
      <p className="section-description" id={`${prefix}-backup-hint`}>Export before importing a backup or clearing data. Backups include progress, saved lessons, notes, collections, preferences and retained discoveries. Imports replace your current library, rather than merging it.</p>
      <p className="field-hint">Choose an exported UNSCROLL JSON backup smaller than 20 MB. Files are validated locally before replacement. A backup contains your notes and nickname as readable text, so store it somewhere private.</p>
      <div className="form-row" role="group" aria-label="Backup actions" aria-busy={backupAction !== null}>
        <button type="button" className="button button-primary" disabled={disabled} aria-describedby={`${prefix}-backup-hint ${backupFeedbackId}`} onClick={() => { void runBackupAction('export', library.exportBackup, 'Backup download requested. Check your browser downloads before clearing any data.') }}><Download size={18} aria-hidden="true"/>{backupAction === 'export' ? 'Preparing backup...' : 'Export backup'}</button>
        <button type="button" className="button button-quiet" disabled={disabled} aria-describedby={`${prefix}-backup-hint ${backupFeedbackId}`} onClick={chooseBackup}><Upload size={18} aria-hidden="true"/>{backupAction === 'import' ? 'Importing backup...' : 'Import backup'}</button>
        <input ref={fileInput} type="file" accept=".json,application/json" aria-label="Choose an UNSCROLL JSON backup" hidden disabled={disabled} onChange={importBackup}/>
      </div>
      <h3>Clear progress</h3>
      <p className="section-description" id={`${prefix}-reset-hint`}>This removes progress, saved lessons, notes, collections, preferences and downloaded discoveries from this browser. Export a backup first. You cannot undo this without a backup.</p>
      <button type="button" className="button button-danger" disabled={disabled} aria-describedby={`${prefix}-reset-hint ${backupFeedbackId}`} onClick={clearProgress}><Trash2 size={18} aria-hidden="true"/>{backupAction === 'reset' ? 'Clearing data...' : 'Clear progress and library'}</button>
      <InlineNotice id={backupFeedbackId} notice={backupNotice}/>
      <InlineNotice id={`${prefix}-storage-error`} notice={library.fatal || library.storageError ? { kind: 'error', message: library.fatal || library.storageError } : null}/>
    </section>

    <section id={`${prefix}-offline-section`} tabIndex={-1} className="panel settings-section" aria-label="Offline library and updates">
      <AppStatus status={appStatus} online={install.online}/>
    </section>

    <section className="panel settings-section" aria-label="Browser storage protection">
      <SectionHeading title="Protect browser storage"/>
      <p className="section-description">Ask the browser to keep this site's data when it frees storage space. It may deny the request. This does not replace a backup or prevent you from clearing site data.</p>
      {supportsPersistence ? <button type="button" className="button button-quiet" disabled={disabled || requestingPersistence || persistenceGranted === true} onClick={() => { void requestPersistence() }}><ShieldCheck size={18} aria-hidden="true"/>{requestingPersistence ? 'Requesting protection...' : persistenceGranted === true ? 'Storage protection granted' : 'Request storage protection'}</button> : <p className="field-hint">This browser does not offer storage protection requests. Export backups to keep a copy of your library.</p>}
      <InlineNotice id={`${prefix}-persistence-feedback`} notice={persistenceNotice}/>
    </section>

    <section id={`${prefix}-install-section`} tabIndex={-1} className="panel settings-section" aria-label="Install UNSCROLL">
      <SectionHeading title="Install UNSCROLL"/>
      {standalone ? <p className="section-description">UNSCROLL is running in standalone app mode.</p> : install.installed ? <p className="section-description">Installation has been accepted or reported by your browser. Look for UNSCROLL on your home screen or in your app launcher.</p> : install.available ? <>
        <p className="section-description">Your browser offers installation. Add UNSCROLL to open it from your home screen or app launcher.</p>
        <button type="button" className="button button-primary" disabled={installing} onClick={() => { void requestInstall() }}><Smartphone size={18} aria-hidden="true"/>{installing ? 'Waiting for browser...' : 'Install UNSCROLL'}</button>
      </> : <>
        <p className="section-description">There is no install prompt available in this browser. Use the steps for your device if its browser offers installation.</p>
        <h3>iPhone or iPad</h3>
        <ol className="install-steps">
          <li>Open UNSCROLL in Safari.</li>
          <li>Tap Share, then Add to Home Screen.</li>
          <li>Tap Add to confirm.</li>
        </ol>
        <h3>Android</h3>
        <ol className="install-steps">
          <li>Open UNSCROLL in Chrome.</li>
          <li>Open Chrome's menu and choose Install app or Add to Home screen if offered.</li>
          <li>Follow Chrome's prompts. Some browsers offer a shortcut rather than an installed app.</li>
        </ol>
        <p className="field-hint">On a computer, look for the install option in Chrome or Edge's address bar or menu. If installation is unavailable, keep using UNSCROLL in your browser.</p>
      </>}
      <p className="field-hint">Original lessons work offline after the app has loaded and cached its files. Fetching new discoveries and opening external source pages still needs an internet connection.</p>
      <InlineNotice id={`${prefix}-install-feedback`} notice={installNotice}/>
    </section>

    <section id={`${prefix}-privacy-section`} tabIndex={-1} className="panel settings-section" aria-label="Privacy and sources">
      <button type="button" className="button button-quiet" onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); onSetup() }}>How UNSCROLL works</button>
      <h2>Moving to another phone?</h2>
      <ol className="install-steps"><li>Export a backup from this browser and keep it somewhere private.</li><li>Open the same site in the new phone's browser, then import that backup in You.</li><li>Check your notes and saved lessons before clearing anything from the old device.</li></ol>
      <p className="field-hint">An installed app can use different storage from a browser tab, especially on iOS. Check before switching. UNSCROLL never silently merges two libraries.</p>
      <details>
        <summary>Privacy, sources and licenses</summary>
        <h3>Your data</h3>
        <p>UNSCROLL has no learning account or cloud sync. Your nickname, notes, interests, progress, saved lessons and collections stay in this browser. Backup files are read and written locally. A privately hosted site can require a separate Netlify sign-in before online access.</p>
        <p>Daily discoveries are downloaded from the content service. Network requests and external source links expose ordinary connection information to their hosts, but do not send your notes, preferences or progress. External sites have their own privacy policies.</p>
        <h3>Offline reading</h3>
        <p>Original lessons work offline once the app's files are cached. Saved discoveries are retained locally and included in backups. External source pages are not cached by UNSCROLL and need an internet connection.</p>
        <h3>Sources and licenses</h3>
        <p>Original UNSCROLL lessons link to supporting sources. Those source pages retain their own copyrights and licenses; a link does not grant permission to reuse their content.</p>
        <p>Wikipedia extracts are external reference material, credited to Wikipedia contributors under Creative Commons Attribution-ShareAlike (CC BY-SA). Each discovery includes its attribution, license link and article history. Follow the linked license terms when sharing or adapting an extract.</p>
        <h3>Educational use</h3>
        <p>Lessons are educational, not personal financial, medical or mental health advice. They do not diagnose conditions or replace advice from a qualified professional.</p>
      </details>
    </section>
  </>
}