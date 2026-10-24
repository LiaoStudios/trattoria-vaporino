import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../../data/reviews'
import { siteInfo } from '../../data/siteInfo'
import { fadeUp, inView, stagger } from '../../lib/motion'
import { SectionHeading } from '../ui/SectionHeading'

export function Reviews() {
  const { google, tripadvisor } = siteInfo.rating
  return (
    <section id="recensioni" className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-32">
      <SectionHeading
        stop="06"
        eyebrow="Parlano di noi"
        title={<>I passeggeri <span className="italic text-signal">sono soddisfatti</span></>}
        className="mb-8 md:mb-12"
      />

      <div className="mb-8 flex flex-wrap items-stretch justify-center gap-3 md:mb-14 md:gap-5">
        {[
          { name: 'Google', score: google.score, count: google.count, url: google.url, max: '5' },
          { name: 'Tripadvisor', score: tripadvisor.score, count: tripadvisor.count, url: tripadvisor.url, max: '5' },
        ].map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 rounded-[3px] bg-smoke px-5 py-3.5 text-cream shadow-soft md:px-7 md:py-5 transition hover:-translate-y-1"
          >
            <span className="font-display text-4xl font-bold leading-none md:text-5xl">{r.score}</span>
            <span className="flex flex-col gap-1">
              <span className="flex gap-0.5 text-brass">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill={i + 0.75 <= Number(r.score.replace(',', '.')) ? 'currentColor' : 'none'} />
                ))}
              </span>
              <span className="font-sign text-[0.65rem] uppercase tracking-[0.18em] text-cream/70 md:text-xs">
                {r.name} · {r.count} recensioni
              </span>
            </span>
          </a>
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0"
      >
        {reviews.map((r, i) => (
          <motion.figure
            key={i}
            variants={fadeUp}
            className="relative flex w-[84%] shrink-0 snap-center flex-col justify-between rounded-md bg-white p-6 md:w-auto md:p-8 shadow-soft ring-1 ring-smoke/10"
          >
            <Quote size={34} className="absolute right-6 top-6 text-signal/15" fill="currentColor" />
            <blockquote className="font-display text-lg leading-relaxed md:text-xl text-smoke">“{r.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t border-dashed border-smoke/25 pt-4 font-sign text-xs uppercase tracking-[0.2em] text-smoke/70">
              <span>{r.author}{r.date ? ` · ${r.date}` : ''}</span>
              <span className="rounded-[3px] bg-signal/10 px-2.5 py-1 text-signal">{r.source}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
