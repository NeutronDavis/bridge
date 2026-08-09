import { StaticLink as Link } from "@/components/ui/StaticLink";
import { siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Bridge Dynamics home">
          <BrandMark />
          <span>Bridge <strong>Dynamics</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <ThemeToggle />
          <Link className="button button--primary button--small" href="/request-demo">Request a Demo</Link>
        </nav>
        <div className="header-mobile-actions">
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}
