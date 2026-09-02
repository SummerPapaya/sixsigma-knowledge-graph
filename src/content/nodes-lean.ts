import type { KnowledgeNode } from './types'

export const leanNodes: KnowledgeNode[] = [
  {
    id: 'lean-six-sigma',
    kind: 'concept',
    beltMin: 'white',
    domains: ['six-sigma', 'lean'],
    title: { zh: '精益六西格玛', en: 'Lean Six Sigma' },
    blurb: {
      zh: '精益减少浪费与停滞，六西格玛减少变异；多数供应链问题两者都要。',
      en: 'Lean cuts waste and stagnation; Six Sigma cuts variation. Most supply-chain problems need both.',
    },
    body: {
      zh: '精益问「步骤是否创造价值、流动是否顺」；六西格玛问「结果是否稳定可预测」。只精益不控变异，流动会周期性崩溃；只六西格玛不看流动，可能把一个浪费严重的过程做得很稳定。实践中用 VSM 找停滞，用 DMAIC 打关键瓶颈的变异。',
      en: 'Lean asks whether steps create value and whether work flows; Six Sigma asks whether the result is stable and predictable. Lean without variation control yields periodic collapse; Six Sigma without flow can stabilize a wasteful process. In practice, VSM finds stagnation; DMAIC attacks variation at the constraint.',
    },
    whenToUse: {
      zh: '既有排队等待又有质量/交期波动时。',
      en: 'When you have both queues and quality/lead-time swing.',
    },
    scExample: {
      zh: '拣货等待（浪费）用波次与路径精益改善；拣货准确率波动用扫描防错与控制图。',
      en: 'Pick wait time (waste) via wave and path lean; pick accuracy swing via scan poka-yoke and charts.',
    },
    flashcard: {
      front: { zh: '精益和六西格玛分别主攻什么？', en: 'What do Lean and Six Sigma each attack?' },
      back: {
        zh: '精益：浪费与流动。六西格玛：变异与缺陷。',
        en: 'Lean: waste and flow. Six Sigma: variation and defects.',
      },
    },
  },
  {
    id: 'seven-wastes',
    kind: 'concept',
    beltMin: 'white',
    domains: ['lean', 'supply-chain'],
    title: { zh: '七大浪费', en: 'Seven wastes' },
    blurb: {
      zh: '运输、库存、动作、等待、过量生产、过量加工、缺陷（常加技能未用）。',
      en: 'Transport, inventory, motion, waiting, overproduction, over-processing, defects (plus unused talent).',
    },
    body: {
      zh: '七大浪费提供现场观察语言。供应链里库存和运输往往最大，但「过量加工」也很常见：重复质检、重复录入、过度包装。不要把必要的安全库存直接骂成浪费——没有能力与提前期数据时，先测量再判断。浪费清单用于 VSM 和改善想法，不替代根因分析。',
      en: 'The seven wastes are a gemba vocabulary. In supply chain, inventory and transport often dominate, but over-processing is common: double inspection, re-keying, over-pack. Do not brand necessary safety stock as waste before you have capability and lead-time data. The list feeds VSM and ideas; it does not replace root-cause analysis.',
    },
    whenToUse: {
      zh: '走现场、画 VSM、激发改进想法时。',
      en: 'Gemba walks, VSM, and idea generation.',
    },
    scExample: {
      zh: '越库本可直发的货入仓上架再拣出，是运输+库存+动作的叠加浪费。',
      en: 'Putting cross-dock freight into reserve then picking it again stacks transport, inventory, and motion waste.',
    },
    flashcard: {
      front: { zh: '七大浪费中供应链最常被忽略的是哪一类？', en: 'Which waste is most often missed in supply chain?' },
      back: {
        zh: '过量加工：重复检验、重复录入、过度包装。',
        en: 'Over-processing: double inspect, re-key, over-pack.',
      },
    },
  },
  {
    id: 'vsm',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'D',
    domains: ['lean', 'supply-chain'],
    title: { zh: '价值流图 VSM', en: 'Value-stream map' },
    blurb: {
      zh: '画出物料与信息流，标出增值时间与等待，找到真正的周期陷阱。',
      en: 'Draw material and information flow, mark value-add vs wait, and find where lead time actually hides.',
    },
    body: {
      zh: 'VSM 记录每个过程框的周期、换型、可用度、在制品和信息触发（预测、看板、MRP）。供应链 VSM 常常发现：增值的拣包装只需分钟，而订单在信用审核、等库存、等波次里躺几天。未来状态图要画拉动、超市、节拍，而不是只贴「减少等待」标语。VSM 与 SIPOC 互补：SIPOC 锁范围，VSM 锁时间。',
      en: 'A VSM records cycle time, changeover, uptime, WIP, and information triggers (forecast, kanban, MRP) per box. Supply-chain maps often show minutes of pick-pack value and days of credit check, wait-for-stock, wait-for-wave. The future-state map should show pull, supermarkets, and takt — not a slogan. VSM complements SIPOC: SIPOC locks scope, VSM locks time.',
    },
    whenToUse: {
      zh: '交期长、库存高、跨部门互相指责时。',
      en: 'Long lead times, high inventory, or departments blaming each other.',
    },
    scExample: {
      zh: '订单到发货 VSM：信用放行 18h、等分配 22h、拣装 0.4h。改进重点在信息和库存策略，不在让拣货员跑更快。',
      en: 'Order-to-ship VSM: credit 18h, allocation wait 22h, pick-pack 0.4h. Attack information and inventory policy, not picker running speed.',
    },
    flashcard: {
      front: { zh: 'VSM 上交期通常藏在哪里？', en: 'Where does lead time usually hide on a VSM?' },
      back: {
        zh: '过程之间的等待与库存三角形，而不是加工方框里。',
        en: 'In the waits and inventory triangles between boxes, not inside process boxes.',
      },
    },
  },
  {
    id: 'pull-kanban',
    kind: 'tool',
    beltMin: 'yellow',
    domains: ['lean', 'supply-chain'],
    title: { zh: '拉动与看板', en: 'Pull and kanban' },
    blurb: {
      zh: '下游消耗才补充，用看板限制在制品，减轻牛鞭。',
      en: 'Replenish only when the downstream consumes; kanban caps WIP and dampens bullwhip.',
    },
    body: {
      zh: '推动按预测往前送；拉动按实际消耗补。看板可以是实体卡、空箱或系统信号，关键是上限。超市库存是有意的缓冲，不是失败。不适合完全按单工程的一切，但适合重复性物料。拉动不能拯救一个能力不足或变异极大的供应源——那要先六西格玛。',
      en: 'Push launches from a forecast; pull replenishes from consumption. Kanban can be a card, empty bin, or system signal — the point is a cap. A supermarket is an intentional buffer, not a failure. Pull is not for every engineer-to-order job, but it fits repetitive items. Pull cannot save an incapable or wildly variable source — Six Sigma that first.',
    },
    whenToUse: {
      zh: '重复需求、超产和库存震荡明显、希望限制 WIP 时。',
      en: 'Repetitive demand, overproduction, inventory oscillation, and a need to cap WIP.',
    },
    scExample: {
      zh: '线边料用双箱看板，消耗一箱才从超市补一箱，避免按周预测一次性堆料。',
      en: 'Two-bin kanban at the line: consume one bin, refill one from the supermarket, instead of weekly forecast dumps.',
    },
    flashcard: {
      front: { zh: '看板最重要的不是卡片，而是什么？', en: 'The essential part of kanban is not the card. What is it?' },
      back: { zh: '在制品上限。', en: 'A WIP cap.' },
    },
  },
  {
    id: 'oee',
    kind: 'metric',
    beltMin: 'yellow',
    domains: ['lean', 'supply-chain'],
    title: { zh: 'OEE', en: 'OEE' },
    blurb: {
      zh: '可用率 × 表现 × 质量，用来分解设备或产线损失，不是排行榜分数。',
      en: 'Availability × performance × quality — a loss decomposition, not a leaderboard score.',
    },
    body: {
      zh: 'OEE 把损失分成停机、速度不足和缺陷。仓储里也可类比：码头门可用、装卸速度、装载差错。切勿跨不可比产线排行，也不要把 OEE 目标设成 99% 逼出隐患藏报。先定义计划生产时间里什么算停机。与六西格玛衔接：质量项对应缺陷 DPMO，可用率对应特殊因停机。',
      en: 'OEE splits losses into downtime, speed, and defects. Warehouses can analogize: dock-door availability, load speed, load errors. Do not rank incomparable lines, and do not set 99% so people hide stops. Define what counts as downtime inside planned time. Tie to Six Sigma: the quality term is defects/DPMO; availability tracks special-cause stops.',
    },
    whenToUse: {
      zh: '设备或产线是约束，需要共同语言分解损失时。',
      en: 'When a machine or line is the constraint and you need a shared loss language.',
    },
    scExample: {
      zh: '自动分拣机 OEE：堵包（可用率）、低速保安全（表现）、错分（质量）。对策完全不同。',
      en: 'Sorter OEE: jams (availability), running slow for “safety” (performance), mis-sorts (quality). Each loss needs a different fix.',
    },
    formula: String.raw`\mathrm{OEE} = A \times P \times Q`,
    flashcard: {
      front: { zh: 'OEE 三个乘数是什么？', en: 'What are OEE’s three factors?' },
      back: {
        zh: '可用率、表现（速度）、质量。',
        en: 'Availability, performance (speed), quality.',
      },
    },
  },
  {
    id: 'takt-time',
    kind: 'metric',
    beltMin: 'yellow',
    domains: ['lean', 'supply-chain'],
    title: { zh: '节拍时间', en: 'Takt time' },
    blurb: {
      zh: '可用生产时间除以客户需求，用来对齐节奏，而不是让人拼命。',
      en: 'Available time divided by customer demand — a rhythm to match, not a whip.',
    },
    body: {
      zh: '节拍告诉过程「客户要多快一件」。周期时间大于节拍就会欠交或加班；远小于节拍会过产。供应链可用日订单数定义仓内节拍，从而设计工位和波次。节拍随需求变，要用可调整的能力（弹性班次、共享工位）而不是假装需求平坦。',
      en: 'Takt says how often the customer wants one unit. Cycle time above takt means lateness or overtime; far below means overproduction. Warehouses can set takt from daily orders to design stations and waves. Takt moves with demand — use flexible capacity, do not pretend demand is flat.',
    },
    whenToUse: {
      zh: '设计产线/仓内流程、平衡工位、讨论加班根源时。',
      en: 'Designing a line or DC flow, balancing stations, or diagnosing overtime.',
    },
    scExample: {
      zh: '每日需发 4,800 单、有效作业 8h，节拍约 6 秒/单，波次设计必须满足这个节奏而不是按习惯每小时一波。',
      en: '4,800 orders in 8 effective hours → ~6 seconds per order; wave design must hit that rhythm, not “one wave an hour because we always did.”',
    },
    formula: String.raw`\mathrm{takt} = \frac{T_{\mathrm{available}}}{D_{\mathrm{customer}}}`,
    flashcard: {
      front: { zh: '节拍时间和周期时间的差别？', en: 'Takt time vs cycle time?' },
      back: {
        zh: '节拍是客户需求节奏；周期是过程实际完成一件的时间。',
        en: 'Takt is the customer rhythm; cycle time is how long the process actually takes per unit.',
      },
    },
  },
]
