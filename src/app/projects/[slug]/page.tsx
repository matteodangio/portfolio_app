import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/#projects"
        className="text-xs text-white/40 hover:text-white/70 transition mb-12 inline-block"
      >
        ← Back
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="text-xs text-white/40 mb-2">{project.year}</p>
        <h1 className="text-4xl font-bold text-white mb-3">{project.title}</h1>
        <p className="text-white/60">{project.description}</p>
      </header>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-6 border-t border-white/10 py-8 mb-12">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
            Role
          </p>
          <p className="text-sm text-white">{project.role}</p>
        </div>
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
            Year
          </p>
          <p className="text-sm text-white">{project.year}</p>
        </div>
      </div>

      {/* Corpo narrativo */}
      <p className="text-sm text-white/70 leading-relaxed mb-12">
        {project.content}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-8 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link esterni */}
      <div className="flex gap-6">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white underline underline-offset-4 hover:text-white/60 transition"
          >
            Live →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white underline underline-offset-4 hover:text-white/60 transition"
          >
            GitHub →
          </a>
        )}
      </div>
    </main>
  );
}
