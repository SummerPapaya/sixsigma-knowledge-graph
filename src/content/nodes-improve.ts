import type { KnowledgeNode } from './types'

export const improveNodes: KnowledgeNode[] = [
  {
    id: 'improve-phase',
    kind: 'phase',
    beltMin: 'white',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: 'Improve 改进', en: 'Improve' },
    blurb: {
      zh: '针对已证实的 X 设计对策、评估风险、小范围试点，再决定是否铺开。',
      en: 'Design countermeasures on confirmed X, assess risk, pilot small, then decide on rollout.',
    },
    body: {
      zh: 'Improve 不是创意工作坊的同义词。每条对策要对应已证实的根因，有负责人、完成定义、风险和验证指标。先试点：选一个班次、一条产线、一个 SKU 族，比较 Y 的中心与变异，而不是只听「感觉好了」。防错优于培训。铺开前更新 SOP、主数据权限、系统配置。',
      en: 'Improve is not a synonym for a ideation workshop. Each countermeasure maps to a confirmed cause, with an owner, definition of done, risk, and verification metric. Pilot first: one shift, one line, one SKU family; compare Y center and spread, not vibes. Error-proofing beats training. Update SOP, master-data access, and system config before rollout.',
    },
    whenToUse: {
      zh: '根因已有证据，需要把对策变成可验证的过程变更。',
      en: 'When causes have evidence and you must turn ideas into testable process changes.',
    },
    scExample: {
      zh: '证实「相似 SKU 相邻」导致错拣后，先在一个巷道改槽位与灯光防错，比较错拣率，再推广全仓。',
      en: 'After proving look-alike SKUs drive mis-picks, reslot and light-pick one aisle, compare the mis-pick rate, then scale the DC.',
    },
    flashcard: {
      front: { zh: 'Improve 为什么必须试点？', en: 'Why must Improve include a pilot?' },
      back: {
        zh: '对策可能引入新失效；小范围验证比全网回滚便宜。',
        en: 'Countermeasures can create new failures; a small test is cheaper than a network rollback.',
      },
    },
  },
  {
    id: 'solution-selection',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: '对策筛选', en: 'Solution selection' },
    blurb: {
      zh: '用效果、成本、时间、风险和可控性给对策打分，避免只选最热闹的主意。',
      en: 'Score impact, cost, time, risk, and controllability so the loudest idea does not win.',
    },
    body: {
      zh: '常用 Pugh 矩阵或加权评分。权重来自章程（安全 > 质量 > 成本 或相反，取决于业务）。「再培训一次」几乎总是低杠杆。优先能改变物理或信息系统的对策：防错、槽位、权限、标准。筛选过程要留下记录，方便 Champion 理解为什么没买新设备。',
      en: 'Use a Pugh matrix or weighted score. Weights come from the charter (safety > quality > cost, or the reverse). “Train again” is almost always low leverage. Prefer changes to physics or information systems: poka-yoke, slotting, access, standards. Keep the scoring trail so the Champion sees why you did not buy a new machine.',
    },
    whenToUse: {
      zh: '有多条对策、资源有限、需要向 Champion 解释取舍时。',
      en: 'Several options, scarce resources, and a Champion who needs the trade-off.',
    },
    scExample: {
      zh: '降低运输损伤：改包装结构 vs 换承运人 vs 加保险。保险不降失效，只转移成本，评分时应低。',
      en: 'Transit damage: redesign pack vs change carrier vs buy insurance. Insurance does not reduce failure, only shifts cost — score it low.',
    },
    flashcard: {
      front: { zh: '筛选对策时，「再培训」通常排在哪里？', en: 'Where does “more training” usually rank?' },
      back: {
        zh: '低杠杆。优先改变过程、工装或系统。',
        en: 'Low leverage. Prefer process, fixture, or system changes.',
      },
    },
  },
  {
    id: 'piloting',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'I',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '试点', en: 'Piloting' },
    blurb: {
      zh: '在受控的一小片真实过程上验证对策，并预先写好成功/失败标准。',
      en: 'Test the countermeasure on a thin slice of the real process with success/fail criteria written in advance.',
    },
    body: {
      zh: '试点设计包括：范围、时长、样本、Y 的操作定义、对照（基线或平行区域）、风险刹车。避免「试点成功」只是 Hawthorne 效应：人被盯着就会暂时变好。供应链试点注意峰谷：不要只在平静周二验证，要覆盖截单高峰。失败的试点是便宜的学习，不是政治污点。',
      en: 'A pilot specifies scope, duration, sample, operational Y, a control (baseline or parallel area), and a kill switch. Beware Hawthorne: people watched temporarily improve. Supply-chain pilots must include peaks, not only quiet Tuesdays. A failed pilot is cheap learning, not a political stain.',
    },
    whenToUse: {
      zh: '对策有副作用风险、跨系统、或难以一次性回滚时。',
      en: 'When side effects are possible, systems are coupled, or rollback would hurt.',
    },
    scExample: {
      zh: '新波次算法先在一个客户渠道跑 10 个工作日，比较 OTIF、人均产线和异常单，再全仓切换。',
      en: 'Run a new wave algorithm on one channel for 10 working days; compare OTIF, lines per hour, and exceptions before DC-wide cutover.',
    },
    flashcard: {
      front: { zh: '试点开始前必须写好什么？', en: 'What must be written before a pilot starts?' },
      back: {
        zh: '成功/失败标准和风险刹车，避免事后解释。',
        en: 'Success/fail criteria and a kill switch, so results are not narrated after the fact.',
      },
    },
  },
  {
    id: 'poka-yoke',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'I',
    domains: ['six-sigma', 'lean', 'supply-chain'],
    title: { zh: '防错 Poka-yoke', en: 'Poka-yoke' },
    blurb: {
      zh: '让错误难以发生或立即被发现，而不是靠认真。',
      en: 'Make the error hard to commit or instantly visible — do not rely on being careful.',
    },
    body: {
      zh: '防错分预防型（物理干涉、系统必填、扫描互锁）和探测型（称重复核、灯光指示）。层级：消除差异 → 替代 → 简化 → 探测 → 培训。条码强制、重量复核、库位电子标签都是仓储经典防错。如果对策只是「再强调一遍 SOP」，说明还没有防错。',
      en: 'Poka-yoke is prevention (physical interference, required fields, scan interlocks) or detection (checkweigh, pick-to-light). Hierarchy: eliminate the difference → substitute → simplify → detect → train. Forced scans, checkweigh, and put-to-light are warehouse classics. If the countermeasure is “re-emphasize the SOP,” you do not yet have poka-yoke.',
    },
    whenToUse: {
      zh: '人为失误重复出现，且失误模式可被物理或系统约束。',
      en: 'When human error repeats and the mode can be constrained physically or in software.',
    },
    scExample: {
      zh: '相似 SKU 用不同箱规 + 出库称重：数量或品项错误会立刻超重/欠重，拦截在发运前。',
      en: 'Look-alike SKUs get different case weights plus checkweigh: wrong item or qty fails the scale before ship.',
    },
    flashcard: {
      front: { zh: '防错相对培训的优先级？', en: 'Poka-yoke versus training — which leads?' },
      back: {
        zh: '先防错和探测，培训放在最后一层。',
        en: 'Error-proof and detect first; training is the last layer.',
      },
    },
  },
  {
    id: 'doe',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: 'DOE 直觉', en: 'DOE intuition' },
    blurb: {
      zh: '主动改变若干 X，高效率估计主效应和交互作用，而不是一次改一个。',
      en: 'Deliberately change several X to estimate main effects and interactions — faster than one-factor-at-a-time.',
    },
    body: {
      zh: 'OFAT（一次一个因子）看不到交互：包装材料和堆码高度可能只在组合时损伤上升。全因子次数随因子指数增长；因子多时用部分因子筛选，优化再用响应曲面。Green Belt 要能：列出因子与水平、随机化、重复、认清「不能把观察数据当成做出来的实验」。真正的 2^k、别名结构和 RSM 是 Black Belt 工具。现场 DOE 必须有安全刹车。',
      en: 'OFAT misses interactions: pack material and stack height may only hurt together. Full factorials explode with factors; screening uses fractionals, optimization uses RSM. Green Belts should list factors and levels, randomize, replicate, and refuse to treat observational data as an experiment. 2^k, alias structure, and RSM are Black Belt tools. Shop-floor DOE needs a safety kill switch.',
    },
    whenToUse: {
      zh: '多个可调 X、怀疑交互、试点成本可接受时。',
      en: 'Several adjustable X, suspected interactions, and an affordable pilot.',
    },
    scExample: {
      zh: '填充物类型 × 堆码层数 × 路况代理（振动台）对损伤率的影响，比分别试三次更快更真。',
      en: 'Fill type × stack layers × a vibration proxy on damage rate beats three separate OFAT trials.',
    },
    pitfalls: {
      zh: '因子水平超出安全范围；未随机化导致班次混杂。',
      en: 'Levels outside a safe envelope; no randomization so shift confounds the effect.',
    },
    flashcard: {
      front: { zh: '一次一个因子（OFAT）的主要缺陷？', en: 'Main flaw of one-factor-at-a-time?' },
      back: {
        zh: '估计不到交互作用，且通常更慢。',
        en: 'It misses interactions and is usually slower.',
      },
    },
  },
]
