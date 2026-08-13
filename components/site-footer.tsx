import Link from "next/link";
import { SocialLinks } from "./social-links";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <Link className="footer-brand" href="/" aria-label="White Linen Interiors home"><Wordmark compact /></Link>
      <div className="footer-rule" aria-hidden="true" />
      <section className="footer-panel footer-location" aria-label="Studio address">
        <p className="footer-label">Address</p>
        <address className="footer-address">
          <a href="https://www.google.com/maps/search/?api=1&query=2603%20Aspect%20Tower%2C%20Business%20Bay%2C%20Dubai%2C%20UAE" target="_blank" rel="noreferrer">2603 Aspect Tower, Business Bay<br />PO Box 71345, Dubai UAE</a>
        </address>
      </section>
      <section className="footer-panel footer-social" aria-label="Social media">
        <p className="footer-label">Follow us</p>
        <SocialLinks />
      </section>
      <section className="footer-panel footer-contact" aria-label="Contact details">
        <p className="footer-label">Contact</p>
        <a href="mailto:alexandra@whitelinen.ae?subject=Project%20enquiry">alexandra@whitelinen.ae</a>
        <a href="https://wa.me/971506985952" target="_blank" rel="noreferrer">WhatsApp&nbsp; +971 (0)50 698 5952</a>
      </section>
      <p className="footer-copyright">© 2026 White Linen Interiors</p>
    </footer>
  );
}
