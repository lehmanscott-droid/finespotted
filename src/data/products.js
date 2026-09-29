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
    price: 65, // placeholder — USD
    edition: 50, // placeholder — total pieces in the run
    soldOut: false,
    stripeLink: '', // placeholder — paste your https://buy.stripe.com/... link
    size: 'One size — adjustable snapback',
    description:
      'Five-panel trucker in black cotton twill with breathable mesh back. ' +
      'Front: dense multi-colour embroidery of a skeletal rider on a burning ' +
      'gator. Back: CHOMP CHOMP arched in white, signed finespotted & cutthroat.',
    details: [
      'Cotton twill front, poly mesh back',
      '3D multi-colour embroidery',
      'Plastic snapback closure',
      'Numbered limited run',
    ],
    images: [
      { src: 'products/chomp-chomp.webp', position: 'left', alt: 'Chomp Chomp trucker — front' },
      { src: 'products/chomp-chomp.webp', position: 'right', alt: 'Chomp Chomp trucker — back' },
    ],
  },
]
