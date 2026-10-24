const items = [
  'Pesce fresco ogni giorno',
  'Pasta all’uovo fatta in casa',
  'Pizza cotta nel forno a legna',
  'Pizza al metro',
  'Carne alla griglia',
  'Take away',
  'Eventi privati e cerimonie',
  'Parcheggio gratuito',
]

/** Tabellone delle partenze: fascia scorrevole con i punti di forza. */
export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y-4 border-double border-cream/30 bg-smoke py-3 md:py-4 text-cream" aria-label="Il Vaporino in breve">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-sign text-[0.95rem] uppercase tracking-[0.24em]">
        {row.concat(row).map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-signal-soft" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
