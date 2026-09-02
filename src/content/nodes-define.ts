import type { KnowledgeNode } from './types'

export const defineNodes: KnowledgeNode[] = [
  {
    id: 'define-phase',
    kind: 'phase',
    beltMin: 'white',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: 'Define 定义', en: 'Define' },
    blurb: {
      zh: '把抱怨变成有范围、有客户、有目标的项目问题。',
      en: 'Turn a complaint into a scoped problem with a customer and a goal.',
    },
    body: {
      zh: 'Define 的产出是项目章程：问题陈述、范围、VOC/CTQ、目标、团队、时间盒。失败的 Define 通常太宽（「改善供应链」）或太窄到已经预设对策（「上新 WMS」）。好的问题陈述只描述痛、不夹带解。退出标准：团队能用一分钟讲清 Y、规格、基线缺口和边界。',
      en: 'Define produces a charter: problem statement, scope, VOC/CTQ, goal, team, time-box. Failed Define is too wide (“fix supply chain”) or so narrow it smuggles a solution (“buy a new WMS”). A good problem statement describes pain, not a fix. Exit: the team can explain Y, spec, gap, and boundaries in one minute.',
    },
    whenToUse: {
      zh: '任何正式改进项目的第一阶段，以及需求混乱需要重新对齐时。',
      en: 'The first phase of any formal improvement project, and whenever requirements are misaligned.',
    },
    scExample: {
      zh: '「客户总投诉」→「过去 12 周，华东 B2B 订单的 OTIF 为 86%，目标 95%，范围不含国际件。」',
      en: '“Customers complain” → “For 12 weeks, East China B2B OTIF is 86% vs a 95% goal; international orders out of scope.”',
    },
    flashcard: {
      front: { zh: 'Define 阶段最不该写进问题陈述的是什么？', en: 'What must a Define problem statement not include?' },
      back: { zh: '预设的解决方案。', en: 'A predetermined solution.' },
    },
  },
  {
    id: 'voc-ctq',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: 'VOC 与 CTQ', en: 'VOC and CTQ' },
    blurb: {
      zh: '把客户原话翻译成可测量的关键质量特性。',
      en: 'Translate customer language into measurable critical-to-quality characteristics.',
    },
    body: {
      zh: 'VOC 是客户怎么说（「货总是不准」）；CTQ 是你怎么量（「承诺日 ±0 的送达比例」）。中间常用 CTQ 树：需求 → 驱动因素 → 可测指标与规格。内部客户也算客户：生产对计划的 VOC 可能是「别改单」，CTQ 则是冻结期内改单次数。Green Belt 要能指出哪个 CTQ 真正上了章程，避免收集一堆满意度却没有规格。',
      en: 'VOC is what the customer says (“you are never on time”); CTQ is how you measure (“percent delivered on the promised date ±0”). A CTQ tree sits in between: need → drivers → metric and spec. Internal customers count: production VOC may be “stop changing orders”; CTQ is freeze-window change count. Green Belts must show which CTQ actually entered the charter.',
    },
    whenToUse: {
      zh: '章程起草、指标选型、多个客户声音互相冲突时。',
      en: 'Drafting a charter, choosing metrics, or when customer voices conflict.',
    },
    scExample: {
      zh: '零售客户 VOC「别缺货」→ CTQ：门店下单后 48h 满足率 ≥ 98%，而不是「提高预测准确率」这个手段。',
      en: 'Retail VOC “don’t stock out” → CTQ: 48-hour fill after store order ≥ 98%, not the means “improve forecast accuracy.”',
    },
    pitfalls: {
      zh: '把内部方便的指标当成 CTQ，或把手段（上系统）写成客户要求。',
      en: 'Promoting internally convenient KPIs to CTQ, or writing a means (a new system) as the customer need.',
    },
    flashcard: {
      front: { zh: 'VOC 和 CTQ 的关系？', en: 'How do VOC and CTQ relate?' },
      back: {
        zh: 'VOC 是客户语言；CTQ 是把它翻译后的可测特性和规格。',
        en: 'VOC is customer language; CTQ is the translated measurable characteristic and spec.',
      },
    },
  },
  {
    id: 'sipoc',
    kind: 'tool',
    beltMin: 'white',
    dmaic: 'D',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: 'SIPOC', en: 'SIPOC' },
    blurb: {
      zh: '一页看清供应商、输入、过程、输出、客户，用来锁范围。',
      en: 'One page for Suppliers, Inputs, Process, Outputs, Customers — used to lock scope.',
    },
    body: {
      zh: 'SIPOC 是高空地图，不是作业指导书。过程只写 5–7 个步骤；输入输出要具体到信息或物料。它帮助团队停止争论细节，先对齐边界。做完 SIPOC 再画详细流程图。供应链几乎天生是 SIPOC：供应商和客户都在图上，范围争议（「包不包含承运人」）会立刻暴露。',
      en: 'SIPOC is an altitude map, not an SOP. Keep the process to 5–7 steps; make inputs and outputs concrete (information or material). It stops detail fights until boundaries are agreed. Draw the detailed map after SIPOC. Supply chains are SIPOC-native: suppliers and customers sit on the page, so scope fights (“does the carrier count?”) surface immediately.',
    },
    whenToUse: {
      zh: 'Kickoff 后两小时内；跨职能范围不清时。',
      en: 'Within two hours of kickoff; whenever cross-functional scope is fuzzy.',
    },
    scExample: {
      zh: '来料检验 SIPOC：供应商=零件厂与货代；输入=ASN、实物、图纸；过程=卸货-核对-抽检-判定；输出=合格入库/退货单；客户=生产与计划。',
      en: 'Incoming inspection SIPOC: suppliers = part plants and forwarders; inputs = ASN, goods, drawings; process = unload–match–sample–disposition; outputs = put-away or return; customers = production and planning.',
    },
    steps: [
      { zh: '先写过程 5–7 步', en: 'Write 5–7 process steps first' },
      { zh: '补输出与客户', en: 'Add outputs and customers' },
      { zh: '补输入与供应商', en: 'Add inputs and suppliers' },
      { zh: '用红线标出项目范围', en: 'Draw a red box for project scope' },
    ],
    flashcard: {
      front: { zh: 'SIPOC 五个词是什么？', en: 'What are the five SIPOC words?' },
      back: {
        zh: 'Supplier, Input, Process, Output, Customer。',
        en: 'Supplier, Input, Process, Output, Customer.',
      },
    },
  },
  {
    id: 'project-charter',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: '项目章程', en: 'Project charter' },
    blurb: {
      zh: '一页纸约定问题、目标、范围、资源和退出条件。',
      en: 'One page that locks problem, goal, scope, resources, and exit conditions.',
    },
    body: {
      zh: '章程是 Champion 与项目负责人的合同。必备块：业务背景、问题陈述、目标（基线 / 目标 / 规格）、范围内外、时间节点、团队、主要风险。目标要可验证：例如「12 周内把某仓错发率从 0.42% 降到 0.15%」，而不是「加强培训」。章程应在 Define 闸门被正式批准，之后改范围要显式变更。',
      en: 'The charter is the contract between Champion and lead. Required blocks: business case, problem statement, goal (baseline / target / spec), in/out of scope, milestones, team, key risks. Goals must be testable: “cut mis-ships from 0.42% to 0.15% in 12 weeks,” not “strengthen training.” Approve it at the Define gate; later scope changes must be explicit.',
    },
    whenToUse: {
      zh: '立项审批、阶段评审、防止范围蔓延。',
      en: 'Project approval, tollgates, and anti-scope-creep.',
    },
    scExample: {
      zh: '章程写明「不含改承运商合同」，避免 OTIF 项目中途变成采购谈判。',
      en: 'Charter states “carrier contract renegotiation out of scope” so an OTIF project does not become a sourcing negotiation.',
    },
    flashcard: {
      front: { zh: '章程里的目标至少要包含哪三个数字？', en: 'Which three numbers belong in a charter goal?' },
      back: { zh: '基线、目标、完成时限（最好还有规格）。', en: 'Baseline, target, and deadline (plus spec if you have one).' },
    },
  },
  {
    id: 'problem-statement',
    kind: 'tool',
    beltMin: 'white',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: '问题陈述', en: 'Problem statement' },
    blurb: {
      zh: '用对象、指标、时间窗和缺口描述痛点，不写原因、不写对策。',
      en: 'Describe the pain with object, metric, window, and gap — no causes, no fixes.',
    },
    body: {
      zh: '句式：在【时间】，【过程/产品】的【指标】为【基线】，相对【目标/规格】缺口为【X】，影响【客户/成本】。禁止出现「由于」「应该」。问题陈述决定后续所有测量。写得越具体，分析越不容易漂。',
      en: 'Pattern: During [window], [process/product] [metric] is [baseline], a gap of [X] versus [goal/spec], affecting [customer/cost]. Ban “because” and “should.” This sentence governs all later measurement. Specificity keeps Analyze from drifting.',
    },
    whenToUse: {
      zh: '写章程之前；每次闸门先重读这一句。',
      en: 'Before the charter; reread it at every tollgate.',
    },
    scExample: {
      zh: '「2026 Q1，深圳仓 B2C 订单 48h 发货率为 91.2%，低于 98% 服务承诺，约 4,100 单延迟，客服工单上升 18%。」',
      en: '“In 2026 Q1, Shenzhen B2C 48-hour ship rate was 91.2% vs a 98% promise; ~4,100 late orders; tickets up 18%.”',
    },
    pitfalls: {
      zh: '写成「因为员工不认真所以要培训」——这是原因加对策，不是问题。',
      en: 'Writing “staff are careless so we must train” — that is cause plus solution, not a problem.',
    },
    flashcard: {
      front: { zh: '问题陈述里为什么不能写「因为」？', en: 'Why ban “because” in a problem statement?' },
      back: {
        zh: '「因为」预设根因，会跳过测量与分析。',
        en: '“Because” assumes a root cause and skips Measure and Analyze.',
      },
    },
  },
  {
    id: 'copq',
    kind: 'metric',
    beltMin: 'yellow',
    dmaic: 'D',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '劣质成本 COPQ', en: 'COPQ' },
    blurb: {
      zh: '把返工、报废、加急、索赔等浪费换成钱，用来说明项目值得做。',
      en: 'Turn scrap, rework, expedites, and claims into money so the project is worth doing.',
    },
    body: {
      zh: 'COPQ（Cost of Poor Quality）通常分内部失败（报废、返工）、外部失败（退货、索赔、失销）、鉴定（检验）和预防。项目不需要精确到会计科目，但要有数量级：每周加急空运多少钱、缺货损失多少。Green Belt 用 COPQ 和 Champion 对话，而不是只报 p 值。注意：检验成本下降如果伴随逃逸上升，总 COPQ 可能变差。',
      en: 'COPQ splits internal failure (scrap, rework), external failure (returns, claims, lost sales), appraisal (inspection), and prevention. You do not need ledger precision, but you need order of magnitude: weekly air expedites, stock-out loss. Green Belts talk to Champions in COPQ, not p-values. Watch: cutting inspection while escapes rise can worsen total COPQ.',
    },
    whenToUse: {
      zh: '立项答辩、排优先级、改进后算收益。',
      en: 'Charter defense, prioritization, and benefit tracking after Improve.',
    },
    scExample: {
      zh: '来料不良导致的线边停线、拆包分拣、额外检验和空运补货，四项加总才是真实 COPQ，而不仅是退货单金额。',
      en: 'True incoming COPQ includes line-down time, unpack-and-sort, extra inspection, and air replenishment — not just the debit-note value.',
    },
    formula: String.raw`\mathrm{COPQ} \approx C_{\mathrm{internal}} + C_{\mathrm{external}} + C_{\mathrm{appraisal}} + C_{\mathrm{prevention}}`,
    flashcard: {
      front: { zh: 'COPQ 四类成本？', en: 'Four COPQ buckets?' },
      back: {
        zh: '内部失败、外部失败、鉴定、预防。',
        en: 'Internal failure, external failure, appraisal, prevention.',
      },
    },
  },
]
