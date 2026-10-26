// Standalone recovery page. Do not import the app or initialize its storage.
(() => {
  'use strict';

  const VERSION_PATH = '/api/app-version.json';
  const WORKER_PATH = '/sw.js';
  const APP_PATH = '/#/profile?section=offline';
  const ROOT_SCOPE = new URL('/', location.origin).href;
  const DATABASE = 'keyval-store';
  const STORE = 'keyval';
  const STORAGE_KEY = 'unscroll-library-v1';
  const TIMEOUT_MS = 45_000;
  const MAX_VERSION_BYTES = 8_192;
  const MAX_BACKUP_CHARACTERS = 20_000_000;
  const supportsWorkers = window.isSecureContext && 'serviceWorker' in navigator;
  const supportsBackup = 'indexedDB' in window;
  const byId = (id) => document.getElementById(id);
  const ui = {
    check: byId('check-update'), apply: byId('apply-update'), backup: byId('download-backup'),
    confirmation: byId('saved-work'), versionStatus: byId('version-status'),
    workerStatus: byId('worker-status'), updateStatus: byId('update-status'),
    backupStatus: byId('backup-status'), details: byId('latest-details'),
    build: byId('latest-build'), builtAt: byId('latest-built-at'),
    lessons: byId('latest-lessons'), illustrations: byId('latest-illustrations'),
    manualOpen: byId('manual-open'),
  };

  const messages = {
    unauthorized: 'The private site returned HTTP 401. Use Sign in and retry, complete the authorized site sign-in, then choose Check update. The old app can remain cached while signed out.',
    forbidden: 'The private site returned HTTP 403. Sign in with an account allowed to access this Netlify site, then choose Check update. This page does not change site privacy.',
    redirect: 'The request returned a redirect instead of app files. Use Sign in and retry to complete the private-site login, then choose Check update.',
    response: 'The same-site request did not return the expected successful response. Check your connection and private-site sign-in, then retry. No current build is assumed.',
    jsonType: 'The version endpoint did not return JSON. It may have returned a sign-in page. Use Sign in and retry; the published build has not been confirmed.',
    workerType: 'The app worker was not returned as JavaScript. It may have returned an HTML sign-in page. Use Sign in and retry before checking again.',
    version: 'The version response has an invalid build, timestamp, item count, or size. No current build is assumed. Retry after the version endpoint is available.',
    registration: 'The root registration is not the expected same-site UNSCROLL worker. This page will not update or activate a different worker.',
    changed: 'The published version or worker changed during this operation. No waiting worker is approved now. Choose Check update again before applying.',
    redundant: 'The downloaded worker became redundant: it failed or was replaced. Choose Check update to retry. Your saved library has not been reset.',
    noWorker: 'No settled root app worker was reported. Choose Check update to retry, or open the old app. No current build is assumed.',
    offline: 'The browser reports that it is offline. Reconnect and use Check update. Your saved library has not been reset.',
    checkTimeout: 'The check reached 45 seconds. The browser may still be downloading; this page cannot cancel a worker installation. Choose Check update to read its state again.',
    activationTimeout: 'Activation was not confirmed within 45 seconds. This page did not reload. Save any remaining work, then use Open app or Reload update page below.',
    backupTimeout: 'Reading device storage reached 45 seconds. No stored data was changed. Retry the backup or use the old app to export it.',
    storage: 'Device storage could not be read. No stored data was changed. Export from the original app if possible, then retry here.',
    storageBlocked: 'Another connection is blocking the storage read. Save or export work in other UNSCROLL windows before closing them, then retry. No stored data was changed.',
    invalidBackup: "The stored snapshot does not have the supported backup structure. Its original data is preserved. Use the old app's recovery export; do not reset the library.",
    largeBackup: 'The backup exceeds the app import limit of 20,000,000 characters. No stored data was changed. Use the original app for recovery instead of resetting it.',
    download: 'The browser could not start the backup download. No stored data was changed. Try exporting from the original app.',
    cancelled: 'The operation stopped. Choose Check update to inspect the current worker before applying anything.',
    unavailable: 'The operation could not finish. Check your connection and private-site sign-in, then retry. Your saved library has not been reset.',
  };

  class PageError extends Error {
    constructor(code) {
      super(messages[code] || messages.unavailable);
      this.code = code;
    }
  }

  let operation = null;
  let approvedUpdate = null;
  let suspended = false;
  let inspectionNumber = 0;
  let detachWorkers = [];
  const watchedWorkers = new Set();
  const rootListeners = new Set();
  const downloads = new Map();

  function status(element, text, tone = 'neutral') {
    element.textContent = text;
    element.dataset.tone = tone;
  }

  function controls() {
    const busy = Boolean(operation) || suspended;
    ui.check.disabled = busy || !supportsWorkers;
    ui.backup.disabled = busy || !supportsBackup;
    ui.confirmation.disabled = busy || !supportsWorkers;
    ui.apply.disabled = busy || !supportsWorkers || !approvedUpdate
      || approvedUpdate.worker.state !== 'installed' || !ui.confirmation.checked;
    ui.check.setAttribute('aria-busy', String(operation?.kind === 'check'));
    ui.apply.setAttribute('aria-busy', String(operation?.kind === 'apply'));
    ui.backup.setAttribute('aria-busy', String(operation?.kind === 'backup'));
  }

  function revokeApproval(message) {
    const hadApproval = Boolean(approvedUpdate);
    approvedUpdate = null;
    if (!operation) ui.confirmation.checked = false;
    if (hadApproval && message) status(ui.updateStatus, message);
    controls();
  }

  function begin(kind) {
    if (operation || suspended) return null;
    const next = { kind, controller: new AbortController(), workers: new Set(), changed: false, posted: false, timer: 0 };
    if (kind === 'backup' && approvedUpdate) status(ui.updateStatus, 'After the backup, choose Check update again before applying a waiting worker.');
    operation = next;
    approvedUpdate = null;
    inspectionNumber += 1;
    if (kind !== 'apply') ui.confirmation.checked = false;
    next.timer = window.setTimeout(() => {
      const code = kind === 'backup' ? 'backupTimeout' : next.posted ? 'activationTimeout' : 'checkTimeout';
      next.controller.abort(new PageError(code));
    }, TIMEOUT_MS);
    controls();
    return next;
  }

  function finish(current) {
    window.clearTimeout(current.timer);
    if (operation === current) operation = null;
    controls();
  }

  // Browser update()/register() cannot be cancelled. Stop awaiting them at the
  // deadline, consume late rejections, and never let a late result enable Apply.
  function abortable(promise, signal) {
    if (!signal) return Promise.resolve(promise);
    return new Promise((resolve, reject) => {
      const aborted = () => reject(signal.reason || new PageError('cancelled'));
      signal.addEventListener('abort', aborted, { once: true });
      Promise.resolve(promise).then(
        (value) => { signal.removeEventListener('abort', aborted); resolve(value); },
        (error) => { signal.removeEventListener('abort', aborted); reject(error); },
      );
      if (signal.aborted) {
        signal.removeEventListener('abort', aborted);
        aborted();
      }
    });
  }

  function assertRunning(signal) {
    if (signal.aborted) throw signal.reason || new PageError('cancelled');
  }

  function cancelBody(response) {
    if (response.body && !response.body.locked) void response.body.cancel().catch(() => {});
  }

  function mediaType(response) {
    return (response.headers.get('Content-Type') || '').split(';', 1)[0].trim().toLowerCase();
  }

  async function sameSiteRequest(path, accept, signal) {
    assertRunning(signal);
    const response = await abortable(fetch(path, {
      method: 'GET', cache: 'no-store', headers: { Accept: accept },
      credentials: 'same-origin', mode: 'same-origin', redirect: 'manual',
      referrerPolicy: 'no-referrer', signal,
    }), signal);
    try {
      if (response.status === 401) throw new PageError('unauthorized');
      if (response.status === 403) throw new PageError('forbidden');
      if (response.type === 'opaqueredirect' || (response.status >= 300 && response.status < 400)) throw new PageError('redirect');
      if (response.status !== 200 || response.redirected) throw new PageError('response');
      const url = new URL(response.url);
      if (url.origin !== location.origin || url.pathname !== path || url.search || url.hash) throw new PageError('response');
      return response;
    } catch (error) {
      cancelBody(response);
      throw error;
    }
  }

  async function smallJson(response, signal) {
    if (Number(response.headers.get('Content-Length')) > MAX_VERSION_BYTES || !response.body) throw new PageError('version');
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8', { fatal: true });
    let size = 0;
    let text = '';
    try {
      while (true) {
        const part = await abortable(reader.read(), signal);
        if (part.done) break;
        size += part.value.byteLength;
        if (size > MAX_VERSION_BYTES) throw new PageError('version');
        text += decoder.decode(part.value, { stream: true });
      }
      return JSON.parse(text + decoder.decode());
    } catch (error) {
      assertRunning(signal);
      throw error instanceof PageError ? error : new PageError('version');
    } finally {
      void reader.cancel().catch(() => {});
      reader.releaseLock();
    }
  }

  function record(value) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
  }

  function calendarDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00.000Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }

  function isoTimestamp(value) {
    if (typeof value !== 'string' || value.length > 40) return false;
    const parts = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(Z|[+-](\d{2}):(\d{2}))$/.exec(value);
    return Boolean(parts && calendarDate(parts[1]) && Number(parts[2]) < 24
      && Number(parts[3]) < 60 && Number(parts[4]) < 60
      && (parts[5] === 'Z' || (Number(parts[6]) < 24 && Number(parts[7]) < 60))
      && Number.isFinite(Date.parse(value)));
  }

  function boundedInteger(value, maximum) {
    return Number.isSafeInteger(value) && value >= 0 && value <= maximum;
  }

  async function readVersion(signal) {
    const response = await sameSiteRequest(VERSION_PATH, 'application/json', signal);
    try {
      if (mediaType(response) !== 'application/json') throw new PageError('jsonType');
      const value = await smallJson(response, signal);
      if (!record(value) || typeof value.build !== 'string'
        || !/^[A-Za-z0-9][A-Za-z0-9._:+-]{0,159}$/.test(value.build)
        || !isoTimestamp(value.builtAt) || !boundedInteger(value.lessons, 1_000_000)
        || !boundedInteger(value.illustrations, 1_000_000)) throw new PageError('version');
      // These four fields are the entire contract. Do not assume a paths list,
      // release label, or a worker hash, or derive counts from a known release.
      return Object.freeze({ build: value.build, builtAt: value.builtAt, lessons: value.lessons, illustrations: value.illustrations });
    } finally {
      cancelBody(response);
    }
  }

  async function checkWorkerAccess(signal) {
    const response = await sameSiteRequest(WORKER_PATH, 'text/javascript, application/javascript', signal);
    try {
      if (!/^(?:text|application)\/(?:javascript|ecmascript|x-javascript)$/.test(mediaType(response))) throw new PageError('workerType');
      return true;
    } finally {
      // The browser downloads the worker itself. Never evaluate, print, or retain
      // this response, which could otherwise contain a private-site login page.
      cancelBody(response);
    }
  }

  function sameVersion(left, right) {
    return left.build === right.build && left.builtAt === right.builtAt
      && left.lessons === right.lessons && left.illustrations === right.illustrations;
  }

  function showVersion(version) {
    ui.build.textContent = version.build;
    ui.builtAt.dateTime = version.builtAt;
    ui.builtAt.textContent = new Date(version.builtAt).toISOString();
    ui.lessons.textContent = version.lessons.toLocaleString();
    ui.illustrations.textContent = version.illustrations.toLocaleString();
    ui.details.hidden = false;
    status(ui.versionStatus, `Published build read: ${version.build}. This is a comparison target, not a verified active build.`);
  }

  function clearVersion(message) {
    ui.details.hidden = true;
    for (const element of [ui.build, ui.builtAt, ui.lessons, ui.illustrations]) element.textContent = '';
    ui.builtAt.removeAttribute('datetime');
    status(ui.versionStatus, message);
  }

  function appWorker(worker) {
    if (!worker) return false;
    try {
      const url = new URL(worker.scriptURL);
      return url.origin === location.origin && url.pathname === WORKER_PATH && !url.search && !url.hash;
    } catch {
      return false;
    }
  }

  async function rootRegistration(signal) {
    const registration = await abortable(navigator.serviceWorker.getRegistration('/'), signal);
    if (!registration) return null;
    if (registration.scope !== ROOT_SCOPE) throw new PageError('registration');
    if ([registration.active, registration.waiting, registration.installing].some((worker) => worker && !appWorker(worker))) throw new PageError('registration');
    return registration;
  }

  function detachRootWatch() {
    for (const detach of detachWorkers) detach();
    detachWorkers = [];
    watchedWorkers.clear();
  }

  function listenToWorker(worker, pending = false) {
    if (!worker) return;
    if (!appWorker(worker)) throw new PageError('registration');
    if (pending && operation?.kind === 'check') operation.workers.add(worker);
    if (watchedWorkers.has(worker)) return;
    watchedWorkers.add(worker);
    worker.addEventListener('statechange', workerChanged);
    detachWorkers.push(() => worker.removeEventListener('statechange', workerChanged));
  }

  function bindRootWatch(registration) {
    detachRootWatch();
    if (!registration) return;
    registration.addEventListener('updatefound', workerChanged);
    detachWorkers.push(() => registration.removeEventListener('updatefound', workerChanged));
    listenToWorker(registration.installing, true);
    listenToWorker(registration.waiting, true);
    listenToWorker(registration.active);
  }

  function showWorker(registration) {
    if (!registration) {
      status(ui.workerStatus, 'No root app worker is registered. Check update can request a first installation.');
      return;
    }
    const worker = registration.installing || registration.waiting || registration.active;
    const states = {
      parsed: 'Worker state: parsed. The browser has discovered the script.',
      installing: 'Worker state: installing. The browser is downloading or installing app files.',
      installed: registration.waiting ? 'Worker state: installed and waiting. It has not been applied by this page.' : 'Worker state: installed. Waiting for the browser to settle its registration.',
      activating: 'Worker state: activating. Waiting for activation to finish.',
      activated: 'Worker state: activated. This state does not identify which app build is active.',
      redundant: 'Worker state: redundant. The worker failed or was replaced; choose Check update to retry.',
    };
    status(ui.workerStatus, states[worker?.state] || 'The registration has no reported worker state. Choose Check update to retry.');
  }

  function observationFailed(error) {
    if (suspended) return;
    revokeApproval();
    const failure = error instanceof PageError ? error : new PageError('unavailable');
    status(ui.workerStatus, failure.message, 'error');
    if (operation && operation.kind !== 'backup') operation.controller.abort(failure);
  }

  async function refreshRoot(signal) {
    const inspection = ++inspectionNumber;
    try {
      // Keep registrations only as short-lived results and event subscription
      // targets. Every state decision and every action performs a fresh lookup.
      const registration = await rootRegistration(signal);
      if (suspended || inspection !== inspectionNumber) return registration;
      bindRootWatch(registration);
      showWorker(registration);
      if (approvedUpdate && (registration?.waiting !== approvedUpdate.worker
        || registration.installing || approvedUpdate.worker.state !== 'installed')) {
        revokeApproval('The waiting worker changed. Choose Check update again before applying.');
      }
      for (const listener of [...rootListeners]) listener(registration);
      return registration;
    } catch (error) {
      if (inspection === inspectionNumber) observationFailed(error);
      throw error;
    }
  }

  function workerChanged(event) {
    if (suspended) return;
    try {
      const worker = event.type === 'updatefound' ? event.currentTarget.installing
        : event.type === 'statechange' ? event.currentTarget : null;
      // Subscribe immediately so a short-lived failed install is not missed
      // while getRegistration resolves. Read fresh state below before deciding.
      if (event.type === 'updatefound') listenToWorker(worker, true);
      if (operation?.kind === 'check' && worker?.state === 'redundant' && operation.workers.has(worker)) {
        operation.controller.abort(new PageError('redundant'));
      }
      if (operation?.kind === 'apply' && !operation.posted) operation.changed = true;
      revokeApproval('The app worker changed. Choose Check update again before applying.');
      void refreshRoot().catch(() => {});
    } catch (error) {
      observationFailed(error);
    }
  }

  function waitForSettled(current) {
    const signal = current.controller.signal;
    return new Promise((resolve, reject) => {
      let ended = false;
      const end = (value, error) => {
        if (ended) return;
        ended = true;
        rootListeners.delete(inspect);
        signal.removeEventListener('abort', aborted);
        if (error) reject(error); else resolve(value);
      };
      const aborted = () => end(null, signal.reason || new PageError('cancelled'));
      const inspect = (registration) => {
        if (ended) return;
        if ([...current.workers].some((worker) => worker.state === 'redundant')) return end(null, new PageError('redundant'));
        if (!registration) return end(null, new PageError('noWorker'));
        if (registration.installing || registration.active?.state === 'activating') return;
        if (registration.waiting?.state === 'installed') return end({ phase: 'waiting', worker: registration.waiting });
        if (registration.waiting) return;
        if (registration.active?.state === 'activated') return end({ phase: 'activated', worker: registration.active });
        end(null, new PageError('noWorker'));
      };
      rootListeners.add(inspect);
      signal.addEventListener('abort', aborted, { once: true });
      if (signal.aborted) aborted();
      else void refreshRoot(signal).then(inspect, (error) => end(null, error));
    });
  }

  function reportFailure(error, current) {
    if (suspended || operation !== current) return;
    const failure = error instanceof PageError ? error : new PageError('unavailable');
    revokeApproval();
    if (current.kind === 'backup') {
      status(ui.backupStatus, failure.message, 'error');
      return;
    }
    clearVersion('This check did not confirm a published build and app-file access. No build is assumed current.');
    status(ui.updateStatus, failure.message, 'error');
    if (current.posted || failure.code === 'checkTimeout') ui.manualOpen.hidden = false;
  }

  async function checkUpdate() {
    if (!supportsWorkers) return false;
    const current = begin('check');
    if (!current) return false;
    const signal = current.controller.signal;
    ui.manualOpen.hidden = true;
    clearVersion('Reading the published version from the network...');
    status(ui.updateStatus, 'Checking private-site access before requesting app files...');
    try {
      const version = await readVersion(signal);
      showVersion(version);
      await checkWorkerAccess(signal);
      const registration = await refreshRoot(signal);
      assertRunning(signal);
      const firstInstall = !registration?.active;
      status(ui.updateStatus, 'Asking the browser to check app files. Waiting updates are not applied automatically by this page.');
      await abortable(registration ? registration.update()
        : navigator.serviceWorker.register(WORKER_PATH, { scope: '/', updateViaCache: 'none' }), signal);
      const settled = await waitForSettled(current);

      // A deployment can change while the browser downloads. Metadata is a
      // comparison target only, not proof of the waiting worker's build.
      const confirmed = await readVersion(signal);
      if (!sameVersion(version, confirmed)) throw new PageError('changed');
      const fresh = await refreshRoot(signal);
      assertRunning(signal);
      if (!fresh || fresh.installing) throw new PageError('changed');
      if (settled.phase === 'waiting') {
        if (fresh.waiting !== settled.worker || settled.worker.state !== 'installed') throw new PageError('changed');
        approvedUpdate = { worker: settled.worker, version: confirmed };
        status(ui.updateStatus, 'A downloaded worker is waiting. Its build is not verified here. Confirm that your work is saved before choosing Apply downloaded update.');
      } else {
        if (fresh.waiting || fresh.active !== settled.worker || fresh.active.state !== 'activated') throw new PageError('changed');
        status(ui.updateStatus, firstInstall
          ? `The first worker is activated. Open the app yourself and compare its build with ${confirmed.build}.`
          : `No waiting update reported. Open app and compare its build with ${confirmed.build}.`);
        ui.manualOpen.hidden = false;
      }
      showVersion(confirmed);
      return true;
    } catch (error) {
      reportFailure(error, current);
      return false;
    } finally {
      finish(current);
    }
  }

  function activateWaiting(candidate, current, hadController) {
    const signal = current.controller.signal;
    const worker = candidate.worker;
    return new Promise((resolve, reject) => {
      let ended = false;
      let sawControllerChange = false;
      let inspection = 0;
      const end = (error) => {
        if (ended) return;
        ended = true;
        navigator.serviceWorker.removeEventListener('controllerchange', changedController);
        worker.removeEventListener('statechange', changedState);
        rootListeners.delete(changedState);
        signal.removeEventListener('abort', aborted);
        if (error) reject(error); else resolve(true);
      };
      const aborted = () => end(signal.reason || new PageError('cancelled'));
      const inspect = async () => {
        if (ended || !current.posted) return;
        if (worker.state === 'redundant') return end(new PageError('redundant'));
        if (worker.state !== 'activated') return;
        const attempt = ++inspection;
        try {
          const fresh = await rootRegistration(signal);
          if (ended || attempt !== inspection) return;
          if (fresh?.active !== worker || fresh.waiting || fresh.installing) return end(new PageError('changed'));
          if (!hadController || (sawControllerChange && navigator.serviceWorker.controller === worker)) end();
        } catch (error) {
          end(error);
        }
      };
      const changedState = () => { void inspect(); };
      const changedController = () => {
        if (navigator.serviceWorker.controller === worker) sawControllerChange = true;
        void inspect();
      };

      // Install both listeners BEFORE the only activation message in this file.
      navigator.serviceWorker.addEventListener('controllerchange', changedController);
      worker.addEventListener('statechange', changedState);
      rootListeners.add(changedState);
      signal.addEventListener('abort', aborted, { once: true });
      if (signal.aborted) { aborted(); return; }
      void (async () => {
        const fresh = await rootRegistration(signal);
        assertRunning(signal);
        if (current.changed || fresh?.waiting !== worker || fresh.installing
          || worker.state !== 'installed' || !ui.confirmation.checked) throw new PageError('changed');
        current.posted = true;
        worker.postMessage({ type: 'SKIP_WAITING' });
        status(ui.updateStatus, 'Activation requested. Waiting for this worker to be activated before opening the app.');
        await inspect();
      })().catch(end);
    });
  }

  async function applyUpdate() {
    if (!approvedUpdate || !ui.confirmation.checked || !supportsWorkers) return false;
    const candidate = approvedUpdate;
    const hadController = Boolean(navigator.serviceWorker.controller);
    const current = begin('apply');
    if (!current) return false;
    const signal = current.controller.signal;
    let succeeded = false;
    let openAfterActivation = false;
    status(ui.updateStatus, 'Rechecking the published version, private-site access, and the waiting worker before activation...');
    try {
      const version = await readVersion(signal);
      if (!sameVersion(candidate.version, version)) throw new PageError('changed');
      showVersion(version);
      await checkWorkerAccess(signal);
      const confirmed = await readVersion(signal);
      if (!sameVersion(candidate.version, confirmed)) throw new PageError('changed');
      const fresh = await refreshRoot(signal);
      if (current.changed || fresh?.waiting !== candidate.worker || fresh.installing
        || candidate.worker.state !== 'installed' || !ui.confirmation.checked) throw new PageError('changed');
      if (hadController && !appWorker(navigator.serviceWorker.controller)) throw new PageError('registration');
      await activateWaiting(candidate, current, hadController);
      assertRunning(signal);
      const activated = await rootRegistration(signal);
      if (activated?.active !== candidate.worker || candidate.worker.state !== 'activated'
        || activated.waiting || activated.installing) throw new PageError('changed');
      if (hadController && navigator.serviceWorker.controller !== candidate.worker) throw new PageError('changed');
      succeeded = true;
      openAfterActivation = hadController;
      ui.manualOpen.hidden = false;
      status(ui.updateStatus, hadController
        ? 'The selected worker is activated and controls this page. Opening Profile so you can compare the app build.'
        : 'The selected worker is activated. This page had no controller, so it will not navigate automatically. Use Open app and compare the build.');
    } catch (error) {
      reportFailure(error, current);
    } finally {
      finish(current);
    }
    // Navigation happens only after the activation promise and its cleanup end.
    if (openAfterActivation && !signal.aborted && !suspended) location.assign(APP_PATH);
    return succeeded;
  }

  async function readPersistedSnapshot(signal) {
    const idb = window.indexedDB;
    if (typeof idb.databases === 'function') {
      try {
        const databases = await abortable(idb.databases(), signal);
        if (!databases.some((database) => database.name === DATABASE)) return undefined;
      } catch {
        assertRunning(signal);
        // Enumeration is optional. The guarded open below aborts creation.
      }
    }
    assertRunning(signal);
    return new Promise((resolve, reject) => {
      let ended = false;
      let missing = false;
      let database = null;
      const end = (value, error) => {
        if (ended) return;
        ended = true;
        database?.close();
        signal.removeEventListener('abort', aborted);
        if (error) reject(error); else resolve(value);
      };
      const aborted = () => end(undefined, signal.reason || new PageError('cancelled'));
      signal.addEventListener('abort', aborted, { once: true });
      if (signal.aborted) { aborted(); return; }
      let request;
      try { request = idb.open(DATABASE); }
      catch { end(undefined, new PageError('storage')); return; }

      // No version argument, migrations, stores, or writes. Keep these guards
      // even after a timeout so a late open cannot create a missing database.
      request.onupgradeneeded = (event) => {
        missing = event.oldVersion === 0;
        request.transaction.abort();
      };
      request.onerror = (event) => {
        event.preventDefault();
        end(undefined, missing ? null : new PageError('storage'));
      };
      request.onblocked = () => end(undefined, new PageError('storageBlocked'));
      request.onsuccess = () => {
        database = request.result;
        if (ended) { database.close(); return; }
        database.onversionchange = () => end(undefined, new PageError('storageBlocked'));
        if (!database.objectStoreNames.contains(STORE)) { end(undefined); return; }
        try {
          const transaction = database.transaction(STORE, 'readonly');
          const read = transaction.objectStore(STORE).get(STORAGE_KEY);
          let snapshot;
          read.onsuccess = () => { snapshot = read.result; };
          transaction.oncomplete = () => end(snapshot);
          transaction.onabort = () => end(undefined, new PageError('storage'));
          transaction.onerror = () => end(undefined, new PageError('storage'));
        } catch {
          end(undefined, new PageError('storage'));
        }
      };
    });
  }

  // Match the stable storage envelope and basic state shape without importing
  // Zod, creating initial state, stripping fields, or pretending to validate all
  // lesson references. Full validation belongs to the app's backup importer.
  function basicSnapshot(snapshot) {
    if (!record(snapshot) || Object.keys(snapshot).length !== 2
      || !Object.hasOwn(snapshot, 'state') || !Object.hasOwn(snapshot, 'discoveries')) return false;
    const state = snapshot.state;
    if (!record(state) || state.version !== 1 || !Array.isArray(snapshot.discoveries)
      || snapshot.discoveries.length > 10_000
      || !snapshot.discoveries.every((lesson) => record(lesson) && lesson.kind === 'discovery')) return false;
    return typeof state.name === 'string' && state.name.length <= 40
      && [1, 3, 5, 7].includes(state.goal) && Array.isArray(state.interests)
      && state.interests.length >= 1 && state.interests.length <= 10
      && ['completed', 'notes', 'reviews', 'activity'].every((key) => record(state[key]))
      && Object.values(state.notes).every((note) => typeof note === 'string' && note.length <= 5_000)
      && Array.isArray(state.saved) && state.saved.length <= 10_000
      && Array.isArray(state.collections) && state.collections.length <= 40
      && Array.isArray(state.delivered) && state.delivered.length <= 100_000
      && record(state.daily) && calendarDate(state.daily.date)
      && Array.isArray(state.daily.ids) && state.daily.ids.length <= 7
      && boundedInteger(state.xp, 100_000_000) && calendarDate(state.joined)
      && typeof state.reducedMotion === 'boolean' && typeof state.welcomeDismissed === 'boolean';
  }

  function serializeSnapshot(snapshot, exportedAt) {
    if (!basicSnapshot(snapshot)) throw new PageError('invalidBackup');
    let text;
    try {
      // Exact top-level key validation above prevents a stored app/version/date
      // field from overwriting the export envelope through this spread.
      text = JSON.stringify({ app: 'UNSCROLL', version: 1, exportedAt, ...snapshot }, function (key, value) {
        const original = this[key];
        if (['__proto__', 'constructor', 'prototype'].includes(key)
          || ['bigint', 'function', 'symbol'].includes(typeof value)
          || (value === undefined && Array.isArray(this))
          || (typeof value === 'number' && !Number.isFinite(value))
          || (original !== null && typeof original === 'object' && !Array.isArray(original) && !record(original))) {
          throw new PageError('invalidBackup');
        }
        // The app can persist followedPath: undefined after unfollowing a path.
        // Native JSON omission for optional object fields matches serializeBackup.
        return value;
      }, 2);
    } catch {
      throw new PageError('invalidBackup');
    }
    if (text.length > MAX_BACKUP_CHARACTERS) throw new PageError('largeBackup');
    return text;
  }

  function releaseDownload(url) {
    window.clearTimeout(downloads.get(url));
    URL.revokeObjectURL(url);
    downloads.delete(url);
  }

  function downloadLocally(text, exportedAt) {
    let url;
    const anchor = document.createElement('a');
    try {
      url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
      anchor.href = url;
      anchor.download = `unscroll-backup-${exportedAt.slice(0, 10)}.json`;
      anchor.hidden = true;
      document.body.append(anchor);
      anchor.click();
      downloads.set(url, window.setTimeout(() => releaseDownload(url), 30_000));
    } catch {
      if (url) URL.revokeObjectURL(url);
      throw new PageError('download');
    } finally {
      anchor.remove();
    }
  }

  async function downloadBackup() {
    if (!supportsBackup) return false;
    const current = begin('backup');
    if (!current) return false;
    status(ui.backupStatus, 'Reading only the library already persisted in this browser...');
    try {
      const snapshot = await readPersistedSnapshot(current.controller.signal);
      assertRunning(current.controller.signal);
      if (snapshot === undefined) {
        status(ui.backupStatus, 'No persisted UNSCROLL library was found in this browser. Nothing needs to be exported here. The installed app or another browser may have separate storage.');
        return true;
      }
      const exportedAt = new Date().toISOString();
      const text = serializeSnapshot(snapshot, exportedAt);
      assertRunning(current.controller.signal);
      downloadLocally(text, exportedAt);
      status(ui.backupStatus, 'Backup download requested. Keep the file private. It contains persisted data only; the app will validate it when restored.');
      return true;
    } catch (error) {
      reportFailure(error instanceof PageError ? error : new PageError('storage'), current);
      return false;
    } finally {
      finish(current);
    }
  }

  function startReadOnlyChecks() {
    suspended = false;
    approvedUpdate = null;
    ui.confirmation.checked = false;
    controls();
    if (supportsWorkers) {
      status(ui.workerStatus, 'Reading the existing root worker. No update is requested on page load...');
      navigator.serviceWorker.addEventListener('controllerchange', workerChanged);
      void refreshRoot().catch(() => {});
    } else {
      status(ui.workerStatus, 'This browser does not expose service workers on a secure connection here. Use the sign-in link or open the app in its original browser. No update has been requested.');
    }
    if (!supportsBackup) status(ui.backupStatus, 'Device storage is unavailable in this browser. Export from the original app if possible. No stored data was changed.');
  }

  ui.check.addEventListener('click', () => { void checkUpdate(); });
  ui.apply.addEventListener('click', () => { void applyUpdate(); });
  ui.backup.addEventListener('click', () => { void downloadBackup(); });
  ui.confirmation.addEventListener('change', controls);
  window.addEventListener('offline', () => {
    revokeApproval();
    if (operation && operation.kind !== 'backup' && !operation.posted) operation.controller.abort(new PageError('offline'));
    else if (!operation) status(ui.updateStatus, messages.offline);
  });
  window.addEventListener('online', () => {
    if (!operation && !suspended) status(ui.updateStatus, 'The browser reports a connection. Choose Check update to verify private-site access and the published version.');
  });
  window.addEventListener('pagehide', () => {
    suspended = true;
    inspectionNumber += 1;
    operation?.controller.abort(new PageError('cancelled'));
    if (operation) window.clearTimeout(operation.timer);
    operation = null;
    approvedUpdate = null;
    ui.confirmation.checked = false;
    detachRootWatch();
    if (supportsWorkers) navigator.serviceWorker.removeEventListener('controllerchange', workerChanged);
    for (const url of [...downloads.keys()]) releaseDownload(url);
    controls();
  });
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      clearVersion('The page was restored. Choose Check update to read the published version again.');
      status(ui.updateStatus, 'A restored page does not keep approval to apply a worker. Check again after saving your work.');
      startReadOnlyChecks();
    }
  });

  startReadOnlyChecks();
})();