import type{MetadataRoute}from"next";
export const dynamic="force-static";
export default function robots():MetadataRoute.Robots{const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,"")??"https://example.invalid";return{rules:{userAgent:"*",allow:"/",disallow:["/request-demo/success/"]},sitemap:`${base}/sitemap.xml`}}
