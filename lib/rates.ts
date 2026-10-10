// Illustrative rates for the marketing calculator: 1 AUD = r units.
// Replace with a live rates feed before launch.
export type Rate = { code: string; flag: string; symbol: string; r: number; eta: string };

export const rates: Rate[] = [
  { code: "INR", flag: "🇮🇳", symbol: "₹", r: 55.21, eta: "Seconds" },
  { code: "CNY", flag: "🇨🇳", symbol: "¥", r: 4.72, eta: "Same day" },
  { code: "NPR", flag: "🇳🇵", symbol: "Rs ", r: 88.34, eta: "Within 1 day" },
  { code: "PHP", flag: "🇵🇭", symbol: "₱", r: 37.92, eta: "Minutes" },
  { code: "VND", flag: "🇻🇳", symbol: "₫", r: 16940, eta: "Same day" },
  { code: "PKR", flag: "🇵🇰", symbol: "Rs ", r: 184.6, eta: "Within 1 day" },
  { code: "COP", flag: "🇨🇴", symbol: "$", r: 2655, eta: "Within 1 day" },
  { code: "BRL", flag: "🇧🇷", symbol: "R$", r: 3.64, eta: "Minutes" },
  { code: "GBP", flag: "🇬🇧", symbol: "£", r: 0.497, eta: "Minutes" },
  { code: "USD", flag: "🇺🇸", symbol: "US$", r: 0.662, eta: "Same day" },
  { code: "EUR", flag: "🇪🇺", symbol: "€", r: 0.571, eta: "Minutes" },
];

// Standard plan: A$1,500 a month converted fee-free, then 0.5%.
export const FREE_ALLOWANCE = 1500;
export const FEE_RATE = 0.005;
// Comparison assumptions shown on the page.
export const TYPICAL_MARGIN = 0.03;
export const TYPICAL_FEE = 22;

export const fmt = (n: number, dp: number) =>
  n.toLocaleString("en-AU", { minimumFractionDigits: dp, maximumFractionDigits: dp });
