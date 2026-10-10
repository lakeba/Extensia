import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap nf">
      <span className="eyebrow">Error 404</span>
      <h1 className="t-1">This page hasn&apos;t landed yet.</h1>
      <p className="lede">The link may be old, or the page may have moved.</p>
      <Link className="btn btn-accent" href="/">Back to home</Link>
    </section>
  );
}
