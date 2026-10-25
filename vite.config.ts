import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { handleDiscoveryRequest } from './netlify/lib/discovery-service.ts'

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
  plugins: [react(), localDiscovery(), VitePWA({
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
    rollupOptions: { output: { manualChunks(id) {
      if (id.includes('/src/data/')) return 'knowledge'
      if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react'
    } } },
    chunkSizeWarningLimit: 1800,
  },
  server: { host: '0.0.0.0', port: 5173, strictPort: true },
  preview: { host: '0.0.0.0', port: 4173, strictPort: true },
})
