import type { PaperSubmission } from "./submission-schema";

const sourceRepo = "ai-radar";

const typeLabels: Record<PaperSubmission["submissionType"], string> = {
  "submit-paper": "type:submit-paper",
  "request-paper": "type:request-paper",
  "improve-note": "type:improve-note",
};

const typeTitles: Record<PaperSubmission["submissionType"], string> = {
  "submit-paper": "Submit paper",
  "request-paper": "Request paper",
  "improve-note": "Improve note",
};

function compactTitle(input: string) {
  const singleLine = input.replace(/\s+/g, " ").trim();
  return singleLine.length > 78 ? `${singleLine.slice(0, 75)}...` : singleLine;
}

export function issueTitle(submission: PaperSubmission) {
  return `[ai-radar:${submission.submissionType}] ${compactTitle(submission.title)}`;
}

export function issueLabels(submission: PaperSubmission) {
  return [
    sourceRepo,
    `source-repo:${sourceRepo}`,
    "status:needs-triage",
    typeLabels[submission.submissionType],
    `visibility:${submission.visibility}`,
  ];
}

export function issueBody(submission: PaperSubmission) {
  const handle = submission.handle || "_Anonymous / not provided_";
  const context = submission.context || "_Not provided_";
  const visibility =
    submission.visibility === "private" ? "Private review issue" : "Public GitHub issue";

  return [
    "## AI Radar submission",
    "",
    `**Type:** ${typeTitles[submission.submissionType]}`,
    `**Source repo:** ${sourceRepo}`,
    `**Visibility:** ${visibility}`,
    `**Handle:** ${handle}`,
    "",
    "## Paper or topic",
    "",
    submission.title,
    "",
    "## Why this fits",
    "",
    submission.outcome,
    "",
    "## Rough note or request",
    "",
    submission.notes,
    "",
    "## Link or context",
    "",
    context,
    "",
    "## Triage checklist",
    "",
    "- [ ] Check whether this is already in the public catalog",
    "- [ ] Decide whether it belongs in the crash-course path, weekly feed, or candidate queue",
    "- [ ] Add George's short note, best-for tags, and next-step reading prompt",
    "- [ ] Confirm paper URL and public-safe wording before publishing",
  ].join("\n");
}

export async function createGitHubIssue(submission: PaperSubmission) {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo =
    submission.visibility === "private"
      ? process.env.GITHUB_PRIVATE_REPO
      : process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    throw new Error("Missing GitHub issue environment configuration.");
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": process.env.GITHUB_API_VERSION || "2022-11-28",
      },
      body: JSON.stringify({
        title: issueTitle(submission),
        body: issueBody(submission),
        labels: issueLabels(submission),
      }),
    },
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub issue creation failed: ${response.status} ${body}`);
  }

  return (await response.json()) as { html_url: string; number: number };
}
