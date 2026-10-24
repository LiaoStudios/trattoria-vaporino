export interface GalleryImage {
  src: string
  alt: string
  /** classi di spanning nella griglia a mosaico (desktop) */
  span?: string
  shape?: 'arch' | 'round' | 'plate'
}

export const gallery: GalleryImage[] = [
  { src: '/images/piatti/scialatelli-astice.webp', alt: 'Scialatelli all’astice', span: 'lg:col-span-2 lg:row-span-2', shape: 'plate' },
  { src: '/images/locale/sala.webp', alt: 'La sala del Vaporino', span: 'lg:col-span-2', shape: 'plate' },
  { src: '/images/piatti/pizza-salame.webp', alt: 'Pizza cotta nel forno a legna', shape: 'plate' },
  { src: '/images/piatti/frittura.webp', alt: 'Frittura di gamberi e calamari', shape: 'plate' },
  { src: '/images/locale/facciata.webp', alt: 'L’ingresso di Trattoria Pizzeria Il Vaporino', span: 'lg:row-span-2', shape: 'arch' },
  { src: '/images/piatti/antipasto-mare.webp', alt: 'Antipasto di mare freddo', span: 'lg:col-span-2', shape: 'plate' },
  { src: '/images/piatti/spaghetti-vongole.webp', alt: 'Spaghetti alle vongole', shape: 'plate' },
  { src: '/images/piatti/spiedini-gamberi.webp', alt: 'Spiedini di gamberi', shape: 'plate' },
  { src: '/images/locale/murale-treno.webp', alt: 'Il murale con il treno a vapore in sala', span: 'lg:col-span-2', shape: 'plate' },
  { src: '/images/piatti/zuppetta-cozze.webp', alt: 'Zuppetta di cozze e frutti di mare', shape: 'plate' },
  { src: '/images/piatti/tagliolini-gamberi.webp', alt: 'Tagliolini ai gamberi', shape: 'plate' },
  { src: '/images/locale/sala-colonna.webp', alt: 'Le lampade e la colonna a specchio in sala', span: 'lg:row-span-2', shape: 'arch' },
  { src: '/images/piatti/strozzapreti-rucola.webp', alt: 'Strozzapreti con rucola e pomodorini', shape: 'plate' },
  { src: '/images/piatti/cozze-pasta.webp', alt: 'Pasta con cozze', shape: 'plate' },
  { src: '/images/piatti/tagliatelle-gamberi.webp', alt: 'Tagliatelle ai gamberi', shape: 'plate' },
]
