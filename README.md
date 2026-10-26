# UNSCROLL

**Small lessons for a life beyond the feed.**

A mobile-first, installable learning app with an original red, ink, and ivory visual identity. Learn through a worked example, inspect its diagrams, try an experiment, and apply the idea to a new situation. Your daily queue ends. No learning account, analytics, advertising, or paid AI API. Private hosting can require a separate site-owner sign-in.

## What is ready

- **544 original lessons** across psychology, career, money, everyday life, people, technology, thinking, wellbeing, cinema, and visual design.
- **22 sequenced learning paths** covering observation, reasoning, memory, speaking, presence, philosophy, phone photography, directing, lighting, editing, sound, cinema study, colour, typography, UI/UX, drawing, and six focused field guides.
- Every original lesson has a fuller explanation with context and a worked example, guided practice with materials and troubleshooting, a transfer question with a hint and explained answer, and supporting sources. Research, reference material, and practical frameworks have different labels.
- **604 original offline diagrams**, with enlargement, captions, and text descriptions. Camera, lighting, typography, UI/UX, and drawing lessons include bespoke demonstrations, not decorative stock images.
- A daily mix of 1, 3, 5, or 7 lessons. Today's issued queue stays fixed after completion, reload, and preference changes. Completed or previously delivered lessons are not silently relabeled as new. Unfinished older lessons remain available in Explore.
- Optional three-step onboarding explains a real lesson and helps choose topics and pace. Reopen it anytime in **You > Help and privacy**. Cancelling does not save unfinished preference changes.
- **Standard or larger lesson text**, system-aware reduced motion, and direct settings navigation. Preference success is reported only after device storage confirms it.
- Save bites, write notes, organize collections, search by category and topic, and follow a learning path.
- **Unfinished bites** retain their step, selected answer, and revealed feedback without awarding completion XP. Resume from Today or **Vault > Unfinished**, or forget a saved position without deleting notes.
- **Practice** separates reading from trying. Plan up to five experiments, mark attempts, undo, or remove them in **Vault > Practice**. This is a self-reported log, not another source of points or a measured skill rating.
- Search supports separate keywords, accented text, colour/color spelling, takeaways, and learning-path context. Notes show a 5,000-character limit and reject an oversized paste instead of silently dropping its tail.
- Local-calendar spaced recall, earned XP without duplicate completion rewards, and actual learning history. Reviews intentionally repeat prior material.
- Offline library, local fonts and artwork, install icons, service-worker updates, and JSON backups containing retained external extracts as well as your own notes. **You > Offline and updates** checks the current build's required cached files, offers manual update checks, and keeps a deferred update available. Updates flush local writes before reloading.
- A startup screen appears before the large app modules load and offers retry without clearing data if a download fails or stalls.
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

### Existing private deployment

The owner's site is [unscrollbytetrax.netlify.app](https://unscrollbytetrax.netlify.app). Keep its Netlify visibility **Private** and protect both production and previews. Anonymous requests to the app, manifest, worker, and discovery endpoint were rejected with HTTP 401 during this revision. The shared Netlify session was signed out, so a source push must not be mistaken for verified publication. Check the deployed commit in Netlify and **You > Offline and updates > App build** after signing in.

Private hosting restricts online access; it does not bind the app to one physical phone or revoke copies already downloaded. The public GitHub repository is a separate access decision. A cosmetic in-app PIN is not a substitute for hosting protection.

The release archive contains a production static site for optional Netlify Drop. That mode has the full curated offline app but **does not deploy server functions**. Use repository import for daily discoveries and scheduled refreshes.

## Install on your phone

- **Android Chrome:** open the HTTPS site, use **Install app** in the browser menu, or the app's **You > Install UNSCROLL** action when available.
- **iPhone/iPad Safari:** open the HTTPS site, choose **Share > Add to Home Screen**, and keep **Open as Web App** enabled if offered.
- Load the site once online and wait for **Offline-ready library**. Then test reopening in airplane mode. An HTTP LAN preview is useful for layout testing, but PWA installation requires HTTPS or localhost.
- **You > Protect browser storage** requests persistent storage where the browser supports it. Browsers can deny it. Clearing site data, private browsing, device loss, or storage eviction can remove progress. Export backups.

### If a published update still looks old

A successful Netlify deploy changes the hosted files, not an already-running cached app. Private-site authentication can expire while the offline shell continues to work, hiding the sign-in page needed to download a replacement worker.

1. In the old app, save any pending work and export a backup before closing it. Do not clear site data or reinstall to force an update.
2. Open [Update recovery](https://unscrollbytetrax.netlify.app/api/update.html) in the same browser/storage context that has the old app. Sign in to the private site if prompted.
3. Choose **Check update**. The page reads the published version from the network, checks app-file access, and requests the worker update. HTTP 401/403 or sign-in HTML is not treated as a successful download.
4. After saving work and closing other UNSCROLL windows, tick the confirmation and choose **Apply downloaded update**. The page waits for activation before opening the app. It never deletes caches, unregisters workers, or writes to the stored library.
5. Compare **You > Offline and updates > App build** with the published build shown on the recovery page. Check offline files before disconnecting.

The recovery page and version endpoint are outside both the old navigation fallback and the new precache, so an old shell cannot silently replace that page. They remain behind the same Netlify private-site access. Its optional backup reads persisted device data only, not unsaved work in another tab. Browser and installed-app storage can be separate on iOS; a backup from an empty browser does not back up the installed app.

Normal app updates also recheck on return to a visible online app, with a one-minute throttle. Installation still requires approval. A confirmed worker activation and local-storage flush are required before reloading.

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

See [QA.md](QA.md) for the current verification record, actual fixes, and the limits of browser emulation.

## Content longevity and limits

There is no finite collection that can truthfully be called inexhaustible. The 544 original lessons cover 108 full daily sessions of five original lessons, with four remaining, less if you browse ahead. These are original educational guides with linked references, not expert- or clinically certified instruction. Reading time excludes the separate practice budget; finishing one idea thoughtfully is enough.

The illustrated rewrite preserves all 544 IDs, notes, saves, collections, completions, XP, and review dates. An unfinished question from the old edition restarts at the rewritten explanation instead of applying an old answer index to a new question. Matching-revision unfinished lessons still resume. [docs/TEACHING.md](docs/TEACHING.md) records the approved teaching format. Structural tests and render checks do not prove that every reader will learn every topic.

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

See [public/ATTRIBUTION.md](public/ATTRIBUTION.md) and [LICENSE](LICENSE). Fonts, install icons, and every generated teaching diagram have per-file byte counts and SHA-256 values in [public/asset-licenses.json](public/asset-licenses.json), verified by tests. Wikipedia extracts retain CC BY-SA attribution, source, and article-history links, including in backups. No borrowed anime characters, film stills, paid stock imagery, or speech excerpts are bundled.

## Project map

- [src/data/index.ts](src/data/index.ts): all original lessons and path registrations.
- [src/teaching/index.ts](src/teaching/index.ts): the 544 complete guides and their teaching revision.
- [scripts/generate-teaching-assets.ts](scripts/generate-teaching-assets.ts): deterministic SVG generation, decoding, manifests and contact sheets.
- [src/hooks/useAppStatus.ts](src/hooks/useAppStatus.ts): cache verification and safe update handling.
- [src/lib/learning.ts](src/lib/learning.ts): local dates, finite selection, XP, and review scheduling.
- [src/lib/storage.ts](src/lib/storage.ts): IndexedDB persistence, retention, and backups.
- [src/lib/schema.ts](src/lib/schema.ts): shared validation contracts.
- [netlify/lib/discovery-service.ts](netlify/lib/discovery-service.ts): allow-listed fetches, atomic publication, and seen-article history.
- [DESIGN.md](DESIGN.md): visual direction and app design constraints.
- [tests/e2e/app.spec.ts](tests/e2e/app.spec.ts): learning and accessible interface tests.
- [tests/e2e/pwa.spec.ts](tests/e2e/pwa.spec.ts): offline, install-manifest, and icon tests.
- [tests/e2e/integrity.spec.ts](tests/e2e/integrity.spec.ts): multi-tab conflicts and import/reset races.
- [tests/e2e/iteration.spec.ts](tests/e2e/iteration.spec.ts): resume, practice, legacy backup import, note limits, normalized search, and cached-edition checks.
- [tests/e2e/teaching.spec.ts](tests/e2e/teaching.spec.ts): illustration dialogs, guided practice, transfer questions, and old-draft compatibility.
- [tests/e2e/polish.spec.ts](tests/e2e/polish.spec.ts): onboarding, pacing, cancellation, keyboard behavior, and failed persistence.
- [tests/e2e/settings.spec.ts](tests/e2e/settings.spec.ts): actual reading sizes, preference saves, storage permissions, installation feedback, and settings navigation.
- [tests/e2e/updates.spec.ts](tests/e2e/updates.spec.ts): real worker upgrades, cache inventory, cold offline reading, and unsaved-data reload blocking.
- [tests/e2e/startup.spec.ts](tests/e2e/startup.spec.ts): held and failed entry downloads, retry, and data preservation.

Add original lessons with both metadata and a complete teaching guide, then register paths in the data index. Stable IDs must never be reused for unrelated concepts. Run `npm run review:visuals` to regenerate contact sheets. Update content-count assertions deliberately, then run all checks before publishing.
