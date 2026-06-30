import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  getNavigableProjectBySlug,
  getProjectSiblings,
  navigableProjects,
} from "@/data/projects.utils";
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

  const { previousProject, nextProject } = getProjectSiblings(slug);

  /* Build section list for sticky nav */
  const sections: { id: string; label: string }[] = [];
  if (project.problem || project.description || project.context)
    sections.push({ id: "overview", label: "Overview" });
  if (project.impact?.length) sections.push({ id: "impact", label: "Impact" });
  if (project.decisionCards?.length)
    sections.push({ id: "decisions", label: "Decisions" });
  if (project.content)
    sections.push({ id: "implementation", label: "Implementation" });
  if (project.workflow) sections.push({ id: "workflow", label: "Workflow" });
  if (project.gallery?.length)
    sections.push({ id: "gallery", label: "Gallery" });
  if (project.lessonsLearned?.length)
    sections.push({ id: "lessons", label: "Lessons" });
  if (project.outcome) sections.push({ id: "status", label: "Status" });

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

        {/* ─── HEADER ─── */}
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
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
                      style={{
                        color: "var(--text)",
                        borderColor: "var(--border)",
                        background: "var(--surface)",
                      }}
                    >
                      View live
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
                      style={{
                        color: "var(--text)",
                        borderColor: "var(--border)",
                      }}
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
                  <div className="relative min-h-[260px] w-full flex-1 md:min-h-[360px]">
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      className="object-cover"
                    />
                  </div>
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

        {/* ─── STICKY SECTION NAV ─── */}
        {sections.length > 2 && <ProjectSectionNav sections={sections} />}

        {/* ─── CONTENT SECTIONS ─── */}
        <div className="mt-14 grid gap-14">
          {/* Overview: Problem → Constraints → Solution */}
          {(project.problem || project.description || project.context) && (
            <section
              id="overview"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Overview
                </p>
              </div>

              <div className="grid gap-8">
                {project.problem && (
                  <div>
                    <p
                      className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Problem
                    </p>
                    <p
                      className="max-w-2xl text-sm leading-8 md:text-[15px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.problem}
                    </p>
                  </div>
                )}

                {project.constraints && project.constraints.length > 0 && (
                  <div>
                    <p
                      className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Constraints
                    </p>
                    <ul className="grid gap-2">
                      {project.constraints.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-3 text-sm leading-7"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span
                            className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--accent)" }}
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.description && (
                  <div>
                    <p
                      className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Solution
                    </p>
                    <p
                      className="max-w-2xl text-sm leading-8 md:text-[15px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                )}

                {project.context && !project.problem && (
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

          {/* Impact metrics */}
          {project.impact && project.impact.length > 0 && (
            <section
              id="impact"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Impact
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {project.impact.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <p
                      className="text-2xl font-bold"
                      style={{
                        color: "var(--text)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="mt-2 text-xs font-medium uppercase tracking-[0.16em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key decisions with trade-offs */}
          {project.decisionCards && project.decisionCards.length > 0 && (
            <section
              id="decisions"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
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

                    {card.tradeoff && (
                      <p
                        className="mt-4 border-t pt-4 text-xs leading-6"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-faint)",
                        }}
                      >
                        <span className="font-medium uppercase tracking-[0.1em]">
                          Trade-off:{" "}
                        </span>
                        {card.tradeoff}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Implementation */}
          {project.content && (
            <section
              id="implementation"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
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

          {/* Workflow with business benefits */}
          {project.workflow && (
            <section
              id="workflow"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
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

                      {step.businessBenefit && (
                        <p
                          className="pl-[52px] text-xs leading-6 italic"
                          style={{ color: "var(--accent)" }}
                        >
                          → {step.businessBenefit}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section
              id="gallery"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
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
                    <div className="relative h-[240px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <figcaption
                        className="border-t px-5 py-4 text-sm leading-7"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text)",
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

          {/* Lessons learned */}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <section
              id="lessons"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  Lessons learned
                </p>
              </div>

              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <ul className="grid gap-4">
                  {project.lessonsLearned.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex items-start gap-3 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Current status */}
          {project.outcome && (
            <section
              id="status"
              className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
            >
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

        {/* ─── PROJECT NAVIGATION ─── */}
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
