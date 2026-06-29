import { expect, test } from "@playwright/test";
import { getTodaysPaper, papers } from "../lib/papers";

const detailPageSample = [
  "transformers",
  "retrieval-augmented-generation-for-knowledge-intensive-nlp-tasks",
  "mamba-linear-time-sequence-modeling-with-selective-state-spaces",
]
  .map((id) => papers.find((paper) => paper.id === id))
  .filter((paper): paper is (typeof papers)[number] => Boolean(paper));

test.describe("AI Radar catalog", () => {
  test("hero open note navigates to the full paper page", async ({ page }) => {
    const todaysPaper = getTodaysPaper();

    await page.goto("/");

    await page.getByRole("link", { name: "Open note" }).click();
    await expect(page).toHaveURL(new RegExp(`/papers/${todaysPaper.id}$`));
    await expect(page.getByRole("heading", { name: todaysPaper.title, level: 1 })).toBeVisible();
  });

  test("catalog controls, selected detail, and paper links work", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("AI Radar");
    await expect(page.getByRole("heading", { name: "AI Radar", level: 1 })).toBeVisible();
    await expect(page.getByText("Catch up to the papers that compound.")).toBeVisible();
    await expect(page.getByText(`${papers.length} matching papers`)).toBeVisible();
    await expect(page.getByLabel("Sort")).toHaveValue("radar");
    await expect(page.getByText("Crash Course Path")).toBeVisible();
    await expect(page.getByText("Install the skill")).toBeVisible();
    await expect(page.getByRole("button", { name: "Unlock install command" })).toBeVisible();
    await expect(page.getByText("npx skills add georgewangyu/ai-radar")).toBeHidden();
    await expect(page.getByRole("heading", { name: "Weekly feed", level: 2 })).toBeVisible();

    await page.getByPlaceholder("Search papers, categories, concepts...").fill("retrieval");
    await expect(
      page.getByText("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks").first(),
    ).toBeVisible();

    const reasoningCount = papers.filter((paper) => paper.category === "Planning/Reasoning").length;
    await page.getByRole("button", { name: "Clear filters" }).click();
    const reasoningRailButton = page.getByRole("button", {
      name: `Planning/Reasoning ${reasoningCount}`,
    });
    if (await reasoningRailButton.isVisible()) {
      await reasoningRailButton.click();
    } else {
      await page.getByLabel("Category filter").selectOption("Planning/Reasoning");
    }
    await expect(page.getByText("CoT (Chain of Thought)").first()).toBeVisible();
    await expect(page.getByText(`${reasoningCount} matching papers`)).toBeVisible();

    await page.getByRole("button", { name: "Clear filters" }).click();
    await page.getByPlaceholder("Search papers, categories, concepts...").fill("Mamba");
    const mambaRow = page.locator("article", {
      hasText: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
    });
    await mambaRow.getByRole("link", { name: "Open" }).click();
    await expect(page).toHaveURL(/\/papers\/mamba-linear-time-sequence-modeling-with-selective-state-spaces$/);
    await expect(
      page.getByRole("heading", {
        name: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
        level: 1,
      }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Copyable Markdown", level: 2 })).toBeVisible();
    await expect(page.getByRole("button", { name: "Copy note" })).toBeVisible();
  });

  test("sort modes reorder the catalog", async ({ page }) => {
    await page.goto("/");

    const defaultFirstRow = await page.locator(".paper-row").first().textContent();

    await page.getByLabel("Sort").selectOption("title");
    const titleFirstRow = await page.locator(".paper-row").first().textContent();
    expect(titleFirstRow).not.toBe(defaultFirstRow);

    await page.getByLabel("Sort").selectOption("newest");
    const newestFirstRow = await page.locator(".paper-row").first().textContent();
    expect(newestFirstRow).not.toBe(titleFirstRow);
  });

  test("copy buttons write paper markdown", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");

    await page.getByRole("button", { name: "Copy note" }).first().click();
    await expect(page.getByRole("button", { name: "Copied" }).first()).toBeVisible();

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(papers.some((paper) => paper.markdown === clipboard)).toBe(true);
    expect(clipboard).toContain("Why it matters:");
  });

  test("lead unlock reveals and copies the setup command", async ({ page, context }) => {
    const payloads: Array<Record<string, unknown>> = [];

    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.route("**/api/leads", async (route) => {
      payloads.push(JSON.parse(route.request().postData() || "{}") as Record<string, unknown>);
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    });
    await page.goto("/");

    await page.getByLabel("Name").fill("Example User");
    await page.getByLabel("Email").fill("person@example.com");
    await page.getByRole("button", { name: "Unlock install command" }).click();
    await expect(page.getByRole("link", { name: "Star the repo" })).toHaveAttribute(
      "href",
      "https://github.com/georgewangyu/ai-radar",
    );
    await page.getByRole("button", { name: "Copy command" }).click();

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toBe(
      "npx skills add georgewangyu/ai-radar --skill ai-radar -g",
    );
    expect(payloads[0]).toMatchObject({ name: "Example User", email: "person@example.com" });
  });

  test("request form defaults to public issue route and shows success", async ({ page }) => {
    const payloads: Array<Record<string, unknown>> = [];

    await page.route("**/api/submit", async (route) => {
      payloads.push(JSON.parse(route.request().postData() || "{}") as Record<string, unknown>);
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          ok: true,
          issueNumber: 42,
          issueUrl: "https://github.com/example/repo/issues/42",
        }),
      });
    });

    await page.goto("/");
    await page.getByRole("link", { name: "Request" }).click();
    await page.getByLabel("Paper or topic").fill("Attention Is All You Need");
    await page
      .getByLabel("Why this fits")
      .fill("I want a foundational paper that explains the transformer architecture.");
    await page
      .getByLabel("Rough note")
      .fill("This should help builders understand why modern LLMs use attention.");
    await page.getByRole("button", { name: "Create request" }).scrollIntoViewIfNeeded();
    await page.getByRole("button", { name: "Create request" }).click();

    await expect(page.getByText("Request sent.")).toBeVisible();
    expect(payloads[0]?.visibility).toBe("public");
    expect(payloads[0]?.submissionType).toBe("request-paper");
  });

  test("mobile layout has no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto("/");

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));

    expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth);
    await expect(page.getByRole("link", { name: "Unlock skill" }).first()).toBeVisible();
    await expect(page.locator(".mobile-filter-bar")).toBeVisible();
    await expect(page.locator(".paper-nav")).toBeHidden();
  });
});

test.describe("Paper detail pages", () => {
  for (const paper of detailPageSample) {
    test(`renders ${paper.id}`, async ({ page }) => {
      await page.goto(`/papers/${paper.id}`);

      await expect(page.getByRole("heading", { name: paper.title, level: 1 })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Copyable Markdown", level: 2 })).toBeVisible();
      await expect(page.getByRole("link", { name: "Paper source" })).toHaveAttribute(
        "href",
        paper.paperUrl,
      );
      await expect(page.locator(".markdown-recipe code")).toContainText(
        paper.markdown
          .split("\n")
          .find((line) => line.startsWith("# ") || line.length > 12) || paper.title,
      );
    });
  }

  test("paper ids are unique", () => {
    expect(new Set(papers.map((paper) => paper.id)).size).toBe(papers.length);
  });

  test("detail page copy button writes the selected note", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const paper = papers.find((item) => item.id === "transformers") || papers[0];

    await page.goto(`/papers/${paper.id}`);
    await page.getByRole("button", { name: "Copy note" }).click();
    await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();

    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboard).toBe(paper.markdown);
  });
});
