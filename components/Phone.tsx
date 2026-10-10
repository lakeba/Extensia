import type { ReactNode } from "react";

type IconTone = "a" | "c" | "g";

export function Phone({ initials, label, badge, children }: { initials: string; label: string; badge: string; children: ReactNode }) {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <div className="scr-top">
          <span className="avatar">{initials}</span>
          <span>{label}</span>
          <span aria-hidden="true">{badge}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Balance({ label, amount, pill, mono }: { label: string; amount: string; pill?: string; mono?: boolean }) {
  return (
    <div className="bal">
      <div className="lbl">{label}</div>
      <div className="amt">{amount}</div>
      {pill && <div className={`pill-acc${mono ? " num" : ""}`}>{pill}</div>}
    </div>
  );
}

export function Tx({ icon, tone, name, sub, value, incoming }: { icon: string; tone: IconTone; name: string; sub: string; value: string; incoming?: boolean }) {
  return (
    <div className="tx">
      <span className={`ic ${tone}`}>{icon}</span>
      <span className="nm">{name}<small>{sub}</small></span>
      <span className={`v${incoming ? " in" : ""}`}>{value}</span>
    </div>
  );
}

export function Float({ pos, tone, mark, title, sub }: { pos: "f1" | "f2"; tone: "gum" | "coral"; mark: string; title: string; sub: string }) {
  return (
    <div className={`float ${pos}`}>
      <span className="dot" style={{ background: `var(--${tone}-soft)`, color: `var(--${tone})` }}>{mark}</span>
      <span><strong>{title}</strong>{sub}</span>
    </div>
  );
}
