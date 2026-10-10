-- Waitlist sign-ups from the website form (app/api/waitlist/route.ts).
create table if not exists public.waitlist (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  who         text not null check (who in ('student', 'arrival', 'smsf')),
  email       text not null unique,
  first_name  text not null default '',
  last_name   text not null default '',
  moving_from text,
  arriving    text,
  fund_name   text,
  source      text not null default 'extensia-website'
);

-- RLS on with no policies: the public anon key can't read or write.
-- Only the server, using the service role key, can insert.
alter table public.waitlist enable row level security;
revoke all on public.waitlist from anon, authenticated;
grant select, insert on public.waitlist to service_role;
