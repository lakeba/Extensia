"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { partnerTypes } from "@/lib/partners";
import { EMAIL_RE } from "@/lib/waitlist";

export function PartnerForm() {
  const [emailErr, setEmailErr] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!EMAIL_RE.test(String(fd.get("email") || "").trim())) {
      setEmailErr(true);
      (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.focus();
      return;
    }
    setEmailErr(false);
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "We couldn't send your enquiry. Please try again in a minute.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="form">
        <div className="done" role="status">
          <span className="big">✓</span>
          <h2 className="t-3">Thanks, we&apos;ve got your enquiry.</h2>
          <p className="small">We&apos;ll reply by email, usually within a few business days.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 16 }}>
        <div className="two">
          <div className="field"><label htmlFor="pName">Your name</label><input id="pName" name="name" autoComplete="name" maxLength={120} /></div>
          <div className="field"><label htmlFor="pOrg">Organisation</label><input id="pOrg" name="organisation" autoComplete="organization" maxLength={160} /></div>
        </div>
        <div className="field">
          <label htmlFor="pEmail">Work email</label>
          <input id="pEmail" name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={emailErr} aria-describedby={emailErr ? "ePEmail" : undefined} maxLength={254} />
          {emailErr && <span className="err" id="ePEmail">Enter an email address like name@example.com.</span>}
        </div>
        <div className="field"><label htmlFor="pType">Type of organisation</label><select id="pType" name="type">{partnerTypes.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div className="field"><label htmlFor="pMsg">How would you like to work together?</label><textarea id="pMsg" name="message" rows={4} maxLength={2000} /></div>
        {/* Spam trap: real people never see or fill this. */}
        <div className="hp" aria-hidden="true"><label htmlFor="pWebsite">Website</label><input id="pWebsite" name="website" tabIndex={-1} autoComplete="off" /></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-accent" type="submit" disabled={sending} style={{ justifyContent: "center" }}>
          {sending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="note">We&apos;ll only use these details to reply to your enquiry. Read our <Link href="/privacy">privacy policy</Link>.</p>
      </form>
    </div>
  );
}
