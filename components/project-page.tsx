import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "./project-data";
import { SiteFooter } from "./site-footer";
import { SiteNavigation } from "./site-navigation";

export function ProjectPage({ project }: { project: Project }) {
  const images = project.images;
  const relatedProjects = projects
    .filter((relatedProject) => relatedProject.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="project-page" id="top">
      <SiteNavigation className="final-navbar final-navbar--visible project-navbar" rootNavigation />

      <header className="project-page__heading">
        <div className="project-page__heading-inner">
          <div className="project-page__heading-title">
            <h1 id="project-title">{project.title}</h1>
          </div>
        </div>
      </header>

      <section className="project-page__gallery" aria-label={`${project.title} image gallery`}>
        <div className="project-gallery">
          {images.map((image, index) => (
            <figure className="project-gallery__item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="project-related" aria-labelledby="project-related-title">
        <h2 id="project-related-title">You might also like</h2>
        <div className="project-related__grid">
          {relatedProjects.map((relatedProject) => (
            <Link
              className="project-related__item"
              href={`/projects/${relatedProject.slug}`}
              key={relatedProject.slug}
            >
              <span className="project-related__image">
                <Image
                  src={relatedProject.cover.src}
                  alt={relatedProject.cover.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </span>
              <span className="project-related__title">{relatedProject.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
