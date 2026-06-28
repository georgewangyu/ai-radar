import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell">
      <section className="paper-page">
        <h1>Paper not found</h1>
        <p className="hero-copy">This AI Radar paper note does not exist.</p>
        <Link className="back-link" href="/">
          Back to AI Radar
        </Link>
      </section>
    </main>
  );
}

