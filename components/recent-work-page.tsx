import Image from "next/image";
import Link from "next/link";
import { HeroPageNavigation } from "./hero-page-navigation";
import { recentWorkImages } from "./project-data";
import { SiteFooter } from "./site-footer";

export function RecentWorkPage() {
  return (
    <main className="recent-work-page" id="top">
      <HeroPageNavigation />
      <section className="recent-work-page__hero" aria-label="Recent work image">
        <Image src={recentWorkImages[0].src} alt={recentWorkImages[0].alt} fill priority sizes="100vw" />
      </section>
      <section className="recent-work-page__gallery" aria-label="Recent work images">
        <div className="recent-work-page__intro">
          <div>
            <h1 id="recent-work-title">Recent work</h1>
            <p>A closer look at the spaces currently shaping our point of view.</p>
          </div>
          <Link href="/projects/dh-68">Featured: Sienna House</Link>
        </div>
        <div className="recent-work-grid">
          {recentWorkImages.map((image, index) => (
            <figure className={`recent-work-grid__item recent-work-grid__item--${index + 1}`} key={image.src}>
              <div className="recent-work-grid__media">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
