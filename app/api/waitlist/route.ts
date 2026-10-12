import { NextResponse, after } from "next/server";
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

  // Set by the Vercel Supabase integration. The key is server-only; never expose it to the browser.
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    console.info("[waitlist] Supabase not configured; sign-up not stored", { who: entry.who });
    notify(entry, new Date().toISOString());
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
        Prefer: "resolution=ignore-duplicates,return=representation",
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
    // A duplicate email returns no rows, so only new sign-ups are sent on.
    const [row] = (await res.json()) as { created_at: string }[];
    if (row) notify(entry, row.created_at);
  } catch (err) {
    console.error("[waitlist] insert failed", err);
    return NextResponse.json({ error: "We couldn't add you to the list. Please try again in a minute." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}

// Sends a new sign-up to the Power Automate flow in WAITLIST_WEBHOOK_URL, after the response
// is sent so the form isn't slowed down. The URL carries a signature: keep it in env vars only.
function notify(entry: WaitlistEntry, createdAt: string) {
  const hook = process.env.WAITLIST_WEBHOOK_URL;
  if (!hook) return;
  after(async () => {
    try {
      const res = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "INSERT",
          record: {
            created_at: createdAt,
            who: entry.who,
            email: entry.email,
            first_name: entry.firstName,
            last_name: entry.lastName,
            moving_from: entry.movingFrom ?? null,
            arriving: entry.arriving ?? null,
            fund_name: entry.fundName || null,
          },
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}: ${await res.text()}`);
    } catch (err) {
      console.error("[waitlist] webhook failed", err);
    }
  });
}
