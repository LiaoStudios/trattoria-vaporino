import { Flame } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TicketButton } from '../ui/TicketButton'
import { withBase } from '../../lib/paths'

const tickets = [
  { name: 'Margherita', desc: 'Pomodoro, mozzarella', price: '€ 6,00' },
  { name: 'Diavola', desc: 'Pomodoro, mozzarella, salame piccante', price: '€ 9,00' },
  { name: 'Salsiccia e friarielli', desc: 'Bianca: mozzarella, salsiccia, friarielli', price: '€ 9,50' },
  { name: 'Il Vaporino', desc: 'Prosciutto, funghi, salsiccia, pancetta, peperoni, wurstel, olive, uovo', price: '€ 11,00' },
]

export function Oven() {
  return (
    <section id="pizza" className="relative overflow-hidden bg-station-deep py-14 text-cream md:py-32">
      <div className="rail absolute inset-x-0 top-6 text-cream/10" aria-hidden />
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <SectionHeading
            light
            align="left"
            stop="03"
            eyebrow="La pizzeria"
            title={<>Pizza dal forno a legna, <span className="italic text-brass">anche al metro</span></>}
            className="mb-5 md:mb-8"
          />
          <Reveal delay={0.1}>
            <p className="hidden text-lg font-light sm:block leading-relaxed text-cream/80">
              Più di quaranta pizze, dalla Marinara alle speciali della casa, cotte nel forno a legna e abbinate a una
              selezione di birre fresche. Se preferisci un impasto più leggero chiedi la <strong className="font-semibold text-cream">pizza stesa</strong>: più
              sottile e croccante. Per le tavolate, c’è la pizza al metro.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-6 space-y-2.5 md:mt-9 md:space-y-3">
              {tickets.map((t, i) => (
                <li
                  key={t.name}
                  className={`relative items-center gap-4 rounded-[3px] bg-cream px-4 py-3 text-smoke md:px-5 md:py-4 ${i === 3 ? 'hidden sm:flex' : 'flex'}`}
                >
                  <span aria-hidden className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-station-deep" />
                  <span aria-hidden className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-station-deep" />
                  <div className="min-w-0 flex-1 border-r border-dashed border-smoke/30 pr-4">
                    <p className="font-display text-xl font-bold leading-tight">{t.name}</p>
                    <p className="mt-0.5 truncate text-sm text-ink/60" title={t.desc}>{t.desc}</p>
                  </div>
                  <span className="font-sign text-xl tracking-wider text-signal">{t.price}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-5 md:mt-9">
              <TicketButton to="/menu#pizze" variant="cream">
                <Flame size={16} /> Tutte le pizze
              </TicketButton>
              <p className="hidden max-w-xs text-sm text-cream/60 sm:block">
                Sabato, domenica e festivi a pranzo il servizio di pizzeria è sospeso.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative mx-auto aspect-square w-[58%] max-w-[560px] sm:w-full">
            <div className="absolute inset-0 overflow-hidden frame-round shadow-plate ring-[10px] ring-cream/90">
              <img
                src={withBase('/images/piatti/pizza-salame.webp')}
                alt="Pizza con mozzarella e salame piccante appena sfornata"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 flex h-28 w-28 rotate-6 flex-col items-center justify-center rounded-full bg-signal text-center font-sign uppercase leading-tight tracking-[0.12em] text-cream shadow-ticket sm:h-32 sm:w-32">
              <Flame size={20} className="mb-1" />
              <span className="text-[0.7rem]">Forno</span>
              <span className="text-lg">a legna</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
