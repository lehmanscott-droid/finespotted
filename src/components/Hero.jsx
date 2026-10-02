import { DROP } from '../config.js'
import { products } from '../data/products.js'
import Countdown from './Countdown.jsx'
import CropImage from './CropImage.jsx'

/*
 * Campaign-style opener: the product photo fills the screen, drop status
 * and countdown sit quietly along the bottom edge.
 * Wide screens show the whole shot (front + back); phones crop to the front.
 */
export default function Hero({ countdown, unlocked }) {
  const hero = products[0]
  const status = countdown.done ? 'Out now' : unlocked ? 'Early access unlocked' : 'Dropping soon'

  return (
    <section id="top" className="flex min-h-[100svh] flex-col bg-white pt-16">
      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <CropImage image={hero.images[0]} eager className="w-full max-w-md sm:hidden" />
        <img
          src={hero.images[0].src}
          alt={`${hero.name}, front and back`}
          fetchpriority="high"
          className="absolute inset-0 hidden h-full w-full object-contain px-8 sm:block"
        />
      </div>

      <div className="flex flex-col gap-6 px-4 pb-24 pt-4 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pb-24">
        <div>
          <p className="label text-stone">
            Drop {DROP.number} — {status}
          </p>
          <h1 className="display mt-2 text-2xl sm:text-3xl">{DROP.name}</h1>
        </div>

        {countdown.done ? (
          <a href="#drop" className="btn-primary sm:w-auto">
            Shop the drop
          </a>
        ) : (
          <Countdown countdown={countdown} />
        )}
      </div>
    </section>
  )
}
