import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Download, Phone } from 'lucide-react'
import { coperto, menu, menuNote, type MenuItem } from '../data/menu'
import { siteInfo } from '../data/siteInfo'
import { fadeUp, stagger } from '../lib/motion'
import { withBase } from '../lib/paths'
import { TicketButton } from '../components/ui/TicketButton'

const tagLabel: Record<NonNullable<MenuItem['tag']>, string> = {
  novità: 'Novità',
  chef: 'Chef',
}

function Row({ item }: { item: MenuItem }) {
  return (
    <motion.li variants={fadeUp} className="flex gap-4 py-3.5">
      {item.image && (
        <img
          src={withBase(item.image)}
          alt={item.name}
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-full object-cover shadow-soft ring-2 ring-cream outline outline-1 outline-smoke/20"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-[1.08rem] font-semibold leading-snug text-smoke">
            {item.name}
            {item.tag && (
              <span className="ml-2 inline-block -translate-y-0.5 rounded-[2px] bg-signal px-1.5 py-0.5 align-middle font-sign text-[0.6rem] uppercase tracking-[0.18em] text-cream">
                {tagLabel[item.tag]}
              </span>
            )}
          </h4>
          <span className="menu-leader" />
          <span className="whitespace-nowrap font-sign text-[1.05rem] tracking-wide text-signal">{item.price}</span>
        </div>
        {item.desc && <p className="mt-0.5 text-sm leading-relaxed text-ink/60">{item.desc}</p>}
      </div>
    </motion.li>
  )
}

export function MenuPage() {
  const [active, setActive] = useState(menu[0].id)

  // Deep link: /menu#pizze apre direttamente quella categoria.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && menu.some((c) => c.id === hash)) setActive(hash)
  }, [])

  const category = menu.find((c) => c.id === active) ?? menu[0]

  // Su mobile la barra delle categorie scorre: porta in vista quella attiva.
  useEffect(() => {
    document.querySelector(`[data-tab="${active}"]`)?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [active])

  const select = (id: string) => {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <Helmet>
        <title>Menu | Il Vaporino — Trattoria Pizzeria Bologna</title>
        <meta
          name="description"
          content="Il menu del Vaporino: antipasti di mare e di terra, primi con pasta fatta in casa, secondi di pesce e di carne, oltre quaranta pizze cotte nel forno a legna, contorni e dolci. Prezzi inclusi."
        />
      </Helmet>

      {/* intestazione: cartello di stazione */}
      <header className="relative overflow-hidden bg-station-deep px-6 pb-10 pt-28 text-center text-cream md:pb-16 md:pt-44">
        <div className="rail absolute inset-x-0 bottom-3 text-cream/15" aria-hidden />
        <img src={withBase('/train.webp')} alt="" aria-hidden className="pointer-events-none absolute -right-10 top-10 hidden w-[380px] opacity-[0.08] invert md:block" />
        <p className="mb-4 inline-block rounded-[3px] bg-signal px-3 py-1.5 font-sign text-[0.78rem] uppercase tracking-[0.28em]">Il menu</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-7xl">
          Dal mare, dal forno, <span className="italic text-brass">dalla casa</span>
        </h1>
        <p className="mx-auto mt-4 hidden max-w-xl font-light text-cream/75 sm:block md:mt-5">
          Pesce, pasta all’uovo fatta in casa, carne alla griglia e pizza. Piatti del giorno e prezzi possono variare:
          chiedi pure a sala per le proposte di oggi.
        </p>
      </header>

      {/* categorie */}
      <div className="sticky top-[66px] z-40 border-b border-smoke/10 bg-cream/95 backdrop-blur-md md:top-[78px]">
        <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-4 md:justify-center md:px-12">
          {menu.map((c) => (
            <button
              key={c.id}
              data-tab={c.id}
              onClick={() => select(c.id)}
              className={`relative whitespace-nowrap px-4 py-4 font-sign text-[0.85rem] uppercase tracking-[0.18em] transition ${
                active === c.id ? 'text-signal' : 'text-smoke/70 hover:text-smoke'
              }`}
            >
              {c.title}
              {active === c.id && <motion.span layoutId="tab-rail" className="absolute inset-x-3 bottom-0 h-[3px] bg-signal" />}
            </button>
          ))}
        </div>
      </div>

      {/* contenuto */}
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-12 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 grid items-center md:mb-12 gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold text-smoke md:text-6xl">{category.title}</h2>
                {category.blurb && <p className="mt-3 max-w-xl text-lg font-light text-ink/65">{category.blurb}</p>}
              </div>
              {category.image && (
                <div className="frame-arch hidden h-44 w-36 overflow-hidden bg-smoke shadow-soft ring-[6px] ring-cream outline outline-1 outline-smoke/15 md:block">
                  <img src={withBase(category.image.replace('.webp', '-sm.webp'))} alt="" className="h-full w-full object-cover" />
                </div>
              )}
            </div>

            <div className="grid gap-x-16 gap-y-6 md:grid-cols-2">
              {category.groups.map((group, gi) => (
                <div key={gi} className={group.items.length > 14 && category.groups.length > 1 ? 'md:col-span-2' : ''}>
                  {group.label && (
                    <h3 className="mb-2 flex items-center gap-4 font-sign text-sm font-medium uppercase tracking-[0.3em] text-station">
                      {group.label}
                      <span className="rail h-[14px] flex-1 text-station/30" aria-hidden />
                    </h3>
                  )}
                  <motion.ul
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className={`divide-y divide-smoke/5 ${group.items.length > 14 ? 'md:columns-2 md:gap-16 [&>li]:break-inside-avoid' : ''}`}
                  >
                    {group.items.map((item) => (
                      <Row key={item.name} item={item} />
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 rounded-md bg-paper p-6 md:mt-16 md:p-8 text-center ring-1 ring-smoke/10 texture-paper">
          <p className="font-sign text-xs uppercase tracking-[0.26em] text-smoke/60">Coperto {coperto}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">{menuNote}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TicketButton href={siteInfo.phoneHref} variant="red">
              <Phone size={16} /> Prenota: {siteInfo.phone}
            </TicketButton>
            <TicketButton href={siteInfo.menuPdf} variant="line" external>
              <Download size={16} /> Menu originale (PDF)
            </TicketButton>
          </div>
        </div>
      </section>
    </>
  )
}
