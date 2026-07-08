import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type {
  IProjectImage,
  IProjectShowcaseItem,
  IProjectWorkflow,
} from "@/types";

export type ProjectDetailSection = {
  id: string;
  label: string;
};

export function getProjectDetailSections(
  project: IProjectShowcaseItem,
): ProjectDetailSection[] {
  return [
    project.problem || project.description || project.context
      ? { id: "overview", label: "Overview" }
      : null,
    project.impact?.length ? { id: "impact", label: "Impact" } : null,
    project.decisionCards?.length
      ? { id: "decisions", label: "Decisions" }
      : null,
    project.content ? { id: "implementation", label: "Implementation" } : null,
    project.workflow ? { id: "workflow", label: "Workflow" } : null,
    project.gallery?.length ? { id: "gallery", label: "Gallery" } : null,
    project.lessonsLearned?.length ? { id: "lessons", label: "Lessons" } : null,
    project.outcome ? { id: "status", label: "Status" } : null,
  ].filter(Boolean) as ProjectDetailSection[];
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs font-medium uppercase tracking-[0.18em]"
      style={{ color: "var(--text-faint)" }}
    >
      {children}
    </p>
  );
}

function MetaLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em]"
      style={{ color: "var(--text-faint)" }}
    >
      {children}
    </p>
  );
}

function MutedText({
  children,
  className = "max-w-2xl text-sm leading-8 md:text-[15px]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={className} style={{ color: "var(--text-muted)" }}>
      {children}
    </p>
  );
}

function SurfaceCard({
  children,
  className = "rounded-2xl border p-6",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      {children}
    </div>
  );
}

function ProjectSection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]"
    >
      <div>
        <SectionLabel>{label}</SectionLabel>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7"
          style={{ color: "var(--text-muted)" }}
        >
          <span
            className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectImageFrame({
  image,
  priority = false,
}: {
  image?: IProjectImage;
  priority?: boolean;
}) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border"
      style={{
        borderColor: "var(--border)",
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--surface)) 0%, var(--surface-2) 100%)",
      }}
    >
      {image ? (
        <div className="flex flex-col">
          <a href={image.src} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority}
                className="object-cover"
              />
            </div>
          </a>
          {image.caption && (
            <div
              className="border-t px-5 py-4"
              style={{ borderColor: "var(--border)" }}
            >
              <MutedText className="text-sm leading-7">
                {image.caption}
              </MutedText>
            </div>
          )}
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center p-8">
          <p
            className="text-center text-sm uppercase tracking-[0.16em]"
            style={{ color: "var(--text-faint)" }}
          >
            No project visual available
          </p>
        </div>
      )}
    </div>
  );
}

export function ProjectHero({ project }: { project: IProjectShowcaseItem }) {
  return (
    <header
      // className="border-b pb-12 md:pb-16"
      // style={{ borderColor: "var(--border)" }}
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,28rem)] xl:items-start xl:gap-16">
        <div className="min-w-0">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: "var(--text-faint)" }}
          >
            Project detail
          </p>

          <h1
            className="font-display max-w-3xl text-4xl leading-[0.95] md:text-6xl"
            style={{ color: "var(--hero-display)" }}
          >
            {project.title}
          </h1>

          <MutedText className="mt-6 max-w-2xl text-base leading-8 md:text-lg">
            {project.summary}
          </MutedText>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3">
            {project.role && <ProjectMeta label="Role" value={project.role} />}
            {project.year && <ProjectMeta label="Year" value={project.year} />}
            {project.stack?.length ? (
              <ProjectMeta label="Stack" value={project.stack.join(" · ")} />
            ) : null}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <ExternalProjectLink href={project.temporaryUrl ? project.temporaryUrl : project.liveUrl!}>
                  View live
                </ExternalProjectLink>
              )}
              {project.githubUrl && (
                <ExternalProjectLink href={project.githubUrl}>
                  GitHub
                </ExternalProjectLink>
              )}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <ProjectImageFrame image={project.heroImage} priority />
        </div>
      </div>
    </header>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em]"
        style={{ color: "var(--text-faint)" }}
      >
        {label}
      </p>
      <p className="text-sm leading-7" style={{ color: "var(--text)" }}>
        {value}
      </p>
    </div>
  );
}

function ExternalProjectLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
      style={{
        color: "var(--text)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}

export function ProjectContent({ project }: { project: IProjectShowcaseItem }) {
  return (
    <div className="mt-14 grid gap-14">
      {(project.problem || project.description || project.context) && (
        <ProjectOverview project={project} />
      )}
      {project.impact?.length ? <ProjectImpact project={project} /> : null}
      {project.decisionCards?.length ? (
        <ProjectDecisions project={project} />
      ) : null}
      {project.content ? <ProjectImplementation project={project} /> : null}
      {project.workflow ? (
        <ProjectWorkflowView workflow={project.workflow} />
      ) : null}
      {project.gallery?.length ? (
        <ProjectGallery images={project.gallery} />
      ) : null}
      {project.lessonsLearned?.length ? (
        <SimpleListSection
          id="lessons"
          label="Lessons learned"
          items={project.lessonsLearned}
        />
      ) : null}
      {project.outcome && (
        <ProjectSection id="status" label="Next steps">
          <SurfaceCard>
            <MutedText>{project.outcome}</MutedText>
          </SurfaceCard>
        </ProjectSection>
      )}
      {project.futureImprovements?.length ? (
        <SimpleListSection
          id="future-improvements"
          label="Future improvements"
          items={project.futureImprovements}
        />
      ) : null}
    </div>
  );
}

function ProjectOverview({ project }: { project: IProjectShowcaseItem }) {
  return (
    <ProjectSection id="overview" label="Overview">
      <div className="grid gap-8">
        {project.problem && (
          <div>
            <MetaLabel>Problem</MetaLabel>
            <MutedText>{project.problem}</MutedText>
          </div>
        )}
        {project.constraints?.length ? (
          <div>
            <MetaLabel>Constraints</MetaLabel>
            <BulletList items={project.constraints} />
          </div>
        ) : null}
        {project.description && (
          <div>
            <MetaLabel>Solution</MetaLabel>
            <MutedText>{project.description}</MutedText>
          </div>
        )}
        {project.context && !project.problem && (
          <MutedText>{project.context}</MutedText>
        )}
      </div>
    </ProjectSection>
  );
}

function ProjectImpact({ project }: { project: IProjectShowcaseItem }) {
  if (!project.impact?.length) return null;

  return (
    <ProjectSection id="impact" label="Impact">
      <div className="grid gap-4 sm:grid-cols-3">
        {project.impact.map((item) => (
          <SurfaceCard key={item.label} className="rounded-2xl border p-5">
            <p
              className="font-display text-2xl font-bold"
              style={{ color: "var(--text)" }}
            >
              {item.value}
            </p>
            <p
              className="mt-2 text-xs font-medium uppercase tracking-[0.16em]"
              style={{ color: "var(--text-faint)" }}
            >
              {item.label}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </ProjectSection>
  );
}

function ProjectDecisions({ project }: { project: IProjectShowcaseItem }) {
  if (!project.decisionCards?.length) return null;

  return (
    <ProjectSection id="decisions" label="Key decisions">
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
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
              {card.title}
            </h2>
            <MutedText className="mt-3 text-sm leading-7">
              {card.description}
            </MutedText>
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
    </ProjectSection>
  );
}

function ProjectImplementation({ project }: { project: IProjectShowcaseItem }) {
  return (
    <ProjectSection id="implementation" label="Implementation">
      <div>
        <MutedText>{project.content}</MutedText>
        {project.contentList?.length ? (
          <BulletList items={project.contentList} />
        ) : null}
        {project.contentEnd && (
          <MutedText className="mt-4 max-w-2xl text-sm leading-7">
            {project.contentEnd}
          </MutedText>
        )}
      </div>
    </ProjectSection>
  );
}

function ProjectWorkflowView({ workflow }: { workflow: IProjectWorkflow }) {
  return (
    <ProjectSection id="workflow" label="Workflow">
      <SurfaceCard className="relative rounded-2xl border p-6 md:p-8">
        <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
          {workflow.title}
        </h2>

        {workflow.summary && (
          <MutedText className="mt-3 max-w-2xl text-sm leading-7">
            {workflow.summary}
          </MutedText>
        )}

        <div className="relative mt-8">
          <div
            className="absolute left-4 top-0 h-full w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-6">
            {workflow.steps.map((step, index) => (
              <div
                key={`${step.label}-${index}`}
                className="relative grid gap-3 pl-12 md:grid-cols-[minmax(0,1fr)]"
              >
                <div
                  className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      "color-mix(in srgb, var(--accent) 14%, var(--surface))",
                    color: "var(--text)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div
                  className="rounded-xl border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      "color-mix(in srgb, var(--surface) 90%, transparent)",
                  }}
                >
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <MutedText className="mt-2 text-sm leading-7">
                      {step.description}
                    </MutedText>
                  )}
                  {step.businessBenefit && (
                    <p
                      className="mt-2 text-xs leading-6 italic"
                      style={{ color: "var(--accent)" }}
                    >
                      → {step.businessBenefit}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SurfaceCard>
    </ProjectSection>
  );
}

function ProjectGallery({ images }: { images: IProjectImage[] }) {
  return (
    <ProjectSection id="gallery" label="Selected views">
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
          <a href={image.src} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-video w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </a>
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
    </ProjectSection>
  );
}

function SimpleListSection({
  id,
  label,
  items,
}: {
  id: string;
  label: string;
  items: string[];
}) {
  return (
    <ProjectSection id={id} label={label}>
      <SurfaceCard>
        <BulletList items={items} />
      </SurfaceCard>
    </ProjectSection>
  );
}

export function ProjectNavigation({
  previousProject,
  nextProject,
}: {
  previousProject: IProjectShowcaseItem | null;
  nextProject: IProjectShowcaseItem | null;
}) {
  return (
    <nav
      className="mt-16 border-t pt-8 md:mt-20"
      style={{ borderColor: "var(--border)" }}
      aria-label="Project navigation"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {previousProject ? (
          <ProjectSiblingLink project={previousProject} direction="previous" />
        ) : (
          <div />
        )}
        {nextProject ? (
          <ProjectSiblingLink project={nextProject} direction="next" />
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}

function ProjectSiblingLink({
  project,
  direction,
}: {
  project: IProjectShowcaseItem;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group rounded-2xl border p-5 transition-colors ${
        isNext ? "text-left sm:ml-auto" : ""
      }`}
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <p
        className="mb-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]"
        style={{ color: "var(--text-faint)" }}
      >
        {!isNext && <ArrowLeft size={13} />}
        {isNext ? "Next project" : "Previous project"}
        {isNext && <ArrowRight size={13} />}
      </p>
      <p
        className="text-lg font-bold transition-opacity group-hover:opacity-70"
        style={{ color: "var(--text)" }}
      >
        {project.title}
      </p>
    </Link>
  );
}
