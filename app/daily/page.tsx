import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "../brand-mark";
import { dailyFeeds } from "@/lib/feeds";

export const metadata: Metadata = {
  title: "Daily Radar | AI Radar",
  description: "Dated AI paper discovery lists with a full candidate set and 4-5 recommended papers.",
};

export default function DailyRadarPage() {
  const feeds = dailyFeeds();

  return (
    <main className="shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <BrandMark />
          <span>AI Radar</span>
        </Link>
        <nav className="nav-pills" aria-label="Page navigation">
          <Link aria-current="page" className="active" href="/daily">
            Daily Radar
          </Link>
          <Link href="/#catalog">Library</Link>
          <Link href="/#skill">Skill</Link>
        </nav>
        <Link className="primary nav-submit" href="/#request">
          Request a paper
        </Link>
      </header>

      <article className="daily-page">
        <header className="daily-intro">
          <span className="eyebrow">Evening research menu</span>
          <h1>Daily Radar</h1>
          <p>
            The full deduplicated candidate list, followed by 4-5 papers worth
            inspecting during the evening second day. Recommendations are a
            menu, not five mandatory assignments.
          </p>
        </header>

        {feeds.length > 0 ? (
          <div className="daily-list" aria-label="Daily paper radar archive">
            {feeds.map((feed) => (
              <article className="daily-entry" key={feed.id}>
                <div className="daily-entry-date">
                  <span>{feed.date}</span>
                  <small>{feed.recommendations.length} recommended</small>
                </div>
                <div>
                  <h2>
                    <Link href={`/feeds/${feed.id}`}>{feed.title}</Link>
                  </h2>
                  {feed.summaryText && <p>{feed.summaryText}</p>}
                  {feed.recommendations.length > 0 && (
                    <ol className="daily-recommendations">
                      {feed.recommendations.slice(0, 5).map((paper) => (
                        <li key={`${feed.id}-${paper.url}`}>
                          <a href={paper.url}>{paper.title}</a>
                        </li>
                      ))}
                    </ol>
                  )}
                  <Link className="daily-open" href={`/feeds/${feed.id}`}>
                    Open full candidate list
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <section className="daily-empty">
            <h2>The first evening radar is scheduled.</h2>
            <p>
              Daily reports will appear here after the private George AI scan
              produces and validates its first public-safe feed.
            </p>
            <Link href="/#catalog">Browse the permanent library</Link>
          </section>
        )}
      </article>
    </main>
  );
}
