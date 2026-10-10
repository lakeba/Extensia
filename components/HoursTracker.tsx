"use client";

import { type FormEvent, useState } from "react";
import { fmt } from "@/lib/rates";

const CAP = 48;
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const SAMPLE = [0, 5, 0, 6, 0, 8, 0, 0, 4.5, 0, 6, 0, 7.5, 0];
const START_DATE = 5; // Mon 5 Oct

export function HoursTracker() {
  const [hours, setHours] = useState(SAMPLE);
  const [day, setDay] = useState(13);
  const [add, setAdd] = useState("5");

  const total = hours.reduce((s, h) => s + h, 0);
  const left = CAP - total;
  const level = total > CAP ? "over" : total >= 40 ? "warn" : "";
  const status =
    total > CAP
      ? { cls: "status over", text: `${fmt(-left, 1)} h over the limit` }
      : total >= 40
        ? { cls: "status prog", text: `${fmt(left, 1)} h left` }
        : { cls: "status live", text: `On track · ${fmt(left, 1)} h left` };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const h = parseFloat(add) || 0;
    setHours((prev) => prev.map((v, i) => (i === day ? Math.min(24, v + h) : v)));
  }

  return (
    <div className="tracker">
      <div className="tracker-head">
        <div>
          <span className="small">This fortnight · Mon 5 Oct – Sun 18 Oct</span>
          <div className="tracker-big">{fmt(total, total % 1 ? 1 : 0)}<small> / {CAP} h</small></div>
        </div>
        <span className={status.cls} aria-live="polite">{status.text}</span>
      </div>
      <div className={`meter ${level}`}><div style={{ width: `${Math.min(100, (total / CAP) * 100)}%` }} /></div>
      <div className="days" aria-label="Hours worked per day">
        {hours.map((h, i) => (
          <div className="d" key={i}>
            <div className={`bar${h ? "" : " zero"}`} style={{ height: `${Math.min(100, (h / 10) * 100) * 0.85}%` }} title={`${DAYS[i]}: ${h} h`} />
            <span className="lab">{DAYS[i][0]}</span>
          </div>
        ))}
      </div>
      <form className="shift-form" onSubmit={onSubmit}>
        <label htmlFor="trkDay">Add a shift</label>
        <select id="trkDay" value={day} onChange={(e) => setDay(+e.target.value)}>
          {DAYS.map((d, i) => <option key={i} value={i}>{d} {START_DATE + i} Oct</option>)}
        </select>
        <input id="trkHrs" type="number" min="0.5" max="16" step="0.5" value={add} onChange={(e) => setAdd(e.target.value)} aria-label="Hours" />
        <button className="btn btn-accent btn-sm" type="submit">Add</button>
        <button className="btn btn-ghost btn-sm" type="button" onClick={() => setHours(SAMPLE)}>Reset example</button>
      </form>
      <p className="note">Example shifts. Try adding one to see the warning.</p>
    </div>
  );
}
