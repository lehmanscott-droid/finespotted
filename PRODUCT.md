# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Streetwear collectors.** People who follow limited drops, watch a countdown,
  and buy fast because a run is numbered and will not come back.
- **Art collectors and the artist's followers.** People who already know Scott
  Lehman's art (scottlehmanart.com, Instagram) and buy a piece because he made it.

Most arrive on a phone from a link: an Instagram post or DM, or a text. The
link preview (`public/og-image.jpg`) is often their first sight of the drop.

## Product Purpose

finespotted cutthroat (finespottedcutthroat.com) sells limited single drops of
headwear, clothing, accessories and art. Each drop is one or a few pieces,
released now and then. The site builds anticipation before a drop (countdown,
waitlist, early-access code) and then sells the run quickly once it opens.

Success: the waitlist fills before a drop, and the run sells out.

## Positioning

- **Artist-made.** Every design is original artwork by the founder (Drop 001:
  a skeletal rider on a burning gator), not stock graphics.
- **Truly limited, no restocks.** Small numbered runs. When it's gone, it's
  gone; the scarcity is real, enforced by payment limits in Stripe.
- **1 of 1 on request.** Buyers can ask for small customizations, such as
  hand-painted markings or light distressing, to make their piece one of a kind.

## Operating Context

- A drop has a number, a name and a go-live time (`src/config.js` → `DROP`).
  Before go-live the Buy button is locked and a countdown shows.
- "Be in the know first" waitlist collects emails through Formspree for drop
  alerts and early-access codes.
- An early-access code unlocks buying before the countdown ends. It is a soft,
  hype gate, visible in page source, not security.
- Checkout is a hosted Stripe Payment Link per piece; Stripe caps payments at
  the edition size.
- Pieces are sold as pre-orders and ship within 3 weeks; custom 1 of 1 work is
  requested by email.

## Capabilities and Constraints

- Single-page React 18 + Vite + Tailwind site on Vercel. No backend, no
  accounts, no cart: one Stripe link per piece.
- Everything in `src/config.js` and `src/data/products.js` is public; never add
  secrets.
- US shipping only, flat rate at checkout. All sales final, no returns or
  exchanges (custom pieces included); damaged or wrong items are replaced or
  refunded. Copy lives in `src/components/Policies.jsx`.
- Product photos may be a single front + back side-by-side shot; `CropImage`
  splits it into two 3:4 gallery images.
- Undecided: how many pieces future drops hold and how often they release.

## Brand Commitments

- Name is always lowercase: **finespotted cutthroat**.
- Tagline: "Limited runs. No restocks."
- Voice is short, plain and direct ("When it's gone, it's gone.", "Drop alerts
  and early access codes. Nothing else.").
- The product photo is the focal point of the site; type stays small.
- Contact: scott@finespotted.com. Instagram: @finespottedcutthroat.

## Evidence on Hand

- Drop 001 "Chomp Chomp" trucker: product photo `public/products/chomp-chomp.webp`
  (front + back), $85, edition of 50, details in `src/data/products.js`.
- Link-preview image `public/og-image.jpg`.
- No customer reviews, testimonials, press, sales numbers or sold-out history
  yet. Do not invent any.

## Product Principles

1. The piece is the hero. Every surface exists to show the artwork and get it
   bought; nothing competes with the product photo.
2. Scarcity is honest. Edition sizes, countdowns and "sold out" states reflect
   real limits; never fake urgency.
3. Made by an artist, for people who notice. Treat each drop as a released
   artwork with a name and number, not a catalog SKU.
4. Phone first. Most visitors arrive from Instagram or a text on a phone; the
   drop, its status and the way to buy must be clear on the first screen there.
