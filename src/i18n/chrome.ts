import type { Belt, DomainFilter, Locale, ViewId } from '../content/types'

type Chrome = Record<string, { zh: string; en: string }>

export const chrome: Chrome = {
  product: { zh: 'SIGMA ATLAS', en: 'SIGMA ATLAS' },
  tagline: { zh: '六西格玛知识图谱 · 分列视图', en: 'Six Sigma Knowledge Atlas · lanes' },
  search: { zh: '搜索概念、工具、指标…', en: 'Search concepts, tools, metrics…' },
  searchHint: { zh: '按 / 聚焦', en: 'Press / to focus' },
  graph: { zh: '图谱', en: 'Graph' },
  mindmap: { zh: '脑图', en: 'Mind map' },
  briefing: { zh: '归纳', en: 'Briefing' },
  flashcards: { zh: '闪卡', en: 'Cards' },
  domainAll: { zh: '全部', en: 'All' },
  domainSs: { zh: '精益六西格玛', en: 'Lean Six Sigma' },
  domainSc: { zh: '供应链', en: 'Supply chain' },
  beltWhite: { zh: 'White', en: 'White' },
  beltYellow: { zh: 'Yellow', en: 'Yellow' },
  beltGreen: { zh: 'Green', en: 'Green' },
  beltBlack: { zh: 'Black', en: 'Black' },
  beltMbb: { zh: 'Master Black', en: 'Master Black' },
  locked: { zh: '二期开放', en: 'Phase two' },
  lockedBody: {
    zh: '全部带级已开放。',
    en: 'All belts are open.',
  },
  whenToUse: { zh: '何时用', en: 'When to use' },
  scExample: { zh: '供应链场景', en: 'Supply-chain scene' },
  pitfalls: { zh: '常见误用', en: 'Pitfalls' },
  steps: { zh: '步骤', en: 'Steps' },
  formula: { zh: '公式', en: 'Formula' },
  related: { zh: '相邻节点', en: 'Neighbors' },
  beltMin: { zh: '起始带级', en: 'From belt' },
  preview: { zh: '下一带级预览', en: 'Next-belt preview' },
  previewHint: {
    zh: '切换到更高带级可阅读完整正文。',
    en: 'Switch to a higher belt to read the full briefing.',
  },
  openBriefing: { zh: '打开归纳', en: 'Open briefing' },
  openCard: { zh: '用闪卡记', en: 'Study card' },
  showOnGraph: { zh: '在图谱定位', en: 'Locate on graph' },
  showOnMind: { zh: '在脑图打开', en: 'Open in mind map' },
  nodes: { zh: '节点', en: 'nodes' },
  edges: { zh: '关系', en: 'edges' },
  lens: { zh: '透镜', en: 'lens' },
  emptySearch: { zh: '没有匹配的概念。试试 OTIF、Cpk、SIPOC。', en: 'No matching concept. Try OTIF, Cpk, SIPOC.' },
  flip: { zh: '翻转', en: 'Flip' },
  known: { zh: '已掌握', en: 'Known' },
  learning: { zh: '再看', en: 'Again' },
  remaining: { zh: '未记', en: 'Unseen' },
  resetDeck: { zh: '重置进度', en: 'Reset progress' },
  noCards: { zh: '当前透镜下没有闪卡。', en: 'No cards under this lens.' },
  cardHint: { zh: 'F 翻转 · ← → 切卡', en: 'F flip · ← → next' },
  legendPhase: { zh: '阶段', en: 'Phase' },
  legendTool: { zh: '工具', en: 'Tool' },
  legendMetric: { zh: '指标', en: 'Metric' },
  legendConcept: { zh: '概念', en: 'Concept' },
  legendSc: { zh: '供应链过程', en: 'SC process' },
  legendRole: { zh: '角色', en: 'Role' },
  expandAll: { zh: '全部展开', en: 'Expand all' },
  collapseAll: { zh: '全部折叠', en: 'Collapse all' },
  close: { zh: '关闭', en: 'Close' },
  kind: { zh: '类型', en: 'Type' },
  domains: { zh: '域', en: 'Domains' },
  themeLight: { zh: '亮色', en: 'Light' },
  themeDark: { zh: '暗色', en: 'Dark' },
}

export const beltLabel: Record<Belt, { zh: string; en: string }> = {
  white: chrome.beltWhite,
  yellow: chrome.beltYellow,
  green: chrome.beltGreen,
  black: chrome.beltBlack,
  mbb: chrome.beltMbb,
}

export const viewLabel: Record<ViewId, keyof typeof chrome> = {
  graph: 'graph',
  mindmap: 'mindmap',
  briefing: 'briefing',
  flashcards: 'flashcards',
}

export const domainLabel: Record<DomainFilter, keyof typeof chrome> = {
  all: 'domainAll',
  'six-sigma': 'domainSs',
  'supply-chain': 'domainSc',
}

export function t(key: keyof typeof chrome, lang: Locale): string {
  return chrome[key][lang]
}

export const relLabel: Record<string, { zh: string; en: string }> = {
  'part-of': { zh: '组成', en: 'part of' },
  uses: { zh: '使用', en: 'uses' },
  measures: { zh: '度量', en: 'measures' },
  feeds: { zh: '输入', en: 'feeds' },
  related: { zh: '相关', en: 'related' },
}

export const kindLabel: Record<string, { zh: string; en: string }> = {
  phase: chrome.legendPhase,
  tool: chrome.legendTool,
  metric: chrome.legendMetric,
  concept: chrome.legendConcept,
  'sc-process': chrome.legendSc,
  role: chrome.legendRole,
}

export const dmaicLabel: Record<string, { zh: string; en: string }> = {
  D: { zh: 'Define', en: 'Define' },
  M: { zh: 'Measure', en: 'Measure' },
  A: { zh: 'Analyze', en: 'Analyze' },
  I: { zh: 'Improve', en: 'Improve' },
  C: { zh: 'Control', en: 'Control' },
}
