import { useState } from 'react'

/*
 * Three states: SOLD OUT → locked (before the drop) → BUY NOW / PRE-ORDER.
 * The buy state is a plain link to the piece's Stripe Payment Link, so checkout,
 * payment and shipping details are all handled on Stripe's hosted page.
 */
export default function BuyButton({ product, canBuy }) {
  const [missingLink, setMissingLink] = useState(false)
  const label = `${product.preorder ? 'Pre-order' : 'Buy now'} — $${product.price}`

  if (product.soldOut) {
    return (
      <button type="button" disabled className="btn-disabled">
        Sold out
      </button>
    )
  }

  if (!canBuy) {
    return (
      <button type="button" disabled className="btn-disabled">
        Locked until drop
      </button>
    )
  }

  if (!product.stripeLink) {
    return (
      <>
        <button type="button" className="btn-primary" onClick={() => setMissingLink(true)}>
          {label}
        </button>
        {missingLink && (
          <p className="mt-3 text-center text-sm text-flame" role="status">
            {import.meta.env.DEV
              ? 'No Stripe link yet — add stripeLink in src/data/products.js.'
              : 'Checkout opens shortly. Try again in a moment.'}
          </p>
        )}
      </>
    )
  }

  return (
    <a href={product.stripeLink} className="btn-primary">
      {label}
    </a>
  )
}
