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

Content that changes often lives in `lib/`: plans and the comparison table (`plans.ts`), FAQ (`faq.ts`), calculator rates and fee rules (`rates.ts`), site name, URL and nav (`site.ts`).

## Waitlist

The form posts to `POST /api/waitlist` (`app/api/waitlist/route.ts`), which validates the input, drops bot submissions (honeypot field) and forwards the sign-up as JSON to `WAITLIST_WEBHOOK_URL`. Point that at a Zapier/Make hook, your CRM or your own API. If the variable is not set, sign-ups are accepted but **not stored**; only a log line is written.

## Environment variables

| Name                    | Required | Purpose |
|-------------------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL`  | yes in production | Canonical URL for metadata, `sitemap.xml` and `robots.txt` |
| `WAITLIST_WEBHOOK_URL`  | to store sign-ups | Where waitlist entries are sent |

## Deploy

**Vercel (recommended):** push this folder to a Git repo, import it at vercel.com/new, add the environment variables, deploy. Pick the Sydney region (`syd1`) for the functions so the API runs close to your users.

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
- Add a privacy policy and terms pages before collecting sign-ups.
