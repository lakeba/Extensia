# Extensia website

Marketing site and waitlist for Extensia, an Australian money app for international students, new arrivals and SMSF trustees. Built with Next.js (App Router), React and TypeScript. No UI framework: all styling is in `app/globals.css`.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Requires Node.js 20.9 or later.

## Pages

| Route        | File                       |
|--------------|----------------------------|
| `/`          | `app/page.tsx`             |
| `/students`  | `app/students/page.tsx`    |
| `/arrivals`  | `app/arrivals/page.tsx`    |
| `/smsf`      | `app/smsf/page.tsx`        |
| `/pricing`   | `app/pricing/page.tsx`     |
| `/company`   | `app/company/page.tsx`     |
| `/help`      | `app/help/page.tsx`        |
| `/join`      | `app/join/page.tsx` (`?as=student|arrival|smsf` preselects the form) |
| `/partners`  | `app/partners/page.tsx`    |
| `/privacy`   | `app/privacy/page.tsx` (draft, pending legal review) |

Content that changes often lives in `lib/`: plans and the comparison table (`plans.ts`), FAQ (`faq.ts`), calculator rates and fee rules (`rates.ts`), site name, URL and nav (`site.ts`), waitlist form options (`waitlist.ts`), partner cards (`partners.ts`, logos in `public/partners/`).

## Waitlist and partner enquiries

The waitlist form posts to `POST /api/waitlist` (`app/api/waitlist/route.ts`), which validates the input, drops bot submissions (honeypot field) and inserts the sign-up into the Supabase `waitlist` table. Duplicate emails are ignored. The "become a partner" form posts to `POST /api/partners`, which inserts into `partner_enquiries`. Table schemas are in `supabase/migrations/`.

If the Supabase variables are not set, submissions are accepted but **not stored**; only a log line is written.

A Supabase database webhook (set up in the Supabase dashboard, not in this repo) sends each new `waitlist` row to a Power Automate flow. Keep the flow's URL out of the repo: it contains a signature.

## Environment variables

| Name                        | Required | Purpose |
|-----------------------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL`      | yes in production | Canonical URL for metadata, `sitemap.xml` and `robots.txt` |
| `SUPABASE_URL`              | to store submissions | Supabase project URL (set by the Vercel Supabase integration) |
| `SUPABASE_SERVICE_ROLE_KEY` | to store submissions | Server-only key used by the API routes. Never expose it to the browser |

## Deploy

**Vercel:** the repo is connected to Vercel. Every pull request gets a preview deployment and merges to `main` deploy to production. Pick the Sydney region (`syd1`) for the functions so the API runs close to your users.

**Any Node host:**

```bash
npm ci
npm run build
npm start          # serves on port 3000; set PORT to change it
```

## Before going live

- Replace illustrative figures: plan prices, fees, calculator rates (`lib/rates.ts`), roadmap dates and the contact email.
- Have legal review the footer disclaimers (`components/Footer.tsx`) and the use of the Banking Circle name.
- Don't describe Extensia as a "bank", "banker" or "banking" service anywhere: section 66 of the Banking Act 1959 restricts those words to authorised institutions.
- Finish legal review of the draft privacy policy (`/privacy`) and add a terms page.
