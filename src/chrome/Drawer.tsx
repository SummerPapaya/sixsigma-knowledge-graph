import { nodeById } from '../content'
import { nodeVisibility } from '../graph/filter'
import { t } from '../i18n/chrome'
import { useApp } from '../state/AppState'
import { NodeArticle } from './NodeArticle'

export function Drawer() {
  const { selectedId, lang, belt, view, select, setView } = useApp()
  const node = selectedId ? nodeById.get(selectedId) : undefined
  const preview = node ? nodeVisibility(node, belt) === 'preview' : false

  if (!node) {
    return (
      <aside className="drawer hidden p-6 md:block">
        <p className="font-display text-xl text-[var(--text-h)]">{t('tagline', lang)}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {lang === 'zh'
            ? '点选图谱或脑图中的节点。Belt 是透镜：White 看总览，Green 展开统计，Black 展开 DOE 与辅导，MBB 展开部署与项目组合。'
            : 'Select a node in the graph or mind map. Belt is a lens: White for overview, Green for stats, Black for DOE and coaching, MBB for deployment and the project portfolio.'}
        </p>
      </aside>
    )
  }

  return (
    <aside className="drawer scrollbar-thin p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <button
          type="button"
          className="font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text-h)]"
          onClick={() => select(null)}
        >
          {t('close', lang)}
        </button>
        <div className="flex gap-2">
          {view !== 'briefing' ? (
            <button
              type="button"
              className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
              onClick={() => setView('briefing')}
            >
              {t('openBriefing', lang)}
            </button>
          ) : null}
          {node.flashcard ? (
            <button
              type="button"
              className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
              onClick={() => setView('flashcards')}
            >
              {t('openCard', lang)}
            </button>
          ) : null}
        </div>
      </div>
      <NodeArticle node={node} lang={lang} preview={preview} onSelect={select} />
    </aside>
  )
}

export function LockBanner() {
  const { lang, lockNotice, dismissLock } = useApp()
  if (!lockNotice) return null
  return (
    <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center px-4">
      <div className="pointer-events-auto max-w-lg border border-[var(--accent)] bg-[var(--bg)] px-4 py-3 shadow-[0_0_40px_var(--accent-2)]">
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
          Master Black Belt · {t('locked', lang)}
        </div>
        <p className="mt-2 text-sm text-[var(--text-h)]">{t('lockedBody', lang)}</p>
        <button
          type="button"
          onClick={dismissLock}
          className="mt-3 border border-[var(--accent)] px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-[var(--accent)]"
        >
          Black Belt
        </button>
      </div>
    </div>
  )
}
