import { Hono } from 'hono'
import { logger, serveStatic } from 'hono_middleware'
import { serve } from 'std/http/server.ts'
import { createCanvas, loadImage } from 'https://deno.land/x/canvas/mod.ts'
const app = new Hono()

const canvas = createCanvas(12, 12)
const ctx = canvas.getContext('2d')

ctx.fillStyle = '#D0FFD6'
ctx.fillRect(0, 0, 12, 12)
const img = await loadImage('img/template.png')
ctx.drawImage(img, 0, 0, 12, 12)
await Deno.writeFile('avatar.png', canvas.toBuffer())

app.use('*', logger())

app.get('/', serveStatic({ path: 'avatar.png' }))

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) await serve(app.fetch)

export default app
