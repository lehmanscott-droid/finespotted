import { BRAND } from '../config.js'

/*
 * Shipping & returns. Plain-language policy for a pre-order drop:
 * ships within 3 weeks, US only, flat rate, all sales final.
 * Edit the copy here when the policy changes.
 */
const email = (
  <a href={`mailto:${BRAND.contactEmail}`} className="underline underline-offset-4 hover:text-flame">
    {BRAND.contactEmail}
  </a>
)

const sections = [
  {
    title: 'Shipping',
    items: [
      <>Every piece is made in a limited run and sold as a pre-order. Orders ship no later than 3 weeks after you place them, including custom 1 of 1 pieces.</>,
      <>We ship within the United States only, at a flat rate shown at checkout.</>,
      <>We'll email you tracking once your order ships.</>,
      <>Double-check your shipping address at checkout. Need to change it? Email {email} before your order ships.</>,
      <>If we can't ship within 3 weeks, we'll email you a new date and you can cancel for a full refund.</>,
      <>If tracking shows delivered but you can't find your package, check with the carrier and your neighbors first, then email {email} and we'll help however we can.</>,
    ],
  },
  {
    title: 'Returns & refunds',
    items: [
      <>All sales are final. Because every drop is a limited run with no restocks, we don't accept returns or exchanges. This includes custom 1 of 1 pieces.</>,
      <>If your order arrives damaged or isn't what you ordered, email {email} within 7 days of delivery with your order email and photos. We'll make it right with a replacement if one is available, or a full refund.</>,
      <>Approved refunds go back to your original payment method.</>,
    ],
  },
]

export default function Policies() {
  return (
    <section id="policies" className="scroll-mt-16 border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="display text-xl">{s.title}</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink/80">
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
