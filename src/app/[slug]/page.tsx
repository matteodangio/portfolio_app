import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-12">
      <Link href="/projects" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Back to projects
      </Link>
      <div>
        <p className="text-sm text-zinc-500">{project.year}</p>
        <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-zinc-600">{project.description}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} className="text-sm font-medium underline">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-sm font-medium underline">
            Live demo
          </a>
        )}
      </div>
    </main>
  );
}
