---
name: finespotted cutthroat
description: Limited runs. No restocks. Artist-made drops presented as signed editions.
colors:
  paper: "#f4f4f2"
  ink: "#111111"
  stone: "#8a8a86"
  flame: "#e2361f"
  photo-white: "#ffffff"
typography:
  wordmark:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.24em"
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: "0.14em"
  numeral:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.33
    fontFeature: "tnum"
  body:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  pill: "12px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  section: "64px"
  section-wide: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.flame}"
    textColor: "{colors.paper}"
  button-disabled:
    backgroundColor: "rgba(138, 138, 134, 0.2)"
    textColor: "{colors.stone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px"
  nav:
    backgroundColor: "rgba(244, 244, 242, 0.8)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "64px"
  waitlist-pill:
    backgroundColor: "{colors.photo-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 12px 12px 20px"
---

# Design System: finespotted cutthroat

## Overview

**Creative North Star: "The Signed Edition"**

Every drop is an artwork release, not a catalog SKU. The site is the gallery
wall it hangs on: soft paper-white, one object lit cleanly, and a small serif
placard that names it, numbers it and says how many exist. The artist is the
difference. Luxury fashion sites already own the Bodoni-caps lookbook, and hype
shops own the countdown. finespotted keeps both tools but speaks the language
of a print studio: drop number, edition size, medium, signature, provenance,
and 1 of 1 on request.

The page is quiet so the piece can be loud. Density is low, type is small, and
almost everything is ink on paper. Colour comes from the artwork itself, which
is why the single accent changes with each drop. Restraint signals rarity: no
badges, no tickers, no grids of cards. The surface a buyer sees should feel
closer to a gallery's wall label than to a store.

Rejected outright: hype-shop clutter (flashing banners, fake stock counters,
marquee tickers, loud sale badges) and the generic Shopify template (cart
drawers, product-card grids, star ratings, "You may also like" rows).

**Key Characteristics:**
- Paper-white page, ink type, one accent pulled from the current drop's artwork
- Bodoni Moda caps for the wordmark and names; Inter for everything else
- Small, widely tracked uppercase labels act as the placard voice
- Square corners everywhere except the floating waitlist pill
- The product photo is always the largest thing on screen
- Edition facts (drop number, edition size, price) are stated plainly, never dramatized

## Colors

A near-monochrome studio palette: warm paper, true ink, a quiet stone grey, and
one accent borrowed from the drop.

### Primary
- **Drop Accent: Flame** (#e2361f): pulled from the flame embroidery on the
  Drop 001 Chomp Chomp cap. Used for hover on links and the primary button,
  and for error/status text. Changes with each drop.

### Neutral
- **Studio Paper** (#f4f4f2): page background, header (at 80% with blur),
  button text on ink, and selection text. Soft, never stark.
- **Ink** (#111111): all primary text, the primary button fill, the selection
  background, and the modal scrim (at 60%). Hairline dividers use it at 10%,
  input borders at 20%, and secondary body copy at 80%.
- **Stone** (#8a8a86): metadata and labels (drop status, units under the
  countdown, subtitles, footer meta). The disabled button uses it as text with
  a 20% stone fill.
- **Photo White** (#ffffff): behind product photos so studio shots blend into
  their frames, and the waitlist pill's surface.

### Named Rules
**The Drop Accent Rule.** The accent belongs to the drop, not the brand. Each
new drop takes its accent from its own artwork, replaces `flame` in
`tailwind.config.js`, and keeps the same job: hover and status text.

**The Resting Ink Rule.** At rest, nothing on the page is coloured except the
artwork. The accent appears only in response to the visitor (hover) or
to report a state (an error). Never use it as a background fill, a badge or a
banner.

## Typography

**Display Font:** Bodoni Moda (with Didot, Bodoni 72, Georgia)
**Body Font:** Inter (with Helvetica Neue, Helvetica, Arial)

**Character:** A high-contrast Didone in wide-spaced caps names things, like
lettering on a gallery wall. A neutral grotesk does every practical job
underneath it, so the serif stays ceremonial.

### Hierarchy
- **Wordmark** (Bodoni Moda 500, 13px → 15px at `sm`, tracking 0.24em,
  uppercase): the brand name in the header; 20px → 24px in the footer.
- **Display** (Bodoni Moda 500, 24px → 30px at `sm`, tracking 0.14em,
  uppercase): drop and product names, section headings (20px for Policies and
  dialogs).
- **Numeral** (Inter 500, 24px → 30px at `sm`, tabular figures): the countdown
  digits. Prices use Inter at 20px, also tabular.
- **Body** (Inter 400, 14px, line-height 1.625): product description, policy
  copy, notes. Secondary paragraphs at 80% ink.
- **Label** (Inter 500, 11px, tracking 0.14em, uppercase): nav links, buttons,
  edition lines ("Drop 001 · Limited to 50"), countdown units, footer links.

### Named Rules
**The Small Placard Rule.** Display type stays small (30px at most). The
product photo is the focal point; type names it, the way a wall label names a
painting, and never competes with it.

**The Two Voices Rule.** Bodoni Moda is only for names: the brand, a drop, a
piece, a section. Anything a visitor reads to act (prices, buttons, policy,
forms) is Inter.

## Layout

A full-bleed, single-column story on phones that opens into two columns on
large screens. Content sits in a centred container up to 1536px wide
(`max-w-screen-2xl`) with 16px side gutters, 32px from 640px.

- **Hero:** fills the viewport (`100svh`) below the 64px fixed header. Phones
  show the front of the piece in a 3:4 crop; from 640px the full front + back
  photo is shown with `object-contain`. Drop status, name and countdown sit
  along the bottom edge.
- **Product section:** from 1024px a two-column grid (1.4fr images : 1fr
  details, 64px gap). Images stack in a two-up grid with an 8px gap; the
  details column is sticky 96px from the top.
- **Rhythm:** sections are 64px top and bottom (96px from 1024px), separated by
  10% ink hairlines. Inside the details column, groups step by 24–40px.
- **Breakpoints:** `sm` 640px and `lg` 1024px.

## Elevation & Depth

Flat by default. Depth comes from tone (paper vs. photo white) and hairlines,
not shadow. Two exceptions float above the page: the frosted header
(paper at 80% with a medium backdrop blur) and the waitlist pill. Dialogs dim
the page with a 60% ink scrim and a small blur.

### Shadow Vocabulary
- **Pill lift** (`box-shadow: 0 8px 30px rgba(0,0,0,0.12)`): only on the
  floating waitlist pill, so it reads as separate from the page it overlaps.

### Named Rules
**The Flat Wall Rule.** Nothing that belongs to the page casts a shadow.
Only an element that floats above the page (the pill) gets one.

## Shapes

Square corners throughout: buttons, inputs, photo frames, dialogs and dividers
are all sharp, like mats and frames. The waitlist pill is the single rounded
shape (12px), which marks it as a floating note rather than part of the wall.
Product images always sit in a 3:4 frame; a side-by-side front + back photo is
split into two frames rather than shipping two files.

## Components

### Buttons
- **Shape:** square (0px), full width of their column.
- **Primary:** ink fill, paper text, label type, 16px × 24px padding.
- **Hover:** fill shifts to the drop accent over 200ms; reduced-motion users
  get an instant change. Keyboard focus uses the browser's default ring.
- **Disabled:** 20% stone fill with stone text, `not-allowed` cursor. Used for
  "Locked until drop" and "Sold out", so the state is stated, not hidden.
- **Text buttons:** underlined Inter body links ("Have a code?", "Shipping &
  returns") with a 4px underline offset; they turn ink or accent on hover.

### Inputs / Fields
- **Style:** transparent background, 1px ink border at 20%, square, 12px
  padding, 14px Inter. The access code input is uppercase label tracking.
- **Focus:** the border goes to full ink; no glow.
- **Error:** a short accent-coloured line below ("That's not it.").

### Navigation
- **Style:** fixed 64px bar, paper at 80% with backdrop blur. Wordmark left;
  from 640px, label links ("Drop 001", "Contact") beside it; a thin 1.4px
  stroke bag icon on the right. Links turn accent on hover. Phones show only
  the wordmark and bag.

### Edition Placard (signature component)
The block that names a piece: a stone label line ("Drop 001 · Limited to 50"),
the Bodoni display name, an Inter subtitle in stone, then the price in
tabular figures. The same pattern opens the hero ("Drop 001 — Dropping
soon"). Extend this, not a product card, when presenting a new piece.

### Countdown
DD : HH : MM : SS in Inter tabular numerals, stone colons between groups, and
label-style units underneath. It is quiet information, not an alarm: no
colour, no flashing, no pulsing.

### Waitlist Pill
A white, 12px-rounded pill with the pill-lift shadow reading "be in the know
first" with a dismiss ×. It opens downward into a small form (copy, email
field, primary button). On phones it sits just under the header and fades out
while the visitor scrolls; from 640px it sits in the bottom-left corner.

## Do's and Don'ts

### Do:
- **Do** keep the product photo the largest element on every screen.
- **Do** state edition facts plainly in label type: drop number, edition size,
  price, ship window.
- **Do** take each drop's accent from its own artwork and use it only for
  hover and status text.
- **Do** keep corners square (0px); the waitlist pill (12px) is the only
  exception.
- **Do** use the disabled button to state a locked or sold-out state instead
  of hiding the button.
- **Do** respect `prefers-reduced-motion`; transitions are 200–300ms colour
  and opacity changes only.

### Don't:
- **Don't** add hype-shop clutter: flashing banners, fake stock counters,
  marquee tickers or loud sale badges.
- **Don't** drift toward a generic Shopify template: cart drawers, product-card
  grids, star ratings or "You may also like" rows.
- **Don't** set Bodoni Moda above 30px or use it for prices, buttons or body
  copy.
- **Don't** use the accent as a background, badge or banner fill.
- **Don't** add shadows to anything that belongs to the page.
- **Don't** invent urgency, social proof or provenance that isn't real.
