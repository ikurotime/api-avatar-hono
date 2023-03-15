import { type CanvasRenderingContext2D } from 'https://deno.land/x/canvas@v1.4.1/mod.ts'
import { clothe_1 } from './clothes.ts'
import { hair_1, hair_2, hair_3 } from './hairs.ts'

type Selector = {
  [key: string]: string
}
export const p = (n: number) => n * 50
export type HairSelector = {
  [key: string]: (ctx: CanvasRenderingContext2D, hair_color: string) => void
}

export const SKINS: Selector = {
  1: 'img/skin/skin1.png',
  2: 'img/skin/skin2.png',
  3: 'img/skin/skin3.png'
}
export const BG_COLORS: Selector = {
  1: '#09f',
  2: 'green',
  3: 'red',
  4: 'yellow',
  5: '#f5f5f5'
}

export const HAIRS: HairSelector = {
  1: hair_1,
  2: hair_2,
  3: hair_3
}
export const CLOTHES: HairSelector = {
  1: clothe_1
}
export const drawHair = (
  ctx: CanvasRenderingContext2D,
  hair: string,
  hair_color: string
) => {
  HAIRS[hair](ctx, hair_color)
}
export const drawClothes = (
  ctx: CanvasRenderingContext2D,
  clothes: string,
  clothes_color: string
) => {
  CLOTHES[clothes](ctx, clothes_color)
}
