import Image from "next/image";
import Link from "next/link";
import { projects } from "./project-data";
import { SiteFooter } from "./site-footer";

export function LandingSections() {
  return (
    <div className="site-content">
      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading section-heading--projects">
          <h2 id="projects-title">Portfolio</h2>
        </div>

        <div className="project-index">
          {projects.map((project) => (
            <article className="project-index-entry project-index-entry--portrait" key={project.slug}>
              <Link className="project-index-media" href={`/projects/${project.slug}`}>
                <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 700px) 100vw, 72vw" />
              </Link>
              <Link className="project-index-title" href={`/projects/${project.slug}`}>
                <h3>{project.title}</h3>
                <p>{project.descriptor}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
