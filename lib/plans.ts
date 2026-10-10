export type Plan = {
  id: string;
  name: string;
  for: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  tag?: string;
};

// Proposed launch pricing, in AUD.
export const plans: Plan[] = [
  {
    id: "standard",
    name: "Standard",
    for: "For everyday spending and your first weeks here.",
    monthly: 0,
    yearly: 0,
    features: [
      "AUD account with BSB and PayID",
      "Virtual and physical debit card",
      "A$1,500/month fee-free currency exchange",
      "1 free international transfer a month",
    ],
    cta: "Join waitlist",
  },
  {
    id: "plus",
    name: "Plus",
    for: "For students and people who send money home.",
    monthly: 4.99,
    yearly: 49.9,
    tag: "Free for students for 12 months",
    features: [
      "Everything in Standard",
      "A$5,000/month fee-free exchange",
      "2 free international transfers a month",
      "No foreign transaction fees",
      "Priority in-app support",
    ],
    cta: "Join waitlist",
  },
  {
    id: "premium",
    name: "Premium",
    for: "For frequent travellers and bigger transfers.",
    monthly: 12.99,
    yearly: 129.9,
    features: [
      "Everything in Plus",
      "Unlimited fee-free exchange on weekdays",
      "5 free international transfers a month",
      "Overseas ATM withdrawals up to A$800/month free",
      "Metal-look card",
    ],
    cta: "Join waitlist",
  },
  {
    id: "smsf",
    name: "SMSF",
    for: "For your self-managed super fund.",
    monthly: 9,
    yearly: 90,
    features: [
      "Account in your fund's name",
      "Unlimited trustee logins",
      "Two-trustee approvals",
      "SuperStream rollovers",
      "Accountant view-only access",
    ],
    cta: "Register interest",
  },
];

export const comparison: [string, string, string, string, string][] = [
  ["AUD account with BSB", "✓", "✓", "✓", "✓"],
  ["PayID and instant payments", "✓", "✓", "✓", "✓"],
  ["Currencies you can hold", "30+", "30+", "30+", "USD, GBP, EUR"],
  ["Fee-free exchange per month", "A$1,500", "A$5,000", "Unlimited*", "A$10,000"],
  ["Fee above allowance", "0.5%", "0.5%", "0.5%*", "0.3%"],
  ["Free international transfers", "1", "2", "5", "2"],
  ["Foreign card transaction fee", "1%", "None", "None", "n/a"],
  ["Work hours tracker", "✓", "✓", "✓", "—"],
  ["Multi-trustee approvals", "—", "—", "—", "✓"],
];
