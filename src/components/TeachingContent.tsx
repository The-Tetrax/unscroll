import { useRef, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import type { Lesson } from '../types'
import type { TeachingVisual } from '../teaching/types'
import visualAssets from '../teaching/visual-assets.json'

interface VisualAsset { src: string; width: number; height: number; title?: string; alt?: string; caption?: string }
const assets = visualAssets as Record<string, VisualAsset[]>

function Illustration({ visual, asset }: { visual: TeachingVisual; asset: VisualAsset }) {
  const viewer = useRef<HTMLDialogElement>(null)
  const [failed, setFailed] = useState(false)
  const title = asset.title ?? visual.title
  const alt = asset.alt ?? visual.alt
  const caption = asset.caption ?? visual.caption
  return <figure className="teaching-visual">
    <div className="teaching-visual-heading"><h3>{title}</h3><button type="button" className="icon-button" aria-label={`Enlarge diagram: ${title}`} onClick={() => viewer.current?.showModal()}><Maximize2 size={19} aria-hidden="true"/></button></div>
    {!failed && <img className="teaching-image" src={asset.src} alt={alt} width={asset.width} height={asset.height} loading="eager" decoding="async" onError={() => setFailed(true)}/>}
    {failed && <p className="inline-notice">This diagram could not load. Its explanation and all labels are available below.</p>}
    <figcaption>{caption}</figcaption>
    <details className="visual-description" open={failed || undefined}><summary>Diagram text and details</summary><p>{alt}</p><ol>{visual.items.map((item, index) => <li key={index}><strong>{item.label}.</strong> {item.detail}{item.value !== undefined && <span> Value: {item.value} {visual.unit}.</span>}</li>)}</ol></details>
    <dialog ref={viewer} className="visual-viewer" aria-label={`Enlarged diagram: ${title}`} onCancel={(event) => { event.preventDefault(); event.stopPropagation(); viewer.current?.close() }} onClick={(event) => { if (event.target === viewer.current) viewer.current.close() }}>
      <header><h2>{title}</h2><button type="button" className="icon-button" aria-label="Close enlarged diagram" onClick={() => viewer.current?.close()}><X size={22} aria-hidden="true"/></button></header>
      <div className="visual-viewer-scroll" tabIndex={0} aria-label="Diagram, scroll to inspect" onKeyDown={(event) => {
        if (event.key !== 'Home' && event.key !== 'End') return
        event.preventDefault()
        event.currentTarget.scrollTo({ top: event.key === 'Home' ? 0 : event.currentTarget.scrollHeight, behavior: 'instant' })
      }}><img src={asset.src} alt={alt} width={asset.width} height={asset.height}/></div>
      <p>{caption}</p>
    </dialog>
  </figure>
}

export function TeachingContent({ lesson }: { lesson: Lesson }) {
  if (!lesson.guide) return <div className="reader-prose">{lesson.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
  const guide = lesson.guide
  // Each explanation is followed by the figure that makes its mechanism visible.
  // Extra figures remain alongside the same concept, before guided practice.
  return <div className="reader-prose guided-prose">
    {guide.sections.map((section, sectionIndex) => <section className="teaching-section" key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {sectionIndex === Math.min(1, guide.sections.length - 1) && guide.visuals.map((visual, index) => {
        const asset = assets[lesson.id]?.[index]
        return asset ? <Illustration key={index} visual={visual} asset={asset}/> : null
      })}
    </section>)}
  </div>
}

export function GuidedPractice({ lesson }: { lesson: Lesson }) {
  const practice = lesson.guide?.practice
  if (!practice) return <p className="reader-action">{lesson.action}</p>
  return <div className="guided-practice">
    <p className="practice-duration">Allow about {practice.minutes} minutes to try it, separate from reading.</p>
    <h3>What you need</h3><ul className="practice-materials">{practice.needs.map((need) => <li key={need}>{need}</li>)}</ul>
    <ol className="reader-action practice-steps">{practice.steps.map((step, index) => <li key={index}>{step}</li>)}</ol>
    <div className="practice-observe"><h3>What to look for</h3><p>{practice.notice}</p></div>
    <details className="practice-troubleshooting"><summary>If it does not work yet</summary><p>{practice.troubleshooting}</p></details>
  </div>
}