import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="stack" style={{ gap: 16 }}>
            <Link className="logo" href="/" style={{ color: "var(--on-ink)" }}>
              <LogoMark />
              Extensia
            </Link>
            <p style={{ color: "var(--ink-muted)", maxWidth: "34ch" }}>
              Money for people starting a new chapter in Australia, and for the funds they&apos;re building.
            </p>
          </div>
          <div>
            <h4>For you</h4>
            <ul>
              <li><Link href="/students">Students</Link></li>
              <li><Link href="/arrivals">New arrivals</Link></li>
              <li><Link href="/smsf">SMSF trustees</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About</Link></li>
              <li><Link href="/company#roadmap">Roadmap</Link></li>
              <li><Link href="/join">Waitlist</Link></li>
              <li><Link href="/privacy">Privacy (draft)</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/help">Help centre</Link></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <p>Extensia Pty Ltd (ABN to be confirmed). Extensia is not a bank or an authorised deposit-taking institution (ADI) and does not hold an Australian banking licence. Extensia is not yet offering products to the public. Product availability is subject to obtaining the necessary licences and registrations.</p>
          <p>Account, payment and foreign exchange services are intended to be provided using infrastructure from Banking Circle. Final product issuer details, Product Disclosure Statement, Target Market Determination and Financial Services Guide will be published before launch. Any information on this site is general in nature and does not take into account your objectives, financial situation or needs.</p>
          <p>Rates, fees and figures on this website are illustrative and proposed. Apple Pay is a trademark of Apple Inc. Google Pay is a trademark of Google LLC.</p>
          <p>© {new Date().getFullYear()} Extensia. We acknowledge the Traditional Custodians of the lands on which we work and pay our respects to Elders past and present.</p>
        </div>
      </div>
    </footer>
  );
}
