import { NextResponse } from "next/server";
import { EMAIL_RE, type WaitlistEntry, type Who, arrivals, countries } from "@/lib/waitlist";

const WHO: Who[] = ["student", "arrival", "smsf"];
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Send the form as JSON." }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots don't retry.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter an email address like name@example.com." }, { status: 422 });
  }
  const who = WHO.includes(body.who as Who) ? (body.who as Who) : "arrival";

  const entry: WaitlistEntry = {
    who,
    email,
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    ...(who === "smsf"
      ? { fundName: clean(body.fundName, 120) }
      : {
          movingFrom: countries.includes(clean(body.movingFrom, 40)) ? clean(body.movingFrom, 40) : "Other",
          arriving: arrivals.includes(clean(body.arriving, 40)) ? clean(body.arriving, 40) : undefined,
        }),
  };

  const hook = process.env.WAITLIST_WEBHOOK_URL;
  if (!hook) {
    console.info("[waitlist] WAITLIST_WEBHOOK_URL not set; sign-up not stored", { who: entry.who });
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...entry, source: "extensia-website", createdAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[waitlist] forwarding failed", err);
    return NextResponse.json({ error: "We couldn't add you to the list. Please try again in a minute." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
