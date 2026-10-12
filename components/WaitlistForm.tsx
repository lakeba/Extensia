"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { EMAIL_RE, type Who, arrivals, countries } from "@/lib/waitlist";

const whoOptions: { id: Who; label: string }[] = [
  { id: "student", label: "Student" },
  { id: "arrival", label: "New arrival" },
  { id: "smsf", label: "SMSF trustee" },
];

export function WaitlistForm({ initialWho = "student" }: { initialWho?: Who }) {
  const [who, setWho] = useState<Who>(initialWho);
  const [emailErr, setEmailErr] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ name: string; email: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!EMAIL_RE.test(email)) {
      setEmailErr(true);
      (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.focus();
      return;
    }
    setEmailErr(false);
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()), who }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "We couldn't add you to the list. Please try again in a minute.");
      }
      setDone({ name: String(fd.get("firstName") || "").trim(), email });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    const tip =
      who === "smsf"
        ? "We'll be in touch about founding SMSF accounts."
        : who === "student"
          ? "Keep your Confirmation of Enrolment handy for sign-up."
          : "We'll prioritise invites by arrival date.";
    return (
      <div className="form">
        <div className="done" role="status">
          <span className="big">✓</span>
          <h2 className="t-3">{done.name ? `${done.name}, you're` : "You're"} on the list.</h2>
          <p className="small">{tip} We&apos;ll email {done.email} when your invite is ready.</p>
          <button className="btn btn-ghost btn-sm" type="button" onClick={() => setDone(null)}>Add another person</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 16 }}>
        <fieldset className="plain">
          <legend className="legend">I&apos;m joining as</legend>
          <div className="seg">
            {whoOptions.map((o) => (
              <span key={o.id} style={{ display: "contents" }}>
                <input type="radio" name="whoRadio" id={`w-${o.id}`} value={o.id} checked={who === o.id} onChange={() => setWho(o.id)} />
                <label htmlFor={`w-${o.id}`}>{o.label}</label>
              </span>
            ))}
          </div>
        </fieldset>
        <div className="two">
          <div className="field"><label htmlFor="fName">First name</label><input id="fName" name="firstName" autoComplete="given-name" placeholder="Priya" maxLength={80} /></div>
          <div className="field"><label htmlFor="fLast">Last name</label><input id="fLast" name="lastName" autoComplete="family-name" placeholder="Raman" maxLength={80} /></div>
        </div>
        <div className="field">
          <label htmlFor="fEmail">Email</label>
          <input id="fEmail" name="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={emailErr} aria-describedby={emailErr ? "eEmail" : undefined} maxLength={254} />
          {emailErr && <span className="err" id="eEmail">Enter an email address like name@example.com.</span>}
        </div>
        {who === "smsf" ? (
          <div className="field"><label htmlFor="fFund">Fund name (optional)</label><input id="fFund" name="fundName" placeholder="e.g. Okafor Family Super Fund" maxLength={120} /></div>
        ) : (
          <div className="two">
            <div className="field"><label htmlFor="fFrom">Moving from</label><select id="fFrom" name="movingFrom">{countries.map((c) => <option key={c}>{c}</option>)}</select></div>
            <div className="field"><label htmlFor="fWhen">Arriving</label><select id="fWhen" name="arriving">{arrivals.map((c) => <option key={c}>{c}</option>)}</select></div>
          </div>
        )}
        {/* Spam trap: real people never see or fill this. */}
        <div className="hp" aria-hidden="true"><label htmlFor="fWebsite">Website</label><input id="fWebsite" name="website" tabIndex={-1} autoComplete="off" /></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-accent" type="submit" disabled={sending} style={{ justifyContent: "center" }}>
          {sending ? "Joining…" : "Join the waitlist"}
        </button>
        <p className="note">We&apos;ll only use your details to contact you about Extensia. You can unsubscribe at any time. Read our <Link href="/privacy">privacy policy</Link>.</p>
      </form>
    </div>
  );
}
