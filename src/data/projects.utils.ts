import { IProjectShowcaseItem } from "@/types";
import { projects } from "@/data/projects";

export const navigableProjects: IProjectShowcaseItem[] = projects.filter(
  (project) => project.projectPageEnabled,
);

export function getMainProject(): IProjectShowcaseItem | undefined {
  return projects.find((project) => project.mainProject);
}

export function getSecondaryProjects(): IProjectShowcaseItem[] {
  return projects.filter((project) => !project.mainProject);
}

export function getProjectBySlug(
  slug: string,
): IProjectShowcaseItem | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNavigableProjectBySlug(
  slug: string,
): IProjectShowcaseItem | undefined {
  return navigableProjects.find((project) => project.slug === slug);
}

export function getProjectSiblings(slug: string): {
  previousProject: IProjectShowcaseItem | null;
  nextProject: IProjectShowcaseItem | null;
} {
  const currentIndex = navigableProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (currentIndex === -1) {
    return {
      previousProject: null,
      nextProject: null,
    };
  }

  return {
    previousProject:
      currentIndex > 0 ? navigableProjects[currentIndex - 1] : null,
    nextProject:
      currentIndex < navigableProjects.length - 1
        ? navigableProjects[currentIndex + 1]
        : null,
  };
}