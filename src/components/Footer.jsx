import { BRAND } from '../config.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 px-4 pb-28 pt-16 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-script text-5xl leading-none">{BRAND.tagline}</p>
          <p className="label mt-6 text-stone">Limited runs. No restocks.</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a href={`mailto:${BRAND.contactEmail}`} className="label hover:text-flame">
            {BRAND.contactEmail}
          </a>
          <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="label hover:text-flame">
            Instagram
          </a>
          <p className="label text-stone">© {new Date().getFullYear()} {BRAND.name}</p>
        </div>
      </div>
    </footer>
  )
}
