"use client";

import {
  educationItems,
  experienceItems,
  experienceLabels,
  languageItems,
} from "@/data/experience";
import { fadeUp, staggerContainer } from "@/lib/animations/motionVariants";
import { IExperienceItem } from "@/types";
import { motion } from "motion/react";

function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
      {stack.map((label) => (
        <li
          key={label}
          className="rounded-full border px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em]"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

function ExperienceEntry({ item }: { item: IExperienceItem }) {
  const meta = [item.company, item.location].filter(Boolean).join(" · ");

  return (
    <motion.li
      className="grid grid-cols-1 gap-3 border-t py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:py-10"
      style={{ borderColor: "var(--border)" }}
      variants={fadeUp}
    >
      <p
        className="text-xs font-medium uppercase tracking-[0.18em] md:pt-2"
        style={{ color: "var(--text-faint)" }}
      >
        {item.period}
      </p>

      <article>
        <h3
          className="font-body text-2xl leading-tight md:text-3xl"
          style={{
            color: "var(--text)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {item.role}
        </h3>
        <p
          className="mt-2 text-sm font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--text-muted)" }}
        >
          {meta}
        </p>

        {item.compact ? (
          <>
            <p
              className="mt-4 max-w-2xl text-base leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              {item.summary}
            </p>
            <StackChips stack={item.stack} />
          </>
        ) : (
          <>
            {item.context && (
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-faint)" }}
              >
                {item.context}
              </p>
            )}

            <ul className="mt-6 space-y-4">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-base leading-7"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <StackChips stack={item.stack} />
          </>
        )}
      </article>
    </motion.li>
  );
}

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="experience-title"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] xl:gap-16">
        <div className="xl:sticky xl:top-24 xl:self-start">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {experienceLabels.sectionTitle}
          </p>
          <h2
            id="experience-title"
            className="font-display max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{ color: "var(--hero-display)" }}
          >
            {experienceLabels.title}
          </h2>
          <p
            className="mt-6 max-w-md text-base leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            {experienceLabels.description1}
          </p>
        </div>

        <div>
          <ol className="flex flex-col">
            {experienceItems.map((item) => (
              <ExperienceEntry
                key={`${item.role}-${item.company}-${item.period}`}
                item={item}
              />
            ))}
          </ol>

          <motion.div
            className="grid grid-cols-1 gap-10 border-t pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
            style={{ borderColor: "var(--border)" }}
            variants={fadeUp}
          >
            <div>
              <h3
                className="mb-5 text-xs font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--text-faint)" }}
              >
                {experienceLabels.subtitle1}
              </h3>
              <ul className="space-y-3">
                {educationItems.map((item) => (
                  <li key={item.title} className="text-base leading-6">
                    <span style={{ color: "var(--text)" }}>{item.title}</span>
                    <span style={{ color: "var(--text-faint)" }}>
                      {" "}
                      — {item.issuer}
                      {item.period ? ` · ${item.period}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-5 text-xs font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--text-faint)" }}
              >
                {experienceLabels.subtitle2}
              </h3>
              <ul className="space-y-3">
                {languageItems.map((item) => (
                  <li key={item.language} className="text-base leading-6">
                    <span style={{ color: "var(--text)" }}>
                      {item.language}
                    </span>
                    <span style={{ color: "var(--text-faint)" }}>
                      {" "}
                      — {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
