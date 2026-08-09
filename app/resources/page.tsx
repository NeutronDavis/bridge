import type{Metadata}from"next";import{StaticLink as Link}from"@/components/ui/StaticLink";import{PageHero}from"@/components/marketing/PageHero";import{FinalCta}from"@/components/marketing/FinalCta";import{resources,resourceTypes}from"@/content/site";import{createMetadata}from"@/lib/seo/metadata";
export const metadata:Metadata=createMetadata("Enterprise Resources","Articles, whitepapers and practical guidance for connected enterprise operations.","/resources");
export default function Resources(){
    return <>
    <PageHero 
    eyebrow="Resources" 
    title="Practical guidance for operating a connected enterprise" 
    description="Explore perspectives on enterprise platforms, operational visibility, implementation and the move from fragmented applications to one source of truth."/>
    <section className="section resource-library">
      <div className="container">
        <div className="resource-type-list" aria-label="Resource formats">
          {resourceTypes.map(type=><span key={type}>{type}</span>)}
        </div>
        <div className="resource-grid">
          {resources.map(item=><article className="resource-card" key={item.title}>
            <p className="resource-meta">{item.category} · {item.time}</p>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <Link className="text-link" href={`/contact?enquiry=resource&resource=${encodeURIComponent(item.title)}`}>Request this resource <span aria-hidden="true">→</span></Link></article>)}
        </div>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container split">
        <div><p className="eyebrow">Resource library</p>
        <h2>Built to support informed enterprise decisions</h2>
        </div>
        <p className="lead">The library structure is prepared for future case studies, product updates, videos and implementation guidance as approved materials become available.</p>
      </div>
    </section>
    <FinalCta/>
  </>
}
