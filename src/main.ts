import { Hono } from 'hono'
import { logger } from 'hono_middleware'
import { serve } from 'std/http/server.ts'
import {
  createCanvas,
  loadImage
} from 'https://deno.land/x/canvas@v1.4.1/mod.ts'
import { BG_COLORS, drawClothes, drawHair, SKINS } from './const.ts'
const app = new Hono()

const canvas = createCanvas(600, 600)
const ctx = canvas.getContext('2d')

app.use('*', logger())

app.get('/', async (c) => {
  const { clothes, hair, skin, bg, hair_color, clothes_color } = c.req.query()
  // BG-COLOR
  if (bg?.length > 1) {
    ctx.fillStyle = '#' + bg ?? '#161616'
  } else {
    ctx.fillStyle = BG_COLORS[bg] ?? '#161616'
  }
  ctx.fillRect(0, 0, 600, 600)

  // SKIN
  const skn = SKINS[skin] ?? 'img/skin/template.png'
  const skinImg = await loadImage(skn)
  ctx.drawImage(skinImg, 0, 0, 600, 600)
  drawHair(ctx, hair, hair_color)
  // HAIR
  // STYLE
  drawClothes(ctx, clothes, clothes_color)
  //console.log({ style, hair, skin, bg })
  const resImg = canvas.toBuffer('image/png')
  return c.body(resImg)
})
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) await serve(app.fetch)

export default app
