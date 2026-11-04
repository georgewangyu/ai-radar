import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { POST as postLead } from "@/app/api/leads/route";
import { POST as postSubmit } from "@/app/api/submit/route";
import { issueBody } from "@/lib/github-issue";
import { paperSubmissionSchema } from "@/lib/submission-schema";

const submission = {
  submissionType: "submit-paper",
  visibility: "public",
  title: "Attention Is All You Need",
  outcome: "The transformer paper every course starts with.",
  notes: "Read sections 3 and 4 first.",
};

function jsonRequest(path: string, body: unknown, headers: Record<string, string> = {}) {
  return new Request(`https://radar.example${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

function stubFetch(response: Response) {
  const fetchMock = vi.fn().mockResolvedValue(response);
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

beforeEach(() => {
  for (const name of [
    "GITHUB_TOKEN",
    "GITHUB_OWNER",
    "GITHUB_REPO",
    "GITHUB_PRIVATE_REPO",
    "GITHUB_API_VERSION",
    "AI_RADAR_REQUEST_ALLOWED_ORIGIN",
    "SUPABASE_URL",
    "SUPABASE_SERVICE_ROLE_KEY",
  ]) {
    vi.stubEnv(name, "");
  }
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/submit", () => {
  test("creates a GitHub issue in the public repo and returns its number", async () => {
    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_REPO", "public-repo");
    const fetchMock = stubFetch(
      Response.json({ number: 7, html_url: "https://github.com/owner/public-repo/issues/7" }),
    );

    const response = await postSubmit(jsonRequest("/api/submit", submission));

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      issueNumber: 7,
      issueUrl: "https://github.com/owner/public-repo/issues/7",
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.github.com/repos/owner/public-repo/issues");
    expect(init.method).toBe("POST");
    expect(init.headers.Accept).toBe("application/vnd.github+json");
    expect(init.headers.Authorization).toBe("Bearer token");
    expect(init.headers["Content-Type"]).toBe("application/json");
    expect(init.headers["X-GitHub-Api-Version"]).toBe("2022-11-28");
    const body = JSON.parse(init.body);
    expect(body.body).toBe(issueBody(paperSubmissionSchema.parse(submission)));
    expect(body.title).toBe("[ai-radar:submit-paper] Attention Is All You Need");
    expect(body.labels).toEqual([
      "ai-radar",
      "source-repo:ai-radar",
      "status:needs-triage",
      "type:submit-paper",
      "visibility:public",
    ]);
  });

  test("private submissions go to the private repo", async () => {
    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_PRIVATE_REPO", "private-repo");
    const fetchMock = stubFetch(Response.json({ number: 1, html_url: "u" }));

    const response = await postSubmit(
      jsonRequest("/api/submit", { ...submission, visibility: "private" }),
    );

    expect(response.status).toBe(200);
    expect(fetchMock.mock.calls[0][0]).toBe(
      "https://api.github.com/repos/owner/private-repo/issues",
    );
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).labels).toContain("visibility:private");
  });

  test.each([
    ["a filled honeypot", { ...submission, website: "bot" }, "website"],
    ["a too-short title", { ...submission, title: "x" }, "title"],
    ["a missing rough note", { ...submission, notes: "" }, "notes"],
    ["an unknown submission type", { ...submission, submissionType: "hack" }, "submissionType"],
    ["malformed json", "{not json", null],
  ])("rejects %s with 400 and never calls GitHub", async (_label, body, field) => {
    const fetchMock = stubFetch(Response.json({}));

    const response = await postSubmit(jsonRequest("/api/submit", body));

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toBe("Invalid submission.");
    if (field) expect(json.issues[field]).toEqual(expect.any(Array));
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("a configured origin rejects other origins but allows a missing Origin header", async () => {
    vi.stubEnv("AI_RADAR_REQUEST_ALLOWED_ORIGIN", "https://radar.example");
    const fetchMock = stubFetch(Response.json({}));

    const foreign = await postSubmit(
      jsonRequest("/api/submit", submission, { Origin: "https://evil.example" }),
    );
    expect(foreign.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();

    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_REPO", "public-repo");
    fetchMock.mockResolvedValue(Response.json({ number: 3, html_url: "u" }));
    const noOrigin = await postSubmit(jsonRequest("/api/submit", submission));

    expect(noOrigin.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("a matching origin reaches GitHub", async () => {
    vi.stubEnv("AI_RADAR_REQUEST_ALLOWED_ORIGIN", "https://radar.example");
    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_REPO", "public-repo");
    const fetchMock = stubFetch(Response.json({ number: 2, html_url: "u" }));

    const response = await postSubmit(
      jsonRequest("/api/submit", submission, { Origin: "https://radar.example" }),
    );

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("missing GitHub config returns a generic 500 without calling GitHub", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const fetchMock = stubFetch(Response.json({}));

    const response = await postSubmit(jsonRequest("/api/submit", submission));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not create paper request." });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("a network error reaching GitHub returns a generic 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_REPO", "public-repo");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fetch failed")));

    const response = await postSubmit(jsonRequest("/api/submit", submission));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not create paper request." });
  });

  test("a GitHub failure returns a generic 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.stubEnv("GITHUB_TOKEN", "token");
    vi.stubEnv("GITHUB_OWNER", "owner");
    vi.stubEnv("GITHUB_REPO", "public-repo");
    const fetchMock = stubFetch(new Response("boom", { status: 502 }));

    const response = await postSubmit(jsonRequest("/api/submit", submission));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not create paper request." });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

describe("POST /api/leads", () => {
  test("upserts the lead into Supabase with consent and request metadata", async () => {
    vi.stubEnv("SUPABASE_URL", "https://project.supabase.co/");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "service-key");
    const fetchMock = stubFetch(new Response(null, { status: 201 }));

    const response = await postLead(
      jsonRequest(
        "/api/leads",
        { email: " Reader@Example.com ", name: " Ada " },
        { Referer: "https://radar.example/", "User-Agent": "test-agent" },
      ),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(
      "https://project.supabase.co/rest/v1/radar_leads?on_conflict=product,email",
    );
    expect(init.method).toBe("POST");
    expect(init.headers.apikey).toBe("service-key");
    expect(init.headers.Authorization).toBe("Bearer service-key");
    expect(init.headers.Prefer).toBe("resolution=merge-duplicates");
    expect(JSON.parse(init.body)).toMatchObject({
      email: "reader@example.com",
      name: "Ada",
      product: "ai-radar",
      source: "website-install-gate",
      consent_updates: true,
      install_command_revealed: true,
      repo_url: "https://github.com/georgewangyu/ai-radar",
      referrer: "https://radar.example/",
      user_agent: "test-agent",
    });
  });

  test.each([
    ["a filled honeypot", { email: "a@b.co", name: "Ada", website: "bot" }, "website"],
    ["an invalid email", { email: "nope", name: "Ada" }, "email"],
    ["a missing name", { email: "a@b.co" }, "name"],
  ])("rejects %s with 400 and never calls Supabase", async (_label, body, field) => {
    const fetchMock = stubFetch(new Response(null));

    const response = await postLead(jsonRequest("/api/leads", body));

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toBe("Invalid lead.");
    expect(json.issues[field]).toEqual(expect.any(Array));
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("a Supabase error returns a generic 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.stubEnv("SUPABASE_URL", "https://project.supabase.co");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "service-key");
    const fetchMock = stubFetch(new Response("conflict", { status: 409 }));

    const response = await postLead(jsonRequest("/api/leads", { email: "a@b.co", name: "Ada" }));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not save lead." });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("a network error reaching Supabase returns a generic 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.stubEnv("SUPABASE_URL", "https://project.supabase.co");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "service-key");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fetch failed")));

    const response = await postLead(jsonRequest("/api/leads", { email: "a@b.co", name: "Ada" }));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not save lead." });
  });

  test("missing Supabase config returns a generic 500", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    vi.stubEnv("SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
    const fetchMock = stubFetch(new Response(null));

    const response = await postLead(jsonRequest("/api/leads", { email: "a@b.co", name: "Ada" }));

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({ error: "Could not save lead." });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
