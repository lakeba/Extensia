export type FaqCat = "gen" | "stu" | "arr" | "smsf";

export const faqCats: { id: "all" | FaqCat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "gen", label: "General" },
  { id: "stu", label: "Students" },
  { id: "arr", label: "New arrivals" },
  { id: "smsf", label: "SMSF" },
];

export const faqs: { cat: FaqCat; q: string; a: string }[] = [
  { cat: "gen", q: "Is Extensia a bank?", a: "No. Extensia is a financial technology company. Australian law only allows licensed authorised deposit-taking institutions to call themselves a bank. Our accounts and payments will run on Banking Circle infrastructure, and we intend to apply for our own licence in the future. Before launch we'll publish exactly how your money is held and protected." },
  { cat: "gen", q: "When can I open an account?", a: "We're aiming to launch in the second half of 2027. Join the waitlist and we'll invite you in the order you signed up, with priority for people arriving soonest." },
  { cat: "arr", q: "What documents do I need?", a: "A valid passport and your visa grant notice. We'll check your visa through the government's VEVO service. After you arrive we'll ask for your Australian residential address so we can post your card." },
  { cat: "arr", q: "Can I apply before I arrive in Australia?", a: "Yes. You can apply up to 90 days before your travel date. You'll get your BSB, account number and a virtual card as soon as you're verified." },
  { cat: "stu", q: "How do I get Plus free as a student?", a: "Upload your Confirmation of Enrolment (CoE) when you sign up. Plus is free for 12 months, then you can stay on Plus or move to Standard at no cost." },
  { cat: "stu", q: "Does the work hours tracker replace checking my visa?", a: "No. The tracker helps you count hours, but your visa conditions are set by the Department of Home Affairs. Check your own conditions in VEVO and keep your own records." },
  { cat: "stu", q: "Can my family pay my tuition from overseas?", a: "Yes. They can send money to your Extensia account using a payment link in their currency. You then pay your university in AUD from the app." },
  { cat: "smsf", q: "Can every trustee have their own login?", a: "Yes. Individual trustees and the directors of a corporate trustee each verify their identity and get their own access. You choose who can view and who can approve payments." },
  { cat: "smsf", q: "Will my accountant get access?", a: "You can invite your accountant, auditor or adviser with view-only access and remove it at any time. We're planning daily data feeds to common SMSF administration software." },
  { cat: "smsf", q: "Do you give advice on my SMSF?", a: "No. Extensia provides a transaction account only. For advice on your fund's investment strategy or compliance, speak to a licensed financial adviser or SMSF specialist." },
];
