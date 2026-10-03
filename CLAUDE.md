# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

**finespotted cutthroat** (finespottedcutthroat.com) — a single-page landing site for limited single drops of
streetwear, accessories and art. Clean, minimal, product-first (inspired by
toutlemondela.com: full-bleed product imagery, small uppercase nav, a
"be in the know first" pill). React 18 + Vite + Tailwind CSS. No backend.

Type: the wordmark and headings use **Bodoni Moda** caps (`.wordmark` /
`.display` in `index.css`); everything else is Inter. Keep display type
small: the product photo is the focal point.

## Commands

```bash
npm install / npm run dev / npm run build / npm run preview
```

No test runner, linter or type checker is configured. Do not invent them.

## Browser checks (Playwright MCP)

`.mcp.json` registers the **Playwright MCP** server so Claude Code can drive a
real browser: start `npm run dev`, open the printed localhost URL, check the
countdown, waitlist popup, early-access code and Buy button, and take
screenshots (try a phone size such as `iPhone 15`). `.claude/settings.json`
pre-approves it. In Claude Code cloud sessions it runs headless on the
pre-installed Chromium at `/opt/pw-browsers/chromium`; elsewhere it uses
Playwright's own browser. Pinned to `@playwright/mcp@0.0.83`, the release
verified against the cloud Chromium — re-test before bumping. Snapshots land
in `.playwright-mcp/` (gitignored). No API key needed.

## Plugins

`.claude/settings.json` registers two plugin marketplaces and enables their
plugins, so Claude Code offers to install them when the repo is trusted:

- **Impeccable** (`pbakaus/impeccable`) — frontend design skill with
  `/impeccable` commands (`audit`, `critique`, `polish`, …). Use it for UI work.
- **Claude Mem** (`thedotmack/claude-mem`) — persistent memory across
  sessions. Its database lives in `~/.claude-mem` on the machine, so it only
  builds up locally; cloud sessions start with an empty memory each time.

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
