import sharp from 'sharp'

const SRC = 'C:/Users/USER/AppData/Local/Temp/claude/c--Users-USER-OneDrive-Desktop-webhotel/dc4239fe-c683-4c20-852c-ab8f6ddf83d7/images/1.jpg'
const PUB = 'c:/Users/USER/OneDrive/Desktop/shri-kalyan-hotel/public'

// Knock out the white background -> transparent PNG emblem.
async function makeTransparent(width) {
  const base = sharp(SRC).trim({ threshold: 20 }).resize({ width, withoutEnlargement: true })
  const { data, info } = await base.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h, channels } = info
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    if (r > 236 && g > 236 && b > 236) data[i + 3] = 0
  }
  return sharp(data, { raw: { width: w, height: h, channels } }).png()
}

async function run() {
  await (await makeTransparent(760)).toFile(`${PUB}/logo.png`)
  console.log('logo.png')
  await (await makeTransparent(180)).toFile(`${PUB}/favicon-180.png`)
  console.log('favicon-180.png')
  await (await makeTransparent(64)).toFile(`${PUB}/favicon.png`)
  console.log('LOGO DONE')
}
run().catch((e) => { console.error(e); process.exit(1) })
