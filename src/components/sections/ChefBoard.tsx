import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChefHat, ArrowRight } from 'lucide-react'
import { menu } from '../../data/menu'
import { fadeUp, inView, stagger } from '../../lib/motion'
import { withBase } from '../../lib/paths'
import { SectionHeading } from '../ui/SectionHeading'
import { TicketButton } from '../ui/TicketButton'

/** Lavagna con "Novità" e "Lo chef consiglia", presi dal menu. */
export function ChefBoard() {
  const cat = menu.find((c) => c.id === 'novita')!
  const [novita, chef] = cat.groups
  const [tab, setTab] = useState(0)

  return (
    <section className="overflow-x-clip">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-32">
      <SectionHeading
        stop="04"
        eyebrow="In cucina oggi"
        title={<>Le <span className="italic text-signal">novità</span> e i consigli dello chef</>}
        text="Il mercato decide, la cucina segue: questi sono i piatti del momento."
        className="mb-8 md:mb-14"
      />

      <div className="grid items-stretch gap-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={inView}
          transition={{ duration: 0.7 }}
          className="frame-plate relative overflow-hidden bg-smoke px-5 py-7 text-cream shadow-plate sm:px-12 sm:py-10 lg:col-span-8"
        >
          {/* mobile: due linguette, una colonna alla volta */}
          <div className="mb-5 flex gap-2 md:hidden">
            {['Novità', 'Lo chef consiglia'].map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`flex-1 rounded-[3px] px-3 py-2 font-sign text-[0.78rem] uppercase tracking-[0.16em] transition ${tab === i ? 'bg-signal text-cream' : 'bg-cream/10 text-cream/70'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {[{ g: novita, title: 'Novità', icon: false }, { g: chef, title: 'Lo chef consiglia', icon: true }].map(({ g, title, icon }, ti) => (
              <motion.div key={title} variants={stagger} initial="hidden" whileInView="show" viewport={inView} className={tab === ti ? '' : 'hidden md:block'}>
                <h3 className="mb-6 hidden flex items-center gap-3 font-sign text-lg font-medium uppercase tracking-[0.24em] text-brass md:flex">
                  {icon && <ChefHat size={20} />} {title}
                </h3>
                <ul className="space-y-4 md:space-y-5">
                  {g.items.map((it) => (
                    <motion.li key={it.name} variants={fadeUp}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-base font-semibold leading-snug md:text-lg">{it.name}</span>
                        <span className="flex-1 translate-y-[-3px] border-b-2 border-dotted border-cream/25" />
                        <span className="font-sign text-lg tracking-wide text-signal-soft">{it.price.replace('€ ', '')}</span>
                      </div>
                      {it.desc && <p className="mt-1 hidden text-sm font-light text-cream/60 md:block">{it.desc}</p>}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 font-sign text-xs uppercase tracking-[0.22em] text-cream/45">Prezzi in euro · Coperto € 2,50 a persona</p>
          <TicketButton to="/menu" variant="cream" className="mt-6 lg:hidden">
            Menu completo <ArrowRight size={15} />
          </TicketButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.8 }}
          className="relative hidden min-h-[360px] overflow-hidden frame-arch lg:block shadow-plate ring-[8px] ring-cream outline outline-1 outline-smoke/15 lg:col-span-4"
        >
          <img src={withBase('/images/piatti/spiedini-gamberi.webp')} alt="Spiedini di gamberi grigliati" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-smoke-deep/90 to-transparent p-7 pt-24 text-center">
            <TicketButton to="/menu" variant="cream" className="!px-6">
              Menu completo <ArrowRight size={15} />
            </TicketButton>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
