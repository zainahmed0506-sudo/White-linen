import Image from "next/image";

const projects = [
  {
    name: "Project 1 - DH 68",
    image: "/images/projects/optimized/dh-68-living-room.jpg",
    alt: "Living room with a curved tan sofa, staircase, and pale stone columns.",
    format: "wide",
  },
  {
    name: "Project 2 - Le Reve",
    image: "/images/projects/optimized/le-reve.jpg",
    alt: "Warm bedroom with a wood bedside table, sculptural lamp, and patterned linens.",
    format: "portrait",
  },
  {
    name: "Project 3 - Mansion 06",
    image: "/images/projects/optimized/mansion-06.jpg",
    alt: "Refined bedroom with illuminated shelving and pale textured wall panels.",
    format: "portrait",
  },
  {
    name: "Project 4 - Mansion 02",
    image: "/images/projects/optimized/mansion-02.jpg",
    alt: "Living room with a wood slat ceiling, sculptural furniture, and a garden view.",
    format: "portrait",
  },
  {
    name: "Project 5 - LV 38",
    image: "/images/projects/optimized/lv-38.jpg",
    alt: "Living room with an arched opening, marble table, and softly layered furnishings.",
    format: "portrait",
  },
] as const;

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
            <article className={`project-index-entry project-index-entry--${project.format}`} key={project.name}>
              <div className="project-index-media">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 72vw" />
              </div>
              <h3>{project.name}</h3>
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

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let&apos;s create your next space.</h2>
        <a className="contact-link" href="https://www.whitelinen.ae/hire-us" target="_blank" rel="noreferrer">
          Start a conversation
          <Arrow />
        </a>
      </section>

      <footer className="site-footer">
        <p>White Linen Interiors</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
