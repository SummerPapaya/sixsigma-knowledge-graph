import type { KnowledgeNode } from './types'

export const supplyNodes: KnowledgeNode[] = [
  {
    id: 'scor',
    kind: 'concept',
    beltMin: 'white',
    domains: ['supply-chain'],
    title: { zh: 'SCOR 模型', en: 'SCOR' },
    blurb: {
      zh: '用 Plan / Source / Make / Deliver / Return 描述供应链过程，便于对接六西格玛项目范围。',
      en: 'Describe the chain as Plan, Source, Make, Deliver, Return so Six Sigma projects have a shared map.',
    },
    body: {
      zh: 'SCOR 把供应链拆成可对标的过程，而不是部门墙。Plan 平衡供需；Source 采购与来料；Make 转化；Deliver 履约交付；Return 退货逆向。Enable（主数据、IT、HR）支撑全部。六西格玛项目应声明落在哪一段，否则 SIPOC 会无限膨胀。本期图谱把 SCOR 当作工作域透镜，与 DMAIC 正交。',
      en: 'SCOR splits the chain into benchmarkable processes, not department walls. Plan balances supply and demand; Source buys and receives; Make transforms; Deliver fulfills; Return reverse-logs. Enable (master data, IT, HR) supports all. A Six Sigma project should name its SCOR segment or SIPOC never ends. This atlas treats SCOR as a domain lens orthogonal to DMAIC.',
    },
    whenToUse: {
      zh: '跨部门问题需要共同地图、对标、或决定项目落点时。',
      en: 'When a cross-functional problem needs a shared map, a benchmark, or a project landing zone.',
    },
    scExample: {
      zh: '「OTIF 差」可能在 Plan（承诺逻辑）、Source（缺料）、Make（产出不稳）或 Deliver（承运人）。SCOR 强迫先定位。',
      en: '“Bad OTIF” may sit in Plan (promise logic), Source (shortage), Make (unstable output), or Deliver (carrier). SCOR forces a location.',
    },
    flashcard: {
      front: { zh: 'SCOR 五个一级过程？', en: 'SCOR’s five level-1 processes?' },
      back: {
        zh: 'Plan, Source, Make, Deliver, Return。',
        en: 'Plan, Source, Make, Deliver, Return.',
      },
    },
  },
  {
    id: 'scor-plan',
    kind: 'sc-process',
    beltMin: 'white',
    domains: ['supply-chain'],
    title: { zh: 'Plan 计划', en: 'Plan' },
    blurb: {
      zh: '预测、S&OP、承诺与库存策略，决定后面所有执行能有多稳。',
      en: 'Forecast, S&OP, promising, and inventory policy — how stable every later execution can be.',
    },
    body: {
      zh: 'Plan 的 Y 常是预测偏差、计划稳定性和承诺兑现。变异来源：促销未入预测、冻结期形同虚设、多套数字（销售/财务/供应链）。六西格玛在此做操作定义（何为预测）、分层（SKU/渠道）和控制计划（谁有权改承诺）。没有诚实的 Plan，Deliver 的控制图会充满特殊因。',
      en: 'Plan’s Y is often forecast bias, plan stability, and promise-keeping. Variation: promos missing from the forecast, a fake freeze, three number sets (sales/finance/supply). Six Sigma work here is operational definitions (what is a forecast), stratification (SKU/channel), and a control plan for who may change a promise. Without an honest Plan, Deliver charts fill with special causes.',
    },
    whenToUse: {
      zh: '缺货与积压并存、承诺朝令夕改、S&OP 名存实亡时。',
      en: 'Stock-outs and excess together, promises that churn, or a paper S&OP.',
    },
    scExample: {
      zh: '把「可承诺 ATP」的计算规则写成操作定义，并用控制图监控每日承诺更改次数。',
      en: 'Write ATP logic as an operational definition and chart daily promise-change counts.',
    },
    flashcard: {
      front: { zh: 'Plan 阶段与 OTIF 的关系？', en: 'How does Plan connect to OTIF?' },
      back: {
        zh: '乱承诺会在 Deliver 制造无法执行的 Y；先治理承诺逻辑。',
        en: 'Chaotic promising creates an unexecutable Y in Deliver; govern promise logic first.',
      },
    },
  },
  {
    id: 'scor-source',
    kind: 'sc-process',
    beltMin: 'white',
    domains: ['supply-chain'],
    title: { zh: 'Source 寻源', en: 'Source' },
    blurb: {
      zh: '供应商选择、采购执行、来料质量与交期，是很多「内部质量问题」的真正上游。',
      en: 'Supplier choice, buying, incoming quality and lead time — the real upstream of many “internal” quality problems.',
    },
    body: {
      zh: 'Source 的关键 Y：来料 PPM、供应商 OTIF、采购提前期变异、成本。工具：IQC、AQL、8D、供应商过程能力。把供应商当黑箱只做进货检验，鉴定成本会膨胀且逃逸仍在。Green Belt 项目常从分层开始：哪个供应商、哪个料号贡献 COPQ。',
      en: 'Source Ys: incoming PPM, supplier OTIF, purchase-lead-time variation, cost. Tools: IQC, AQL, 8D, supplier capability. Treating suppliers as a black box with incoming inspect inflates appraisal cost and still lets escapes through. Green Belt work often starts by stratifying which supplier and SKU drive COPQ.',
    },
    whenToUse: {
      zh: '来料不良、缺料停线、供应商交期剧烈波动时。',
      en: 'Incoming defects, line-down shortages, or wild supplier lead times.',
    },
    scExample: {
      zh: '同一螺丝三家源，PPM 差 10 倍：先帕累托再要求能力数据，而不是加严所有批次的 AQL。',
      en: 'Three sources of the same screw, 10× PPM spread: Pareto then demand capability data — do not tighten AQL on every lot.',
    },
    flashcard: {
      front: { zh: '只靠进货检验能替代供应商过程控制吗？', en: 'Can incoming inspection replace supplier process control?' },
      back: {
        zh: '不能。检验是鉴定成本，逃逸和延迟仍在。',
        en: 'No. Inspection is appraisal cost; escapes and delay remain.',
      },
    },
  },
  {
    id: 'scor-make',
    kind: 'sc-process',
    beltMin: 'white',
    domains: ['supply-chain', 'lean'],
    title: { zh: 'Make 制造', en: 'Make' },
    blurb: {
      zh: '把输入变成输出的转化过程：工厂、组装，甚至仓内增值加工。',
      en: 'The transformation of inputs into outputs: plants, assembly, even DC value-add.',
    },
    body: {
      zh: 'Make 是经典 DMAIC 主场：能力、MSA、控制图、OEE、节拍。供应链视角要看它如何耦合 Source 与 Deliver：生产不稳会同时制造缺货和多余库存。仓内贴标、组套、质检也是 Make。约束理论提醒：改进非瓶颈的速度只会增加库存。',
      en: 'Make is classic DMAIC ground: capability, MSA, charts, OEE, takt. From the chain, watch coupling to Source and Deliver: unstable production creates shortages and excess at once. DC labeling, kitting, and QC are Make too. Theory of constraints: speeding a non-bottleneck mostly makes inventory.',
    },
    whenToUse: {
      zh: '产出不稳、瓶颈不清、在制品高时。',
      en: 'Unstable output, unclear bottlenecks, high WIP.',
    },
    scExample: {
      zh: '包装线 Cpk 不足导致超重拒收，下游 Deliver 的 OTIF 下降——项目应落在 Make 的称重 MSA 与规格。',
      en: 'Pack-line Cpk too low causes overweight rejects and then OTIF drops — land the project on Make weigh MSA and specs.',
    },
    flashcard: {
      front: { zh: '仓内组套为什么也算 Make？', en: 'Why is DC kitting also Make?' },
      back: {
        zh: '它改变形态与组合，是转化过程，不是单纯搬运。',
        en: 'It changes form and combination — transformation, not mere transport.',
      },
    },
  },
  {
    id: 'scor-deliver',
    kind: 'sc-process',
    beltMin: 'white',
    domains: ['supply-chain'],
    title: { zh: 'Deliver 交付', en: 'Deliver' },
    blurb: {
      zh: '从订单到客户手中：仓储、运输、妥投，OTIF 的主战场。',
      en: 'Order to customer hands: warehousing, transport, receipt — the main OTIF battlefield.',
    },
    body: {
      zh: 'Deliver 的 Y 是 OTIF、完美订单、周期时间、损伤率。X 包括库存准确、拣货、包装、承运人、地址主数据、预约。不要默认「物流部的锅」：缺货来自 Plan/Source，包装损伤可能来自 Make。控制图和操作定义在此特别关键，因为每个承运商仪表盘都在用不同的准时定义。',
      en: 'Deliver Ys: OTIF, perfect order, cycle time, damage. X includes inventory accuracy, pick, pack, carrier, address master data, appointments. Do not default to “logistics’ fault”: stock-outs are Plan/Source; pack damage may be Make. Operational definitions and charts matter here because every carrier dashboard uses a different on-time meaning.',
    },
    whenToUse: {
      zh: '客户服务水平不稳、仓配投诉、运输损伤时。',
      en: 'Unstable service, DC complaints, or transit damage.',
    },
    scExample: {
      zh: '客户按 POD 签收日算准时，你按离仓日算——两套 OTIF 必须在 VOC/CTQ 里对齐。',
      en: 'Customer clocks OTIF from POD date, you from ship date — align the two in VOC/CTQ.',
    },
    flashcard: {
      front: { zh: 'Deliver 的 OTIF 差，为什么不能默认是承运人问题？', en: 'Why not default Deliver OTIF gaps to the carrier?' },
      back: {
        zh: '缺货、拣错、晚截单都发生在承运人接货之前。',
        en: 'Stock-outs, mis-picks, and missed cutoffs happen before the carrier takes the freight.',
      },
    },
  },
  {
    id: 'scor-return',
    kind: 'sc-process',
    beltMin: 'white',
    domains: ['supply-chain'],
    title: { zh: 'Return 退货', en: 'Return' },
    blurb: {
      zh: '逆向物流：授权、鉴定、翻新、报废、补货，是外部失败成本的放大器。',
      en: 'Reverse logistics: authorize, inspect, refurbish, scrap, replace — an amplifier of external failure cost.',
    },
    body: {
      zh: '退货率高不一定是产品差，也可能是描述不符、发错、包装、季节。操作定义：何为可再售、何为供应商责任。FMEA 和 8D 在此高频。把退货当数据源：分层原因码，反馈到 Source/Make/Deliver，而不是只做「售后部门 KPI」。',
      en: 'High returns are not always bad product: they can be description mismatch, mis-ship, pack, season. Operationally define resaleable vs supplier-liable. FMEA and 8D show up constantly. Treat returns as a data source: stratify reason codes back into Source/Make/Deliver, not as a “service-desk KPI.”',
    },
    whenToUse: {
      zh: '退货率、鉴定周期、逆向运费失控时。',
      en: 'When return rate, inspection cycle, or reverse freight is out of control.',
    },
    scExample: {
      zh: '电商「品类描述导致的预期不符」应改内容与主图（Plan/Make 信息），而不是加严 IQC。',
      en: 'E-commerce “not as described” needs content and imagery (Plan/Make information), not tighter IQC.',
    },
    flashcard: {
      front: { zh: '退货数据对六西格玛最大的价值是什么？', en: 'Biggest Six Sigma value of return data?' },
      back: {
        zh: '它是外部失败的分层证据，应回流到正向过程。',
        en: 'It is stratified evidence of external failure and should flow back into the forward process.',
      },
    },
  },
  {
    id: 'abc-inventory',
    kind: 'tool',
    beltMin: 'yellow',
    domains: ['supply-chain'],
    title: { zh: 'ABC 分类', en: 'ABC classification' },
    blurb: {
      zh: '按价值或消耗把 SKU 分成少数重要与多数琐碎，匹配不同控制力度。',
      en: 'Split SKUs into the vital few and trivial many by value or consumption, then match control intensity.',
    },
    body: {
      zh: '典型 A 类约占金额 80%、SKU 20%。A 类要更紧的盘点、更细的预测、更稳的供应商；C 类允许简单规则。可与 XYZ（需求稳定性）组成 ABC-XYZ 矩阵：AX 值得精益库存，CZ 应考虑是否备货。ABC 是策略，不是一次排序永远正确——促销和生命周期会让类漂移。',
      en: 'Typical A items are ~80% of value and ~20% of SKUs. A items get tighter counts, finer forecasts, more stable suppliers; C items get simple rules. Combine with XYZ (demand stability): AX deserves lean inventory care; CZ may not deserve stock at all. ABC is a policy, not a forever ranking — promos and life cycle drift the class.',
    },
    whenToUse: {
      zh: 'SKU 过多、盘点资源有限、要差异化服务水平时。',
      en: 'Too many SKUs, scarce count labor, or differentiated service levels.',
    },
    scExample: {
      zh: 'A 类循环盘点每周，C 类每季；A 类缺货用更高服务水平算安全库存。',
      en: 'Cycle-count A weekly, C quarterly; compute safety stock for A at a higher service level.',
    },
    flashcard: {
      front: { zh: 'ABC 分类后下一步通常做什么？', en: 'What usually follows ABC classification?' },
      back: {
        zh: '差异化盘点、预测、服务水平和供应商管理。',
        en: 'Differentiated counting, forecasting, service levels, and supplier management.',
      },
    },
  },
  {
    id: 'inventory-turns',
    kind: 'metric',
    beltMin: 'yellow',
    domains: ['supply-chain'],
    title: { zh: '库存周转', en: 'Inventory turns' },
    blurb: {
      zh: '销货成本或用量相对平均库存的转速；越高越省资金，但过高可能伤害服务。',
      en: 'COGS or usage over average inventory; faster frees cash, too fast can hurt service.',
    },
    body: {
      zh: '周转 = 出库 / 平均库存。要和 OTIF、缺货一起看：周转上升若伴随缺货，只是把成本推给客户。分层到 ABC 比一个公司级数字有用。六西格玛关注周转的变异（某周突然积压）而不仅是均值。公式分母必须与分子同口径（不含在途？不含寄售？）。',
      en: 'Turns = issues / average inventory. Read it with OTIF and stock-outs: rising turns with shortages just pushed cost onto the customer. Stratify by ABC; a company-wide number hides the story. Six Sigma watches turn variation (a sudden stall), not only the mean. The denominator must match the numerator (in-transit? consignment?).',
    },
    whenToUse: {
      zh: '资金占用讨论、比较仓或品类健康度时。',
      en: 'Cash discussions, comparing DC or category health.',
    },
    scExample: {
      zh: 'C 类呆滞把公司周转拉低，Pareto 金额后处理死库存，比要求 A 类再降安全库存更安全。',
      en: 'Dead C items drag company turns; Pareto the euros of dead stock before cutting A-item safety stock.',
    },
    formula: String.raw`\mathrm{turns} = \frac{\mathrm{COGS\ or\ usage}}{\mathrm{average\ inventory}}`,
    flashcard: {
      front: { zh: '为什么不能单独追求更高周转？', en: 'Why not maximize turns alone?' },
      back: {
        zh: '可能牺牲服务水平和加急成本，总 COPQ 上升。',
        en: 'You may buy turns with service failures and expedites; total COPQ rises.',
      },
    },
  },
  {
    id: 'safety-stock',
    kind: 'metric',
    beltMin: 'green',
    domains: ['supply-chain'],
    title: { zh: '安全库存', en: 'Safety stock' },
    blurb: {
      zh: '为需求和提前期的不确定性准备的缓冲；应用数据估算，而不是拍一个「经验周数」。',
      en: 'Buffer against demand and lead-time uncertainty — estimate it from data, not a folklore week-count.',
    },
    body: {
      zh: '常用形式：安全库存 ≈ z × σ_DLT，其中 σ_DLT 综合需求与提前期变异。z 由目标服务水平决定。前提：需求近似独立、提前期分布已知、缺货成本与库存成本被权衡过。提前期变异往往被低估——供应商 OTIF 差时应先减变异再加库存。安全库存是控制计划的一部分，要定期用实际缺货率校准。',
      en: 'A common form: safety stock ≈ z × σ_DLT, with σ_DLT combining demand and lead-time variation. z comes from the service-level target. Assumptions: roughly independent demand, a known lead-time distribution, and a cost trade-off. Lead-time variation is usually understated — cut supplier OTIF variation before adding stock. Safety stock belongs in a control plan and should be calibrated to actual stock-out rates.',
    },
    whenToUse: {
      zh: '服务水平不足、或准备降低库存并想知道风险时。',
      en: 'When service is short, or you want to cut inventory with eyes open.',
    },
    scExample: {
      zh: '供应商提前期从 10±1 天变成 10±8 天，安全库存应显著增加；同时启动 Source 侧 DMAIC 降变异。',
      en: 'Lead time moving from 10±1 to 10±8 days should lift safety stock — and trigger a Source DMAIC to cut that variation.',
    },
    formula: String.raw`SS \approx z\sqrt{L\sigma_d^{2}+\bar{d}^{2}\sigma_L^{2}}`,
    pitfalls: {
      zh: '用均值提前期当确定值；对所有 SKU 用同一个周数。',
      en: 'Treating mean lead time as certain; using one week-count for every SKU.',
    },
    flashcard: {
      front: { zh: '降低安全库存最健康的方法是什么？', en: 'Healthiest way to cut safety stock?' },
      back: {
        zh: '降低需求和提前期的变异，而不是直接砍数量。',
        en: 'Reduce demand and lead-time variation rather than chopping the number.',
      },
    },
  },
  {
    id: 'eoq',
    kind: 'metric',
    beltMin: 'green',
    domains: ['supply-chain'],
    title: { zh: 'EOQ 直觉', en: 'EOQ intuition' },
    blurb: {
      zh: '在订货成本和持有成本之间找平衡批量；是模型，不是命令。',
      en: 'A batch size that balances ordering cost against holding cost — a model, not an order.',
    },
    body: {
      zh: 'EOQ = √(2DS/H)。它假设稳定需求、瞬时补货、无缺货。现实有最小起订量、价格阶梯、保质期和能力约束，所以 EOQ 是起点。六西格玛视角：订货成本 S 里是否藏着浪费（过量加工的审批）？需求 D 的变异是否大到应该改用拉动？不要给不稳定的过程算一个精确的经济批量。',
      en: 'EOQ = √(2DS/H). It assumes stable demand, instant replenishment, no stock-outs. Reality has MOQs, price breaks, shelf life, and capacity, so EOQ is a start. Six Sigma lens: is ordering cost S hiding waste (approval over-processing)? Is demand D so variable that pull is better? Do not compute a precise economic lot for an unstable process.',
    },
    whenToUse: {
      zh: '重复性采购、想解释「为什么这批不能更小」时。',
      en: 'Repetitive purchasing, or explaining why a lot cannot shrink further.',
    },
    scExample: {
      zh: '包装材料 MOQ 远大于 EOQ：谈判拆单或找第二源，而不是在仓里堆一年用量。',
      en: 'Pack-material MOQ far above EOQ: negotiate splits or a second source, do not store a year’s usage.',
    },
    formula: String.raw`\mathrm{EOQ}=\sqrt{\dfrac{2DS}{H}}`,
    flashcard: {
      front: { zh: 'EOQ 模型最容易被现实打破的假设？', en: 'Which EOQ assumption reality breaks most often?' },
      back: {
        zh: '稳定需求与无最小起订量/价格阶梯。',
        en: 'Stable demand and no MOQ or price breaks.',
      },
    },
  },
  {
    id: 'otif',
    kind: 'metric',
    beltMin: 'white',
    domains: ['supply-chain', 'six-sigma'],
    title: { zh: 'OTIF', en: 'OTIF' },
    blurb: {
      zh: '既准时又完整。没有操作定义的 OTIF 无法做六西格玛。',
      en: 'On time and in full. OTIF without an operational definition cannot be Six-Sigma’d.',
    },
    body: {
      zh: 'OTIF 把两个 CTQ 乘在一起：时间窗与数量完整性。必须规定时钟（承诺、预约、POD）、时区、部分交货、客户拒收是否算失败。基线要用控制图看稳定性，再用帕累托拆原因码。它是典型的 Y，X 分散在 SCOR 全链。不要和承运人 KPI 混成一个数还指望能改进。',
      en: 'OTIF multiplies two CTQs: time window and quantity completeness. Specify the clock (promise, slot, POD), time zone, partials, and whether a customer refusal counts. Baseline with a control chart, then Pareto reason codes. It is a classic Y with X across SCOR. Do not blend it with a carrier KPI and expect to improve the blend.',
    },
    whenToUse: {
      zh: '客户服务水平是章程 Y，或内部对「准时」吵不清时。',
      en: 'When service is the charter Y, or “on time” has several meanings.',
    },
    scExample: {
      zh: '零售 DC 要求预约槽 ±15 分钟且 ASN 准确才算 OTIF；工厂按发货日算——对账前先统一定义。',
      en: 'Retail DC OTIF = appointment ±15 minutes and accurate ASN; plant uses ship date — unify before reconciling.',
    },
    formula: String.raw`\mathrm{OTIF}=\frac{N_{\mathrm{on\ time\ and\ in\ full}}}{N_{\mathrm{orders}}}`,
    flashcard: {
      front: { zh: 'OTIF 里的 IF 指什么？', en: 'What does IF in OTIF mean?' },
      back: {
        zh: 'In Full，数量和品项完整，不只是车子准点。',
        en: 'In Full — complete quantity and items, not merely a punctual truck.',
      },
    },
  },
  {
    id: 'fill-rate',
    kind: 'metric',
    beltMin: 'yellow',
    domains: ['supply-chain'],
    title: { zh: '满足率 Fill rate', en: 'Fill rate' },
    blurb: {
      zh: '需求被现有库存满足的比例，按行、件或订单定义会得出不同故事。',
      en: 'Share of demand met from stock; line, unit, and order fill tell different stories.',
    },
    body: {
      zh: '行满足率、件满足率、订单满足率不可互换。高件满足率仍可能低订单满足率（缺一个零件整单失败）。与 OTIF 的差别：fill rate 通常不管时间，只问有没有货。安全库存和服务水平模型直接连到它。测量时要排除已取消需求，否则会自我美化。',
      en: 'Line, unit, and order fill are not interchangeable. High unit fill can still mean low order fill (one missing part kills the order). Unlike OTIF, fill rate usually ignores time and asks only “was stock there?” Safety-stock and service-level models attach here. Exclude cancelled demand or you flatter yourself.',
    },
    whenToUse: {
      zh: '讨论缺货、安全库存、服务水平定义时。',
      en: 'Stock-out debates, safety-stock work, service-level definitions.',
    },
    scExample: {
      zh: '维修件：件满足率 99% 但关键件缺货导致设备停机——应改用关键件加权满足率。',
      en: 'Spares: 99% unit fill but a critical part stock-out stops a machine — use a criticality-weighted fill.',
    },
    flashcard: {
      front: { zh: 'Fill rate 和 OTIF 的关键差别？', en: 'Key difference between fill rate and OTIF?' },
      back: {
        zh: 'Fill rate 看有没有货；OTIF 还要求在时间窗内完整交付。',
        en: 'Fill rate asks whether stock existed; OTIF also requires the time window and completeness of delivery.',
      },
    },
  },
  {
    id: 'lead-vs-cycle',
    kind: 'concept',
    beltMin: 'white',
    domains: ['supply-chain', 'lean', 'six-sigma'],
    title: { zh: '提前期 vs 周期时间', en: 'Lead time vs cycle time' },
    blurb: {
      zh: '提前期是客户等待的墙钟时间；周期时间是一件活在过程里的加工时间。',
      en: 'Lead time is the customer’s wall-clock wait; cycle time is process time per unit.',
    },
    body: {
      zh: '客户感受的是提前期（下单到收到）。周期时间之和往往只占提前期的一小部分，其余是等待——VSM 会把它画出来。压缩提前期有两条路：减等待（精益）和减变异（六西格玛，因为变异迫使人们提前下单、堆库存）。Little 定律：在制品 ≈ 产出率 × 提前期。',
      en: 'Customers feel lead time (order to receipt). Summed cycle times are often a sliver of lead time; the rest is wait — VSM draws it. Two ways to shrink lead time: cut waits (lean) and cut variation (Six Sigma, because variation makes people order early and hoard). Little’s Law: WIP ≈ throughput × lead time.',
    },
    whenToUse: {
      zh: '交期投诉、库存高、讨论「我们能不能更快」时。',
      en: 'Lead-time complaints, high inventory, or “can we go faster?”',
    },
    scExample: {
      zh: '采购提前期 45 天里，供应商加工 6 天，其余是排队与海运等待——DMAIC 要对准等待的特殊因和普通因。',
      en: 'A 45-day purchase lead time with 6 days of supplier process: the rest is queue and ocean wait — DMAIC the waits’ special and common causes.',
    },
    formula: String.raw`\mathrm{WIP} \approx TH \times LT`,
    flashcard: {
      front: { zh: '为什么减变异也能缩短提前期？', en: 'Why does cutting variation shrink lead time?' },
      back: {
        zh: '变异迫使加缓冲（提前下单、安全库存、安全时间）。',
        en: 'Variation forces buffers: early orders, safety stock, safety time.',
      },
    },
  },
  {
    id: 'bullwhip',
    kind: 'concept',
    beltMin: 'yellow',
    domains: ['supply-chain'],
    title: { zh: '牛鞭效应', en: 'Bullwhip' },
    blurb: {
      zh: '下游小波动在上游被放大，来自批量、促销、信息延迟和短缺博弈。',
      en: 'Small downstream swings amplify upstream via batching, promotions, information delay, and shortage gaming.',
    },
    body: {
      zh: '牛鞭让工厂和供应商看到的需求比零售真实需求更抖。对策：共享 POS、缩短提前期、减小批量、稳定价格、抑制短缺时的重复下单。六西格玛贡献是量化每一级订单的变异并做控制图，证明放大发生在哪一段。拉动/看板从机制上限制放大。',
      en: 'Bullwhip makes plants and suppliers see demand much jumpy than retail reality. Counters: share POS, shorten lead time, smaller batches, stable prices, stop duplicate orders in shortages. Six Sigma quantifies order variation at each tier with charts to show where amplification happens. Pull/kanban caps the mechanism.',
    },
    whenToUse: {
      zh: '越往上游越缺货/越积压、预测越来越不准时。',
      en: 'When upstream swings harder than retail, or forecasts decay along the chain.',
    },
    scExample: {
      zh: '门店周销相对稳，DC 周订货剧烈，工厂月计划更剧烈——把三级订单量画在同一张图上即可见牛鞭。',
      en: 'Stable store weeks, violent DC orders, worse factory months — plot the three order series to see the whip.',
    },
    flashcard: {
      front: { zh: '减轻牛鞭最有效的信息对策？', en: 'Most effective information counter to bullwhip?' },
      back: {
        zh: '让上游看到真实需求（如 POS），而不是只看到订单。',
        en: 'Show upstream real demand (e.g. POS), not only orders.',
      },
    },
  },
  {
    id: 'iqc',
    kind: 'sc-process',
    beltMin: 'yellow',
    dmaic: 'M',
    domains: ['supply-chain', 'six-sigma'],
    title: { zh: '来料检验 IQC', en: 'Incoming QC' },
    blurb: {
      zh: '对供应商输出做鉴定；要与 MSA、AQL 和供应商能力连在一起，否则只是昂贵的过滤器。',
      en: 'Appraising supplier output — must connect to MSA, AQL, and supplier capability or it is an expensive filter.',
    },
    body: {
      zh: 'IQC 决定批次放行。测量系统必须先过 MSA，抽样方案必须匹配风险（AQL/LTPD）。长期应把资源从鉴定转向供应商过程能力与审核。跳检、免检要有数据门槛（连续合格、Cpk、逃逸为零），并写进控制计划。发现缺陷后的升级路径接到 8D。',
      en: 'IQC dispositions lots. The gauge needs MSA; the sample needs a risk scheme (AQL/LTPD). Over time, shift effort from appraisal to supplier capability and audit. Skip-lot or dock-to-stock needs numeric gates (clean history, Cpk, zero escapes) in the control plan. Escapes escalate into 8D.',
    },
    whenToUse: {
      zh: '新供应商、关键特性、历史逃逸、法规要求时。',
      en: 'New suppliers, critical characteristics, past escapes, or regulation.',
    },
    scExample: {
      zh: '电子料潮湿敏感等级：IQC 查包装与湿度指示卡，MSA 针对湿度卡判读做属性一致性。',
      en: 'MSL electronics: IQC checks pack and humidity cards; MSA is an attribute agreement study on card reading.',
    },
    flashcard: {
      front: { zh: 'IQC 在 COPQ 里通常属于哪一类？', en: 'Which COPQ bucket is IQC usually in?' },
      back: { zh: '鉴定成本。', en: 'Appraisal cost.' },
    },
  },
  {
    id: 'aql-ppm',
    kind: 'metric',
    beltMin: 'green',
    domains: ['supply-chain', 'six-sigma'],
    title: { zh: 'AQL 与 PPM', en: 'AQL and PPM' },
    blurb: {
      zh: 'AQL 是验收抽样的质量阈值语言；PPM 是过程输出的缺陷密度。两者目的不同。',
      en: 'AQL is acceptance-sampling language; PPM is process defect density. They are not the same job.',
    },
    body: {
      zh: 'AQL（可接受质量限）描述在该方案下，供应商过程若处于该水平，批次被接收的概率较高——它不是「允许这么多缺陷」的道德许可，更不是过程能力。PPM 统计实际缺陷密度。把 AQL 0.65 当成 Cpk 目标是类别错误。抽样方案有生产者风险与消费者风险，需与关键度匹配。',
      en: 'AQL is the process level at which a sampling plan accepts lots at a high probability — not a moral license to ship that many defects, and not capability. PPM counts actual defect density. Treating AQL 0.65 as a Cpk target is a category error. Plans have producer and consumer risk and must match criticality.',
    },
    whenToUse: {
      zh: '设计来料抽样、与供应商谈质量协议、解读检验记录时。',
      en: 'Designing incoming sampling, quality agreements, or reading inspection records.',
    },
    scExample: {
      zh: '安全件不该用宽松 AQL；同时要求供应商提供过程 Cpk 和逃逸 PPM，而不是只交一份抽检报告。',
      en: 'Safety parts should not sit on a loose AQL; demand process Cpk and escape PPM, not only a sample report.',
    },
    formula: String.raw`\mathrm{PPM}=\frac{\mathrm{defects}}{\mathrm{units}}\times 10^{6}`,
    pitfalls: {
      zh: '用通过 AQL 的批次去宣称过程已达六西格玛。',
      en: 'Claiming Six Sigma because lots passed an AQL plan.',
    },
    flashcard: {
      front: { zh: 'AQL 通过是否等于过程能力足够？', en: 'Does passing AQL mean adequate capability?' },
      back: {
        zh: '不等于。AQL 是批次验收风险设计，不是 Cp/Cpk。',
        en: 'No. AQL designs lot-acceptance risk, not Cp/Cpk.',
      },
    },
  },
  {
    id: 'eight-d',
    kind: 'tool',
    beltMin: 'yellow',
    dmaic: 'A',
    domains: ['supply-chain', 'six-sigma'],
    title: { zh: '8D', en: '8D' },
    blurb: {
      zh: '客户或内部重大不良的团队解决问题路径：遏制、根因、永久对策、预防再发。',
      en: 'A team path for serious defects: contain, find cause, lock a permanent fix, prevent recurrence.',
    },
    body: {
      zh: '8D 与 DMAIC 同源但更强调遏制（D3）和横向展开。D2 问题描述等同操作定义；D4 根因要用证据，5 Whys/鱼骨只是输入；D5–D6 验证永久对策；D7 防再发接到 FMEA 和控制计划。供应商 8D 要看是否改了过程，而不是只换了一批货。不要把 8D 当成填写模板的仪式。',
      en: '8D shares DNA with DMAIC but stresses containment (D3) and read-across. D2 is an operational definition; D4 needs evidence — 5 Whys/fishbone are inputs; D5–D6 verify the permanent fix; D7 prevention lands in FMEA and the control plan. A supplier 8D must change a process, not only replace a lot. Do not treat 8D as a form ritual.',
    },
    whenToUse: {
      zh: '逃逸到客户、重复故障、需要跨组织协同时。',
      en: 'Customer escapes, repeat failures, or cross-organization action.',
    },
    scExample: {
      zh: '运输损伤 8D：D3 先扣在途同包装批次；D4 证明是堆码规范而非承运人野蛮装卸；D6 改包装测试标准。',
      en: 'Transit-damage 8D: D3 hold in-transit lots with the same pack; D4 prove stack spec rather than “rough carrier”; D6 change pack test standards.',
    },
    steps: [
      { zh: 'D0/D1 启动与团队', en: 'D0/D1 launch and team' },
      { zh: 'D2 问题描述', en: 'D2 problem description' },
      { zh: 'D3 遏制', en: 'D3 containment' },
      { zh: 'D4 根因', en: 'D4 root cause' },
      { zh: 'D5 永久对策选择', en: 'D5 choose permanent corrective action' },
      { zh: 'D6 实施与验证', en: 'D6 implement and verify' },
      { zh: 'D7 预防再发', en: 'D7 prevent recurrence' },
      { zh: 'D8 表彰与关闭', en: 'D8 congratulate and close' },
    ],
    flashcard: {
      front: { zh: '8D 里最容易被跳过但对客户最重要的步骤？', en: 'Which 8D step is skipped most and matters most to the customer?' },
      back: {
        zh: 'D3 遏制：先阻止继续流出。',
        en: 'D3 containment: stop the outflow first.',
      },
    },
  },
  {
    id: 'incoming-capability',
    kind: 'concept',
    beltMin: 'green',
    domains: ['supply-chain', 'six-sigma'],
    title: { zh: '来料与过程能力', en: 'Incoming vs process capability' },
    blurb: {
      zh: '进货检验看批次；过程能力看供应商是否能长期稳定地生产。采购决策应看后者。',
      en: 'Incoming inspection looks at lots; process capability asks whether the supplier can run stably. Buy the latter.',
    },
    body: {
      zh: '一批货通过 IQC 只说明这批在抽样风险下可接受。过程能力要求稳定、规格真实、MSA 合格。把两者连起来：要求供应商提供控制图和 Cpk，用你的 IQC 数据做验证，而不是替代。若供应商 Cpk<1 而你的安全库存按「确定交期确定质量」计算，模型在撒谎。这是 Source 与 Measure 的交汇点。',
      en: 'A lot passing IQC only means it was acceptable under sampling risk. Capability needs stability, a real spec, and MSA. Connect them: ask for supplier charts and Cpk, and use your IQC as verification — not a substitute. If supplier Cpk<1 while your safety stock assumes certain quality and lead time, the model is lying. This is the Source–Measure junction.',
    },
    whenToUse: {
      zh: '选商、提降检验、讨论能否免检、计算安全库存假设时。',
      en: 'Sourcing, reducing inspection, dock-to-stock, or safety-stock assumptions.',
    },
    scExample: {
      zh: '关键尺寸供应商 Cpk 0.8，即使 AQL 抽检常过，也应双源或帮其 DMAIC，而不是把检验抽严当作能力。',
      en: 'A critical dimension at Cpk 0.8 will still pass AQL often — dual-source or help them DMAIC; tighter sampling is not capability.',
    },
    flashcard: {
      front: { zh: '为什么「批批合格」仍可能能力不足？', en: 'Why can “every lot passed” still mean poor capability?' },
      back: {
        zh: '抽样可能漏掉缺陷，且未证明过程长期稳定居中。',
        en: 'Sampling can miss defects, and you have not shown long-run, on-center stability.',
      },
    },
  },
]
