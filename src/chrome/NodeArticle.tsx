import { edges, nodeById } from '../content'
import type { KnowledgeNode, Locale } from '../content/types'
import { neighbors } from '../graph/filter'
import { kindLabel, relLabel, t } from '../i18n/chrome'
import { Formula } from './Formula'

export function NodeArticle({
  node,
  lang,
  preview,
  onSelect,
}: {
  node: KnowledgeNode
  lang: Locale
  preview?: boolean
  onSelect?: (id: string) => void
}) {
  const links = neighbors(node.id, edges)
    .map((n) => ({ ...n, node: nodeById.get(n.id) }))
    .filter((n) => n.node)

  return (
    <article className="space-y-5 text-[15px] leading-relaxed">
      <header>
        <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--muted)]">
          <span>{kindLabel[node.kind][lang]}</span>
          {node.dmaic ? <span>DMAIC · {node.dmaic}</span> : null}
          <span>
            {t('beltMin', lang)} {node.beltMin}
          </span>
        </div>
        <h2 className="font-display text-[28px] leading-tight font-semibold text-[var(--text-h)]">
          {node.title[lang]}
        </h2>
        <p className="mt-2 text-[var(--text)]">{node.blurb[lang]}</p>
      </header>

      {preview ? (
        <p className="border border-[var(--line)] bg-[var(--accent-2)] px-3 py-2 text-sm text-[var(--text-h)]">
          {t('previewHint', lang)}
        </p>
      ) : null}

      <p>{node.body[lang]}</p>

      <section>
        <h3 className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
          {t('whenToUse', lang)}
        </h3>
        <p>{node.whenToUse[lang]}</p>
      </section>

      <section>
        <h3 className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
          {t('scExample', lang)}
        </h3>
        <p>{node.scExample[lang]}</p>
      </section>

      {node.pitfalls ? (
        <section>
          <h3 className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
            {t('pitfalls', lang)}
          </h3>
          <p>{node.pitfalls[lang]}</p>
        </section>
      ) : null}

      {node.steps ? (
        <section>
          <h3 className="mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
            {t('steps', lang)}
          </h3>
          <ol className="space-y-1.5">
            {node.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-[var(--accent)]">0{i + 1}</span>
                <span>{s[lang]}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {node.formula ? (
        <section>
          <h3 className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
            {t('formula', lang)}
          </h3>
          <Formula expr={node.formula} />
        </section>
      ) : null}

      {links.length ? (
        <section>
          <h3 className="mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
            {t('related', lang)}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {links.map((l) => (
              <li key={`${l.id}-${l.rel}`}>
                <button
                  type="button"
                  onClick={() => onSelect?.(l.id)}
                  className="border border-[var(--line)] px-2 py-1 text-left text-sm text-[var(--text-h)] hover:border-[var(--accent)]"
                >
                  <span className="mr-2 font-mono text-[10px] text-[var(--muted)]">
                    {relLabel[l.rel][lang]}
                  </span>
                  {l.node!.title[lang]}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  )
}
