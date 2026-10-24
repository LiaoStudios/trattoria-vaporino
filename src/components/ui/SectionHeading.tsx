import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, inView } from '../../lib/motion'

interface Props {
  /** Numero della "fermata" (es. 02) */
  stop?: string
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

/** Intestazione di sezione in stile cartello di stazione: "Fermata 02 · Le specialità". */
export function SectionHeading({ stop, eyebrow, title, text, align = 'center', light, className = '' }: Props) {
  const center = align === 'center'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}
    >
      <div
        className={`mb-4 inline-flex md:mb-5 items-stretch overflow-hidden rounded-[3px] font-sign text-[0.78rem] font-medium uppercase tracking-[0.2em] ${
          light ? 'bg-cream text-smoke' : 'bg-smoke text-cream'
        }`}
      >
        {stop && <span className="bg-signal px-3 py-1.5 text-cream">Fermata {stop}</span>}
        <span className="px-3 py-1.5">{eyebrow}</span>
      </div>
      <h2 className={`text-[2rem] font-bold leading-[1.1] md:text-5xl lg:text-[3.4rem] ${light ? 'text-cream' : 'text-smoke'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-3 hidden text-base sm:block font-light md:mt-5 md:text-lg leading-relaxed ${light ? 'text-cream/75' : 'text-ink/70'}`}>{text}</p>
      )}
    </motion.div>
  )
}
