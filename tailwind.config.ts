import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rosso segnale — il rosso del logo "Il Vaporino"
        signal: {
          DEFAULT: '#B8191D',
          soft: '#D6403F',
          deep: '#85100F',
        },
        // Fumo di locomotiva — carbone e grigi del treno
        smoke: {
          DEFAULT: '#25282C',
          deep: '#17191C',
          soft: '#3C4147',
        },
        steam: '#8F9297',
        // Verde stazione — le insegne e i vecchi vagoni
        station: {
          DEFAULT: '#2D4A3C',
          deep: '#1D3228',
          soft: '#4C6B5A',
        },
        // Carta da biglietto
        cream: '#F8F2E4',
        paper: '#EFE4CB',
        ink: '#1F1D1B',
        brass: '#B98C2F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sign: ['Oswald', '"Arial Narrow"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(23, 25, 28, 0.12)',
        ticket: '0 10px 24px rgba(133, 16, 15, 0.28)',
        plate: '0 30px 50px rgba(23, 25, 28, 0.35)',
      },
      keyframes: {
        puff: {
          '0%': { opacity: '0', transform: 'translate(0, 0) scale(0.4)' },
          '20%': { opacity: '0.55' },
          '100%': { opacity: '0', transform: 'translate(40px, -90px) scale(1.7)' },
        },
        'rail-run': {
          from: { transform: 'translateX(-10%)' },
          to: { transform: 'translateX(110%)' },
        },
        'plate-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        puff: 'puff 4.5s ease-out infinite',
        'rail-run': 'rail-run 14s linear infinite',
        'plate-spin': 'plate-spin 90s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
