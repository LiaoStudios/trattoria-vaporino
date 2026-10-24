// Menu reale di Trattoria Pizzeria Il Vaporino (da MENU.pdf del sito ufficiale).
// Piatti "Novità" e "Lo chef consiglia" cambiano nel tempo: confermare col locale.
export interface MenuItem {
  name: string
  desc?: string
  price: string
  tag?: 'novità' | 'chef'
  image?: string
}

export interface MenuGroup {
  label?: string
  items: MenuItem[]
  /** Nota in coda al gruppo (es. aggiunte pizza) */
  footnote?: string
}

export interface MenuCategory {
  id: string
  title: string
  blurb?: string
  image?: string
  groups: MenuGroup[]
}

const e = (n: string) => `€ ${n}`

export const coperto = '€ 2,50 a persona'
export const menuNote =
  'Alcuni prodotti sono congelati. Per allergie o intolleranze chiedi pure al personale: ti consigliamo con piacere.'

export const menu: MenuCategory[] = [
  {
    id: 'novita',
    title: 'Novità & Chef',
    blurb: 'I piatti del momento e i consigli dello chef: cambiano con il mercato.',
    image: '/images/piatti/scialatelli-astice.webp',
    groups: [
      {
        label: 'Novità',
        items: [
          { name: 'Tagliata di tonno in crosta di pistacchio', price: e('24,00'), tag: 'novità' },
          { name: 'Filetto di orata o branzino agli agrumi', price: e('18,00'), tag: 'novità' },
          { name: 'Tartare di tonno con semi di sesamo', price: e('23,00'), tag: 'novità' },
          { name: 'Spaghetti alla chitarra al nero di seppia', price: e('15,00'), tag: 'novità' },
          {
            name: 'Spaghetti alla chitarra',
            desc: 'Con code di gamberi, pesto di pistacchio, pomodorini, stracciatella e riduzione di basilico',
            price: e('18,00'),
            tag: 'novità',
          },
          { name: 'Strozzapreti mari e monti', desc: 'Con frutti di mare e porcini', price: e('15,00'), tag: 'novità' },
        ],
      },
      {
        label: 'Lo chef consiglia',
        items: [
          { name: 'Lasagna al forno', price: e('14,00'), tag: 'chef' },
          { name: 'Pappardelle ai funghi porcini', price: e('15,00'), tag: 'chef' },
          { name: 'Spaghetto mediterraneo', desc: 'Con gamberoni, vongole e bottarga', price: e('18,00'), tag: 'chef' },
          { name: 'Baccalà in umido', price: e('17,00'), tag: 'chef' },
          { name: 'Moscardini in umido', price: e('16,00'), tag: 'chef' },
        ],
      },
    ],
  },
  {
    id: 'antipasti',
    title: 'Antipasti',
    blurb: 'Dal tagliere di salumi alle cozze, dalle vongole veraci all’insalata di polpo.',
    image: '/images/piatti/antipasto-mare.webp',
    groups: [
      {
        label: 'Di carne',
        items: [
          { name: 'Affettati di prosciutto crudo', price: e('10,00') },
          { name: 'Caprese con mozzarella di bufala', price: e('12,00') },
          { name: 'Affettato all’italiana', price: e('13,00') },
          { name: 'Bresaola, rucola e grana', price: e('12,00') },
          { name: 'Mozzarella di bufala', price: e('10,00') },
          { name: 'Prosciutto crudo e mozzarella di bufala', price: e('13,00') },
        ],
      },
      {
        label: 'Di pesce',
        items: [
          { name: 'Antipasto di mare freddo', price: e('15,00'), image: '/images/piatti/antipasto-mare-sm.webp' },
          { name: 'Antipasto di mare caldo', price: e('15,00') },
          { name: 'Cozze alla marinara', price: e('10,00') },
          { name: 'Pepata di cozze', price: e('10,00') },
          { name: 'Cozze alla tarantina', desc: 'Con pomodoro piccante', price: e('12,00') },
          { name: 'Vongole veraci', price: e('14,00') },
          { name: 'Sauté di cozze e vongole', price: e('12,00') },
          { name: 'Cocktail di gamberetti', price: e('11,00') },
          { name: 'Insalata di polpo', price: e('16,00'), image: '/images/piatti/insalata-polpo-sm.webp' },
          { name: 'Salmone affumicato con crostini e burro', price: e('14,00') },
        ],
      },
    ],
  },
  {
    id: 'primi',
    title: 'Primi piatti',
    blurb: 'Pasta all’uovo fresca fatta in casa, risotti e primi di mare.',
    image: '/images/piatti/pasta-granchio.webp',
    groups: [
      {
        label: 'Pasta della tradizione',
        items: [
          { name: 'Spaghetti alla carbonara', price: e('12,00') },
          { name: 'Penne all’arrabbiata', price: e('10,00') },
          { name: 'Tagliatelle al ragù', price: e('14,00') },
          { name: 'Garganelli speck e rucola', desc: 'Pasta all’uovo fresca fatta in casa', price: e('12,00') },
          { name: 'Tortellini', desc: 'In brodo, al ragù, alla panna o pasticciati ragù e panna', price: e('14,00') },
          {
            name: 'Tortelloni',
            desc: 'Burro e salvia · burro e pomodoro · radicchio, noci e gorgonzola',
            price: e('14,00'),
          },
          { name: 'Tortelloni ai funghi porcini', price: e('14,00') },
          { name: 'Risotto all’ortolana', desc: 'Con verdure', price: e('12,00') },
          { name: 'Strozzapreti speck e porcini', desc: 'Pasta all’uovo fresca fatta in casa', price: e('14,00') },
          {
            name: 'Strozzapreti salsiccia, radicchio, porcini e scaglie di grana',
            price: e('14,00'),
            image: '/images/piatti/strozzapreti-rucola-sm.webp',
          },
        ],
      },
      {
        label: 'Primi di pesce',
        items: [
          {
            name: 'Scialatelli ai crostacei',
            desc: 'Scampi, gamberi e granchio — pasta fresca fatta in casa',
            price: e('20,00'),
            image: '/images/piatti/pasta-granchio-sm.webp',
          },
          {
            name: 'Scialatelli all’astice',
            desc: 'Pasta fresca fatta in casa',
            price: e('22,00'),
            image: '/images/piatti/scialatelli-astice-sm.webp',
          },
          {
            name: 'Spaghetti alle vongole',
            desc: 'In bianco',
            price: e('17,00'),
            image: '/images/piatti/spaghetti-vongole-sm.webp',
          },
          { name: 'Spaghetti allo scoglio', desc: 'Al pomodoro', price: e('18,00') },
          { name: 'Risotto gamberetti e zucchine', price: e('13,00') },
          { name: 'Risotto alla marinara', price: e('17,00') },
          { name: 'Strozzapreti gamberi e rucola', price: e('16,00') },
        ],
      },
    ],
  },
  {
    id: 'secondi',
    title: 'Secondi',
    blurb: 'Carne alla griglia e tagli di manzo, ma soprattutto il pesce del giorno.',
    image: '/images/piatti/mare-misto.webp',
    groups: [
      {
        label: 'Di carne',
        items: [
          { name: 'Bistecca ai ferri', desc: 'Manzo', price: e('12,00') },
          { name: 'Scaloppina a scelta', desc: 'Limone o vino', price: e('12,00') },
          { name: 'Scaloppina ai funghi porcini', price: e('14,00') },
          { name: 'Cotoletta alla milanese', price: e('12,00') },
          { name: 'Cotoletta alla bolognese', price: e('14,00') },
          { name: 'Braciola di maiale', price: e('12,00') },
          { name: 'Filetto ai ferri', desc: 'Manzo', price: e('22,00') },
          { name: 'Filetto al pepe verde', price: e('25,00') },
          { name: 'Filetto Vaporino', desc: 'Con scamorza', price: e('25,00') },
          { name: 'Grigliata mista di carne', price: e('22,00') },
          { name: 'Straccetti rucola e grana', price: e('14,00') },
          { name: 'Straccetti all’aceto balsamico', price: e('14,00') },
          { name: 'Tagliata rucola e grana', price: e('23,00') },
          { name: 'Tagliata sale e rosmarino', price: e('23,00') },
        ],
      },
      {
        label: 'Di pesce',
        items: [
          { name: 'Grigliata mista di pesce', price: e('22,00') },
          { name: 'Spiedini misti', desc: 'Gamberi e calamari', price: e('18,00') },
          { name: 'Spiedini di soli gamberi', price: e('20,00'), image: '/images/piatti/spiedini-gamberi-sm.webp' },
          { name: 'Frittura di gamberi e calamari', price: e('18,00'), image: '/images/piatti/frittura-sm.webp' },
          { name: 'Rane fritte', price: e('16,00') },
          { name: 'Coda di rospo grigliata', price: e('17,00') },
          { name: 'Coda di rospo ai porcini', price: e('22,00') },
          { name: 'Zuppa di pesce', price: e('26,00') },
          { name: 'Orata o branzino ai ferri', price: '€ 4,00 all’etto' },
          { name: 'Orata o branzino al sale o al cartoccio', price: '€ 5,00 all’etto' },
          { name: 'Pesce spada ai ferri', price: e('18,00') },
          { name: 'Pesce spada alla siciliana', price: e('18,00') },
          { name: 'Gamberoni alla griglia', price: e('20,00') },
          {
            name: 'Gran mix gratin',
            desc: 'Scampo, mezzo astice, gambero, frittura e cappa santa',
            price: e('35,00'),
            image: '/images/piatti/astice-sm.webp',
          },
        ],
      },
    ],
  },
  {
    id: 'pizze',
    title: 'Pizze',
    blurb: 'Cotte nel forno a legna. Anche pizza al metro e “pizza stesa” più sottile.',
    image: '/images/piatti/pizza-salame.webp',
    groups: [
      {
        label: 'Le classiche',
        items: [
          { name: 'Margherita', desc: 'Pomodoro, mozzarella', price: e('6,00') },
          { name: 'Marinara', desc: 'Pomodoro, aglio, origano', price: e('5,00') },
          { name: 'Napoletana', desc: 'Pomodoro, mozzarella, acciughe, origano', price: e('7,00') },
          { name: 'Romana', desc: 'Pomodoro, mozzarella, acciughe, capperi, origano', price: e('7,50') },
          { name: 'Siciliana', desc: 'Pomodoro, olive, acciughe, capperi, origano', price: e('7,50') },
          { name: 'Pugliese', desc: 'Pomodoro, mozzarella, cipolla', price: e('7,50') },
          { name: 'Tarantina', desc: 'Pomodoro, mozzarella, olive, origano', price: e('7,50') },
          { name: 'Prosciutto cotto', desc: 'Pomodoro, mozzarella, prosciutto cotto', price: e('7,50') },
          { name: 'Funghi', desc: 'Pomodoro, mozzarella, funghi', price: e('7,50') },
          { name: 'Funghi freschi', desc: 'Pomodoro, mozzarella, funghi freschi', price: e('7,00') },
          { name: 'Wurstel', desc: 'Pomodoro, mozzarella, wurstel', price: e('7,00') },
          { name: 'Carciofi', desc: 'Pomodoro, mozzarella, carciofi', price: e('7,00') },
          { name: 'Radicchio', desc: 'Pomodoro, mozzarella, radicchio', price: e('7,50') },
          { name: 'Tonno', desc: 'Pomodoro, mozzarella, tonno', price: e('8,00') },
          { name: 'Salsiccia', desc: 'Pomodoro, mozzarella, salsiccia', price: e('8,00') },
          { name: 'Rucola', desc: 'Pomodoro, mozzarella, rucola', price: e('8,00') },
          { name: 'Saracena', desc: 'Pomodoro fresco a fette, mozzarella, grana grattugiato', price: e('8,00') },
          { name: 'Diavola', desc: 'Pomodoro, mozzarella, salame piccante', price: e('9,00') },
          { name: 'Prosciutto crudo', desc: 'Pomodoro, mozzarella, prosciutto crudo', price: e('9,00') },
          { name: '4 formaggi', desc: 'Pomodoro, mozzarella, formaggi misti', price: e('8,50') },
          { name: '4 stagioni', desc: 'Pomodoro, mozzarella, prosciutto, carciofi, salsiccia, funghi', price: e('9,00') },
          { name: 'Capricciosa', desc: 'Pomodoro, mozzarella, carciofi, funghi, prosciutto', price: e('8,50') },
          { name: 'Verdure alla griglia', desc: 'Pomodoro, mozzarella, verdure miste alla griglia', price: e('8,50') },
        ],
      },
      {
        label: 'Le speciali',
        items: [
          {
            name: 'Vaporino',
            desc: 'Pomodoro, mozzarella, prosciutto, funghi, salsiccia, pancetta, peperoni, wurstel, olive, uovo',
            price: e('11,00'),
          },
          { name: 'Sottobosco', desc: 'Pomodoro, mozzarella, pancetta, funghi misti', price: e('9,50') },
          { name: 'Rustica', desc: 'Pomodoro, mozzarella, rucola, salsiccia, funghi freschi, grana', price: e('9,50') },
          { name: 'Montanara', desc: 'Pomodoro, mozzarella, porcini, bresaola, rucola', price: e('11,00') },
          { name: 'Number One', desc: 'Pomodoro, gamberetti, tonno, salmone', price: e('11,00') },
          { name: 'Dolce sorpresa', desc: 'Pomodoro, mozzarella, pancetta, uova', price: e('9,50') },
          { name: 'Funghi porcini', desc: 'Pomodoro, mozzarella, funghi porcini', price: e('11,00') },
          { name: 'Contadina', desc: 'Pomodoro fresco, mozzarella, salsiccia, funghi, cipolla, olive, grana', price: e('9,50') },
          { name: 'Saporita', desc: 'Mozzarella, pancetta, patate lesse', price: e('8,50') },
          { name: 'Salsiccia e friarielli', desc: 'Bianca: mozzarella, salsiccia, friarielli', price: e('9,50') },
          { name: 'Primavera', desc: 'Pomodoro, pomodorini, mozzarella di bufala', price: e('9,50') },
          { name: 'Frutti di mare', desc: 'Pesce misto, senza mozzarella', price: e('10,00') },
          { name: 'Calzone normale', desc: 'Pomodoro, mozzarella, prosciutto', price: e('7,50') },
          { name: 'Calzone farcito', desc: 'Pomodoro, mozzarella, prosciutto, carciofi, funghi', price: e('8,50') },
          { name: 'Piada rossa', price: e('3,50') },
          { name: 'Piada bianca', price: e('3,00') },
        ],
      },
      {
        label: 'Aggiunte',
        items: [
          { name: 'Mozzarella · Rucola · Grana a scaglie · Salame piccante · Pizza stesa (più sottile)', price: '+ € 2,00' },
          { name: 'Mozzarella di bufala · Prosciutto crudo, speck o bresaola · Porcini', price: '+ € 2,50' },
        ],
      },
    ],
  },
  {
    id: 'contorni',
    title: 'Contorni & insalate',
    blurb: 'Verdure, patate e insalatone abbondanti.',
    image: '/images/piatti/insalata-mare.webp',
    groups: [
      {
        label: 'Contorni',
        items: [
          { name: 'Insalata mista', price: e('5,00') },
          { name: 'Spinaci', price: e('5,00') },
          { name: 'Broccoli', price: e('5,00') },
          { name: 'Patatine fritte', price: e('5,00') },
          { name: 'Patate al forno', price: e('5,00') },
          { name: 'Crocchette di patate', price: e('6,00') },
          { name: 'Olive ascolane', price: e('6,00') },
          { name: 'Verdure alla griglia', price: e('6,00') },
          { name: 'Misto di verdure fritte', price: e('6,00') },
        ],
      },
      {
        label: 'Insalatone',
        items: [
          { name: 'N. 1', desc: 'Lattuga, radicchio, rucola e carote', price: e('10,00') },
          { name: 'N. 2', desc: 'Lattuga, pomodori, funghi, olive e grana', price: e('10,00') },
          { name: 'N. 3', desc: 'Rucola, pomodoro, tonno e cipolla', price: e('10,00') },
          { name: 'N. 4', desc: 'Lattuga, pomodori, radicchio, scamorza e prosciutto crudo', price: e('11,00') },
          { name: 'N. 5', desc: 'Lattuga, pomodori, radicchio, funghi, mozzarella, olive e rucola', price: e('11,00') },
          { name: 'N. 6', desc: 'Cipolla, tonno e fagioli', price: e('10,00') },
        ],
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Formaggi & dolci',
    blurb: 'Per chiudere in dolcezza (o con un formaggio).',
    image: '/images/piatti/dolce.webp',
    groups: [
      {
        label: 'Formaggi',
        items: [
          { name: 'Pecorino dolce', price: e('5,00') },
          { name: 'Gorgonzola', price: e('5,00') },
          { name: 'Grana', price: e('5,00') },
          { name: 'Formaggi misti', price: e('8,00') },
        ],
      },
      {
        label: 'Dolci della casa',
        items: [
          { name: 'Dolce della casa', price: e('6,00') },
          { name: 'Sorbetto', desc: 'Limone o caffè', price: e('5,00') },
          { name: 'Correzioni', desc: 'Con liquore', price: e('2,50') },
        ],
      },
    ],
  },
]
