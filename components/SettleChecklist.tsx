"use client";

import { useEffect, useState } from "react";

const KEY = "extensia-checklist";
const items = [
  { id: "c1", title: "Open your Extensia account", sub: "Passport and visa grant notice", when: "Before" },
  { id: "c2", title: "Add your card to your phone", sub: "Pay for the airport train on arrival", when: "Before" },
  { id: "c3", title: "Get a local SIM", sub: "Update your mobile number in the app", when: "Day 1" },
  { id: "c4", title: "Apply for a Tax File Number", sub: "Online with the ATO, free", when: "Week 1" },
  { id: "c5", title: "Enrol in Medicare if eligible", sub: "Depends on your visa", when: "Week 1" },
  { id: "c6", title: "Give your employer your details", sub: "BSB, account number and super fund", when: "Week 2" },
  { id: "c7", title: "Set up a transfer home", sub: "Recurring or one-off", when: "Month 1" },
];

export function SettleChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      setDone(JSON.parse(localStorage.getItem(KEY) || "{}") || {});
    } catch {
      /* storage unavailable */
    }
  }, []);

  function toggle(id: string, v: boolean) {
    const next = { ...done, [id]: v };
    setDone(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
  }

  const n = items.filter((i) => done[i.id]).length;

  return (
    <div>
      <div className="progress-line"><span>{n} of {items.length} done</span><span>Before and after you land</span></div>
      <div className="meter" style={{ marginBottom: 16 }}><div style={{ width: `${(n / items.length) * 100}%` }} /></div>
      <div className="check">
        {items.map((i) => (
          <label key={i.id}>
            <input type="checkbox" id={i.id} checked={!!done[i.id]} onChange={(e) => toggle(i.id, e.target.checked)} />
            <span><b>{i.title}</b><small>{i.sub}</small></span>
            <span className="when">{i.when}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
