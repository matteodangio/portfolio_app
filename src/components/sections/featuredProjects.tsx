import { projects } from "@/data/projects";
import ProjectCard from "../ui/projectCard";
import { IProject } from "@/types";

export default function FeaturedProjects() {
  const featuredProject = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featuredProject.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
