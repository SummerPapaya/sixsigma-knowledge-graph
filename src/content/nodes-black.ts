import type { KnowledgeNode } from './types'

export const blackNodes: KnowledgeNode[] = [
  {
    id: 'black-belt-role',
    kind: 'role',
    beltMin: 'black',
    domains: ['six-sigma'],
    title: { zh: 'Black Belt 职责', en: 'Black Belt role' },
    blurb: {
      zh: '攻坚高杠杆项目，把 DOE 与建模做扎实，并辅导 Green Belt 过闸门。',
      en: 'Lead high-leverage projects, run DOE and modeling properly, and coach Green Belts through gates.',
    },
    body: {
      zh: 'Black Belt 不是「会更多软件菜单」的 Green Belt。职责有三条：亲自带交互复杂、跨职能、财务影响大的项目；把试验设计、残差诊断、非正态能力这些工具用对；每周辅导 Green Belt，而不是代写 Minitab。成功标志是过程主人能独立维持控制计划，以及被辅导者能独立过 Analyze 闸门。头衔先于项目组合，是最常见的空转。',
      en: 'A Black Belt is not a Green Belt with more menu clicks. Three jobs: lead the messy, cross-functional, high-COPQ projects; use DOE, residual diagnostics, and non-normal capability correctly; coach Green Belts weekly instead of running their software. Success is a process owner who can hold the control plan, and a coachee who can pass Analyze alone. Titles before a project slate is idle motion.',
    },
    whenToUse: {
      zh: '项目超出 Green 工具箱、需要试验或跨仓/跨供应商协调时。',
      en: 'When the problem outruns the Green toolkit, needs an experiment, or spans DCs and suppliers.',
    },
    scExample: {
      zh: '多仓 OTIF 同时变差：Green 分仓做 Pareto，Black Belt 设计跨仓对照试验并统一操作定义，避免各仓各改一版 SOP。',
      en: 'OTIF falling in several DCs: Greens Pareto locally; the Black Belt designs a cross-DC trial and one operational definition so SOP forks do not multiply.',
    },
    flashcard: {
      front: { zh: 'Black Belt 相对 Green Belt 多出来的核心职责？', en: 'What does a Black Belt add beyond Green Belt?' },
      back: {
        zh: '高杠杆项目、试验与建模深度、辅导他人过闸门——不是多画几张图。',
        en: 'High-leverage projects, experimental depth, and coaching others through gates — not extra charts.',
      },
    },
  },
  {
    id: 'coaching-green',
    kind: 'role',
    beltMin: 'black',
    domains: ['six-sigma'],
    title: { zh: '辅导 Green Belt', en: 'Coaching Green Belts' },
    blurb: {
      zh: '问问题、守闸门、改工具选择，而不是把分析包办。',
      en: 'Ask questions, hold gates, and fix tool choice — do not take over the analysis.',
    },
    body: {
      zh: '辅导节奏建议：Define 查问题陈述与基线是否同一 Y；Measure 查 MSA 是否做过；Analyze 查「证据链」而不是图表数量；Improve 查试点是否可证伪；Control 查谁在看图。每次只改一个卡点。代做回归会让对方下次仍卡在同一闸门。记录辅导日志，比转发模板更有用。',
      en: 'A useful cadence: Define — is the problem and baseline the same Y; Measure — was MSA done; Analyze — follow the evidence chain, not chart count; Improve — is the pilot falsifiable; Control — who watches the chart. Change one bottleneck per session. Doing their regression for them leaves them stuck at the same gate. A coaching log beats forwarding templates.',
    },
    whenToUse: {
      zh: '带 2–6 个 Green 项目、闸门反复打回、或工具用错类型时。',
      en: 'When you carry 2–6 Green projects, gates bounce, or the wrong tool family is in use.',
    },
    scExample: {
      zh: '仓储 Green 用 X̄-R 画日 OTIF（每天一个点）：辅导应改成 p 图或 I-MR，而不是帮他调控制限常数。',
      en: 'A warehouse Green putting daily OTIF on an X̄-R chart (one point a day): coach a p-chart or I-MR rather than tuning constants for them.',
    },
    steps: [
      { zh: '先听对方讲 Y 与决策', en: 'Hear their Y and the decision it must support' },
      { zh: '指出工具与数据类型是否匹配', en: 'Check tool vs data type' },
      { zh: '约定下次闸门的一个退出证据', en: 'Agree one exit artifact for the next gate' },
    ],
    flashcard: {
      front: { zh: '辅导 Green Belt 时最应避免什么？', en: 'What should you avoid when coaching a Green Belt?' },
      back: {
        zh: '代做分析。对方过不了下一次闸门，项目仍然依赖你。',
        en: 'Doing the analysis for them. They will fail the next gate and stay dependent.',
      },
    },
  },
  {
    id: 'change-management',
    kind: 'concept',
    beltMin: 'black',
    domains: ['six-sigma', 'lean'],
    title: { zh: '变革管理', en: 'Change management' },
    blurb: {
      zh: '统计结论要变成班次里的新习惯，需要阻力地图、试点叙事和过程主人。',
      en: 'A statistical result becomes a shift habit only with a resistance map, a pilot story, and a process owner.',
    },
    body: {
      zh: 'Black Belt 项目失败很少是因为 t 检验算错，更多是夜班不执行新扫描步骤。先画影响者：谁失去方便、谁承担风险、谁能一票否决。试点要让反对者看见「自己的指标」变好，而不是只报 p 值。培训是必要但不充分；要把新步骤写进已有站会和考核，而不是另发一本没人翻的手册。',
      en: 'Black Belt projects rarely die from a wrong t-test; they die when nights skip the new scan step. Map who loses convenience, who holds risk, who can veto. A pilot must move an opponent’s own metric, not just a p-value. Training is necessary and insufficient — embed the step in the huddle and the scorecard, not a unread binder.',
    },
    whenToUse: {
      zh: '对策改变别人的日常动作、跨部门、或历史上改进回潮时。',
      en: 'When the fix changes someone else’s daily motion, crosses functions, or past gains snapped back.',
    },
    scExample: {
      zh: '改波次规则会让拣货员走路变长、但 OTIF 上升：要先在一个班次试点并展示少返架，而不是全局切换后靠邮件宣布胜利。',
      en: 'A new wave rule may add walking but lift OTIF: pilot one shift and show fewer restows before a network cutover announced by email.',
    },
    pitfalls: {
      zh: '把变革管理当成培训课时；忽略非正式领袖（仓内老师傅）。',
      en: 'Equating change management with training hours; ignoring informal leaders on the floor.',
    },
    flashcard: {
      front: { zh: 'Black Belt 项目最常见的失败点在统计还是执行？', en: 'Do Black Belt projects usually fail in statistics or in execution?' },
      back: {
        zh: '执行。结论进不了班次习惯，控制计划就是一张纸。',
        en: 'Execution. If the finding never becomes a shift habit, the control plan is paper.',
      },
    },
  },
  {
    id: 'tollgate-review',
    kind: 'concept',
    beltMin: 'black',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: '闸门评审', en: 'Tollgate review' },
    blurb: {
      zh: '每个 DMAIC 阶段用少数退出证据过关，而不是用 PPT 页数过关。',
      en: 'Pass each DMAIC phase on a few exit artifacts — not slide count.',
    },
    body: {
      zh: '闸门是 Champion 与 Black Belt 的质量阀。Define：同一 Y、基线、目标、范围。Measure：MSA 结论、稳定的基线。Analyze：可干预的 X 及证据。Improve：试点效果与风险。Control：主人、图、响应。打回要写清缺哪一条证据，避免变成「再讲一遍故事」。Black Belt 既当过关人，也当被过关人——自己的项目同样要过闸。',
      en: 'Tollgates are the Champion/Black Belt quality valve. Define: one Y, baseline, goal, scope. Measure: MSA result and a stable baseline. Analyze: actionable X with evidence. Improve: pilot effect and risk. Control: owner, chart, response. A bounce must name the missing artifact, not ask for the story again. Black Belts sit both sides of the table — their own work gates too.',
    },
    whenToUse: {
      zh: '每个阶段结束、范围变更、或项目看起来在空转时。',
      en: 'At phase end, on scope change, or when a project is spinning.',
    },
    scExample: {
      zh: 'OTIF 项目 Measure 闸门：没有扫描时间戳 MSA，不准进入 Analyze。缺证据就打回，比带着噪声回归更便宜。',
      en: 'OTIF Measure gate: no timestamp MSA, no Analyze. Bouncing is cheaper than regressing noise.',
    },
    flashcard: {
      front: { zh: '闸门评审应该检查什么？', en: 'What should a tollgate inspect?' },
      back: {
        zh: '该阶段的退出证据（Y、MSA、可干预 X、试点、主人），不是演示是否好看。',
        en: 'That phase’s exit artifacts (Y, MSA, actionable X, pilot, owner) — not how pretty the deck is.',
      },
    },
  },
  {
    id: 'qfd',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'D',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: 'QFD 质量屋', en: 'QFD / House of Quality' },
    blurb: {
      zh: '把 VOC 翻译成可设计的 CTQ 与过程特性，并暴露权衡。',
      en: 'Translate VOC into designable CTQs and process characteristics, and surface trade-offs.',
    },
    body: {
      zh: '质量屋左侧是客户要求，天花板是技术特性，屋顶是特性之间的相关，房间里是关系强度。Black Belt 用它防止「每个部门各听一句话」。屋顶上的负相关就是必须当面做的权衡（越快拣 vs 越准拣）。QFD 是 DFSS/DMADV 的常用入口，也可在 DMAIC Define 用来锁定 Y。不要把屋子填成政治矩阵：空单元格应是「真的无关」，不是没讨论。',
      en: 'The house has customer wants on the left, technical characteristics on top, correlations on the roof, and relationship strength in the room. Black Belts use it so every function does not hear a different sentence. Negative roof correlations are the trade-offs you must make in the room (faster pick vs accurate pick). QFD is a DFSS/DMADV entry, and also a DMAIC Define lock on Y. Empty cells must mean “truly unrelated,” not “undiscussed.”',
    },
    whenToUse: {
      zh: '多声部客户要求、新产品/新仓设计、CTQ 互相打架时。',
      en: 'Conflicting customer voices, new product or DC design, or CTQs that fight each other.',
    },
    scExample: {
      zh: '电商「当日达」与「零错发」同时进质量屋：波次截止、复核工位、包装规范会在屋顶上顶牛，必须选主 Y。',
      en: 'Same-day delivery and zero mis-ships in one house: wave cutoff, audit station, and pack spec collide on the roof — pick a primary Y.',
    },
    pitfalls: {
      zh: '把评分开成民主投票；屋顶不画负相关，假装没有权衡。',
      en: 'Scoring by popular vote; leaving negative roof correlations blank to hide trade-offs.',
    },
    flashcard: {
      front: { zh: 'QFD 屋顶上的负相关意味着什么？', en: 'What does a negative roof correlation in QFD mean?' },
      back: {
        zh: '两个技术特性互相拉扯，必须做权衡，不能假装都能最大化。',
        en: 'Two characteristics pull against each other — a trade-off, not two maxima.',
      },
    },
  },
  {
    id: 'power-sample-size',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'M',
    domains: ['six-sigma'],
    title: { zh: '功效与样本量', en: 'Power and sample size' },
    blurb: {
      zh: '先规定要检出的最小有意义差异，再算 n，避免事后才发现样本不够。',
      en: 'Name the smallest difference worth finding, then compute n — do not discover underpower after the fact.',
    },
    body: {
      zh: '功效 1−β 是「差异真实存在时，检验能把它抓出来的概率」。Black Belt 要在抽样前给定：α、功效（常 80%–90%）、效应大小（来自 COPQ，不是软件默认）、方差估计。n 不够时，不显著不等于没效果。n 过大时，无业务意义的小差异也会显著。配对、比例、试验设计各有各的公式，软件可以算，但输入必须是你的，不是默认值。',
      en: 'Power 1−β is the chance of catching a real difference. Before sampling, a Black Belt sets α, power (often 80–90%), effect size from COPQ (not a software default), and a variance guess. Underpowered: non-significance ≠ no effect. Overpowered: trivial gaps look “significant.” Paired, proportion, and designed experiments have different formulas — software can compute, but the inputs must be yours.',
    },
    whenToUse: {
      zh: '改进前后对照、供应商比对、DOE 重复数决策之前。',
      en: 'Before/after tests, supplier comparisons, and choosing DOE replicates.',
    },
    scExample: {
      zh: '包装损伤率从 3.2% 降到 2.0% 才值材料加价：按此效应算批次 n，而不是「先收 30 单看看」。',
      en: 'Pack damage must fall from 3.2% to 2.0% to justify dearer material: size n to that effect, do not “collect 30 orders and see.”',
    },
    formula: String.raw`\mathrm{Power}=1-\beta`,
    pitfalls: {
      zh: '用事后功效给不显著结果洗白；效应大小拍脑袋。',
      en: 'Using post-hoc power to launder a non-significant result; inventing the effect size.',
    },
    flashcard: {
      front: { zh: '功效不足时，「不显著」应如何解读？', en: 'How should you read “not significant” when power is low?' },
      back: {
        zh: '不能当成「没有差异」，只说明这次检验分辨不了。',
        en: 'Not “no difference” — only that this test could not resolve it.',
      },
    },
  },
  {
    id: 'nested-grr',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '嵌套与破坏性 MSA', en: 'Nested and destructive MSA' },
    blurb: {
      zh: '当零件不能重复测、或操作者套在零件里时，要用嵌套/破坏性结构，不能套交叉 GR&R。',
      en: 'If a part cannot be remeasured, or operators are nested in parts, use a nested or destructive structure — not crossed GR&R.',
    },
    body: {
      zh: '标准交叉 GR&R 假设每个操作者都能重复测同一件。破坏性试验（拉力、开启力、一次性温度标签）违反这一条。嵌套设计里，零件属于某操作者，不能把再现性当成交叉项来拆。Black Belt 要先画测量结构：谁测谁、能否重复、是否破坏，再选模型。乱套交叉 ANOVA 会把破坏性噪声当成过程能力。',
      en: 'Crossed GR&R assumes every operator can remeasure the same part. Destructive tests (pull, opening force, one-shot temperature labels) break that. In nested designs a part belongs to an operator; reproducibility is not a crossed term. Draw the structure first: who measures what, can you repeat, is it destroyed — then pick the model. A crossed ANOVA on destructive noise will be sold as process capability.',
    },
    whenToUse: {
      zh: '破坏性检验、不可重复的物流计时、操作者固定在产线/月台时。',
      en: 'Destructive tests, one-shot logistics timestamps, or operators fixed to a line or dock.',
    },
    scExample: {
      zh: '纸箱跌落试验每箱只能摔一次：用同批次相邻箱作为「重复」的破坏性 MSA，而不是假装同一箱摔三次。',
      en: 'A drop test destroys the carton: use adjacent cartons from the same lot as destructive “repeats,” do not pretend one box was dropped three times.',
    },
    pitfalls: {
      zh: '破坏性数据硬套交叉 GR&R；把批次差当成重复性。',
      en: 'Forcing crossed GR&R on destructive data; treating lot-to-lot gap as repeatability.',
    },
    flashcard: {
      front: { zh: '何时不能用交叉 GR&R？', en: 'When is crossed GR&R the wrong MSA?' },
      back: {
        zh: '零件被破坏或无法重复测量，或操作者嵌套在零件/工位里。',
        en: 'When the part is destroyed or cannot be remeasured, or operators are nested in parts or stations.',
      },
    },
  },
  {
    id: 'nonnormal-capability',
    kind: 'metric',
    beltMin: 'black',
    dmaic: 'M',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '非正态过程能力', en: 'Non-normal capability' },
    blurb: {
      zh: '偏态数据不要硬套正态 Cpk；用变换或基于百分位的能力。',
      en: 'Do not force normal Cpk on skewed data — transform or use percentile capability.',
    },
    body: {
      zh: '提前期、等待时间、损伤金额常常右偏。正态 Cpk 会低估尾部风险。路径：先确认稳定；再看分布（对数正态、Weibull 等）；Box–Cox 或 Johnson 变换后算能力，或直接用 P0.135 / P99.865 对照规格。向管理层仍要翻译成「超规格比例」，不要只丢一个变换后的 Cpk。变换不可反推时，百分位法更诚实。',
      en: 'Lead time, wait time, and damage cost are often right-skewed. Normal Cpk understates tail risk. Path: confirm stability; identify a family (lognormal, Weibull); compute capability after Box–Cox or Johnson, or compare P0.135 / P99.865 to spec. Translate to “percent out of spec” for leadership — a transformed Cpk alone is opaque. If the transform will not invert, percentiles are more honest.',
    },
    whenToUse: {
      zh: '明显偏态、有物理下界（时间≥0）、正态图拖尾时。',
      en: 'Clear skew, a physical floor (time ≥ 0), or a normal plot with a heavy tail.',
    },
    scExample: {
      zh: '供应商交期中位数 8 天、但有 20 天长尾：正态 Cpk 可能看起来「还行」，百分位能力会显示计划必须加安全时间。',
      en: 'Supplier median 8 days with a 20-day tail: normal Cpk can look “fine”; percentile capability says planning still needs safety time.',
    },
    formula: String.raw`C_{pk}^{\mathrm{pct}}=\min\left(\frac{USL-P_{0.50}}{P_{99.865}-P_{0.50}},\frac{P_{0.50}-LSL}{P_{0.50}-P_{0.135}}\right)`,
    pitfalls: {
      zh: '未稳先变换；变换后忘了把规格一起变换。',
      en: 'Transforming before stability; forgetting to transform the spec with the data.',
    },
    flashcard: {
      front: { zh: '提前期这类偏态数据为什么不能直接报正态 Cpk？', en: 'Why is normal Cpk wrong for skewed lead times?' },
      back: {
        zh: '尾部风险被低估，计划会少留安全时间。',
        en: 'Tail risk is understated, so planning under-reserves safety time.',
      },
    },
  },
  {
    id: 'anova',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'A',
    domains: ['six-sigma'],
    title: { zh: '方差分析 ANOVA', en: 'ANOVA' },
    blurb: {
      zh: '比较两组以上的均值，并把变异拆到因子与误差，是 DOE 的阅读语法。',
      en: 'Compare more than two means and split variation into factors vs error — the grammar of DOE.',
    },
    body: {
      zh: '单因子 ANOVA 问「几个水平的均值是否同一总体」；双因子还能看交互。F = 因子均方 / 误差均方。前提：独立、近似正态、方差齐（或改用稳健/变换）。显著之后一定做多重比较，并看效应大小，不要停在 p。Black Belt 要把 ANOVA 表读成过程故事：班次效应大还是设备效应大。它也是 2^k 试验分析的骨架。',
      en: 'One-way ANOVA asks whether several level means share a population; two-way adds interaction. F = factor MS / error MS. Assume independence, rough normality, equal variance (or robustify/transform). After significance, multiple comparisons and effect size — do not stop at p. Read the table as a process story: shift vs machine. It is also the skeleton of 2^k analysis.',
    },
    whenToUse: {
      zh: '≥3 个班次、产线、供应商或仓，要比较均值并量化来源。',
      en: 'Three or more shifts, lines, suppliers, or DCs, comparing means and splitting sources.',
    },
    scExample: {
      zh: '三家 3PL 的门到门时效：ANOVA 看承运人效应，再看是否与货品类型交互，而不是只两两 t 检验刷 p。',
      en: 'Door-to-door time across three 3PLs: ANOVA for carrier, then interaction with commodity — not a pile of pairwise t-tests.',
    },
    formula: String.raw`F=\frac{\mathrm{MS}_{\mathrm{factor}}}{\mathrm{MS}_{\mathrm{error}}}`,
    pitfalls: {
      zh: '方差不齐仍用经典 ANOVA；显著后不做多重比较就改流程。',
      en: 'Classic ANOVA with unequal variances; changing the process after significance without pairwise follow-up.',
    },
    flashcard: {
      front: { zh: 'ANOVA 的 F 统计量在比较什么？', en: 'What is ANOVA’s F comparing?' },
      back: {
        zh: '因子导致的均方与纯误差均方。F 大说明水平间差异不像是噪声。',
        en: 'Factor mean square vs pure-error mean square. A large F says level gaps do not look like noise.',
      },
    },
  },
  {
    id: 'residual-diagnostics',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '回归残差诊断', en: 'Regression diagnostics' },
    blurb: {
      zh: '模型能不能用，看残差、杠杆点和共线，而不是只看 R²。',
      en: 'Trust a model only after residuals, leverage, and collinearity — not R² alone.',
    },
    body: {
      zh: 'Green Belt 会拟合一条线；Black Belt 要审问它。残差 vs 拟合应大致无结构；Q-Q 看尾部；Cook 距离/杠杆点找出「一个大客户订单」是否劫持了斜率；VIF 抓共线（订单量与加班）。时间序列残差若自相关，普通回归的 p 值会虚。先修模型再谈干预：漏掉二次项或交互，系数符号会反。',
      en: 'Green Belts fit a line; Black Belts interrogate it. Residuals vs fitted should look structureless; a Q-Q plot shows tails; Cook’s distance / leverage finds whether one huge order stole the slope; VIF catches collinearity (orders vs overtime). Autocorrelated residuals inflate p-values. Fix the model before intervening: a missing square or interaction can flip a sign.',
    },
    whenToUse: {
      zh: '多元回归、用模型排 X 优先级、或系数符号违反过程知识时。',
      en: 'Multiple regression, ranking X from a model, or when a sign fights process knowledge.',
    },
    scExample: {
      zh: '用波次大小、缺货 SKU 数预测错发：若两者 VIF 很高，先合成一个「拥挤指数」，再解释系数。',
      en: 'Predicting mis-ships from wave size and stock-out SKU count: if VIF is high, build one “congestion” index before reading coefficients.',
    },
    formula: String.raw`\mathrm{VIF}_j=\frac{1}{1-R_j^2}`,
    pitfalls: {
      zh: 'R² 高就上对策；删杠杆点只为了让图好看。',
      en: 'Launching a countermeasure on high R²; deleting leverage points to pretty the plot.',
    },
    flashcard: {
      front: { zh: 'VIF 高说明什么？', en: 'What does a high VIF mean?' },
      back: {
        zh: '该 X 能被其他 X 线性解释，系数不稳定，不宜单独解读。',
        en: 'That X is linearly explained by other X; the coefficient is unstable and unsafe to read alone.',
      },
    },
  },
  {
    id: 'logistic-regression',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '逻辑回归', en: 'Logistic regression' },
    blurb: {
      zh: 'Y 是通过/失败、准时/不准时这类 0-1 时，用逻辑回归而不是普通最小二乘。',
      en: 'When Y is pass/fail or on-time/late, use logistic regression — not ordinary least squares.',
    },
    body: {
      zh: '把概率 p 通过 logit 连到 X 上，系数解释为对数优势比。Black Belt 要报告优势比和校准（预测的 10% 失败是否大约发生 10%），而不是把系数当线性「百分点」。类别不平衡（缺陷 0.4%）时，准确率会骗人，看召回、精确率或对数损失。供应链里大量 Y 是二元的：破损、缺货、海关扣留。',
      en: 'A logit links probability p to X; coefficients are log odds ratios. Report odds ratios and calibration (do 10% predicted failures happen ~10% of the time), not a linear “percentage points” story. With rare defects (0.4%), accuracy lies — use recall, precision, or log loss. Many supply-chain Ys are binary: damage, stock-out, customs hold.',
    },
    whenToUse: {
      zh: '二元结果、多个混合类型 X、需要概率而不是均值时。',
      en: 'A binary outcome, mixed X, and a need for probability rather than a mean.',
    },
    scExample: {
      zh: '一票是否 OTIF：X 包括截单后下单、缺货、承运人、天气代理。输出是风险概率，用来排班复核，而不是当成线性扣分。',
      en: 'Will this order be OTIF? X: after-cutoff entry, stock-out, carrier, weather proxy. Output a risk probability for audit staffing, not a linear penalty.',
    },
    formula: String.raw`\operatorname{logit}(p)=\ln\frac{p}{1-p}=\beta_0+\beta_1 X_1+\cdots`,
    pitfalls: {
      zh: '对 0-1 的 Y 做线性回归；用准确率评价极度不平衡数据。',
      en: 'OLS on a 0–1 Y; judging rare-event models by accuracy.',
    },
    flashcard: {
      front: { zh: '为什么 OTIF 成败不宜用普通线性回归？', en: 'Why not OLS for OTIF success/failure?' },
      back: {
        zh: '预测会超出 0–1，误差方差也不齐。应使用逻辑回归。',
        en: 'Predictions wander outside 0–1 and errors are heteroskedastic. Use logistic regression.',
      },
    },
  },
  {
    id: 'full-factorial',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: '全因子试验 2^k', en: 'Full factorial 2^k' },
    blurb: {
      zh: '每个因子两水平、所有组合都做，干净地估计主效应与交互。',
      en: 'Every factor at two levels, every combination run — clean main effects and interactions.',
    },
    body: {
      zh: '2^k 是 Black Belt 的默认试验语言。k=3 只需 8 个组合（再乘重复）。随机化对抗班次混杂；区组消化已知噪声（两天、两台振动台）。中心点用来探弯曲。分析走 ANOVA：显著交互时不要解释被平均掉的主效应。Green 的「DOE 直觉」在这里落地成一张设计表。安全包络写进试验计划，现场要有中止规则。',
      en: '2^k is the Black Belt’s default experimental language. k=3 is eight combinations times replicates. Randomize against shift; block known nuisance (two days, two shakers). Center points probe curvature. Analyze with ANOVA: if an interaction is live, do not interpret an averaged-away main effect. Green “DOE intuition” becomes a design matrix here. Write the safety envelope into the plan, with a kill rule on the floor.',
    },
    whenToUse: {
      zh: '因子少（通常 ≤4）、怀疑交互、每次试验成本可承受时。',
      en: 'Few factors (usually ≤4), suspected interactions, and an affordable run cost.',
    },
    scExample: {
      zh: '填充物 × 堆码层数 × 封箱胶带类型对运输损伤：8 组合随机穿插在出货日，比 OFAT 三次试错更短也更真。',
      en: 'Fill × stack height × tape type on transit damage: eight combinations randomized across ship days beat three OFAT guesses.',
    },
    formula: String.raw`n_{\mathrm{runs}}=2^{k}\times r`,
    steps: [
      { zh: '锁定 Y、因子、水平与安全范围', en: 'Lock Y, factors, levels, safety envelope' },
      { zh: '设计表 + 随机化 + 区组', en: 'Design matrix, randomization, blocks' },
      { zh: '执行、ANOVA、解释交互', en: 'Run, ANOVA, interpret interactions' },
    ],
    flashcard: {
      front: { zh: '2^3 全因子未重复时有多少个组合？', en: 'How many combinations in an unreplicated 2³?' },
      back: {
        zh: '8。重复 r 次则 8r。',
        en: 'Eight. With r replicates, 8r.',
      },
    },
  },
  {
    id: 'fractional-factorial',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: '部分因子与分辨度', en: 'Fractional factorials and resolution' },
    blurb: {
      zh: '因子多时做全因子太贵，用 2^{k-p} 筛选，但必须说清哪些效应和哪些混杂。',
      en: 'When k is large, 2^{k-p} screens cheaper — if you state which effects are aliased.',
    },
    body: {
      zh: '部分因子牺牲完全信息换次数。分辨度 III：主效应与双向交互混杂，只适合粗筛。IV：主效应不与双向交互混杂。V：更干净。Black Belt 交付物是别名结构，不是「做了十六次所以科学」。筛选后把存活因子推进全因子或响应曲面。Plackett–Burman 也是筛选族，同样要写清假设。',
      en: 'Fractions trade information for runs. Resolution III aliases main effects with two-factors — coarse screen only. IV keeps mains clear of two-factors. V is cleaner. The deliverable is the alias structure, not “sixteen runs therefore science.” Advance survivors to a full factorial or RSM. Plackett–Burman is the same family: write the assumptions down.',
    },
    whenToUse: {
      zh: '5 个以上候选 X、先要缩小名单、试验预算紧时。',
      en: 'Five or more candidate X, a need to shrink the list, and a tight experimental budget.',
    },
    scExample: {
      zh: '包材、衬垫、封口、标签、堆码、路况代理六个因子：先 IV 分辨筛选，再对两个赢家做 2^2 加中心点。',
      en: 'Board, cushion, seal, label, stack, vibration proxy: screen at resolution IV, then a 2² plus centers on the two survivors.',
    },
    formula: String.raw`n_{\mathrm{runs}}=2^{k-p}\times r`,
    pitfalls: {
      zh: '用分辨度 III 就下工艺结论；不读别名表。',
      en: 'Issuing process conclusions from resolution III; never reading the alias table.',
    },
    flashcard: {
      front: { zh: '分辨度 III 的部分因子最大风险？', en: 'Biggest risk of a resolution III fraction?' },
      back: {
        zh: '主效应与双向交互混杂，可能把交互误当成某因子的主效应。',
        en: 'Mains are aliased with two-factor interactions — an interaction can be misread as a main effect.',
      },
    },
  },
  {
    id: 'response-surface',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'I',
    domains: ['six-sigma'],
    title: { zh: '响应曲面 RSM', en: 'Response surface methodology' },
    blurb: {
      zh: '在少数连续因子上拟合曲面，找最优或稳健操作窗，而不是只比较高低水平。',
      en: 'Fit a surface on a few continuous factors to find an optimum or a robust window — not just high vs low.',
    },
    body: {
      zh: '当 2^k 的中心点显示弯曲，或目标是「最佳温度/最佳封箱压力」时，用中心复合或 Box–Behnken 等响应曲面设计，估计二次项和交互。输出是等高线与最优区域，最好再做确认试验。多响应（损伤↓且成本↑）要用合意函数或约束优化，不要假装只有一个 Y。RSM 吃不准的因子应用筛选先杀掉。',
      en: 'When 2^k center points show curvature, or the goal is a best temperature or seal pressure, use a CCD or Box–Behnken to estimate quadratics and interactions. Deliver contours and a region, then a confirmation run. Multiple responses (damage down, cost up) need a desirability function or a constrained optimum — not a pretend single Y. Do not put fuzzy factors on an RSM; screen them off first.',
    },
    whenToUse: {
      zh: '2–4 个连续因子、已确认弯曲、要工艺窗口时。',
      en: 'Two to four continuous factors, confirmed curvature, and a need for a process window.',
    },
    scExample: {
      zh: '热缩温度 × 传送速度对封口强度与能耗：曲面上找「强度达标且能耗较低」的平台，而不是只选最高强度点。',
      en: 'Shrink temperature × belt speed on seal strength and energy: find a plateau that meets strength at lower energy, not the single peak strength.',
    },
    pitfalls: {
      zh: '因子仍在筛选阶段就上 RSM；最优点落在试验区域外还不确认。',
      en: 'Running RSM while still screening; chasing an optimum outside the design region without confirmation.',
    },
    flashcard: {
      front: { zh: '何时从 2^k 升级到响应曲面？', en: 'When do you step from 2^k to RSM?' },
      back: {
        zh: '中心点显示弯曲，或需要连续因子上的最优窗口。',
        en: 'When center points show curvature, or you need an optimum window on continuous factors.',
      },
    },
  },
  {
    id: 'ewma-cusum',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'C',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: 'EWMA / CUSUM 控制图', en: 'EWMA / CUSUM charts' },
    blurb: {
      zh: '对小而持续的偏移，比常规 3σ Shewhart 图更敏感。',
      en: 'More sensitive than a 3σ Shewhart chart to small, persistent shifts.',
    },
    body: {
      zh: 'Shewhart 图擅长抓大特殊因；对 0.5σ–1.5σ 的慢漂往往迟钝。EWMA 对历史加权平滑，CUSUM 累积偏差。两者都要先有稳定基线来标定，否则会把旧过程的慢漂当成新信号。λ、h、k 是调参，不是装饰。供应链里日 OTIF、日平均迟到分钟常有小幅系统性下滑，适合这对图，但仍要保留 Shewhart 抓暴击事件。',
      en: 'Shewhart charts catch large special causes and miss slow 0.5–1.5σ drifts. EWMA exponentially weights the past; CUSUM accumulates deviation. Both need a stable baseline or they treat old drift as a new signal. λ, h, and k are tunings, not decoration. Daily OTIF or mean delay often dies by small cuts — use these, but keep Shewhart for punches.',
    },
    whenToUse: {
      zh: '要尽早发现小偏移、数据按时间等间隔、基线已稳时。',
      en: 'When small shifts matter, data are equally spaced in time, and the baseline is stable.',
    },
    scExample: {
      zh: '承运人时效每周只差 0.8σ：p 图要很久才出点，CUSUM 会先报警，便于在旺季前换备用运力。',
      en: 'Carrier transit 0.8σ worse each week: a p-chart is late; CUSUM alarms in time to add backup capacity before peak.',
    },
    formula: String.raw`z_t=\lambda x_t+(1-\lambda)z_{t-1}`,
    pitfalls: {
      zh: '在未受控过程上直接套 EWMA；把调参当成让图「好看」。',
      en: 'EWMA on an unstable process; tuning until the chart looks pretty.',
    },
    flashcard: {
      front: { zh: 'EWMA/CUSUM 相对 Shewhart 图的长处？', en: 'EWMA/CUSUM vs Shewhart — the gain?' },
      back: {
        zh: '对小而持续的均值偏移更敏感；大冲击仍要用 Shewhart。',
        en: 'Faster on small persistent mean shifts; keep Shewhart for large shocks.',
      },
    },
  },
  {
    id: 'dfmea',
    kind: 'tool',
    beltMin: 'black',
    dmaic: 'A',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: 'DFMEA', en: 'DFMEA' },
    blurb: {
      zh: '在设计阶段对产品/包装/网络失效打分，把风险前移到图纸，而不是等量产投诉。',
      en: 'Score product, pack, or network failures in design so risk moves to the drawing — not to launch complaints.',
    },
    body: {
      zh: '过程 FMEA 看现有工序；设计 FMEA 看「还没开工的结构」。Black Belt 在 DMADV、新包装、新仓布局、新供应商接口时用 DFMEA。严重度来自客户伤害与法规，不能被发生度稀释。探测度在设计阶段往往很差（还没有过程控制），这是信号：要改设计或加防错，而不是把 D 打成 2 假装可探。输出应进入设计验证计划和后续控制计划。',
      en: 'Process FMEA studies an existing operation; DFMEA studies a structure not yet built. Use it in DMADV, new packs, new DC layouts, new supplier interfaces. Severity comes from harm and regulation and must not be diluted by occurrence. Detection is often poor in design (no process controls yet) — that is a signal to change the design or error-proof, not to score D=2. Feed design verification and later the control plan.',
    },
    whenToUse: {
      zh: '新包装、新网络、新设备规格、DFSS 项目的 Analyze/Design。',
      en: 'New pack, network, or equipment spec; DFSS Analyze/Design.',
    },
    scExample: {
      zh: '新冷链箱设计：密封条失效（S 高）在 DFMEA 里应触发双密封或变色指示剂，而不是等首月退货再 PFMEA。',
      en: 'A new cold-chain tote: seal failure (high S) should force a dual seal or color indicator in DFMEA, not a PFMEA after the first month of returns.',
    },
    formula: String.raw`\mathrm{RPN}=S\times O\times D`,
    flashcard: {
      front: { zh: 'DFMEA 和过程 FMEA 的对象有何不同？', en: 'DFMEA vs process FMEA — what is in scope?' },
      back: {
        zh: 'DFMEA 针对尚未量产的设计；PFMEA 针对正在运行的工序。',
        en: 'DFMEA is the not-yet-built design; PFMEA is the running operation.',
      },
    },
  },
]
