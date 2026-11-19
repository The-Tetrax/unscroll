import fs from 'node:fs'
import { describe, expect, it } from 'vitest'
import { lessons } from '../src/data'
import { lessonPairs, linksById } from '../src/teaching/connections'
import { lessonPhotoSchema, PHOTO_LICENSE } from '../src/teaching/photo-schema'
import { checkConnections, checkPhotos, creditsMarkdown, PHOTO_CREDITS, PHOTO_FOLDER, readPhotos } from '../scripts/lesson-extras'

const data = readPhotos()
const all = Object.entries(data).flatMap(([id, list]) => list.map((photo) => ({ id, photo })))
const prefixes = [...new Set(Object.keys(data).map((id) => id.split('-')[0]))]

describe('lesson pictures', () => {
  it('match their files, their lessons and the generated credits list', () => {
    const result = checkPhotos()
    expect(result).toMatchObject({ lessons: Object.keys(data).length, photos: all.length })
    expect(result.photos).toBeGreaterThan(0)
    expect(fs.readFileSync(PHOTO_CREDITS, 'utf8')).toBe(creditsMarkdown())
    expect(fs.readdirSync(PHOTO_FOLDER).filter((name) => name.endsWith('.webp'))).toHaveLength(all.length)
  })

  it.each(prefixes)('credits every %s picture to an author, an accepted license and a Commons source', (prefix) => {
    for (const { id, photo } of all.filter((entry) => entry.id.startsWith(`${prefix}-`))) {
      expect(lessonPhotoSchema.safeParse(photo).success, id).toBe(true)
      expect(photo.credit.license, id).toMatch(PHOTO_LICENSE)
      expect(photo.credit.source, id).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/)
      expect(photo.credit.author.trim().length, id).toBeGreaterThan(0)
      expect(photo.credit.changes, id).toMatch(/onverted to WebP\.$/)
      // The record points at a local file. A remote address would break offline reading and the content policy.
      expect(photo.src, id).toMatch(/^\/lesson-photos\/[a-z]+-\d{3}-[1-3]\.webp$/)
      expect(`${photo.title} ${photo.alt} ${photo.caption} ${photo.punchline ?? ''}`, id).not.toMatch(/[\u2013\u2014]/)
    }
  })

  it.each(['CC BY-NC 4.0', 'CC BY-ND 2.0', 'CC BY-NC-SA 3.0', 'GFDL 1.2', 'All rights reserved', 'Fair use', 'No restrictions', ''])('refuses the license "%s"', (license) => {
    expect(PHOTO_LICENSE.test(license)).toBe(false)
  })

  it.each(['Public domain', 'CC0 1.0', 'CC BY 2.0', 'CC BY 4.0', 'CC BY-SA 2.5', 'CC BY-SA 3.0 DE', 'CC BY-SA 4.0'])('accepts the license "%s"', (license) => {
    expect(PHOTO_LICENSE.test(license)).toBe(true)
  })

  it('refuses records that would mislead or break', () => {
    const { photo } = all[0]
    const invalid = (change: object) => lessonPhotoSchema.safeParse({ ...photo, ...change }).success
    expect(lessonPhotoSchema.safeParse(photo).success).toBe(true)
    expect(invalid({ src: 'https://upload.wikimedia.org/example.jpg' })).toBe(false)
    expect(invalid({ credit: { ...photo.credit, source: 'https://example.com/File:Picture.jpg' } })).toBe(false)
    expect(invalid({ credit: { ...photo.credit, source: 'http://commons.wikimedia.org/wiki/File:Picture.jpg' } })).toBe(false)
    expect(invalid({ credit: { ...photo.credit, license: 'CC BY-NC 4.0' } })).toBe(false)
    expect(invalid({ credit: { ...photo.credit, license: 'CC BY 4.0', licenseUrl: undefined } })).toBe(false)
    expect(invalid({ credit: { ...photo.credit, author: '' } })).toBe(false)
    expect(invalid({ caption: 'Too short.' })).toBe(false)
    expect(invalid({ caption: `${photo.caption} \u2014 and more` })).toBe(false)
    expect(invalid({ kind: 'photo', punchline: 'A joke on a plain photograph' })).toBe(false)
    expect(invalid({ kind: 'meme' })).toBe(false)
    expect(invalid({ bytes: 500_000 })).toBe(false)
    expect(invalid({ unknownField: true })).toBe(false)
  })

  it('places every picture after a section that exists', () => {
    const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]))
    for (const { id, photo } of all) expect(photo.after, id).toBeLessThan(byId.get(id)!.guide!.sections.length)
  })
})

describe('lesson connections', () => {
  it('pair existing lessons once, with a plain reason', () => {
    expect(checkConnections()).toEqual({ pairs: lessonPairs.length, lessons: linksById.size })
    expect(lessonPairs.length).toBeGreaterThan(0)
  })

  it('appear in both lessons of a pair', () => {
    for (const [first, second, why] of lessonPairs) {
      expect(linksById.get(first)).toContainEqual({ id: second, why })
      expect(linksById.get(second)).toContainEqual({ id: first, why })
    }
  })
})
