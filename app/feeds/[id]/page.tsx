import Link from "next/link";
import { notFound } from "next/navigation";
import { allFeeds } from "@/lib/feeds";

type Props = {
  params: Promise<{ id: string }>;
};

const feeds = allFeeds();

export function generateStaticParams() {
  return feeds.map((feed) => ({ id: feed.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const feed = feeds.find((item) => item.id === id);

  if (!feed) return { title: "Feed not found | AI Radar" };

  return {
    title: `${feed.id} | AI Radar`,
    description: feed.summaryText.slice(0, 160),
  };
}

export default async function FeedPage({ params }: Props) {
  const { id } = await params;
  const feed = feeds.find((item) => item.id === id);

  if (!feed) notFound();

  return (
    <main className="shell">
      <article className="paper-page">
        <Link className="back-link" href={feed.type === "daily" ? "/daily" : "/"}>
          Back to {feed.type === "daily" ? "Daily Radar" : "AI Radar"}
        </Link>
        <h1>{feed.title}</h1>
        {feed.summary && <p className="hero-copy">{feed.summary}</p>}

        <section>
          <h2>Copyable Feed Markdown</h2>
          <pre className="markdown-recipe">
            <code>{feed.markdown}</code>
          </pre>
        </section>

        {feed.receipts.length > 0 && (
          <section>
            <h2>Source Receipts</h2>
            <div className="receipt-list">
              {feed.receipts.map((receipt) => (
                <a href={receipt} key={receipt}>
                  {receipt}
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
