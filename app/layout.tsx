import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";
import "./forms.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/lib/seo/StructuredData";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: { default: "Bridge Dynamics | Enterprise Business Operating Platform", template: "%s | Bridge Dynamics" },
  description: siteConfig.description,
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><Header/><main id="main-content" tabIndex={-1}>{children}</main><Footer/><StructuredData/></body></html>}
