import { z } from 'zod'

export const appVersionSchema = z.object({
  build: z.string().regex(/^[A-Za-z0-9][A-Za-z0-9._:+-]{0,159}$/),
  builtAt: z.string().datetime(),
  lessons: z.number().int().positive().max(10000),
  illustrations: z.number().int().positive().max(10000),
}).strict()

export class SiteSignInRequired extends Error {
  constructor() { super('The private site needs a fresh sign-in before it can download updates. Your existing offline library is still here.') }
}

export async function readPublishedAppVersion() {
  const response = await fetch('/api/app-version.json', { cache: 'no-store', credentials: 'same-origin',
    redirect: 'manual', headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(8000) })
  if (response.status === 401 || response.status === 403 || response.type === 'opaqueredirect') {
    await response.body?.cancel()
    throw new SiteSignInRequired()
  }
  if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
    await response.body?.cancel()
    throw new Error('The published version could not be checked. Use the update recovery page to check your connection and site sign-in.')
  }
  if (!response.body) throw new Error('The published version response was empty.')
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let bytes = 0, text = ''
  try {
    while (true) {
      const part = await reader.read()
      if (part.done) break
      bytes += part.value.byteLength
      if (bytes > 8192) throw new Error('The published version response was too large.')
      text += decoder.decode(part.value, { stream: true })
    }
    return appVersionSchema.parse(JSON.parse(text + decoder.decode()))
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock() }
}

export function waitForWorkerActivation(worker: ServiceWorker | null, timeout = 20000): Promise<void> {
  if (!worker) return Promise.reject(new Error('No app worker controls this page yet. Open the update recovery page.'))
  return new Promise((resolve, reject) => {
    const finish = (error?: Error) => {
      clearTimeout(timer)
      worker.removeEventListener('statechange', inspect)
      if (error) reject(error); else resolve()
    }
    const inspect = () => {
      if (worker.state === 'activated') finish()
      else if (worker.state === 'redundant') finish(new Error('The new app worker was replaced or failed. Your library is unchanged. Try checking for updates again.'))
    }
    const timer = setTimeout(() => finish(new Error('The downloaded update has not finished activating. Your data has not been cleared. Try the update recovery page.')), timeout)
    worker.addEventListener('statechange', inspect)
    inspect()
  })
}