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
      const currentPrompt = prompt
      setPrompt(null)
      await currentPrompt.prompt()
      const { outcome } = await currentPrompt.userChoice
      if (outcome === 'accepted') setInstalled(true)
      return outcome
    },
  }
}

export type Install = ReturnType<typeof useInstall>