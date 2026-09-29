# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

**finespotted** — a single-page landing site for limited single drops of
streetwear, accessories and art. Clean, minimal, product-first (inspired by
toutlemondela.com: full-bleed product imagery, small uppercase nav, a
"be in the know first" pill). React 18 + Vite + Tailwind CSS. No backend.

## Commands

```bash
npm install / npm run dev / npm run build / npm run preview
```

No test runner, linter or type checker is configured. Do not invent them.

## Architecture

- `src/App.jsx` — composition root. Owns the drop countdown, the early-access
  unlock (sessionStorage) and the early-access dialog. A product is buyable
  when the drop is live OR early access is unlocked, and it isn't sold out.
- `src/config.js` — brand, drop date, early-access code, Formspree form ID.
- `src/data/products.js` — the drop's pieces (price, edition, stripeLink,
  soldOut, images).
- `src/components/` — Header, Hero, Countdown, ProductSection, BuyButton,
  CropImage, WaitlistPopup, EarlyAccess, Footer.
- `CropImage` shows the left/right half of a side-by-side product photo in a
  3:4 frame, so one front+back photo serves as two gallery images.

## Conventions

- Everything in `config.js` and `products.js` is public — never add secrets.
- `vite.config.js` uses `base: './'` so builds work on Vercel and GitHub
  Pages alike. Keep it unless client-side routing is added.
- Wrap browser storage in `src/storage.js` helpers (they swallow errors).
- Functional components, hooks, Tailwind utilities, block comments like the
  ones in `App.jsx` and `config.js`.
