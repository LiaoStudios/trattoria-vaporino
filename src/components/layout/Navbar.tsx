import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, TrainFront } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useScrollLock } from '../../lib/useScrollLock'
import { siteInfo } from '../../data/siteInfo'
import { withBase } from '../../lib/paths'
import { TicketButton } from '../ui/TicketButton'

const sections = [
  { id: 'storia', label: 'Il locale' },
  { id: 'specialita', label: 'Specialità' },
  { id: 'pizza', label: 'Pizzeria' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contatti', label: 'Dove siamo' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const goTo = (id: string) => {
    setOpen(false)
    if (pathname === '/') document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    else navigate('/', { state: { scrollTo: id } })
  }

  const Brand = (
    <Link
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Il Vaporino — Home"
      className="flex items-center gap-3"
    >
      <img src={withBase('/train.webp')} alt="" className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`} />
      <span className="flex flex-col leading-none">
        <img src={withBase('/wordmark.webp')} alt="Il Vaporino" className={`w-auto transition-all duration-300 ${scrolled ? 'h-5' : 'h-6'}`} />
        <span className="mt-1.5 font-sign text-[0.6rem] uppercase tracking-[0.34em] text-smoke/70">Trattoria · Pizzeria</span>
      </span>
    </Link>
  )

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[90] w-full border-b border-smoke/10 bg-cream/90 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-2.5 shadow-soft' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12">
          {Brand}

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Principale">
            {sections.slice(0, 3).map((s) => (
              <button key={s.id} onClick={() => goTo(s.id)} className="nav-link text-smoke">
                {s.label}
              </button>
            ))}
            <Link to="/menu" className="nav-link text-smoke" data-active={pathname === '/menu'}>
              Menu
            </Link>
            {sections.slice(3).map((s) => (
              <button key={s.id} onClick={() => goTo(s.id)} className="nav-link text-smoke">
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <TicketButton href={siteInfo.phoneHref} variant="red" className="hidden !px-6 !py-3 sm:inline-flex">
              <Phone size={15} /> Prenota
            </TicketButton>
            <button onClick={() => setOpen(true)} aria-label="Apri menu" className="text-smoke xl:hidden">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-station-deep text-cream xl:hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="flex items-center gap-2 font-sign text-sm uppercase tracking-[0.25em]">
                <TrainFront size={20} className="text-brass" /> Prossime fermate
              </span>
              <button onClick={() => setOpen(false)} aria-label="Chiudi menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {[...sections.slice(0, 3), { id: 'menu', label: 'Menu' }, ...sections.slice(3)].map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="flex items-baseline gap-4 border-b border-cream/10 py-3"
                >
                  <span className="font-sign text-sm tracking-widest text-brass">{String(i + 1).padStart(2, '0')}</span>
                  {s.id === 'menu' ? (
                    <Link to="/menu" onClick={() => setOpen(false)} className="font-display text-3xl">
                      Menu
                    </Link>
                  ) : (
                    <button onClick={() => goTo(s.id)} className="font-display text-3xl">
                      {s.label}
                    </button>
                  )}
                </motion.div>
              ))}
              <TicketButton href={siteInfo.phoneHref} variant="red" className="mt-8 self-start">
                <Phone size={16} /> Prenota un tavolo
              </TicketButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
