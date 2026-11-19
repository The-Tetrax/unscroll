// Writes the readable list of picture credits from the picture records. Runs offline as part of npm run assets.
import fs from 'node:fs'
import { creditsMarkdown, PHOTO_CREDITS, PHOTO_FOLDER, readPhotos } from './lesson-extras.ts'

const count = Object.values(readPhotos()).reduce((sum, list) => sum + list.length, 0)
fs.mkdirSync(PHOTO_FOLDER, { recursive: true })
if (count) fs.writeFileSync(PHOTO_CREDITS, creditsMarkdown())
else fs.rmSync(PHOTO_CREDITS, { force: true })
console.log(`Wrote credits for ${count} lesson pictures.`)
