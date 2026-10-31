"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IProjectShowcaseItem } from "@/types";
import { projectLabel } from "@/data/projects";
import { getMainProject, getSecondaryProjects } from "@/data/projects.utils";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations/motionVariants";

function ProjectLink({ project }: { project: IProjectShowcaseItem }) {
  if (!project.projectPageEnabled) return null;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200"
      style={{ color: "var(--text)" }}
    >
      Project page
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function TechStack({ project }: { project: IProjectShowcaseItem }) {
  if (!project.tech?.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.tech.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-2"
            title={item.label}
          >
            <Icon width={15} height={15} color={item.color} />
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
  );
}

export default function FeaturedProjects() {
  const mainProject = getMainProject();
  const works = getSecondaryProjects();

  if (!mainProject) return null;

  return (
    <motion.section
      id="projects"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="projects-title"
    >
      <motion.div
        className="mb-14 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] xl:gap-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {projectLabel.sectionTitle}
          </p>

          <h2
            id="projects-title"
            className="font-display text-3xl leading-[0.95] md:text-5xl"
            style={{
              color: "var(--hero-display)",
            }}
          >
            {projectLabel.title}
          </h2>
        </div>

        <div className="flex items-end">
          <p
            className="max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {projectLabel.description1}
          </p>
        </div>
      </motion.div>

      <motion.article
        className="pb-12 md:pb-16"
        style={{ borderBottom: "1px solid var(--border)" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: "var(--text-faint)" }}
        >
          {projectLabel.subtitle1}
        </p>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] xl:gap-16">
          <div
            className="relative min-h-[260px] overflow-hidden rounded-2xl border md:min-h-[400px]"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, var(--surface-2) 100%)",
            }}
          >
            {mainProject.heroImage && (
              <Image
                src={mainProject.heroImage.src}
                alt={mainProject.heroImage.alt}
                fill
                sizes="(min-width: 1280px) 640px, 100vw"
                className="object-cover object-top"
              />
            )}
          </div>

          <div className="min-w-0 flex flex-col justify-between">
            <div>
              <h3
                className="font-display text-3xl leading-[0.95] md:text-4xl"
                style={{
                  color: "var(--text)",
                }}
              >
                {mainProject.title}
              </h3>

              <p
                className="mt-5 text-base leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                {mainProject.summary}
              </p>

              <div className="mt-8 space-y-4">
                {mainProject.context && (
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.16em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {projectLabel.subtitle2}
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {mainProject.context}
                    </p>
                  </div>
                )}

                {mainProject.outcome && (
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-[0.16em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {projectLabel.subtitle3}
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-7"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {mainProject.outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-6">
                <TechStack project={mainProject} />
              </div>

              <div className="flex flex-wrap gap-6">
                <ProjectLink project={mainProject} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <motion.div
        className="mt-0"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {works.map((work, index) => {
          const isLast = index === works.length - 1;

          return (
            <motion.article
              variants={fadeUp}
              key={work.slug}
              className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,300px)] md:items-center md:gap-10 md:py-10"
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
                  className="font-body text-2xl leading-tight md:text-3xl"
                  style={{
                    color: "var(--text)",
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

                <div className="mt-4">
                  <TechStack project={work} />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:shrink-0">
                {work.heroImage && (
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Image
                      src={work.heroImage.src}
                      alt={work.heroImage.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <ProjectLink project={work} />
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
