"use client";

import { useEffect, useState } from "react";
import { SiteNavigation } from "./site-navigation";

export function HeroPageNavigation() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setHasScrolled(window.scrollY > 12);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return <SiteNavigation className={`final-navbar final-navbar--visible${hasScrolled ? " final-navbar--scrolled" : ""}`} rootNavigation />;
}
