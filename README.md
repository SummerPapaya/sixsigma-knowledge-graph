# SIGMA ATLAS · 六西格玛知识图谱

**中文** | [English](README.en.md)

中英双语、可交互的 Six Sigma 学习站：同一套知识数据驱动 **图谱 / 脑图 / 归纳 / 闪卡**。Belt 是透镜（White → Yellow → Green → Black → **Master Black**），供应链作为可叠加的工作域，而不是另一套百科。

## 本地运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```

产物是纯静态文件（`dist/`）。若部署在子路径下，构建时设置 `VITE_BASE`：

```bash
VITE_BASE=/projects/six-sigma/ npm run build
```

第三人不得把构建结果放到作品集、个人网站、简历或求职展示中，见 [许可](#许可)。

## 使用

深链接格式：

```
#/{lang}/{belt}/{domain}/{view}/{nodeId?}
```

例如：`#/zh/mbb/all/graph/mbb-role`、`#/zh/green/supply-chain/graph/otif`

| 控件 | 作用 |
|---|---|
| Belt | 改变可见深度；更深节点以低对比度预览。White → Master Black 均已开放 |
| 中 / EN | 界面与知识点正文同时切换 |
| 域 | 全部 / 精益六西格玛 / 供应链（淡化非当前域） |
| `/` | 聚焦搜索 |
| `F` / 空格 | 闪卡翻转 |
| `←` `→` | 上一张 / 下一张闪卡 |

闪卡进度存在浏览器 `localStorage`（键 `sigma-atlas-cards-v1`）。

## 内容原则

知识点是自写归纳，覆盖 DMAIC、精益交汇、Black Belt 的 DOE / 进阶统计 / 辅导闸门、Master Black 的部署与项目组合，以及工作中常用的供应链对象（SCOR、OTIF、安全库存、IQC/AQL、8D 等），并与六西格玛工具互链。不摘录 ASQ / IASSC 教材原文。

## 许可

本项目采用 [LICENSE](LICENSE)：**仅供个人学习与课堂教学，不是开源许可。**

- **可以：** 本地克隆、运行、修改以自学；教师在课堂或学校内部系统中演示；在简历或网页中**链接到原仓库**。
- **不可以：** 商用（收费产品、付费培训、SaaS、咨询交付、广告等）；把本项目或其衍生版本放到**作品集、个人网站、简历/CV、求职或面试材料**中展示；把构建结果托管或 iframe 嵌到个人站点上当作自己的作品。

版权人自己的使用不受上述限制。其他用途须事先取得书面许可。
