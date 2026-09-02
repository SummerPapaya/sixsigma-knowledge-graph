import type { Belt } from '../content/types'
import { beltColor, type Theme } from './belts'

function svgUrl(markup: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(markup)}")`
}

function arrow(accent: string): string {
  const d = 'M2 2 10.4 19.2 13.2 13.2 19.2 10.4Z'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="${d}" fill="${accent}" stroke="${accent}" stroke-width="0.6" stroke-linejoin="round"/></svg>`
}

function plus(accent: string): string {
  const d = 'M11.1 4.8h1.8v6.3h6.3v1.8h-6.3v6.3h-1.8v-6.3H4.8v-1.8h6.3Z'
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="${d}" fill="${accent}" stroke="${accent}" stroke-width="0.6" stroke-linejoin="round"/></svg>`
}

export function applyCursors(belt: Belt, theme: Theme) {
  const accent = darken(darken(beltColor(belt, theme), 0.3), 0.3)
  const root = document.documentElement.style
  root.setProperty('--cursor-default', `${svgUrl(arrow(accent))} 2 2, auto`)
  root.setProperty('--cursor-pointer', `${svgUrl(plus(accent))} 12 12, pointer`)
}

function darken(hex: string, amount: number): string {
  const n = hex.replace('#', '')
  const f = 1 - amount
  const ch = (i: number) =>
    Math.round(parseInt(n.slice(i, i + 2), 16) * f)
      .toString(16)
      .padStart(2, '0')
  return `#${ch(0)}${ch(2)}${ch(4)}`
}
