# UNSCROLL design system

## Purpose
Replace a reflexive scroll with a short, useful learning session. The daily queue ends. A finished session suggests using one idea away from the phone.

## Visual direction
An original red, ink-black, and ivory manga training journal. Barlow Condensed carries the large headings; DM Sans carries every control, label, and reading surface. No stock anime characters, fake statistics, stock photography, gradients behind text, or decorative dashboards.

The fox brand mark, Ink, is original artwork requested for this app. Its role is to mark the finite daily session and its completion, not to interrupt lessons. This is a documented user-directed exception to Hallmark's generic illustration preference.

## App structure
- Today: a finite daily queue, current progress, and a separate daily discovery edition.
- Explore: searchable, categorized lessons, grouped by topic with explicit pagination.
- Vault: saved lessons, personal collections, and notes.
- Review: retrieval practice followed by a spaced review schedule.
- Profile: real progress, preferences, installation, privacy, and portable backups.

## Rules
- Colors, fonts, spacing, surfaces, and motion timings are CSS tokens.
- Capped centered layout, no page-level horizontal overflow, safe-area-aware mobile navigation.
- Labels are untracked sentence case. Large display headings can be uppercase.
- The reader prioritizes readable text over decoration. One concrete experiment per lesson.
- Every icon button is named; focus is visible; errors and empty states are actionable.
- Motion responds to actions; optional character motion runs once, under five seconds. Reduced motion disables transforms.
- Browser navigation and direct links work. Destructive actions are confirmed.
- All knowledge and numbers have provenance. Original lesson summaries are not quoted source material.

## Content contract
Ten categories and sixteen learning paths. Every original lesson has an explanation, takeaway, practical action, retrieval question, and source links. Cinema and visual-art paths use existing phones, paper, and ordinary spaces rather than requiring new equipment. Research, frameworks, and reference material are labeled separately. Live Wikimedia extracts are labeled as outside references and retain author, article/history, and CC BY-SA attribution.

## Privacy and retention
No account or analytics. Learning data remains on the device. JSON backups carry progress, notes, collections, and saved external lessons. Unseen lessons are not automatically recycled after the curated collection is exhausted. The UI reports finite inventory honestly.