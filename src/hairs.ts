import { type CanvasRenderingContext2D } from 'https://deno.land/x/canvas@v1.4.1/mod.ts'
import { p } from './const.ts'
const setDefaultHairColor = (
  ctx: CanvasRenderingContext2D,
  hair_color: string
) => {
  if (hair_color?.length < 1) hair_color = '282828'
  ctx.fillStyle = '#' + hair_color
}

export const hair_1 = (ctx: CanvasRenderingContext2D, hair_color: string) => {
  setDefaultHairColor(ctx, hair_color)
  ctx.fillRect(p(3), p(3), p(6), p(1))
}
export const hair_2 = (ctx: CanvasRenderingContext2D, hair_color: string) => {
  setDefaultHairColor(ctx, hair_color)
  ctx.fillRect(p(2), p(2), p(8), p(2))
  ctx.fillRect(p(1), p(1), p(1), p(1))
  ctx.fillRect(p(1), p(4), p(3), p(1))
  ctx.fillRect(p(2), p(5), p(1), p(1))
  ctx.fillRect(p(7), p(4), p(1), p(1))
  ctx.fillRect(p(3), p(1), p(5), p(1))
}
export const hair_3 = (ctx: CanvasRenderingContext2D, hair_color: string) => {
  setDefaultHairColor(ctx, hair_color)
  ctx.fillRect(p(3), p(2), p(6), p(2))
  ctx.fillRect(p(3), p(4), p(1), p(1))
  ctx.fillRect(p(1), p(3), p(2), p(3))
  ctx.fillStyle = '#282828'
  ctx.fillRect(p(2), p(3), p(1), p(2))
}
