// Sets the color theme before the first paint. The saved library stays the source of truth;
// this key only remembers the last choice so the startup screen does not flash.
(() => {
  let choice = null
  try { choice = window.localStorage.getItem('unscroll-theme') } catch { /* storage can be blocked */ }
  const systemDark = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
  const dark = choice === 'dark' || (choice !== 'light' && systemDark)
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? '#1a1617' : '#f7f4ed')
})()
