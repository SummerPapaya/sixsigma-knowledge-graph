export type Locale = 'zh' | 'en'

export type Localized = { zh: string; en: string }

export const BELTS = ['white', 'yellow', 'green', 'black', 'mbb'] as const
export type Belt = (typeof BELTS)[number]
export type UnlockedBelt = Belt

export const DOMAINS = ['six-sigma', 'lean', 'supply-chain'] as const
export type Domain = (typeof DOMAINS)[number]
export type DomainFilter = 'all' | 'six-sigma' | 'supply-chain'

export const DMAIC = ['D', 'M', 'A', 'I', 'C'] as const
export type Dmaic = (typeof DMAIC)[number]

export const NODE_KINDS = [
  'phase',
  'tool',
  'metric',
  'concept',
  'sc-process',
  'role',
] as const
export type NodeKind = (typeof NODE_KINDS)[number]

export const VIEWS = ['graph', 'mindmap', 'briefing', 'flashcards'] as const
export type ViewId = (typeof VIEWS)[number]

export const EDGE_RELS = ['part-of', 'uses', 'measures', 'feeds', 'related'] as const
export type EdgeRel = (typeof EDGE_RELS)[number]

export type KnowledgeNode = {
  id: string
  kind: NodeKind
  beltMin: UnlockedBelt
  dmaic?: Dmaic
  domains: Domain[]
  title: Localized
  blurb: Localized
  body: Localized
  whenToUse: Localized
  scExample: Localized
  pitfalls?: Localized
  formula?: string
  steps?: Localized[]
  flashcard?: {
    front: Localized
    back: Localized
  }
}

export type KnowledgeEdge = {
  source: string
  target: string
  rel: EdgeRel
}

export type MindSpec = {
  id: string
  children?: MindSpec[]
}
