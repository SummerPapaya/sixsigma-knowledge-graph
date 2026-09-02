import type { KnowledgeNode } from './types'

export const mbbNodes: KnowledgeNode[] = [
  {
    id: 'mbb-role',
    kind: 'role',
    beltMin: 'mbb',
    domains: ['six-sigma'],
    title: { zh: 'Master Black Belt 职责', en: 'Master Black Belt role' },
    blurb: {
      zh: '设计部署体系、管项目组合、培养 Black Belt，而不是再多做一个超级项目。',
      en: 'Design the deployment, run the project portfolio, and grow Black Belts — not one more super-project.',
    },
    body: {
      zh: 'MBB 的产品是系统：哪些问题准进管道、闸门标准是什么、谁辅导谁、利益如何入账。自己下场做 DOE 可以，但不能替代组合管理。成功标志是：离开你之后，Black Belt 仍能过闸、Champion 仍能杀差项目、财务仍认同一套利益口径。把 MBB 当成「最强分析师」是最常见的错配——分析产能会上升，组织能力不会。',
      en: 'An MBB ships a system: what enters the pipeline, what a gate requires, who coaches whom, how benefits hit the books. Doing DOE yourself is allowed; it does not replace portfolio work. Success: after you leave, Black Belts still pass gates, Champions still kill weak projects, Finance still shares one benefit definition. Casting MBB as “strongest analyst” raises analysis capacity and not organizational capacity.',
    },
    whenToUse: {
      zh: '要从项目明星切换到可复制的部署，或 Black Belt 各自为战时。',
      en: 'When you must move from project heroes to a repeatable deployment, or Black Belts are freelancing.',
    },
    scExample: {
      zh: '网络里五个仓各做一个 OTIF 项目、五套操作定义：MBB 先统一 Y 与闸门，再让 Black Belt 按同一章程复制，而不是再亲手做第六仓。',
      en: 'Five DCs, five OTIF projects, five operational definitions: the MBB first locks Y and gates, then has Black Belts clone one charter — not personally run a sixth DC.',
    },
    flashcard: {
      front: { zh: 'MBB 的核心交付物是项目还是体系？', en: 'Does an MBB deliver projects or a system?' },
      back: {
        zh: '体系：管道、闸门、教练与利益口径。项目是手段。',
        en: 'A system: pipeline, gates, coaching, and a benefit definition. Projects are the means.',
      },
    },
  },
  {
    id: 'coaching-black',
    kind: 'role',
    beltMin: 'mbb',
    domains: ['six-sigma'],
    title: { zh: '辅导 Black Belt', en: 'Coaching Black Belts' },
    blurb: {
      zh: '盯组合选择、闸门质量和辅导他人的能力，而不是代做回归。',
      en: 'Watch project choice, gate quality, and their ability to coach others — do not take over the regression.',
    },
    body: {
      zh: '辅导 Green 看工具是否匹配数据；辅导 Black 看：这个项目该不该存在、证据链能否过 Champion、他们有没有在代做 Green 的分析。MBB 日历里应有固定一对一，主题是决策而不是软件。若 Black Belt 的项目全是自己喜欢的统计题，组合已经失控。把辅导日志当作部署的控制计划：谁卡在哪一闸、多久未过。',
      en: 'Coaching Greens is tool-to-data fit. Coaching Blacks is: should this project exist, will the evidence survive a Champion, are they doing the Green’s analysis. Put standing 1:1s on the MBB calendar; the topic is decisions, not software. If every Black Belt project is a pet statistics puzzle, the portfolio is already lost. Treat the coaching log as the deployment control plan: who is stuck at which gate, and for how long.',
    },
    whenToUse: {
      zh: '带若干 Black Belt、闸门质量不齐、或他们变成专职分析外包时。',
      en: 'When you carry several Black Belts, gate quality is uneven, or they have become analysis contractors.',
    },
    scExample: {
      zh: '某 Black 连续两个包装 DOE 却从未过 Control：辅导应改项目选择（网络 OTIF）并要求过程主人签字，而不是帮他再跑一张响应曲面。',
      en: 'A Black Belt with two pack DOEs and no Control exit: change project choice (network OTIF) and require a process-owner signature — do not run another RSM for them.',
    },
    flashcard: {
      front: { zh: '辅导 Black Belt 时优先看什么？', en: 'What do you look at first when coaching a Black Belt?' },
      back: {
        zh: '项目该不该做、闸门证据、以及他们有没有把分析还给 Green。',
        en: 'Whether the project should exist, gate evidence, and whether they gave the analysis back to the Green.',
      },
    },
  },
  {
    id: 'champion-development',
    kind: 'role',
    beltMin: 'mbb',
    domains: ['six-sigma'],
    title: { zh: 'Champion 培养', en: 'Champion development' },
    blurb: {
      zh: '让业务负责人会选项目、会杀项目、会扫障碍，而不是只来剪彩。',
      en: 'Teach business owners to pick projects, kill projects, and clear blockers — not to cut ribbons.',
    },
    body: {
      zh: '没有合格 Champion，部署就是分析爱好者俱乐部。MBB 要教会他们三件事：用 COPQ 而不是用「感觉重要」立项；闸门只看退出证据；跨仓/跨供应商的障碍由他们拆，不由 Belt 求情。短工作坊加一次真闸门旁听，比发一叠幻灯片有效。Champion 换人时要重新校准，否则管道会在人事变动后塌掉。',
      en: 'Without real Champions, deployment is a hobbyist analytics club. An MBB teaches three things: charter from COPQ, not from “feels important”; gates inspect exit artifacts only; cross-DC and supplier blockers are theirs to clear, not the Belt’s to beg. A short workshop plus sitting in on one live gate beats a slide pack. Recalibrate when Champions rotate, or the pipeline collapses after the reorg.',
    },
    whenToUse: {
      zh: '新部署、Champion 只挂名、或项目因跨部门卡死时。',
      en: 'A new deployment, Champions in name only, or projects stuck across functions.',
    },
    scExample: {
      zh: '计划总监当 Champion：OTIF 项目卡在承运合同，应由他去谈条款，而不是让仓储 Green 改拣货来「补偿」承运人迟到。',
      en: 'A planning director as Champion: if OTIF is stuck on the carrier contract, they renegotiate terms — the warehouse Green does not “compensate” with faster picking.',
    },
    flashcard: {
      front: { zh: '合格 Champion 最关键的一项行为？', en: 'The one Champion behavior that matters most?' },
      back: {
        zh: '按证据过闸并亲手拆跨部门障碍，而不是只出席开幕。',
        en: 'Gate on evidence and personally clear cross-functional blocks — not just open the kickoff.',
      },
    },
  },
  {
    id: 'lss-operating-system',
    kind: 'concept',
    beltMin: 'mbb',
    domains: ['six-sigma', 'lean'],
    title: { zh: '精益六西格玛操作系统', en: 'Lean Six Sigma operating system' },
    blurb: {
      zh: '把立项、辅导、闸门、标准与站会嵌进日常经营，而不是另办一套运动。',
      en: 'Nest chartering, coaching, gates, standards, and huddles in daily management — not a parallel campaign.',
    },
    body: {
      zh: '操作系统回答：谁在何时用什么节奏看哪些 Y。MBB 把它画成一张图：年度组合 → 月度闸门 → 周辅导 → 日站会里的控制图。精益的标准作业和六西格玛的控制计划必须是同一套文件，否则现场会收到两套指令。部署失败的典型形状是「项目很忙、经营系统没变」。先改经营节奏，再堆 Belt 人数。',
      en: 'An operating system answers who reviews which Y, when, on what cadence. The MBB draws one picture: annual portfolio → monthly gates → weekly coaching → control charts in the daily huddle. Lean standard work and Six Sigma control plans must be the same artifact or the floor gets two instruction sets. The failure shape is “projects busy, the management system unchanged.” Change the operating cadence before hiring more Belts.',
    },
    whenToUse: {
      zh: '要从试点推广到网络，或项目成果进不了月经营会时。',
      en: 'When a pilot must scale across a network, or project gains never reach the monthly ops review.',
    },
    scExample: {
      zh: '仓配日会已看延误；把 OTIF p 图和响应计划嵌进去，而不是再做一个「六西格玛仪表盘」没人打开。',
      en: 'The DC huddle already reviews delays: nest the OTIF p-chart and reaction plan there, instead of a Six Sigma dashboard nobody opens.',
    },
    pitfalls: {
      zh: '平行治理（项目办一套、运营一套）；用培训人次当部署指标。',
      en: 'Parallel governance (PMO vs operations); counting trained heads as deployment.',
    },
    flashcard: {
      front: { zh: 'LSS 操作系统要避免的最大结构错误？', en: 'Biggest structural mistake in an LSS operating system?' },
      back: {
        zh: '项目治理与日常经营两张皮，改进进不了站会。',
        en: 'Project governance and daily management as two skins, so gains never enter the huddle.',
      },
    },
  },
  {
    id: 'hoshin-kanri',
    kind: 'tool',
    beltMin: 'mbb',
    dmaic: 'D',
    domains: ['six-sigma', 'lean', 'supply-chain'],
    title: { zh: 'Hoshin / 方针展开', en: 'Hoshin Kanri' },
    blurb: {
      zh: '把少数战略突破展开到过程 Y 和项目，并用Catchball对齐资源。',
      en: 'Cascade a few strategic breakthroughs into process Ys and projects, and align resources with catchball.',
    },
    body: {
      zh: 'Hoshin 不是年度 KPI 清单。MBB 帮经营层选出极少的突破（例如网络 OTIF、来料 PPM），再向下 Catchball：仓储、计划、采购各承诺可验证的 X 与项目。X 矩阵用来检查目标、项目、责任人是否互相咬合。每月回顾只问突破是否移动，不把常规波动包装成战略。没有 Hoshin，项目组合会变成部门愿望袋。',
      en: 'Hoshin is not an annual KPI dump. The MBB helps leadership pick very few breakthroughs (network OTIF, incoming PPM), then catchball downward: warehouse, planning, and purchasing each commit verifiable X and projects. An X-matrix checks that aims, projects, and owners interlock. Monthly reviews ask whether the breakthrough moved — do not dress common-cause noise as strategy. Without Hoshin, the portfolio becomes a bag of departmental wishes.',
    },
    whenToUse: {
      zh: '战略与项目脱节、每年立项上百却看不出网络级 Y 变化时。',
      en: 'When strategy and projects have decoupled, or a hundred charters leave network Ys unmoved.',
    },
    scExample: {
      zh: '公司突破是「少空运」：Hoshin 落到供应商提前期能力、安全库存策略、截单纪律三个项目，而不是每个仓再做一个 5S。',
      en: 'Breakthrough = less air freight: Hoshin lands on supplier lead-time capability, safety-stock policy, and cutoff discipline — not another 5S in every DC.',
    },
    steps: [
      { zh: '选极少突破并定义可测 Y', en: 'Pick very few breakthroughs and measurable Ys' },
      { zh: 'Catchball 到职能与仓网', en: 'Catchball to functions and the DC network' },
      { zh: '月度只回顾突破是否移动', en: 'Monthly: did the breakthrough move' },
    ],
    flashcard: {
      front: { zh: 'Hoshin 和普通年度 KPI 清单差在哪？', en: 'Hoshin vs a normal annual KPI list?' },
      back: {
        zh: '极少突破 + Catchball 对齐资源；不是把所有指标升格为战略。',
        en: 'Very few breakthroughs plus catchball for resources — not promoting every metric to strategy.',
      },
    },
  },
  {
    id: 'kpi-cascade',
    kind: 'metric',
    beltMin: 'mbb',
    dmaic: 'D',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '指标层叠', en: 'KPI cascade' },
    blurb: {
      zh: '战略 Y 必须能拆到过程 X；层叠断裂处就是虚假责任。',
      en: 'A strategic Y must decompose into process X; a broken cascade is fake accountability.',
    },
    body: {
      zh: '「提升客户满意度」若不能拆到 OTIF、完好率、响应时效，Belt 项目会对着空气打。MBB 画一层树：公司 Y → 网络 Y → 仓/供应商过程 X，每一层有操作定义和主人。层叠不是把同一个百分比抄到每个看板。冲突的 Y（速度 vs 准确）要在 Hoshin 里先权衡，否则现场会优化自己的局部指标伤害网络。',
      en: '“Improve satisfaction” that will not decompose into OTIF, damage-free rate, and response time leaves Belts punching air. The MBB draws a tree: company Y → network Y → DC/supplier process X, each with an operational definition and an owner. Cascading is not copying one percentage onto every board. Conflicting Ys (speed vs accuracy) are traded in Hoshin first, or local boards will hurt the network.',
    },
    whenToUse: {
      zh: '各仓 KPI 打架、项目对不上公司目标、或满意度无法操作化时。',
      en: 'When DC KPIs fight, projects miss company aims, or satisfaction is not operable.',
    },
    scExample: {
      zh: '公司要 OTIF，某仓考核「出货行数」：层叠断裂。应改成准时行项目，并与网络 OTIF 对拍。',
      en: 'Company OTIF vs a DC scored on lines shipped: the cascade is broken. Score on-time lines and reconcile to network OTIF.',
    },
    pitfalls: {
      zh: '层层加码（公司 95%、网络 97%、仓 99%）造成不可能的局部目标。',
      en: 'Padding at each layer (company 95%, network 97%, DC 99%) creates impossible local targets.',
    },
    flashcard: {
      front: { zh: '怎样判断 KPI 层叠是假的？', en: 'How do you spot a fake KPI cascade?' },
      back: {
        zh: '下层指标加总或对拍后解释不了上层 Y，或局部目标与网络目标冲突。',
        en: 'Lower metrics cannot reconcile to the upper Y, or local targets fight the network target.',
      },
    },
  },
  {
    id: 'project-portfolio',
    kind: 'tool',
    beltMin: 'mbb',
    dmaic: 'D',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '项目组合与筛选', en: 'Project portfolio and selection' },
    blurb: {
      zh: '用统一口径筛选、排序和杀掉项目，让稀缺的 Belt 时间打在网络杠杆上。',
      en: 'Screen, rank, and kill projects on one rubric so scarce Belt time hits network levers.',
    },
    body: {
      zh: '组合管理的核心是拒绝。MBB 设定进入标准：有操作定义的 Y、可估计的 COPQ、过程主人、90–180 天可试点。评分看财务、战略对齐、可行性，而不是谁嗓门大。明确叫停规则：闸门连续两次缺证据、Champion 消失、Y 已不可干预。管道可视化（数量、阶段、卡点）本身就是控制图。没有杀掉的组合，只是愿望清单。',
      en: 'Portfolio work is refusal. The MBB sets entry: an operationally defined Y, a COPQ estimate, a process owner, a 90–180 day pilot. Score finance, strategy fit, and feasibility — not volume. Publish kill rules: two gates missing artifacts, a vanished Champion, a Y that cannot be moved. A visual pipeline (count, stage, stall) is itself a control chart. A portfolio that never kills is a wish list.',
    },
    whenToUse: {
      zh: '立项过多、Belt 过载、或战略项目挤不进管道时。',
      en: 'Too many charters, overloaded Belts, or strategic work that cannot enter the pipe.',
    },
    scExample: {
      zh: '同时有 20 个仓内 5S 和 1 个供应商提前期能力项目：组合应杀掉大部分 5S，把 Black Belt 放在提前期——空运费在那里。',
      en: 'Twenty DC 5S projects and one supplier lead-time capability project: kill most of the 5S and put the Black Belt on lead time — that is where air freight lives.',
    },
    steps: [
      { zh: '公布进入标准与叫停规则', en: 'Publish entry criteria and kill rules' },
      { zh: '按 COPQ × 可行性排序', en: 'Rank by COPQ × feasibility' },
      { zh: '月度杀掉停滞项目并补位', en: 'Monthly: kill stalled work and refill' },
    ],
    flashcard: {
      front: { zh: '健康的项目组合一定包含什么动作？', en: 'What action must a healthy portfolio include?' },
      back: {
        zh: '杀掉不合格或停滞的项目。只进不出就不是组合管理。',
        en: 'Killing unfit or stalled projects. Inflow without kills is not portfolio management.',
      },
    },
  },
  {
    id: 'benefit-tracking',
    kind: 'metric',
    beltMin: 'mbb',
    dmaic: 'C',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '利益兑现', en: 'Benefit realization' },
    blurb: {
      zh: '和改进前基线对拍、由财务认口径，项目关闭后仍要跟踪，防止纸面百万。',
      en: 'Reconcile to the pre-project baseline, agree the definition with Finance, and keep tracking after close so paper millions do not appear.',
    },
    body: {
      zh: '利益不是项目组自己报的「潜在节约」。MBB 与财务先锁口径：现金/成本回避/收入、一次性/年度、是否已进入预算。基线必须与章程同一 Y。关闭后 3–6 个月再兑现，控制计划失效则利益作废。供应链里空运费、报废、加急加班比较好兑；「效率提升」若没有编制或产能释放，通常兑不了现。',
      en: 'Benefits are not the team’s “potential savings.” The MBB and Finance lock the definition first: cash vs cost avoidance vs revenue, one-off vs annual, in the budget or not. The baseline must be the charter Y. Re-validate 3–6 months after close; if the control plan dies, the benefit dies. Air freight, scrap, and overtime cash out; “efficiency” with no headcount or capacity released usually does not.',
    },
    whenToUse: {
      zh: '向经营层汇报部署回报、项目关闭、或怀疑利益重复计算时。',
      en: 'When reporting deployment return, closing a project, or suspecting double-counted benefits.',
    },
    scExample: {
      zh: '错发下降声称节约客服成本：若客服编制没变，财务只认减少的补货空运和退货物流，不认「潜在工时」。',
      en: 'Fewer mis-ships claimed as service-cost savings: if the service roster did not change, Finance books less reship air and returns, not “potential hours.”',
    },
    pitfalls: {
      zh: '把避免的未来支出当现金；多个项目认同一笔空运下降。',
      en: 'Booking avoided future spend as cash; several projects claiming the same air-freight drop.',
    },
    flashcard: {
      front: { zh: '利益兑现的最低标准是什么？', en: 'Minimum bar for a realized benefit?' },
      back: {
        zh: '与章程同一 Y 的基线、财务认口径、关闭后仍能在控制计划下看见。',
        en: 'The charter’s Y baseline, a Finance-agreed definition, and a post-close signal still visible under the control plan.',
      },
    },
  },
  {
    id: 'governance-standard',
    kind: 'concept',
    beltMin: 'mbb',
    dmaic: 'D',
    domains: ['six-sigma'],
    title: { zh: '组织级闸门标准', en: 'Organizational gate standard' },
    blurb: {
      zh: '全网络同一套退出证据，避免每个 Champion 各审一套故事。',
      en: 'One exit-artifact list across the network so every Champion is not inventing a private story.',
    },
    body: {
      zh: 'Black Belt 的项目闸门是一次评审；MBB 的闸门是标准。写成一页：Define / Measure / Analyze / Improve / Control 各要哪些工件（操作定义、MSA、可干预 X、试点、主人）。打回必须引用缺哪一条，禁止「再讲得生动一点」。标准太厚没人用；太薄会放行噪声回归。每年根据打回数据修订，这本身是部署的 DMAIC。',
      en: 'A Black Belt gate is one review; an MBB gate is a standard. One page: artifacts for Define / Measure / Analyze / Improve / Control (operational definition, MSA, actionable X, pilot, owner). A bounce must name the missing artifact — no “tell it more vividly.” Too thick and nobody uses it; too thin and noisy regressions pass. Revise yearly from bounce data: that is DMAIC on the deployment.',
    },
    whenToUse: {
      zh: '多位 Champion、多仓复制、闸门质量随人变化时。',
      en: 'Several Champions, multi-DC cloning, or gate quality that depends on who sits in the chair.',
    },
    scExample: {
      zh: '华东仓允许无 MSA 进 Analyze，西南仓不允许：网络 OTIF 项目会在两个标准之间撕裂。MBB 必须统一。',
      en: 'East DC lets Analyze start without MSA; West does not: a network OTIF project splits on two standards. The MBB must unify.',
    },
    flashcard: {
      front: { zh: '组织级闸门标准要写什么？', en: 'What belongs in an organizational gate standard?' },
      back: {
        zh: '每阶段的退出证据清单，以及打回必须引用缺项——不是演讲评分表。',
        en: 'Exit artifacts per phase, and a rule that bounces cite the gap — not a speaking score sheet.',
      },
    },
  },
  {
    id: 'coaching-system',
    kind: 'concept',
    beltMin: 'mbb',
    domains: ['six-sigma'],
    title: { zh: '教练体系', en: 'Coaching system' },
    blurb: {
      zh: '规定谁辅导谁、多频、用什么日志，使辅导不依赖某位英雄 MBB。',
      en: 'Define who coaches whom, how often, and in what log, so coaching does not depend on one hero MBB.',
    },
    body: {
      zh: '个人辅导很强，体系仍可能是空的。MBB 要设计负荷：一名 Black 同时辅导几个 Green、MBB 同时辅导几个 Black、缺席时谁顶上。日志字段与闸门标准对齐（卡在哪一闸、缺哪件证据）。把辅导纳入 Black Belt 的工作量，而不是业余爱好。没有体系时，你一休假，管道就停。',
      en: 'Strong personal coaching can still leave an empty system. The MBB designs load: how many Greens per Black, how many Blacks per MBB, who covers absence. Log fields match the gate standard (which gate, which missing artifact). Count coaching in the Black Belt’s workload, not as a hobby. Without a system the pipeline stops when you take leave.',
    },
    whenToUse: {
      zh: 'Belt 人数上升、辅导全靠你、或质量随辅导人波动时。',
      en: 'When Belt headcount rises, all coaching routes through you, or quality follows the coach.',
    },
    scExample: {
      zh: '三个区域 Black Belt：每人固定辅导本区域 Green，MBB 每周抽查两份闸门包，而不是所有人随时来问回归。',
      en: 'Three regional Black Belts each coach local Greens; the MBB spot-checks two gate packs a week rather than taking every regression walk-in.',
    },
    flashcard: {
      front: { zh: '教练体系和「我很会教」有何不同？', en: 'Coaching system vs “I teach well”?' },
      back: {
        zh: '有负荷、替补和与闸门对齐的日志；不依赖某一个英雄在场。',
        en: 'Load, backup, and a log aligned to gates — it does not require one hero in the room.',
      },
    },
  },
  {
    id: 'belt-pipeline',
    kind: 'role',
    beltMin: 'mbb',
    domains: ['six-sigma'],
    title: { zh: 'Belt 梯队与认证闸门', en: 'Belt pipeline and certification gates' },
    blurb: {
      zh: '认证看完成的项目与闸门证据，不看课时；梯队数量由组合需求反推。',
      en: 'Certify on finished projects and gate artifacts, not hours; size the pipeline from portfolio demand.',
    },
    body: {
      zh: '课时只产生熟悉感。Green / Black 认证应绑定：至少一个过 Control 的项目、Champion 签字、利益口径被财务看见。MBB 按组合缺口反推明年需要多少 Belt，而不是先培训一百人再找题目。认证后无人带项目，就是部署浪费。撤销机制要写明：控制计划崩了可以摘牌。',
      en: 'Classroom hours produce familiarity. Green / Black certification should bind: at least one project through Control, a Champion signature, a benefit Finance can see. The MBB back-solves next year’s Belt count from portfolio gaps — do not train a hundred people and then hunt for problems. Certified with no project is deployment scrap. Write a removal rule: a dead control plan can pull the credential.',
    },
    whenToUse: {
      zh: '要开培训班、讨论「认证标准」、或认证人数远多于在跑项目时。',
      en: 'When launching classes, debating “certification,” or certified heads dwarf active projects.',
    },
    scExample: {
      zh: '仓网明年只要 4 个跨仓 OTIF 项目：只认证能带这 4 个的人，而不是全员 Yellow 课来凑 KPI。',
      en: 'The network needs four cross-DC OTIF projects next year: certify the people who will lead those four, not a company-wide Yellow class for a training KPI.',
    },
    pitfalls: {
      zh: '用培训人次向总部交差；认证后没有项目主人。',
      en: 'Reporting trained heads to HQ; certifying people who will never own a project.',
    },
    flashcard: {
      front: { zh: 'Belt 认证最不该看的指标是什么？', en: 'The worst metric for Belt certification?' },
      back: {
        zh: '课时或培训人次。应看过闸项目与可兑现利益。',
        en: 'Hours or heads trained. Use gated projects and realizable benefits.',
      },
    },
  },
  {
    id: 'deployment-maturity',
    kind: 'metric',
    beltMin: 'mbb',
    dmaic: 'C',
    domains: ['six-sigma', 'lean'],
    title: { zh: '部署成熟度', en: 'Deployment maturity' },
    blurb: {
      zh: '用少数可观察行为给部署打分，避免用「氛围」或培训人数自欺。',
      en: 'Score the deployment on a few observable behaviors — not vibe or training headcount.',
    },
    body: {
      zh: '成熟度是诊断，不是奖状。MBB 选 5–8 条可审计项：组合有叫停、闸门引用证据、控制计划在站会、利益有财务口径、Champion 会拆障碍。每季对仓/职能打一次，用来决定下季辅导重点，而不是做文化海报。成熟度上升但网络 Y 不动，说明层叠或项目选择仍错——改那些，而不是把量表再做复杂。',
      en: 'Maturity is a diagnosis, not a trophy. The MBB picks 5–8 auditable items: the portfolio kills, gates cite artifacts, control plans live in huddles, benefits have a Finance definition, Champions clear blockers. Score DCs/functions quarterly to aim coaching — not to print a culture poster. If maturity rises and network Y does not move, the cascade or project mix is still wrong — fix those, do not sophisticate the rubric.',
    },
    whenToUse: {
      zh: '多仓比较部署质量、向经营层解释「我们走到哪一步」时。',
      en: 'Comparing deployment quality across DCs, or telling leadership how far the system has actually come.',
    },
    scExample: {
      zh: 'A 仓人人有证但 OTIF 未动；B 仓只有两个 Green 却有活的 p 图：成熟度应给 B 更高，并把 A 的培训停掉改组合。',
      en: 'DC A is fully certified and OTIF is flat; DC B has two Greens and a live p-chart: score B higher and stop A’s training in favor of portfolio work.',
    },
    flashcard: {
      front: { zh: '部署成熟度应该测量什么？', en: 'What should deployment maturity measure?' },
      back: {
        zh: '可观察的系统行为（叫停、闸门、站会、财务口径），不是气氛或证书数。',
        en: 'Observable system behaviors (kills, gates, huddles, Finance definitions) — not mood or certificates.',
      },
    },
  },
  {
    id: 'multi-site-rollout',
    kind: 'concept',
    beltMin: 'mbb',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '多基地复制', en: 'Multi-site rollout' },
    blurb: {
      zh: '先在一个仓把标准与控制计划做硬，再复制，而不是同时在全网「试点」。',
      en: 'Harden the standard and control plan in one DC, then clone — do not “pilot” the whole network at once.',
    },
    body: {
      zh: '复制失败通常因为把试点的人复制了，没把标准复制。MBB 要求：操作定义、槽位/扫描步骤、控制图规则、响应计划写成可带走的包；接收仓有过程主人而不是只有访问讲师。允许本地噪声（布局不同），不允许本地另写 Y。分波次：先同类仓，再例外仓。全网同一天切换是项目，不是部署。',
      en: 'Rollouts fail when you clone the people from the pilot, not the standard. The MBB requires a portable pack: operational definition, slot/scan steps, chart rules, reaction plan; the receiving DC has a process owner, not only a visiting trainer. Local noise (layout) is allowed; a local rewrite of Y is not. Wave similar DCs first, exceptions later. A same-day network cutover is a project, not a deployment.',
    },
    whenToUse: {
      zh: '一个仓已证明有效、要推向网络，或历史上「各仓各做一版」时。',
      en: 'When one DC has a proven gain to spread, or history is “each DC invented a version.”',
    },
    scExample: {
      zh: '错拣控制计划在华东仓稳住后，把同一 p 图规则和槽位审计清单带到华北三个仓，而不是让各仓自己「结合实际」改定义。',
      en: 'After a mis-pick control plan holds in the East DC, take the same p-chart rules and slot-audit list to three North DCs — do not let each “adapt” the definition.',
    },
    pitfalls: {
      zh: '未稳先铺开；复制培训课时而不复制控制计划。',
      en: 'Spreading before stability; cloning class hours instead of the control plan.',
    },
    flashcard: {
      front: { zh: '多基地复制应带走什么？', en: 'What travels in a multi-site rollout?' },
      back: {
        zh: '同一 Y 的操作定义、标准步骤和控制计划，加上接收方的过程主人。',
        en: 'The same Y’s operational definition, standard steps, and control plan, plus a receiving process owner.',
      },
    },
  },
  {
    id: 'extended-enterprise-lss',
    kind: 'concept',
    beltMin: 'mbb',
    domains: ['six-sigma', 'supply-chain'],
    title: { zh: '延伸企业部署', en: 'Extended-enterprise deployment' },
    blurb: {
      zh: '把闸门与能力要求铺到关键供应商和 3PL，而不是只在自己的仓内做项目。',
      en: 'Extend gates and capability requirements to critical suppliers and 3PLs — do not only run projects inside your DCs.',
    },
    body: {
      zh: '网络 Y 常常在别人的过程里。MBB 选择少数战略供应商/承运人，要求共同的操作定义、来料能力、问题升级路径（8D 与 DMAIC 对齐），而不是把检验加严当部署。数据接口（时间戳、批次）比联合培训更优先。法律与采购条款要能支撑信息共享，否则「协同改进」只是会议。不要对长尾供应商铺 Belt 课。',
      en: 'Network Y often lives in someone else’s process. The MBB picks a few strategic suppliers/carriers and requires a shared operational definition, incoming capability, and an escalation path (8D aligned to DMAIC) — not tighter incoming inspection branded as deployment. Data hooks (timestamps, lots) beat joint training. Legal and purchasing terms must allow sharing or “collaborative improvement” is meetings. Do not roll Belt classes onto the long tail of suppliers.',
    },
    whenToUse: {
      zh: 'OTIF/PPM 由少数供应商或 3PL 主导、内部项目已无法再挤出利益时。',
      en: 'When a few suppliers or 3PLs dominate OTIF/PPM, and internal projects cannot squeeze more benefit.',
    },
    scExample: {
      zh: '两家核心件供应商吃掉 70% 来料 PPM：要求他们的过程能力与 8D 闸门对拍你的 Measure 标准，而不是把 IQC 抽检加倍。',
      en: 'Two core-part suppliers drive 70% of incoming PPM: align their capability and 8D gates to your Measure standard, rather than doubling IQC.',
    },
    flashcard: {
      front: { zh: '延伸企业部署首先要对齐什么？', en: 'What must an extended-enterprise deployment align first?' },
      back: {
        zh: '共同的 Y 操作定义、能力要求与升级路径，而不是加检验或上大课。',
        en: 'A shared Y definition, capability requirement, and escalation path — not more inspection or a large class.',
      },
    },
  },
]
