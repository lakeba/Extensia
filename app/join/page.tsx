import type { Metadata } from "next";
import { Ticks } from "@/components/Bits";
import { WaitlistForm } from "@/components/WaitlistForm";
import type { Who } from "@/lib/waitlist";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: "Get early access to Extensia and 3 months of Plus free at launch.",
  alternates: { canonical: "/join" },
};

const WHO: Who[] = ["student", "arrival", "smsf"];

export default async function Join({ searchParams }: { searchParams: Promise<{ as?: string }> }) {
  const { as } = await searchParams;
  const initialWho = WHO.includes(as as Who) ? (as as Who) : "student";
  return (
    <section className="p-hero">
      <div className="wrap join">
        <div className="stack">
          <span className="eyebrow">Waitlist</span>
          <h1 className="t-1">Get early access to Extensia.</h1>
          <p className="lede">Tell us a little about yourself. We&apos;ll invite people arriving soonest first, and keep you updated on our launch.</p>
          <Ticks style={{ marginTop: 0 }} items={["3 months of Plus free at launch", "Students: 12 months of Plus with a valid CoE", "SMSF founding members: first 6 months free"]} />
        </div>
        <WaitlistForm key={initialWho} initialWho={initialWho} />
      </div>
    </section>
  );
}
