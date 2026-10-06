import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "./project-data";
import { SiteFooter } from "./site-footer";
import { SiteNavigation } from "./site-navigation";

export function PortfolioPage() {
  const prioritySlugs = ["g33", "lv-38", "barari-2"];
  const orderedProjects = [
    ...prioritySlugs.flatMap((slug) => projects.filter((project) => project.slug === slug)),
    ...projects.filter((project) => !prioritySlugs.includes(project.slug)),
  ];
  const columns: {
    project: (typeof projects)[number];
    projectIndex: number;
  }[][] = [[], [], []];
  const columnHeights = [0, 0, 0];

  orderedProjects.forEach((project, projectIndex) => {
    const coverWidth = project.cover.width ?? 1600;
    const coverHeight = project.cover.height ?? 1200;
    const estimatedHeight = coverHeight / coverWidth + 0.3;
    const columnIndex = projectIndex < 3
      ? projectIndex
      : columnHeights.indexOf(Math.min(...columnHeights));

    columns[columnIndex].push({ project, projectIndex });
    columnHeights[columnIndex] += estimatedHeight;
  });

  return (
    <main className="portfolio-page" id="top">
      <SiteNavigation className="final-navbar final-navbar--visible project-navbar" rootNavigation />

      <section className="portfolio-masonry" aria-label="White Linen projects">
        {columns.map((column, columnIndex) => (
          <div className="portfolio-masonry__column" key={columnIndex}>
            {column.map(({ project, projectIndex }) => (
              <article
                className="portfolio-card"
                data-project={project.slug}
                key={project.slug}
                style={{ "--portfolio-order": projectIndex } as CSSProperties}
              >
                <Link className="portfolio-card__link" href={`/projects/${project.slug}`}>
                  <span className="portfolio-card__media">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      width={project.cover.width ?? 1600}
                      height={project.cover.height ?? 1200}
                      priority={projectIndex < 3}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </span>
                  <h2>{project.title}</h2>
                </Link>
              </article>
            ))}
          </div>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
