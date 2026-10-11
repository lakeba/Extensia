import { NextResponse } from "next/server";
import { partnerTypes } from "@/lib/partners";
import { EMAIL_RE } from "@/lib/waitlist";

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
  const type = clean(body.type, 80);

  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    console.info("[partners] Supabase not configured; enquiry not stored");
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(`${url}/rest/v1/partner_enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        name: clean(body.name, 120),
        organisation: clean(body.organisation, 160),
        type: partnerTypes.includes(type) ? type : "Other",
        message: clean(body.message, 2000),
        source: "extensia-website",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Supabase responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[partners] insert failed", err);
    return NextResponse.json({ error: "We couldn't send your enquiry. Please try again in a minute." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
