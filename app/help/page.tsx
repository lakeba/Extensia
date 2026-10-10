import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help centre",
  description: "Answers about Extensia accounts for students, new arrivals and SMSF trustees.",
  alternates: { canonical: "/help" },
};

export default function Help() {
  return (
    <section className="p-hero">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Help centre</span>
          <h1 className="t-1">Questions, answered.</h1>
          <p className="lede">Can&apos;t find what you need? Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll reply within one business day.</p>
        </div>
        <FaqList />
      </div>
    </section>
  );
}
