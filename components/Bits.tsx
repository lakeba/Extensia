import Link from "next/link";
import type { ReactNode } from "react";

export function Ticks({ items, style }: { items: ReactNode[]; style?: React.CSSProperties }) {
  return (
    <ul className="ticks" style={style}>
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

export function CtaBand({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <div className="cta-band">
      <div>
        <h2 className="t-2">{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="btn btn-light" href={href}>{label}</Link>
    </div>
  );
}

export function Feature({ icon, tone, title, children, className }: { icon?: ReactNode; tone?: "acc" | "cor" | "gum" | "sun"; title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`fcard${className ? " " + className : ""}`}>
      {icon && <div className={`ico ico-${tone ?? "acc"}`}>{icon}</div>}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="step">
      <span className="n">Step {n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function Crumb() {
  return <div><Link className="crumb" href="/">← Extensia</Link></div>;
}

export function VisaChips({ items }: { items: [string, string][] }) {
  return (
    <div className="visa-chips">
      {items.map(([code, label]) => <span key={code + label}><b>{code}</b>{label}</span>)}
    </div>
  );
}
