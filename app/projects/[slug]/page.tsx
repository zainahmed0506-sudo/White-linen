import { notFound } from "next/navigation";
import { ProjectPage } from "../../../components/project-page";
import { getProject, projects } from "../../../components/project-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectPage project={project} />;
}
