import { BRAND, DROP } from '../config.js'

// Minimal fixed bar: wordmark left, two links, bag icon right.
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-8 sm:gap-10">
          <a href="#top" className="wordmark whitespace-nowrap text-[13px] sm:text-[15px]" aria-label={`${BRAND.name} — home`}>
            {BRAND.name}
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a href="#drop" className="label hover:text-flame">
              Drop {DROP.number}
            </a>
            <a href="#contact" className="label hover:text-flame">
              Contact
            </a>
          </div>
        </div>
        <a href="#drop" aria-label="Shop the drop" className="p-2 hover:text-flame">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M5 8h14l-1 12H6L5 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
        </a>
      </nav>
    </header>
  )
}
