import { Hono } from 'hono'
import { logger, serveStatic } from 'hono_middleware'
import { serve } from 'std/http/server.ts'
import { createCanvas, loadImage } from 'https://deno.land/x/canvas/mod.ts'
const app = new Hono()

const canvas = createCanvas(12, 12)
const ctx = canvas.getContext('2d')
type Selector = {
  [key: string]: string
}
const SKINS: Selector = {
  1: 'img/skin/skin1.png',
  2: 'img/skin/skin2.png',
  3: 'img/skin/skin3.png'
}
const BG_COLORS: Selector = {
  1: '#09f',
  2: 'green',
  3: 'red',
  4: 'yellow',
  5: '#f5f5f5'
}
app.use('*', logger())

app.get('/', async (c) => {
  const { style, hair, skin, bg } = c.req.query()
  // BG-COLOR

  if (bg.length > 1) {
    ctx.fillStyle = '#' + bg ?? '#161616'
  } else {
    ctx.fillStyle = BG_COLORS[bg] ?? '#161616'
  }
  ctx.fillRect(0, 0, 12, 12)
  // SKIN
  const skn = SKINS[skin] ?? 'template.png'

  const skinImg = await loadImage(skn)
  ctx.drawImage(skinImg, 0, 0, 12, 12)
  await Deno.writeFile('avatar.png', canvas.toBuffer())
  // HAIR
  // STYLE
  //console.log({ style, hair, skin, bg })
  const resImg = await Deno.readFile('avatar.png')
  return c.body(resImg)
})
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) await serve(app.fetch)

export default app
