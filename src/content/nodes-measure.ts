import type { KnowledgeNode } from './types'

export const measureNodes: KnowledgeNode[] = [
  {
    id: 'measure-phase',
    kind: 'phase',
    beltMin: 'white',
    dmaic: 'M',
    domains: ['six-sigma'],
    title: { zh: 'Measure 测量', en: 'Measure' },
    blurb: {
      zh: '给 Y 一个操作定义，验证测量系统，再画基线。',
      en: 'Operationally define Y, prove the measurement system, then baseline.',
    },
    body: {
      zh: 'Measure 不是「多拉一些报表」。顺序应当是：操作定义 → 数据类型 → 抽样策略 → MSA → 基线（中心与变异）→ 过程是否稳定。不稳定就先别算 Cp/Cpk。供应链数据常来自 WMS/TMS/ERP，更要小心：时间戳时区、订单取消、重复扫描会造成假变异。退出标准：Y 可重复测量，基线有时间窗和样本量说明。',
      en: 'Measure is not “pull more reports.” Sequence: operational definition → data type → sampling → MSA → baseline (center and spread) → stability. Do not compute Cp/Cpk on an unstable process. Supply-chain data from WMS/TMS/ERP needs extra care: time zones, cancellations, and double scans create fake variation. Exit: Y is repeatably measurable; the baseline states window and sample size.',
    },
    whenToUse: {
      zh: '章程批准之后、分析根因之前。',
      en: 'After charter approval, before causal analysis.',
    },
    scExample: {
      zh: '测量「按时发运」前先规定：以 WMS 装车确认时间 vs 截单承诺，取消单是否计入分母。',
      en: 'Before measuring on-time ship: define WMS load-confirm vs cutoff, and whether cancels belong in the denominator.',
    },
    flashcard: {
      front: { zh: 'Measure 阶段在算能力指数之前必须确认什么？', en: 'What must Measure confirm before capability?' },
      back: {
        zh: '测量系统可用，且过程在统计受控（稳定）。',
        en: 'A usable measurement system and a statistically stable process.',
      },
    },
  },
  {
    id: 'operational-definition',
    kind: 'tool',
    beltMin: 'white',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '操作定义', en: 'Operational definition' },
    blurb: {
      zh: '规定如何识别、如何测量、合格与否如何判定，让两个人量出同一个数。',
      en: 'Rules for identifying, measuring, and judging pass/fail so two people get the same number.',
    },
    body: {
      zh: '操作定义包含：对象、测量仪器或系统、方法、抽样、判定准则、特例。没有它，OTIF、缺货、缺陷都会变成会议室里的五个版本。「准时」是按预约槽、按承诺日、还是按客户收货日？含不含部分交货？Green Belt 应把定义写成可审计的几行，并拿历史订单做一次对拍。',
      en: 'An operational definition covers object, instrument/system, method, sampling, decision rule, and exceptions. Without it, OTIF, stock-out, and defect become five meeting-room versions. Is “on time” the slot, the promise date, or customer receipt? Do partials count? Green Belts write a few auditable lines and reconcile them against historical orders.',
    },
    whenToUse: {
      zh: '任何 KPI 上墙之前；跨系统对账之前。',
      en: 'Before a KPI goes on a wall; before reconciling two systems.',
    },
    scExample: {
      zh: 'Fill rate：行项目完全满足才算成功，还是按件数比例？促销期间是否剔除？必须写死。',
      en: 'Fill rate: success on a fully filled line, or on unit fraction? Are promo weeks excluded? Write it down.',
    },
    pitfalls: {
      zh: '用领导口头习惯代替定义，系统一换人指标就跳。',
      en: 'Using a boss’s verbal habit as the definition so the KPI jumps when people change.',
    },
    flashcard: {
      front: { zh: '好的操作定义要让谁量都一样，这句话在防什么？', en: 'What does “two people, same number” prevent?' },
      back: {
        zh: '假变异：指标差异来自定义，而不是过程。',
        en: 'False variation: the metric moved because of definition, not the process.',
      },
    },
  },
  {
    id: 'data-types',
    kind: 'concept',
    beltMin: 'yellow',
    dmaic: 'M',
    domains: ['six-sigma'],
    title: { zh: '数据类型', en: 'Data types' },
    blurb: {
      zh: '连续与离散决定你能用哪类图、哪类检验、哪类控制图。',
      en: 'Continuous vs discrete decides charts, tests, and control-chart family.',
    },
    body: {
      zh: '连续数据（提前期小时、重量、温度）信息密度高，优先收集。离散里再分缺陷数（count）和缺陷品（pass/fail）。常见错误：把 1–5 分满意度当连续数据做均值检验却忽略其有序离散本质；或者把本可称重的质量问题只记合格/不合格，浪费信息。选型口诀：能连续则连续，否则优先计数，最后才用比例。',
      en: 'Continuous data (lead time in hours, weight, temperature) is denser — collect it when you can. Discrete splits into counts of defects and pass/fail defectives. Common errors: treating 1–5 satisfaction as continuous, or collapsing a weighable quality issue into pass/fail and throwing information away. Prefer continuous, then counts, then proportions.',
    },
    whenToUse: {
      zh: '选控制图、选假设检验、设计检查表时。',
      en: 'Choosing a control chart, a hypothesis test, or a check sheet.',
    },
    scExample: {
      zh: '迟到：优先记录「延迟分钟」，而不是只记「准/不准」——前者能做 I-MR，后者只能做 p 图且更钝。',
      en: 'Lateness: record delay minutes when possible, not only on-time yes/no — I-MR is sharper than a p-chart.',
    },
    flashcard: {
      front: { zh: '为什么优先收集连续数据？', en: 'Why prefer continuous data?' },
      back: {
        zh: '同样样本量下，连续数据对中心和变异更敏感。',
        en: 'For the same sample size, continuous data is more sensitive to center and spread.',
      },
    },
  },
  {
    id: 'sampling',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '抽样', en: 'Sampling' },
    blurb: {
      zh: '用有代表性的样本估计过程，而不是方便拿到的样本。',
      en: 'Estimate the process with a representative sample, not a convenient one.',
    },
    body: {
      zh: '抽样要回答：抽什么单元、从哪一层、抽多少、是否分层、是否按时间顺序。方便样本（只抽白班、只导出系统完整字段）会系统性地低估问题。Rational subgroup：组内尽量只含普通因，特殊因体现在组间。来料 AQL 是验收抽样，和过程控制抽样目的不同，不要混用样本量公式。',
      en: 'Sampling answers: what unit, from which stratum, how many, stratified or not, in time order or not. Convenience samples (day shift only, complete-system rows only) systematically understate problems. Rational subgroups keep common cause inside the group so special cause shows between groups. Incoming AQL is acceptance sampling — not the same purpose as process-control sampling.',
    },
    whenToUse: {
      zh: '无法全检、数据量过大、或验收批次时。',
      en: 'When 100% inspect is impossible, data is huge, or you are accepting lots.',
    },
    scExample: {
      zh: '评估拣货错误：按波次分层，覆盖夜班与促销周，而不是只导出「已复核」订单。',
      en: 'To estimate mis-picks, stratify by wave and include nights and promo weeks — do not export only “QA-checked” orders.',
    },
    pitfalls: {
      zh: '用验收抽样的 AQL 去宣称过程能力，或反过来用过程样本做批次放行。',
      en: 'Using AQL acceptance samples to claim process capability, or process samples to release lots.',
    },
    flashcard: {
      front: { zh: '什么是方便样本，为什么危险？', en: 'What is a convenience sample and why is it dangerous?' },
      back: {
        zh: '最容易拿到的数据，常漏掉夜班、异常单、未扫描记录，导致基线偏乐观。',
        en: 'The easiest data to grab; it often misses nights, exceptions, and unscanned work, so the baseline looks too good.',
      },
    },
  },
  {
    id: 'msa',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '测量系统分析 MSA', en: 'MSA' },
    blurb: {
      zh: '先证明尺子可信，再相信数据。包含偏倚、线性、稳定性和 GR&R。',
      en: 'Prove the gauge before trusting the data: bias, linearity, stability, and GR&R.',
    },
    body: {
      zh: '如果测量噪声很大，你看到的「过程变异」其实是尺子在抖。计量型 GR&R 看重复性（同一人同一件）和再现性（不同人）。计数型用属性一致性（kappa 等）。经验阈值：GR&R 占公差或过程变异的 10% 以下较理想，30% 以上通常不可接受——但要结合风险，不背数字教条。供应链里「尺子」常常是系统：扫描枪、重量复核、OTIF 时间戳、人工判定「损坏」。没做 MSA 就上控制图，等于给噪声做 SPC。',
      en: 'If measurement noise is large, “process variation” is the gauge shaking. Variable GR&R splits repeatability (same person, same part) and reproducibility (different people). Attribute studies use agreement (e.g. kappa). A common guide: GR&R under 10% of tolerance or process variation is desirable, over 30% is usually unacceptable — use risk, not dogma. In supply chain the “gauge” is often a system: scanner, checkweigher, OTIF timestamp, human damage call. SPC on an unstudied gauge charts noise.',
    },
    whenToUse: {
      zh: '新量具、新系统字段、争议数据、能力分析之前。',
      en: 'New gauges, new system fields, disputed data, and before capability.',
    },
    scExample: {
      zh: '两名质检员对同一批包装破损判定不一致，属性 MSA 会显示再现性差，OTIF 投诉分类也会跟着抖。',
      en: 'Two inspectors disagreeing on pack damage will fail attribute MSA; OTIF complaint codes will shake with them.',
    },
    formula: String.raw`\%GR\&R = \frac{\sigma_{\mathrm{measurement}}}{\sigma_{\mathrm{total}}} \times 100\%`,
    pitfalls: {
      zh: '只用校准贴纸代替 MSA；校准解决偏倚，不解决重复性。',
      en: 'Treating a calibration sticker as MSA. Calibration addresses bias, not repeatability.',
    },
    flashcard: {
      front: { zh: 'GR&R 的 R 和 R 分别指什么？', en: 'What do the two R’s in GR&R mean?' },
      back: {
        zh: 'Repeatability 重复性，Reproducibility 再现性。',
        en: 'Repeatability and Reproducibility.',
      },
    },
  },
  {
    id: 'process-capability',
    kind: 'metric',
    beltMin: 'green',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '过程能力 Cp / Cpk', en: 'Process capability Cp / Cpk' },
    blurb: {
      zh: '把过程散布与规格宽度比较；Cpk 还惩罚中心偏移。',
      en: 'Compare process spread to spec width; Cpk also penalizes off-center means.',
    },
    body: {
      zh: 'Cp 只看散布是否装得进规格；Cpk 取两侧能力的较小值，所以偏移会被抓住。前提：过程稳定、数据近似正态（或已变换）、规格真实来自客户而非内部拍脑袋。Pp/Ppk 用总体标准差，反映长期表现。供应链例子：包装重量、冷链温度、切割长度。提前期往往偏态，直接套 Cpk 会骗人，应先变换或改用百分位规格。',
      en: 'Cp asks whether spread fits the spec; Cpk takes the worse side, so a shifted mean is caught. Assumptions: stability, approximate normality (or a transform), and a real customer spec — not an internal wish. Pp/Ppk use overall sigma and describe longer-term performance. Supply-chain fits: pack weight, cold-chain temperature, cut length. Lead times are often skewed; naive Cpk lies — transform or use percentile specs.',
    },
    whenToUse: {
      zh: '有双侧或单侧规格、过程已受控、要回答「能不能稳定达标」。',
      en: 'When a spec exists, the process is in control, and you must answer “can we hit it stably?”',
    },
    scExample: {
      zh: '供应商承诺交期 10±2 天，若 Cpk < 1，计划侧必须加安全库存或换源，而不是只在合同里写「必须准时」。',
      en: 'If a supplier promises 10±2 days and Cpk < 1, planning must add safety stock or dual-source — a contract adjective will not help.',
    },
    formula: String.raw`C_p=\frac{USL-LSL}{6\sigma}\quad C_{pk}=\min\left(\frac{USL-\mu}{3\sigma},\frac{\mu-LSL}{3\sigma}\right)`,
    pitfalls: {
      zh: '对不稳定过程算 Cpk；把内部目标当成规格；忽略偏态。',
      en: 'Computing Cpk on an unstable process; treating an internal goal as spec; ignoring skewness.',
    },
    flashcard: {
      front: { zh: 'Cp 很高但 Cpk 很低说明什么？', en: 'High Cp but low Cpk means what?' },
      back: {
        zh: '散布够窄，但均值偏离规格中心。',
        en: 'Spread is tight enough, but the mean is off-center.',
      },
    },
  },
  {
    id: 'dpmo-sigma',
    kind: 'metric',
    beltMin: 'yellow',
    dmaic: 'M',
    domains: ['six-sigma'],
    title: { zh: 'DPMO 与 Sigma 水平', en: 'DPMO and sigma level' },
    blurb: {
      zh: '把缺陷率换算成百万机会缺陷数，便于跨过程比较。',
      en: 'Convert defect rates into defects per million opportunities so processes can be compared.',
    },
    body: {
      zh: 'DPMO = 缺陷数 /（单位数 × 每单位机会数）× 10^6。机会数必须诚实：一张订单若有 4 个独立出错点（缺货、错品、错址、迟交），机会就是 4，而不是把一张错单只算 1 个机会来粉饰。Sigma 水平是把 DPMO 对照标准正态的一种沟通语言，通常含 1.5σ 偏移约定——不要把它神化成物理定律。对连续过程，优先报告 Cpk 和缺陷比例，DPMO 作补充。',
      en: 'DPMO = defects / (units × opportunities per unit) × 10^6. Count opportunities honestly: an order with four independent failure modes (stock-out, wrong item, wrong address, late) has four opportunities — do not hide defects by counting the whole order as one. Sigma level is a communication scale from DPMO, often with a 1.5σ shift convention — not a law of physics. For continuous processes, lead with Cpk and defect proportion; DPMO is extra.',
    },
    whenToUse: {
      zh: '跨产品线比较缺陷、向管理层用一种尺度说话时。',
      en: 'Comparing defects across lines, or speaking to leadership on one scale.',
    },
    scExample: {
      zh: '拣货：单位=行项目，机会=SKU 正确、数量正确、库位正确。不要用「整单完美」一个机会去报虚假的六西格玛。',
      en: 'Picking: unit = line, opportunities = right SKU, qty, location. Do not report fake Six Sigma by using “perfect order” as a single opportunity.',
    },
    formula: String.raw`\mathrm{DPMO}=\frac{D}{N \times O}\times 10^{6}`,
    flashcard: {
      front: { zh: 'DPMO 公式里的 O 指什么？为什么容易被滥用？', en: 'What is O in DPMO, and how is it abused?' },
      back: {
        zh: '每个单位的缺陷机会数。把 O 故意做大，DPMO 会好看。',
        en: 'Opportunities per unit. Inflating O makes DPMO look better.',
      },
    },
  },
]
