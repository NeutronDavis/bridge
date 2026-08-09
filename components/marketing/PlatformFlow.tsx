import React from "react";

const layers = [
  { step: "01", title: "Identity", description: "One secure organisational identity across all enterprise applications." },
  { step: "02", title: "Workflow Engine", description: "Shared rules, approvals, automated actions and notifications." },
  { step: "03", title: "Enterprise Content", description: "Governed documents, version control and business record attachments." },
  { step: "04", title: "Workplace", description: "Contextual collaboration and communication in the context of work." },
  { step: "05", title: "Business Suites", description: "Connected people, customer, financial and operational capabilities." },
  { step: "06", title: "Reporting & Analytics", description: "One unified enterprise view for data-driven decisions." },
] as const;

export function PlatformFlow() {
  return (
    <div className="flow-stepper-wrapper" aria-label="How the Bridge Dynamics platform works together">
      <div className="flow-steps-list">
        {layers.map((layer) => (
          <div className="flow-step-card" key={layer.title}>
            <div className="flow-step-node">
              <span>{layer.step}</span>
            </div>
            <div className="flow-step-content">
              <div className="flow-step-header">
                <h4>{layer.title}</h4>
              </div>
              <p>{layer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
