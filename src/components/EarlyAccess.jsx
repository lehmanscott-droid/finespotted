import { useEffect, useRef, useState } from 'react'
import { EARLY_ACCESS_CODE } from '../config.js'

// Password dialog that unlocks buying before the countdown ends.
export default function EarlyAccess({ onUnlock, onClose }) {
  const [code, setCode] = useState('')
  const [wrong, setWrong] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function submit(e) {
    e.preventDefault()
    if (code.trim().toUpperCase() === EARLY_ACCESS_CODE.toUpperCase()) onUnlock()
    else setWrong(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-title"
    >
      <form onClick={(e) => e.stopPropagation()} onSubmit={submit} className="w-full max-w-sm bg-paper p-8">
        <p className="label text-stone">Early access</p>
        <h2 id="early-title" className="mt-2 text-2xl font-medium uppercase tracking-tight">
          Enter your code
        </h2>
        <input
          ref={inputRef}
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
            setWrong(false)
          }}
          aria-label="Access code"
          autoComplete="off"
          className="mt-6 w-full border border-ink/20 bg-transparent px-3 py-3 text-sm uppercase tracking-label outline-none focus:border-ink"
        />
        {wrong && (
          <p className="mt-2 text-sm text-flame" role="status">
            That's not it.
          </p>
        )}
        <button type="submit" className="btn-primary mt-4">
          Unlock
        </button>
        <button type="button" onClick={onClose} className="label mt-4 w-full text-center text-stone hover:text-ink">
          Cancel
        </button>
      </form>
    </div>
  )
}
