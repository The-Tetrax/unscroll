import { useEffect, useState } from 'react'

interface InstallEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function useInstall() {
  const [prompt, setPrompt] = useState<InstallEvent | null>(null)
  const [installed, setInstalled] = useState(() => window.matchMedia('(display-mode: standalone)').matches)
  const [online, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const before = (event: Event) => { event.preventDefault(); setPrompt(event as InstallEvent) }
    const complete = () => { setInstalled(true); setPrompt(null) }
    const connected = () => setOnline(navigator.onLine)
    window.addEventListener('beforeinstallprompt', before)
    window.addEventListener('appinstalled', complete)
    window.addEventListener('online', connected)
    window.addEventListener('offline', connected)
    return () => {
      window.removeEventListener('beforeinstallprompt', before)
      window.removeEventListener('appinstalled', complete)
      window.removeEventListener('online', connected)
      window.removeEventListener('offline', connected)
    }
  }, [])
  return {
    available: Boolean(prompt), installed, online,
    install: async () => {
      if (!prompt) return
      await prompt.prompt()
      const { outcome } = await prompt.userChoice
      if (outcome === 'accepted') setInstalled(true)
      setPrompt(null)
    },
  }
}

export type Install = ReturnType<typeof useInstall>