# AI Radar

Catch up to the papers that compound.

AI Radar is a lightweight public catalog and digest layer for AI crash-course
papers: a dated Daily Radar, today's paper pick, a searchable permanent
library, copyable markdown notes, feeds, and an installable agent skill.

Live site: https://airadar.snackoverflowgeorge.com

Design contract: [DESIGN.md](DESIGN.md)

It follows the same split as `georgesbooks` / `books-radar` and `GeorgeLoops` /
`loops-radar`:

- `george-ai` keeps source notes, paper imports, discovery candidates, and
  public-ready markdown.
- `ai-radar` keeps the public website, generated catalog data, feeds, tests,
  and installable public skill.

## Quick Start

### Codex

```bash
mkdir -p ~/.codex/skills && git clone https://github.com/georgewangyu/ai-radar.git ~/.codex/skills/ai-radar
```

Or use the skill installer:

```bash
npx skills add georgewangyu/ai-radar --skill ai-radar -g
```

```text
set up AI Radar
```

### Claude Code / Cursor / Other Agents

```bash
git clone https://github.com/georgewangyu/ai-radar.git ~/skills/ai-radar
```

```text
Use ~/skills/ai-radar/skills/ai-radar/SKILL.md and set up AI Radar.
```

The agent walks users through:

- daily, weekly, or on-demand paper recommendations
- delivery time and timezone
- language: English, Chinese, or bilingual
- tone: concise, operator, or technical
- delivery: current chat, Telegram, email, or an OpenClaw channel

Settings are saved locally in `~/.ai-radar/config.json`. Delivery keys, if
used, are saved locally in `~/.ai-radar/.env`.

## Local Development

```sh
npm install
npm run sync:papers
npm run sync:daily
npm run feed:weekly
npm run dev -- --port 4194
```

Open `http://localhost:4194`.

## Paper Data

Public-ready source notes live in the sibling source repo:

```text
../george-ai/papers/<paper-id>.md
```

Sync them into the public app data with:

```sh
npm run sync:papers
```

Check source quality without rewriting generated data:

```sh
npm run validate:papers
```

The generated catalog lives in:

```text
data/papers.json
lib/papers.ts
```

Do not edit generated paper content by hand. Edit `george-ai/papers/*.md`, then
run:

```sh
npm run validate:papers
npm run sync:papers
npm run feed:weekly
npm run --silent feed:latest
```

## Daily Radar Data

Private discovery reports live only in `../george-ai/daily-radar/`. Sanitized
daily feed sources live in `../george-ai/public-feeds/` and sync into the public
dated archive with:

```sh
npm run validate:daily
npm run sync:daily
```

The public app never syncs private interest evidence or research notes. Daily
feeds may link directly to new papers before those papers graduate into the
permanent Library.

Feeds are written to:

```text
feeds/YYYY/MM/YYYY-MM-DD-ai-paper-radar.md
```

## Try The Main Flow

1. Search for a paper by title, category, tag, or summary.
2. Filter by category, priority, or status.
3. Open today's paper pick.
4. Copy a paper note.
5. Open a full paper detail page.
6. Request a paper or reading-path improvement.
7. Install the skill and ask for today's AI paper pick.

## Verification

```sh
npm run feed:weekly
npm run --silent feed:latest
npm run validate:daily
npm run typecheck
npm run build
npm run test:ui
```

## Website Lead Capture

The homepage install card asks for name and email before revealing the copyable
install command. Submissions are saved server-side into a shared Supabase table
called `radar_leads`; no Supabase key is exposed to the browser.

Create or update the table with:

```sh
psql "$SUPABASE_DB_URL" -f docs/radar-leads-supabase.sql
```

Required deployment environment variables:

```env
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<server-side-service-role-key>
```

`radar_leads` upserts by `(product, email)`, so repeated unlocks update the
existing lead instead of creating duplicates.

## Request Intake

Server-side GitHub issue creation uses:

```env
GITHUB_TOKEN=
GITHUB_OWNER=georgewangyu
GITHUB_REPO=audience-request-form
GITHUB_PRIVATE_REPO=audience-private-intake
AI_RADAR_REQUEST_ALLOWED_ORIGIN=
```

Public submissions create issues in `georgewangyu/audience-request-form`.
Private submissions create issues in `georgewangyu/audience-private-intake`.
AI Radar adds `ai-radar` and `source-repo:ai-radar` labels so the shared queue
remains triageable.

Keep tokens server-side. Do not prefix them with `NEXT_PUBLIC_`.
