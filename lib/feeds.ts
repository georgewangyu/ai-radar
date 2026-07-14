import "server-only";

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type FeedType = "daily" | "weekly";

export type FeedRecommendation = {
  title: string;
  url: string;
};

export type RadarFeed = {
  date: string;
  id: string;
  markdown: string;
  receipts: string[];
  recommendations: FeedRecommendation[];
  summary: string;
  summaryText: string;
  title: string;
  type: FeedType;
};

const feedsRoot = path.join(process.cwd(), "feeds");

function section(markdown: string, heading: string) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (
    markdown.match(new RegExp(`(?:^|\\n)## ${escaped}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, "i"))?.[1]?.trim() ||
    ""
  );
}

function feedPaths() {
  if (!existsSync(feedsRoot)) return [];

  return readdirSync(feedsRoot, { recursive: true, encoding: "utf8" })
    .filter(
      (entry): entry is string =>
        /^\d{4}\/\d{2}\/\d{4}-\d{2}-\d{2}(?:-[a-z0-9-]+)?\.md$/.test(entry),
    )
    .map((entry) => path.join(feedsRoot, entry))
    .sort();
}

function readFeed(filePath: string): RadarFeed {
  const markdown = readFileSync(filePath, "utf8");
  const id = path.basename(filePath, ".md");
  const date = id.slice(0, 10);
  const title = markdown.match(/^# (.+)$/m)?.[1]?.trim() || `AI Radar Feed - ${id}`;
  const summary = section(markdown, "Summary");
  const summaryText = summary
    .split("\n")
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean)
    .join(" ");
  const type: FeedType =
    markdown.match(/<!-- ai-radar-feed-type: (daily|weekly) -->/)?.[1] === "daily"
      ? "daily"
      : "weekly";
  const recommendationSection =
    section(markdown, "Recommended Tonight") || section(markdown, "Featured Papers");
  const recommendations = Array.from(
    recommendationSection.matchAll(/^- \[([^\]]+)\]\((https?:\/\/[^)]+)\)/gm),
    (match) => ({ title: match[1], url: match[2] }),
  );
  const receipts = Array.from(
    new Set([...markdown.matchAll(/https?:\/\/[^\s)]+/g)].map((match) => match[0])),
  );

  return { date, id, markdown, receipts, recommendations, summary, summaryText, title, type };
}

export function allFeeds() {
  return feedPaths().map(readFeed).sort((left, right) => right.id.localeCompare(left.id));
}

export function dailyFeeds() {
  return allFeeds().filter((feed) => feed.type === "daily");
}

export function feedById(id: string) {
  const feeds = allFeeds();
  return (
    feeds.find((feed) => feed.id === id) ||
    feeds.find((feed) => feed.type === "daily" && feed.date === id)
  );
}
