import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Snowflake, Wifi, Car, Accessibility } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { withBase } from '../../lib/paths'

const perks = [
  { icon: Snowflake, label: 'Aria condizionata' },
  { icon: Wifi, label: 'Wi-Fi gratuito' },
  { icon: Car, label: 'Parcheggio gratuito' },
  { icon: Accessibility, label: 'Accesso senza barriere' },
]

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section id="storia" ref={ref} className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* foto: sala + murale */}
        <div className="relative order-2 mx-auto h-[270px] w-full max-w-[620px] sm:h-[560px] lg:order-1 lg:col-span-6 lg:max-w-none">
          <motion.div
            style={{ y: y1 }}
            className="frame-photo absolute left-0 top-0 h-full w-full overflow-hidden sm:h-[72%] sm:w-[74%] shadow-soft ring-[8px] ring-cream outline outline-1 outline-smoke/15"
          >
            <img
              src={withBase('/images/locale/sala.webp')}
              alt="La sala del Vaporino con tovaglie rosse e murales"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="frame-photo absolute bottom-0 right-0 hidden h-[64%] w-[44%] overflow-hidden sm:block shadow-plate ring-[8px] ring-cream outline outline-1 outline-smoke/15"
          >
            <img
              src={withBase('/images/locale/sala-colonna.webp')}
              alt="Lampade e colonna a specchio nella sala"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-3 left-2 hidden max-w-[210px] sm:flex items-center gap-3 rounded-[3px] bg-smoke px-4 py-3 text-cream shadow-soft">
            <img src={withBase('/images/locale/murale-treno.webp')} alt="Murale con treno a vapore" loading="lazy" className="h-12 w-16 rounded-sm object-cover" />
            <span className="font-sign text-[0.72rem] uppercase leading-snug tracking-[0.16em]">Il treno a vapore dipinto in sala</span>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-10">
          <SectionHeading
            align="left"
            stop="01"
            eyebrow="Il locale"
            title={<>Una trattoria con la locomotiva <span className="italic text-signal">nel cuore</span></>}
            className="mb-5 md:mb-8"
          />
          <Reveal delay={0.1}>
            <div className="space-y-4 text-center text-lg font-light leading-relaxed text-ink/75 md:space-y-5 lg:text-left">
              <p>
                Il Vaporino è una <strong className="font-semibold text-ink">trattoria-pizzeria di quartiere</strong>, nel
                Navile di Bologna: un ambiente elegante e accogliente, con una grande sala, murales di treni d’altri tempi e
                un servizio gentile e attento.
              </p>
              <p className="hidden md:block">
                In cucina il filo conduttore è il mare — antipasti, primi e grigliate di pesce — ma non mancano la
                <strong className="font-semibold text-ink"> pasta all’uovo fatta in casa</strong>, i tagli di carne alla
                griglia, le cotolette e la pizza dal forno a legna.
              </p>
              <p className="hidden md:block">
                Per le feste di famiglia, i compleanni, i matrimoni, i battesimi e le comunioni la sala si affitta
                volentieri: scrivici o chiamaci.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-6 grid grid-cols-2 gap-2 md:mt-9 md:gap-3">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center justify-center gap-3 rounded-[3px] lg:justify-start bg-paper/70 px-3 py-2.5 font-sign text-[0.72rem] md:px-4 md:py-3 md:text-[0.8rem] uppercase tracking-[0.14em] text-smoke ring-1 ring-smoke/10">
                  <Icon size={18} className="shrink-0 text-signal" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
