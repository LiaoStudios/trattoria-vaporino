import { motion } from 'framer-motion'
import { Phone, UtensilsCrossed, MapPin } from 'lucide-react'
import { siteInfo } from '../../data/siteInfo'
import { withBase } from '../../lib/paths'
import { PlateStamp } from '../ui/PlateStamp'
import { TicketButton } from '../ui/TicketButton'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream texture-paper pt-[4.5rem] md:pt-32">
      {/* locomotiva sfumata sullo sfondo */}
      <img
        src={withBase('/train.webp')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-4 w-[640px] max-w-none opacity-[0.09]"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-6 pb-10 md:px-12 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 font-sign md:mb-6 text-[0.82rem] uppercase tracking-[0.28em] text-signal"
          >
            <span className="h-px w-8 bg-signal" />
            Trattoria · Pizzeria<span className="hidden sm:inline"> · Bologna Navile</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[2.15rem] font-extrabold leading-[1.02] text-smoke sm:text-6xl lg:text-[4.4rem]"
          >
            Prossima fermata:
            <br />
            <span className="italic font-semibold text-signal">buona tavola.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 max-w-xl text-[0.95rem] leading-relaxed md:mt-7 md:text-lg font-light leading-relaxed text-ink/75"
          >
            Pesce fresco ogni giorno, pasta all’uovo fatta in casa, carne alla griglia e la pizza cotta nel forno a
            legna. Una sala calda e accogliente, a un passo dal centro: <em className="font-display">fuori porta</em>,
            ma sempre vicino.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-7 flex flex-col items-start gap-3 sm:flex-row md:mt-10 md:gap-4"
          >
            <TicketButton to="/menu" variant="red">
              <UtensilsCrossed size={17} /> Sfoglia il menu
            </TicketButton>
            <TicketButton href={siteInfo.phoneHref} variant="line">
              <Phone size={17} /> Prenota un tavolo
            </TicketButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 hidden flex-wrap items-center md:mt-12 sm:flex gap-x-8 gap-y-3 font-sign text-[0.8rem] uppercase tracking-[0.2em] text-smoke/70"
          >
            <li className="flex items-center gap-2"><MapPin size={15} className="text-signal" /> {siteInfo.address}</li>
            <li>★ {siteInfo.rating.google.score} su Google · {siteInfo.rating.google.count} recensioni</li>
          </motion.ul>
        </div>

        {/* composizione foto: finestrino ad arco + piatto che ruota + timbro */}
        <div className="relative order-1 mx-auto mt-2 mb-4 w-full max-w-[330px] sm:max-w-[560px] lg:order-2 lg:col-span-6 lg:mb-0 lg:mt-0 lg:max-w-none xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto aspect-[5/6] w-[80%] sm:aspect-[4/5] sm:w-[82%] overflow-hidden frame-arch bg-paper shadow-plate ring-[10px] ring-cream outline outline-1 outline-smoke/15 lg:w-[74%]"
          >
            <img
              src={withBase('/images/piatti/scialatelli-astice.webp')}
              alt="Scialatelli all’astice con cozze e crostacei"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            src={withBase('/images/piatti/vongole-cutout.webp')}
            alt="Spaghetti alle vongole"
            className="absolute -bottom-6 -left-2 w-[52%] animate-plate-spin drop-shadow-[0_26px_26px_rgba(23,25,28,0.35)] sm:-left-6 lg:-left-10"
          />

          <motion.div
            initial={{ opacity: 0, rotate: -40 }}
            animate={{ opacity: 1, rotate: -10 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="absolute right-0 top-4 h-28 w-28 drop-shadow-[0_10px_18px_rgba(133,16,15,0.35)] sm:h-32 sm:w-32 lg:-right-2 lg:top-8"
          >
            <PlateStamp className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
