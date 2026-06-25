import { ArrowUpRight } from "lucide-react";
import {
  SiAngular,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "@icons-pack/react-simple-icons";
import { IFeaturedProject, IWorkItem } from "@/types";
import { featuredProjects, workItems } from "@/data/projects";

export default function FeaturedProjects() {
  const featured: IFeaturedProject = featuredProjects;
  const works: IWorkItem[] = workItems;

  return (
    <section
      id="projects"
      className="border-t py-20 md:py-28"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="projects-title"
    >
      {/* Section header */}
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            Projects
          </p>
          <h2
            id="projects-title"
            className="text-3xl leading-[0.95] md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--hero-display)",
            }}
          >
            Selected work with real product depth.
          </h2>
        </div>
        <div className="flex items-end">
          <p
            className="max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Frontend work that holds up in real environments — complex
            interfaces, scalable systems, and product decisions that improve how
            people use software day to day.
          </p>
        </div>
      </div>

      {/* Featured case */}
      <article
        className="pb-12 md:pb-16"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: "var(--text-faint)" }}
        >
          01 — Featured Case
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div
            className="min-h-[260px] rounded-2xl md:min-h-[400px]"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, var(--surface-2) 100%)",
            }}
          />

          <div className="min-w-0 flex flex-col justify-between">
            <div>
              <h3
                className="text-3xl leading-[0.95] md:text-4xl"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {featured.title}
              </h3>

              <p
                className="mt-5 text-base leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                {featured.summary}
              </p>

              <div className="mt-8 space-y-4">
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Context
                  </p>
                  <p
                    className="mt-1.5 text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {featured.context}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Outcome
                  </p>
                  <p
                    className="mt-1.5 text-sm leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {featured.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {featured.tech.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2"
                      title={item.label}
                    >
                      <Icon size={15} color={item.color} />
                      <span
                        className="text-[0.72rem] font-medium uppercase tracking-[0.14em]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-6">
                {featured.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-60"
                    style={{ color: "var(--text)" }}
                  >
                    {link.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Work list */}
      <div className="mt-0">
        {works.map((work) => {
          const isLast = work.index === works[works.length - 1].index;
          return (
            <article
              key={work.title}
              className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[80px_minmax(0,1fr)_auto] md:items-center md:gap-10 md:py-9"
              style={{
                borderBottom: !isLast ? "1px solid var(--border)" : undefined,
              }}
            >
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  {work.index}
                </span>
              </div>

              <div className="min-w-0">
                <h3
                  className="text-2xl leading-tight md:text-3xl"
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {work.title}
                </h3>

                <p
                  className="mt-3 max-w-xl text-base leading-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  {work.summary}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {work.tech.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2"
                        title={item.label}
                      >
                        <Icon size={14} color={item.color} />
                        <span
                          className="text-[0.72rem] font-medium uppercase tracking-[0.14em]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:shrink-0">
                <a
                  href={work.href}
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--text)" }}
                >
                  View
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
