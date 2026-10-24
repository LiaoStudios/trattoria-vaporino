import { TrainFront } from 'lucide-react'

/** Binario con un trenino che scorre piano: separatore tra le sezioni. */
export function RailDivider({ className = 'text-smoke/30' }: { className?: string }) {
  return (
    <div aria-hidden className={`relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="relative h-9">
          <TrainFront size={22} strokeWidth={1.6} className="absolute bottom-3 left-0 animate-rail-run text-signal" />
          <div className="rail absolute inset-x-0 bottom-0" />
        </div>
      </div>
    </div>
  )
}
