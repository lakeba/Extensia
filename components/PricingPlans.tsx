"use client";

import Link from "next/link";
import { useState } from "react";
import { plans } from "@/lib/plans";

const price = (v: number) => (v === 0 ? "A$0" : `A$${v % 1 ? v.toFixed(2) : v}`);

export function BillingToggle({ yearly, onChange }: { yearly: boolean; onChange: (y: boolean) => void }) {
  return (
    <div className="toggle" role="group" aria-label="Billing period">
      <button type="button" aria-pressed={!yearly} onClick={() => onChange(false)}>Monthly</button>
      <button type="button" aria-pressed={yearly} onClick={() => onChange(true)}>Yearly · save 2 months</button>
    </div>
  );
}

export function PricingPlans() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <BillingToggle yearly={yearly} onChange={setYearly} />
      <div className="plans mt-l">
        {plans.map((p) => (
          <div key={p.id} className={`plan${p.tag ? " hot" : ""}`}>
            {p.tag && <span className="tag">{p.tag}</span>}
            <h3>{p.name}</h3>
            <p className="for">{p.for}</p>
            <div className="price">
              {price(yearly ? p.yearly : p.monthly)}
              <small> /{yearly ? "year" : "month"}</small>
            </div>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Link className={`btn ${p.tag ? "btn-accent" : "btn-ghost"}`} href={p.id === "smsf" ? "/join?as=smsf" : "/join"}>{p.cta}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
