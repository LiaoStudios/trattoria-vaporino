// Ottimizza le foto scelte (PhotoSource/) in public/images/*.webp (grande + "-sm").
// Esegui con: npm run images
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = path.resolve('PhotoSource')
const OUT = path.resolve('public/images')

// [file sorgente, cartella, nome, larghezza max, crop opzionale {w,h,position}]
const PHOTOS = [
  // Piatti
  ['scialatelli-astice.jpg', 'piatti', 'scialatelli-astice', 1400],
  ['mare-misto.jpg', 'piatti', 'mare-misto', 1400],
  ['spiedini-gamberi.jpg', 'piatti', 'spiedini-gamberi', 1200],
  ['insalata-mare.jpg', 'piatti', 'insalata-mare', 1200],
  ['pizza-salame.jpg', 'piatti', 'pizza-salame', 1400],
  ['spaghetti-vongole.jpg', 'piatti', 'spaghetti-vongole', 1400],
  ['tagliolini-gamberi.jpg', 'piatti', 'tagliolini-gamberi', 1200],
  ['tagliatelle-gamberi.jpg', 'piatti', 'tagliatelle-gamberi', 1200],
  ['pasta-granchio.jpg', 'piatti', 'pasta-granchio', 1200],
  ['astice.jpg', 'piatti', 'astice', 1200],
  ['insalata-polpo.jpg', 'piatti', 'insalata-polpo', 1200],
  ['dolce.jpg', 'piatti', 'dolce', 1000],
  ['antipasto-mare.jpg', 'piatti', 'antipasto-mare', 1400],
  ['zuppetta-cozze.jpg', 'piatti', 'zuppetta-cozze', 1400],
  ['frittura.jpg', 'piatti', 'frittura', 1400],
  ['strozzapreti-rucola.jpg', 'piatti', 'strozzapreti-rucola', 1400],
  ['cozze-pasta.jpg', 'piatti', 'cozze-pasta', 1400],
  // Locale
  ['sala.jpg', 'locale', 'sala', 1600],
  ['sala-colonna.jpg', 'locale', 'sala-colonna', 1200],
  ['facciata.jpg', 'locale', 'facciata', 1200],
  ['murale-treno.jpg', 'locale', 'murale-treno', 800],
  ['sala-bancone.jpg', 'locale', 'sala-bancone', 1100],
]

// Piatti ritagliati (PNG con trasparenza) — usati come "piatti volanti".
const CUTOUTS = [
  ['vongole-cutout.png', 'piatti', 'vongole-cutout', 900],
  ['scialatelli-cutout.png', 'piatti', 'scialatelli-cutout', 900],
]

// Logo: lo sfondo bianco diventa trasparente (alpha = 255 - min(r,g,b)).
async function whiteToAlpha(input, output, width) {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true })
  const out = Buffer.alloc(info.width * info.height * 4)
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const m = Math.min(r, g, b)
    const a = 255 - m
    if (a < 6) { out[j + 3] = 0; continue }
    const k = 255 / a
    out[j] = Math.max(0, Math.min(255, Math.round((r - m) * k)))
    out[j + 1] = Math.max(0, Math.min(255, Math.round((g - m) * k)))
    out[j + 2] = Math.max(0, Math.min(255, Math.round((b - m) * k)))
    out[j + 3] = a
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 95 })
    .toFile(output)
}

await mkdir(OUT, { recursive: true })
for (const dir of ['piatti', 'locale']) await mkdir(path.join(OUT, dir), { recursive: true })

for (const [file, dir, name, width] of PHOTOS) {
  const src = path.join(SRC, file)
  const base = sharp(src).rotate()
  await base.clone().resize({ width, withoutEnlargement: true }).webp({ quality: 80 })
    .toFile(path.join(OUT, dir, `${name}.webp`))
  await base.clone().resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 })
    .toFile(path.join(OUT, dir, `${name}-sm.webp`))
  console.log('✓', dir, name)
}

for (const [file, dir, name, width] of CUTOUTS) {
  const src = path.join(SRC, file)
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 85, alphaQuality: 95 })
    .toFile(path.join(OUT, dir, `${name}.webp`))
  console.log('✓ cutout', name)
}

await whiteToAlpha(path.join(SRC, 'logo-full.png'), path.resolve('public/logo.webp'), 1400)
await whiteToAlpha(path.join(SRC, 'train.png'), path.resolve('public/train.webp'), 1000)
await whiteToAlpha(path.join(SRC, 'wordmark.png'), path.resolve('public/wordmark.webp'), 900)
console.log('✓ logo / train / wordmark')

// Favicon: il treno su carta color crema
await sharp(path.join(SRC, 'train.png')).resize(180, 180, { fit: 'contain', background: '#F8F2E4' })
  .png().toFile(path.resolve('public/favicon.png'))

// Immagine social (1200x630): piatto + logo su crema
const logo = await sharp(path.resolve('public/logo.webp')).resize({ width: 640 }).png().toBuffer()
const dish = await sharp(path.join(SRC, 'scialatelli-astice.jpg')).rotate()
  .resize(520, 630, { fit: 'cover', position: 'centre' }).toBuffer()
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#F8F2E4' } })
  .composite([{ input: dish, left: 680, top: 0 }, { input: logo, left: 20, top: 120 }])
  .jpeg({ quality: 86 }).toFile(path.resolve('public/og-image.jpg'))
console.log('✓ favicon + og-image')
