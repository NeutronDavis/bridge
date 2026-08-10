import type { Metadata } from "next";
import { StaticLink as Link } from "@/components/ui/StaticLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCta } from "@/components/marketing/FinalCta";
import { PlatformFlow } from "@/components/marketing/PlatformFlow";
import { PlatformIllustration } from "@/components/marketing/PlatformIllustration";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { SuiteCard } from "@/components/marketing/SuiteCard";
import { createMetadata } from "@/lib/seo/metadata";
import { industries, suites } from "@/content/site";

export const metadata:Metadata=createMetadata("Enterprise Business Operating System","One platform. Integrated suites. One source of truth for the modern enterprise.");
const platformPrinciples=[
  ["One Platform","A common enterprise foundation connects business capabilities without creating another fragmented technology estate."],
  ["One Identity","People use one governed organisational identity with access aligned to their responsibilities."],
  ["One Workflow Engine","Approvals, business rules and notifications operate consistently across suites and departments."],
  ["One Enterprise","Shared content, collaboration and reporting create one dependable operational view."],
];
const workplace=["Enterprise messaging","Contextual conversations","Message boards","Enterprise notifications","Document collaboration","Workflow discussions"];
const contentCapabilities=["Document libraries","Version control","Secure sharing","Metadata and search","Retention and compliance","Business record attachments"];
const comparison=[
  ["Traditional enterprise software",["Multiple applications","Multiple logins","Data silos","Complex integrations","Disconnected teams","Higher operational complexity"]],
  ["Bridge Dynamics",["One platform","Integrated suites","One identity","Shared workflows","Shared documents","Shared collaboration","Shared reporting","Lower operational complexity"]],
] as const;

const getIndustryIcon = (name: string) => {
  switch (name) {
    case "Oil & Gas Services":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      );
    case "Engineering & Construction":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/>
          <path d="M10 15V8a4 4 0 0 1 8 0v7"/>
          <path d="M4 15V9a6 6 0 0 1 6-6"/>
        </svg>
      );
    case "Professional Services":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4"/>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          <path d="M12 11v4"/>
        </svg>
      );
    case "Public Sector":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="21" x2="21" y2="21"/>
          <line x1="6" y1="18" x2="6" y2="11"/>
          <line x1="10" y1="18" x2="10" y2="11"/>
          <line x1="14" y1="18" x2="14" y2="11"/>
          <line x1="18" y1="18" x2="18" y2="11"/>
          <polygon points="12 2 20 7 4 7 12 2"/>
        </svg>
      );
    case "Facility Management":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
          <path d="M9 22v-4h6v4"/>
          <line x1="8" y1="6" x2="8.01" y2="6"/>
          <line x1="12" y1="6" x2="12.01" y2="6"/>
          <line x1="16" y1="6" x2="16.01" y2="6"/>
          <line x1="8" y1="10" x2="8.01" y2="10"/>
          <line x1="12" y1="10" x2="12.01" y2="10"/>
          <line x1="16" y1="10" x2="16.01" y2="10"/>
          <line x1="8" y1="14" x2="8.01" y2="14"/>
          <line x1="12" y1="14" x2="12.01" y2="14"/>
          <line x1="16" y1="14" x2="16.01" y2="14"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Home(){return <>
<section className="hero">
  <div className="container hero-grid">
    <div className="hero-copy">
      {/* <p className="eyebrow">Enterprise Business Operating System</p> */}
      <h1>Run Your Entire Enterprise From One Intelligent Platform</h1>
      <p className="lead">Bridge Dynamics unifies people, operations, finance, collaboration, enterprise content, workflows and analytics into one secure platform designed for modern organisations.</p>
      <div className="actions">
        <ButtonLink href="/request-demo">Request a Demonstration</ButtonLink>
        <ButtonLink href="/platform" variant="secondary">Explore the Platform</ButtonLink>
      </div>
      <div className="trust-linen" aria-label="Platform qualities">
        <br/>
        <span>One Platform. Integrated Suites. One Source of Truth.</span>
      </div>
    </div>
    <PlatformIllustration/>
  </div>
</section>
<section className="section">
  <div className="container">
    <SectionHeading eyebrow="One platform" title="The operating foundation for one connected enterprise">
      Bridge Dynamics replaces fragmented business applications with a unified platform where identity, workflow, content, collaboration and reporting work together.
    </SectionHeading>
    <div className="principle-grid">
      {platformPrinciples.map(([title,text],index)=>(
        <article className="platform-principle" key={title}>
          <span>0{index+1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  </div>
</section>
<section className="section section--soft">
  <div className="container">
    <SectionHeading eyebrow="Integrated product suites" title="Enterprise capability, connected by design">
      Each suite serves a distinct area of the organisation while sharing the same identity, workflows, content, collaboration and source of enterprise data.
    </SectionHeading>
    <div className="suite-grid suite-grid--integrated">
      {suites.slice(0, 4).map((suite, index) => (
        <SuiteCard key={suite.name} suite={suite} index={index} />
      ))}
    </div>
    <div className="section-action-bar">
      <ButtonLink href="/solutions" variant="secondary">
        Explore All Product Suites <span aria-hidden="true"></span>
      </ButtonLink>
    </div>
  </div>
</section>
<section className="section">
  <div className="container split split--flow">
    <div>
      <SectionHeading eyebrow="How everything works together" title="A shared platform beneath every business process">Every suite uses the same enterprise services. Information moves through controlled workflows, stays connected to its business context and becomes available for consistent reporting.</SectionHeading>
      <ButtonLink href="/platform" variant="secondary">Explore platform services</ButtonLink>
    </div>
    <PlatformFlow/>
  </div>
</section>
<section className="section section--brand">
  <div className="container split">
    <div>
      <p className="eyebrow eyebrow--light">Work happens here</p>
      <h2>Collaboration belongs in the context of enterprise work</h2>
      <p className="lead">The Workplace Suite brings communication into the processes, records and decisions people are already working on—reducing the need to switch between disconnected applications.</p>
      <ButtonLink href="/solutions" variant="light">Explore the Workplace Suite</ButtonLink>
    </div>
    <ul className="capability-panel">{workplace.map(item=><li key={item}>{item}</li>)}</ul>
  </div>
</section>
<section className="section">
  <div className="container split">
    <div className="ecm-visual-container" aria-label="Enterprise Content Management Platform Visual">
      <div className="ecm-header-title">ENTERPRISE CONTENT MANAGEMENT PLATFORM</div>
      <div className="ecm-timeline-track">
        <div className="ecm-card">
          <div className="ecm-card-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0d507d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <polyline points="9 15 11 17 15 13"/>
            </svg>
          </div>
          <div className="ecm-card-body">
            <div className="ecm-card-title">Project_Alpha_Proposal.pdf</div>
            <div className="ecm-card-meta">
              <span className="ecm-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                Approved
              </span>
              <span className="ecm-version">↳ Version 04</span>
              <span className="ecm-timestamp">Oct 26, 2023 | 10:30 AM</span>
            </div>
          </div>
        </div>

        <div className="ecm-card">
          <div className="ecm-card-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0d507d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <rect x="9" y="13" width="6" height="5" rx="1"/>
              <path d="M10 13v-1.5a2 2 0 1 1 4 0V13"/>
            </svg>
          </div>
          <div className="ecm-card-body">
            <div className="ecm-card-title">Compliance_Policy_v3.docx</div>
            <div className="ecm-card-meta">
              <span className="ecm-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Controlled
              </span>
              <span className="ecm-version">↳ Version 03</span>
              <span className="ecm-timestamp">Oct 25, 2023 | 14:15 PM</span>
            </div>
          </div>
        </div>

        <div className="ecm-card">
          <div className="ecm-card-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0d507d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <circle cx="12" cy="15" r="3"/>
              <polyline points="12 13.5 12 15 13 15"/>
            </svg>
          </div>
          <div className="ecm-card-body">
            <div className="ecm-card-title">Q4_Financial_Report_Draft.xlsx</div>
            <div className="ecm-card-meta">
              <span className="ecm-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                In Review
              </span>
              <span className="ecm-version">↳ Version 02</span>
              <span className="ecm-timestamp">Oct 24, 2023 | 09:00 AM</span>
            </div>
          </div>
        </div>

        <div className="ecm-card">
          <div className="ecm-card-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0d507d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M9 15h6M13 12l2 3-2 3"/>
            </svg>
          </div>
          <div className="ecm-card-body">
            <div className="ecm-card-title">Employee_Handbook_2024.pdf</div>
            <div className="ecm-card-meta">
              <span className="ecm-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Version 04
              </span>
              <span className="ecm-version">↳ Version 04</span>
              <span className="ecm-timestamp">Oct 23, 2023 | 16:45 PM</span>
            </div>
          </div>
        </div>

        <div className="ecm-card">
          <div className="ecm-card-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0d507d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M12 18l4-4-2-2-4 4v2h2z"/>
            </svg>
          </div>
          <div className="ecm-card-body">
            <div className="ecm-card-title">Marketing_Plan_Revised.pptx</div>
            <div className="ecm-card-meta">
              <span className="ecm-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Draft
              </span>
              <span className="ecm-version">↳ Version 01</span>
              <span className="ecm-timestamp">Oct 22, 2023 | 11:20 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className="eyebrow">Enterprise content management</p>
      <h2>Business content with structure, context and control</h2>
      <p className="lead">Bridge Dynamics treats documents as governed enterprise records connected to customers, projects, people, workflows and decisions—not as files held in isolated storage.</p>
      <ul className="check-list check-list--columns">{contentCapabilities.map(item=><li key={item}>{item}</li>)}</ul>
    </div>
  </div>
</section>
<section className="section section--soft">
  <div className="container">
    <SectionHeading eyebrow="Why Bridge Dynamics" title="Reduce the operational cost of fragmentation">
      A unified operating system replaces duplicated identity, integration and reporting effort with shared enterprise services.
    </SectionHeading>
    <div className="comparison-grid">
      {comparison.map(([title,items],index)=>(
        <article className={`comparison-panel ${index===1 ? "comparison-panel--brand" : "comparison-panel--light"}`} key={title}>
          <p className="comparison-panel__label">{index===0 ? "FRAGMENTED MODEL" : "UNIFIED MODEL"}</p>
          <h3>{title}</h3>
          <ul className="comparison-panel__list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <SectionHeading eyebrow="Industry relevance" title="A common enterprise foundation, configured for operating context"/>
    <div className="industry-list">
      {industries.map((industry)=><article className="industry-row" key={industry.name}>
        <span className="industry-icon-box">{getIndustryIcon(industry.name)}</span>
        <h3>{industry.name}</h3>
        <p>{industry.description}</p>
        <Link className="text-link" href="/industries">Industry view <span aria-hidden="true">→</span></Link>
      </article>)}
    </div>
  </div>
</section>
<section className="section section--brand">
  <div className="container split">
    <div>
      <p className="eyebrow eyebrow--light">Security and trust</p>
      <h2>Enterprise controls across one connected platform</h2>
      <p>Identity, tenant isolation, permissions, content governance and audit capabilities support responsible operations across every suite.</p>
      <ButtonLink href="/security" variant="light">Explore security</ButtonLink>
    </div>
    <ul className="capability-panel">{["Role-based access","Tenant isolation","Audit trails","Content governance","Secure collaboration","Platform monitoring"].map(item=><li key={item}>{item}</li>)}</ul></div></section><FinalCta/></>}
