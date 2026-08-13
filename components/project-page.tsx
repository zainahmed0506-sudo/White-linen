import Image from "next/image";
import Link from "next/link";
import { HeroPageNavigation } from "./hero-page-navigation";
import type { Project } from "./project-data";
import { SiteFooter } from "./site-footer";

export function ProjectPage({ project }: { project: Project }) {
  const images = [project.cover, ...project.images];

  return (
    <main className="project-page" id="top">
      <HeroPageNavigation />
      <section className="project-page__hero" aria-label={`${project.title} project image`}>
        <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="100vw" />
        <div className="project-page__hero-content">
          <p className="project-page__descriptor">{project.descriptor}</p>
          <h1 id="project-title">{project.title}</h1>
        </div>
      </section>

      <section className="project-page__gallery" aria-label={`${project.title} image gallery`}>
        <div className="project-page__intro">
          <div>
            <p>{project.introduction}</p>
          </div>
          <Link href="/recent-work">Explore recent work</Link>
        </div>
        <div className="project-gallery">
          {images.map((image, index) => (
            <figure className={`project-gallery__item project-gallery__item--${index + 1}`} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 74vw" />
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
