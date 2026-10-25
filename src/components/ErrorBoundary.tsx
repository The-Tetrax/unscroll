import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { downloadRecovery } from '../lib/storage'

export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean; message: string }> {
  state = { failed: false, message: '' }

  static getDerivedStateFromError() { return { failed: true, message: '' } }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // No error telemetry: exceptions may contain a user's local note text.
  }

  render() {
    if (!this.state.failed) return this.props.children
    return <main className="recovery-screen"><h1>The app needs a fresh start.</h1><p>Your saved data has not been cleared. Reload first. If the problem continues, keep a recovery copy before changing browser data.</p><div className="form-row"><button type="button" className="button button-primary" onClick={() => window.location.reload()}>Reload UNSCROLL</button><button type="button" className="button button-quiet" onClick={() => { void downloadRecovery().catch(() => this.setState({ message: 'The recovery download could not finish. Keep this site’s browser data and try again.' })) }}>Download recovery data</button></div><p className="error-message" role="status">{this.state.message}</p></main>
  }
}