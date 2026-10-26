# Release verification

Verified locally on 25-26 October 2026 against the production build, not just the development server. This record covers the illustrated rewrite and the subsequent onboarding/settings polish. The previous condensed release passed 280 unit checks and 105 browser cases; those are not used as evidence for this revision.

## Results

### Update-recovery follow-up, 26 October

The owner reported that both the installed app and normal browser still showed the old controls after publication. Netlify's deployment API confirmed commit 3e1656a in production, ready and published at 2026-10-25T21:04:37.173Z. Anonymous worker, inventory and app requests returned 401. This verifies publication and authentication gating, not the owner's device session.

GitHub CI for 3e1656a completed after the prior handoff: build, lint and all unit checks passed; browser checks were 188 passed and one failed. The failure observed WebKit's worker still activating, plus one old-document Cache API teardown error. The local 189-pass result below remains accurate for its run, but did not establish a passing Linux CI run.

The follow-up adds a network-only recovery page and version endpoint under the already-excluded API path, authenticated update diagnostics, safe activation waiting, and read-only backup export. Recovery uses an explicit confirmation and preserves IndexedDB. The app quiesces its cache inspection before reload and reports offline readiness only with an activated controller. Version checks run on return online/visible with throttling; installation is still explicit.

The normal updater also observes native controller replacement independently of Workbox's registration-time `isUpdate` flag. That flag can remain false in the document that first installed the app worker. A guarded reload now handles later replacements in that same document, rather than leaving an accepted update showing its old UI. The added first-document browser case does not reload the app before downloading the second worker.

- 926 unit/contract tests passed, including authentication response handling, bounded version metadata and activation-state tests.
- 33 focused browser cases passed across all three profiles: real legacy-worker recovery, optional backup with full snapshot preservation, 401/403/sign-in HTML rejection, failed SVG download followed by retry, empty storage without database creation, read-only startup, keyboard/320px accessibility, and normal safe worker updates.
- **216 browser cases passed in one consolidated final run**, 72 scenarios across all three profiles, using two workers with no retries or skips locally (19.1 minutes). The first-document update case is included. An earlier three-worker run reached three execution timeouts; those journeys passed individually and in the two-worker full run without removing assertions or increasing their deadlines. Two workers are now the default.
- Build, client/server type checking, content validation, lint, and all 926 unit cases passed on the recovery implementation. Recovery does not prove the owner's particular phone has activated the new build; publication and device activation must be checked separately.

### Illustrated release baseline

- **189 browser tests passed in one consolidated run:** 63 cases on mobile Chromium, desktop Chromium, and mobile WebKit. Final run: 13.2 minutes, no retries or skips locally.
- **913 unit/contract tests passed:** selection, dates, XP, reviews, schemas, backups, drafts, practice, search, bounded external responses, concurrent publication, guide/visual contracts, settings compatibility, offline inventory, and per-file asset hashes/licenses.
- **Production build, app/server type checking, and lint passed.** The build validates 544 rewritten lessons, 2041 unique teaching paragraphs, 544 distinct scene strings, 604 visual specifications, and twenty-two paths. Distinct strings are a structural check, not proof of semantic variety.
- **All 604 SVGs generated and decoded.** The bundle contains 615 per-file asset/license records. There are 97 bespoke primary illustrations, including the two approved sample drawings. Camera, light/editing, typography, UI/UX and drawing examples show the actual subjects and layouts.
- **Offline inventory:** the final build precaches 658 entries, about 8.4 MiB uncompressed. The app verifies 647 required app files for this build, including all 604 diagrams and all 17 teaching chunks. The largest JavaScript chunk is approximately 897 kB, below the 4 MiB per-file precache limit.
- **Dependency audit: zero known vulnerabilities.** The verification-only Netlify CLI was removed after packaging the functions because one of its dependencies had an unfixed advisory.
- **Hallmark rendered audit:** zero open failures or warnings. Exceptions document the requested original mascot, red surface, and full-height tappable lesson rows.
- **Visual review:** 48 current desktop/phone route and reader-state captures, plus generated contact sheets covering all 604 diagrams. Representative sheets and full phone views were inspected for relevant geometry, labels, legibility, enlargement, and layout. This is not a claim that every visual received an independent expert review.
- **Live content smoke check:** six attributed Wikipedia references fetched with stable article IDs, both from the smoke script and the running preview endpoint after its certificate configuration was refreshed.
- **Netlify functions:** both packaged successfully with Netlify's function builder in the previous deployment preparation; the server implementation is unchanged in this revision. The owner's existing HTTPS site is private. Anonymous app, manifest, worker and discovery requests still returned 401. The shared Netlify session was signed out, so authenticated publication is not claimed by this local record.

## Actions and outcomes checked

| Journey | Outcomes |
| --- | --- |
| Daily learning | Five default bites, stable queue, three lesson stages, correct/incorrect answers, completion, no duplicate XP, explicit stopping point |
| Tomorrow | Local-midnight rollover before UTC midnight, next-day goals/interests, no completed or delivered lessons silently reissued |
| Explore | Ten categories, twenty-two paths, subtopics, normalized multi-keyword/path-context search, empty results, clearing filters, integer pagination, direct links, path following |
| Vault | Save, unsave, reload, searchable notes without bookmarks, direct note editing, collection membership independent of bookmarks |
| Collections | Create, reject case-insensitive duplicates, add/remove lessons, confirm/cancel deletion, preserve other groups and learning data |
| Recall | Due content, answer reveal, grades, future review dates, no duplicate same-day review XP |
| Unfinished | Persist step/answer/feedback across close and reload, restart without clearing notes, completion removes its own draft, no XP until explicitly completed |
| Practice | Plan up to five experiments, mark tried, reject an over-limit undo, undo and remove, no effect on XP/review credit, preserve external references |
| Note limits | Explicit character counter, reject oversized clipboard paste without changing the old note, native keyboard limit |
| Backups | Real file download, validated import, replacement confirmation, malformed JSON rejection, retained notes/progress/collections/discoveries |
| Data safety | Stale-tab conflict protection, exporting unsaved memory, late-discovery rejection during import/reset, recovery of malformed stored data |
| Privacy | No progress/notes in discovery requests, no private Vault search text in shared lesson links, no third-party tracking in test flows |
| Offline | Real service worker and Cache Storage, cold reload, all 544 original lessons, saved external text/attribution, notes, and restored reader positions |
| Installation | Manifest identity, scope/start URL, actual PNG decoding and dimensions, maskable icon, local installation instructions |
| Accessibility | Reader focus entry/trap/restoration, Escape, back/forward, field labels, Axe WCAG A/AA scans on five pages and reader states |
| Responsive | 320, 390, 768, 1280, and 1920 CSS-pixel widths, no horizontal overflow, visible reader controls, 44px main/compact targets |
| Motion | Saved reduced-motion preference, operating-system preference, content available without animation |
| Context | Accurate return labels, path-specific poster text, visible recall feedback, direct installation and backup shortcuts |
| Illustrated teaching | Complete explanation sections, exact practice steps/materials, observable results, troubleshooting, image fallback descriptions, transfer hints/answers, additional recognition feedback |
| Content migration | Old incompatible unfinished question answers restart safely; notes, saves, collections, completions and XP are retained; revisiting does not award completion twice |
| Diagram inspection | Real approved bounce illustration, native nested dialog, Escape closes only the viewer, focus returns, keyboard panning and Home/End, captions and descriptions |
| Onboarding | Optional entry, cancellation with no preference writes, persistent chosen topics/pace, reject zero interests, next-day one-lesson goal, reopen from settings, failed saves remain visible |
| Settings | Standard 17px and larger 20px lesson text, 18px larger captions, persistence across reload/export, no false saved-success after a rejected IndexedDB write, six focusable section shortcuts |
| Storage and install feedback | Already-granted storage, grant/denial/exception, accepted/dismissed/failed install prompts, exactly-once prompt use; standard browser APIs simulated where headless browsers cannot display an OS permission UI |
| Startup | Real HTML before the app module loads, stalled/failed module recovery, no invented percentage, keyboard retry and 320px layout, full IndexedDB snapshot survives retry |
| App updates | Real generated service worker served by an isolated loopback server; waiting update remains deferred, installation activates/reloads, committed notes/profile survive, unsaved writes block activation and reload |
| Offline verification | Removing one real cached SVG removes the ready label; restoring its original bytes/key restores readiness; an unseen category/image loads after a cold native-offline reload |

## Issues found and corrected

Path-label contrast, hero focus contrast, dialog keyboard wrapping, topic-select labeling, dialog entrance overshoot, undersized phone targets, stale-tab overwrites, import/reset versus discovery-refresh races, missing legacy offline font files, an incorrect return label, extra steps to edit notes, private search text in shared links, and collected lessons becoming invisible after unbookmarking.

The second audit added unfinished-bite resume and a small self-reported practice list. It corrected stale displayed discovery cards after restore, unbounded client-side response buffering, misleading freshness labels, fractional-page handling, and search that omitted path context and takeaways. New tests verify backward-compatible backups and that practice never grants learning credit.

The 24 field-guide additions were checked for original writing, source scope, unique IDs, quiz structure, paragraph bounds, and numerical example consistency. Abstract-only sources and unvalidated exercise durations remain labeled. The research brief separates proposed exercises from empirical findings.

The original WebKit offline fixture intercepted navigation before the service worker could answer. The corrected test removes DevTools interception before enabling native offline mode. It requires the real precached files and supplies no test responses offline. A separate test locator was corrected when a dialog's accessible name changed on completion; application behavior was not weakened to pass it.

The illustrated-reader pass fixed nested-dialog Escape propagation and isolated the parent Tab trap. Home/End now explicitly scroll the inspection pane. Onboarding keeps its header and actions visible while the content scrolls; Safari's non-focusing pointer activation is handled before opening so cancellation restores the intended button.

Settings formerly announced success before the IndexedDB write completed. They now wait for the write queue and storage checkpoint. Standard and larger text are optional backup-v1 fields, so old backups are not rewritten merely by validation. The one-lesson goal leaves today's issued queue intact.

Startup recovery runs independently of the main module download, and the HTML hidden attribute is respected on styled controls. Offline status now reads the matching cached inventory without a network fetch, and does not start a cache scan at the instant an offline transition tears down the old WebKit document. Update checks and installation are user-triggered, with pending states and recovery messages. The runtime bundle is split into 17 teaching modules instead of one 3.4 MB knowledge chunk.

Test-harness corrections retained behavior checks: subpixel intersection rounding uses a 0.99 visibility ratio; keyboard scroll is checked against the actual pane; settings scroll expectations include root scroll padding; WebKit storage permission stubs live on the native prototype; only pending-module screenshots bypass WebKit's unresolved font-ready wait. Native update navigation is verified through actual navigation requests and document load events, not a fixed test clock. The multi-tab WebKit test has a 90-second budget while preserving all snapshot assertions.

## Environments and limitations

Playwright emulated mobile Chromium and WebKit at 390 x 844 and desktop Chromium at 1280 x 800. Responsive cases also resized each engine to the five widths above. Browser tests use deterministic discovery responses; a separate smoke check exercises Wikimedia.

Passing tests do not prove every device or future sequence is fault-free. No physical phone was available to verify operating-system installation, virtual keyboards, battery use, screen readers, or storage eviction. These need a final check on the owner's phone after HTTPS deployment.

The existing site is [unscrollbytetrax.netlify.app](https://unscrollbytetrax.netlify.app), protected by Netlify visitor access. Do not make it public to test this revision. A Git push and passing CI do not by themselves prove that the private site published the same commit. Final authenticated verification requires the owner's signed-in Netlify session and an app-build check. Team membership, preview protection scope, production Blobs permissions, schedule execution and hosting limits are not certified here.

Source references were checked during authoring, but not every remote link was crawled at release time. Content audits combined structure checks with sampled close reading; broad automated-agent review statements are not treated as independent full-curriculum certification. Lessons are educational, not expert-certified financial, medical, or psychological advice. External discoveries are a finite reference stream, not guaranteed useful daily guidance or inexhaustible content.