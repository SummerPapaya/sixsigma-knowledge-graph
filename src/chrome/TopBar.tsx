import { useEffect, useRef } from 'react'
import { edges, nodes } from '../content'
import { BELTS } from '../content/types'
import type { Belt, DomainFilter, ViewId } from '../content/types'
import { isBeltLocked, visibleEdges, visibleNodes } from '../graph/filter'
import { beltLabel, t } from '../i18n/chrome'
import { useApp } from '../state/AppState'
import { beltColor } from '../theme/belts'

const VIEW_BTNS: { id: ViewId; key: 'graph' | 'mindmap' | 'briefing' | 'flashcards' }[] = [
  { id: 'graph', key: 'graph' },
  { id: 'mindmap', key: 'mindmap' },
  { id: 'briefing', key: 'briefing' },
  { id: 'flashcards', key: 'flashcards' },
]

const DOMAIN_BTNS: { id: DomainFilter; key: 'domainAll' | 'domainSs' | 'domainSc' }[] = [
  { id: 'all', key: 'domainAll' },
  { id: 'six-sigma', key: 'domainSs' },
  { id: 'supply-chain', key: 'domainSc' },
]

export function TopBar() {
  const {
    lang,
    belt,
    domain,
    view,
    search,
    setLang,
    setBelt,
    setDomain,
    setView,
    setSearch,
    select,
    theme,
    setTheme,
  } = useApp()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur()
        select(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [select])

  return (
    <header className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 md:px-6">
        <div className="mr-2 min-w-[160px]">
          <div className="font-display text-[22px] leading-none font-bold tracking-tight text-[var(--text-h)]">
            {t('product', lang)}
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)]">
            {t('tagline', lang)}
          </div>
        </div>

        <nav className="flex flex-wrap gap-1" aria-label="Belt">
          {BELTS.map((b) => (
            <BeltChip
              key={b}
              id={b}
              active={belt === b}
              locked={isBeltLocked(b)}
              onClick={() => setBelt(b)}
            />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex border border-[var(--line)]">
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-1 font-mono text-[11px] tracking-widest ${
                theme === 'dark'
                  ? 'bg-[var(--accent)] text-[var(--ink)]'
                  : 'text-[var(--muted)] hover:text-[var(--text-h)]'
              }`}
            >
              {t('themeDark', lang)}
            </button>
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`px-2.5 py-1 font-mono text-[11px] tracking-widest ${
                theme === 'light'
                  ? 'bg-[var(--accent)] text-[var(--ink)]'
                  : 'text-[var(--muted)] hover:text-[var(--text-h)]'
              }`}
            >
              {t('themeLight', lang)}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="border border-[var(--line)] px-2.5 py-1 font-mono text-[11px] tracking-widest text-[var(--text-h)] hover:border-[var(--accent)]"
          >
            {lang === 'zh' ? '中 / EN' : 'EN / 中'}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-[var(--line)] px-4 py-2 md:px-6">
        <div className="flex gap-1">
          {VIEW_BTNS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setView(v.id)}
              className={`px-3 py-1.5 font-display text-sm tracking-wide ${
                view === v.id
                  ? 'bg-[var(--accent)] text-[var(--ink)]'
                  : 'text-[var(--text)] hover:text-[var(--text-h)]'
              }`}
            >
              {t(v.key, lang)}
            </button>
          ))}
        </div>

        <div className="flex gap-1 md:ml-4">
          {DOMAIN_BTNS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDomain(d.id)}
              className={`border px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${
                domain === d.id
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-[var(--line)] text-[var(--muted)]'
              }`}
            >
              {t(d.key, lang)}
            </button>
          ))}
        </div>

        <label className="relative ml-auto min-w-[200px] flex-1 md:max-w-sm">
          <span className="sr-only">{t('search', lang)}</span>
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`${t('search', lang)}  ${t('searchHint', lang)}`}
            className="w-full border border-[var(--line)] bg-transparent px-3 py-1.5 text-sm text-[var(--text-h)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />
        </label>
      </div>
    </header>
  )
}

function BeltChip({
  id,
  active,
  locked,
  onClick,
}: {
  id: Belt
  active: boolean
  locked: boolean
  onClick: () => void
}) {
  const { lang, theme } = useApp()
  const color = beltColor(id, theme)

  return (
    <button
      type="button"
      onClick={onClick}
      title={locked ? t('locked', lang) : beltLabel[id][lang]}
      className={`flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] tracking-widest uppercase ${
        active ? 'bg-[var(--accent-2)]' : 'border-[var(--line)] text-[var(--muted)]'
      }`}
      style={{ borderColor: active ? color : undefined, color: active ? color : undefined }}
    >
      <span className="inline-block h-2 w-2 rounded-full" style={{ background: color }} />
      {beltLabel[id][lang]}
      {locked ? <span className="opacity-70">✕</span> : null}
    </button>
  )
}

export function StatusBar() {
  const { lang, belt, domain } = useApp()
  const vis = visibleNodes(nodes, belt, true)
  const ids = new Set(vis.map((n) => n.id))
  const ed = visibleEdges(edges, ids)
  const domainText =
    domain === 'all'
      ? t('domainAll', lang)
      : domain === 'six-sigma'
        ? t('domainSs', lang)
        : t('domainSc', lang)

  return (
    <footer className="flex flex-wrap items-center gap-4 border-t border-[var(--line)] px-4 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--muted)] md:px-6">
      <span>
        {vis.length} {t('nodes', lang)}
      </span>
      <span>
        {ed.length} {t('edges', lang)}
      </span>
      <span>
        {t('lens', lang)} · {beltLabel[belt][lang]} · {domainText}
      </span>
    </footer>
  )
}
