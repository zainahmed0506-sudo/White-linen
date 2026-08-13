import Link from "next/link";
import { SocialLinks } from "./social-links";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/" aria-label="White Linen Interiors home"><Wordmark compact /></Link>
      <SocialLinks />
      <div className="footer-info">
        <address className="footer-address">
          <a href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noreferrer">Studio 26, Dubai<br />United Arab Emirates</a>
        </address>
        <Link className="footer-top" href="#top">Back to top</Link>
      </div>
      <p className="footer-copyright">© 2026 White Linen</p>
    </footer>
  );
}
