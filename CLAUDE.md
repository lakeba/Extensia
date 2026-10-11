# Extensia

Marketing website and waitlist for **Extensia**, a planned Australian fintech money app inspired by Revolut. Accounts, cards, payments and FX are intended to run on **Banking Circle** infrastructure.

## Who it's for

1. **International students** (subclass 500, also 485 / 590): open before arrival with passport + Confirmation of Enrolment (CoE), pay tuition and OSHC, receive money from family, track the 48-hours-per-fortnight work limit.
2. **New arrivals and migrants** (482, 189, 190, 491, 186, 820, 417…): open up to 90 days before arrival, verify visa via VEVO, send money home in 30+ currencies.
3. **SMSF trustees**: account in the fund's name, individual or corporate trustees, up to 6 members, multi-trustee approvals, SuperStream rollovers (ESA), view-only access for accountants.

## Wording rules (legal, non-negotiable)

- Extensia has **no banking licence**. Banking Act 1959 s66 restricts "bank", "banker" and "banking" (and words of like import) to authorised institutions.
- Never call Extensia a bank, neobank, digital bank or banking service, in copy, metadata, code comments or commit messages. Use "money app", "financial technology company", "account".
- Avoid "deposit" for customer funds. Don't promise interest, Financial Claims Scheme cover or anything that depends on licences not yet held.
- No financial advice, especially for SMSF. Keep the general-advice and "not a bank" disclaimers in `components/Footer.tsx`.
- No invented testimonials or reviews presented as real.
- "Banking Circle" (the partner's full name) is fine as a proper noun. Its use still needs partner and legal sign-off before launch.

## Tech

- Next.js 16 (App Router), React 19, TypeScript, plain CSS in `app/globals.css` (design tokens on `:root`, light and dark themes). No UI framework.
- Fonts via `next/font/google`: Bricolage Grotesque (display), Instrument Sans (body), JetBrains Mono (numbers).
- Pages: `app/{page,students,arrivals,smsf,pricing,company,help,join}`. Interactive parts are client components in `components/`.
- Editable content lives in `lib/`: `plans.ts` (pricing + comparison table), `faq.ts`, `rates.ts` (calculator rates and fee rules), `site.ts` (name, URL, nav), `waitlist.ts`.
- Waitlist: `POST /api/waitlist` validates, drops honeypot hits and inserts into the Supabase `waitlist` table (schema in `supabase/migrations/`). Duplicate emails are ignored. Without the Supabase env vars, sign-ups are **not stored**.
- Env vars: `NEXT_PUBLIC_SITE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (server-only; set by the Vercel Supabase integration, see `.env.example`).

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

CI (`.github/workflows/ci.yml`) runs typecheck + build on every push to `main` and every PR. Keep it green.

## Working conventions

- Repo: https://github.com/lakeba/extensia, default branch `main`.
- Make changes on a branch and open a pull request. Don't push straight to `main` unless asked.
- Run `npm run typecheck && npm run build` before pushing.
- Copy style: plain, direct sentences, Australian English (organise, enrol, colour), AUD shown as `A$`.
- Deployment: Vercel, connected to this repo. Every PR gets a preview deployment; merges to `main` deploy to production.
- `@lakeba-ai` mentions in issues and PRs run `.github/workflows/lakeba-ai.yml` (owners, members and collaborators only). Authenticates with the `CLAUDE_CODE_OAUTH_TOKEN` repo secret (a Claude subscription token from `claude setup-token`). Comments and pushes come from the Lakeba AI GitHub App (secrets `LAKEBA_AI_APP_ID`, `LAKEBA_AI_PRIVATE_KEY`).

## Placeholders still on the site

Prices, fees, calculator rates, the 90-day pre-arrival window, roadmap dates, the ~700,000 students figure and `support@extensia.com.au` are illustrative. Replace them with confirmed figures before launch.

## Open to-dos (as of 2026-10-11)

- [x] Make the repo private (2026-10-11)
- [x] Connect Vercel to the repo
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel (not yet confirmed)
- [x] Claude GitHub Action for `@claude` mentions (PR #1)
- [x] Choose the waitlist destination (Supabase via the Vercel integration)
- [x] Run the waitlist migration in Supabase (project region: Sydney)
- [x] Draft privacy page (`/privacy`, pending legal review)
- [ ] Terms page
- [ ] Legal review of footer disclaimers and Banking Circle name usage
- [ ] Replace placeholder pricing, rates and dates
- [ ] Branch protection on `main` requiring CI (private repos need GitHub Pro or higher for this)
- [ ] Move plans from OneNote into `docs/` and tasks into GitHub Issues / Projects
