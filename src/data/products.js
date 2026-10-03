/*
 * ─── THE DROP ─────────────────────────────────────────────────────────────
 * One entry per piece. To sell a piece:
 *   1. In Stripe → Payment Links, create a link for the product. Turn on
 *      "Collect customers' addresses" and "Limit the number of payments"
 *      (set it to `edition`), so Stripe itself stops sales when it's gone.
 *   2. Paste the link into `stripeLink` below.
 *   3. When it sells out, set `soldOut: true` and redeploy.
 *
 * Images live in public/products/. `image.position` picks which part of the
 * photo to show — the Chomp Chomp shot has front + back side by side, so
 * 'left' is the front and 'right' is the back.
 */

export const products = [
  {
    id: 'chomp-chomp-trucker',
    name: 'Chomp Chomp Trucker',
    subtitle: 'Black / embroidered',
    price: 85, // USD
    edition: 50, // total pieces in the run
    soldOut: false,
    preorder: true, // button reads "Pre-order" and shows the ship window
    shipsWithin: '3 weeks',
    stripeLink: 'https://buy.stripe.com/28E14o1Ba9tUfDH6mE53O01', // live Payment Link
    size: 'One size — adjustable snapback',
    description:
      'Five-panel trucker in black cotton twill with breathable mesh back. ' +
      'Front: dense multi-color embroidery of a skeletal rider on a burning ' +
      'gator. Back: CHOMP CHOMP arched in white, signed finespotted & cutthroat.',
    // Shown under the description, followed by a mailto link to BRAND.contactEmail
    customNote:
      'Make it 1 of 1. Small customizations, like hand-painted markings or ' +
      'light distressing, can be added to make your hat one of a kind.',
    details: [
      'Cotton twill front, poly mesh back',
      '3D multi-color embroidery',
      'Plastic snapback closure',
      'Numbered limited run',
    ],
    // Silent 5s loop for the hero on wide screens (see Hero.jsx). Remove to show the still photo.
    heroVideo: {
      src: 'products/hero-loop.mp4',
      webm: 'products/hero-loop.webm',
      poster: 'products/hero-loop-poster.jpg',
    },
    images: [
      { src: 'products/chomp-chomp.webp', position: 'left', alt: 'Chomp Chomp trucker — front' },
      { src: 'products/chomp-chomp.webp', position: 'right', alt: 'Chomp Chomp trucker — back' },
    ],
  },
]
