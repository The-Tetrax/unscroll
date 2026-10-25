import { createMemoryDiscoveryStore, getDiscoveryEdition } from '../netlify/lib/discovery-service'

// Read-only live smoke check: only Wikipedia GETs and a throwaway memory store.
// No production Blobs writes, CLI input, secrets, or full extract logging.
const edition = await getDiscoveryEdition({ store: createMemoryDiscoveryStore() })
console.log(JSON.stringify({
  date: edition.date,
  status: edition.status,
  count: edition.lessons.length,
  extracts: edition.lessons.map((lesson) => ({ id: lesson.id, source: lesson.sources[0]?.url })),
  ...(edition.message ? { message: edition.message } : {}),
}, null, 2))
if (edition.status === 'unavailable') process.exitCode = 1