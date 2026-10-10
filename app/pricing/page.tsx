import type { Metadata } from "next";
import { PricingPlans } from "@/components/PricingPlans";
import { comparison } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Start free. Compare Standard, Plus, Premium and SMSF plans.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  return (
    <section className="p-hero">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 28 }}>
          <span className="eyebrow">Pricing</span>
          <h1 className="t-1">Plans that grow with your life here.</h1>
          <p className="lede">Start free. Upgrade when you travel more, send more, or open an account for your super fund. Proposed launch pricing, subject to change.</p>
        </div>
        <PricingPlans />
        <div className="tbl-wrap">
          <table>
            <thead><tr><th>Compare</th><th>Standard</th><th>Plus</th><th>Premium</th><th>SMSF</th></tr></thead>
            <tbody>
              {comparison.map(([label, ...cells]) => (
                <tr key={label}><td>{label}</td>{cells.map((c, i) => <td key={i} className="num">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="note mt-s">*Weekday exchange. A 1% markup applies at weekends when markets are closed. All prices are proposed and in Australian dollars, including GST where applicable.</p>
      </div>
    </section>
  );
}
