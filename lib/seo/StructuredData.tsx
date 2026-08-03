import { siteConfig } from "@/content/site";

function safeJson(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }

export function StructuredData() {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!base) return null;
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.company, url: base },
    { "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.name, applicationCategory: "BusinessApplication", operatingSystem: "Web", description: siteConfig.description, url: base },
  ];
  return <script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />;
}
