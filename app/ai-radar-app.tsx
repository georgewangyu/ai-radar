"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Paper } from "@/lib/papers";
import { categories, getTodaysPaper, priorities, statuses } from "@/lib/papers";

type Status = "idle" | "submitting" | "success" | "error";
type SortMode = "radar" | "title" | "category" | "newest";

type ErrorResponse = {
  error?: string;
  issues?: Record<string, string[] | undefined>;
};

type Props = {
  papers: Paper[];
};

const submissionTypes = [
  ["request-paper", "Request paper"],
  ["submit-paper", "Submit paper"],
  ["improve-note", "Improve note"],
] as const;

const sortOptions: Array<[SortMode, string]> = [
  ["radar", "Radar order"],
  ["title", "A-Z"],
  ["category", "Category"],
  ["newest", "Newest first"],
];

const pageSize = 12;

const issueLabels: Record<string, string> = {
  title: "Paper or topic",
  outcome: "Why this fits",
  notes: "Rough note",
  context: "Link or context",
  handle: "Handle",
};

const skillInstallCommand =
  "npx skills add georgewangyu/ai-radar --skill ai-radar -g";

const creatorLinks = [
  ["GitHub", "https://github.com/georgewangyu"],
  ["X", "https://x.com/georgewangyu"],
  ["Email", "mailto:hellogeorgehq@gmail.com"],
  ["LinkedIn", "https://www.linkedin.com/in/georgewangyu/"],
] as const;

const pathCategories = [
  "Survey",
  "Foundational Modelling",
  "Planning/Reasoning",
  "Agents",
  "RAG and memory",
  "Benchmarks",
];

function priorityRank(paper: Paper) {
  if (paper.priority === "core") return 3;
  if (paper.priority === "featured") return 2;
  return 1;
}

function sortPapers(items: Paper[], sortMode: SortMode) {
  if (sortMode === "title") {
    return [...items].sort((left, right) => left.title.localeCompare(right.title));
  }

  if (sortMode === "category") {
    return [...items].sort(
      (left, right) =>
        left.category.localeCompare(right.category) ||
        priorityRank(right) - priorityRank(left) ||
        left.title.localeCompare(right.title),
    );
  }

  if (sortMode === "newest") {
    return [...items].sort(
      (left, right) =>
        right.year.localeCompare(left.year) ||
        priorityRank(right) - priorityRank(left) ||
        left.title.localeCompare(right.title),
    );
  }

  return [...items].sort(
    (left, right) =>
      priorityRank(right) - priorityRank(left) ||
      left.category.localeCompare(right.category) ||
      left.title.localeCompare(right.title),
  );
}

async function errorMessageFor(response: Response) {
  if (response.status !== 400) {
    return "Something went wrong. Try again or send the idea another way.";
  }

  const body = (await response.json().catch(() => null)) as ErrorResponse | null;
  const fieldMessages = Object.entries(body?.issues || {}).flatMap(
    ([field, messages]) =>
      (messages || []).map((message) => `${issueLabels[field] || field}: ${message}`),
  );

  return fieldMessages.length > 0
    ? fieldMessages.join(" ")
    : body?.error || "Please check the form and try again.";
}

export function AiRadarApp({ papers }: Props) {
  const todaysPaper = getTodaysPaper();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("radar");
  const [selectedId, setSelectedId] = useState(todaysPaper.id);
  const [page, setPage] = useState(1);
  const [submissionType, setSubmissionType] = useState("request-paper");
  const [formStatus, setFormStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const categoryCounts = useMemo(
    () =>
      new Map<string, number>(
        categories.map((item) => [
          item,
          papers.filter((paper) => paper.category === item).length,
        ]),
      ),
    [papers],
  );

  const filteredPapers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return papers.filter((paper) => {
      const matchesCategory = category === "All" || paper.category === category;
      const matchesPriority = priority === "All" || paper.priority === priority;
      const matchesStatus = status === "All" || paper.status === status;
      const haystack = [
        paper.title,
        paper.authors,
        paper.year,
        paper.category,
        paper.priority,
        paper.status,
        paper.summary,
        paper.whyRead,
        paper.bestFor.join(" "),
        paper.notes.join(" "),
        paper.tags.join(" "),
        paper.markdown,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        matchesPriority &&
        matchesStatus &&
        (!normalizedQuery || haystack.includes(normalizedQuery))
      );
    });
  }, [category, papers, priority, query, status]);

  const sortedPapers = useMemo(
    () => sortPapers(filteredPapers, sortMode),
    [filteredPapers, sortMode],
  );
  const pageCount = Math.max(1, Math.ceil(sortedPapers.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pageEnd = Math.min(currentPage * pageSize, sortedPapers.length);
  const visiblePapers = sortedPapers.slice(0, pageEnd);
  const selectedPaper =
    papers.find((paper) => paper.id === selectedId) || sortedPapers[0] || todaysPaper;

  const crashCoursePath = useMemo(() => {
    return pathCategories
      .map((pathCategory) => {
        const paper = papers.find(
          (item) =>
            item.category === pathCategory &&
            (item.priority === "core" || item.status !== "draft"),
        );

        return paper ? [pathCategory, paper] as const : null;
      })
      .filter((item): item is readonly [string, Paper] => Boolean(item));
  }, [papers]);

  useEffect(() => {
    if (sortedPapers.length > 0 && !sortedPapers.some((paper) => paper.id === selectedId)) {
      setSelectedId(sortedPapers[0].id);
    }
  }, [selectedId, sortedPapers]);

  useEffect(() => {
    setPage(1);
  }, [category, priority, query, sortMode, status]);

  async function copyPaperNote(paper: Paper) {
    await navigator.clipboard.writeText(paper.markdown);
    setCopied(paper.id);
    window.setTimeout(() => setCopied(""), 1400);
  }

  async function copySetupCommand() {
    await navigator.clipboard.writeText(skillInstallCommand);
    setCopied("setup-command");
    window.setTimeout(() => setCopied(""), 1400);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setFormStatus("submitting");
    setError("");

    const form = new FormData(formElement);
    const payload = {
      submissionType: String(form.get("submissionType") || submissionType),
      visibility: String(form.get("visibility") || "public"),
      title: String(form.get("title") || ""),
      outcome: String(form.get("outcome") || ""),
      notes: String(form.get("notes") || ""),
      context: String(form.get("context") || ""),
      handle: String(form.get("handle") || ""),
      website: String(form.get("website") || ""),
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setFormStatus("error");
        setError(await errorMessageFor(response));
        return;
      }

      formElement.reset();
      setSubmissionType("request-paper");
      setFormStatus("success");
    } catch {
      setFormStatus("error");
      setError("Something went wrong. Try again or send the idea another way.");
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="mark">AI</span>
          <span>AI Radar</span>
        </a>
        <nav className="nav-pills" aria-label="Page navigation">
          <a href="#catalog">Catalog</a>
          <a href="#feed">Feed</a>
          <a href="#skill">Skill</a>
          <a href="#request">Request</a>
        </nav>
        <button className="primary nav-submit" onClick={copySetupCommand}>
          {copied === "setup-command" ? "Copied" : "Install skill"}
        </button>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy-block">
          <h1 id="page-title">AI Radar</h1>
          <p className="hero-line">Catch up to the papers that compound.</p>
          <p className="hero-copy">
            A crash-course catalog for builders who want the minimum useful
            path through frontier AI research, without turning paper reading
            into a second job.
          </p>
          <div className="creator-links-block">
            <p className="creator-links-title">Created by George from Henry Shi's AI Crash Course seed list</p>
            <nav className="creator-links" aria-label="George links">
              {creatorLinks.map(([label, href]) => (
                <a href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <aside className="hero-note" id="today">
          <span>Today's paper</span>
          <strong>{todaysPaper.title}</strong>
          <p>{todaysPaper.summary}</p>
          <Link href={`/papers/${todaysPaper.id}`}>Open note</Link>
        </aside>
      </section>

      <section className="workbench" aria-label="AI Radar workbench">
        <div className="catalog-panel" id="catalog">
          <div className="section-head">
            <div>
              <h2>Paper catalog</h2>
              <p>{sortedPapers.length} matching papers</p>
            </div>
            <button
              className="ghost"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setPriority("All");
                setStatus("All");
              }}
            >
              Clear filters
            </button>
          </div>

          <div className="mobile-filter-bar" aria-label="Mobile filters">
            <label>
              <span>Category</span>
              <select
                aria-label="Category filter"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option>All</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Priority</span>
              <select
                aria-label="Priority filter"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <option>All</option>
                {priorities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="controls">
            <input
              aria-label="Search papers"
              placeholder="Search papers, categories, concepts..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <label className="select-control">
              <span>Status</span>
              <select
                aria-label="Status filter"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option>All</option>
                {statuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="select-control">
              <span>Sort</span>
              <select
                aria-label="Sort"
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
              >
                {sortOptions.map(([value, label]) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="catalog-layout">
            <nav className="paper-nav" aria-label="Categories">
              <button
                className={category === "All" ? "active" : ""}
                onClick={() => setCategory("All")}
              >
                <span>All</span>
                <strong>{papers.length}</strong>
              </button>
              {categories.map((item) => (
                <button
                  className={category === item ? "active" : ""}
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                  <strong>{categoryCounts.get(item) || 0}</strong>
                </button>
              ))}
            </nav>

            <div className="paper-list" aria-label="Papers">
              {visiblePapers.map((paper) => (
                <article
                  className={`paper-row ${selectedPaper.id === paper.id ? "selected" : ""}`}
                  key={paper.id}
                >
                  <button onClick={() => setSelectedId(paper.id)}>
                    <span className="meta-line">
                      {paper.category} / {paper.year} / {paper.priority}
                    </span>
                    <strong>{paper.title}</strong>
                    <p>{paper.summary}</p>
                  </button>
                  <div className="row-actions">
                    <Link href={`/papers/${paper.id}`}>Open</Link>
                    <button onClick={() => copyPaperNote(paper)}>
                      {copied === paper.id ? "Copied" : "Copy note"}
                    </button>
                  </div>
                </article>
              ))}
              {pageEnd < sortedPapers.length && (
                <button className="load-more" onClick={() => setPage((value) => value + 1)}>
                  Load more papers
                </button>
              )}
            </div>
          </div>
        </div>

        <aside className="detail-panel" aria-label="Selected paper">
          <span className="detail-heading">Selected paper</span>
          <h2>{selectedPaper.title}</h2>
          <p>{selectedPaper.whyRead}</p>
          <div className="paper-meta-grid">
            <span>Year</span>
            <strong>{selectedPaper.year}</strong>
            <span>Category</span>
            <strong>{selectedPaper.category}</strong>
            <span>Priority</span>
            <strong>{selectedPaper.priority}</strong>
          </div>
          <div className="note-list">
            <span>Best for</span>
            <ul>
              {selectedPaper.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="next-step">
            <span>Next reading action</span>
            <p>{selectedPaper.nextStep}</p>
          </div>
          <div className="detail-actions">
            <a href={selectedPaper.paperUrl}>Paper source</a>
            <Link href={`/papers/${selectedPaper.id}`}>Full note</Link>
          </div>
        </aside>
      </section>

      <section className="radar-grid">
        <div className="path-panel">
          <div className="section-head">
            <div>
              <h2>Crash Course Path</h2>
              <p>Start with surveys, then move into the papers that explain the current stack.</p>
            </div>
          </div>
          <ol className="path-list">
            {crashCoursePath.map(([pathCategory, paper], index) => (
              <li key={pathCategory}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{pathCategory}</strong>
                  <Link href={`/papers/${paper.id}`}>{paper.title}</Link>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="source-panel">
          <div className="source-visual" aria-hidden="true">
            <span>README</span>
            <strong>AI Crash Course</strong>
            <p>Survey papers / foundational modeling / reasoning / agents / benchmarks</p>
          </div>
          <h2>Seeded from a builder's reading list</h2>
          <p>
            Henry Shi's AI Crash Course is the starting map. AI Radar turns that
            list into a searchable catalog, weekly feed, and installable skill.
          </p>
          <a href="https://github.com/henrythe9th/AI-Crash-Course">View Henry's source</a>
        </div>
      </section>

      <section className="agent-setup" id="skill">
        <div>
          <h2>Install the skill</h2>
          <p>
            Add AI Radar to Codex, Claude Code, Cursor, or another agent. Ask for
            today's paper, a weekly digest, or a topic-specific path.
          </p>
        </div>
        <div className="setup-command">
          <code>{skillInstallCommand}</code>
          <button onClick={copySetupCommand}>
            {copied === "setup-command" ? "Copied" : "Copy command"}
          </button>
        </div>
      </section>

      <section className="feed-panel" id="feed">
        <div>
          <h2>Weekly feed</h2>
          <p>
            The generated feed rotates the catalog into a small daily reading
            plan so the skill has a stable source of truth.
          </p>
        </div>
        <pre>{`npm run sync:papers
npm run feed:weekly
npm run --silent feed:latest`}</pre>
      </section>

      <section className="request-section" id="request">
        <div>
          <h2>Request a paper</h2>
          <p>
            Suggest a missing paper, ask for a better note, or send a topic that
            should become part of the crash-course path.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" />
          <div className="segmented" role="group" aria-label="Submission type">
            {submissionTypes.map(([value, label]) => (
              <label key={value}>
                <input
                  type="radio"
                  name="submissionType"
                  value={value}
                  checked={submissionType === value}
                  onChange={() => setSubmissionType(value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <label>
            Paper or topic
            <input name="title" placeholder="Mamba, AI memory, evals..." />
          </label>
          <label>
            Why this fits
            <textarea name="outcome" placeholder="What should this help a builder understand?" />
          </label>
          <label>
            Rough note
            <textarea name="notes" placeholder="Link, claim, or reading-path gap." />
          </label>
          <label>
            Link or context
            <input name="context" placeholder="arXiv, GitHub, blog, or video URL" />
          </label>
          <label>
            Handle
            <input name="handle" placeholder="Optional" />
          </label>
          <fieldset>
            <legend>Visibility</legend>
            <label>
              <input type="radio" name="visibility" value="public" defaultChecked />
              Public issue
            </label>
            <label>
              <input type="radio" name="visibility" value="private" />
              Private review
            </label>
          </fieldset>
          <button className="primary" disabled={formStatus === "submitting"}>
            {formStatus === "submitting" ? "Sending..." : "Create request"}
          </button>
          {formStatus === "success" && <p className="success">Request sent.</p>}
          {formStatus === "error" && <p className="error">{error}</p>}
        </form>
      </section>
    </main>
  );
}
