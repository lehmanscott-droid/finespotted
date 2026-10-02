# finespotted cutthroat

Single-drop luxury streetwear landing page for **finespotted cutthroat**,
live at finespottedcutthroat.com.
React 18 + Vite + Tailwind CSS. No backend: Stripe Payment Links take the
money, Formspree collects the waitlist.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the build
```

## Run a drop — the only files you edit

| What | File |
| --- | --- |
| Drop number, name, **launch date/time** | `src/config.js` → `DROP` |
| Early access code | `src/config.js` → `EARLY_ACCESS_CODE` |
| Waitlist (Formspree form ID) | `src/config.js` → `FORMSPREE_FORM_ID` |
| Contact email, Instagram | `src/config.js` → `BRAND` |
| Products: name, price, edition size, photos, **Stripe link**, sold out | `src/data/products.js` |
| Product photos | `public/products/` |

### How the page behaves

- **Before the drop:** hero shows a live countdown; Buy is locked; the
  "be in the know first" pill collects emails.
- **Early access:** "Have a code?" under the Buy button. The right code
  unlocks buying for that browser tab. It's a hype gate, not security — the
  code is visible in the page source.
- **After the drop date:** Buy links to the Stripe checkout for that piece.
- **Sold out:** set `soldOut: true` on the product and redeploy.

### Stripe setup (per product)

Stripe Dashboard → Payment Links → New. Turn on **Collect customers'
addresses** (shipping) and **Limit the number of payments** (= edition size),
so Stripe itself stops selling when the run is gone. Paste the
`https://buy.stripe.com/...` link into `stripeLink`.

## Deploy

Built with relative asset paths (`base: './'`), so the same build works on:

- **Vercel / Netlify** — import the repo; framework "Vite", build
  `npm run build`, output `dist`. Works with private repos.
- **GitHub Pages** — needs a public repo on a free plan. Settings → Pages →
  Source: GitHub Actions, then use the standard Vite/static workflow
  publishing `dist/`.
