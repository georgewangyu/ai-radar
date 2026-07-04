---
version: "alpha"
name: "AI Radar"
description: "Public AI paper catalog using George Design Language research-desk mode."
mode: "research-desk"
source: "../george-design-language/modes/research-desk.DESIGN.md"
colors:
  primary: "#1457FF"
  ink: "#141414"
  muted: "#64615A"
  page: "#E9E4DC"
  paper: "#FBFAF6"
  surface: "#FFFFFF"
  line: "#D7D0C1"
  green: "#176E45"
  signal: "#D7FF55"
---

# AI Radar Design Contract

AI Radar should feel like a compact research desk for papers that compound. It
is not an academic portal, citation leaderboard, or news feed.

## First Screen

The first viewport should make these visible:

- the AI Radar name and promise
- today's paper or the primary reading path
- search/filter access to the catalog
- install or request path without hiding the catalog itself

## Layout

- Use dense but calm catalog surfaces below the hero.
- Keep paper summaries, tags, and reading actions scannable.
- Detail pages should foreground the paper, why it matters, who it is for, and
  the next reading action.
- Metadata helps filtering; it should not become the visual center.

## Typography And Color

- Use George Research Desk tokens as the baseline.
- Blue is the primary action/accent color.
- Warm paper and dark ink carry the page; do not make the UI all blue.
- Letter spacing is `0` except small mono labels.

## Do

- Show source-backed paper context and caveats.
- Make copyable markdown notes easy to find.
- Keep the daily/weekly feed path visible.
- Keep install and request flows secondary to the catalog.

## Do Not

- Add citation-count rankings or academic scoreboards.
- Use generic AI-purple gradients or decorative glows.
- Bury the generated-data boundary.
- Let cards nest inside other cards.
