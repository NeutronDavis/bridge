import type{Metadata}from"next";
import{PageHero}from"@/components/marketing/PageHero";
import{SuiteCard}from"@/components/marketing/SuiteCard";
import{SectionHeading}from"@/components/marketing/SectionHeading";
import{FinalCta}from"@/components/marketing/FinalCta";
import{suites}from"@/content/site";
import{createMetadata}from"@/lib/seo/metadata";

export const metadata:Metadata=createMetadata("Integrated Product Suites","Explore the integrated Bridge Dynamics suites built on one Enterprise Business Operating System.","/solutions");
export default function Solutions(){return <><PageHero eyebrow="Integrated product suites" title="One platform. Eight connected suites." description="Bridge Dynamics combines shared enterprise services with focused suites for workplace collaboration, content, people, customers, operations, governance and insight."/><section className="section"><div className="container"><SectionHeading eyebrow="Enterprise capability without fragmentation" title="Every suite contributes to one source of truth">Teams gain purpose-built capability without separate identities, disconnected documents or isolated reporting.</SectionHeading><div className="suite-grid suite-grid--integrated">{suites.map((suite,index)=><SuiteCard suite={suite} index={index} key={suite.name}/>)}</div></div></section><section className="section section--soft"><div className="container split"><div><p className="eyebrow">Integrated by design</p><h2>Suites work together through shared enterprise services</h2><p className="lead">A customer conversation can become an approved quotation, a governed contract, an operational project and an executive report without losing context between departments.</p></div><ul className="check-list">{["One organisational identity","Shared workflow and approvals","Contextual enterprise content","Workplace collaboration","Connected business records","Consistent reporting"].map(item=><li key={item}>{item}</li>)}</ul></div></section><FinalCta/></>}
