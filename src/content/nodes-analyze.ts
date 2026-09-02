import type { KnowledgeNode } from './types'

export const analyzeNodes: KnowledgeNode[] = [
  {
    id: 'analyze-phase',
    kind: 'phase',
    beltMin: 'white',
    dmaic: 'A',
    domains: ['six-sigma'],
    title: { zh: 'Analyze 分析', en: 'Analyze' },
    blurb: {
      zh: '用数据证伪候选原因，找出少数关键 X，而不是开一次头脑风暴就结案。',
      en: 'Falsify candidate causes with data until a few critical X remain — a brainstorm is not a verdict.',
    },
    body: {
      zh: 'Analyze 把鱼骨、5 Whys、Pareto 产生的假说，变成可检验的命题。定性工具用来产生 X 列表，定量工具用来删除 X。退出标准：每个保留的根因都有证据（分层、相关、试验或过程知识），并且能连回 Y。最差的分析是「大家都觉得是人的问题」。',
      en: 'Analyze turns fishbone and 5-Whys hypotheses into testable claims. Qualitative tools generate the X list; quantitative tools delete X. Exit: every surviving cause has evidence (stratification, association, experiment, or process knowledge) and a path to Y. The worst analysis is “everyone knows it is people.”',
    },
    whenToUse: {
      zh: '基线已清楚、团队有一份候选原因清单时。',
      en: 'When the baseline is clear and the team has a candidate-cause list.',
    },
    scExample: {
      zh: 'OTIF 差：先按承运人、路线、SKU 分层，再决定是运输问题还是缺货问题，而不是同时改所有环节。',
      en: 'Poor OTIF: stratify by carrier, lane, and SKU before deciding transport vs stock-out — do not change everything at once.',
    },
    flashcard: {
      front: { zh: 'Analyze 阶段定性工具和定量工具各干什么？', en: 'In Analyze, what do qualitative vs quantitative tools do?' },
      back: {
        zh: '定性产生候选 X，定量删除或证实 X。',
        en: 'Qualitative tools generate candidate X; quantitative tools delete or confirm them.',
      },
    },
  },
  {
    id: 'fishbone',
    kind: 'tool',
    beltMin: 'white',
    dmaic: 'A',
    domains: ['six-sigma'],
    title: { zh: '鱼骨图', en: 'Fishbone' },
    blurb: {
      zh: '按人机料法环测等骨架展开可能原因，防止只盯着一个部门。',
      en: 'Fan possible causes across man, machine, material, method, measurement, environment so one department is not the whole story.',
    },
    body: {
      zh: '鱼骨图（石川图）是结构化头脑风暴。常用 6M，供应链可改成供应商、系统、库存、运输、政策、数据。规则：原因要写到可验证的一层，而不是「态度差」。鱼骨结束时应得到优先验证的 5–8 个假说，并指定每个假说的证据方法。它不证明因果。',
      en: 'A fishbone (Ishikawa) is structured brainstorming. 6M is common; supply chain can use supplier, system, inventory, transport, policy, data. Causes must be testable, not “bad attitude.” The output is 5–8 hypotheses with an evidence method each. A fishbone does not prove causation.',
    },
    whenToUse: {
      zh: '分析工作坊开场、问题明显跨职能时。',
      en: 'Opening an analyze workshop, or when the problem is clearly cross-functional.',
    },
    scExample: {
      zh: '错发鱼骨：物料（相似 SKU）、方法（波次规则）、测量（复核漏扫）、系统（主数据条码重复）。',
      en: 'Mis-ship fishbone: material (look-alike SKUs), method (wave rules), measurement (missed scan), system (duplicate barcodes).',
    },
    flashcard: {
      front: { zh: '鱼骨图完成后下一步是什么？', en: 'What comes after a fishbone?' },
      back: {
        zh: '把骨干原因变成可检验假说并收集证据，而不是直接上对策。',
        en: 'Turn bones into testable hypotheses and gather evidence — do not jump to countermeasures.',
      },
    },
  },
  {
    id: 'five-whys',
    kind: 'tool',
    beltMin: 'white',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '5 Whys', en: '5 Whys' },
    blurb: {
      zh: '沿一条因果链连续追问，直到碰到可改变的系统原因。',
      en: 'Follow one causal chain until you hit a system cause you can change.',
    },
    body: {
      zh: '5 不是魔法数字，而是防止停在第一层借口。每次 Why 必须有事实（记录、时间戳、现场），否则会编故事。对供应链事故（错发、漏装、质量逃逸）很好用，但一条链不够时要分支，并与鱼骨、数据分层交叉。停在「员工疏忽」几乎总是还没问完。',
      en: 'Five is not magic — it stops you at the first excuse. Each Why needs a fact (record, timestamp, gemba) or you invent a story. Excellent for supply-chain incidents (mis-ship, short-ship, escape), but branch when one chain is not enough, and cross-check with fishbone and data. Stopping at “operator carelessness” almost always means you stopped early.',
    },
    whenToUse: {
      zh: '单次事故、特殊因、需要快速穿透到系统漏洞时。',
      en: 'A single incident, a special cause, or a fast path to a system hole.',
    },
    scExample: {
      zh: '为什么缺货？安全库存为零。为什么为零？主数据最小补货量被改。为什么能被改？没有权限与审核。对策在主数据治理，不在催采购。',
      en: 'Why stock-out? Safety stock was zero. Why? Min order qty in master data was edited. Why allowed? No access control. The fix is master-data governance, not chasing purchasing.',
    },
    pitfalls: {
      zh: '逼问人而不是问过程；一条错误事实会带出整条错链。',
      en: 'Interrogating people instead of the process; one bad fact poisons the whole chain.',
    },
    flashcard: {
      front: { zh: '5 Whys 停在「人的疏忽」通常意味着什么？', en: 'If 5 Whys stops at “human error,” what is usually true?' },
      back: {
        zh: '还没问到允许疏忽发生的系统原因。',
        en: 'You have not reached the system condition that allowed the error.',
      },
    },
  },
  {
    id: 'pareto',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '帕累托', en: 'Pareto' },
    blurb: {
      zh: '用少数类别解释大多数损失，决定先打哪一块。',
      en: 'Let a few categories explain most of the loss so you know where to hit first.',
    },
    body: {
      zh: '帕累托把类别按损失排序并画累计百分比。关键是「损失」用什么：件数、金额、还是客户影响？来料不良按件数领先的可能是便宜螺丝，按停线分钟领先的可能是一种传感器。分类规则必须事先定义，否则现场会把杂项做成最大柱。它显示优先级，不显示因果。',
      en: 'Pareto ranks categories by loss and plots cumulative percent. The hidden choice is the loss unit: count, money, or customer impact? Incoming defects may be cheap screws by count and a sensor by line-down minutes. Define the category rule first or “other” becomes the tallest bar. Pareto prioritizes; it does not prove cause.',
    },
    whenToUse: {
      zh: '缺陷、延迟、投诉有明确分类，需要聚焦资源时。',
      en: 'When defects, delays, or complaints have clean categories and you must focus resources.',
    },
    scExample: {
      zh: '延迟订单按原因码帕累托：缺货 54%、承运人 22%、地址 9%。先打缺货，而不是平均分配项目。',
      en: 'Late orders by reason code: stock-out 54%, carrier 22%, address 9%. Attack stock-out first, do not spread the project evenly.',
    },
    flashcard: {
      front: { zh: '帕累托图不能告诉你什么？', en: 'What can a Pareto chart not tell you?' },
      back: { zh: '因果。它只排序损失来源。', en: 'Causation. It only ranks sources of loss.' },
    },
  },
  {
    id: 'scatter',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'A',
    domains: ['six-sigma'],
    title: { zh: '散点图', en: 'Scatter plot' },
    blurb: {
      zh: '看两个连续变量是否同向、反向或无关，是回归之前的眼睛。',
      en: 'See whether two continuous variables move together, apart, or not at all — the eye before regression.',
    },
    body: {
      zh: '散点图能暴露非线性、分层（其实是两组云）和异常点。相关不是因果：仓库加班时数与错发同时上升，可能都由促销爆单驱动。分层（按班次、设备、供应商着色）常常比一条总趋势更重要。Green Belt 在跑回归前必须先看散点。',
      en: 'Scatter plots reveal nonlinearity, hidden clusters, and outliers. Correlation is not causation: overtime hours and mis-ships may both be driven by a promo spike. Stratifying (color by shift, machine, supplier) often matters more than one overall trend. Green Belts look at the scatter before running regression.',
    },
    whenToUse: {
      zh: '怀疑某个连续 X 影响连续 Y 时。',
      en: 'When you suspect a continuous X affects a continuous Y.',
    },
    scExample: {
      zh: '波次大小 vs 人均拣货错误：若只在超大波次出现上翘，对策是限制波次，而不是全员培训。',
      en: 'Wave size vs mis-picks per person: if errors bend up only on huge waves, cap wave size rather than train everyone.',
    },
    flashcard: {
      front: { zh: '散点图上看到相关，能否直接当根因？', en: 'If a scatter plot shows correlation, is that a root cause?' },
      back: {
        zh: '不能。可能有混杂因素，需要分层或试验。',
        en: 'No. Confounders are possible; stratify or experiment.',
      },
    },
  },
  {
    id: 'hypothesis-testing',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'A',
    domains: ['six-sigma'],
    title: { zh: '假设检验入门', en: 'Hypothesis testing' },
    blurb: {
      zh: '用样本判断「两组没有差别」这类命题是否还站得住，而不是证明绝对真理。',
      en: 'Use samples to see whether a claim like “no difference” still stands — not to prove eternal truth.',
    },
    body: {
      zh: '先写清 H0/H1、数据类型、独立还是配对、要看的是均值、中位数、方差还是比例，再选 t / 卡方 / 比例检验等。p 值是「若 H0 为真，看到同样或更极端数据的概率」，不是「H1 为真的概率」。α=0.05 是惯例不是物理常数。实际显著（对 COPQ 有意义）比统计显著更重要。样本量过小会漏掉真差异；过大又会把无业务意义的小差异打成显著。',
      en: 'Write H0/H1, data type, independent vs paired, and whether you care about mean, median, variance, or proportion before picking t / chi-square / proportion tests. A p-value is the chance of data this extreme if H0 were true — not the probability H1 is true. α=0.05 is custom, not physics. Practical significance (COPQ) beats statistical significance. Tiny samples miss real gaps; huge samples make trivial gaps “significant.”',
    },
    whenToUse: {
      zh: '比较班次、供应商、改进前后，且数据能满足检验假设或已改用稳健方法。',
      en: 'Comparing shifts, suppliers, or before/after, when assumptions hold or a robust method is used.',
    },
    scExample: {
      zh: '新包装是否降低运输损伤：按批次记录损伤率，用比例检验或风险差，同时报告绝对减少件数。',
      en: 'Does new pack reduce transit damage? Track lot damage rates, use a proportion test or risk difference, and also report absolute units saved.',
    },
    pitfalls: {
      zh: '先看数据再选假设（p-hacking）；把 p<0.05 当成项目成功。',
      en: 'Choosing the hypothesis after seeing the data (p-hacking); treating p<0.05 as project success.',
    },
    flashcard: {
      front: { zh: 'p 值不是什么？', en: 'What is a p-value not?' },
      back: {
        zh: '不是 H1 为真的概率，也不是效应大小。',
        en: 'Not the probability H1 is true, and not effect size.',
      },
    },
  },
  {
    id: 'regression',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '回归直觉', en: 'Regression intuition' },
    blurb: {
      zh: '量化 Y 与若干 X 的关系，用于预测和抓住关键驱动，而不是堆自变量。',
      en: 'Quantify how Y moves with a few X for prediction and drivers — not to pile in every column.',
    },
    body: {
      zh: '简单线性回归先求一条可解释的线：系数符号是否符合过程知识、残差是否乱、有没有杠杆点。多元回归要防共线（例如订单量和加班高度相关）。R² 高不等于可干预：你可能只是拟合了需求季节性。供应链常用：用提前期、缺货率和波次大小解释 OTIF。先散点、再回归、再谈因果。',
      en: 'Start with a line you can explain: do signs match process knowledge, are residuals messy, are there leverage points? Multiple regression must watch collinearity (order volume vs overtime). High R² is not intervention: you may have fit seasonality. Supply-chain use: lead time, stock-out rate, and wave size explaining OTIF. Scatter, then regression, then any causal claim.',
    },
    whenToUse: {
      zh: '多个连续 X、需要排序影响力或做粗预测时。',
      en: 'Several continuous X, a need to rank influence, or a rough prediction.',
    },
    scExample: {
      zh: '安全库存模型里把需求标准差和提前期标准差当 X，缺货率当 Y，检查是否该加提前期变异项。',
      en: 'In a safety-stock model, demand sigma and lead-time sigma as X, stock-out rate as Y — see if lead-time variation deserves its own term.',
    },
    formula: String.raw`Y = \beta_0 + \beta_1 X_1 + \cdots + \beta_k X_k + \varepsilon`,
    flashcard: {
      front: { zh: '高 R² 是否等于找到了根因？', en: 'Does high R² mean you found a root cause?' },
      back: {
        zh: '不等于。拟合好可能来自混杂或季节性，干预未必有效。',
        en: 'No. A good fit may be confounding or seasonality; intervening may do nothing.',
      },
    },
  },
  {
    id: 'fmea',
    kind: 'tool',
    beltMin: 'green',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: 'FMEA', en: 'FMEA' },
    blurb: {
      zh: '在失效发生前给严重度、发生度、探测度打分，排序风险优先数。',
      en: 'Score severity, occurrence, and detection before failure, then rank risk priority.',
    },
    body: {
      zh: '过程 FMEA 列出工序、失效模式、影响、原因、现有控制，再打 S/O/D。RPN=S×O×D 只是排序辅助，不要迷信阈值；高严重度即使 RPN 中等也要先看。评分必须有团队校准的尺子，否则会变成政治数字。供应链适合：新供应商导入、新包装、新仓流程。FMEA 是分析/改进的桥梁，输出应进入控制计划。',
      en: 'A process FMEA lists steps, failure modes, effects, causes, and current controls, then scores S/O/D. RPN=S×O×D is a ranking aid, not a sacred cutoff; high severity still goes first. Calibrate the scoring rubric or RPN becomes politics. Fits new suppliers, new packs, new DC processes. FMEA bridges Analyze and Improve; its output belongs in the control plan.',
    },
    whenToUse: {
      zh: '新过程、高风险变更、客户要求 PPAP/APQP 时。',
      en: 'New processes, high-risk changes, or when customers require PPAP/APQP-like artifacts.',
    },
    scExample: {
      zh: '冷链配送 FMEA：温度探头失效（S 高）即使很少发生，也要加冗余记录仪，而不是等 RPN 破某个整数。',
      en: 'Cold-chain FMEA: a failed temperature probe is high severity even if rare — add a redundant logger rather than waiting for an RPN threshold.',
    },
    formula: String.raw`\mathrm{RPN} = S \times O \times D`,
    flashcard: {
      front: { zh: '为什么不能只靠 RPN 阈值做决策？', en: 'Why not manage only by an RPN cutoff?' },
      back: {
        zh: '高严重度低发生度可能被乘积埋没，且打分主观。',
        en: 'High severity with low occurrence can be buried by the product, and scores are subjective.',
      },
    },
  },
]
