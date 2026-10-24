import { Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/siteInfo'
import { withBase } from '../../lib/paths'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-smoke-deep pb-8 pt-12 text-cream md:pt-20">
      <div className="rail absolute inset-x-0 top-0 text-cream/15" aria-hidden />
      <img
        src={withBase('/train.webp')}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-10 w-[420px] opacity-[0.07] invert"
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <img src={withBase('/wordmark.webp')} alt="Il Vaporino" className="h-10 w-auto" />
            <p className="mt-2 font-sign text-xs uppercase tracking-[0.34em] text-cream/60">Trattoria · Pizzeria · Bologna</p>
            <p className="mt-4 max-w-sm font-display text-xl md:mt-6 md:text-2xl italic leading-snug text-cream/90">
              «Fuori porta... ma sempre in orario per la buona tavola.»
            </p>
            <div className="mt-4 flex gap-3 md:mt-8">
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-[3px] ring-1 ring-cream/25 transition hover:bg-cream hover:text-smoke"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="hidden md:col-span-3 md:block">
            <h4 className="mb-5 font-sign text-xs font-medium uppercase tracking-[0.3em] text-brass">Orari di marcia</h4>
            <ul className="space-y-3 text-cream/75">
              <li className="flex items-start gap-3">
                <Clock size={17} className="mt-1 shrink-0 text-signal-soft" />
                <span>
                  Tutti i giorni
                  <br />
                  12:00 – 14:30
                  <br />
                  19:00 – 00:00
                </span>
              </li>
            </ul>
            <h4 className="mb-4 mt-8 hidden font-sign md:block text-xs font-medium uppercase tracking-[0.3em] text-brass">Esplora</h4>
            <ul className="hidden space-y-2.5 text-cream/75 md:block">
              <li><Link to="/" className="transition hover:text-cream">Home</Link></li>
              <li><Link to="/menu" className="transition hover:text-cream">Menu completo</Link></li>
              <li><Link to="/" state={{ scrollTo: 'gallery' }} className="transition hover:text-cream">Gallery</Link></li>
              <li><Link to="/" state={{ scrollTo: 'contatti' }} className="transition hover:text-cream">Dove siamo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-5 font-sign text-xs font-medium uppercase tracking-[0.3em] text-brass">Biglietteria</h4>
            <ul className="space-y-4 text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-signal-soft" />
                <span>
                  {siteInfo.address}
                  <br />
                  {siteInfo.zip} {siteInfo.city} ({siteInfo.province}) · {siteInfo.district}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-signal-soft" />
                <a href={siteInfo.phoneHref} className="hover:text-cream">{siteInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-signal-soft" />
                <a href={`mailto:${siteInfo.email}`} className="break-all hover:text-cream">{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:mt-16 items-center justify-between gap-3 border-t border-cream/10 pt-8 text-xs uppercase tracking-[0.2em] text-cream/40 md:flex-row">
          <span>© {new Date().getFullYear()} Trattoria Pizzeria Il Vaporino · Bologna</span>
          <span>P.IVA 02295681205 · Coperto € 2,50 a persona</span>
        </div>
      </div>
    </footer>
  )
}
