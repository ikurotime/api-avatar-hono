import { type CanvasRenderingContext2D } from 'https://deno.land/x/canvas@v1.4.1/mod.ts'
import { p } from './const.ts'
const setDefaulCLothesColor = (
  ctx: CanvasRenderingContext2D,
  clothes_color: string
) => {
  if (clothes_color?.length < 1) clothes_color = '282828'
  ctx.fillStyle = '#' + clothes_color
}

export const clothe_1 = (
  ctx: CanvasRenderingContext2D,
  clothes_color: string
) => {
  setDefaulCLothesColor(ctx, clothes_color)
  ctx.fillRect(p(3), p(8), p(6), p(1))
  ctx.fillRect(p(3), p(8), p(1), p(2))
  ctx.fillRect(p(3), p(9), p(6), p(1))
  ctx.fillRect(p(7), p(7), p(2), p(1))
  ctx.fillRect(p(3), p(7), p(2), p(1))
}
export const clothe_2 = (
  ctx: CanvasRenderingContext2D,
  clothes_color: string
) => {
  setDefaulCLothesColor(ctx, clothes_color)
  ctx.fillRect(p(3), p(8), p(6), p(1))
  ctx.fillRect(p(3), p(8), p(1), p(2))
  ctx.fillRect(p(3), p(9), p(6), p(1))
  ctx.fillRect(p(2), p(7), p(1), p(2))
  ctx.fillRect(p(9), p(7), p(1), p(2))
  ctx.fillRect(p(7), p(7), p(2), p(1))
  ctx.fillRect(p(3), p(7), p(2), p(1))
}
