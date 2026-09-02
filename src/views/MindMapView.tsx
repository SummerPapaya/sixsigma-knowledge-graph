import { hierarchy, tree } from 'd3'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { mindForest, nodeById, nodes } from '../content'
import type { KnowledgeNode, MindSpec } from '../content/types'
import { domainDimmed, matchesQuery, nodeVisibility, visibleNodes } from '../graph/filter'
import { t } from '../i18n/chrome'
import { useApp } from '../state/AppState'

type Laid = {
  id: string
  x: number
  y: number
  node: KnowledgeNode
  parentId?: string
  collapsed: boolean
  hasChildren: boolean
}

const CHIP_PAD = 8

export function MindMapView() {
  const { lang, belt, domain, search, selectedId, select } = useApp()
  const [collapsed, setCollapsed] = useState<Set<string>>(
    () => new Set(collectParents(mindForest)),
  )
  const chipRefs = useRef(new Map<string, HTMLDivElement>())
  const [chipW, setChipW] = useState<Record<string, number>>({})

  const visIds = useMemo(() => new Set(visibleNodes(nodes, belt, true).map((n) => n.id)), [belt])

  const laid = useMemo(
    () => layoutForest(mindForest, visIds, collapsed),
    [visIds, collapsed],
  )
  const byId = useMemo(() => new Map(laid.map((d) => [d.id, d])), [laid])

  const width = Math.max(
    960,
    ...laid.map((d) => d.x + (chipW[d.id] ?? estimateChipWidth(d.node.title[lang])) + 80),
  )
  const height = Math.max(420, ...laid.map((d) => d.y + 80))

  useLayoutEffect(() => {
    const measure = () => {
      const next: Record<string, number> = {}
      for (const [id, el] of chipRefs.current) next[id] = el.offsetWidth
      setChipW((prev) => {
        const ids = Object.keys(next)
        if (
          ids.length === Object.keys(prev).length &&
          ids.every((id) => prev[id] === next[id])
        ) {
          return prev
        }
        return next
      })
    }
    measure()
    const ro = new ResizeObserver(measure)
    for (const el of chipRefs.current.values()) ro.observe(el)
    return () => ro.disconnect()
  }, [laid, lang, selectedId])

  const toggle = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const expandAll = () => setCollapsed(new Set())
  const collapseAll = () => setCollapsed(new Set(collectParents(mindForest)))

  const openNode = (id: string) => {
    select(id)
    setCollapsed((prev) => {
      const next = new Set(prev)
      next.delete(id)
      for (const ancestor of ancestorsOf(id, mindForest)) next.delete(ancestor)
      return next
    })
  }

  useLayoutEffect(() => {
    if (!selectedId || !visIds.has(selectedId)) return
    setCollapsed((prev) => {
      const next = new Set(prev)
      next.delete(selectedId)
      for (const id of ancestorsOf(selectedId, mindForest)) next.delete(id)
      return next
    })
  }, [selectedId, visIds])

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex gap-2 px-4 py-2">
        <button
          type="button"
          onClick={expandAll}
          className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text-h)]"
        >
          {t('expandAll', lang)}
        </button>
        <button
          type="button"
          onClick={collapseAll}
          className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text-h)]"
        >
          {t('collapseAll', lang)}
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        <div className="mindmap-board" style={{ width, height }}>
          <svg
            width={width}
            height={height}
            className="mindmap-svg"
            aria-hidden="true"
          >
            {laid.map((d) => {
              if (!d.parentId) return null
              const parent = byId.get(d.parentId)
              if (!parent) return null
              const pw =
                chipW[parent.id] ?? estimateChipWidth(parent.node.title[lang])
              return (
                <path
                  key={`e-${d.parentId}-${d.id}`}
                  className="mind-edge"
                  d={elbow(parent, d, pw)}
                />
              )
            })}
          </svg>
          {laid.map((d) => {
            const vis = nodeVisibility(d.node, belt)
            const dim = domainDimmed(d.node, domain)
            const match = matchesQuery(d.node, search, lang)
            const sel = d.id === selectedId
            const faded = vis === 'preview' || dim || !match
            return (
              <div
                key={d.id}
                ref={(el) => {
                  if (el) chipRefs.current.set(d.id, el)
                  else chipRefs.current.delete(d.id)
                }}
                className={`mind-chip${sel ? ' is-sel' : ''}${faded ? ' is-dim' : ''}`}
                style={{ left: d.x - CHIP_PAD, top: d.y }}
              >
                {d.hasChildren ? (
                  <button
                    type="button"
                    className="mind-chip-toggle"
                    aria-expanded={!d.collapsed}
                    onClick={() => toggle(d.id)}
                  >
                    {d.collapsed ? '+' : '–'}
                  </button>
                ) : null}
                <button
                  type="button"
                  className="mind-chip-label"
                  onClick={() => openNode(d.id)}
                >
                  {d.node.title[lang]}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function layoutForest(forest: MindSpec[], visIds: Set<string>, collapsed: Set<string>): Laid[] {
  const out: Laid[] = []
  let yOffset = 40
  for (const root of forest) {
    const filtered = prune(root, visIds)
    if (!filtered) continue
    const h = hierarchy(filtered, (d) =>
      collapsed.has(d.id) ? undefined : d.children,
    )
    const layout = tree<MindSpec>().nodeSize([44, 300])
    layout(h)
    let minY = Infinity
    let maxY = -Infinity
    h.each((n) => {
      minY = Math.min(minY, n.x ?? 0)
      maxY = Math.max(maxY, n.x ?? 0)
    })
    h.each((n) => {
      const kn = nodeById.get(n.data.id)
      if (!kn) return
      out.push({
        id: n.data.id,
        x: 48 + (n.y ?? 0),
        y: yOffset + (n.x ?? 0) - minY,
        node: kn,
        parentId: n.parent?.data.id,
        collapsed: collapsed.has(n.data.id),
        hasChildren: Boolean(n.data.children?.length),
      })
    })
    yOffset += maxY - minY + 90
  }
  return out
}

function prune(spec: MindSpec, visIds: Set<string>): MindSpec | null {
  if (!visIds.has(spec.id)) return null
  const children = spec.children
    ?.map((c) => prune(c, visIds))
    .filter((c): c is MindSpec => Boolean(c))
  return { id: spec.id, children: children?.length ? children : undefined }
}

function collectParents(forest: MindSpec[]): string[] {
  const ids: string[] = []
  const walk = (s: MindSpec) => {
    if (s.children?.length) {
      ids.push(s.id)
      s.children.forEach(walk)
    }
  }
  forest.forEach(walk)
  return ids
}

function ancestorsOf(id: string, forest: MindSpec[]): string[] {
  const path: string[] = []
  const walk = (s: MindSpec, trail: string[]): boolean => {
    if (s.id === id) {
      path.push(...trail)
      return true
    }
    return Boolean(s.children?.some((c) => walk(c, [...trail, s.id])))
  }
  forest.forEach((r) => walk(r, []))
  return path
}

function elbow(parent: Laid, child: Laid, parentW: number): string {
  const x1 = parent.x - CHIP_PAD + parentW
  const y1 = parent.y
  const x2 = child.x - CHIP_PAD
  const y2 = child.y
  const mx = x1 + Math.max(28, (x2 - x1) * 0.45)
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`
}

function estimateChipWidth(title: string): number {
  let w = 26
  for (const ch of title) w += /[\u3400-\u9fff]/.test(ch) ? 13 : 8
  return Math.min(280, Math.max(56, w))
}
