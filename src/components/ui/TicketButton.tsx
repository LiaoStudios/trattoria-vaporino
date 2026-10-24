import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'red' | 'cream' | 'dark' | 'line'

const variants: Record<Variant, string> = {
  red: 'btn-red',
  cream: 'btn-cream',
  dark: 'btn-dark',
  line: 'btn-line',
}

interface Props {
  variant?: Variant
  children: ReactNode
  className?: string
  /** link esterno / tel: / mailto: */
  href?: string
  /** link interno (react-router) */
  to?: string
  onClick?: () => void
  external?: boolean
}

/** Pulsante a forma di biglietto ferroviario (tacche ai lati, bordo tratteggiato). */
export function TicketButton({ variant = 'red', children, className = '', href, to, onClick, external }: Props) {
  const cls = `btn-ticket ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
