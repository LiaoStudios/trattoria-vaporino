// Unica fonte per contatti, orari e social.
// Dati reali: Trattoria Pizzeria Il Vaporino, Bologna (Navile).
// Fonti: sito ufficiale (trattoriailvaporino.eatbu.com), scheda Google Maps, pagina Facebook.
export const siteInfo = {
  name: 'Il Vaporino',
  fullName: 'Trattoria Pizzeria Il Vaporino',
  tagline: 'Fuori porta...',

  phone: '+39 051 634 0631',
  phoneHref: 'tel:+390516340631',
  email: 'ristoranteilvaporino@libero.it',
  address: 'Via Francesco Zanardi, 246',
  city: 'Bologna',
  district: 'Navile',
  province: 'BO',
  zip: '40131',
  country: 'Italia',
  lat: 44.5262664,
  lng: 11.317239,

  mapsEmbed: 'https://www.google.com/maps?q=44.5262664,11.317239&z=16&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Trattoria+Il+Vaporino+Via+Francesco+Zanardi+246+Bologna',

  // Il sito ufficiale indica: "aperti tutti i giorni dalle 12.00 alle 14.30 e dalle 19.00 alle 00.00".
  hours: [
    { days: 'Lunedì', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Martedì', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Mercoledì', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Giovedì', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Venerdì', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Sabato', value: '12:00 – 14:30 · 19:00 – 00:00' },
    { days: 'Domenica', value: '12:00 – 14:30 · 19:00 – 00:00' },
  ],
  hoursNote:
    'Sabato, domenica e festivi a pranzo il servizio di pizzeria è sospeso. Consigliamo di prenotare.',

  rating: {
    google: { score: '4,1', count: '1.388', url: 'https://www.google.com/maps/place/Trattoria+Il+Vaporino/@44.5262664,11.317239,17z' },
    tripadvisor: {
      score: '3,5',
      count: '310',
      url: 'https://www.tripadvisor.it/Restaurant_Review-g187801-d2618809-Reviews-Il_Vaporino-Bologna_Province_of_Bologna_Emilia_Romagna.html',
    },
  },

  social: {
    facebook: 'https://www.facebook.com/RistorantePizzeriaIlVaporino/',
    booking: 'https://trattoriailvaporino.eatbu.com',
  },

  menuPdf: 'https://cdn.website.dish.co/media/39/05/10197863/MENU.pdf',
} as const

export type SiteInfo = typeof siteInfo
