import { useEffect, useRef, useState } from 'react'
import { MotionConfig } from 'motion/react'
import { Bookmark, Compass, Download, House, RotateCcw, UserRound, WifiOff, Zap } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { useLibrary } from './hooks/useLibrary'
import { useRoute } from './hooks/useRoute'
import { useInstall } from './hooks/useInstall'
import { Brand } from './components/shared'
import { Today } from './components/Today'
import { Explore } from './components/Explore'
import { Vault } from './components/Vault'
import { Review } from './components/Review'
import { Profile } from './components/Profile'
import { Reader } from './components/Reader'
import { downloadRecovery } from './lib/storage'
import { dueReviewIds } from './lib/learning'
import type { Page } from './types'
import './App.css'

const navigation = [
  { id: 'today', label: 'Today', icon: House },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'vault', label: 'Vault', icon: Bookmark },
  { id: 'review', label: 'Recall', icon: RotateCcw },
  { id: 'profile', label: 'You', icon: UserRound },
] as const

export default function App() {
  const library = useLibrary()
  const route = useRoute()
  const install = useInstall()
  const main = useRef<HTMLElement>(null)
  const [recoveryError, setRecoveryError] = useState('')
  const [workerError, setWorkerError] = useState('')
  const { needRefresh: [needRefresh, setNeedRefresh], offlineReady: [offlineReady], updateServiceWorker } = useRegisterSW({
    onRegisterError() { setWorkerError('Offline setup could not finish. Keep your connection on and reload to retry.') },
  })

  useEffect(() => {
    document.documentElement.dataset.motion = library.state.reducedMotion ? 'reduce' : 'full'
  }, [library.state.reducedMotion])
  useEffect(() => {
    const titles: Record<Page, string> = { today: 'Your daily learning', explore: 'Explore your curiosity', vault: 'Your saved ideas', review: 'Make it stick', profile: 'Your space' }
    document.title = `${titles[route.page]} | UNSCROLL`
    window.scrollTo({ top: 0 })
    main.current?.focus({ preventScroll: true })
  }, [route.page])

  const activeLesson = route.params.get('lesson') ? library.getLesson(route.params.get('lesson')!) : undefined
  const reviewMode = route.params.get('mode') === 'review'
  const reviewQueue = (route.params.get('session') ?? '').split(',').filter(Boolean).slice(0, 10)
  const due = dueReviewIds(library.state, library.today)
  const nextId = reviewMode
    ? reviewQueue.find((id) => id !== activeLesson?.id && due.includes(id))
    : library.state.daily.ids.find((id) => id !== activeLesson?.id && !library.state.completed[id])
  const showNext = reviewMode ? Boolean(nextId) : route.page === 'today' && Boolean(nextId) && library.state.daily.ids.includes(activeLesson?.id ?? '')
  const closeReader = () => {
    const params = Object.fromEntries(route.params)
    delete params.lesson; delete params.mode; delete params.session
    route.navigate(route.page, params, true)
  }

  if (library.fatal) return <main className="recovery-screen"><Brand/><h1>Your data is still here.</h1><p role="alert">{library.fatal}</p><div className="form-row"><button type="button" className="button button-primary" onClick={() => { void downloadRecovery().catch(() => setRecoveryError('Recovery download failed. Keep this browser data until a backup is available.')) }}>Download recovery data</button><label className="button button-quiet">Restore a backup<input type="file" accept="application/json,.json" className="sr-only" onChange={(event) => { const file = event.target.files?.[0]; if (file) void library.importBackup(file).catch((error: Error) => setRecoveryError(error.message)) }}/></label></div><button type="button" className="text-action" onClick={() => { if (window.confirm('Erase the unreadable local data and start over? Download recovery data first.')) void library.reset().catch((error: Error) => setRecoveryError(error.message)) }}>Reset after backing up</button><p className="error-message" role="status">{recoveryError}</p></main>
  if (!library.ready) return <main className="loading-screen"><Brand/><p role="status">Opening your library…</p></main>

  return <MotionConfig reducedMotion={library.state.reducedMotion ? 'always' : 'user'}>
    <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); main.current?.focus() }}>Skip to content</a>
    <header className="app-header"><div className="header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(({ id, label, icon: Icon }) => <a href={`#/${id}`} key={id} className={route.page === id ? 'is-active' : ''} aria-current={route.page === id ? 'page' : undefined}><Icon size={17} aria-hidden="true"/>{label}</a>)}</nav><div className="header-end"><span className="xp-label"><Zap size={16} fill="currentColor" aria-hidden="true"/>{library.state.xp} XP</span><button type="button" className="profile-button" aria-label="Your profile and settings" onClick={() => route.navigate('profile')}>{library.state.name ? library.state.name.charAt(0).toUpperCase() : <UserRound size={18} aria-hidden="true"/>}</button></div></div></header>
    <main id="main" ref={main} tabIndex={-1} className="app-main">
      {!install.online && <div className="connectivity-notice" role="status"><WifiOff size={17} aria-hidden="true"/>Offline. Your downloaded library and saved ideas are here.</div>}
      {library.storageError && <div className="error-message" role="alert">{library.storageError}<button type="button" className="text-action" onClick={() => { void library.exportBackup().catch(() => {}) }}>Export backup</button></div>}
      {workerError && <p className="inline-notice" role="status">{workerError}</p>}
      {needRefresh && <div className="update-notice" role="status"><span>A new version is ready. Your saved data stays.</span><button type="button" className="button button-primary" onClick={() => { void updateServiceWorker(true) }}>Update app</button><button type="button" className="text-action" onClick={() => setNeedRefresh(false)}>Later</button></div>}
      {route.params.has('lesson') && !activeLesson && <div className="inline-notice" role="status">This bite is not on this device. External discoveries must be downloaded first.<button type="button" className="text-action" onClick={closeReader}>Dismiss</button></div>}
      {route.page === 'today' && <Today library={library} route={route}/>}
      {route.page === 'explore' && <Explore library={library} route={route}/>}
      {route.page === 'vault' && <Vault library={library} route={route}/>}
      {route.page === 'review' && <Review library={library} route={route}/>}
      {route.page === 'profile' && <Profile library={library} route={route} install={install}/>}
      <footer className="app-footer"><Brand compact/><span>Made for your attention, not to take it.</span><button type="button" className="text-action" onClick={() => route.navigate('profile')}>{offlineReady || install.installed ? 'Offline-ready library' : <><Download size={15} aria-hidden="true"/>Put it on your phone</>}</button></footer>
    </main>
    <nav className="mobile-nav" aria-label="Main navigation">{navigation.map(({ id, label, icon: Icon }) => <a href={`#/${id}`} key={id} className={route.page === id ? 'is-active' : ''} aria-current={route.page === id ? 'page' : undefined}><span><Icon size={22} strokeWidth={route.page === id ? 2.4 : 1.8} aria-hidden="true"/>{id === 'review' && due.length > 0 && <span className="nav-count" aria-label={`${due.length} due`}>{Math.min(99, due.length)}</span>}</span><span>{label}</span></a>)}</nav>
    {activeLesson && <Reader key={`${activeLesson.id}:${reviewMode}`} lesson={activeLesson} library={library} reviewMode={reviewMode} onClose={closeReader} onNext={showNext ? () => route.setParam('lesson', nextId!, true) : undefined} nextLabel={reviewMode ? 'Next recall' : 'Next bite'}/>}
  </MotionConfig>
}
