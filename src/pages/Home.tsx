import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { Marquee } from '../components/sections/Marquee'
import { Story } from '../components/sections/Story'
import { Specialties } from '../components/sections/Specialties'
import { Oven } from '../components/sections/Oven'
import { ChefBoard } from '../components/sections/ChefBoard'
import { Gallery } from '../components/sections/Gallery'
import { Reviews } from '../components/sections/Reviews'
import { Contact } from '../components/sections/Contact'
import { RailDivider } from '../components/ui/RailDivider'
import { siteInfo } from '../data/siteInfo'

export function Home() {
  const location = useLocation()

  // Navigazione da un'altra pagina (state.scrollTo) o #hash al caricamento.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    const id = target || location.hash.replace('#', '')
    if (!id) return
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
    return () => clearTimeout(t)
  }, [location])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteInfo.fullName,
    servesCuisine: ['Italiana', 'Pesce', 'Pizza'],
    priceRange: '€€',
    image: '/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address,
      addressLocality: siteInfo.city,
      postalCode: siteInfo.zip,
      addressRegion: siteInfo.province,
      addressCountry: 'IT',
    },
    geo: { '@type': 'GeoCoordinates', latitude: siteInfo.lat, longitude: siteInfo.lng },
    telephone: siteInfo.phone,
    email: siteInfo.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '19:00',
        closes: '23:59',
      },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.1', reviewCount: '1388', bestRating: '5' },
    sameAs: [siteInfo.social.facebook],
  }

  return (
    <>
      <Helmet>
        <title>Trattoria Pizzeria Il Vaporino | Pesce, pasta fatta in casa e pizza · Bologna Navile</title>
        <meta
          name="description"
          content="Il Vaporino a Bologna (Navile): pesce fresco, pasta all'uovo fatta in casa, carne alla griglia e pizza cotta nel forno a legna. Via Francesco Zanardi 246 · Tel. 051 634 0631."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />
      <Marquee />
      <Story />
      <RailDivider />
      <Specialties />
      <Oven />
      <ChefBoard />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  )
}
