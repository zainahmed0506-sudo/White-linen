"use client";

import Link from "next/link";
import { useState } from "react";
import { Wordmark } from "./wordmark";

type SiteNavigationProps = {
  className: string;
  ariaHidden?: boolean;
  rootNavigation?: boolean;
};

export function SiteNavigation({ className, ariaHidden, rootNavigation = false }: SiteNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionLink = (hash: string) => rootNavigation ? `/${hash}` : hash;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={className} aria-hidden={ariaHidden}>
      <nav className="navbar-links navbar-links--left" aria-label="Primary navigation">
        <Link className="navbar-link" href={sectionLink("#about")}>About</Link>
        <Link className="navbar-link" href="/portfolio">Portfolio</Link>
      </nav>
      <Link className="final-navbar__brand" href="/" aria-label="White Linen Interiors home"><Wordmark compact /></Link>
      <nav className="navbar-links navbar-links--right" aria-label="Secondary navigation">
        <span className="navbar-link navbar-link--static">Current work</span>
        <Link className="navbar-link" href="/contact">Contact</Link>
      </nav>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-site-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="mobile-site-navigation" className={`mobile-navigation${menuOpen ? " mobile-navigation--open" : ""}`} aria-label="Mobile navigation">
        <Link className="mobile-navigation__link" href={sectionLink("#about")} onClick={closeMenu}>About</Link>
        <Link className="mobile-navigation__link" href="/portfolio" onClick={closeMenu}>Portfolio</Link>
        <span className="mobile-navigation__link mobile-navigation__link--static">Current work</span>
        <Link className="mobile-navigation__link" href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}
