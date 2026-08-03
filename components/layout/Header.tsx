import { StaticLink as Link } from "@/components/ui/StaticLink";
import { siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";

export function Header(){ return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Bridge Dynamics home"><BrandMark/><span>Bridge <strong>Dynamics</strong></span></Link><nav className="desktop-nav" aria-label="Primary navigation">{siteConfig.navigation.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link className="button button--primary button--small" href="/request-demo">Request a Demo</Link></nav><MobileNavigation/></div></header>; }
export function BrandMark(){return <span className="brand-mark" aria-hidden="true"><i/><i/><i/></span>;}
