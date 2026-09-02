import type { Belt } from '../content/types'

export type Theme = 'dark' | 'light'

const DARK: Record<Belt, string> = {
  white: '#e8e6e3',
  yellow: '#e8c547',
  green: '#3dcea8',
  black: '#c9a36a',
  mbb: '#b8c5d6',
}

const LIGHT: Record<Belt, string> = {
  white: '#faf7f1',
  yellow: '#b8860b',
  green: '#0f8a6e',
  black: '#8a6a32',
  mbb: '#5c6d82',
}

export function beltColor(belt: Belt, theme: Theme): string {
  return (theme === 'light' ? LIGHT : DARK)[belt]
}
