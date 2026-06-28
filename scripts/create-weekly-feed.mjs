import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const papersPath = path.join(root, "data", "papers.json");
const memoryPath = path.join(root, "memory", "seen-paper-ids.json");
const feedRoot = path.join(root, "feeds");
const maxFeatured = 7;

function localDate() {
  if (process.env.AI_RADAR_FEED_DATE) {
    return process.env.AI_RADAR_FEED_DATE;
  }

  const parts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/Los_Angeles",
    year: "numeric",
  }).formatToParts(new Date());
  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${byType.year}-${byType.month}-${byType.day}`;
}

async function readPapers() {
  return JSON.parse(await readFile(papersPath, "utf8"));
}

async function readSeenIds() {
  if (process.env.AI_RADAR_FEED_RESET === "1") {
    return new Set();
  }

  try {
    const raw = await readFile(memoryPath, "utf8");
    const parsed = JSON.parse(raw);

    return new Set(Array.isArray(parsed.paperIds) ? parsed.paperIds : []);
  } catch (error) {
    if (error.code === "ENOENT") return new Set();
    throw error;
  }
}

function paperScore(paper) {
  let score = 0;
  if (paper.priority === "core") score += 5;
  if (/foundational|reasoning|agents|rag|benchmark/i.test(paper.category)) score += 2;
  if (/transformer|gpt|rlhf|rag|cot|deepseek|llama/i.test(paper.title)) score += 1;
  return score;
}

function selectFeatured(papers, seenIds) {
  const publicPapers = papers.filter((paper) => paper.status !== "draft");
  const newPapers = publicPapers.filter((paper) => !seenIds.has(paper.id));
  const pool = newPapers.length > 0 ? newPapers : publicPapers;

  return {
    featured: [...pool]
      .sort((left, right) => paperScore(right) - paperScore(left) || left.title.localeCompare(right.title))
      .slice(0, maxFeatured),
    hasNewPapers: newPapers.length > 0,
    newPaperCount: newPapers.length,
  };
}

function dailyRotation(featured) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return days.map((day, index) => ({
    day,
    paper: featured[index % featured.length],
  }));
}

function oneLine(value) {
  return value.replace(/\s+/g, " ").trim();
}

function renderFeed({ date, papers, featured, hasNewPapers, newPaperCount }) {
  const categories = new Set(papers.map((paper) => paper.category));
  const rotation = dailyRotation(featured);
  const paperIds = featured.map((paper) => paper.id);

  return `# AI Radar Weekly Feed - ${date}

Updated from the public AI Radar paper catalog.

<!-- ai-radar-feed-version: 1 -->
<!-- featured-paper-ids: ${paperIds.join(", ")} -->

## Summary

- Catalog count: ${papers.length} papers across ${categories.size} categories.
- New papers since the last feed: ${hasNewPapers ? newPaperCount : 0}.
- Featured this week: ${featured.length}.
- Feed mode: ${hasNewPapers ? "new papers first" : "rotation from the existing catalog"}.

## Featured Papers

${featured
  .map(
    (paper) => `- [${paper.title}](https://airadar.snackoverflowgeorge.com/papers/${paper.id})
  - Year: ${paper.year}
  - Category: ${paper.category}
  - Priority: ${paper.priority}
  - Why it matters: ${oneLine(paper.summary)}
  - Source: ${paper.paperUrl}`,
  )
  .join("\n\n")}

## Daily Paper Rotation

Use these as lightweight daily picks until the next weekly refresh.

${rotation.map((entry) => `- ${entry.day}: [${entry.paper.title}](https://airadar.snackoverflowgeorge.com/papers/${entry.paper.id})`).join("\n")}

## Agent Setup Prompt

Ask your agent:

\`\`\`text
Use AI Radar. Read the latest weekly feed, choose one AI paper for me,
summarize why George recommends it, and give me one concrete reading action.
\`\`\`

## Daily Outlook Prompt

For a compact daily recommendation, ask:

\`\`\`text
Use AI Radar and give me today's paper pick. Keep it compact:
paper, why now, best for, and one next reading action.
\`\`\`

## Source Receipts

${featured.map((paper) => `- ${paper.paperUrl}`).join("\n")}
`;
}

async function main() {
  const date = localDate();
  const [year, month] = date.split("-");
  const papers = await readPapers();
  const seenIds = await readSeenIds();
  const selection = selectFeatured(papers, seenIds);
  const feedDir = path.join(feedRoot, year, month);
  const feedPath = path.join(feedDir, `${date}.md`);

  await mkdir(feedDir, { recursive: true });
  await mkdir(path.dirname(memoryPath), { recursive: true });
  await writeFile(feedPath, renderFeed({ date, papers, seenIds, ...selection }), "utf8");
  await writeFile(
    memoryPath,
    `${JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        paperCount: papers.length,
        paperIds: papers.map((paper) => paper.id).sort(),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(
    JSON.stringify(
      {
        feedPath,
        featuredCount: selection.featured.length,
        hasNewPapers: selection.hasNewPapers,
        newPaperCount: selection.newPaperCount,
        paperCount: papers.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

