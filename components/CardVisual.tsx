export function CardVisual({ color, tier, pan, label, style }: { color: "cobalt" | "coral" | "night" | "gum"; tier: string; pan: string; label: string; style?: React.CSSProperties }) {
  return (
    <div className={`xcard ${color}`} style={style}>
      <div className="top"><span className="brand">Extensia</span><span className="tier">{tier}</span></div>
      <span className="chipz" />
      <div className="bot"><span className="pan">•••• {pan}</span><span className="tier">{label}</span></div>
    </div>
  );
}
