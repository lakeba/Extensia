export type Who = "student" | "arrival" | "smsf";

export type WaitlistEntry = {
  who: Who;
  firstName: string;
  lastName: string;
  email: string;
  movingFrom?: string;
  arriving?: string;
  fundName?: string;
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const countries = ["India", "China", "Nepal", "Philippines", "Vietnam", "Pakistan", "Colombia", "Brazil", "United Kingdom", "Other"];
export const arrivals = ["Already here", "Within 1 month", "1–3 months", "3–6 months", "Later"];
