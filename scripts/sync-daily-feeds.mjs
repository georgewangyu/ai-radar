import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoot =
  process.env.GEORGE_AI_PUBLIC_FEEDS_DIR ||
  path.resolve(root, "..", "george-ai", "public-feeds");
const targetRoot = path.join(root, "feeds");
const checkOnly = process.argv.includes("--check");

const unsafePatterns = [
  { label: "local filesystem path", pattern: /\/Users\// },
  { label: "dotenv or token path", pattern: /\.(?:env|tokens)\b/i },
  { label: "private marker", pattern: /\bPRIVATE[-_ ]/i },
  { label: "secret assignment", pattern: /\b(?:api[_-]?key|secret|password|GITHUB_TOKEN)\s*=/i },
  { label: "email address", pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i },
];

async function collectMarkdownFiles(dir) {
  let entries;

  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
    } else if (entry.isFile() && /^\d{4}-\d{2}-\d{2}\.md$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function section(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    markdown.match(new RegExp(`(?:^|\\n)## ${escaped}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, "i"))?.[1]?.trim() ||
    ""
  );
}

function validate(markdown, sourcePath) {
  const errors = [];

  if (!/^# AI Radar Daily Feed - \d{4}-\d{2}-\d{2}$/m.test(markdown)) {
    errors.push("missing dated daily-feed title");
  }
  if (!/<!-- ai-radar-feed-version: 2 -->/.test(markdown)) {
    errors.push("missing feed version 2 marker");
  }
  if (!/<!-- ai-radar-feed-type: daily -->/.test(markdown)) {
    errors.push("missing daily feed type marker");
  }

  for (const heading of ["Summary", "Recommended Tonight", "Full Candidate List", "Source Receipts"]) {
    if (!section(markdown, heading)) errors.push(`missing ${heading} section`);
  }

  const recommendationLinks = [
    ...section(markdown, "Recommended Tonight").matchAll(/^- \[[^\]]+\]\(https?:\/\/[^)]+\)/gm),
  ];
  if (recommendationLinks.length < 4 || recommendationLinks.length > 5) {
    errors.push(`Recommended Tonight has ${recommendationLinks.length} paper links; expected 4-5`);
  }

  for (const { label, pattern } of unsafePatterns) {
    if (pattern.test(markdown)) errors.push(`contains ${label}`);
  }

  if (errors.length > 0) {
    throw new Error(`${sourcePath}:\n- ${errors.join("\n- ")}`);
  }
}

async function main() {
  const sourceFiles = await collectMarkdownFiles(sourceRoot);
  let copied = 0;

  for (const sourcePath of sourceFiles) {
    const markdown = await readFile(sourcePath, "utf8");
    validate(markdown, sourcePath);

    if (checkOnly) continue;

    const relativePath = path.relative(sourceRoot, sourcePath);
    const targetPath = path.join(targetRoot, relativePath);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, markdown, "utf8");
    copied += 1;
  }

  console.log(
    JSON.stringify(
      {
        sourceRoot,
        sourceCount: sourceFiles.length,
        copied,
        checkOnly,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
