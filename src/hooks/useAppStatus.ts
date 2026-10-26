import { useCallback, useEffect, useRef, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { emptyOfflineStatus, inspectOfflineLibrary } from '../lib/offline'
import type { OfflineStatus } from '../lib/offline'
import { readPublishedAppVersion, SiteSignInRequired, waitForWorkerActivation } from '../lib/app-update'

export function useAppStatus(flushStorage: () => Promise<void>) {
  const [offline, setOffline] = useState<OfflineStatus>(emptyOfflineStatus)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration>()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [checking, setChecking] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [applying, setApplying] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [signInRequired, setSignInRequired] = useState(false)
  const flush = useRef(flushStorage)
  const inspectLock = useRef(false)
  const inspectAgain = useRef(false)
  const inspection = useRef<Promise<void> | null>(null)
  const reloadPending = useRef(false)
  const reloadStarted = useRef(false)
  const lastUpdateCheck = useRef(0)
  const resumedCheck = useRef<() => Promise<void>>(async () => {})
  const updateLock = useRef(false)
  const checkLock = useRef(false)
  const mounted = useRef(true)
  useEffect(() => { flush.current = flushStorage }, [flushStorage])
  useEffect(() => { mounted.current = true; return () => { mounted.current = false } }, [])

  const { needRefresh: [needRefresh], offlineReady: [installed], updateServiceWorker } = useRegisterSW({
    onRegisteredSW(_url, worker) { setRegistration(worker) },
    onRegisterError() {
      setOffline({ ...emptyOfflineStatus, state: 'unavailable', message: 'Offline setup could not finish. Reconnect and reload to retry; your saved learning data is not cleared.' })
    },
    onNeedReload() { void reloadWhenReady() },
  })

  async function reloadWhenReady() {
    if (reloadStarted.current) return
    reloadStarted.current = true
    reloadPending.current = true
    inspectAgain.current = false
    setApplying(true)
    try {
      // A controlling worker can still be activating on WebKit. Do not tear down
      // its old document while our cache inventory is being inspected either.
      await inspection.current
      await waitForWorkerActivation(navigator.serviceWorker.controller)
      await flush.current()
      window.location.reload()
    } catch (failure) {
      reloadStarted.current = false
      reloadPending.current = false
      updateLock.current = false
      setApplying(false)
      setError(failure instanceof Error ? failure.message : 'Export a backup before reloading. Some changes are not saved.')
    }
  }

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    let previous = navigator.serviceWorker.controller
    const changed = () => {
      const next = navigator.serviceWorker.controller
      const replacingController = Boolean(previous && next && previous !== next)
      previous = next
      // Workbox's isUpdate flag can remain false in the document that installed
      // the first worker. Observe actual replacement, not that initial flag.
      if (replacingController) void reloadWhenReady()
    }
    navigator.serviceWorker.addEventListener('controllerchange', changed)
    return () => navigator.serviceWorker.removeEventListener('controllerchange', changed)
  }, [])

  const verifyOffline = useCallback(async function inspect() {
    if (reloadPending.current || !mounted.current) return
    if (inspectLock.current) { inspectAgain.current = true; return }
    inspectLock.current = true
    setVerifying(true)
    const work = (async () => {
      try {
        const result = await inspectOfflineLibrary(__UNSCROLL_BUILD__)
        if (mounted.current && !reloadPending.current) setOffline(result)
      } catch (failure) {
        if (mounted.current && !reloadPending.current) setOffline((previous) => ({ ...previous, state: 'incomplete', message: failure instanceof Error ? failure.message : 'Offline files could not be checked. Your learning data has not changed.' }))
      }
    })()
    inspection.current = work
    try { await work } finally {
      if (inspection.current === work) inspection.current = null
      inspectLock.current = false
      if (mounted.current) {
        setVerifying(false)
        if (inspectAgain.current && !reloadPending.current) { inspectAgain.current = false; void inspect() }
      }
    }
  }, [])

  useEffect(() => {
    if (!('serviceWorker' in navigator)) { queueMicrotask(() => { void verifyOffline() }); return }
    if (!registration) return
    queueMicrotask(() => { void verifyOffline() })
    const previouslyControlled = Boolean(navigator.serviceWorker.controller)
    const changed = (event: Event) => {
      if (event.type === 'controllerchange' && previouslyControlled) return
      void verifyOffline()
    }
    const worker = registration.installing
    const active = registration.active
    worker?.addEventListener('statechange', changed)
    active?.addEventListener('statechange', changed)
    navigator.serviceWorker.addEventListener('controllerchange', changed)
    window.addEventListener('focus', changed)
    window.addEventListener('online', changed)
    // Going offline keeps the last verified inventory. Starting a Cache API scan
    // just before an offline reload can race WebKit's old-document teardown.
    return () => { worker?.removeEventListener('statechange', changed); active?.removeEventListener('statechange', changed); navigator.serviceWorker.removeEventListener('controllerchange', changed); window.removeEventListener('focus', changed); window.removeEventListener('online', changed) }
  }, [registration, installed, verifyOffline])

  useEffect(() => { resumedCheck.current = checkForUpdates })
  useEffect(() => {
    const resume = () => {
      if (document.visibilityState !== 'visible' || !navigator.onLine || !registration) return
      if (Date.now() - lastUpdateCheck.current < 60_000) return
      void resumedCheck.current()
    }
    window.addEventListener('focus', resume)
    window.addEventListener('online', resume)
    document.addEventListener('visibilitychange', resume)
    return () => { window.removeEventListener('focus', resume); window.removeEventListener('online', resume); document.removeEventListener('visibilitychange', resume) }
  }, [registration])

  async function checkForUpdates() {
    if (checkLock.current || updateLock.current) return
    if (!navigator.onLine) { setMessage('You are offline. Reconnect to check for a new app version.'); return }
    if (!registration) { setMessage('Offline setup is unavailable in this tab. Reload online to try again.'); return }
    checkLock.current = true
    lastUpdateCheck.current = Date.now()
    setChecking(true)
    setError('')
    setMessage('Checking for an app update...')
    try {
      const published = await readPublishedAppVersion()
      setSignInRequired(false)
      await registration.update()
      setDismissed(false)
      setMessage(registration.waiting ? 'An update is ready to install.' : registration.installing ? 'A new version is downloading. You can keep reading.'
        : published.build === __UNSCROLL_BUILD__ ? 'Update check finished. This app matches the published build.'
          : 'A newer build is published, but no update is ready yet. Keep the app open online, or use the update recovery page.')
      await verifyOffline()
    } catch (failure) {
      setSignInRequired(failure instanceof SiteSignInRequired)
      setMessage(failure instanceof Error ? failure.message : 'The update check could not finish. Check your connection and private-site sign-in, then try again.')
    } finally { checkLock.current = false; setChecking(false) }
  }

  async function applyUpdate() {
    if (updateLock.current || !needRefresh) return
    updateLock.current = true
    setApplying(true)
    setError('')
    try {
      const waiting = registration?.waiting
      if (!waiting) throw new Error('The downloaded update is no longer waiting. Check for updates again or open update recovery.')
      reloadPending.current = true
      inspectAgain.current = false
      await inspection.current
      await flush.current()
      await updateServiceWorker(true)
      await waitForWorkerActivation(waiting)
    } catch (failure) {
      reloadPending.current = false
      updateLock.current = false
      setApplying(false)
      setError(failure instanceof Error ? failure.message : 'The update could not be applied. Export a backup before reloading.')
    }
  }

  return { offline, needRefresh, showUpdate: needRefresh && !dismissed, error, message, signInRequired, checking, verifying, applying,
    verifyOffline, checkForUpdates, applyUpdate, dismissUpdate: () => setDismissed(true) }
}

export type AppStatus = ReturnType<typeof useAppStatus>