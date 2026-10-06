import Image from "next/image";
import Link from "next/link";
import { projects } from "./project-data";
import { SiteFooter } from "./site-footer";

const homepageProjects = projects.filter((project) =>
  ["g33", "lv-38", "barari-2"].includes(project.slug),
);

export function LandingSections() {
  return (
    <div className="site-content">
      <section className="projects-section projects-section--featured" id="projects" aria-label="Featured projects">
        <div className="project-index">
          {homepageProjects.map((project) => (
            <article className="project-index-entry project-index-entry--portrait" key={project.slug}>
              <Link className="project-index-media" href={`/projects/${project.slug}`}>
                <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 700px) 100vw, 72vw" />
              </Link>
              <Link className="project-index-title" href={`/projects/${project.slug}`}>
                <h3>{project.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
