import { useCallback, useEffect, useState } from 'react'
import type { Page } from '../types'

const pages: Page[] = ['today', 'explore', 'vault', 'review', 'profile']
function readRoute() {
  const [path, query = ''] = window.location.hash.slice(1).replace(/^\//, '').split('?')
  return { page: pages.includes(path as Page) ? path as Page : 'today' as Page, params: new URLSearchParams(query) }
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute)
  useEffect(() => {
    const change = () => setRoute(readRoute())
    window.addEventListener('hashchange', change)
    return () => window.removeEventListener('hashchange', change)
  }, [])
  const navigate = useCallback((page: Page, params: Record<string, string> = {}, replace = false) => {
    const query = new URLSearchParams(Object.entries(params).filter(([, value]) => value))
    const hash = `#/${page}${query.size ? `?${query}` : ''}`
    if (replace) { window.history.replaceState(null, '', hash); setRoute(readRoute()) }
    else window.location.hash = hash
  }, [])
  const setParam = (key: string, value: string, replace = false) => {
    const params = Object.fromEntries(route.params)
    if (value) params[key] = value
    else delete params[key]
    navigate(route.page, params, replace)
  }
  return { ...route, navigate, setParam }
}

export type Route = ReturnType<typeof useRoute>