/*
 * ─── SITE CONFIG ──────────────────────────────────────────────────────────
 * Everything here ships to the browser, so it is all PUBLIC. Never put API
 * secrets in this file. Edit these values to run the next drop.
 */

export const BRAND = {
  name: 'finespotted cutthroat',
  tagline: 'Limited runs. No restocks.',
  contactEmail: 'scott@finespotted.com',
  instagram: 'https://instagram.com/finespotted',
}

/*
 * When the drop goes live. Before this moment the Buy button is locked and a
 * countdown shows instead. Always include a timezone offset:
 *   -04:00 = US Eastern (summer)   -07:00 = US Pacific (summer)
 */
export const DROP = {
  number: '001',
  name: 'Chomp Chomp',
  date: '2026-10-10T12:00:00-04:00', // noon Eastern, Oct 10
}

/*
 * Early access code. Anyone who enters it can buy before the countdown ends.
 * This is a SOFT gate for hype — the code is visible to anyone who inspects
 * the page source, so treat it like a velvet rope, not a lock. Real inventory
 * limits live in Stripe (see "Limit the number of payments" on each link).
 * Set to '' to hide the early-access option entirely.
 */
export const EARLY_ACCESS_CODE = 'CUTTHROAT'

/*
 * Formspree form ID for the "be in the know first" waitlist — the part after
 * /f/ in your endpoint, e.g. https://formspree.io/f/abcdwxyz → 'abcdwxyz'.
 * Create a free form at https://formspree.io. Leave '' until you have one.
 */
export const FORMSPREE_FORM_ID = 'xwlpdygz'
