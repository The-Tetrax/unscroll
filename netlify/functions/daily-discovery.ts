import type { Config, Context } from '@netlify/functions'
import { getDiscoveryEdition, type DiscoveryOptions } from '../lib/discovery-service'

export const config: Config = { schedule: '15 0 * * *' }

export async function runDailyDiscovery(context: Pick<Context, 'deploy'>, options: DiscoveryOptions = {}): Promise<Response> {
  // Netlify schedules only published deploys. Also guard manual preview/old
  // deploy invocations, since the persistent store is shared across deploys.
  if (!context.deploy.published) return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } })
  const edition = await getDiscoveryEdition(options)
  return new Response(null, {
    status: edition.status === 'unavailable' ? 503 : 204,
    headers: { 'Cache-Control': 'no-store' },
  })
}

// This is a platform schedule, not a public POST endpoint. The platform event's
// body/next_run is deliberately ignored; publication dates come from UTC now.
export default async function dailyDiscovery(_request: Request, context: Context): Promise<Response> {
  return runDailyDiscovery(context)
}