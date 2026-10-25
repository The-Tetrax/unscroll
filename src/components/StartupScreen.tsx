import { useEffect, useState } from 'react'
import { Brand } from './shared'

export function StartupScreen() {
  const [slow, setSlow] = useState(false)
  useEffect(() => { const timer = setTimeout(() => setSlow(true), 12000); return () => clearTimeout(timer) }, [])
  return <main className="loading-screen startup-screen" aria-busy={!slow}>
    <Brand/>
    <div className="startup-pages" aria-hidden="true"><span/><span/><span/></div>
    <h1>Your ideas, ready when you are.</h1>
    <p role="status">{slow ? 'The library is taking longer to open. Your saved data has not been cleared.' : 'Opening your local library...'}</p>
    <p className="field-hint">Notes and progress stay in this browser. No learning account to sync.</p>
    {slow && <button type="button" className="button button-quiet" onClick={() => window.location.reload()}>Reload without clearing data</button>}
  </main>
}