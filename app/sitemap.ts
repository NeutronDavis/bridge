import type{MetadataRoute}from"next";import{publicRoutes}from"@/lib/routes";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/,"")??"https://example.invalid";return publicRoutes.filter(route=>route!=="/request-demo/success").map(route=>({url:`${base}${route==="/"?"":route}`,changeFrequency:route==="/"?"weekly":"monthly",priority:route==="/"?1:.7}))}
