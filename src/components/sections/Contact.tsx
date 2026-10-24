import { CalendarCheck, Clock, Mail, MapPin, Navigation, Phone, CreditCard, ShoppingBag, PartyPopper } from 'lucide-react'
import { siteInfo } from '../../data/siteInfo'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TicketButton } from '../ui/TicketButton'

export function Contact() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-signal py-14 text-cream md:py-32">
      <div className="rail absolute inset-x-0 top-6 text-cream/20" aria-hidden />
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionHeading
          light
          stop="07"
          eyebrow="Capolinea"
          title={<>Prenota il tuo posto a bordo</>}
          text="Per tavoli, tavolate e feste basta una telefonata. Rispondiamo volentieri anche via e-mail."
          className="mb-8 md:mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* biglietto di prenotazione */}
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-md bg-cream p-6 text-smoke shadow-plate sm:p-10">
              <span aria-hidden className="absolute -left-3 top-[58%] h-6 w-6 rounded-full bg-signal" />
              <span aria-hidden className="absolute -right-3 top-[58%] h-6 w-6 rounded-full bg-signal" />
              <p className="flex items-center gap-2 font-sign text-xs uppercase tracking-[0.28em] text-signal">
                <CalendarCheck size={16} /> Biglietto di prenotazione
              </p>
              <a href={siteInfo.phoneHref} className="mt-3 block font-display text-3xl font-bold text-smoke transition hover:text-signal sm:text-5xl">
                {siteInfo.phone}
              </a>
              <a href={`mailto:${siteInfo.email}`} className="mt-3 block break-all text-ink/70 underline decoration-signal/40 underline-offset-4 transition hover:text-signal">
                {siteInfo.email}
              </a>

              <div className="my-6 border-t-2 border-dashed border-smoke/25" />

              <div className="flex items-start gap-3">
                <Clock size={19} className="mt-1 shrink-0 text-signal" />
                <div className="w-full">
                  <p className="font-sign text-xs uppercase tracking-[0.24em] text-smoke/60">Orari</p>
                  <ul className="mt-2 text-[0.95rem]">
                    <li className="flex justify-between gap-4 border-b border-smoke/10 py-1.5"><span>Tutti i giorni · pranzo</span><span className="font-medium">12:00 – 14:30</span></li>
                    <li className="flex justify-between gap-4 py-1.5"><span>Tutti i giorni · cena</span><span className="font-medium">19:00 – 00:00</span></li>
                  </ul>
                  <p className="mt-2 hidden text-sm leading-relaxed text-ink/60 sm:block">{siteInfo.hoursNote}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TicketButton href={siteInfo.phoneHref} variant="red"><Phone size={16} /> Chiama ora</TicketButton>
                <TicketButton href={`mailto:${siteInfo.email}`} variant="line"><Mail size={16} /> Scrivici</TicketButton>
              </div>
            </div>

            <ul className="mt-6 hidden gap-3 text-sm text-cream/90 sm:grid sm:grid-cols-3">
              <li className="flex items-start gap-2"><ShoppingBag size={17} className="mt-0.5 shrink-0" /> Anche da asporto</li>
              <li className="flex items-start gap-2"><PartyPopper size={17} className="mt-0.5 shrink-0" /> Matrimoni, battesimi, comunioni</li>
              <li className="flex items-start gap-2"><CreditCard size={17} className="mt-0.5 shrink-0" /> Carte, contactless, buoni pasto</li>
            </ul>
          </Reveal>

          {/* mappa */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="flex h-full flex-col md:min-h-[420px] overflow-hidden rounded-md bg-cream shadow-plate">
              <iframe
                title="Mappa — Trattoria Pizzeria Il Vaporino, Via Francesco Zanardi 246, Bologna"
                src={siteInfo.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden min-h-[340px] w-full flex-1 md:block border-0"
              />
              <div className="flex flex-col items-start justify-between gap-4 p-5 text-smoke sm:flex-row md:p-6 sm:items-center">
                <p className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-signal" />
                  <span>
                    <span className="block font-display text-lg font-bold">{siteInfo.address}</span>
                    {siteInfo.zip} {siteInfo.city} ({siteInfo.province}) · quartiere {siteInfo.district}
                  </span>
                </p>
                <TicketButton href={siteInfo.mapsDirections} variant="dark" external className="!px-6 !py-3">
                  <Navigation size={15} /> Indicazioni
                </TicketButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
