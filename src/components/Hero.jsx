import { useState } from 'react'
import { DROP } from '../config.js'
import { products } from '../data/products.js'
import Countdown from './Countdown.jsx'
import CropImage from './CropImage.jsx'
import { useMediaQuery } from '../hooks/useMediaQuery.js'

/*
 * Campaign-style opener: the product fills the screen, drop status and
 * countdown sit quietly along the bottom edge.
 * Wide screens play a silent, seamless light-sweep loop of the front + back
 * (falling back to the still photo for reduced-motion users); phones crop
 * the still photo to the front and never download the video.
 */
export default function Hero({ countdown, unlocked }) {
  const hero = products[0]
  const status = countdown.done ? 'Out now' : unlocked ? 'Early access unlocked' : 'Dropping soon'
  const wide = useMediaQuery('(min-width: 640px)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = Boolean(hero.heroVideo) && wide && !reducedMotion && !videoFailed
  const onVideoError = () => setVideoFailed(true)

  return (
    <section id="top" className="flex min-h-[100svh] flex-col bg-white pt-16">
      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <CropImage image={hero.images[0]} eager className="w-full max-w-md sm:hidden" />
        {showVideo ? (
          <video
            poster={hero.heroVideo.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`${hero.name}, front and back`}
            className="absolute inset-0 hidden h-full w-full object-contain px-8 sm:block"
          >
            {/* Only the last <source> reports failure: browsers fire error on each skipped source
                (React bubbles those up), and on the last one when nothing is playable. */}
            <source src={hero.heroVideo.src} type="video/mp4" onError={hero.heroVideo.webm ? undefined : onVideoError} />
            {hero.heroVideo.webm && <source src={hero.heroVideo.webm} type="video/webm" onError={onVideoError} />}
          </video>
        ) : (
          <img
            src={hero.images[0].src}
            alt={`${hero.name}, front and back`}
            fetchpriority="high"
            className="absolute inset-0 hidden h-full w-full object-contain px-8 sm:block"
          />
        )}
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
