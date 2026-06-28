import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceDir =
  process.env.GEORGE_AI_DIR || path.resolve(root, "..", "george-ai", "papers");
const dataPath = path.join(root, "data", "papers.json");
const libPath = path.join(root, "lib", "papers.ts");
const checkOnly = process.argv.includes("--check");

const unsafePublicPatterns = [
  { label: "TODO marker", pattern: /\bTODO\b/i },
  { label: "local filesystem path", pattern: /\/Users\// },
  { label: "dotenv or token path", pattern: /\.(?:env|tokens)\b/i },
  { label: "secret assignment", pattern: /\b(?:api[_-]?key|secret|password|GITHUB_TOKEN)\s*=/i },
  { label: "email address", pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i },
];

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  const fields = {};

  if (!match) return fields;

  for (const line of match[1].split("\n")) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    fields[field[1]] = field[2].trim().replace(/^["']|["']$/g, "");
  }

  return fields;
}

function section(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = markdown.match(
    new RegExp(`(?:^|\\n)## ${escaped}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, "i"),
  );

  return match?.[1]?.trim() || "";
}

function paragraphs(text) {
  return text
    .replace(/```[\s\S]*?```/g, "")
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function firstParagraph(markdown, heading, fallback = "") {
  return paragraphs(section(markdown, heading))[0] || fallback;
}

function sectionProse(markdown, heading, fallback = "") {
  return paragraphs(section(markdown, heading)).join("\n\n") || fallback;
}

function listItems(text) {
  return text
    .split("\n")
    .map((line) => line.match(/^\s*-\s+(.+)$/)?.[1]?.trim())
    .filter(Boolean);
}

function fencedMarkdown(markdown) {
  const block = section(markdown, "AI Radar Markdown");
  const match = block.match(/```(?:md|markdown)?\n([\s\S]*?)\n```/i);
  return match?.[1]?.trimEnd() || "";
}

function wordCount(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function assertMinimumWords(errors, field, text, minimum) {
  const words = wordCount(text);

  if (words < minimum) {
    errors.push(`${field} is too thin: ${words} words, expected at least ${minimum}`);
  }
}

function validatePublicText(errors, label, text) {
  for (const { label: patternLabel, pattern } of unsafePublicPatterns) {
    if (pattern.test(text)) {
      errors.push(`${label} contains ${patternLabel}`);
    }
  }
}

function buildPublicMarkdown(paper) {
  return `# ${paper.title}

Year: ${paper.year}
Category: ${paper.category}

Why it matters:
${paper.whyRead}

Best for:
${paper.bestFor.map((item) => `- ${item}`).join("\n")}

Next step:
${paper.nextStep}
`;
}

function parseYamlArray(raw) {
  if (!raw || raw === "[]") return [];
  return raw
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function toPaper(markdown, sourcePath) {
  const fields = parseFrontmatter(markdown);
  const required = ["id", "title", "year", "category", "status", "priority", "paper_url"];
  const missing = required.filter((field) => !fields[field]);

  if (missing.length > 0) {
    throw new Error(`${sourcePath} missing frontmatter fields: ${missing.join(", ")}`);
  }

  const bestFor = listItems(section(markdown, "Best For"));
  const notes = listItems(section(markdown, "Notes"));
  const nextStep = firstParagraph(markdown, "Next Reading Action");
  const summary = sectionProse(markdown, "Summary");
  const whyRead = firstParagraph(markdown, "Why George Should Read It");
  const markdownBlock = fencedMarkdown(markdown);

  const paper = {
    id: fields.id,
    title: fields.title,
    authors: fields.authors || "Unknown",
    year: fields.year,
    category: fields.category,
    status: fields.status,
    priority: fields.priority,
    tags: parseYamlArray(fields.tags),
    summary,
    whyRead,
    bestFor,
    notes,
    nextStep,
    sourceName: fields.source_name || "George AI",
    sourceUrl: fields.source_url || "",
    paperUrl: fields.paper_url,
    markdown: markdownBlock || "",
    sourcePath,
  };

  const errors = [];
  validatePublicText(errors, sourcePath, markdown);
  assertMinimumWords(errors, `${sourcePath} Summary`, paper.summary, 4);
  assertMinimumWords(errors, `${sourcePath} Why George Should Read It`, paper.whyRead, 8);

  if (bestFor.length === 0) errors.push(`${sourcePath} missing Best For items`);
  if (notes.length === 0) errors.push(`${sourcePath} missing Notes items`);
  if (!nextStep) errors.push(`${sourcePath} missing Next Reading Action`);
  if (!paper.markdown) paper.markdown = buildPublicMarkdown(paper);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  return paper;
}

function tsString(value) {
  return JSON.stringify(value, null, 2);
}

function generatedLib(papers) {
  const categories = [...new Set(papers.map((paper) => paper.category))].sort();
  const statuses = [...new Set(papers.map((paper) => paper.status))].sort();
  const priorities = [...new Set(papers.map((paper) => paper.priority))].sort();

  return `// Generated by scripts/sync-george-ai.mjs from ../george-ai/papers.
// Do not edit paper content by hand; update george-ai and rerun npm run sync:papers.

export type PaperStatus = string;

export type PaperCategory = string;

export type Paper = {
  id: string;
  title: string;
  authors: string;
  year: string;
  category: PaperCategory;
  status: PaperStatus;
  priority: string;
  tags: string[];
  summary: string;
  whyRead: string;
  bestFor: string[];
  notes: string[];
  nextStep: string;
  sourceName: string;
  sourceUrl: string;
  paperUrl: string;
  markdown: string;
  sourcePath: string;
};

export const papers: Paper[] = ${tsString(papers)};

export const categories = ${tsString(categories)};

export const statuses = ${tsString(statuses)};

export const priorities = ${tsString(priorities)};

export function getTodaysPaper(date = new Date()) {
  const publicPapers = papers.filter((paper) => paper.status !== "draft");
  const core = publicPapers.filter((paper) => paper.priority === "core");
  const pool = core.length > 0 ? core : publicPapers;
  const dayIndex = Math.floor(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / 86_400_000,
  );

  return pool[dayIndex % pool.length] || papers[0];
}
`;
}

async function main() {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md")
    .map((entry) => entry.name)
    .sort();

  const papers = [];

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const markdown = await readFile(sourcePath, "utf8");
    papers.push(toPaper(markdown, file));
  }

  papers.sort((left, right) => {
    const priorityScore = (paper) => (paper.priority === "core" ? 2 : paper.priority === "featured" ? 1 : 0);
    return (
      priorityScore(right) - priorityScore(left) ||
      left.category.localeCompare(right.category) ||
      left.title.localeCompare(right.title)
    );
  });

  const ids = new Set(papers.map((paper) => paper.id));
  if (ids.size !== papers.length) {
    throw new Error("Paper ids are not unique.");
  }

  if (!checkOnly) {
    await mkdir(path.dirname(dataPath), { recursive: true });
    await mkdir(path.dirname(libPath), { recursive: true });
    await writeFile(dataPath, `${JSON.stringify(papers, null, 2)}\n`);
    await writeFile(libPath, generatedLib(papers));
  }

  console.log(
    JSON.stringify(
      {
        paperCount: papers.length,
        categories: new Set(papers.map((paper) => paper.category)).size,
        checkOnly,
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

