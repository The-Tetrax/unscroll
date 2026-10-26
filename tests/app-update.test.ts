import { afterEach, describe, expect, it, vi } from 'vitest'
import { appVersionSchema, readPublishedAppVersion, SiteSignInRequired, waitForWorkerActivation } from '../src/lib/app-update'

afterEach(() => { vi.unstubAllGlobals(); vi.useRealTimers() })

const version = { build: 'abc123-20300615120000', builtAt: '2030-06-15T12:00:00.000Z', lessons: 544, illustrations: 604 }

describe('published app version access', () => {
  it('uses a network-only same-origin GET without sending library data', async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify(version), { headers: { 'Content-Type': 'application/json' } }))
    vi.stubGlobal('fetch', fetcher)
    expect(await readPublishedAppVersion()).toEqual(version)
    expect(fetcher).toHaveBeenCalledWith('/api/app-version.json', expect.objectContaining({ cache: 'no-store', credentials: 'same-origin', redirect: 'manual', headers: { Accept: 'application/json' } }))
    expect(fetcher.mock.calls[0][1]).not.toHaveProperty('body')
  })
  it.each([401, 403])('identifies HTTP %i as sign-in-required instead of current', async (status) => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Sign in', { status })))
    await expect(readPublishedAppVersion()).rejects.toBeInstanceOf(SiteSignInRequired)
  })
  it('rejects login HTML even with HTTP 200', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('<h1>Sign in</h1>', { headers: { 'Content-Type': 'text/html' } })))
    await expect(readPublishedAppVersion()).rejects.toThrow('could not be checked')
  })
  it('rejects an oversized response and cancels its reader', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(' '.repeat(8193), { headers: { 'Content-Type': 'application/json' } })))
    await expect(readPublishedAppVersion()).rejects.toThrow('too large')
  })
  it.each([{ ...version, build: '<unsafe>' }, { ...version, lessons: -1 }, { ...version, builtAt: 'yesterday' }])('rejects invalid published metadata %j', (value) => {
    expect(appVersionSchema.safeParse(value).success).toBe(false)
  })
})

class TestWorker extends EventTarget {
  state: ServiceWorkerState = 'activating'
  transition(state: ServiceWorkerState) { this.state = state; this.dispatchEvent(new Event('statechange')) }
}

describe('worker activation barrier', () => {
  it('does not resolve while the controller is still activating', async () => {
    const worker = new TestWorker()
    let finished = false
    const result = waitForWorkerActivation(worker as unknown as ServiceWorker).then(() => { finished = true })
    await Promise.resolve()
    expect(finished).toBe(false)
    worker.transition('activated')
    await result
    expect(finished).toBe(true)
  })
  it('accepts an already activated worker', async () => {
    const worker = new TestWorker()
    worker.transition('activated')
    await expect(waitForWorkerActivation(worker as unknown as ServiceWorker)).resolves.toBeUndefined()
  })
  it('refuses a replaced worker without approving reload', async () => {
    const worker = new TestWorker()
    const result = waitForWorkerActivation(worker as unknown as ServiceWorker)
    worker.transition('redundant')
    await expect(result).rejects.toThrow('replaced or failed')
  })
  it('times out without pretending activation completed', async () => {
    vi.useFakeTimers()
    const worker = new TestWorker()
    const check = expect(waitForWorkerActivation(worker as unknown as ServiceWorker, 100)).rejects.toThrow('not finished activating')
    await vi.advanceTimersByTimeAsync(100)
    await check
  })
  it('requires an actual controlling worker', async () => {
    await expect(waitForWorkerActivation(null)).rejects.toThrow('No app worker')
  })
})