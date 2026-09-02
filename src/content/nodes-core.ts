import type { KnowledgeNode } from './types'

export const coreNodes: KnowledgeNode[] = [
  {
    id: 'six-sigma',
    kind: 'concept',
    beltMin: 'white',
    domains: ['six-sigma'],
    title: { zh: '六西格玛', en: 'Six Sigma' },
    blurb: {
      zh: '用数据减少过程变异，把缺陷压到接近百万分之三点四的纪律。',
      en: 'A discipline for cutting process variation until defects approach 3.4 per million opportunities.',
    },
    body: {
      zh: '六西格玛不是口号，而是一套把问题翻译成 Y = f(X) 的方法：先锁定对客户重要的 Y，再找出并控制真正驱动它的 X。它同时包含统计工具、项目结构和角色体系。对 White Belt，记住三件事：变异有代价、决策要有数据、改进要能维持。Green Belt 开始亲自带 DMAIC 项目；统计是手段，不是目的。',
      en: 'Six Sigma translates a messy problem into Y = f(X): lock the customer-critical Y, then find and control the X that actually drive it. It is statistics plus project structure plus roles. White Belts need three ideas: variation costs money, decisions need data, gains must hold. Green Belts lead DMAIC projects; statistics are a means, not the point.',
    },
    whenToUse: {
      zh: '缺陷、周期、准时率等结果反复波动，靠经验救火无效时。',
      en: 'When defects, cycle time, or on-time performance keep swinging and firefighting is not working.',
    },
    scExample: {
      zh: '仓配准时率在 82%–97% 间乱跳：先定义 OTIF，再量入库、拣货、承运人延误这些 X，而不是只催司机。',
      en: 'Warehouse OTIF jumping between 82% and 97%: define OTIF, then measure inbound, pick, and carrier delay as X — do not just chase drivers.',
    },
    pitfalls: {
      zh: '把六西格玛当成图表大赛，或在过程尚未稳定时就计算能力指数。',
      en: 'Treating it as a chart contest, or computing capability on an unstable process.',
    },
    flashcard: {
      front: { zh: '六西格玛要解决的核心对象是什么？', en: 'What is the core object Six Sigma attacks?' },
      back: {
        zh: '过程变异。目标是让关键输出 Y 稳定地落在客户规格内。',
        en: 'Process variation — so the critical Y stays inside customer specs.',
      },
    },
  },
  {
    id: 'dmaic',
    kind: 'phase',
    beltMin: 'white',
    domains: ['six-sigma'],
    title: { zh: 'DMAIC', en: 'DMAIC' },
    blurb: {
      zh: '定义—测量—分析—改进—控制，改进已有过程的标准路径。',
      en: 'Define–Measure–Analyze–Improve–Control: the path for improving an existing process.',
    },
    body: {
      zh: 'DMAIC 强迫团队按顺序回答五个问题：要解决谁的什么问题、如何测量现状、根因是什么、对策是否有效、如何防止回潮。跳步是最常见的失败模式：没有操作定义就分析，没有试点就铺开，没有控制计划就结项。每个阶段都有退出标准，不是开完会就算过关。',
      en: 'DMAIC forces five questions in order: whose problem, how we measure the baseline, what the root causes are, whether countermeasures work, and how we stop backsliding. Skipping steps is the usual failure: analyzing without operational definitions, rolling out without a pilot, closing without a control plan. Each phase has exit criteria — a meeting is not a gate.',
    },
    whenToUse: {
      zh: '已有过程，问题可测量，需要结构性改进而非全新设计。',
      en: 'Existing process, measurable problem, structured improvement rather than a clean-sheet design.',
    },
    scExample: {
      zh: '供应商来料不良居高不下：D 写清 PPM 与哪一类零件；M 校准 IQC；A 分清是供应商过程还是运输损伤；I 试点新包装；C 把抽检与反馈写进控制计划。',
      en: 'High incoming PPM: Define which part and PPM; Measure with calibrated IQC; Analyze supplier process vs transit damage; Improve with a packaging pilot; Control via inspection and feedback in the control plan.',
    },
    steps: [
      { zh: 'Define：问题、范围、客户、目标', en: 'Define: problem, scope, customer, goal' },
      { zh: 'Measure：操作定义、基线、测量系统', en: 'Measure: operational definition, baseline, measurement system' },
      { zh: 'Analyze：根因、数据证据、优先级', en: 'Analyze: root causes, evidence, priority' },
      { zh: 'Improve：对策、试点、风险', en: 'Improve: countermeasures, pilot, risk' },
      { zh: 'Control：标准化、监控、响应', en: 'Control: standardize, monitor, respond' },
    ],
    flashcard: {
      front: { zh: 'DMAIC 五个字母依次代表什么？', en: 'What do D-M-A-I-C stand for?' },
      back: {
        zh: 'Define, Measure, Analyze, Improve, Control（定义、测量、分析、改进、控制）。',
        en: 'Define, Measure, Analyze, Improve, Control.',
      },
    },
  },
  {
    id: 'dmadv',
    kind: 'concept',
    beltMin: 'yellow',
    domains: ['six-sigma'],
    title: { zh: 'DMADV / DFSS', en: 'DMADV / DFSS' },
    blurb: {
      zh: '为新产品或新过程设计质量，而不是修补旧过程。',
      en: 'Design quality into a new product or process instead of patching an old one.',
    },
    body: {
      zh: '当过程不存在、或旧过程架构已无法满足规格时，用 DMADV（Define, Measure, Analyze, Design, Verify），也常称 DFSS。它和 DMAIC 的分界：你是在优化一条已有价值流，还是在画一条新的。供应链里常见于新仓、新线路、新包装规范——先设计防错与能力，再上线，而不是上线后再做六西格玛项目。',
      en: 'When the process does not exist, or the old architecture cannot hit spec, use DMADV (Define, Measure, Analyze, Design, Verify), often called DFSS. The fork from DMAIC: are you optimizing an existing value stream or drawing a new one? In supply chain this shows up as a new warehouse, lane, or pack spec — design error-proofing and capability before go-live.',
    },
    whenToUse: {
      zh: '新产品导入、新仓/新线路设计、规格已超出当前过程能力。',
      en: 'NPI, new warehouse or lane design, or specs beyond current process capability.',
    },
    scExample: {
      zh: '新电商仓的波次逻辑和库位规则应在上线前用 DMADV 验证拣货路径与错发风险，而不是开仓后再 DMAIC。',
      en: 'Wave logic and slotting for a new e-commerce DC should be verified with DMADV before go-live, not DMAIC-ed after the first month of mis-picks.',
    },
    pitfalls: {
      zh: '把 DMAIC 硬套在「还没有过程」的问题上，导致测量阶段无数据可采。',
      en: 'Forcing DMAIC onto a problem with no process yet, so Measure has nothing to sample.',
    },
    flashcard: {
      front: { zh: 'DMAIC 和 DMADV 怎么选？', en: 'DMAIC or DMADV — how do you choose?' },
      back: {
        zh: '已有过程用 DMAIC；新设计或旧架构无法达标用 DMADV/DFSS。',
        en: 'Existing process → DMAIC. New design or architecture that cannot hit spec → DMADV/DFSS.',
      },
    },
  },
  {
    id: 'belt-roles',
    kind: 'role',
    beltMin: 'white',
    domains: ['six-sigma'],
    title: { zh: 'Belt 角色', en: 'Belt roles' },
    blurb: {
      zh: 'White 知情、Yellow 参与、Green 带项目、Black 攻坚与辅导、MBB 部署体系。',
      en: 'White aware, Yellow contributes, Green leads projects, Black tackles hard cases and coaches, MBB deploys the system.',
    },
    body: {
      zh: '带级描述的是职责深度，不是身份勋章。White：能讲 DMAIC 和基本浪费。Yellow：在项目中收集数据、参与鱼骨和试点。Green：独立带中等复杂度项目，会用能力分析、基本假设检验和控制图。Black：攻坚高杠杆项目，把 DOE 与诊断做对，并辅导 Green Belt 过闸门。Master Black：设计部署体系、管项目组合、培养 Black Belt 与 Champion，让改进在网络里可复制。工作中先问「这个项目谁拥有 Y、谁改 X」，再问带级头衔。',
      en: 'Belts describe depth of duty, not rank jewelry. White: can explain DMAIC and basic waste. Yellow: collects data, joins fishbones and pilots. Green: leads medium projects with capability, basic hypothesis tests, and control charts. Black: leads high-leverage work, runs DOE and diagnostics properly, and coaches Green Belts through gates. Master Black: designs the deployment, runs the portfolio, and grows Black Belts and Champions so gains clone across the network. At work, ask who owns Y and who can change X before asking about titles.',
    },
    whenToUse: {
      zh: '组队、分工、判断自己该学到哪一层工具。',
      en: 'Staffing a project, splitting work, or deciding how deep your toolkit should go.',
    },
    scExample: {
      zh: 'OTIF 改善：计划员做 Yellow 数据采集，仓储主管做 Green 项目负责人，质量经理做 Champion 扫清跨部门障碍。',
      en: 'OTIF work: planner as Yellow data collector, warehouse supervisor as Green lead, quality manager as Champion to clear cross-functional blocks.',
    },
    flashcard: {
      front: { zh: 'Green Belt 和 Yellow Belt 最关键的差别？', en: 'Key difference between Green and Yellow Belt?' },
      back: {
        zh: 'Yellow 参与项目；Green 对项目结果负责，能独立走完 DMAIC 并使用核心统计工具。',
        en: 'Yellow contributes; Green owns the outcome and can run DMAIC with core statistical tools.',
      },
    },
  },
  {
    id: 'variation',
    kind: 'concept',
    beltMin: 'white',
    domains: ['six-sigma'],
    title: { zh: '变异：普通因与特殊因', en: 'Variation: common vs special cause' },
    blurb: {
      zh: '先判断波动来自系统本身还是外来冲击，再决定改系统还是查事件。',
      en: 'Decide whether swing is the system or a shock — then either change the system or hunt the event.',
    },
    body: {
      zh: '休哈特把变异分成普通原因（过程固有）和特殊原因（可指认的事件）。对普通因去「查人」只会增加恐惧和更多变异；对特殊因去「改流程」会浪费资源。控制图的首要用途就是做这个分类。供应链日常里：某一天暴雪导致迟到是特殊因；每周五准时率都掉是普通因（班次、截单、承运人习惯）。',
      en: 'Shewhart split variation into common cause (inherent) and special cause (assignable events). Hunting people for common cause adds fear and more variation; rewriting the process for a one-off shock wastes effort. Control charts exist first to make this split. In supply chain: a blizzard delay is special cause; OTIF dropping every Friday is common cause (shift, cutoff, carrier habit).',
    },
    whenToUse: {
      zh: '任何「为什么今天又差了」的讨论之前。',
      en: 'Before any discussion of “why was today bad again?”',
    },
    scExample: {
      zh: '日发货量控制图出现单点跌破下限：先查当天系统宕机或车辆事故，而不是立刻改拣货标准作业。',
      en: 'A single day below the shipping-volume control limit: check a system outage or a wreck that day, do not rewrite pick SOP yet.',
    },
    pitfalls: {
      zh: '把所有异常都当特殊因，或反过来用「过程就是这样」掩盖可查的事故。',
      en: 'Treating every blip as special cause — or hiding a real incident behind “that’s just the process.”',
    },
    flashcard: {
      front: { zh: '普通原因变异该怎么处理？', en: 'How do you treat common-cause variation?' },
      back: {
        zh: '改系统本身（流程、规格、能力），不要针对单次结果问责。',
        en: 'Change the system (process, specs, capability). Do not punish a single result.',
      },
    },
  },
  {
    id: 'y-equals-fx',
    kind: 'concept',
    beltMin: 'white',
    domains: ['six-sigma'],
    title: { zh: 'Y = f(X)', en: 'Y = f(X)' },
    blurb: {
      zh: '结果 Y 由少数关键输入 X 决定；项目要找并控制这些 X。',
      en: 'Outcome Y is driven by a few critical inputs X; the project finds and controls those X.',
    },
    body: {
      zh: '把「质量差」翻译成可操作的方程：Y 必须可测量、有规格；X 必须可调节。Green Belt 的分析阶段就是在候选 X 里用数据证伪。供应链里 Y 常常是 OTIF、PPM、库存周转；X 可能是供应商提前期变异、质检漏检率、波次大小。如果团队说不清 Y 的操作定义，后面所有统计都在空转。',
      en: 'Translate “bad quality” into an operable equation: Y must be measurable with a spec; X must be adjustable. Analyze is where a Green Belt falsifies candidate X with data. In supply chain Y is often OTIF, PPM, or turns; X may be supplier lead-time variation, inspection escape, or wave size. If the team cannot operationally define Y, later statistics spin in place.',
    },
    whenToUse: {
      zh: '立项第一周：写清一个 Y 和一组候选 X。',
      en: 'Week one of a project: write one Y and a set of candidate X.',
    },
    scExample: {
      zh: 'Y = 订单完美履约率；候选 X = 库存准确率、拣货准确率、承运人准点、地址主数据。',
      en: 'Y = perfect order rate; candidate X = inventory accuracy, pick accuracy, carrier punctuality, address master data.',
    },
    flashcard: {
      front: { zh: '为什么必须先定义 Y 再找 X？', en: 'Why define Y before hunting X?' },
      back: {
        zh: '没有操作化的 Y，就无法测量基线、无法判断改进是否成功。',
        en: 'Without an operational Y you cannot baseline or tell if improvement worked.',
      },
    },
  },
]
