import { DROP } from '../config.js'
import CropImage from './CropImage.jsx'
import BuyButton from './BuyButton.jsx'

const dropDate = new Date(DROP.date).toLocaleString(undefined, {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
})

// Two-column product page: stacked images left, sticky details right.
export default function ProductSection({ product, canBuy, countdown, unlocked, onEarlyAccess }) {
  return (
    <section id="drop" className="scroll-mt-16 bg-paper">
      <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-24">
        <div className="grid gap-2 sm:grid-cols-2">
          {product.images.map((image, i) => (
            <CropImage key={i} image={image} />
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="label text-stone">
            Drop {DROP.number} · Limited to {product.edition}
          </p>
          <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight sm:text-4xl">{product.name}</h2>
          <p className="mt-1 text-stone">{product.subtitle}</p>
          <p className="mt-6 text-xl tabular-nums">${product.price}</p>

          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="label">Size</p>
            <p className="mt-2 text-sm">{product.size}</p>
          </div>

          <div className="mt-8">
            <BuyButton product={product} canBuy={canBuy} />

            {!product.soldOut && !canBuy && (
              <p className="mt-3 text-center text-sm text-stone">
                Drops {dropDate}
                {onEarlyAccess && (
                  <>
                    {' · '}
                    <button type="button" onClick={onEarlyAccess} className="underline underline-offset-4 hover:text-ink">
                      Have a code?
                    </button>
                  </>
                )}
              </p>
            )}
            {!product.soldOut && unlocked && !countdown.done && (
              <p className="mt-3 text-center text-sm text-stone">Early access unlocked. You're in before everyone else.</p>
            )}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-ink/80">{product.description}</p>
          <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/80">
            {product.details.map((d) => (
              <li key={d}>— {d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
