import type { Metadata } from "next";
import Link from "next/link";
import { Balance, Phone, Tx } from "@/components/Phone";
import { HoursTracker } from "@/components/HoursTracker";
import { Crumb, CtaBand, Feature, Ticks, VisaChips } from "@/components/Bits";

export const metadata: Metadata = {
  title: "International students",
  description: "Open your Australian account before your flight. Pay tuition, receive money from home and track your 48-hour fortnightly work limit.",
  alternates: { canonical: "/students" },
};

export default function Students() {
  return (
    <>
      <section className="p-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Crumb />
            <span className="eyebrow">For international students</span>
            <h1 className="t-1">Open your Australian account before your flight.</h1>
            <p className="lede">Bring your passport, your Confirmation of Enrolment and your student visa. We&apos;ll handle the rest, from tuition payments to money from home.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/join?as=student">Join as a student</Link>
              <Link className="btn btn-ghost" href="/pricing">Plus free for 12 months</Link>
            </div>
            <VisaChips items={[["500", "Student visa"], ["485", "Temporary Graduate"], ["590", "Student Guardian"]]} />
          </div>
          <div className="stage">
            <div className="blob" />
            <Phone initials="LW" label="Student · AUD" badge="🎓">
              <Balance label="Semester 1 budget left" amount="A$6,915.00" pill="Week 7 of 13" />
              <div className="txs">
                <h5>Upcoming</h5>
                <Tx icon="🎓" tone="a" name="Tuition instalment" sub="Due 28 Feb · scheduled" value="A$9,850.00" />
                <Tx icon="⚕" tone="g" name="OSHC renewal" sub="Health cover · 12 months" value="A$712.00" />
                <Tx icon="↓" tone="g" name="From Dad · CNY" sub="¥15,000 at 4.72" value="+A$3,177.97" incoming />
                <Tx icon="☕" tone="c" name="Cafe shift pay" sub="Payroll · 14.5 h" value="+A$362.50" incoming />
              </div>
            </Phone>
          </div>
        </div>
      </section>

      <section className="no-top">
        <div className="wrap feat">
          <Feature icon="🎓" tone="acc" title="Pay tuition in AUD">Pay your university directly from your Extensia account. Schedule instalments so you never miss a census date.</Feature>
          <Feature icon="↓" tone="gum" title="Money from home">Share a payment link with family. They pay in their currency, you receive dollars at the real rate.</Feature>
          <Feature icon="⌂" tone="cor" title="Split rent and bills">Create a shared pot with flatmates, split the power bill, and send reminders without the awkward chat.</Feature>
          <Feature icon="TFN" tone="acc" title="Tax File Number guide">A step-by-step guide to applying for your TFN, so your employer doesn&apos;t withhold tax at the top rate.</Feature>
          <Feature icon="%" tone="gum" title="Student discounts">Cashback with partner cafes, transport and phone plans near campus, applied automatically.</Feature>
          <Feature icon="⇄" tone="cor" title="Going home for the break">Spend in 150+ countries with no foreign transaction fee on Plus and above.</Feature>
        </div>
      </section>

      <section className="ink">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Work hours tracker</span>
            <h2 className="t-1" style={{ marginTop: 16 }}>Work part-time without losing count.</h2>
            <p className="lede mt-m">Most student visa holders can work up to 48 hours per fortnight while their course is in session. Extensia recognises payroll deposits, lets you log shifts, and warns you before you go over.</p>
            <Ticks items={["Fortnights counted from Monday, the way the rule is applied", "Separate counts for term time and scheduled breaks", "Export a shift history if you ever need it"]} />
            <p className="note mt-m">Your visa conditions are set by the Department of Home Affairs. Always check your own conditions in VEVO.</p>
          </div>
          <HoursTracker />
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            title="Plus, free for your first 12 months."
            text="Show a valid Confirmation of Enrolment when you sign up. No foreign card fees, two free international transfers a month and priority in-app support."
            href="/join?as=student"
            label="Join as a student"
          />
        </div>
      </section>
    </>
  );
}
