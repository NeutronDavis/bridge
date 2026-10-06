import { StaticLink as Link } from "@/components/ui/StaticLink";
import { BrandLogo } from "./Header";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" aria-label="Bridge Dynamics home">
              <BrandLogo className="brand-icon footer-icon" />
              <span className="brand-text">Bridge<strong>Dynamics</strong></span>
            </Link>
            <p>An Enterprise Business Operating System from Southbridge Technologies.</p>
          </div>
          <div>
            <h2>Platform</h2>
            <Link href="/platform">Overview</Link>
            <Link href="/solutions">Suites</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/security">Security</Link>
          </div>
          <div>
            <h2>Company</h2>
            <Link href="/company">About us</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Start a conversation</h2>
            <p>Discuss your operational priorities with our enterprise solutions team.</p>
            <Link className="footer-action" href="/request-demo">
              Request a Demonstration <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Southbridge Technologies.</span>
          <span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
