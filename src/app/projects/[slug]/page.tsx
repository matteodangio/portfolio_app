import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getNavigableProjectBySlug,
  getProjectSiblings,
  navigableProjects,
} from "@/data/projects.utils";

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

        <header
          className="border-b pb-12 md:pb-16"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.85fr)] lg:gap-16">
            <div>
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--text-faint)" }}
              >
                Project detail
              </p>

              <h1
                className="max-w-3xl text-4xl leading-[0.95] md:text-6xl"
                style={{
                  color: "var(--hero-display)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {project.title}
              </h1>

              <p
                className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                {project.summary}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3">
                {project.role && (
                  <div>
                    <p
                      className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Role
                    </p>
                    <p className="text-sm" style={{ color: "var(--text)" }}>
                      {project.role}
                    </p>
                  </div>
                )}

                {project.year && (
                  <div>
                    <p
                      className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Year
                    </p>
                    <p className="text-sm" style={{ color: "var(--text)" }}>
                      {project.year}
                    </p>
                  </div>
                )}

                {project.stack && project.stack.length > 0 && (
                  <div>
                    <p
                      className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Stack
                    </p>
                    <p
                      className="text-sm leading-7"
                      style={{ color: "var(--text)" }}
                    >
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                )}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-wrap gap-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
                      style={{ color: "var(--text)" }}
                    >
                      Live
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
                      style={{ color: "var(--text)" }}
                    >
                      GitHub
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--surface)) 0%, var(--surface-2) 100%)",
              }}
            >
              {project.heroImage ? (
                <div className="flex h-full flex-col">
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="h-full min-h-[260px] w-full object-cover md:min-h-[360px]"
                  />
                  {project.heroImage.caption && (
                    <div
                      className="border-t px-5 py-4"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <p
                        className="text-sm leading-7"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {project.heroImage.caption}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex min-h-[260px] items-center justify-center p-8 md:min-h-[360px]">
                  <p
                    className="text-center text-sm uppercase tracking-[0.16em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    No project visual available
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="mt-14 grid gap-14">
          {(project.description || project.context) && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Overview
                </p>
              </div>

              <div className="grid gap-5">
                {project.description && (
                  <p
                    className="max-w-2xl text-sm leading-8 md:text-[15px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>
                )}

                {project.context && (
                  <p
                    className="max-w-2xl text-sm leading-8 md:text-[15px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.context}
                  </p>
                )}
              </div>
            </section>
          )}

          {project.decisionCards && project.decisionCards.length > 0 && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Key decisions
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {project.decisionCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <h2
                      className="text-lg"
                      style={{
                        color: "var(--text)",
                        fontWeight: 700,
                      }}
                    >
                      {card.title}
                    </h2>

                    <p
                      className="mt-3 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.content && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Implementation
                </p>
              </div>

              <div>
                <p
                  className="max-w-2xl text-sm leading-8 md:text-[15px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.content}
                </p>
              </div>
            </section>
          )}

          {project.workflow && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Workflow
                </p>
              </div>

              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h2
                  className="text-lg"
                  style={{ color: "var(--text)", fontWeight: 700 }}
                >
                  {project.workflow.title}
                </h2>

                {project.workflow.summary && (
                  <p
                    className="mt-3 max-w-2xl text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.workflow.summary}
                  </p>
                )}

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  {project.workflow.steps.map((step, index) => (
                    <div key={`${step.label}-${index}`} className="grid gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                          style={{
                            background:
                              "color-mix(in srgb, var(--accent) 14%, var(--surface))",
                            color: "var(--text)",
                          }}
                        >
                          0{index + 1}
                        </div>

                        <p className="text-sm" style={{ color: "var(--text)" }}>
                          {step.label}
                        </p>
                      </div>

                      {step.description && (
                        <p
                          className="pl-[52px] text-sm leading-7"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Selected views
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-2xl border"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[240px] w-full object-cover"
                    />
                    {image.caption && (
                      <figcaption
                        className="border-t px-5 py-4 text-sm leading-7"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.outcome && (
            <section className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Current status
                </p>
              </div>

              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p
                  className="max-w-2xl text-sm leading-8 md:text-[15px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.outcome}
                </p>
              </div>
            </section>
          )}
        </div>

        <nav
          className="mt-16 border-t pt-8 md:mt-20"
          style={{ borderColor: "var(--border)" }}
          aria-label="Project navigation"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group rounded-2xl border p-5 transition-colors"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p
                  className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  <ArrowLeft size={13} />
                  Previous project
                </p>
                <p
                  className="text-lg transition-opacity group-hover:opacity-70"
                  style={{ color: "var(--text)", fontWeight: 700 }}
                >
                  {previousProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group rounded-2xl border p-5 text-left transition-colors sm:ml-auto"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p
                  className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Next project
                  <ArrowRight size={13} />
                </p>
                <p
                  className="text-lg transition-opacity group-hover:opacity-70"
                  style={{ color: "var(--text)", fontWeight: 700 }}
                >
                  {nextProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
