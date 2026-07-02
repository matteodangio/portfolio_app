import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getNavigableProjectBySlug,
  getProjectSiblings,
  navigableProjects,
} from "@/data/projects.utils";
import {
  getProjectDetailSections,
  ProjectContent,
  ProjectHero,
  ProjectNavigation,
} from "./projectPageSections";
import { ProjectSectionNav } from "./sectionNav";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return navigableProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getNavigableProjectBySlug(slug);

  if (!project) notFound();

  const sections = getProjectDetailSections(project);
  const { previousProject, nextProject } = getProjectSiblings(slug);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          style={{ color: "var(--text-faint)" }}
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <ProjectHero project={project} />

        {sections.length > 2 && <ProjectSectionNav sections={sections} />}

        <ProjectContent project={project} />

        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
    </main>
  );
}
