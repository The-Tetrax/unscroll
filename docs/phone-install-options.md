# Getting the current UNSCROLL build onto one Android phone

Written 2026-11-18. Scope: one Android phone, one Windows PC, no paid hosting.

Every step in this document carries one of three labels.

- **Verified**: I ran it on this PC, or read it from a live endpoint, on 2026-11-18.
- **Documented**: taken from the vendor's own documentation, linked under [Sources](#sources). Not run.
- **Unverified**: my inference or recollection. Treat it as a question to test, not a fact.

Nothing here has been tried on the phone. The phone was not connected, this PC has no Java, Android SDK or adb, and no Cloudflare or GitHub Pages account was used. [What was and was not run](#what-was-and-was-not-run) lists both sides.

## Contents

1. [Short answer](#short-answer)
2. [Why the phone stopped updating](#why-the-phone-stopped-updating)
3. [Move your data before changing routes](#move-your-data-before-changing-routes)
4. [Route 0: stay on Netlify and stop spending credits on checkpoints](#route-0-stay-on-netlify-and-stop-spending-credits-on-checkpoints)
5. [Route B: install the PWA from this PC over USB](#route-b-install-the-pwa-from-this-pc-over-usb)
6. [Route C: free hosting](#route-c-free-hosting)
7. [Route A: a real APK with Capacitor](#route-a-a-real-apk-with-capacitor)
8. [Routes not written up](#routes-not-written-up)
9. [What was and was not run](#what-was-and-was-not-run)
10. [Sources](#sources)

## Short answer

Netlify did not break. The Free plan gives 300 credits a month and a production deploy costs 15, so the 20th deploy used the last credit. Every push since then has been skipped: five on 27 October, and the one that added this document on 18 November. The phone can be at build `85a5bd6` at the newest.

| | Route 0: Netlify | Route B: PWA over USB | Route C: Cloudflare Pages | Route A: APK |
| --- | --- | --- | --- | --- |
| Hosting | Netlify Free | none | Cloudflare Free | none |
| App code changes | none | none | none | yes, five listed below |
| New software on this PC | none | none with Chrome, or adb (a 7.7 MiB download) | none (`npx wrangler`) | JDK 21, Android SDK, Gradle caches |
| Notes and progress on the phone | kept, same origin | new origin, export then import | new origin, export then import | new origin, export then import |
| How the phone gets an update | in-app prompt when online | cable, PC and preview running | in-app prompt when online | build and install a new APK |
| Daily Wikipedia edition | works | only while the cable is connected | stops unless the function is ported | stops unless the function is ported |
| Private | yes, Netlify private site | yes, never leaves the PC and phone | yes, with Cloudflare Access | yes |
| Largest open risk | 20 deploys a month | Chrome may add a shortcut, not an installed app (Unverified) | Access setup asks for a payment method | backup export does nothing until new code is written |

My recommendation, in order:

1. **Wait for Netlify's credits, then deploy once.** The commit that added this document, `5c593bc`, was pushed on 2026-11-18 at 16:08 UTC and Netlify skipped it, so the credits had not come back by then. Read the reset date on Netlify's billing page. Once credits are available, **Deploys > Trigger deploy** builds the newest commit without a new push, and the phone offers the update with all data kept.
2. **Adopt the checkpoint rule in Route 0** so 300 credits cover releases, not work-in-progress commits.
3. **If 20 deploys a month is still too few, use Route C.** It is the only alternative that keeps HTTPS, private access and updates from anywhere with no code change.
4. **Use Route B when you want a build on the phone today and have the cable.** It needs no account and no code change. Its limits are in its own section.
5. **Route A is a project, not an install step.** The scaffold works, but five app changes are needed before the APK is as safe for your data as the PWA.

## Why the phone stopped updating

**Verified** from Netlify's public deploy log for the site on 2026-11-18 12:31 UTC:

| Fact | Value |
| --- | --- |
| Deploys recorded | 25 |
| Successful production deploys | 20, from 2026-10-25T14:39Z (`c93c3ed`) to 2026-10-27T10:03Z (`85a5bd6`) |
| Later pushes | 5, all `state: error`, `skipped: true` |
| Skipped commits | `b7e1486` 10:32Z, `b564a8e` 11:03Z, `f44b1e7` 11:31Z, `0ead0dd` 12:01Z, `3cde874` 12:52Z, all on 2026-10-27 |
| Anonymous request to the site | HTTP 401, as expected for a private site |

**Documented** by Netlify ("How credits work" and the pricing page):

- The Free plan has 300 credits a month with a hard limit.
- Each production deploy costs 15 credits. 20 x 15 = 300.
- Deploy Previews and branch deploys cost 0 credits. Failed deploys and rollbacks cost 0.
- Bandwidth costs 20 credits per GB. Web requests cost 2 credits per 10,000. Compute costs 10 credits per GB-hour.
- When credits run out, the account's projects are paused and visitors see "Site not available".
- Credits reset at the start of each billing cycle.

The arithmetic matches the log: the 20th successful deploy was the last, and every push after it was skipped.

**Verified** again at 16:08 UTC the same day, after `5c593bc` was pushed: Netlify recorded that push as `state: error`, `skipped: true`, the same as the five before it, with no reason in the public record. The log then held 26 deploys, 20 successful and 6 skipped. Netlify's public site record names `85a5bd6` as the published deploy, published on 2026-10-27 at 10:03 UTC.

What the phone is missing: the four modules rewritten after `85a5bd6` (design UX and drawing, cinema camera, cinema light and edit, cinema sound and study), the final-gates commit `3cde874`, and `5c593bc` with the dark theme and the other changes listed in [ux-plan-2026-11.md](ux-plan-2026-11.md).

Two things I could not see without your Netlify login:

- **The reset date.** The first deploy was 2026-10-25, but the billing cycle follows the account, not the site. The date is on the team's billing and usage page.
- **Whether the site is paused.** A private site answers 401 to anonymous requests either way. The installed app keeps working from its offline cache in both cases.

To repeat the check yourself, replace `<site-id>` with the value from the site's Netlify configuration page:

```powershell
$d = Invoke-RestMethod "https://api.netlify.com/api/v1/sites/<site-id>/deploys?per_page=100"
$d | Select-Object -First 8 created_at, state, skipped, @{n='commit';e={$_.commit_ref.Substring(0,7)}}
```

## Move your data before changing routes

Browser storage belongs to an origin: scheme, host and port together. Routes A, B and C each use a different origin from `https://unscrollbytetrax.netlify.app`, so the new install starts empty. Route 0 keeps the origin and needs none of this.

1. On the phone, open the currently installed UNSCROLL. It works offline.
2. Go to **You > Backups and data > Export backup**. Chrome saves `unscroll-backup-YYYY-MM-DD.json` to Downloads.
3. Confirm the file exists in the Files app. Copy it somewhere else as well (Drive, email to yourself, or the PC). It contains your notes and nickname as readable text.
4. Install the new copy by the route you chose.
5. In the new copy, go to **You > Backups and data > Import backup** and pick the file. Import replaces the library, it does not merge.
6. Check your notes, saved lessons and streak in the new copy.
7. Only then remove the old app. Removing it earlier risks the only copy of your data.

Version-1 backups from older builds import into the current build. The README records this, and the import path is covered by the unit and browser tests.

The reverse direction can fail. The backup format rejects fields it does not know (**Verified**: the state schema in [src/lib/schema.ts](../src/lib/schema.ts) is strict). A backup exported after you choose an Appearance in the new build carries a `theme` field, and a build older than this document refuses that file. Move data from the old copy to the new one, and keep the old export until the new copy is confirmed.

The build label is how you tell copies apart. **You > Offline and updates > App build** shows `<commit>-<timestamp>` for Netlify builds and `local-<timestamp>` for builds made on this PC. To stamp a local build with its commit:

```powershell
$env:COMMIT_REF = git rev-parse HEAD
npm run build
Remove-Item Env:COMMIT_REF
```

**Verified** by reading [vite.config.ts](../vite.config.ts) and by building: with the variable set, `dist/api/app-version.json` reported build `3cde874bedf3-20261118131536`. Without it the label starts with `local`.

## Route 0: stay on Netlify and stop spending credits on checkpoints

This is the only route where the phone keeps its data without an export, because the origin does not change.

### Get the current build onto the phone

1. **Documented.** Sign in to Netlify and open the team's billing and usage page. Read the credit balance and the reset date.
2. Once credits are available, deploy once. Either push a commit to `main`, or use **Deploys > Trigger deploy** in the dashboard. Cost: 15 credits.
3. On the phone, open the installed app while online. Each time you return to it, at most once a minute, it compares its build with `/api/app-version.json` and offers the update. **Verified** in [src/hooks/useAppStatus.ts](../src/hooks/useAppStatus.ts).
4. If the app says the private site needs a fresh sign-in, open `https://unscrollbytetrax.netlify.app/api/update.html` in the same browser, sign in, choose **Check update**, then **Apply downloaded update**. The README section "If a published update still looks old" has the full procedure.
5. Compare **You > Offline and updates > App build** with the commit you deployed.

### Stop the same failure next month

The 20 deploys were used within 44 hours because every checkpoint commit was pushed to `main`, and every push to `main` is a production deploy. Any one of these prevents a repeat.

| Method | Label | Effect |
| --- | --- | --- |
| Put `[skip netlify]` in the commit message of the newest commit in a push | Documented | Netlify does not build that push. GitHub Actions still runs, so [ci.yml](../.github/workflows/ci.yml) keeps testing every checkpoint. `[skip ci]` also stops Netlify, but GitHub documents it as one of its own skip keywords, so CI would not run either. **Verified** once on 2026-11-18: commit `3aee002` carried the marker, Netlify's log gained no entry for it, and GitHub Actions ran and passed. The unmarked push before it did get an entry, a skipped one. The credits were already used up that day, so this shows that Netlify honors the marker, not what a marked push costs while credits remain. |
| Push checkpoints to a branch other than `main`, merge when you want a phone build | Documented | Only the production branch produces a production deploy. Branch deploys cost 0 credits if you enable them. |
| Set **Build status** to **Stopped builds** (Project configuration > Developer settings > Continuous deployment > Build settings > Configure) | Documented | Netlify builds nothing: no pushes, no build hooks, and **Trigger deploy** is unavailable. To release, switch back to **Active builds**, then push or use **Trigger deploy**. Activating does not start a build by itself. |
| Lock auto publishing | Unverified for credits | Builds still run. I did not find a statement on whether a locked build is charged, so do not rely on it to save credits. |

This repository now uses the first method. [.github/copilot-instructions.md](../.github/copilot-instructions.md) tells any assistant working here to mark checkpoint commits with `[skip netlify]` and to leave the marker off only for a build meant for the phone.

### Limits of this route

- 300 credits is 20 deploys at most. Bandwidth, requests and the scheduled function draw from the same balance. One full download of the app is 10.4 MiB before compression, which is about 0.2 credits.
- A branch deploy has a different URL, so it is a different origin with empty storage. It is useful for looking at a build, not for daily use. [netlify/functions/discover.ts](../netlify/functions/discover.ts) is read-only on unpublished deploys.
- If the account runs out again, the installed app still opens and every original lesson still works offline. Only updates and new daily discoveries stop.

## Route B: install the PWA from this PC over USB

Chrome treats `http://localhost` as a secure context, so service workers and installation work there without HTTPS. USB port forwarding makes the phone's `localhost:4173` reach this PC's preview server. The app is the same production build, with no code change.

### What you need

- The phone, a USB data cable, and Chrome on both the phone and this PC.
- On the phone: **Settings > About phone**, tap **Build number** seven times, then **Settings > System > Developer options > USB debugging**. **Documented.** The menu path differs by phone maker; Google's developer-options page lists the common ones.
- Nothing new on the PC if you use Chrome's built-in port forwarding. adb is optional.

### Steps

1. **Verified.** Build and serve the production app from the repository folder:

   ```powershell
   $env:COMMIT_REF = git rev-parse HEAD
   npm run build
   Remove-Item Env:COMMIT_REF
   npm run preview
   ```

   The preview listens on `http://localhost:4173` and stops with an error if that port is taken. The VS Code task **UNSCROLL: preview production PWA** runs the last line for you.

2. **Documented.** Connect the phone by USB. Unlock it and accept **Allow USB debugging?**.

3. **Documented.** In desktop Chrome open `chrome://inspect/#devices`. Tick **Discover USB devices**. The phone appears under **Remote Target** once the prompt on the phone has been accepted.

4. **Documented.** Click **Port forwarding**. Enter port `4173` on the left and `localhost:4173` on the right. Tick **Enable port forwarding**, then **Done**. Keep this tab open.

   With adb instead (adb is not installed on this PC; `winget install --id Google.PlatformTools --exact` provides it, and using it means accepting the Android SDK licence):

   ```powershell
   adb devices
   adb reverse tcp:4173 tcp:4173
   adb reverse --list
   ```

5. In Chrome on the phone, open `http://localhost:4173`.

6. Go to **You > Offline and updates** and wait for **Ready for offline reading**. The app downloads about 10 MiB.

7. **Documented.** Open Chrome's three-dot menu, choose **Add to Home screen**, then **Install**. Older Chrome versions show **Install app** in the menu directly.

8. Import your backup as described in [Move your data](#move-your-data-before-changing-routes).

9. Unplug the cable. Turn on airplane mode. Open UNSCROLL from the home screen and read a lesson. This proves the offline copy is complete.

### Updating later

1. Pull the new code, build and start the preview as in step 1.
2. Connect the phone and repeat the port forwarding. Forwarding rules do not survive a disconnect.
3. Open the installed app. The phone needs some network connection, Wi-Fi or mobile, because the app skips its update check when the browser reports that it is offline (**Verified** in [src/hooks/useAppStatus.ts](../src/hooks/useAppStatus.ts)).
4. Choose **You > Offline and updates > Check for updates**, then **Install downloaded update**.

### Caveats

- **Installed app or shortcut: Unverified.** Chrome installs a PWA as a WebAPK that Google's server builds. Chrome's own check (`webapps_utils.cc` in Chromium) only rejects manifest URLs that contain a username or password, so Chrome will ask for a WebAPK for `http://localhost:4173`. I found no documentation saying whether the server issues one for a localhost origin, and I could not test it. If it refuses, Chrome adds a home-screen shortcut. A shortcut has a small Chrome badge on its icon and does not appear in **Settings > Apps**. `chrome://webapks` on the phone lists real WebAPKs. Offline reading works in both cases, because the service worker belongs to Chrome, not to the WebAPK.
- **The data lives in Chrome's profile.** Clearing Chrome's site data for `localhost`, or clearing Chrome's storage in Android settings, deletes the library. Use **You > Protect browser storage**, and export backups.
- **`localhost:4173` is one origin for anything served there.** If you ever forward a different project to port 4173 on this phone, it shares storage with UNSCROLL. Keep the port for this app.
- **Without the PC, the update check and discoveries fail quietly.** The app says it is showing a cached edition. Lessons, notes, practice and review are unaffected.
- **The preview's discovery ledger is in memory.** It resets each time the preview restarts, so an edition can repeat articles served on an earlier day.
- **Windows may need the phone maker's USB driver** if the phone does not appear in step 3. Google's troubleshooting page lists them by manufacturer. **Documented.**
- **A PC managed by an employer can block this.** If device-control software blocks the phone's debugging interface, neither Chrome nor adb will list the phone. I could not test this without the phone.
- **The preview binds to all network interfaces** ([vite.config.ts](../vite.config.ts) sets `host: '0.0.0.0'`). While it runs, other devices on the same network can load the app's files. They contain no personal data. Stop the preview when the phone has finished downloading.
- **Wireless debugging is an alternative to the cable** on Android 11 and later: `adb pair <ip>:<port>`, then `adb connect`, then the same `adb reverse`. **Documented** for pairing. Whether `adb reverse` holds over Wi-Fi on your phone, and whether the Wi-Fi network lets the two devices reach each other, is **Unverified**.

## Route C: free hosting

### Cloudflare Pages with Direct Upload

Direct Upload sends the already-built `dist` folder from this PC. Cloudflare does not build anything, so there is no build quota to exhaust and no Git connection.

**Documented** limits of the Free plan, against what this app needs:

| Limit | Cloudflare Pages Free | UNSCROLL |
| --- | --- | --- |
| Files per site | 20,000 | 657 (**Verified** in `dist`) |
| Largest file | 25 MiB | 876 kB (**Verified**) |
| Builds per month, Git integration only | 500 | not used with Direct Upload |
| `_headers` rules | 100, each line up to 2,000 characters | 6 rules, longest line 283 characters (**Verified**) |

#### Steps

All **Documented**, none run.

1. Create a free Cloudflare account.

2. Build with the commit stamp, from the repository folder:

   ```powershell
   $env:COMMIT_REF = git rev-parse HEAD
   npm run build
   Remove-Item Env:COMMIT_REF
   ```

3. Delete the Netlify rewrite file from the build output:

   ```powershell
   Remove-Item dist\_redirects
   ```

   Reason: the file holds `/* /index.html 200`. Netlify applies that rule only when no file matches. Cloudflare's documentation says "Redirects are always followed, regardless of whether or not an asset matches the incoming request", so the same line could answer every script and image request with the HTML page. Cloudflare already falls back to `index.html` for unknown paths when the site has no top-level `404.html`, and `dist` has none (**Verified**). My recollection is that wrangler reports this exact rule as an infinite loop and ignores it; that is **Unverified**, and deleting the file makes the question irrelevant.

4. Sign in and create the project. `npx` downloads wrangler on first use and does not add it to `package.json`:

   ```powershell
   npx wrangler login
   npx wrangler pages project create
   ```

   wrangler asks for a project name and a production branch. Answer `unscroll` and `main`. The app is served at `https://<name>.pages.dev`, or at the name plus a few random characters if the name is taken. wrangler prints the address. Use that exact address from then on, because the address is the origin that holds your data.

5. Upload, from the `main` branch:

   ```powershell
   git branch --show-current
   npx wrangler pages deploy dist
   ```

   Inside a Git folder wrangler reads the current branch. On `main` this is a production deployment at the address above. On any other branch it becomes a preview at `<branch>.<name>.pages.dev`, which is a different origin with empty storage. `--branch=main` forces the production branch.

   No command line at all: in the dashboard, **Workers & Pages > Create application > Get started > Drag and drop your files** accepts the `dist` folder. Its limit is 1,000 files and the build has 657.

6. Make it private before opening it on the phone. See the next section.

7. On the phone, open the `pages.dev` address in Chrome, sign in, wait for **Ready for offline reading**, install, then import your backup.

To update later, repeat steps 2, 3 and 5. The installed app offers the update the next time it is opened online.

#### Private access with Cloudflare Access

Without this, anyone who knows the address can open the app. The GitHub repository is already public, so that exposes no content that is not public today, and your notes never leave the phone. Private access is still what the Netlify site has now, so these steps keep parity.

**Documented** in Cloudflare's Pages "Known issues" page and the Zero Trust setup guide:

1. In the Cloudflare dashboard open **Workers & Pages**, select the project, then **Settings > Enable access policy**. The first time, Cloudflare asks you to create a Zero Trust organization: a team name and payment details. The Free plan states that you will not be charged.
2. That policy covers preview addresses only (`*.<name>.pages.dev`). Select **Manage** on it.
3. Under **Access > Applications**, open the application for your project and choose **Configure**.
4. In **Public hostname**, delete the `*` from the **Subdomain** field and save. Cloudflare may ask you to change the application name to save it. The production address `<name>.pages.dev` is now behind Access.
5. Return to the Pages project **Settings** and select **Enable access policy** again. This restores the policy for previews. You should now see two Access applications.
6. Open the policy and check who it allows. Restrict it to your own email address. I did not see the default rule, so do not assume it is already limited to you.
7. New organizations sign in with a Cloudflare account by default. A one-time PIN sent to your email can be added under **Zero Trust > Integrations > Identity providers**.

When the Access session expires, the cached app keeps opening. Its version check uses `redirect: 'manual'` and treats a redirect, 401 or 403 as "sign in needed" (**Verified** in [src/lib/app-update.ts](../src/lib/app-update.ts)), so it shows the sign-in message. It does not mistake the login page for an update.

#### What changes compared with Netlify

- **No daily Wikipedia edition.** `discover` and `daily-discovery` are Netlify Functions and are not uploaded. The app reports a cached or unavailable edition. Porting [netlify/lib/discovery-service.ts](../netlify/lib/discovery-service.ts) to a Pages Function with KV storage is possible and not done.
- **`.html` is dropped from addresses.** Cloudflare redirects `/api/update.html` to `/api/update`. The link in the app still arrives, with one redirect. Both paths start with `/api/`, so the service worker continues to leave them to the network.
- **`_headers` carries over.** The CSP, `no-store` on `/api/app-version.json` and the long cache on `/assets/*` use syntax Cloudflare supports. Cloudflare adds `Access-Control-Allow-Origin: *` and `Cache-Control: public, max-age=0, must-revalidate` by default.
- **A Direct Upload project cannot be switched to Git integration later**, and the reverse. To change, create a second project.
- **If you later choose Git integration instead**, the default build image has Node 22. Set a `NODE_VERSION` variable to 24, the version this project is built and tested on.

### GitHub Pages

I do not recommend it for this app. The reasons are specific:

- **Documented.** On a Free plan a Pages site is public. Private Pages needs GitHub Enterprise Cloud.
- **Documented.** A project site is served from `https://<owner>.github.io/<repo>/`. **Verified** in the code: the app uses root-absolute paths throughout (`start_url: '/#/today'`, `scope: '/'`, `/lesson-visuals/`, `/api/app-version.json`, `/offline-library.json`, `/boot.js`, and the service worker's `navigateFallback: '/index.html'`). Every one of those needs a base path before the app works in a sub-folder.
- **Documented.** Pages serves no custom response headers, so the CSP and `no-store` rules in `public/_headers` are lost.
- No server functions, so no daily edition.

It works without code changes only at a root address: a repository named `<owner>.github.io`, or a custom domain. The official workflow uses `actions/configure-pages`, `actions/upload-pages-artifact` and `actions/deploy-pages` with `pages: write` and `id-token: write` permissions. **Documented** limits: 1 GB site size, 100 GB a month soft bandwidth, 10-minute deploy timeout.

## Route A: a real APK with Capacitor

Capacitor wraps the built web app in an Android WebView and produces an ordinary APK. The APK contains every lesson and diagram, needs no server, and installs like any app.

State of this route today: the scaffold commands are **Verified** in a scratch folder with Node 24.14.0. The Gradle build, signing and installation are **Documented** and not run, because the PC has no JDK or Android SDK. Five app changes are still to be written.

### What the scaffold produces

**Verified.** Capacitor 8.6.2 (`@capacitor/core`, `@capacitor/cli`, `@capacitor/android`) and `@capacitor/app` 8.1.2 generated a project with these values:

| Setting | Value | File |
| --- | --- | --- |
| Minimum Android | API 24 (Android 7.0) | `android/variables.gradle` |
| Compile and target SDK | 36 | `android/variables.gradle` |
| Android Gradle Plugin | 8.13.0 | `android/build.gradle` |
| Gradle | 8.14.3 | `android/gradle/wrapper/gradle-wrapper.properties` |
| Java level | 21, so JDK 21 is required | `android/app/capacitor.build.gradle` |
| Application ID | `app.tetrax.unscroll` | `android/app/build.gradle` |
| Version | `versionCode 1`, `versionName "1.0"` | `android/app/build.gradle` |
| Permissions | `android.permission.INTERNET` only | `AndroidManifest.xml` |
| Other manifest values | `allowBackup="true"`, `launchMode="singleTask"` | `AndroidManifest.xml` |

`npx cap doctor android` printed "Android looking great!" on a PC with no JDK and no SDK. It checks package versions only. Do not read it as proof the toolchain works.

### Step 1: install the toolchain

**Documented**, not run. About 1 to 2 GB of downloads and caches in total; that figure is my estimate, not a measurement.

JDK 21 (winget package ID **Verified** to exist, version 21.0.13.9; the installer needs administrator rights, and Adoptium also offers a zip that does not):

```powershell
winget install --id EclipseAdoptium.Temurin.21.JDK --exact
Get-ChildItem 'C:\Program Files\Eclipse Adoptium'
[Environment]::SetEnvironmentVariable('JAVA_HOME', 'C:\Program Files\Eclipse Adoptium\<folder shown above>', 'User')
```

Android command line tools. Read and accept the SDK licence on the Android Studio download page before using the direct link:

```powershell
$sdk = "$env:LOCALAPPDATA\Android\Sdk"
New-Item -ItemType Directory -Force "$sdk\cmdline-tools" | Out-Null
Invoke-WebRequest 'https://dl.google.com/android/repository/commandlinetools-win-15859902_latest.zip' -OutFile "$env:TEMP\cmdline-tools.zip"
(Get-FileHash "$env:TEMP\cmdline-tools.zip" -Algorithm SHA256).Hash
```

The hash must equal `90AE805D20434428BFFCB699C290860F19BB5F66A67E6B330067E3DE801FB04A` (155.7 MB, published on the download page). Then:

```powershell
Expand-Archive "$env:TEMP\cmdline-tools.zip" "$sdk\cmdline-tools"
Rename-Item "$sdk\cmdline-tools\cmdline-tools" latest
[Environment]::SetEnvironmentVariable('ANDROID_HOME', $sdk, 'User')
& "$sdk\cmdline-tools\latest\bin\sdkmanager.bat" --licenses
& "$sdk\cmdline-tools\latest\bin\sdkmanager.bat" "platform-tools" "platforms;android-36" "build-tools;36.0.0"
```

The documented layout is `<sdk>\cmdline-tools\latest\bin`; `sdkmanager` uses it to locate the SDK folder. Open a new terminal afterwards so `JAVA_HOME` and `ANDROID_HOME` are visible. Google's page now marks `sdkmanager` as deprecated in favour of an `android sdk install` command; the commands above are the ones still documented on the `sdkmanager` page.

### Step 2: add Capacitor to the project

**Verified** in the scratch folder. Run them in the repository folder:

```powershell
npm install @capacitor/core @capacitor/android @capacitor/app
npm install -D @capacitor/cli
npx cap init "UNSCROLL" "app.tetrax.unscroll" --web-dir dist
npx cap add android
```

`cap add android` wrote 65 files (282 KB) and needs no SDK. `cap init` writes `capacitor.config.json` in a plain project; in this TypeScript project it is expected to write `capacitor.config.ts` (**Unverified**).

The application ID is permanent. Android treats a different ID as a different app with its own empty storage.

Add these lines to the repository's `.gitignore` before the first commit. The repository is public and Capacitor's generated ignore file leaves keystores unignored:

```gitignore
*.jks
*.keystore
keystore.properties
```

### Step 3: build the web app and copy it in

**Verified** for `cap sync`:

```powershell
$env:COMMIT_REF = git rev-parse HEAD
npm run build
Remove-Item Env:COMMIT_REF
npx cap sync android
```

### Step 4: build a debug APK

**Documented**, not run:

```powershell
Set-Location android
.\gradlew.bat assembleDebug
Set-Location ..
```

Output: `android\app\build\outputs\apk\debug\app-debug.apk`. The first run downloads Gradle 8.14.3 and the Android libraries.

If Gradle stops with `PKIX path building failed`, a proxy on the network is re-signing TLS traffic and Java does not trust its certificate. Adding `systemProp.javax.net.ssl.trustStoreType=Windows-ROOT` to `android\gradle.properties` makes Java use the Windows certificate store. **Unverified** on this PC.

A debug APK is signed with a key that Android's tools create in `%USERPROFILE%\.android\debug.keystore`. That key exists only on this PC. Use a debug build to try the app, and a release build for the copy that holds your data.

### Step 5: create a signing key and build a release APK

**Documented**, not run. Create the key once:

```powershell
keytool -genkey -v -keystore "$env:USERPROFILE\unscroll-release.jks" -keyalg RSA -keysize 2048 -validity 10000 -alias unscroll
```

Create `android\keystore.properties` (ignored by git after step 2). Use forward slashes in the path:

```properties
storePassword=<your store password>
keyPassword=<your key password>
keyAlias=unscroll
storeFile=C:/Users/<your user name>/unscroll-release.jks
```

In `android\app\build.gradle`, load the file above the `android {` line:

```groovy
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
```

Inside `android { ... }`, add the signing configuration and reference it from the release build type:

```groovy
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
```

Build:

```powershell
Set-Location android
.\gradlew.bat assembleRelease
Set-Location ..
```

Output: `android\app\build\outputs\apk\release\app-release.apk`.

`npx cap build android` is a wrapper for the same thing. Its default signing type is `jarsigner`, the old v1 scheme. If you use it, pass `--androidreleasetype APK --signing-type apksigner` with the four `--keystore...` options, and put the SDK's `build-tools\36.0.0` folder on `PATH`.

**Keep two copies of the `.jks` file and its passwords outside this PC.** Android installs an update only when it is signed with the same key as the installed app. Without the key, the only way forward is to uninstall, which deletes the library unless you exported a backup.

### Step 6: install on the phone

**Documented**, not run. With USB debugging on and the phone connected:

```powershell
adb install -r android\app\build\outputs\apk\release\app-release.apk
```

`-r` replaces the app and keeps its data. Without adb: copy the APK to the phone, open it from the Files app, and allow **Install unknown apps** for the Files app when Android asks (Android 8 and later).

Google Play Protect can show "App scan recommended" for an app it has not seen. Its documented automatic block applies to sideloaded apps that request SMS, notification-listener or accessibility permissions. This app requests only `INTERNET`.

### Step 7: update later

1. Raise `versionCode` in `android\app\build.gradle` by one. Android refuses a lower number.
2. Repeat steps 3, 5 (build only) and 6.
3. Open the app. See "service worker" below for the extra tap that the unchanged app needs.

### App changes this route still needs

These come from reading the Capacitor 8.6.2 Android source in the scratch project. None has been observed on a device.

1. **Backup export does nothing in the APK.** [src/lib/storage.ts](../src/lib/storage.ts) downloads the backup through an `<a download>` link to a blob. Capacitor registers no download listener, so the WebView drops the request. Export needs a native path: `@capacitor/filesystem` to write the JSON and `@capacitor/share` to hand it to Files or Drive, or Android's create-document picker. Until this exists the APK has no way to back up your notes, which is why I rank it first. Import works, because Capacitor implements the file chooser.
2. **The service worker runs inside the APK.** Capacitor routes service-worker requests through its local server by default. The app would cache its 657 files a second time, and after installing a new APK it would keep showing the old cached build until you accept the in-app update prompt. Either accept that extra tap, or build the Android copy with `VitePWA({ disable: true })` and teach [src/hooks/useAppStatus.ts](../src/hooks/useAppStatus.ts) to report "files are bundled in the app" instead of checking Cache Storage.
3. **The back button does not close the app.** With `@capacitor/app` installed and no listener, Back goes one step back in history and does nothing at the first screen. Add a `backButton` listener that calls `App.minimizeApp()` when there is no history left.
4. **No daily Wikipedia edition.** `/.netlify/functions/discover` does not exist in the APK. Either hide the section in the Android build, or move the fetch into the app and call Wikipedia directly, which also needs the ledger stored on the device.
5. **Web-only settings should be hidden.** "Install UNSCROLL", "Protect browser storage" and the update-recovery link have no meaning inside an APK.

Smaller items: the generated launcher icon is Capacitor's default and must be replaced in `android/app/src/main/res/mipmap-*`. With target SDK 36, Android 15 and later draw the app under the status and navigation bars. Capacitor 8 passes the bar sizes to CSS and the app already pads with `env(safe-area-inset-*)`; whether the two line up on your phone is **Unverified**.

### Where the data lives

The APK serves the app at `https://localhost` inside its own WebView storage. Chrome cannot see it and clearing Chrome's data does not touch it. Uninstalling the app, or **Settings > Apps > UNSCROLL > Storage > Clear storage**, deletes it. I did not test whether Android's automatic backup restores WebView storage on a new phone, so use the app's own export.

### Android developer verification

**Documented** on Google's developer-verification page, which I re-read on 2026-11-18:

| Date | What starts |
| --- | --- |
| August 2026 | Limited distribution accounts and the "advanced flow" for power users became available. |
| 30 September 2026 | Protections for users installing from participating stores in Brazil, Indonesia, Singapore and Thailand, on certified devices running Android 8 or later. |
| 2027 and beyond | Expansion to all apps on certified Android devices worldwide. |

What that means for a personal APK, from the same page and its FAQ:

- India is not one of the four countries, so nothing changes for you until the 2027 expansion.
- Installing with `adb install` never requires verification and has no waiting period.
- After the expansion, an app from an unregistered developer installs only through adb or the advanced flow. The advanced flow is: enable developer options, confirm you are not being coached, restart and re-authenticate, wait one day once, then allow installs for 7 days or indefinitely.
- A limited distribution account is free and needs no government ID. It needs a Google account with 2-Step Verification and a payments profile. The landing page and FAQ give a cap of 20 devices; the limited-distribution guide said 50 when I read it. Check the current figure before relying on either.

These pages are still being revised. Re-read them before planning around the dates.

### Building the APK without installing anything here

**Unverified.** GitHub Actions is free for public repositories, and GitHub's Ubuntu runners ship with a JDK and the Android SDK. A workflow could run steps 3 to 5 and attach the APK as an artifact, with the keystore stored as an encrypted secret. I did not write or run such a workflow. Anyone signed in to GitHub can download artifacts from a public repository, so the APK would be as public as the source already is.

## Routes not written up

- **Trusted Web Activity (Bubblewrap) and PWABuilder.** Both package a hosted HTTPS site and verify it with a file served from that site. They need working hosting, so they do not solve this problem.
- **A web server on the phone itself** (for example Termux serving the `dist` folder on `localhost`). It would remove the cable from Route B. I did not research or test it, so there are no steps here.
- **Copying `dist` to the phone and opening `index.html` as a file.** The built page loads `/assets/...` and `/boot.js` by root-absolute paths, which point at the root of the phone's file system on a `file://` page, and browsers do not register service workers there. The app would not start.

## What was and was not run

Run on this PC on 2026-11-18:

- Netlify deploy log read from the public API; site status checked anonymously.
- `npm run build` (exit 0), `npm run preview`, and a 48-screenshot capture of the built app.
- `dist` measured: 657 files, 10.44 MiB, largest file 876 kB, no `404.html`.
- `public/_headers` and `public/_redirects` read against Cloudflare's documented limits.
- Capacitor: `npm install`, `cap init`, `cap add android`, `cap sync android`, `cap doctor android` in a scratch folder; generated files read.
- Capacitor 8.6.2 Android source read for download, file chooser, back button, service worker and external link behaviour.
- `winget search` for the JDK and platform-tools package IDs.
- One push of commit `5c593bc` to `main` at 16:08 UTC. Netlify skipped it, and the deploy log was read again afterwards.
- One push of commit `3aee002` to `main` at 16:27 UTC with `[skip netlify]` in its message. The deploy log, read at 16:41 UTC, still held 26 entries and none for that commit. GitHub Actions ran for it. The commit that added this line was pushed the same way.

Not run:

- Anything on the phone: USB debugging, port forwarding, PWA installation, WebAPK check, APK installation.
- JDK and Android SDK installation, any Gradle build, key creation, signing.
- Any Cloudflare step: account, wrangler login, upload, Access.
- Any GitHub Pages deploy, and any GitHub Actions workflow that builds an APK.
- The five app changes for Route A.

## Sources

Netlify
- How credits work: https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/
- Pricing: https://www.netlify.com/pricing/
- Manage deploys (skip markers, locking, trigger deploy): https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/
- Stop or activate builds: https://docs.netlify.com/build/configure-builds/stop-or-activate-builds/
- Ignore builds: https://docs.netlify.com/build/configure-builds/ignore-builds/
- GitHub Actions, skipping workflow runs: https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs

PWA over USB
- Chrome DevTools, remote debugging: https://developer.chrome.com/docs/devtools/remote-debugging
- Chrome DevTools, port forwarding to a local server: https://developer.chrome.com/docs/devtools/remote-debugging/local-server
- Android, access a local development server: https://developer.android.com/develop/ui/views/layout/webapps/access-local-server
- Android, developer options: https://developer.android.com/studio/debug/dev-options
- adb: https://developer.android.com/tools/adb
- Platform-tools releases: https://developer.android.com/tools/releases/platform-tools
- Learn PWA, tools and debug: https://web.dev/learn/pwa/tools-and-debug
- Learn PWA, installation: https://web.dev/learn/pwa/installation
- Install criteria: https://web.dev/articles/install-criteria
- WebAPKs on Android: https://web.dev/articles/webapks
- How Chrome handles manifest updates: https://web.dev/articles/manifest-updates
- Chromium WebAPK check: https://raw.githubusercontent.com/chromium/chromium/main/components/webapps/browser/android/webapps_utils.cc

Cloudflare
- Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Direct Upload: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Serving Pages (SPA fallback, `.html` handling): https://developers.cloudflare.com/pages/configuration/serving-pages/
- Redirects: https://developers.cloudflare.com/pages/configuration/redirects/
- Headers: https://developers.cloudflare.com/pages/configuration/headers/
- Build image: https://developers.cloudflare.com/pages/configuration/build-image/
- Known issues (Access on `pages.dev`): https://developers.cloudflare.com/pages/platform/known-issues/
- Zero Trust setup: https://developers.cloudflare.com/cloudflare-one/setup/
- One-time PIN: https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/
- Zero Trust plans: https://www.cloudflare.com/plans/zero-trust-services/

GitHub Pages
- What is GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Private Pages (Enterprise Cloud): https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site
- Vite static deploy guide: https://vite.dev/guide/static-deploy

Capacitor and Android builds
- Capacitor environment setup: https://capacitorjs.com/docs/getting-started/environment-setup
- Capacitor Android: https://capacitorjs.com/docs/android
- Capacitor workflow: https://capacitorjs.com/docs/basics/workflow
- Capacitor build command: https://capacitorjs.com/docs/cli/commands/build
- Capacitor configuration: https://capacitorjs.com/docs/config
- Capacitor 8 update notes: https://capacitorjs.com/docs/updating/8-0
- App plugin (back button): https://capacitorjs.com/docs/apis/app
- System bars: https://capacitorjs.com/docs/apis/system-bars
- Android command line tools download: https://developer.android.com/studio#command-line-tools-only
- sdkmanager: https://developer.android.com/tools/sdkmanager
- Build from the command line: https://developer.android.com/build/building-cmdline
- App signing: https://developer.android.com/studio/publish/app-signing
- Alternative distribution: https://developer.android.com/distribute/marketing-tools/alternative-distribution
- Play Protect developer guidance: https://developers.google.com/android/play-protect/warning-dev-guidance
- Install unknown apps: https://support.google.com/googleplay/answer/2812853

Android developer verification
- Overview and timeline: https://developer.android.com/developer-verification
- FAQ: https://developer.android.com/developer-verification/guides/faq
- Limited distribution: https://developer.android.com/developer-verification/guides/limited-distribution
