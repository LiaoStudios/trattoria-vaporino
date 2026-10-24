/** Timbro circolare con testo lungo il bordo (in stile timbro di stazione). */
export function PlateStamp({ className = '', text = 'Pesce fresco ogni giorno · Il Vaporino · ' }: { className?: string; text?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Pesce fresco ogni giorno">
      <defs>
        <path id="stamp-circle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#B8191D" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="#F8F2E4" strokeWidth="1.2" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="#F8F2E4" strokeWidth="1.2" />
      <text fill="#F8F2E4" fontFamily="Oswald, sans-serif" fontSize="15.5" letterSpacing="3.2" fontWeight="500">
        <textPath href="#stamp-circle">{text.toUpperCase()}</textPath>
      </text>
      {/* pesce stilizzato */}
      <g fill="#F8F2E4" transform="translate(100 100)">
        <path d="M-30 0 C-18 -20 14 -20 26 0 C14 20 -18 20 -30 0 Z" />
        <path d="M24 0 L40 -14 L40 14 Z" />
        <circle cx="-16" cy="-4" r="3" fill="#B8191D" />
      </g>
    </svg>
  )
}
