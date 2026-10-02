import { useState } from 'react'
import { FORMSPREE_FORM_ID } from '../config.js'
import { readStore, writeStore } from '../storage.js'

/*
 * "be in the know first" — a small pill in the bottom-left corner that opens
 * into an email sign-up. Submissions go to Formspree (no backend). Once a
 * visitor dismisses or signs up, it stays hidden on this browser.
 */
export default function WaitlistPopup() {
  const [hidden, setHidden] = useState(() => readStore('localStorage', 'fs-waitlist') === 'done')
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  if (hidden) return null

  function dismiss() {
    writeStore('localStorage', 'fs-waitlist', 'done')
    setHidden(true)
  }

  async function submit(e) {
    e.preventDefault()
    if (!FORMSPREE_FORM_ID) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      writeStore('localStorage', 'fs-waitlist', 'done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[calc(100vw-2rem)] sm:bottom-6 sm:left-6">
      <div className="rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-4 py-3 pl-5 pr-3">
          <button type="button" onClick={() => setOpen((o) => !o)} className="text-[15px] font-semibold" aria-expanded={open}>
            be in the know first
          </button>
          <button type="button" onClick={dismiss} aria-label="Dismiss" className="p-1 text-ink/60 hover:text-ink">
            <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="w-[min(20rem,calc(100vw-2rem))] border-t border-ink/10 p-5">
            {status === 'sent' ? (
              <p className="text-sm">You're on the list. We'll hit you before the drop.</p>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <p className="text-sm text-ink/70">Drop alerts and early access codes. Nothing else.</p>
                <input type="hidden" name="_subject" value="New finespotted cutthroat waitlist sign-up" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@address.com"
                  aria-label="Email address"
                  className="w-full border border-ink/20 bg-transparent px-3 py-3 text-sm outline-none focus:border-ink"
                />
                <button type="submit" disabled={status === 'sending'} className="btn-primary">
                  {status === 'sending' ? 'Sending…' : 'Notify me'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-flame" role="status">
                    {FORMSPREE_FORM_ID
                      ? 'Something went wrong. Try again.'
                      : 'Sign-ups open soon.'}
                  </p>
                )}
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
