import { motion } from 'framer-motion'
import { useState } from 'react'
import { Expand, ChevronDown } from 'lucide-react'
import { gallery } from '../../data/gallery'
import { fadeUp, stagger } from '../../lib/motion'
import { withBase } from '../../lib/paths'
import { Lightbox } from '../ui/Lightbox'
import { SectionHeading } from '../ui/SectionHeading'
import { TicketButton } from '../ui/TicketButton'

const shapeClass = {
  arch: 'frame-arch',
  round: 'frame-round',
  plate: 'rounded-md',
} as const

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const items = gallery.map((g) => ({ src: withBase(g.src), alt: g.alt }))

  return (
    <section id="gallery" className="bg-paper/60 texture-paper py-14 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionHeading
          stop="05"
          eyebrow="Album di viaggio"
          title={<>Piatti, sala e un po’ di <span className="italic text-signal">vapore</span></>}
          className="mb-8 md:mb-14"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid auto-rows-[130px] grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-3 lg:auto-rows-[210px] lg:grid-cols-4 lg:gap-4"
        >
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              variants={fadeUp}
              onClick={() => setIndex(i)}
              aria-label={`Ingrandisci: ${g.alt}`}
              className={`group relative overflow-hidden bg-smoke shadow-soft ring-4 ring-cream ${shapeClass[g.shape ?? 'plate']} ${g.span ?? ''} ${i >= 6 && !showAll ? 'hidden md:block' : ''}`}
            >
              <img
                src={withBase(g.src.replace('.webp', '-sm.webp'))}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-smoke-deep/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-left font-sign text-[0.7rem] uppercase tracking-[0.16em] text-cream">{g.alt}</span>
                <Expand size={16} className="shrink-0 text-cream" />
              </span>
            </motion.button>
          ))}
        </motion.div>
        {!showAll && (
          <div className="mt-6 flex justify-center md:hidden">
            <TicketButton variant="dark" onClick={() => setShowAll(true)}>
              Mostra altre foto <ChevronDown size={16} />
            </TicketButton>
          </div>
        )}
      </div>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </section>
  )
}
