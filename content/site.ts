export const siteConfig = {
  name: "Bridge Dynamics",
  company: "Southbridge Technologies",
  description: "A modern enterprise business operating platform designed to help organisations manage people, projects, finance, operations, governance and business growth from one connected platform.",
  navigation: [
    ["Platform", "/platform"], ["Solutions", "/solutions"], ["Industries", "/industries"],
    ["Pricing", "/pricing"], ["Security", "/security"], ["Resources", "/resources"], ["Company", "/company"],
  ] as const,
};

export const suites = [
  { name: "Core Platform", accent: "blue", description: "The secure foundation for shared records, access, workflow and configuration.", capabilities: ["Identity and access", "Workflow", "Documents", "Notifications", "Audit", "Configuration", "Reporting"] },
  { name: "People Suite", accent: "violet", description: "Coordinate the employee lifecycle and build a clear view of your workforce.", capabilities: ["Employees", "Leave", "Attendance", "Payroll", "Recruitment", "Performance", "Training"] },
  { name: "Customer Suite", accent: "cyan", description: "Connect commercial activity around a consistent customer relationship view.", capabilities: ["CRM", "Leads", "Customers", "Opportunities", "Quotations", "Invoicing", "Contracts"] },
  { name: "Operations Suite", accent: "amber", description: "Bring projects, supply, assets and field activity into coordinated operations.", capabilities: ["Projects", "Procurement", "Vendors", "Assets", "Inventory", "Fleet"] },
  { name: "Governance Suite", accent: "green", description: "Make risk, quality, compliance and corrective action part of daily work.", capabilities: ["QHSE", "Incidents", "Risk", "CAPA", "Audits", "Inspections", "Compliance"] },
  { name: "Insights Suite", accent: "indigo", description: "Turn connected operational information into decision-ready intelligence.", capabilities: ["Dashboards", "Reports", "Analytics", "Executive visibility"] },
] as const;

export const industries = [
  { name: "Oil & Gas Services", description: "Coordinate field operations, projects, workforce, assets and compliance.", capabilities: ["Field operations", "Contract control", "Asset visibility", "Workforce coordination"] },
  { name: "Engineering & Construction", description: "Connect project delivery, procurement, resources and commercial control.", capabilities: ["Project governance", "Resource coordination", "Procurement workflow", "Commercial visibility"] },
  { name: "Professional Services", description: "Manage engagements, people, customer relationships and performance.", capabilities: ["Opportunity management", "Engagement delivery", "Resource planning", "Performance insight"] },
  { name: "Public Sector", description: "Support structured service delivery, responsible access and accountability.", capabilities: ["Approval governance", "Service workflows", "Audit history", "Management reporting"] },
  { name: "Facility Management", description: "Coordinate contracts, assets, service teams and supplier activity.", capabilities: ["Service requests", "Asset operations", "Contract oversight", "Supplier coordination"] },
] as const;

export const resources = [
  { title: "Moving Beyond Spreadsheets", time: "6 min read", summary: "Recognise when spreadsheets have become an operational constraint and plan a controlled transition to connected business processes." },
  { title: "Improving Operational Visibility", time: "5 min read", summary: "Learn how shared information, defined ownership and management reporting create a clearer view of performance." },
  { title: "Selecting an Enterprise Business Platform", time: "8 min read", summary: "A practical framework for assessing fit, configuration, governance, implementation and long-term partnership." },
] as const;
