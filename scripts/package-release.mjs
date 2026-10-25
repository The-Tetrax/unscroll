import fs from 'node:fs/promises'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { createWriteStream } from 'node:fs'
import archiver from 'archiver'

const root = process.cwd()
await fs.mkdir('release', { recursive: true })
const fullPaths = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' })
  .split(/\r?\n/).filter(Boolean).filter((file) => !file.startsWith('.hallmark/shots/') && !file.startsWith('release/'))

async function zip(filename, append) {
  const output = createWriteStream(path.join(root, 'release', filename))
  const archive = archiver('zip', { zlib: { level: 9 } })
  const finished = new Promise((resolve, reject) => {
    output.on('close', resolve)
    output.on('error', reject)
    archive.on('error', reject)
  })
  archive.pipe(output)
  append(archive)
  await archive.finalize()
  await finished
  const { size } = await fs.stat(path.join(root, 'release', filename))
  console.log(`${filename}: ${Math.round(size / 1024)} KiB`)
}

await zip('unscroll-static-netlify.zip', (archive) => archive.directory('dist', false))
await zip('unscroll-complete-source.zip', (archive) => {
  for (const file of [...new Set(fullPaths)]) archive.file(file, { name: file })
})
console.log('Static ZIP: curated PWA only. Complete source or GitHub import: app plus Netlify daily content functions.')