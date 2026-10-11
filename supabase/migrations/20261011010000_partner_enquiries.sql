-- Partnership enquiries from the /partners form (app/api/partners/route.ts).
create table if not exists public.partner_enquiries (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  email        text not null,
  name         text not null default '',
  organisation text not null default '',
  type         text not null default 'Other',
  message      text not null default '',
  source       text not null default 'extensia-website'
);

-- RLS on with no policies: only the server, using the service role key, can insert.
alter table public.partner_enquiries enable row level security;
revoke all on public.partner_enquiries from anon, authenticated;
grant select, insert on public.partner_enquiries to service_role;
