import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollLock } from '../../lib/useScrollLock'

export interface LightboxItem {
  src: string
  alt: string
}

interface Props {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null
  useScrollLock(open)

  useEffect(() => {
    if (!open || index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, items.length, onClose, onNavigate])

  const arrow =
    'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] bg-cream/10 text-cream ring-1 ring-cream/30 transition hover:bg-cream hover:text-smoke'

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-smoke-deep/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={onClose} aria-label="Chiudi" className={`${arrow} !top-5 right-5 !translate-y-0`}>
            <X size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length) }}
            aria-label="Precedente"
            className={`${arrow} left-3 md:left-8`}
          >
            <ChevronLeft size={24} />
          </button>

          <motion.figure
            key={items[index].src}
            className="flex max-h-[88vh] max-w-[90vw] flex-col items-center"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={items[index].src} alt={items[index].alt} className="max-h-[78vh] max-w-full rounded-md border-[10px] border-cream object-contain shadow-2xl" />
            <figcaption className="mt-4 font-sign text-sm uppercase tracking-[0.2em] text-cream/80">
              {items[index].alt} · {index + 1}/{items.length}
            </figcaption>
          </motion.figure>

          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length) }}
            aria-label="Successiva"
            className={`${arrow} right-3 md:right-8`}
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
