import type { Metadata } from "next";
import { Crumb } from "@/components/Bits";
import { PartnerCard } from "@/components/PartnerCard";
import { PartnerForm } from "@/components/PartnerForm";
import { partnerDisclaimer, partners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners",
  description: "The companies we work with to help international students, new arrivals and SMSF trustees, and how to partner with Extensia.",
  alternates: { canonical: "/partners" },
};

export default function Partners() {
  return (
    <>
      <section className="p-hero">
        <div className="wrap">
          <div className="sec-head">
            <Crumb />
            <span className="eyebrow">Partners</span>
            <h1 className="t-1">Working with people who share our customers.</h1>
            <p className="lede">Extensia looks after your everyday money. Our partners help with the things around it, from proving your funds for a student visa to investing through your SMSF.</p>
          </div>
          <div className="partners">
            {partners.map((p) => <PartnerCard key={p.id} id={p.id} />)}
          </div>
          <p className="note mt-m" style={{ maxWidth: "90ch" }}>{partnerDisclaimer}</p>
        </div>
      </section>

      <section className="ink" id="become-a-partner">
        <div className="wrap join">
          <div className="stack">
            <span className="eyebrow">Become a partner</span>
            <h2 className="t-1">Work with Extensia.</h2>
            <p className="lede">We&apos;re keen to hear from universities, education and migration agents, and SMSF professionals who support the same people we do. Tell us a little about your organisation and we&apos;ll be in touch.</p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
