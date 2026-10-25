# Release verification

Verified locally on 25 October 2026 against the production build, not just the development server.

## Results

- **75 browser tests passed in one consolidated run:** 25 cases on mobile Chromium, desktop Chromium, and mobile WebKit.
- **240 unit/contract tests passed:** selection, dates, XP, reviews, schemas, backups, reference fetching, concurrent publication, and local asset hashes/licenses.
- **Production build and lint passed.** The build validates 520 original lessons, 1040 unique explanation paragraphs, and sixteen paths.
- **Dependency audit: zero known vulnerabilities.** The verification-only Netlify CLI was removed after packaging the functions because one of its dependencies had an unfixed advisory.
- **Hallmark rendered audit:** zero open failures or warnings. Exceptions document the requested original mascot, red surface, and full-height tappable lesson rows.
- **Visual review:** 26 desktop/phone route and reader-state captures; an independent reviewer inspected 18 of them and rescored all four prior UX findings as resolved.
- **Live content smoke check:** six attributed Wikipedia references fetched with stable article IDs.
- **Netlify functions:** both packaged successfully with Netlify's function builder. A production account is not connected.

## Actions and outcomes checked

| Journey | Outcomes |
| --- | --- |
| Daily learning | Five default bites, stable queue, three lesson stages, correct/incorrect answers, completion, no duplicate XP, explicit stopping point |
| Tomorrow | Local-midnight rollover before UTC midnight, next-day goals/interests, no completed or delivered lessons silently reissued |
| Explore | Ten categories, sixteen paths, subtopics, search, empty results, clearing filters, pagination boundaries, direct links, path following |
| Vault | Save, unsave, reload, searchable notes without bookmarks, direct note editing, collection membership independent of bookmarks |
| Collections | Create, reject case-insensitive duplicates, add/remove lessons, confirm/cancel deletion, preserve other groups and learning data |
| Recall | Due content, answer reveal, grades, future review dates, no duplicate same-day review XP |
| Backups | Real file download, validated import, replacement confirmation, malformed JSON rejection, retained notes/progress/collections/discoveries |
| Data safety | Stale-tab conflict protection, exporting unsaved memory, late-discovery rejection during import/reset, recovery of malformed stored data |
| Privacy | No progress/notes in discovery requests, no private Vault search text in shared lesson links, no third-party tracking in test flows |
| Offline | Real service worker and Cache Storage, cold reload, all 520 original lessons, saved external text/attribution and notes |
| Installation | Manifest identity, scope/start URL, actual PNG decoding and dimensions, maskable icon, local installation instructions |
| Accessibility | Reader focus entry/trap/restoration, Escape, back/forward, field labels, Axe WCAG A/AA scans on five pages and reader states |
| Responsive | 320, 390, 768, 1280, and 1920 CSS-pixel widths, no horizontal overflow, visible reader controls, 44px main/compact targets |
| Motion | Saved reduced-motion preference, operating-system preference, content available without animation |
| Context | Accurate return labels, path-specific poster text, visible recall feedback, direct installation and backup shortcuts |

## Issues found and corrected

Path-label contrast, hero focus contrast, dialog keyboard wrapping, topic-select labeling, dialog entrance overshoot, undersized phone targets, stale-tab overwrites, import/reset versus discovery-refresh races, missing legacy offline font files, an incorrect return label, extra steps to edit notes, private search text in shared links, and collected lessons becoming invisible after unbookmarking.

The original WebKit offline fixture intercepted navigation before the service worker could answer. The corrected test removes DevTools interception before enabling native offline mode. It requires the real precached files and supplies no test responses offline. A separate test locator was corrected when a dialog's accessible name changed on completion; application behavior was not weakened to pass it.

## Environments and limitations

Playwright emulated mobile Chromium and WebKit at 390 x 844 and desktop Chromium at 1280 x 800. Responsive cases also resized each engine to the five widths above. Browser tests use deterministic discovery responses; a separate smoke check exercises Wikimedia.

Passing tests do not prove every device or future sequence is fault-free. No physical phone was available to verify operating-system installation, virtual keyboards, battery use, screen readers, or storage eviction. These need a final check on the owner's phone after HTTPS deployment.

The app is not publicly deployed: neither the local CLI nor the shared browser has an authenticated Netlify account. Production Blobs permissions, scheduled execution, custom-domain HTTPS, hosting limits, and deployed response headers still require the owner's first deployment. The code and deployment configuration are ready for it.

Source references were checked during authoring, but not every remote link was crawled at release time. Lessons are educational, not expert-certified financial, medical, or psychological advice. External discoveries are a finite reference stream, not guaranteed useful daily guidance or inexhaustible content.