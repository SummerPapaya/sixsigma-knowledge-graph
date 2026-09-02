import type { KnowledgeNode } from './types'

export const controlNodes: KnowledgeNode[] = [
  {
    id: 'control-phase',
    kind: 'phase',
    beltMin: 'white',
    dmaic: 'C',
    domains: ['six-sigma'],
    title: { zh: 'Control 控制', en: 'Control' },
    blurb: {
      zh: '把改进锁进日常：标准、监控、响应，防止项目一结束就回潮。',
      en: 'Lock the gain into daily work: standard, monitor, respond — so the process does not snap back.',
    },
    body: {
      zh: 'Control 回答：谁看什么图、多久看、越限干什么、文件在哪、审计谁负责。没有控制计划的项目只是一次活动。供应链里要把监控嵌进已有站会（日 OTIF、周 PPM），而不是另造一套没人打开的仪表盘。退出：过程主人签字，响应计划演练过至少一次。',
      en: 'Control answers who watches which chart, how often, what happens on a signal, where the document lives, and who audits. A project without a control plan was an event. In supply chain, nest monitoring into existing huddles (daily OTIF, weekly PPM) rather than an unused dashboard. Exit: process owner signs; the response plan has been rehearsed once.',
    },
    whenToUse: {
      zh: '试点已证明有效，准备移交过程主人时。',
      en: 'After a successful pilot, at handover to the process owner.',
    },
    scExample: {
      zh: '错拣率进仓经理日会：I-MR 或 p 图，连续 7 天变差则触发槽位与扫描日志检查。',
      en: 'Mis-pick rate in the DC daily huddle: I-MR or p-chart; seven bad days triggers slotting and scan-log review.',
    },
    flashcard: {
      front: { zh: 'Control 阶段的核心交付物是什么？', en: 'What is the core Control deliverable?' },
      back: {
        zh: '控制计划（含监控与响应）和更新后的标准。',
        en: 'A control plan (monitor + response) and updated standards.',
      },
    },
  },
  {
    id: 'control-charts',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'C',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '控制图', en: 'Control charts' },
    blurb: {
      zh: '用过程自己的声音设上下限，区分普通因与特殊因，而不是用规格线当控制限。',
      en: 'Let the process set its own limits so you can split common from special cause — spec lines are not control limits.',
    },
    body: {
      zh: 'I-MR 适合单件连续数据（日提前期、日 OTIF 若当连续比例需谨慎）。X̄-R/S 适合子组。p/np 用于不合格品比例，c/u 用于缺陷计数。控制限来自过程σ，规格来自客户，两者不能画成同一条线来「管理」。认图规则（单点出限、连续一侧、趋势）要事先约定，避免每天新解释。先稳再能力。',
      en: 'I-MR fits individual continuous values (daily lead time). X̄-R/S fit subgroups. p/np are for defective proportions; c/u for defect counts. Control limits come from process sigma; specs come from the customer — do not manage by drawing them as one line. Agree detection rules (one beyond, run, trend) in advance. Stability first, capability second.',
    },
    whenToUse: {
      zh: '需要持续监控 Y 或关键 X，判断是否该动手干预时。',
      en: 'When you must keep watching Y or a critical X and decide whether to intervene.',
    },
    scExample: {
      zh: '日 OTIF 用 p 图（分母为订单数）；日平均迟到分钟用 I-MR。承运人罢工是特殊因，应注释而不是立刻改仓内 SOP。',
      en: 'Daily OTIF as a p-chart (orders in the denominator); mean delay minutes as I-MR. A carrier strike is special cause: annotate, do not rewrite DC SOP.',
    },
    formula: String.raw`\mathrm{UCL},\mathrm{LCL} = \bar{x} \pm 3\hat{\sigma}`,
    pitfalls: {
      zh: '用规格当控制限；对自相关很强的数据盲目用常规图。',
      en: 'Using spec as control limits; applying vanilla charts to strongly autocorrelated data.',
    },
    flashcard: {
      front: { zh: '控制限和规格限有何不同？', en: 'Control limits vs specification limits?' },
      back: {
        zh: '控制限描述过程实际变异；规格限描述客户允许范围。',
        en: 'Control limits describe actual process variation; specs describe what the customer allows.',
      },
    },
  },
  {
    id: 'control-plan',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'C',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '控制计划', en: 'Control plan' },
    blurb: {
      zh: '一张表写清特性、规格、测量方法、样本、责任人和反应计划。',
      en: 'One table of characteristics, specs, method, sample, owner, and reaction plan.',
    },
    body: {
      zh: '控制计划把 FMEA 和控制图接到岗位。每一行：特性、规格、仪器/系统、频率、样本量、记录位置、稳定时做什么、失控时做什么。供应链行项目例子：库存准确率周循环盘、扫描合规率、温度记录。计划要短到能用，长到能审计。过程主人必须是有权改过程的人，而不是项目经理永远托管。',
      en: 'The control plan connects FMEA and charts to jobs. Each row: characteristic, spec, instrument/system, frequency, sample, record location, what to do in control, what to do out of control. Supply-chain rows: weekly cycle count accuracy, scan compliance, temperature logs. Short enough to use, long enough to audit. The owner must be able to change the process — not the project manager forever.',
    },
    whenToUse: {
      zh: '移交、审核、客户要求出示过程控制证据时。',
      en: 'Handover, audits, or a customer asking for process-control evidence.',
    },
    scExample: {
      zh: 'IQC 控制计划：AQL 方案、量具 MSA 周期、不合格升级到 8D 的时限。',
      en: 'IQC control plan: AQL scheme, gauge MSA interval, and the clock to escalate escapes into 8D.',
    },
    flashcard: {
      front: { zh: '控制计划每一行最不能缺的是什么？', en: 'What must every control-plan row include?' },
      back: {
        zh: '谁负责，以及失控时的反应计划。',
        en: 'An owner and a reaction plan for out-of-control signals.',
      },
    },
  },
  {
    id: 'standardization',
    kind: 'concept',
    beltMin: 'white',
    dmaic: 'C',
    domains: ['six-sigma', 'lean', 'supply-chain'],
    title: { zh: '标准化', en: 'Standardization' },
    blurb: {
      zh: '把试点中的新方法写成当前已知最好的工作方式，并训练到能被审计。',
      en: 'Write the pilot’s new method as the current best-known way, trained and auditable.',
    },
    body: {
      zh: '标准不是墙上海报，而是能在岗位上执行的：作业顺序、关键点、节拍、异常入口。更新要有版本、生效日和旧版回收。供应链标准常活在 WMS 配置和主数据里，文档与系统不一致等于没有标准。标准化是再改进的起点，不是终点。',
      en: 'A standard is not a wall poster; it is executable at the job: sequence, key points, takt, exception path. Version it, date it, retire the old one. Supply-chain standards often live in WMS config and master data; if the document and the system disagree, you have no standard. Standardization is the next improvement’s starting line, not the finish.',
    },
    whenToUse: {
      zh: '对策已验证，准备多班次/多站点复制时。',
      en: 'After a proven countermeasure, before copying across shifts or sites.',
    },
    scExample: {
      zh: '新的相似 SKU 隔离规则必须写入上架策略和 WMS 互锁，而不是只发邮件。',
      en: 'A new look-alike isolation rule must enter put-away strategy and WMS interlocks, not only an email.',
    },
    flashcard: {
      front: { zh: '系统配置和 SOP 不一致时，真正的标准是哪个？', en: 'If SOP and system config disagree, which is the real standard?' },
      back: {
        zh: '人们实际被系统允许做的事。必须把两者对齐。',
        en: 'What the system actually allows people to do. Align them.',
      },
    },
  },
  {
    id: 'response-plan',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'C',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '响应计划', en: 'Response plan' },
    blurb: {
      zh: '信号出现后谁在多长时间内做什么，避免控制图变成墙上的装饰。',
      en: 'Who does what, how fast, when a signal fires — so charts are not wall art.',
    },
    body: {
      zh: '响应计划按信号分级：预警（趋势）与行动（出限）。写清联系人、遏制（分选、停线、扣货）、通知客户的阈值、何时升级 8D。演练比文件重要。供应链要区分「仓内可遏制」和「货已在途」两条路径。',
      en: 'Grade signals: warning (trend) vs action (limit). Name the contact, containment (sort, stop, hold), customer-notify threshold, and when to open 8D. Drills beat documents. Supply chain needs two paths: containable in the DC vs already in transit.',
    },
    whenToUse: {
      zh: '控制图或 KPI 即将上线监控时必须同时上线。',
      en: 'Whenever a chart or KPI goes live as a monitor.',
    },
    scExample: {
      zh: '冷链温度出限：15 分钟内隔离车辆、下载记录仪、通知收货方，而不是第二天再开会。',
      en: 'Cold-chain temperature signal: isolate the trailer within 15 minutes, download the logger, notify the receiver — do not wait for tomorrow’s meeting.',
    },
    flashcard: {
      front: { zh: '响应计划为什么要演练？', en: 'Why drill a response plan?' },
      back: {
        zh: '真信号出现时没有时间找人、找权限、找遏制方法。',
        en: 'A real signal leaves no time to find people, access, or containment.',
      },
    },
  },
]
