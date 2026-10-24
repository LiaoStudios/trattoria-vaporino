// Recensioni reali (testo originale, con la sola punteggiatura sistemata).
export interface Review {
  quote: string
  author: string
  source: string
  date?: string
}

export const reviews: Review[] = [
  {
    quote: 'Simpatici, accoglienza davvero bella e pietanze più che soddisfacenti.',
    author: 'Luca B.',
    source: 'Sito ufficiale',
    date: '13.05.2024',
  },
  {
    quote: 'Ottima la bistecca media cottura e super ottime le rane fritte.',
    author: 'Un cliente',
    source: 'Google',
  },
  {
    quote: 'Locale caldo e accogliente, personale gentile e professionale e risotto alla marinara davvero delizioso. Rapporto qualità e prezzo più che giusto.',
    author: 'Un cliente',
    source: 'Tripadvisor',
  },
  {
    quote: 'Mi è stato consigliato da un amico, locale bello e un’ottima cucina. Consigliatissimo, ci torneremo presto.',
    author: 'Lucia N.',
    source: 'Sito ufficiale',
    date: '11.07.2022',
  },
]
