import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, inView, stagger } from '../../lib/motion'
import { withBase } from '../../lib/paths'

const specialties = [
  {
    title: 'Antipasti di mare',
    img: '/images/piatti/antipasto-mare.webp',
    text: 'Antipasto freddo o caldo, cozze, vongole veraci e insalata di polpo.',
    to: '/menu#antipasti',
    tag: 'Dal mare',
  },
  {
    title: 'Pasta fatta in casa',
    img: '/images/piatti/tagliolini-gamberi.webp',
    text: 'Scialatelli ai crostacei, strozzapreti, tortelloni e tagliatelle: tutta pasta all’uovo fresca.',
    to: '/menu#primi',
    tag: 'Primi',
  },
  {
    title: 'Fritture e grigliate',
    img: '/images/piatti/frittura.webp',
    text: 'Gamberi, calamari, spiedini e la grigliata mista di pesce. Per chi ama la carne: filetto, tagliata e cotolette.',
    to: '/menu#secondi',
    tag: 'Secondi',
  },
  {
    title: 'Pizza al forno a legna',
    img: '/images/piatti/pizza-salame.webp',
    text: 'Pizze classiche e speciali, calzoni e pizza al metro, con la scelta della “pizza stesa” più sottile.',
    to: '/menu#pizze',
    tag: 'Pizzeria',
  },
]

export function Specialties() {
  return (
    <section id="specialita" className="relative bg-paper/60 texture-paper py-14 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionHeading
          stop="02"
          eyebrow="Le specialità"
          title={<>Quattro binari, <span className="italic text-signal">un solo capolinea</span>: la tavola</>}
          className="mb-8 md:mb-20"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 lg:grid-cols-4"
        >
          {specialties.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} className={`w-[60%] shrink-0 snap-center sm:w-auto ${i % 2 === 1 ? 'lg:mt-14' : ''}`}>
              <Link to={s.to} className="group block">
                <div className="frame-photo relative aspect-[4/5] overflow-hidden bg-smoke md:aspect-[3/4] shadow-soft ring-[8px] ring-cream outline outline-1 outline-smoke/15">
                  <img
                    src={withBase(s.img)}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-[3px] bg-signal px-3 py-1 font-sign text-[0.72rem] uppercase tracking-[0.22em] text-cream shadow-ticket">
                    {s.tag}
                  </span>
                </div>
                <div className="px-2 pt-5 text-center md:pt-7">
                  <h3 className="text-2xl font-bold text-smoke">{s.title}</h3>
                  <p className="mt-3 hidden text-[0.95rem] sm:block leading-relaxed text-ink/65">{s.text}</p>
                  <span className="mt-2 inline-flex md:mt-4 items-center gap-1.5 font-sign text-xs uppercase tracking-[0.22em] text-signal transition group-hover:gap-3">
                    Vedi nel menu <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
