import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function createMetadata(title: string, description: string, path = "/", noIndex = false): Metadata {
  const canonical = siteUrl ? `${siteUrl}${path === "/" ? "" : path}` : undefined;
  return {
    title, description,
    alternates: canonical ? { canonical } : undefined,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title, description, type: "website", siteName: "Bridge Dynamics", url: canonical, images: siteUrl ? [{ url: `${siteUrl}/social-preview.svg`, width: 1200, height: 630, alt: "Bridge Dynamics enterprise business platform" }] : undefined },
  };
}
