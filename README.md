# Trattoria Pizzeria Il Vaporino — Bologna (Navile)

Sito web di **Il Vaporino**, trattoria e pizzeria in Via Francesco Zanardi 246, Bologna.
Stack: **Vite + React + TypeScript + Tailwind CSS + Framer Motion + lucide-react**
(stessa base tecnica del sito La Braceria, ma con identità grafica, font, pulsanti e layout propri).

## Avvio

```bash
npm install
npm run dev        # http://localhost:5175
npm run build      # build di produzione in dist/
npm run images     # rigenera le immagini ottimizzate da PhotoSource/
```

## Identità grafica

- Tema **stazione / treno a vapore**, preso dal logo ufficiale (locomotiva + "Il Vaporino" rosso) e dal murale del treno in sala.
- **Palette** (`tailwind.config.ts`): `signal` (rosso del logo), `smoke` (carbone), `station` (verde stazione), `cream`/`paper` (carta da biglietto), `brass`.
- **Font**: Playfair Display (titoli), Oswald (cartelli, etichette, pulsanti), DM Sans (testo).
- **Pulsanti** "biglietto" con tacche ai lati; **sezioni** numerate come "fermate"; **foto** in cornici ad arco (finestrino), tonde o a targa; separatore a binario.

## Struttura

- `src/pages/` — `Home.tsx` e `MenuPage.tsx` (`/menu`, con deep link `/menu#pizze`)
- `src/components/sections/` — Hero, Marquee, Story, Specialties, Oven (pizzeria), ChefBoard, Gallery, Reviews, Contact
- `src/data/` — contenuti separati dal codice: `menu.ts`, `siteInfo.ts`, `gallery.ts`, `reviews.ts`
- `PhotoSource/` — foto originali scelte (piatti, sala, logo); `scripts/optimize-images.mjs` le converte in `public/images/`

## Dati e fonti

- Contatti, orari, servizi: sito ufficiale `trattoriailvaporino.eatbu.com` e scheda Google Maps.
- **Menu e prezzi**: dal PDF ufficiale `MENU.pdf` del sito (mancano nel PDF: pizze al metro, vini, bevande e birre).
- **Recensioni**: testi reali da sito ufficiale, Google e Tripadvisor. Punteggi: Google 4,1 (1.388), Tripadvisor 3,5 (310).
- **Foto**: scelte a mano da Google Maps e Tripadvisor (foto pubbliche di clienti) + logo dal menu ufficiale.

## ⚠️ Da confermare con il locale

1. **Orari**: il sito ufficiale dice "tutti i giorni 12:00–14:30 e 19:00–00:00"; alcune schede online indicano chiusura il lunedì e chiusura alle 23:30. Modifica `siteInfo.hours`.
2. **Foto**: sono scatti pubblici di clienti — chiedere al titolare di inviare foto proprie/autorizzare l'uso.
3. **Menu**: "Novità" e "Lo chef consiglia" cambiano; aggiornare `menu.ts`. Il "Pesce fresco ogni giorno" riprende il bollino del menu (il menu avverte anche che alcuni prodotti sono congelati).
4. **Social**: solo Facebook ufficiale; nessun Instagram trovato.
5. **Dominio / base path**: `vite.config.ts` usa `base: '/'`.
