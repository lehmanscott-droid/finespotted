// Browser storage can throw (private mode, blocked cookies) — never let that
// break the page. These are conveniences only.
export function readStore(storage, key) {
  try {
    return window[storage].getItem(key)
  } catch {
    return null
  }
}

export function writeStore(storage, key, value) {
  try {
    window[storage].setItem(key, value)
  } catch {
    /* ignore */
  }
}
