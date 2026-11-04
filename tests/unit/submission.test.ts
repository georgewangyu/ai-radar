import { describe, expect, test } from "vitest";
import { issueBody, issueLabels, issueTitle } from "@/lib/github-issue";
import { paperSubmissionSchema, type PaperSubmission } from "@/lib/submission-schema";

function parsed(overrides: Record<string, unknown> = {}): PaperSubmission {
  return paperSubmissionSchema.parse({
    submissionType: "request-paper",
    title: "  Attention Is All You Need  ",
    outcome: "The transformer paper every course starts with.",
    notes: "Read sections 3 and 4 first.",
    ...overrides,
  });
}

describe("paperSubmissionSchema", () => {
  test("trims fields and defaults visibility, context, handle and honeypot", () => {
    expect(parsed()).toEqual({
      submissionType: "request-paper",
      visibility: "public",
      title: "Attention Is All You Need",
      outcome: "The transformer paper every course starts with.",
      notes: "Read sections 3 and 4 first.",
      context: "",
      handle: "",
      website: "",
    });
  });

  test("reports type, length and honeypot violations by field", () => {
    const result = paperSubmissionSchema.safeParse({
      submissionType: "hack",
      title: "x",
      outcome: "short",
      notes: "short",
      context: "c".repeat(1001),
      handle: "h".repeat(121),
      website: "bot",
    });
    expect(result.success).toBe(false);
    if (result.success) return;
    expect(Object.keys(result.error.flatten().fieldErrors).sort()).toEqual(
      ["context", "handle", "notes", "outcome", "submissionType", "title", "website"],
    );
  });
});

describe("issue formatting", () => {
  test("title is prefixed by type and compacted to 78 chars", () => {
    const title = issueTitle(parsed({ title: "word ".repeat(20) }));
    expect(title.startsWith("[ai-radar:request-paper] ")).toBe(true);
    expect(title.endsWith("...")).toBe(true);
    expect(title.length).toBe("[ai-radar:request-paper] ".length + 78);
  });

  test("labels carry repo, triage, type and visibility", () => {
    expect(issueLabels(parsed({ visibility: "private" }))).toEqual([
      "ai-radar",
      "source-repo:ai-radar",
      "status:needs-triage",
      "type:request-paper",
      "visibility:private",
    ]);
  });

  test("body shows placeholders for missing handle and context", () => {
    const body = issueBody(parsed());
    expect(body).toContain("**Type:** Request paper");
    expect(body).toContain("**Handle:** _Anonymous / not provided_");
    expect(body).toContain("## Link or context\n\n_Not provided_");
    expect(body).toContain("## Paper or topic\n\nAttention Is All You Need");
    expect(body).toContain("## Rough note or request\n\nRead sections 3 and 4 first.");
    expect(body).toContain("**Visibility:** Public GitHub issue");
  });
});
