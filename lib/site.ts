export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.extensia.com.au").replace(/\/$/, "");

export const site = {
  name: "Extensia",
  tagline: "Your Australian money, ready before you land.",
  description:
    "An AUD account with its own BSB, a card for your phone and 30+ currencies in one app. Made for international students, new arrivals and SMSF trustees.",
  email: "support@extensia.com.au",
};

export const nav = [
  { href: "/students", label: "Students" },
  { href: "/arrivals", label: "New arrivals" },
  { href: "/smsf", label: "SMSF" },
  { href: "/pricing", label: "Pricing" },
  { href: "/partners", label: "Partners" },
  { href: "/company", label: "Company" },
  { href: "/help", label: "Help" },
];
