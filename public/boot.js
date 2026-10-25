// This small fallback works before the application bundle has finished loading.
(() => {
  const status = document.getElementById('startup-status')
  const retry = document.getElementById('startup-retry')
  if (!status || !retry) return
  const showRetry = (message) => {
    if (!status.isConnected) return
    status.textContent = message
    retry.hidden = false
  }
  const failed = (event) => {
    if (event.target instanceof HTMLScriptElement) showRetry('An app file could not load. Check your connection or private-site sign-in, then retry. Your saved data has not been cleared.')
  }
  retry.addEventListener('click', () => window.location.reload())
  window.addEventListener('error', failed, true)
  const timer = setTimeout(() => showRetry('The app is taking longer to open. On the first visit, keep your connection on while the library downloads.'), 12000)
  const observer = new MutationObserver(() => {
    if (status.isConnected) return
    clearTimeout(timer)
    window.removeEventListener('error', failed, true)
    observer.disconnect()
  })
  observer.observe(document.getElementById('root'), { childList: true })
})()