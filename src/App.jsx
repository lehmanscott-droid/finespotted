import { useState } from 'react'
import { DROP, EARLY_ACCESS_CODE } from './config.js'
import { products } from './data/products.js'
import { useCountdown } from './hooks/useCountdown.js'
import { readStore, writeStore } from './storage.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductSection from './components/ProductSection.jsx'
import EarlyAccess from './components/EarlyAccess.jsx'
import WaitlistPopup from './components/WaitlistPopup.jsx'
import Footer from './components/Footer.jsx'

/*
 * ─── COMPOSITION ROOT ─────────────────────────────────────────────────────
 * The page is one long scroll: full-bleed hero → the drop → footer.
 * App owns the only cross-cutting state:
 *   • the drop countdown (shared by the hero and every Buy button)
 *   • whether this visitor unlocked early access (kept for the browser tab)
 *   • whether the early-access dialog is open
 * A piece is buyable when the drop is live OR early access is unlocked,
 * and it isn't sold out.
 */
export default function App() {
  const countdown = useCountdown(DROP.date)
  const [unlocked, setUnlocked] = useState(
    () => Boolean(EARLY_ACCESS_CODE) && readStore('sessionStorage', 'fs-early') === '1',
  )
  const [gateOpen, setGateOpen] = useState(false)

  const canBuy = countdown.done || unlocked

  function unlock() {
    writeStore('sessionStorage', 'fs-early', '1')
    setUnlocked(true)
    setGateOpen(false)
    document.getElementById('drop')?.scrollIntoView()
  }

  return (
    <>
      <Header />
      <main>
        <Hero countdown={countdown} unlocked={unlocked} />
        {products.map((product) => (
          <ProductSection
            key={product.id}
            product={product}
            canBuy={canBuy}
            countdown={countdown}
            unlocked={unlocked}
            onEarlyAccess={EARLY_ACCESS_CODE ? () => setGateOpen(true) : null}
          />
        ))}
      </main>
      <Footer />
      {!countdown.done && <WaitlistPopup />}
      {gateOpen && <EarlyAccess onUnlock={unlock} onClose={() => setGateOpen(false)} />}
    </>
  )
}
