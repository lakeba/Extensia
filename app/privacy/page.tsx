import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy (draft)",
  description: "How Extensia handles the details you give us when you join the waitlist. Draft pending legal review.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <section className="p-hero">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Privacy</span>
          <h1 className="t-1">Privacy policy for the waitlist.</h1>
          <p className="lede">This explains what we do with the details you give us when you join the Extensia waitlist. It covers the waitlist only. We&apos;ll publish a full policy before we offer products.</p>
        </div>
        <p className="form-error" role="note"><strong>Draft, pending legal review.</strong> This page has not been reviewed by a lawyer and may change. Retention periods and other details are placeholders until confirmed.</p>
        <div className="prose">
          <h2 className="t-3">What we collect</h2>
          <p>When you submit the waitlist form we collect:</p>
          <ul>
            <li>whether you&apos;re joining as a student, new arrival or SMSF trustee;</li>
            <li>your first name, last name and email address;</li>
            <li>for students and new arrivals: the country you&apos;re moving from and roughly when you&apos;re arriving;</li>
            <li>for SMSF trustees: your fund name, if you choose to give it.</li>
          </ul>
          <p>We don&apos;t ask for identity documents, visa details, tax file numbers or financial information at this stage.</p>

          <h2 className="t-3">Why we collect it</h2>
          <p>To email you when your invite is ready, to prioritise invites (for example by arrival date), and to understand which groups want Extensia. We only use your details to contact you about Extensia.</p>

          <h2 className="t-3">Where it&apos;s sent</h2>
          <p>The form sends your details to our server, which forwards them to a webhook that delivers them to the tool we use to manage the waitlist. That destination is still being chosen. We&apos;ll name it here once confirmed. Until a destination is set, sign-ups are not stored. We don&apos;t sell your details.</p>

          <h2 className="t-3">How long we keep it</h2>
          <p>[Placeholder] We plan to keep waitlist details until you&apos;re invited to open an account, you ask us to delete them, or 24 months after you join, whichever comes first.</p>

          <h2 className="t-3">Asking for deletion, access or correction</h2>
          <p>Email <a href={`mailto:${site.email}`}>{site.email}</a> from the address you signed up with and ask us to delete, correct or give you a copy of your details. You can also use that address to unsubscribe from emails at any time.</p>

          <h2 className="t-3">Australian Privacy Principles</h2>
          <p>We handle personal information in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. If you&apos;re unhappy with how we&apos;ve handled your information, contact us first. You can also complain to the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" rel="noopener noreferrer">oaic.gov.au</a>.</p>

          <p className="note">Back to the <Link href="/join">waitlist</Link>. Draft last updated 11 October 2026.</p>
        </div>
      </div>
    </section>
  );
}
