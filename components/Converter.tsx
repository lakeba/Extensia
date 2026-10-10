"use client";

import { useMemo, useState } from "react";
import { FEE_RATE, FREE_ALLOWANCE, TYPICAL_FEE, TYPICAL_MARGIN, fmt, rates } from "@/lib/rates";

const parse = (v: string) => parseFloat(v.replace(/[^0-9.]/g, "")) || 0;

export function Converter() {
  const [raw, setRaw] = useState("1,000");
  const [idx, setIdx] = useState(0);

  const r = useMemo(() => {
    const x = rates[idx];
    const a = parse(raw);
    const fee = Math.max(0, a - FREE_ALLOWANCE) * FEE_RATE;
    const dp = x.r > 1000 ? 0 : 2;
    return {
      x,
      fee,
      us: x.symbol + fmt((a - fee) * x.r, dp),
      them: x.symbol + fmt(Math.max(0, a - TYPICAL_FEE) * x.r * (1 - TYPICAL_MARGIN), dp),
      rate: `1 AUD = ${fmt(x.r, x.r < 10 ? 3 : 2)} ${x.code}`,
    };
  }, [raw, idx]);

  return (
    <div className="conv" id="converter">
      <div className="conv-row">
        <label htmlFor="cvAmt">You send</label>
        <input
          id="cvAmt"
          type="text"
          inputMode="decimal"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          onBlur={() => {
            const a = parse(raw);
            setRaw(a ? fmt(a, a % 1 ? 2 : 0) : "");
          }}
        />
        <span className="cur">🇦🇺 AUD</span>
      </div>
      <div className="conv-row">
        <label htmlFor="cvCur">They receive</label>
        <div className="conv-out" aria-live="polite">{r.us}</div>
        <select className="cur" id="cvCur" value={idx} onChange={(e) => setIdx(+e.target.value)}>
          {rates.map((x, i) => <option key={x.code} value={i}>{x.flag} {x.code}</option>)}
        </select>
      </div>
      <div className="conv-meta">
        <div><span>Rate</span><span>{r.rate}</span></div>
        <div><span>Extensia fee (Standard)</span><span>A${fmt(r.fee, 2)}</span></div>
        <div><span>Typical arrival</span><span>{r.x.eta}</span></div>
      </div>
      <div className="compare">
        <div className="win">With Extensia<b>{r.us}</b></div>
        <div>Typical card or wire transfer<b>{r.them}</b></div>
      </div>
      <p className="note">
        Illustrative rates. The comparison assumes a {TYPICAL_MARGIN * 100}% exchange margin plus a A${TYPICAL_FEE} transfer fee. Live rates will be shown in the app.
      </p>
    </div>
  );
}
