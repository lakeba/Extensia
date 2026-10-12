import Link from "next/link";
import { CardVisual } from "@/components/CardVisual";
import { Converter } from "@/components/Converter";
import { plans } from "@/lib/plans";

const facts: [string, string][] = [
  ["BSB", "Your own AUD account number"],
  ["30+", "Currencies to hold and send"],
  ["90 days", "Open before you arrive"],
  ["1–6", "Members per SMSF, every trustee in the app"],
];

const price = (v: number) => (v === 0 ? "A$0" : `A$${v % 1 ? v.toFixed(2) : v}`);

// The five stars of the Southern Cross, as a quiet detail in the hero sky.
const crux = [
  { x: 90, y: 9, r: 3.2 },
  { x: 95, y: 21, r: 2.6 },
  { x: 87.5, y: 19, r: 2.4 },
  { x: 92.5, y: 33, r: 3.4 },
  { x: 93.6, y: 24.5, r: 1.6 },
];

export default function Home() {
  return (
    <>
      <section className="r-hero">
        <div className="r-sky" aria-hidden="true">
          {crux.map((s, i) => <span key={i} className="r-star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.r * 2, height: s.r * 2 }} />)}
        </div>
        <div className="wrap r-hero-in">
          <div className="r-hero-copy">
            <span className="r-chip">Launching in Australia · 2027</span>
            <h1 className="r-title">Money, ready before you land.</h1>
            <p className="r-lede">An AUD account with its own BSB, a card for your phone and 30+ currencies in one app. For international students, new arrivals and SMSF trustees.</p>
            <div className="hero-actions">
              <Link className="btn btn-white" href="/join">Join the waitlist</Link>
              <Link className="btn btn-glass" href="/pricing">Compare plans</Link>
            </div>
          </div>
          <div className="r-device" aria-label="Preview of the Extensia app">
            <div className="r-glass">
              <span className="r-glass-label">Personal · AUD</span>
              <span className="r-glass-amt">A$4,280</span>
              <span className="r-glass-pill">Accounts</span>
            </div>
            <div className="r-notif r-n1">
              <span className="r-ic r-ic-g">↓</span>
              <span><strong>From Mum · INR</strong><small>Today, 9:41</small></span>
              <span className="r-amt-in">+A$1,200</span>
            </div>
            <div className="r-notif r-n2">
              <span className="r-ic r-ic-a">✓</span>
              <span><strong>Account details ready</strong><small>Before your flight</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="r-facts">
        <div className="wrap">
          <p className="r-facts-head">One app for your first day in Australia, and every day after.</p>
          <div className="r-facts-grid">
            {facts.map(([big, small]) => (
              <div key={big}><b>{big}</b><span>{small}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="r-panel r-p-students">
        <div className="wrap r-panel-in">
          <div className="r-panel-copy">
            <span className="eyebrow">International students</span>
            <h2 className="r-h2">Tuition, rent and work hours. Sorted.</h2>
            <p>Open with your passport and Confirmation of Enrolment. Get money from family at the real exchange rate and keep within your 48-hour fortnight.</p>
            <Link className="btn btn-white" href="/students">For students</Link>
          </div>
          <div className="r-ui">
            <div className="r-card-ui">
              <div className="r-ui-row"><span>Work hours this fortnight</span><span className="r-ok">On track</span></div>
              <div className="r-ui-big">31.5<small> / 48 h</small></div>
              <div className="r-meter"><div style={{ width: "66%" }} /></div>
            </div>
            <div className="r-card-ui r-tx">
              <span className="r-ic r-ic-a">🎓</span>
              <span><strong>Tuition · Semester 1</strong><small>Paid in AUD</small></span>
              <span className="num">−A$9,850</span>
            </div>
          </div>
        </div>
      </section>

      <section className="r-panel r-p-arrivals">
        <div className="wrap r-panel-in r-flip">
          <div className="r-panel-copy">
            <span className="eyebrow">New arrivals and migrants</span>
            <h2 className="r-h2">Land with an account that already works.</h2>
            <p>Get your AUD account details up to 90 days before you fly. Give them to your employer and landlord, then send money home in 30+ currencies.</p>
            <Link className="btn btn-white" href="/arrivals">For new arrivals</Link>
          </div>
          <div className="r-ui">
            <div className="r-card-ui">
              <div className="r-ui-row"><span>Account details</span><span className="r-ok">Ready</span></div>
              <div className="r-detail"><span>BSB</span><b className="num">•••-•08</b></div>
              <div className="r-detail"><span>Account</span><b className="num">•••• 4417</b></div>
              <div className="r-detail"><span>PayID</span><b>priya@email.com</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="r-panel r-p-smsf">
        <div className="wrap r-panel-in">
          <div className="r-panel-copy">
            <span className="eyebrow">SMSF trustees</span>
            <h2 className="r-h2">Run your fund with every trustee in the loop.</h2>
            <p>An account in your fund&apos;s name, two-trustee approvals for large payments, rollovers via SuperStream and view-only access for your accountant.</p>
            <Link className="btn btn-white" href="/smsf">For SMSFs</Link>
          </div>
          <div className="r-ui">
            <div className="r-card-ui">
              <div className="r-ui-row"><span>Payment approval</span><span className="r-wait">1 of 2</span></div>
              <div className="r-ui-big">A$25,000</div>
              <div className="r-signer"><span className="r-av">AO</span><span>Adaeze Okafor<small>Approved 9:41am</small></span><span className="r-ok">Done</span></div>
              <div className="r-signer"><span className="r-av">CO</span><span>Chidi Okafor<small>Notified</small></span><span className="r-wait">Waiting</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="r-world">
        <div className="wrap r-world-in">
          <div className="r-center">
            <span className="eyebrow">Money across borders</span>
            <h2 className="r-h2">Send money home at the real rate.</h2>
            <p className="r-sub">See the fee and arrival time before you press send. Standard plans include A$1,500 of fee-free conversion each month.</p>
          </div>
          <div className="r-conv"><Converter /></div>
        </div>
        <div className="r-horizon" aria-hidden="true" />
      </section>

      <section className="r-cards">
        <div className="wrap r-center">
          <h2 className="r-h2">A card for every chapter.</h2>
          <p className="r-sub">A virtual card the moment you&apos;re approved. Add it to Apple Pay or Google Pay and tap anywhere. Freeze it in one tap.</p>
          <div className="cards-fan" aria-hidden="true">
            <CardVisual color="coral" tier="Plus" pan="2290" label="Debit" />
            <CardVisual color="cobalt" tier="Standard" pan="4417" label="Debit" />
            <CardVisual color="night" tier="SMSF" pan="0631" label="Fund" />
          </div>
        </div>
      </section>

      <section className="r-plans">
        <div className="wrap">
          <h2 className="r-h2 r-center">Choose your plan.</h2>
          <div className="r-plan-grid">
            {plans.map((p) => (
              <Link key={p.id} href="/pricing" className="r-plan">
                <h3>{p.name}</h3>
                <b>{price(p.monthly)}<small>/month</small></b>
                <p>{p.for}</p>
                <span className="r-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <p className="note r-center mt-m">Proposed pricing. Final fees will be confirmed before launch.</p>
        </div>
      </section>

      <section className="r-trust">
        <div className="wrap">
          <div className="r-center">
            <h2 className="r-h2">Built on regulated rails. Honest about where we are.</h2>
            <p className="r-sub">Accounts, payments and foreign exchange will run on infrastructure from Banking Circle. We&apos;re applying for the licences we need, and we&apos;ll publish full details before launch. Extensia is not a bank.</p>
          </div>
          <div className="r-trust-grid">
            <div><h3>Biometric login</h3><p>Face or fingerprint to open the app, plus device binding.</p></div>
            <div><h3>Fraud monitoring</h3><p>3-D Secure on online payments and 24/7 card monitoring.</p></div>
            <div><h3>Kept separate</h3><p>Customer money held separately from company money.</p></div>
          </div>
        </div>
      </section>

      <section className="r-final">
        <div className="wrap r-center">
          <h2 className="r-title-dark">Get in early.</h2>
          <p className="r-sub">Waitlist members get first access and 3 months of Plus free when we launch.</p>
          <Link className="btn btn-accent" href="/join">Join the waitlist</Link>
        </div>
      </section>
    </>
  );
}
