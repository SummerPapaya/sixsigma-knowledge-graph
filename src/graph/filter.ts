import type {
  Belt,
  DomainFilter,
  KnowledgeEdge,
  KnowledgeNode,
  Locale,
  UnlockedBelt,
} from '../content/types'

export const BELT_RANK: Record<Belt, number> = {
  white: 0,
  yellow: 1,
  green: 2,
  black: 3,
  mbb: 4,
}

export function isBeltLocked(_belt: Belt): boolean {
  return false
}

export function effectiveBelt(belt: Belt): UnlockedBelt {
  return belt
}

export type Visibility = 'full' | 'preview' | 'hidden'

export function nodeVisibility(node: KnowledgeNode, belt: Belt): Visibility {
  const selected = BELT_RANK[effectiveBelt(belt)]
  const min = BELT_RANK[node.beltMin]
  if (min <= selected) return 'full'
  if (min === selected + 1 && min <= BELT_RANK.mbb) return 'preview'
  return 'hidden'
}

export function domainDimmed(node: KnowledgeNode, domain: DomainFilter): boolean {
  if (domain === 'all') return false
  if (domain === 'supply-chain') return !node.domains.includes('supply-chain')
  return !node.domains.includes('six-sigma') && !node.domains.includes('lean')
}

export function matchesQuery(
  node: KnowledgeNode,
  query: string,
  lang: Locale,
): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return (
    node.id.includes(q) ||
    node.title[lang].toLowerCase().includes(q) ||
    node.blurb[lang].toLowerCase().includes(q) ||
    node.title.zh.toLowerCase().includes(q) ||
    node.title.en.toLowerCase().includes(q)
  )
}

export function visibleNodes(
  nodes: KnowledgeNode[],
  belt: Belt,
  includePreview = true,
): KnowledgeNode[] {
  return nodes.filter((n) => {
    const v = nodeVisibility(n, belt)
    return v === 'full' || (includePreview && v === 'preview')
  })
}

export function visibleEdges(
  edges: KnowledgeEdge[],
  visibleIds: Set<string>,
): KnowledgeEdge[] {
  return edges.filter((e) => visibleIds.has(e.source) && visibleIds.has(e.target))
}

export function neighbors(
  id: string,
  edges: KnowledgeEdge[],
): { id: string; rel: KnowledgeEdge['rel'] }[] {
  const out: { id: string; rel: KnowledgeEdge['rel'] }[] = []
  const seen = new Set<string>()
  for (const e of edges) {
    const other = e.source === id ? e.target : e.target === id ? e.source : null
    if (!other || seen.has(other)) continue
    seen.add(other)
    out.push({ id: other, rel: e.rel })
  }
  return out
}

export const CLUSTER_ORDER = ['core', 'D', 'M', 'A', 'I', 'C', 'sc', 'ops'] as const
export type LayoutCluster = (typeof CLUSTER_ORDER)[number]

export const CLUSTER_X: Record<LayoutCluster, number> = {
  core: 0.062,
  D: 0.186,
  M: 0.31,
  A: 0.434,
  I: 0.558,
  C: 0.682,
  sc: 0.806,
  ops: 0.93,
}

export const CLUSTER_LABEL: Record<LayoutCluster, { zh: string; en: string }> = {
  core: { zh: '基础', en: 'CORE' },
  D: { zh: 'DEFINE', en: 'DEFINE' },
  M: { zh: 'MEASURE', en: 'MEASURE' },
  A: { zh: 'ANALYZE', en: 'ANALYZE' },
  I: { zh: 'IMPROVE', en: 'IMPROVE' },
  C: { zh: 'CONTROL', en: 'CONTROL' },
  sc: { zh: 'SCOR', en: 'SCOR' },
  ops: { zh: '履约库存', en: 'FLOW' },
}

export function layoutCluster(node: KnowledgeNode): LayoutCluster {
  if (node.kind === 'sc-process' || node.id === 'scor') return 'sc'
  if (!node.dmaic && node.domains.includes('supply-chain')) return 'ops'
  if (node.dmaic) return node.dmaic
  return 'core'
}

export function clusterKey(node: KnowledgeNode): LayoutCluster {
  return layoutCluster(node)
}

const KIND_ORDER: Record<string, number> = {
  phase: 0,
  role: 1,
  concept: 2,
  'sc-process': 3,
  tool: 4,
  metric: 5,
}

export function packClusterY(
  nodes: KnowledgeNode[],
  height: number,
): Map<string, number> {
  const groups = new Map<LayoutCluster, KnowledgeNode[]>()
  for (const n of nodes) {
    const k = layoutCluster(n)
    const list = groups.get(k) ?? []
    list.push(n)
    groups.set(k, list)
  }
  const top = height * 0.13
  const bot = height * 0.9
  const ys = new Map<string, number>()
  for (const list of groups.values()) {
    list.sort((a, b) => {
      const ka = KIND_ORDER[a.kind] ?? 9
      const kb = KIND_ORDER[b.kind] ?? 9
      if (ka !== kb) return ka - kb
      return a.id.localeCompare(b.id)
    })
    const n = list.length
    list.forEach((node, i) => {
      const y = n === 1 ? (top + bot) / 2 : top + (i / Math.max(1, n - 1)) * (bot - top)
      ys.set(node.id, y)
    })
  }
  return ys
}
