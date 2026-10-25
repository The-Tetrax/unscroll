import { useCallback, useEffect, useRef, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { emptyOfflineStatus, inspectOfflineLibrary } from '../lib/offline'
import type { OfflineStatus } from '../lib/offline'

export function useAppStatus(flushStorage: () => Promise<void>, online: boolean) {
  const [offline, setOffline] = useState<OfflineStatus>(emptyOfflineStatus)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration>()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [checking, setChecking] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [applying, setApplying] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const flush = useRef(flushStorage)
  const inspectLock = useRef(false)
  const inspectAgain = useRef(false)
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
    onNeedReload() {
      // A different tab may have requested activation. Do not reload over unsaved work.
      void flush.current().then(() => window.location.reload()).catch((failure: unknown) => {
        setApplying(false)
        setError(failure instanceof Error ? failure.message : 'Export a backup before reloading. Some changes are not saved.')
      })
    },
  })

  const verifyOffline = useCallback(async function inspect() {
    if (inspectLock.current) { inspectAgain.current = true; return }
    inspectLock.current = true
    setVerifying(true)
    try {
      const result = await inspectOfflineLibrary(__UNSCROLL_BUILD__)
      if (mounted.current) setOffline(result)
    } catch (failure) {
      if (mounted.current) setOffline((previous) => ({ ...previous, state: 'incomplete', message: failure instanceof Error ? failure.message : 'Offline files could not be checked. Your learning data has not changed.' }))
    } finally {
      inspectLock.current = false
      if (mounted.current) {
        setVerifying(false)
        if (inspectAgain.current) { inspectAgain.current = false; void inspect() }
      }
    }
  }, [])

  useEffect(() => {
    if (!('serviceWorker' in navigator)) { queueMicrotask(() => { void verifyOffline() }); return }
    if (!registration) return
    queueMicrotask(() => { void verifyOffline() })
    const changed = () => { void verifyOffline() }
    const worker = registration.installing
    worker?.addEventListener('statechange', changed)
    navigator.serviceWorker.addEventListener('controllerchange', changed)
    window.addEventListener('focus', changed)
    window.addEventListener('online', changed)
    // Going offline keeps the last verified inventory. Starting a Cache API scan
    // just before an offline reload can race WebKit's old-document teardown.
    return () => { worker?.removeEventListener('statechange', changed); navigator.serviceWorker.removeEventListener('controllerchange', changed); window.removeEventListener('focus', changed); window.removeEventListener('online', changed) }
  }, [registration, installed, verifyOffline])

  async function checkForUpdates() {
    if (checkLock.current || updateLock.current) return
    if (!online) { setMessage('You are offline. Reconnect to check for a new app version.'); return }
    if (!registration) { setMessage('Offline setup is unavailable in this tab. Reload online to try again.'); return }
    checkLock.current = true
    setChecking(true)
    setError('')
    setMessage('Checking for an app update...')
    try {
      await registration.update()
      setDismissed(false)
      setMessage(registration.waiting ? 'An update is ready to install.' : registration.installing ? 'A new version is downloading. You can keep reading.' : 'Update check finished. No new version was reported.')
      await verifyOffline()
    } catch {
      setMessage('The update check could not finish. Check your connection and private-site sign-in, then try again.')
    } finally { checkLock.current = false; setChecking(false) }
  }

  async function applyUpdate() {
    if (updateLock.current || !needRefresh) return
    updateLock.current = true
    setApplying(true)
    setError('')
    try {
      await flush.current()
      await updateServiceWorker(true)
    } catch (failure) {
      setApplying(false)
      setError(failure instanceof Error ? failure.message : 'The update could not be applied. Export a backup before reloading.')
    } finally { updateLock.current = false }
  }

  return { offline, needRefresh, showUpdate: needRefresh && !dismissed, error, message, checking, verifying, applying,
    verifyOffline, checkForUpdates, applyUpdate, dismissUpdate: () => setDismissed(true) }
}

export type AppStatus = ReturnType<typeof useAppStatus>