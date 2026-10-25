import fs from 'node:fs'
import crypto from 'node:crypto'
import { describe, expect, it } from 'vitest'

interface Asset { file: string; source: string; license: string; licenseFile: string; size: number; sha256: string }
const manifest = JSON.parse(fs.readFileSync('public/asset-licenses.json', 'utf8')) as { assets: Asset[] }

describe('local asset provenance', () => {
  it.each(manifest.assets)('verifies the hash, size and license of $file', (asset) => {
    const file = asset.source.startsWith('@fontsource/') ? `node_modules/${asset.source}` : `public/${asset.file}`
    const bytes = fs.readFileSync(file)
    expect(bytes.length).toBe(asset.size)
    expect(crypto.createHash('sha256').update(bytes).digest('hex')).toBe(asset.sha256)
    expect(['MIT', 'SIL Open Font License 1.1']).toContain(asset.license)
    expect(fs.readFileSync(`public/${asset.licenseFile}`, 'utf8').length).toBeGreaterThan(500)
  })
})