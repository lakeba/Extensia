import Image from "next/image";
import Link from "next/link";
import { Ticks } from "./Bits";
import { type PartnerId, partner } from "@/lib/partners";

export function PartnerLogo({ id }: { id: PartnerId }) {
  const p = partner(id);
  return (
    <div className="partner-logo" style={{ background: p.logo.bg }}>
      <Image
        src={p.logo.src}
        alt={`${p.name} logo`}
        width={p.logo.width}
        height={p.logo.height}
        sizes="(max-width: 768px) 100vw, 320px"
      />
    </div>
  );
}

// Full card for /partners.
export function PartnerCard({ id }: { id: PartnerId }) {
  const p = partner(id);
  return (
    <article className="partner" id={p.id}>
      <PartnerLogo id={id} />
      <div className="partner-body">
        <span className="eyebrow">{p.audience}</span>
        <h2 className="t-2">{p.name}</h2>
        <p>{p.summary}</p>
        <Ticks items={p.points} />
        <p className="partner-fit"><strong>How it works with Extensia.</strong> {p.fit}</p>
        <div><a className="btn btn-ghost btn-sm" href={p.url} target="_blank" rel="noopener noreferrer">Visit {p.url.replace("https://", "")} ↗</a></div>
        {p.issuer && <p className="note">{p.issuer}</p>}
      </div>
    </article>
  );
}

// Short panel for the audience pages.
export function PartnerPanel({ id }: { id: PartnerId }) {
  const p = partner(id);
  return (
    <section>
      <div className="wrap">
        <div className="partner partner-panel">
          <PartnerLogo id={id} />
          <div className="partner-body">
            <span className="eyebrow">Partner</span>
            <h2 className="t-3">{p.name}</h2>
            <p>{p.fit}</p>
            <div className="hero-actions">
              <Link className="btn btn-ghost btn-sm" href={`/partners#${p.id}`}>About {p.name}</Link>
              <a className="btn btn-ghost btn-sm" href={p.url} target="_blank" rel="noopener noreferrer">Visit {p.url.replace("https://", "")} ↗</a>
            </div>
            <p className="note">General information only, not a recommendation. {p.name} is an independent company.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
