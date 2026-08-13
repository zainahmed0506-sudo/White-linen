"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiteFooter } from "./site-footer";
import { SiteNavigation } from "./site-navigation";

function Arrow() {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true" focusable="false">
      <path d="M2 12h54M47 4l8 8-8 8" />
    </svg>
  );
}

export function ContactPage() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 12);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <main className="contact-page" id="top">
      <SiteNavigation className={`final-navbar final-navbar--visible${hasScrolled ? " final-navbar--scrolled" : ""}`} rootNavigation contactPage />
      <section className="contact-page__hero-media" aria-labelledby="contact-title">
        <Image
          src="/images/hero/optimized/kitchen-living.jpg"
          alt="An open-plan living and kitchen space with pale stone, warm wood, and sculptural seating."
          fill
          priority
          sizes="100vw"
        />
        <div className="contact-page__hero-content">
          <h1 id="contact-title">Bring your next space to life.</h1>
          <p>For a renovation, a full fit-out, or a room that needs a new point of view, begin with a note.</p>
        </div>
      </section>

      <section className="contact-page__section" aria-label="Contact details">
        <div className="contact-page__content">
          <div className="contact-page__details">
            <div className="contact-actions">
              <a className="contact-link" href="mailto:hello@whitelinen.ae?subject=Project%20enquiry"><span>Message us</span><span className="contact-link__detail">hello@whitelinen.ae</span><Arrow /></a>
              <a className="contact-link" href="tel:+97145550184"><span>Call us</span><span className="contact-link__detail">+971 4 555 0184</span><Arrow /></a>
            </div>

          </div>
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.340117993358!2d55.26348847447106!3d25.191750077714435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d5bce2585f%3A0x61ae95744af54dec!2sWhiteLinen!5e0!3m2!1sen!2sus!4v1786625152462!5m2!1sen!2sus" title="Map of WhiteLinen" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
