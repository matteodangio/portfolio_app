import { IProject } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-white/10 p-6 transition hover:border-white/30"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-white/40">{project.year}</span>
        <span className="text-xs text-white/30 transition group-hover:text-white/60">
          View →
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white transition group-hover:text-white/70">
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed text-white/60">
        {project.description}
      </p>

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
