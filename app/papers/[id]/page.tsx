import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyMarkdownButton } from "./copy-markdown-button";
import { papers } from "@/lib/papers";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return papers.map((paper) => ({ id: paper.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const paper = papers.find((item) => item.id === id);

  if (!paper) {
    return { title: "Paper not found | AI Radar" };
  }

  return {
    title: `${paper.title} | AI Radar`,
    description: paper.summary,
  };
}

export default async function PaperPage({ params }: Props) {
  const { id } = await params;
  const paper = papers.find((item) => item.id === id);

  if (!paper) {
    notFound();
  }

  return (
    <main className="shell">
      <article className="paper-page">
        <Link className="back-link" href="/">
          Back to AI Radar
        </Link>
        <h1>{paper.title}</h1>
        <p className="hero-copy">
          {paper.category} / {paper.year} / {paper.priority}
        </p>

        <div className="paper-page-grid">
          <div>
            <section>
              <h2>Summary</h2>
              <p>{paper.summary}</p>
            </section>

            <section>
              <h2>Why George Should Read It</h2>
              <p>{paper.whyRead}</p>
            </section>

            <section>
              <h2>Best For</h2>
              <ul>
                {paper.bestFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Notes</h2>
              <ul>
                {paper.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Next Reading Action</h2>
              <p>{paper.nextStep}</p>
            </section>

            <section>
              <h2>Copyable Markdown</h2>
              <pre className="markdown-recipe">
                <code>{paper.markdown}</code>
              </pre>
            </section>
          </div>

          <aside className="paper-side">
            <div className="paper-meta-grid">
              <span>Authors</span>
              <strong>{paper.authors}</strong>
              <span>Year</span>
              <strong>{paper.year}</strong>
              <span>Category</span>
              <strong>{paper.category}</strong>
              <span>Source</span>
              <strong>{paper.sourceName}</strong>
            </div>
            <div className="detail-actions">
              <a href={paper.paperUrl}>Paper source</a>
              <a href={paper.sourceUrl}>Catalog source</a>
            </div>
            <CopyMarkdownButton markdown={paper.markdown} />
          </aside>
        </div>
      </article>
    </main>
  );
}

