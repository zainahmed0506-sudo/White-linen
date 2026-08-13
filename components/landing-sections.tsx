import Image from "next/image";
import Link from "next/link";
import { projects } from "./project-data";
import { SiteFooter } from "./site-footer";

function Arrow() {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true" focusable="false">
      <path d="M2 12h54M47 4l8 8-8 8" />
    </svg>
  );
}

export function LandingSections() {
  return (
    <div className="site-content">
      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading section-heading--projects">
          <h2 id="projects-title">All projects</h2>
          <p>Five spaces, each with a character of its own.</p>
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

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <h2 id="about-title">Made to feel lived in.</h2>
          <p>White Linen Interiors creates spaces shaped by atmosphere, material, light, and the everyday rituals that make a home personal.</p>
        </div>
      </section>

      <section className="contact-section landing-contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let&apos;s create your next space.</h2>
        <a className="contact-link" href="/contact">
          Contact us now
          <Arrow />
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
