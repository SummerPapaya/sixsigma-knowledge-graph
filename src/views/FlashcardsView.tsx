import { useEffect, useMemo, useState } from 'react'
import { nodes } from '../content'
import type { KnowledgeNode } from '../content/types'
import { domainDimmed, matchesQuery, nodeVisibility, visibleNodes } from '../graph/filter'
import { t } from '../i18n/chrome'
import { useApp } from '../state/AppState'

type Status = 'new' | 'learning' | 'known'
type Progress = Record<string, Status>

const KEY = 'sigma-atlas-cards-v1'

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Progress) : {}
  } catch {
    return {}
  }
}

function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p))
}

export function FlashcardsView() {
  const { lang, belt, domain, search, selectedId, select } = useApp()
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [flipped, setFlipped] = useState(false)
  const [index, setIndex] = useState(0)

  const deck = useMemo(() => {
    return visibleNodes(nodes, belt, false)
      .filter((n) => n.flashcard)
      .filter((n) => nodeVisibility(n, belt) === 'full')
      .filter((n) => matchesQuery(n, search, lang))
      .filter((n) => (domain === 'all' ? true : !domainDimmed(n, domain)))
  }, [belt, domain, search, lang])

  useEffect(() => {
    if (!deck.length) return
    const i = selectedId ? deck.findIndex((n) => n.id === selectedId) : -1
    setIndex(i >= 0 ? i : 0)
    setFlipped(false)
  }, [deck, selectedId])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'f' || e.key === 'F' || e.key === ' ') {
        e.preventDefault()
        setFlipped((v) => !v)
      }
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const card = deck[index]
  const counts = {
    known: deck.filter((n) => progress[n.id] === 'known').length,
    learning: deck.filter((n) => progress[n.id] === 'learning').length,
    remaining: deck.filter((n) => !progress[n.id] || progress[n.id] === 'new').length,
  }

  function mark(status: Status) {
    if (!card) return
    const nextP = { ...progress, [card.id]: status }
    setProgress(nextP)
    saveProgress(nextP)
    next()
  }

  function next() {
    if (!deck.length) return
    setFlipped(false)
    setIndex((i) => (i + 1) % deck.length)
  }

  function prev() {
    if (!deck.length) return
    setFlipped(false)
    setIndex((i) => (i - 1 + deck.length) % deck.length)
  }

  function reset() {
    const nextP: Progress = { ...progress }
    for (const n of deck) delete nextP[n.id]
    setProgress(nextP)
    saveProgress(nextP)
  }

  if (!deck.length || !card?.flashcard) {
    return <p className="p-8 text-[var(--muted)]">{t('noCards', lang)}</p>
  }

  return (
    <div className="mx-auto flex h-full max-w-3xl flex-col items-stretch px-4 py-6">
      <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)]">
        <span>
          {index + 1} / {deck.length}
        </span>
        <span>
          {t('known', lang)} {counts.known}
        </span>
        <span>
          {t('learning', lang)} {counts.learning}
        </span>
        <span>
          {t('remaining', lang)} {counts.remaining}
        </span>
        <span className="ml-auto">{t('cardHint', lang)}</span>
        <button type="button" onClick={reset} className="border border-[var(--line)] px-2 py-1">
          {t('resetDeck', lang)}
        </button>
      </div>

      <button
        type="button"
        className="flip-scene min-h-[280px] flex-1"
        onClick={() => setFlipped((v) => !v)}
        aria-label={t('flip', lang)}
      >
        <div className={`flip-card h-full min-h-[280px] ${flipped ? 'is-flipped' : ''}`}>
          <Face side="front" title={card.title[lang]} text={card.flashcard.front[lang]} node={card} />
          <Face side="back" title={card.title[lang]} text={card.flashcard.back[lang]} node={card} />
        </div>
      </button>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={prev}
          className="border border-[var(--line)] px-3 py-2 font-mono text-xs tracking-widest uppercase"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => mark('learning')}
          className="border border-[var(--line)] px-4 py-2 font-display"
        >
          {t('learning', lang)}
        </button>
        <button
          type="button"
          onClick={() => mark('known')}
          className="bg-[var(--accent)] px-4 py-2 font-display text-[var(--ink)]"
        >
          {t('known', lang)}
        </button>
        <button
          type="button"
          onClick={next}
          className="border border-[var(--line)] px-3 py-2 font-mono text-xs tracking-widest uppercase"
        >
          →
        </button>
      </div>
      <button
        type="button"
        onClick={() => select(card.id)}
        className="mt-4 font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
      >
        {card.title[lang]}
      </button>
    </div>
  )
}

function Face({
  side,
  title,
  text,
  node,
}: {
  side: 'front' | 'back'
  title: string
  text: string
  node: KnowledgeNode
}) {
  return (
    <div
      className={`flip-face ${side === 'back' ? 'flip-back' : ''} flex h-full min-h-[280px] flex-col justify-center border border-[var(--accent)] bg-[var(--bg-2)] px-8 py-10`}
    >
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
        {side === 'front' ? 'Q' : 'A'} · {node.beltMin}
      </div>
      <div className="mt-2 text-sm text-[var(--muted)]">{title}</div>
      <p className="mt-6 font-display text-2xl leading-snug text-[var(--text-h)]">{text}</p>
    </div>
  )
}
