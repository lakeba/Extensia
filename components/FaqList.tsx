"use client";

import { useState } from "react";
import { faqCats, faqs } from "@/lib/faq";

export function FaqList() {
  const [cat, setCat] = useState<(typeof faqCats)[number]["id"]>("all");
  return (
    <>
      <div className="faq-tabs toggle" role="group" aria-label="Filter questions">
        {faqCats.map((c) => (
          <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
        ))}
      </div>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0} hidden={cat !== "all" && f.cat !== cat}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
