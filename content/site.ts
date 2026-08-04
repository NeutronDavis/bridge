export const siteConfig = {
  name: "Bridge Dynamics",
  company: "Southbridge Technologies",
  description: "Bridge Dynamics is an Enterprise Business Operating System that unifies people, operations, finance, collaboration, enterprise content, workflows and analytics on one secure platform.",
  navigation: [
    ["Platform", "/platform"], ["Suites", "/solutions"], ["Industries", "/industries"],
    ["Pricing", "/pricing"], ["Security", "/security"], ["Resources", "/resources"], ["Company", "/company"],
  ] as const,
};

export const suites = [
  { name: "Core Platform", accent: "blue", icon: "network", description: "The shared foundation for identity, workflow, integration, configuration and accountable enterprise operations.", capabilities: ["Identity & Access", "Workflow Automation", "Notifications", "Reporting", "Integration Services", "Configuration", "Audit"] },
  { name: "Workplace Suite", accent: "cyan", icon: "customer", description: "A connected workplace for communication and collaboration in the context of enterprise work.", capabilities: ["Enterprise Messaging", "Contextual Conversations", "Message Boards", "Announcements", "Enterprise Notifications"] },
  { name: "Enterprise Content Management Suite", accent: "indigo", icon: "content", description: "Govern documents and business records as connected enterprise content, not isolated files.", capabilities: ["Document Libraries", "Contextual Documents", "Version Control", "Metadata", "Search", "Sharing", "Retention", "Compliance"] },
  { name: "People Suite", accent: "violet", icon: "people", description: "Coordinate workforce administration, development and performance from a shared employee view.", capabilities: ["Employees", "Departments", "Attendance", "Leave", "Performance", "Training"] },
  { name: "Customer Suite", accent: "cyan", icon: "customer", description: "Connect commercial and service activity around one consistent customer relationship view.", capabilities: ["CRM", "Sales", "Customer Service", "Contracts"] },
  { name: "Operations Suite", accent: "amber", icon: "operations", description: "Bring projects, supply, assets and service activity into coordinated enterprise operations.", capabilities: ["Projects", "Procurement", "Inventory", "Assets", "Fleet", "Maintenance"] },
  { name: "Governance Suite", accent: "green", icon: "governance", description: "Make risk, policy, compliance and safety controls part of everyday operational work.", capabilities: ["Risk", "Compliance", "Safety", "Audit", "Policies"] },
  { name: "Insights Suite", accent: "indigo", icon: "insights", description: "Turn shared enterprise information into decision-ready management and executive intelligence.", capabilities: ["Dashboards", "Reporting", "Executive Analytics", "KPIs", "Business Intelligence"] },
] as const;

export const industries = [
  { name: "Oil & Gas Services", description: "Coordinate field operations, projects, workforce, assets and compliance.", capabilities: ["Field operations", "Contract control", "Asset visibility", "Workforce coordination"] },
  { name: "Engineering & Construction", description: "Connect project delivery, procurement, resources and commercial control.", capabilities: ["Project governance", "Resource coordination", "Procurement workflow", "Commercial visibility"] },
  { name: "Professional Services", description: "Manage engagements, people, customer relationships and performance.", capabilities: ["Opportunity management", "Engagement delivery", "Resource planning", "Performance insight"] },
  { name: "Public Sector", description: "Support structured service delivery, responsible access and accountability.", capabilities: ["Approval governance", "Service workflows", "Audit history", "Management reporting"] },
  { name: "Facility Management", description: "Coordinate contracts, assets, service teams and supplier activity.", capabilities: ["Service requests", "Asset operations", "Contract oversight", "Supplier coordination"] },
] as const;

export const resources = [
  { category: "Article", title: "Moving Beyond Spreadsheets", time: "6 min read", summary: "Recognise when spreadsheets have become an operational constraint and plan a controlled transition to connected business processes." },
  { category: "Whitepaper", title: "Improving Operational Visibility", time: "5 min read", summary: "Learn how shared information, defined ownership and management reporting create a clearer view of performance." },
  { category: "Implementation Guide", title: "Selecting an Enterprise Business Platform", time: "8 min read", summary: "A practical framework for assessing platform fit, configuration, governance, implementation and long-term partnership." },
] as const;

export const resourceTypes = ["Articles", "Whitepapers", "Case Studies", "Implementation Guides", "Videos", "Product Updates"] as const;
