import type { Metadata } from "next";
import Link from "next/link";
import { Crumb, Feature, Step, VisaChips } from "@/components/Bits";
import { PartnerPanel } from "@/components/PartnerCard";

export const metadata: Metadata = {
  title: "SMSF accounts",
  description: "A transaction account for self-managed super funds, with multi-trustee approvals, SuperStream rollovers and view-only access for your accountant.",
  alternates: { canonical: "/smsf" },
};

export default function Smsf() {
  return (
    <>
      <section className="p-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Crumb />
            <span className="eyebrow">For self-managed super funds</span>
            <h1 className="t-1">A transaction account built around your fund.</h1>
            <p className="lede">Open an account in your fund&apos;s name, give every trustee their own login, and require two approvals for large payments. Your accountant gets read-only access and clean data.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/join?as=smsf">Register your fund&apos;s interest</Link>
              <Link className="btn btn-ghost" href="/pricing">SMSF pricing</Link>
            </div>
            <VisaChips items={[["✓", "Individual trustees"], ["✓", "Corporate trustee"], ["✓", "Up to 6 members"]]} />
          </div>
          <div className="stage">
            <div className="blob ink" />
            <div className="approve fund-approve">
              <div className="approve-head"><span className="eyebrow">Payment approval</span><span className="status prog">1 of 2 approved</span></div>
              <div className="price">A$25,000.00</div>
              <div className="row"><span>From</span><span>Okafor Family Super Fund</span></div>
              <div className="row"><span>To</span><span>Settlement trust account</span></div>
              <div className="row"><span>Reference</span><span className="num">LOT 14 DEPOSIT</span></div>
              <div className="signers">
                <div className="signer"><span className="avatar">AO</span><span>Adaeze Okafor<small>Trustee · approved 9:41am</small></span><span className="status live">Done</span></div>
                <div className="signer"><span className="avatar">CO</span><span>Chidi Okafor<small>Trustee · notified</small></span><span className="status plan">Waiting</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="no-top">
        <div className="wrap feat">
          <Feature icon="2×" tone="acc" title="Multi-trustee approvals">Set a dollar threshold above which payments need a second trustee. Every approval is time-stamped.</Feature>
          <Feature icon="ESA" tone="gum" title="Rollovers via SuperStream">Use our electronic service address to receive rollovers and employer contributions in the right format.</Feature>
          <Feature icon="$" tone="cor" title="Foreign currency for investing">Fund international share purchases in USD, GBP or EUR at the interbank rate.</Feature>
          <Feature icon="⇣" tone="acc" title="Data for your administrator">Daily transaction feeds to common SMSF administration software, planned for launch.</Feature>
          <Feature icon="👁" tone="gum" title="Adviser access">Invite your accountant, auditor or adviser with view-only permissions you can remove at any time.</Feature>
          <Feature icon="ATO" tone="cor" title="Tax and levy payments">Pay the ATO, including your annual supervisory levy, with references saved for next year.</Feature>
        </div>
      </section>

      <section className="ink">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Opening a fund account</span>
            <h2 className="t-1">Four steps. Every trustee signs once.</h2>
          </div>
          <div className="steps">
            <Step n={1} title="Enter your fund">Fund name and ABN. We confirm its status with the ATO&apos;s Super Fund Lookup.</Step>
            <Step n={2} title="Invite trustees">Each trustee, or each director of a corporate trustee, verifies their identity in the app.</Step>
            <Step n={3} title="Set your rules">Choose approval thresholds and who can see or move money.</Step>
            <Step n={4} title="Connect your accountant">Send a view-only invite and start receiving rollovers.</Step>
          </div>
          <p className="note mt-m">Extensia provides a transaction account. We do not provide financial advice about your SMSF. Speak to a licensed adviser about your fund&apos;s investment strategy and obligations.</p>
        </div>
      </section>

      <PartnerPanel id="assetora" />
    </>
  );
}
