import { analyzeNodes } from './nodes-analyze'
import { blackNodes } from './nodes-black'
import { controlNodes } from './nodes-control'
import { coreNodes } from './nodes-core'
import { defineNodes } from './nodes-define'
import { improveNodes } from './nodes-improve'
import { leanNodes } from './nodes-lean'
import { mbbNodes } from './nodes-mbb'
import { measureNodes } from './nodes-measure'
import { supplyNodes } from './nodes-supply'
import type { KnowledgeNode } from './types'

export const nodes: KnowledgeNode[] = [
  ...coreNodes,
  ...defineNodes,
  ...measureNodes,
  ...analyzeNodes,
  ...improveNodes,
  ...controlNodes,
  ...leanNodes,
  ...supplyNodes,
  ...blackNodes,
  ...mbbNodes,
]

export const nodeById = new Map(nodes.map((n) => [n.id, n]))

export { edges } from './edges'
export { mindForest } from './mindmap'
export * from './types'
