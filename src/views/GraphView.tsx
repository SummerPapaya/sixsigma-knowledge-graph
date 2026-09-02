import { select as d3select, zoom } from 'd3'
import { useEffect, useMemo, useRef, useState } from 'react'
import { edges, nodes } from '../content'
import type { KnowledgeNode, Locale, NodeKind } from '../content/types'
import {
  CLUSTER_LABEL,
  CLUSTER_ORDER,
  domainDimmed,
  layoutCluster,
  matchesQuery,
  neighbors,
  nodeVisibility,
  visibleEdges,
  visibleNodes,
  type LayoutCluster,
} from '../graph/filter'
import { t } from '../i18n/chrome'
import { useApp } from '../state/AppState'

const KIND_R: Record<NodeKind, number> = {
  phase: 8,
  tool: 6,
  metric: 6,
  concept: 6,
  'sc-process': 7,
  role: 6,
}

const KIND_RANK: Record<NodeKind, number> = {
  phase: 0,
  role: 1,
  concept: 2,
  'sc-process': 3,
  tool: 4,
  metric: 5,
}

type Placed = {
  id: string
  x: number
  y: number
  cluster: LayoutCluster
  node: KnowledgeNode
}

export function GraphView() {
  const { lang, belt, domain, search, selectedId, select } = useApp()
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const vpRef = useRef<SVGGElement>(null)
  const [size, setSize] = useState({ w: 1100, h: 640 })

  const vis = useMemo(() => visibleNodes(nodes, belt, true), [belt])
  const visEdges = useMemo(() => {
    const ids = new Set(vis.map((n) => n.id))
    return visibleEdges(edges, ids)
  }, [vis])

  const neighborIds = useMemo(() => {
    if (!selectedId) return null
    return new Set([selectedId, ...neighbors(selectedId, visEdges).map((n) => n.id)])
  }, [selectedId, visEdges])

  const placed = useMemo(
    () => placeColumns(vis, size.w, size.h),
    [vis, size],
  )
  const pos = useMemo(() => new Map(placed.map((p) => [p.id, p])), [placed])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const ro = new ResizeObserver(() => {
      const r = wrap.getBoundingClientRect()
      setSize({ w: Math.max(640, r.width), h: Math.max(420, r.height) })
    })
    ro.observe(wrap)
    const r = wrap.getBoundingClientRect()
    setSize({ w: Math.max(640, r.width), h: Math.max(420, r.height) })
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const svgEl = svgRef.current
    const vpEl = vpRef.current
    if (!svgEl || !vpEl) return
    const svg = d3select(svgEl)
    const g = d3select(vpEl)
    const z = zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.55, 2.2])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString())
      })
    svg.call(z)
    svg.on('click', () => select(null))
    return () => {
      svg.on('.zoom', null)
      svg.on('click', null)
    }
  }, [select])

  const colW = size.w / CLUSTER_ORDER.length

  return (
    <div ref={wrapRef} className="relative h-full min-h-[320px] overflow-hidden">
      <svg
        ref={svgRef}
        className="graph-svg"
        viewBox={`0 0 ${size.w} ${size.h}`}
        role="img"
        aria-label="knowledge graph"
      >
        <g ref={vpRef} className="viewport">
          {CLUSTER_ORDER.map((k, i) => (
            <g key={k}>
              <rect
                x={i * colW + 8}
                y={12}
                width={colW - 16}
                height={size.h - 24}
                rx={10}
                fill="var(--graph-lane)"
              />
              <text
                x={i * colW + colW / 2}
                y={32}
                textAnchor="middle"
                fill="var(--graph-label)"
                fontSize={10}
                fontWeight={600}
                letterSpacing="0.18em"
                fontFamily="IBM Plex Mono, monospace"
              >
                {CLUSTER_LABEL[k][lang]}
              </text>
            </g>
          ))}

          {visEdges.map((e) => {
            const a = pos.get(e.source)
            const b = pos.get(e.target)
            if (!a || !b) return null
            const cross = a.cluster !== b.cluster
            const onPath =
              neighborIds && neighborIds.has(a.id) && neighborIds.has(b.id)
            const dim =
              (neighborIds && !onPath) ||
              !matchesQuery(a.node, search, lang) ||
              !matchesQuery(b.node, search, lang)
            return (
              <path
                key={`${e.source}-${e.target}-${e.rel}`}
                d={curve(a.x, a.y, b.x, b.y)}
                fill="none"
                stroke={onPath ? 'var(--accent)' : cross ? 'var(--graph-link-cross)' : 'var(--graph-link)'}
                strokeWidth={onPath ? 1.15 : cross ? 0.45 : 0.7}
                strokeOpacity={dim ? 0.12 : 0.8}
              />
            )
          })}

          {placed.map((p) => {
            const visState = nodeVisibility(p.node, belt)
            const dimDomain = domainDimmed(p.node, domain)
            const match = matchesQuery(p.node, search, lang)
            const inN = !neighborIds || neighborIds.has(p.id)
            const faded =
              visState === 'preview' || dimDomain || !match || !inN
            const sel = p.id === selectedId
            const r = KIND_R[p.node.kind]
            return (
              <g
                key={p.id}
                transform={`translate(${p.x},${p.y})`}
                style={{ cursor: 'var(--cursor-pointer, pointer)' }}
                onClick={(ev) => {
                  ev.stopPropagation()
                  select(p.id)
                }}
              >
                <title>{p.node.title[lang]}</title>
                <path
                  d={shapePath(p.node.kind, r)}
                  opacity={faded ? 0.4 : 1}
                  fill={sel ? 'var(--accent)' : p.node.kind === 'phase' ? 'var(--accent-2)' : 'var(--bg-2)'}
                  stroke="var(--accent)"
                  strokeWidth={sel || p.node.kind === 'phase' ? 1.8 : 1.1}
                  strokeDasharray={visState === 'preview' ? '2 3' : undefined}
                />
                <text
                  className="graph-node-label"
                  x={12}
                  y={4}
                  opacity={faded ? 0.78 : 1}
                  fontSize={12}
                  fontFamily="IBM Plex Sans, Noto Sans SC, sans-serif"
                >
                  {shortLabel(p.node.title[lang], lang)}
                </text>
              </g>
            )
          })}
        </g>
      </svg>
      <Legend />
      <MobileList />
    </div>
  )
}

function placeColumns(list: KnowledgeNode[], w: number, h: number): Placed[] {
  const groups = new Map<LayoutCluster, KnowledgeNode[]>()
  for (const k of CLUSTER_ORDER) groups.set(k, [])
  for (const n of list) {
    const k = layoutCluster(n)
    groups.get(k)?.push(n)
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => {
      const d = KIND_RANK[a.kind] - KIND_RANK[b.kind]
      return d !== 0 ? d : a.id.localeCompare(b.id)
    })
  }
  const maxN = Math.max(1, ...[...groups.values()].map((g) => g.length))
  const rowH = Math.min(46, Math.max(28, (h - 72) / maxN))
  const colW = w / CLUSTER_ORDER.length
  const out: Placed[] = []
  CLUSTER_ORDER.forEach((k, ci) => {
    const arr = groups.get(k) ?? []
    const total = (arr.length - 1) * rowH
    const startY = Math.max(56, (h - total) / 2)
    arr.forEach((node, i) => {
      out.push({
        id: node.id,
        cluster: k,
        node,
        x: ci * colW + 28,
        y: startY + i * rowH,
      })
    })
  })
  return out
}

function Legend() {
  const { lang } = useApp()
  const items: {
    kind: NodeKind
    key:
      | 'legendPhase'
      | 'legendTool'
      | 'legendMetric'
      | 'legendConcept'
      | 'legendSc'
      | 'legendRole'
  }[] = [
    { kind: 'phase', key: 'legendPhase' },
    { kind: 'tool', key: 'legendTool' },
    { kind: 'metric', key: 'legendMetric' },
    { kind: 'concept', key: 'legendConcept' },
    { kind: 'sc-process', key: 'legendSc' },
    { kind: 'role', key: 'legendRole' },
  ]
  return (
    <div className="pointer-events-none absolute bottom-3 left-3 hidden gap-3 border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] px-3 py-2 font-mono text-[9px] tracking-widest uppercase text-[var(--muted)] md:flex">
      {items.map((it) => (
        <span key={it.kind} className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="-10 -10 20 20" className="overflow-visible">
            <path d={shapePath(it.kind, 6)} fill="none" stroke="var(--accent)" strokeWidth="1.2" />
          </svg>
          {t(it.key, lang)}
        </span>
      ))}
    </div>
  )
}

function MobileList() {
  const { lang, belt, domain, search, selectedId, select } = useApp()
  if (selectedId) return null
  const vis = visibleNodes(nodes, belt, true).filter(
    (n) => matchesQuery(n, search, lang) && !domainDimmed(n, domain),
  )
  return (
    <div className="absolute inset-x-0 bottom-0 max-h-[34%] overflow-auto border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] md:hidden">
      {vis.slice(0, 40).map((n) => (
        <button
          key={n.id}
          type="button"
          onClick={() => select(n.id)}
          className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
            selectedId === n.id ? 'bg-[var(--accent-2)] text-[var(--text-h)]' : ''
          }`}
        >
          <span>{n.title[lang]}</span>
          <span className="font-mono text-[10px] uppercase text-[var(--muted)]">{n.kind}</span>
        </button>
      ))}
    </div>
  )
}

function shortLabel(s: string, lang: Locale): string {
  const max = lang === 'zh' ? 6 : 12
  return s.length > max ? `${s.slice(0, max - 1)}…` : s
}

function shapePath(kind: NodeKind, r: number): string {
  if (kind === 'metric') {
    return `M 0 ${-r} L ${r} 0 L 0 ${r} L ${-r} 0 Z`
  }
  if (kind === 'sc-process') {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6
      return `${Math.cos(a) * r},${Math.sin(a) * r}`
    })
    return `M ${pts.join(' L ')} Z`
  }
  if (kind === 'role') {
    const w = r * 1.15
    const h = r * 0.85
    return `M ${-w} ${-h} H ${w} V ${h} H ${-w} Z`
  }
  const k = kind === 'phase' ? r : r * 0.92
  return `M ${-k} 0 A ${k} ${k} 0 1 0 ${k} 0 A ${k} ${k} 0 1 0 ${-k} 0`
}

function curve(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`
}
