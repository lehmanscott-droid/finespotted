import { useEffect, useState } from 'react'

// Ticks once a second until `target` passes, then stops.
export function useCountdown(target) {
  const targetMs = new Date(target).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    if (now >= targetMs) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [targetMs, now >= targetMs])

  const remaining = Math.max(0, targetMs - now)
  return {
    done: remaining === 0,
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor(remaining / 3_600_000) % 24,
    minutes: Math.floor(remaining / 60_000) % 60,
    seconds: Math.floor(remaining / 1000) % 60,
  }
}
