import { motion } from 'framer-motion'
import { Phone, UtensilsCrossed, MapPin } from 'lucide-react'
import { siteInfo } from '../../data/siteInfo'
import { withBase } from '../../lib/paths'
import { PlateStamp } from '../ui/PlateStamp'
import { TicketButton } from '../ui/TicketButton'

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-smoke-deep pt-24 pb-14 md:pt-32 md:pb-24">
      {/* foto a tutto sfondo, con velo scuro per leggere il testo */}
      <img
        src={withBase('/images/piatti/scialatelli-astice.webp')}
        alt="Scialatelli all’astice con cozze e crostacei"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-smoke-deep/75 via-smoke-deep/60 to-smoke-deep/85" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, rotate: -40, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -8, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-5 h-16 w-16 drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)] md:mb-7 md:h-20 md:w-20"
        >
          <PlateStamp className="h-full w-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center justify-center gap-3 font-sign text-[0.8rem] uppercase tracking-[0.26em] text-cream md:mb-6"
        >
          <span className="h-px w-6 bg-signal md:w-8" />
          Trattoria · Pizzeria<span className="hidden sm:inline"> · Bologna Navile</span>
          <span className="h-px w-6 bg-signal md:w-8" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[2.4rem] font-extrabold leading-[1.04] text-cream sm:text-6xl lg:text-[4.6rem] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
        >
          Prossima fermata:
          <br />
          <span className="italic font-semibold text-[#ff8f8c]">buona tavola.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-5 max-w-xl text-[0.98rem] font-light leading-relaxed text-cream/90 md:mt-7 md:text-lg [text-shadow:0_1px_14px_rgba(0,0,0,0.6)]"
        >
          Pesce fresco ogni giorno, pasta all’uovo fatta in casa, carne alla griglia e la pizza cotta nel forno a
          legna. Una sala calda e accogliente, a un passo dal centro: <em className="font-display">fuori porta</em>,
          ma sempre vicino.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center md:mt-10 md:gap-4"
        >
          <TicketButton to="/menu" variant="red">
            <UtensilsCrossed size={17} /> Sfoglia il menu
          </TicketButton>
          <TicketButton href={siteInfo.phoneHref} variant="lineLight">
            <Phone size={17} /> Prenota un tavolo
          </TicketButton>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 hidden flex-wrap items-center justify-center gap-x-8 gap-y-3 font-sign text-[0.8rem] uppercase tracking-[0.2em] text-cream/80 sm:flex md:mt-12"
        >
          <li className="flex items-center gap-2"><MapPin size={15} className="text-[#ff8f8c]" /> {siteInfo.address}</li>
          <li>★ {siteInfo.rating.google.score} su Google · {siteInfo.rating.google.count} recensioni</li>
        </motion.ul>
      </div>
    </section>
  )
}
