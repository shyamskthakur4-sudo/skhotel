import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import path from 'node:path'

const SRC = 'C:/Users/USER/AppData/Local/Temp/claude/c--Users-USER-OneDrive-Desktop-webhotel/dc4239fe-c683-4c20-852c-ab8f6ddf83d7/images'
const OUT = 'c:/Users/USER/OneDrive/Desktop/shri-kalyan-hotel/public/images'
mkdirSync(OUT, { recursive: true })

// source file -> [semantic name, max width]
const MAP = {
  '7.png':  ['exterior-hero', 2400],
  '6.jpg':  ['exterior-sunset', 2200],
  '5.jpg':  ['exterior-dusk', 2000],
  '2.jpg':  ['reception', 1900],
  '3.jpg':  ['lounge-1', 1900],
  '4.jpg':  ['lounge-2', 1900],
  '8.jpg':  ['room-executive', 1800],
  '10.jpg': ['room-deluxe', 1800],
  '11.jpg': ['room-superdeluxe', 1800],
  '9.jpg':  ['bathroom', 1600],
  '12.jpg': ['corridor-1', 1900],
  '13.jpg': ['corridor-2', 1900],
  '14.jpg': ['corridor-3', 1900],
  '16.jpg': ['corridor-4', 1900],
  '15.jpg': ['stair-lounge', 1900],
  '17.jpg': ['stair-corridor', 1900],
  '18.jpg': ['room-a', 1700],
  '19.jpg': ['room-b', 1700],
  '20.jpg': ['room-c', 1700],
  '21.jpg': ['room-d', 1700],
  '22.jpg': ['room-e', 1700],
  '23.jpg': ['room-f', 1700],
  '24.jpg': ['room-g', 1700],
  '25.jpg': ['room-h', 1700],
}

async function run() {
  for (const [file, [name, w]] of Object.entries(MAP)) {
    const out = path.join(OUT, `${name}.jpg`)
    await sharp(path.join(SRC, file))
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(out)
    console.log('img', name)
  }
  console.log('PHOTOS DONE')
}
run().catch((e) => { console.error(e); process.exit(1) })
