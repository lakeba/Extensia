import type { Metadata } from "next";
import { Suspense } from "react";
import { Ticks } from "@/components/Bits";
import { WaitlistForm, WaitlistFormWithParams } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: "Get early access to Extensia and 3 months of Plus free at launch.",
  alternates: { canonical: "/join" },
};

export default function Join() {
  return (
    <section className="p-hero">
      <div className="wrap join">
        <div className="stack">
          <span className="eyebrow">Waitlist</span>
          <h1 className="t-1">Get early access to Extensia.</h1>
          <p className="lede">Tell us a little about yourself. We&apos;ll invite people arriving soonest first, and keep you updated on our launch.</p>
          <Ticks style={{ marginTop: 0 }} items={["3 months of Plus free at launch", "Students: 12 months of Plus with a valid CoE", "SMSF founding members: first 6 months free"]} />
        </div>
        <Suspense fallback={<WaitlistForm initialWho="student" />}>
          <WaitlistFormWithParams />
        </Suspense>
      </div>
    </section>
  );
}
