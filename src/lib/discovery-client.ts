import type { DiscoveryEdition, Lesson } from '../types'
import { editionSchema } from './schema'

export function cachedEdition(discoveries: Lesson[], date: string): DiscoveryEdition {
  const latest = discoveries.reduce((result, lesson) => lesson.publishedAt && lesson.publishedAt > result ? lesson.publishedAt : result, '')
  const lessons = latest ? discoveries.filter((lesson) => lesson.publishedAt === latest).slice(0, 6) : []
  return {
    date: latest || date, lessons, status: lessons.length ? 'cached' : 'unavailable',
    message: lessons.length ? `Downloaded edition ${latest} (UTC). It may be older than today; saved references remain available.`
      : 'No downloaded edition is available. Refresh when connected; the original lesson library is still here.',
  }
}

export function labelEdition(edition: DiscoveryEdition, date: string, online: boolean): DiscoveryEdition {
  if (edition.lessons.length && (!online || edition.date !== date)) {
    return { ...edition, status: 'cached', message: `Downloaded edition ${edition.date} (UTC), not a new edition for today.` }
  }
  return edition
}

export async function readDiscoveryResponse(response: Response, maxBytes = 300_000): Promise<DiscoveryEdition> {
  if ((!response.ok && response.status !== 503) || !response.headers.get('content-type')?.includes('application/json')) throw new Error('Discovery response unavailable')
  if (Number(response.headers.get('content-length') ?? 0) > maxBytes) {
    await response.body?.cancel()
    throw new Error('Discovery response too large')
  }
  const reader = response.body?.getReader()
  if (!reader) throw new Error('Empty discovery response')
  let bytes = 0
  let text = ''
  const decoder = new TextDecoder('utf-8', { fatal: true })
  try {
    while (true) {
      const chunk = await reader.read()
      if (chunk.done) break
      bytes += chunk.value.byteLength
      if (bytes > maxBytes) throw new Error('Discovery response too large')
      text += decoder.decode(chunk.value, { stream: true })
    }
    text += decoder.decode()
  } catch (error) { await reader.cancel().catch(() => {}); throw error }
  finally { reader.releaseLock() }
  return editionSchema.parse(JSON.parse(text)) as DiscoveryEdition
}