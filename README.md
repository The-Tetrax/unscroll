# UNSCROLL

**Small lessons for a life beyond the feed.**

A mobile-first, installable learning app with an original red, ink, and ivory visual identity. Read a short explanation, try an experiment, and retrieve it from memory. Your daily queue ends. No account, analytics, advertising, or paid AI API.

## What is ready

- **544 original lessons** across psychology, career, money, everyday life, people, technology, thinking, wellbeing, cinema, and visual design.
- **22 sequenced learning paths** covering observation, reasoning, memory, speaking, presence, philosophy, phone photography, directing, lighting, editing, sound, cinema study, colour, typography, UI/UX, drawing, and six focused field guides.
- Every original lesson includes two explanation paragraphs, an exercise, a retrieval question, and 1-2 source references. Research, reference material, and practical frameworks have different labels.
- A daily mix of 3, 5, or 7 bites. Today's issued queue stays fixed after completion, reload, and preference changes. Completed or previously delivered bites are not silently relabeled as new. Unfinished older lessons remain available in Explore.
- Save bites, write notes, organize collections, search by category and topic, and follow a learning path.
- **Unfinished bites** retain their step, selected answer, and revealed feedback without awarding completion XP. Resume from Today or **Vault > Unfinished**, or forget a saved position without deleting notes.
- **Practice** separates reading from trying. Plan up to five experiments, mark attempts, undo, or remove them in **Vault > Practice**. This is a self-reported log, not another source of points or a measured skill rating.
- Search supports separate keywords, accented text, colour/color spelling, takeaways, and learning-path context. Notes show a 5,000-character limit and reject an oversized paste instead of silently dropping its tail.
- Local-calendar spaced recall, earned XP without duplicate completion rewards, and actual learning history. Reviews intentionally repeat prior material.
- Offline library, local fonts and artwork, install icons, service-worker updates, and JSON backups containing retained external extracts as well as your own notes.
- A daily Wikipedia reference edition, fetched by Netlify Functions and retained in Netlify Blobs. No user data is sent to this service.

## Deploy to Netlify

**Recommended: import the GitHub repository.** This deploys both the app and the content functions, unlike a static folder upload.

1. Sign in to [Netlify](https://app.netlify.com/).
2. Choose **Add new project > Import an existing project > GitHub**.
3. Select **The-Tetrax/unscroll**, branch **main**.
4. Netlify reads [netlify.toml](netlify.toml): build `npm run build`, publish `dist`, functions `netlify/functions`, Node 24.
5. Deploy. No environment variables, API keys, database setup, or login backend are required.
6. Open the HTTPS site. The first discovery GET can populate today's edition immediately. The scheduled function runs at **00:15 UTC**, on published production deploys only.
7. In Netlify **Functions**, confirm `discover` and `daily-discovery` are present. **Data & Storage > Blobs** shows the content ledger after the first successful edition.

Subsequent pushes to main deploy automatically once the repository is connected. Function and storage usage is subject to your Netlify plan; this app does not promise unlimited free hosting.

The release archive contains a production static site for optional Netlify Drop. That mode has the full curated offline app but **does not deploy server functions**. Use repository import for daily discoveries and scheduled refreshes.

## Install on your phone

- **Android Chrome:** open the HTTPS site, use **Install app** in the browser menu, or the app's **You > Install UNSCROLL** action when available.
- **iPhone/iPad Safari:** open the HTTPS site, choose **Share > Add to Home Screen**, and keep **Open as Web App** enabled if offered.
- Load the site once online and wait for **Offline-ready library**. Then test reopening in airplane mode. An HTTP LAN preview is useful for layout testing, but PWA installation requires HTTPS or localhost.
- **You > Protect browser storage** requests persistent storage where the browser supports it. Browsers can deny it. Clearing site data, private browsing, device loss, or storage eviction can remove progress. Export backups.

## Local development and checks

Requires Node 24 and npm. Run `npm ci`, then `npm run dev`. Development serves at http://localhost:5173. The local discovery endpoint uses the same fetch/validation code but in-memory storage, not production Blobs.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite app and local content endpoint |
| `npm run build` | Icons, asset records, client/server type checking, content validation, production PWA |
| `npm run preview` | Production preview at http://localhost:4173 |
| `npm run lint` | Static linting |
| `npm test` | Learning, schema, backup, attribution, and discovery unit tests |
| `npm run test:e2e` | Phone Chrome, desktop Chrome, and phone WebKit flows |
| `npm run check:discovery` | Read-only live Wikipedia smoke check, in-memory ledger |
| `npm run package` | Rebuild and create static and full-source release archives |

Before browser tests, run `npx playwright install chromium webkit`. Build before testing the production preview. CI installs the browser system dependencies on Ubuntu. The VS Code task **UNSCROLL: preview production PWA** runs the built app.

See [QA.md](QA.md) for the 105 passing browser tests, 280 unit/contract tests, actual fixes, and the limits of browser emulation.

## Content longevity and limits

There is no finite collection that can truthfully be called inexhaustible. The 544 original lessons cover 108 full daily sessions of five original bites, with four remaining, less if you browse ahead. These are original summaries with linked references, not editorially or clinically certified instruction.

The October field-guide addition contains 24 lessons on evidence checks, delayed feedback, unseen planning work, shared resources, phone-image artifacts, captions, drawing operations, and UI behavior. [The research brief](docs/content-research-2026-10.md) records supporting sources, nearby curriculum overlaps, rejected myths, and access limitations. All 520 earlier lesson IDs were kept. Curated additions require research and review; the app does not silently turn arbitrary scraped pages into advice.

The separate daily discovery stream adds up to six evergreen Wikipedia introductions per UTC edition from allow-listed topic categories. It is not news, AI-generated guidance, or guaranteed to be useful every day. External availability and the finite category pool limit it. The server maintains article-ID history and traversal cursors rather than recycling old IDs. If an edition cannot be fetched, the previous one is labeled cached; if none exists, the core app remains available.

Saved, noted, completed, scheduled-for-review, collected, currently issued, unfinished, and practice-linked discoveries retain their full text locally. Sixty additional recent extracts are kept; unrelated older extracts may be evicted. Backups carry retained external content, unfinished positions, and practice records. Older version-1 backups without the new optional fields still import. Daily edition dates are UTC; streaks, daily goals, completion dates, and review dates are local.

Fictional characters are inspiration for ethical observation and reasoning, not evidence for mind reading or reliable body-language lie detection. Philosophy is presented as a lens. Filmmaking exercises use existing phones with device-dependent controls, not assumed professional gear. Financial and wellbeing lessons are general education, not individual advice.

## Privacy and recovery

The library lives in IndexedDB under `unscroll-library-v1`. Notes, preferences, saved IDs, quiz results, and progress never go to the discovery endpoint. Only a generic same-origin GET is used. Netlify and Wikimedia still process ordinary request metadata as service operators. Opening a source link visits that outside site.

Backup import validates the app/version, field bounds, dates, HTTPS links, article attribution, duplicate IDs, and referenced lesson availability before replacing data. Imports replace rather than merge. The app confirms imports and resets. A malformed stored library is preserved behind a recovery screen instead of silently reset.

Import and reset abort active discovery requests and replace the displayed edition together with local data. Downloaded old editions are labeled cached, even when a server or service-worker response describes them as fresh. External responses are byte-bounded and must preserve valid Wikipedia article/history links and CC BY-SA attribution.

Normal writes compare the previous IndexedDB snapshot in one transaction. If two tabs diverge, the stale tab reports the conflict rather than overwriting the other tab. Export the stale tab's in-memory backup before reloading. There is no automatic multi-device sync.

## Source and asset licenses

See [public/ATTRIBUTION.md](public/ATTRIBUTION.md) and [LICENSE](LICENSE). Fonts and generated install icons have per-file byte counts and SHA-256 values in [public/asset-licenses.json](public/asset-licenses.json), verified by tests. Wikipedia extracts retain CC BY-SA attribution, source, and article-history links, including in backups. No borrowed anime characters, film stills, paid stock imagery, or speech excerpts are bundled.

## Project map

- [src/data/index.ts](src/data/index.ts): all original lessons and path registrations.
- [src/lib/learning.ts](src/lib/learning.ts): local dates, finite selection, XP, and review scheduling.
- [src/lib/storage.ts](src/lib/storage.ts): IndexedDB persistence, retention, and backups.
- [src/lib/schema.ts](src/lib/schema.ts): shared validation contracts.
- [netlify/lib/discovery-service.ts](netlify/lib/discovery-service.ts): allow-listed fetches, atomic publication, and seen-article history.
- [DESIGN.md](DESIGN.md): visual direction and app design constraints.
- [tests/e2e/app.spec.ts](tests/e2e/app.spec.ts): learning and accessible interface tests.
- [tests/e2e/pwa.spec.ts](tests/e2e/pwa.spec.ts): offline, install-manifest, and icon tests.
- [tests/e2e/integrity.spec.ts](tests/e2e/integrity.spec.ts): multi-tab conflicts and import/reset races.
- [tests/e2e/iteration.spec.ts](tests/e2e/iteration.spec.ts): resume, practice, legacy backup import, note limits, normalized search, and cached-edition checks.

Add original lessons to the relevant content module and register new paths in the data index. Stable IDs must never be reused for unrelated concepts. Update content-count assertions deliberately, then run all checks before publishing.
