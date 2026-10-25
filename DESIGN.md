# UNSCROLL design system

## Purpose
Replace a reflexive scroll with a short, useful learning session. The daily queue ends. A finished session suggests using one idea away from the phone.

## Visual direction
An original red, ink-black, and ivory manga training journal. Barlow Condensed carries the large headings; DM Sans carries every control, label, and reading surface. No stock anime characters, fake statistics, stock photography, gradients behind text, or decorative dashboards.

The fox brand mark, Ink, is original artwork requested for this app. Its role is to mark the finite daily session and its completion, not to interrupt lessons. This is a documented user-directed exception to Hallmark's generic illustration preference.

## App structure
- Today: a finite daily queue, current progress, and a separate daily discovery edition.
- Explore: searchable, categorized lessons, grouped by topic with explicit pagination.
- Vault: saved lessons, personal collections, notes, a small practice list, and resumable unfinished bites.
- Review: retrieval practice followed by a spaced review schedule.
- Profile: real progress, reading size and pace, installation, offline/update checks, privacy, and portable backups.
- Optional onboarding: a real illustrated lesson preview, topics, and a manageable pace; never a mandatory account wall.

## Rules
- Colors, fonts, spacing, surfaces, and motion timings are CSS tokens.
- Capped centered layout, no page-level horizontal overflow, safe-area-aware mobile navigation.
- Labels are untracked sentence case. Large display headings can be uppercase.
- The reader prioritizes readable text over decoration. One concrete experiment per lesson.
- Teaching illustrations show the actual subject or relationship, not generic inspirational imagery. Each supports enlargement, readable captions, and a full text description. Onboarding actions remain visible while its body scrolls.
- Standard and larger lesson text affect explanations, practice and question text. A loading state never invents a progress percentage; an offline-ready label follows a check of the current build's required cache entries.
- Every icon button is named; focus is visible; errors and empty states are actionable.
- Motion responds to actions; optional character motion runs once, under five seconds. Reduced motion disables transforms.
- Browser navigation and direct links work. Destructive actions are confirmed.
- All knowledge and numbers have provenance. Original lesson summaries are not quoted source material.

## Content contract
Ten categories and twenty-two learning paths. Each of 544 originals has context, a worked example, one or more original diagrams, a takeaway, guided practice, transfer reasoning with help, an additional recognition question, and source links. The 604 diagrams stay offline. Cinema and visual-art paths use existing phones, paper, and ordinary spaces rather than requiring new equipment. Research, frameworks, and reference material are labeled separately. Live Wikimedia extracts are labeled as outside references and retain author, article/history, and CC BY-SA attribution.

Practice is distinct from completion: at most five planned experiments, no deadlines, no practice XP, and self-reported attempts that can be undone. Unfinished reader positions resume without pretending the lesson was completed. The daily duration label describes reading, not time spent on real-world experiments.

## Privacy and retention
No learning account or analytics. Private hosting can require a separate site-owner sign-in. Learning data remains on the device. JSON backups carry progress, notes, collections, settings, and saved external lessons. Unseen lessons are not automatically recycled after the curated collection is exhausted. The UI reports finite inventory honestly. Preferences report success after persistent storage completes; updates refuse to reload over unsaved changes.