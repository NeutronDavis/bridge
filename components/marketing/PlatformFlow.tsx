const layers = [
  ["Identity", "One secure organisational identity"],
  ["Workflow", "Shared rules, approvals and automation"],
  ["Enterprise Content", "Governed documents and business records"],
  ["Workplace", "Collaboration in the context of work"],
  ["Business Suites", "Connected people, customer and operational capabilities"],
  ["Reporting & Analytics", "One enterprise view for decisions"],
] as const;

export function PlatformFlow() {
  return <ol className="platform-flow" aria-label="How the Bridge Dynamics platform works together">
    {layers.map(([title, description], index) => <li key={title}>
      <span className="platform-flow__number">{String(index + 1).padStart(2, "0")}</span>
      <div><strong>{title}</strong><span>{description}</span></div>
    </li>)}
  </ol>;
}
