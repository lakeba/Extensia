import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description: "Why we're building Extensia, what we are and aren't, and where we're going.",
  alternates: { canonical: "/company" },
};

const roadmap = [
  { when: "Q4 2026", title: "Waitlist opens", status: ["live", "Now"], text: "Collecting early members across students, new arrivals and SMSF trustees." },
  { when: "H1 2027", title: "Regulatory approvals", status: ["prog", "In progress"], text: "Licensing and registrations needed to offer accounts, cards and transfers in Australia." },
  { when: "H2 2027", title: "Public launch", status: ["plan", "Planned"], text: "AUD accounts, cards, multi-currency and international transfers. SMSF accounts follow shortly after." },
  { when: "Later", title: "Banking licence application", status: ["plan", "Goal"], text: "Apply to APRA to become an authorised deposit-taking institution." },
];

export default function Company() {
  return (
    <>
      <section className="p-hero">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Company</span>
            <h1 className="t-1">We started Extensia because arriving shouldn&apos;t mean waiting.</h1>
            <p className="lede">Around 700,000 international students and hundreds of thousands of new migrants arrive in Australia each year. Most can&apos;t get a local account until they&apos;ve landed, found an address and booked a branch appointment. We think that&apos;s backwards.</p>
          </div>
          <div className="feat">
            <div className="fcard"><h3>Why &ldquo;Extensia&rdquo;</h3><p>Your financial life doesn&apos;t start over when you move. It extends. Same with your super fund: it&apos;s an extension of everything you&apos;ve worked for.</p></div>
            <div className="fcard"><h3>What we&apos;re not</h3><p>Extensia is a financial technology company, not a bank. We don&apos;t use that word because Australian law reserves it for licensed institutions, and we intend to earn it.</p></div>
            <div className="fcard"><h3>Who runs the rails</h3><p>Accounts, card issuing and payments are planned to run on Banking Circle infrastructure, so we can focus on the experience.</p></div>
          </div>
        </div>
      </section>
      <section className="no-top" id="roadmap">
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">Target roadmap</span><h2 className="t-2">Where we&apos;re going.</h2></div>
          <div className="road">
            {roadmap.map((r) => (
              <div className="road-item" key={r.title}>
                <span className="when">{r.when}</span>
                <div><h3>{r.title} <span className={`status ${r.status[0]}`}>{r.status[1]}</span></h3><p>{r.text}</p></div>
              </div>
            ))}
          </div>
          <p className="note mt-m">Dates are targets and may change.</p>
        </div>
      </section>
    </>
  );
}
