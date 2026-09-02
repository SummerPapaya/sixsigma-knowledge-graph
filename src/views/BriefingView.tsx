import { useEffect, useMemo } from 'react'
import { nodes } from '../content'
import { domainDimmed, matchesQuery, nodeVisibility, visibleNodes } from '../graph/filter'
import { kindLabel, t } from '../i18n/chrome'
import { useApp } from '../state/AppState'
import { NodeArticle } from '../chrome/NodeArticle'

export function BriefingView() {
  const { lang, belt, domain, search, selectedId, select, setView } = useApp()

  const list = useMemo(() => {
    return visibleNodes(nodes, belt, true)
      .filter((n) => matchesQuery(n, search, lang))
      .filter((n) => (domain === 'all' ? true : !domainDimmed(n, domain) || matchesQuery(n, search, lang)))
      .sort((a, b) => a.title[lang].localeCompare(b.title[lang], lang === 'zh' ? 'zh' : 'en'))
  }, [belt, domain, search, lang])

  const active = list.find((n) => n.id === selectedId) ?? list[0]
  const preview = active ? nodeVisibility(active, belt) === 'preview' : false

  useEffect(() => {
    if (!selectedId && list[0]) select(list[0].id)
  }, [list, selectedId, select])

  if (!list.length) {
    return <p className="p-8 text-[var(--muted)]">{t('emptySearch', lang)}</p>
  }

  return (
    <div className="grid h-full min-h-0 grid-cols-1 md:grid-cols-[280px_1fr]">
      <div className="scrollbar-thin min-h-0 overflow-auto border-b border-[var(--line)] md:border-r md:border-b-0">
        {list.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => select(n.id)}
            className={`block w-full border-b border-[var(--line)] px-4 py-3 text-left ${
              active?.id === n.id ? 'bg-[var(--accent-2)]' : 'hover:bg-[var(--accent-2)]'
            }`}
          >
            <div className="font-medium text-[var(--text-h)]">{n.title[lang]}</div>
            <div className="mt-1 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)]">
              {kindLabel[n.kind][lang]}
              {n.dmaic ? ` · ${n.dmaic}` : ''}
            </div>
          </button>
        ))}
      </div>
      <div className="scrollbar-thin min-h-0 overflow-auto p-6 md:p-8">
        {active ? (
          <>
            <div className="mb-4 flex gap-3">
              <button
                type="button"
                className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
                onClick={() => setView('graph')}
              >
                {t('showOnGraph', lang)}
              </button>
              <button
                type="button"
                className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
                onClick={() => setView('mindmap')}
              >
                {t('showOnMind', lang)}
              </button>
              {active.flashcard ? (
                <button
                  type="button"
                  className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
                  onClick={() => setView('flashcards')}
                >
                  {t('openCard', lang)}
                </button>
              ) : null}
            </div>
            <NodeArticle node={active} lang={lang} preview={preview} onSelect={select} />
          </>
        ) : null}
      </div>
    </div>
  )
}
