import { z } from 'zod'

export const offlineManifestSchema = z.object({
  build: z.string().min(1).max(120),
  builtAt: z.string().datetime(),
  lessons: z.number().int().min(1).max(10000),
  illustrations: z.number().int().min(1).max(10000),
  bytes: z.number().int().positive().max(100_000_000),
  paths: z.array(z.string().max(300).refine((path) => /^\/[a-zA-Z0-9_./-]+$/.test(path) && !path.startsWith('//') && !path.includes('..'))).min(1).max(2000),
}).strict().refine((manifest) => manifest.paths.includes('/index.html') && new Set(manifest.paths).size === manifest.paths.length,
  'An offline inventory needs the app shell and distinct same-origin files')

export type OfflineManifest = z.infer<typeof offlineManifestSchema>
export type OfflineStatus = { state: 'checking' | 'preparing' | 'ready' | 'incomplete' | 'unavailable'; cached: number; total: number; bytes: number; lessons: number; illustrations: number; message: string }
export const emptyOfflineStatus: OfflineStatus = { state: 'checking', cached: 0, total: 0, bytes: 0, lessons: 0, illustrations: 0, message: 'Checking this device for offline files.' }

export function countCachedFiles(manifest: OfflineManifest, urls: string[], origin: string): number {
  const cached = new Set(urls.flatMap((value) => {
    try { const url = new URL(value); return url.origin === origin ? [url.pathname] : [] } catch { return [] }
  }))
  return manifest.paths.filter((path) => cached.has(path)).length
}

export async function inspectOfflineLibrary(build: string): Promise<OfflineStatus> {
  if (!('serviceWorker' in navigator) || !('caches' in window)) return { ...emptyOfflineStatus, state: 'unavailable', message: 'This browser does not offer offline app storage. You can still read online and export your learning data.' }
  const names = (await caches.keys()).filter((name) => name.includes('workbox-precache'))
  const stores = await Promise.all(names.map((name) => caches.open(name)))
  const keys = (await Promise.all(stores.map((store) => store.keys()))).flat()
  let manifest: OfflineManifest | undefined
  // Inspect the local inventory directly, without a network request during an
  // offline transition. A prior edition must not certify this build's files.
  for (const store of stores) {
    const cached = await store.match('/offline-library.json', { ignoreSearch: true })
    if (!cached?.ok || !cached.headers.get('content-type')?.includes('application/json')) continue
    const text = await cached.text()
    if (text.length > 200_000) continue
    try {
      const parsed = offlineManifestSchema.safeParse(JSON.parse(text))
      if (parsed.success && parsed.data.build === build) { manifest = parsed.data; break }
    } catch { /* A malformed cached inventory cannot certify readiness. */ }
  }
  if (!manifest) {
    if (!navigator.onLine) throw new Error('The current offline inventory is not stored. Reconnect to finish downloading this version.')
    const response = await fetch('/offline-library.json', { cache: 'no-cache', signal: AbortSignal.timeout(8000) })
    if (response.status === 401 || response.status === 403) throw new Error('Site sign-in is required to finish the offline download. Reopen the private site online and sign in.')
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Offline file information is unavailable. Keep your connection on and try again.')
    const text = await response.text()
    if (text.length > 200_000) throw new Error('Offline file information was not valid. Try again after updating the app.')
    manifest = offlineManifestSchema.parse(JSON.parse(text))
    if (manifest.build !== build) throw new Error('A different app version is available. Check for updates, then verify the offline files again.')
  }
  const cached = countCachedFiles(manifest, keys.map((key) => key.url), window.location.origin)
  const ready = cached === manifest.paths.length && navigator.serviceWorker.controller?.state === 'activated'
  return { state: ready ? 'ready' : navigator.onLine ? 'preparing' : 'incomplete', cached, total: manifest.paths.length, bytes: manifest.bytes,
    lessons: manifest.lessons, illustrations: manifest.illustrations,
    message: ready ? 'The illustrated library is stored on this device.' : 'Some app files are not stored yet. Keep this page open online until the download finishes.' }
}