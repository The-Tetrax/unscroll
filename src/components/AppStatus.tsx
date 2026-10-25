import { Check, Download, RefreshCw, WifiOff } from 'lucide-react'
import type { AppStatus as Status } from '../hooks/useAppStatus'
import { ProgressBar, SectionHeading } from './shared'

export function AppStatus({ status, online }: { status: Status; online: boolean }) {
  const { offline } = status
  return <>
    <SectionHeading title="Offline library and updates"/>
    <p className="offline-state" role="status">{offline.state === 'ready' ? <Check size={22} aria-hidden="true"/> : online ? <Download size={22} aria-hidden="true"/> : <WifiOff size={22} aria-hidden="true"/>}<strong>{offline.state === 'ready' ? 'Ready for offline reading' : offline.state === 'checking' ? 'Checking offline files' : offline.state === 'preparing' ? 'Preparing the offline library' : 'Offline setup needs attention'}</strong></p>
    <p className="section-description">{offline.message}</p>
    {offline.total > 0 && <><p className="field-hint">{offline.cached} of {offline.total} required files found. {offline.lessons} lessons and {offline.illustrations} diagrams. About {(offline.bytes / 1024 / 1024).toFixed(1)} MB before compression.</p><ProgressBar value={offline.cached} max={offline.total} label="Offline files stored"/></>}
    <p className="field-hint">This checks app files, not a backup of your notes. New discoveries and external source pages still need a connection. Removing browser data removes both the download and your local learning history.</p>
    <div className="form-row"><button type="button" className="button button-quiet" disabled={status.verifying} onClick={() => { void status.verifyOffline() }}><Download size={18} aria-hidden="true"/>{status.verifying ? 'Checking files...' : 'Check offline files'}</button><button type="button" className="button button-quiet" disabled={status.checking || status.applying} onClick={() => { void status.checkForUpdates() }}><RefreshCw size={18} aria-hidden="true"/>{status.checking ? 'Checking for updates...' : 'Check for updates'}</button></div>
    {status.needRefresh && <p className="update-control">A downloaded update is ready. <button type="button" className="button button-primary" disabled={status.applying} onClick={() => { void status.applyUpdate() }}>{status.applying ? 'Saving before update...' : 'Install downloaded update'}</button></p>}
    <p className="inline-notice" role="status">{status.message}</p>
    {status.error && <p className="error-message" role="alert">{status.error}</p>}
    <dl className="build-details"><div><dt>Content edition</dt><dd>Illustrated lessons, guided-v1</dd></div><div><dt>App build</dt><dd>{__UNSCROLL_BUILD__}</dd></div><div><dt>Built</dt><dd><time dateTime={__UNSCROLL_BUILT_AT__}>{new Date(__UNSCROLL_BUILT_AT__).toLocaleString()}</time></dd></div></dl>
  </>
}