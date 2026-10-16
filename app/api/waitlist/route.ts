import { NextResponse } from "next/server";
import { EMAIL_RE, type WaitlistEntry, type Who, arrivals, countries } from "@/lib/waitlist";

const WHO: Who[] = ["student", "arrival", "smsf"];
const WHO_SET = new Set<string>(WHO);
const COUNTRIES_SET = new Set<string>(countries);
const ARRIVALS_SET = new Set<string>(arrivals);
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
  const who = WHO_SET.has(String(body.who)) ? (body.who as Who) : "arrival";
  const movingFrom = clean(body.movingFrom, 40);
  const arriving = clean(body.arriving, 40);

  const entry: WaitlistEntry = {
    who,
    email,
    firstName: clean(body.firstName, 80),
    lastName: clean(body.lastName, 80),
    ...(who === "smsf"
      ? { fundName: clean(body.fundName, 120) }
      : {
          movingFrom: COUNTRIES_SET.has(movingFrom) ? movingFrom : "Other",
          arriving: ARRIVALS_SET.has(arriving) ? arriving : undefined,
        }),
  };

  // Set by the Vercel Supabase integration. The key is server-only; never expose it to the browser.
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    console.info("[waitlist] Supabase not configured; sign-up not stored", { who: entry.who });
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    // Duplicate emails are ignored, so signing up twice still shows success.
    const res = await fetch(`${url}/rest/v1/waitlist?on_conflict=email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify({
        who: entry.who,
        email: entry.email,
        first_name: entry.firstName,
        last_name: entry.lastName,
        moving_from: entry.movingFrom ?? null,
        arriving: entry.arriving ?? null,
        fund_name: entry.fundName || null,
        source: "extensia-website",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Supabase responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[waitlist] insert failed", err);
    return NextResponse.json({ error: "We couldn't add you to the list. Please try again in a minute." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
