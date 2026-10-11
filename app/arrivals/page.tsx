import type { Metadata } from "next";
import Link from "next/link";
import { Balance, Float, Phone, Tx } from "@/components/Phone";
import { SettleChecklist } from "@/components/SettleChecklist";
import { Crumb, VisaChips } from "@/components/Bits";
import { PartnerPanel } from "@/components/PartnerCard";

export const metadata: Metadata = {
  title: "New arrivals and migrants",
  description: "Set up your Australian account from home, arrive ready, and send money to family in 30+ currencies.",
  alternates: { canonical: "/arrivals" },
};

const visas: [string, string][] = [
  ["482", "Skills in Demand"],
  ["189", "Skilled Independent"],
  ["190", "Skilled Nominated"],
  ["491", "Regional"],
  ["186", "Employer Nomination"],
  ["820", "Partner"],
  ["417", "Working Holiday"],
];

export default function Arrivals() {
  return (
    <>
      <section className="p-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Crumb />
            <span className="eyebrow">For new arrivals and migrants</span>
            <h1 className="t-1">Arrive with an account that already works.</h1>
            <p className="lede">Your first weeks in Australia need a bond, a phone plan and a payslip, and every one of them asks for a local account. Set yours up from home and arrive ready.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/join?as=arrival">Join the waitlist</Link>
              <Link className="btn btn-ghost" href="/help">What documents do I need?</Link>
            </div>
            <div>
              <p className="small visa-label">Designed for people holding visas such as</p>
              <VisaChips items={visas} />
            </div>
          </div>
          <div className="stage">
            <div className="blob coral" />
            <Phone initials="JM" label="Accounts" badge="🌏">
              <Balance label="All currencies in AUD" amount="A$12,604.18" />
              <div className="txs">
                <h5>Your currencies</h5>
                <Tx icon="🇦🇺" tone="a" name="Australian dollar" sub="BSB •••-•08" value="A$8,940.00" />
                <Tx icon="🇵🇭" tone="c" name="Philippine peso" sub="For family support" value="₱92,500" />
                <Tx icon="🇬🇧" tone="g" name="British pound" sub="Old UK salary" value="£410.00" />
                <Tx icon="↗" tone="a" name="To Manila every 1st" sub="Recurring · ₱20,000" value="Scheduled" />
              </div>
            </Phone>
            <Float pos="f2" tone="gum" mark="A$" title="First payslip received" sub="Paid by employer · PayID" />
          </div>
        </div>
      </section>

      <section className="no-top">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Your settle-in checklist</span>
            <h2 className="t-2" style={{ marginTop: 16 }}>The first month, in order.</h2>
            <p className="lede mt-s">Extensia guides you through the paperwork that comes with a new country. Tick things off as you go. Your progress stays on this device.</p>
            <div className="feat two-col mt-m">
              <div className="fcard"><h3>Pay your bond</h3><p>Transfer a rental bond with a reference your agent can match.</p></div>
              <div className="fcard"><h3>Build a local history</h3><p>Statements in your name help with rentals, phone plans and later lending.</p></div>
            </div>
          </div>
          <SettleChecklist />
        </div>
      </section>

      <section className="ink">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Send money home</span>
            <h2 className="t-1">Support family without the hidden margin.</h2>
            <p className="lede">See exactly what arrives before you send. Try the calculator on the home page, or set up a recurring transfer once you join.</p>
          </div>
          <div className="feat">
            <div className="fcard ink-fcard"><h3>Bank accounts and wallets</h3><p>Send to bank accounts and, in many countries, mobile wallets and cash pickup.</p></div>
            <div className="fcard ink-fcard"><h3>Recurring transfers</h3><p>Pick a date and amount. We&apos;ll send it every month and tell you the rate we used.</p></div>
            <div className="fcard ink-fcard"><h3>Rate targets</h3><p>Set the rate you want. When it&apos;s reached, convert automatically or get a nudge.</p></div>
          </div>
          <div className="mt-m"><Link className="btn btn-light" href="/#converter">Open the calculator</Link></div>
        </div>
      </section>

      <PartnerPanel id="mist" />
    </>
  );
}
