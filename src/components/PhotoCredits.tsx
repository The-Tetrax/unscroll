import { useState } from 'react'
import { lessonById } from '../data'
import { lessonPhotos, photoCount } from '../teaching/photo-records'

// The full credit for every picture, in one place. The list is built only when it is opened.
export function PhotoCredits() {
  const [open, setOpen] = useState(false)
  if (!photoCount) return null
  return <details className="photo-credit-list" onToggle={(event) => setOpen(event.currentTarget.open)}>
    <summary>All {photoCount} picture credits</summary>
    {open && <ul>{Object.entries(lessonPhotos).flatMap(([id, list]) => list.map((photo) => <li key={photo.src}>
      <strong>{lessonById.get(id)?.title ?? id}</strong>
      <span>{photo.credit.work}, by {photo.credit.author}. {photo.credit.licenseUrl
        ? <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.credit.license}<span className="sr-only"> license (opens a new tab)</span></a>
        : photo.credit.license}. <a href={photo.credit.source} target="_blank" rel="noopener noreferrer">Source on Wikimedia Commons<span className="sr-only"> (opens a new tab)</span></a>. {photo.credit.changes}</span>
    </li>))}</ul>}
  </details>
}
