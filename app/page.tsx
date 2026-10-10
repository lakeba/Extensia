import Link from "next/link";
import { Balance, Float, Phone, Tx } from "@/components/Phone";
import { CardVisual } from "@/components/CardVisual";
import { Converter } from "@/components/Converter";
import { CtaBand, Feature, Step, Ticks } from "@/components/Bits";

const marquee = [
  <><b>AUD</b> account with BSB</>,
  <><b>PayID</b> &amp; instant transfers</>,
  <><b>30+</b> currencies</>,
  <><b>Apple Pay</b> &amp; Google Pay</>,
  <>Open from <b>overseas</b></>,
  <><b>SMSF</b> trustee accounts</>,
  <><b>Two-trustee</b> approvals</>,
];

const corridors = ["🇮🇳 India", "🇨🇳 China", "🇳🇵 Nepal", "🇵🇭 Philippines", "🇻🇳 Vietnam", "🇵🇰 Pakistan", "🇨🇴 Colombia", "🇧🇷 Brazil", "🇬🇧 UK"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="chip"><b>Waitlist</b> Launching in Australia · 2027</span>
            <h1 className="t-hero">Your Australian money, <span className="accent">ready before you land.</span></h1>
            <p className="lede">An AUD account with its own BSB, a card for your phone, and 30+ currencies in one app. Made for international students, new arrivals and SMSF trustees.</p>
            <div className="hero-actions">
              <Link className="btn btn-accent" href="/join">Join the waitlist</Link>
              <Link className="btn btn-ghost" href="/pricing">Compare plans</Link>
            </div>
            <div className="store-row" aria-label="App availability">
              <div className="store">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9C6 7 4.4 8 3.5 9.6c-1.8 3.1-.5 7.8 1.3 10.3.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.5zM14 5.4c.7-.8 1.2-2 1-3.1-1 0-2.2.7-3 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.3-.6 3-1.4z" /></svg>
                <span>Coming soon<strong>iPhone</strong></span>
              </div>
              <div className="store">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zm11 10.9 2.5 2.5-11 6.3 8.5-8.8zm3.7-3.6 2.7 1.5c.8.5.8 1.3 0 1.8l-2.7 1.5-2.7-2.7 2.7-2.1zM6.1 2l11 6.3-2.5 2.5L6.1 2z" /></svg>
                <span>Coming soon<strong>Android</strong></span>
              </div>
            </div>
          </div>
          <div className="stage" aria-label="Preview of the Extensia app">
            <div className="blob" />
            <Phone initials="PR" label="Personal · AUD" badge="🔔">
              <Balance label="Total balance" amount="A$4,280.50" pill="BSB •••-•08 · Acc ••••4417" mono />
              <div className="quick"><div><i>＋</i>Add</div><div><i>⇄</i>Convert</div><div><i>↗</i>Send</div><div><i>⋯</i>More</div></div>
              <div className="txs">
                <h5>Today</h5>
                <Tx icon="↓" tone="g" name="From Mum · INR" sub="Converted at 55.21" value="+A$1,200.00" incoming />
                <Tx icon="🚆" tone="a" name="Train fare" sub="Tap on · Central" value="−A$4.20" />
                <Tx icon="🛒" tone="c" name="Groceries" sub="Card · Apple Pay" value="−A$62.35" />
                <Tx icon="⌂" tone="a" name="Rent split" sub="PayID · 3 flatmates" value="−A$310.00" />
              </div>
            </Phone>
            <Float pos="f1" tone="gum" mark="✓" title="Account details ready" sub="Before your flight" />
            <Float pos="f2" tone="coral" mark="₹" title="₹55,210 sent to Pune" sub="Arrived in 14 seconds" />
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-in">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Built for three kinds of people</span>
            <h2 className="t-1">One app. Three very different first days.</h2>
          </div>
          <div className="aud">
            <Link className="tile t-acc" href="/students">
              <span className="eyebrow">International students</span>
              <h3>Pay tuition, get paid, stay within your work hours.</h3>
              <p>Open with your passport and CoE. Receive money from home at the real exchange rate.</p>
              <div className="go"><div className="stat">48h<small>fortnightly work limit, tracked for you</small></div><span className="arrow">→</span></div>
            </Link>
            <Link className="tile t-cor" href="/arrivals">
              <span className="eyebrow">New arrivals &amp; migrants</span>
              <h3>Land with an account that already works.</h3>
              <p>Get your AUD details before you fly, then send money home in 30+ currencies.</p>
              <div className="go"><div className="stat">90<small>days before arrival you can apply</small></div><span className="arrow">→</span></div>
            </Link>
            <Link className="tile t-ink" href="/smsf">
              <span className="eyebrow">SMSF trustees</span>
              <h3>A transaction account your fund and your accountant will like.</h3>
              <p>Two-trustee approvals, rollovers via SuperStream and clean data for your administrator.</p>
              <div className="go"><div className="stat">1–6<small>members per fund, every trustee in the app</small></div><span className="arrow">→</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="no-top">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Everyday money</span>
            <h2 className="t-1">Everything a first account should do.</h2>
          </div>
          <div className="feat">
            <div className="fcard wide">
              <div style={{ display: "grid", gap: 12 }}>
                <div className="ico ico-acc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18M7 15h4" /></svg></div>
                <h3>Your own BSB and account number</h3>
                <p>Give them to your employer, your landlord or your uni. Salary, refunds and PayID payments land in seconds through Australia&apos;s real-time payment network.</p>
              </div>
              <CardVisual color="cobalt" tier="Debit" pan="4417" label="Priya R." style={{ justifySelf: "center" }} />
            </div>
            <Feature tone="cor" title="Hold 30+ currencies" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></svg>}>
              Keep rupees, yuan, pesos or pounds alongside your dollars. Convert when the rate suits you.
            </Feature>
            <Feature tone="gum" title="Send money abroad" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3v18M5 10l7-7 7 7" /></svg>}>
              Transfers to 60+ countries at the interbank rate, with the fee shown before you press send.
            </Feature>
            <Feature tone="acc" title="Pay with your phone" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>}>
              A virtual card the moment you&apos;re approved. Add it to Apple Pay or Google Pay and tap anywhere.
            </Feature>
            <Feature tone="sun" title="Budgets that make sense" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19h16M7 16V9M12 16V5M17 16v-4" /></svg>}>
              Rent, groceries and transport sorted automatically, with a weekly spend target you set.
            </Feature>
          </div>
        </div>
      </section>

      <section className="ink">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Money across borders</span>
            <h2 className="t-1" style={{ marginTop: 16 }}>Family sends dollars. You get dollars, not surprises.</h2>
            <p className="lede mt-m">Receive from home or send money back at the interbank rate. Standard plans include A$1,500 of fee-free conversion each month, then a flat 0.5%.</p>
            <Ticks items={["Fee and arrival time shown before you confirm", "Rate alerts when your currency hits a target", "Recurring transfers for rent, tuition or family support"]} />
            <div className="corridors" aria-label="Popular corridors">
              {corridors.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
          <Converter />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2 className="t-1">From your home country to your first tap in Sydney.</h2>
          </div>
          <div className="steps">
            <Step n={1} title="Apply from anywhere">Use your passport and your visa grant notice. Apply up to 90 days before you fly.</Step>
            <Step n={2} title="Verify in minutes">A short video selfie confirms it&apos;s you. We check your visa with the government&apos;s VEVO service.</Step>
            <Step n={3} title="Get your details">Your BSB, account number and virtual card appear in the app, ready for your first payment.</Step>
            <Step n={4} title="Land and tap">Your physical card is posted to your Australian address. Until then, pay with your phone.</Step>
          </div>
        </div>
      </section>

      <section className="ink">
        <div className="wrap split">
          <div className="cards-fan" aria-hidden="true">
            <CardVisual color="coral" tier="Plus" pan="2290" label="Debit" />
            <CardVisual color="cobalt" tier="Standard" pan="4417" label="Debit" />
            <CardVisual color="night" tier="SMSF" pan="0631" label="Fund" />
          </div>
          <div>
            <span className="eyebrow">Cards</span>
            <h2 className="t-1" style={{ marginTop: 16 }}>A card that works the day you land.</h2>
            <Ticks items={["Freeze and unfreeze from the app in one tap", "Single-use virtual cards for online shopping", "Spending limits per card, per day", "Instant notification for every payment"]} />
            <div className="mt-m"><Link className="btn btn-light" href="/pricing">See card options</Link></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Security and infrastructure</span>
            <h2 className="t-1">Built on regulated rails. Honest about where we are.</h2>
          </div>
          <div className="trust">
            <div className="trust-main">
              <h3 className="t-3">Powered by Banking Circle infrastructure</h3>
              <p className="lede" style={{ fontSize: 18 }}>Extensia accounts, payments and foreign exchange will run on infrastructure provided by Banking Circle, a European payments and account provider that serves fintechs in many markets. You get modern, fast payments. We focus on the app and the people using it.</p>
              <Ticks style={{ marginTop: 0 }} items={["Biometric login and device binding", "3-D Secure on every online card payment", "24/7 card fraud monitoring", "Customer money kept separate from company money"]} />
            </div>
            <div className="trust-side">
              <div className="fcard"><span className="status prog">In progress</span><h3>Australian licensing</h3><p>We&apos;re applying for the licences needed to offer our services in Australia. Full details will be published before launch.</p></div>
              <div className="fcard"><span className="status plan">Long-term goal</span><h3>Banking licence</h3><p>We intend to apply to APRA to become an authorised deposit-taking institution. Until then, Extensia is not a bank.</p></div>
              <div className="fcard"><span className="status live">Open now</span><h3>Waitlist</h3><p>Join to get early access and help shape the first release.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="no-top">
        <div className="wrap">
          <CtaBand title="Moving to Australia? Get in early." text="Waitlist members get first access and 3 months of Plus free when we launch." href="/join" label="Join the waitlist" />
        </div>
      </section>
    </>
  );
}
