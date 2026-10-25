import type { Context } from '@netlify/functions'
import { handleDiscoveryRequest } from '../lib/discovery-service'

// Keep the filename's default /.netlify/functions/discover route. Do not set a
// method filter in config: the handler must return JSON 405, not a SPA fallback.
export default async function discover(request: Request, context?: Context): Promise<Response> {
  return handleDiscoveryRequest(request, {
    // Site-wide Blobs are shared by deploys. Old deploy URLs and previews can
    // read editions but must not advance the published site's seen ledger.
    readOnly: context ? !context.deploy.published && context.deploy.context !== 'dev' : false,
  })
}