import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { handleDiscoveryRequest } from './netlify/lib/discovery-service.ts'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const builtAt = new Date().toISOString()
const buildId = `${process.env.COMMIT_REF?.slice(0, 12) ?? 'local'}-${builtAt.replace(/[^0-9]/g, '').slice(0, 14)}`

function offlineInventory(): Plugin {
  return {
    name: 'offline-library-inventory', enforce: 'post',
    generateBundle(_options, bundle) {
      const extensions = /\.(?:js|css|html|svg|png|woff2?|json|txt|md)$/i
      const paths = new Set<string>(['/index.html', '/manifest.webmanifest'])
      let bytes = 0
      for (const [name, asset] of Object.entries(bundle)) {
        if (name.startsWith('api/') || !extensions.test(name)) continue
        paths.add(`/${name}`)
        bytes += Buffer.byteLength(asset.type === 'chunk' ? asset.code : asset.source)
      }
      for (const name of readdirSync(resolve('public'), { recursive: true, encoding: 'utf8' })) {
        const full = resolve('public', name)
        if (name.replaceAll('\\', '/').startsWith('api/') || !extensions.test(name) || !statSync(full).isFile()) continue
        paths.add(`/${name.replaceAll('\\', '/')}`)
        bytes += statSync(full).size
      }
      const visuals = JSON.parse(readFileSync(resolve('src/teaching/visual-assets.json'), 'utf8')) as Record<string, unknown[]>
      this.emitFile({ type: 'asset', fileName: 'api/app-version.json', source: JSON.stringify({ build: buildId, builtAt,
        lessons: Object.keys(visuals).length, illustrations: Object.values(visuals).reduce((sum, images) => sum + images.length, 0) }) })
      this.emitFile({ type: 'asset', fileName: 'offline-library.json', source: JSON.stringify({ build: buildId, builtAt, lessons: Object.keys(visuals).length,
        illustrations: Object.values(visuals).reduce((sum, images) => sum + images.length, 0), bytes, paths: [...paths].sort() }) })
    },
  }
}

function localDiscovery(): Plugin {
  const middleware = (server: { middlewares: { use: (path: string, handler: (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => void) => void } }) => {
    server.middlewares.use('/.netlify/functions/discover', (request, response) => {
      void handleDiscoveryRequest(new Request('http://localhost/.netlify/functions/discover', { method: request.method ?? 'GET' }))
        .then(async (result) => {
          response.statusCode = result.status
          result.headers.forEach((value, key) => response.setHeader(key, value))
          response.end(await result.text())
        }).catch(() => {
          response.statusCode = 503
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify({ error: 'Discovery service unavailable' }))
        })
    })
  }
  return { name: 'local-daily-discovery', configureServer: middleware, configurePreviewServer: middleware }
}

export default defineConfig({
  define: { __UNSCROLL_BUILD__: JSON.stringify(buildId), __UNSCROLL_BUILT_AT__: JSON.stringify(builtAt) },
  plugins: [react(), localDiscovery(), offlineInventory(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,
    includeAssets: ['brand-icon.svg', 'icons/*.png', 'licenses/*', 'asset-licenses.json', 'ATTRIBUTION.md'],
    manifest: {
      id: '/', name: 'UNSCROLL - A little wiser', short_name: 'UNSCROLL',
      description: 'Practical knowledge, cinema, design, and a life beyond the feed. Short daily lessons that end.',
      start_url: '/#/today', scope: '/', display: 'standalone', orientation: 'portrait-primary',
      theme_color: '#f7f4ed', background_color: '#f7f4ed', lang: 'en',
      categories: ['education', 'lifestyle', 'productivity'],
      icons: [
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
      shortcuts: [
        { name: 'Daily learning', url: '/#/today' },
        { name: 'Saved ideas', url: '/#/vault' },
        { name: 'Recall practice', url: '/#/review' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,woff2,woff,json,txt,md}'],
      globIgnores: ['**/api/**'],
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      cleanupOutdatedCaches: true,
      navigateFallback: '/index.html',
      navigateFallbackDenylist: [/^\/\.netlify\//, /^\/api\//],
      clientsClaim: true,
      runtimeCaching: [{
        urlPattern: /\/\.netlify\/functions\/discover(?:\?.*)?$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'unscroll-discovery-responses', networkTimeoutSeconds: 8,
          cacheableResponse: { statuses: [200] }, expiration: { maxEntries: 2, maxAgeSeconds: 7 * 86400 },
        },
      }],
    },
  })],
  build: {
    target: 'es2022',
    rolldownOptions: { output: { codeSplitting: { groups: [
      { debugName: 'lesson-teaching-modules', name: (id) => `teaching-${id.split(/[\\/]/).at(-1)!.replace(/\.ts$/, '')}`, priority: 30,
        test: /[\\/]src[\\/]teaching[\\/](?!(?:index|types|schema)\.ts$)[^\\/]+\.ts$/ },
      { name: 'react', test: /node_modules[\\/]react(?:-dom)?[\\/]/, priority: 20 },
      { name: 'knowledge', test: /[\\/]src[\\/]data[\\/]/, priority: 10 },
    ] } } },
    chunkSizeWarningLimit: 1800,
  },
  server: { host: '0.0.0.0', port: 5173, strictPort: true },
  preview: { host: '0.0.0.0', port: 4173, strictPort: true },
})
