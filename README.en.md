# SIGMA ATLAS · Six Sigma Knowledge Graph

[中文](README.md) | **English**

A bilingual, interactive Six Sigma learning site. One knowledge set drives the **graph**, **mind map**, **briefing**, and **flashcards**. Belt is a lens (White → Yellow → Green → Black → **Master Black**). Supply chain is an overlay domain, not a second encyclopedia.

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

The output is static files in `dist/`. If you serve it under a subpath, set `VITE_BASE` at build time:

```bash
VITE_BASE=/projects/six-sigma/ npm run build
```

Third parties may not put the build on a portfolio, personal site, résumé, or job-application showcase. See [License](#license).

## Use

Deep-link format:

```
#/{lang}/{belt}/{domain}/{view}/{nodeId?}
```

Examples: `#/en/mbb/all/graph/mbb-role`, `#/en/green/supply-chain/graph/otif`

| Control | What it does |
|---|---|
| Belt | Changes visible depth; the next belt is a low-contrast preview. White through Master Black are all open. |
| 中 / EN | Switches UI and article copy together |
| Domain | All / Lean Six Sigma / Supply chain (dims nodes outside the current domain) |
| `/` | Focus search |
| `F` / Space | Flip a flashcard |
| `←` `→` | Previous / next flashcard |

Flashcard progress is stored in the browser `localStorage` (key `sigma-atlas-cards-v1`).

## Content

Entries are original summaries. They cover DMAIC, the lean crossover, Black Belt DOE / advanced stats / coaching gates, Master Black deployment and project portfolios, and everyday supply-chain objects (SCOR, OTIF, safety stock, IQC/AQL, 8D, and so on), cross-linked with Six Sigma tools. They do not quote ASQ or IASSC textbooks.

## License

This project uses [LICENSE](LICENSE): **personal learning and classroom teaching only. It is not an open-source license.**

- **Allowed:** clone, run, and modify locally for self-study; a teacher may demonstrate it in class or on a school-internal system; a résumé or webpage may **link to the original repository**.
- **Not allowed:** commercial use (paid products, paid training, SaaS, consulting deliverables, advertising, and the like); putting this project or a derivative on a **portfolio, personal website, résumé/CV, or job/interview materials**; hosting the build or embedding it in an iframe on a personal site as if it were your own work.

The copyright holders’ own use is not limited by this license. Any other use needs prior written permission.
