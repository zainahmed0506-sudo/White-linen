import Link from "next/link";
import { Wordmark } from "./wordmark";

type SiteNavigationProps = {
  className: string;
  ariaHidden?: boolean;
  rootNavigation?: boolean;
};

export function SiteNavigation({ className, ariaHidden, rootNavigation = false }: SiteNavigationProps) {
  const sectionLink = (hash: string) => rootNavigation ? `/${hash}` : hash;

  return (
    <header className={className} aria-hidden={ariaHidden}>
      <div className="final-navbar__surface" aria-hidden="true" />
      <nav className="navbar-links navbar-links--left" aria-label="Primary navigation">
        <Link className="navbar-link" href={sectionLink("#about")}>About</Link>
        <Link className="navbar-link" href={sectionLink("#projects")}>Portfolio</Link>
      </nav>
      <Link className="final-navbar__brand" href="/" aria-label="White Linen Interiors home"><Wordmark compact /></Link>
      <nav className="navbar-links navbar-links--right" aria-label="Secondary navigation">
        <Link className="navbar-link" href="/recent-work">Current work</Link>
        <Link className="navbar-link" href={rootNavigation ? "/#footer" : "#footer"}>Contact</Link>
      </nav>
    </header>
  );
}
