"use client";

import {
  aboutLabels,
  focusItems,
  personalItems,
  personalLabels,
  techGroups,
} from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations/motionVariants";
import { Minus, Plus } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const coreGroup = techGroups.find((group) => group.mode === "card");
  const chipGroups = techGroups.filter((group) => group.mode === "chip");

  return (
    <section
      id="about"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] xl:gap-16">
        <div className="xl:sticky xl:top-24 xl:self-start">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {aboutLabels.sectionTitle}
          </p>

          <h2
            id="about-title"
            className="font-display max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              color: "var(--hero-display)",
            }}
          >
            {aboutLabels.title}
          </h2>
        </div>

        <div>
          <p
            className="max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {aboutLabels.description1}
          </p>

          <p
            className="mt-6 max-w-2xl text-base leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            {aboutLabels.description2}
          </p>

          <div
            className="mt-14 border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-6 text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: "var(--text-faint)" }}
            >
              {aboutLabels.subtitle1}
            </p>

            <div className="flex flex-col">
              {focusItems.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 gap-5 border-t py-8 md:grid-cols-[72px_minmax(0,1fr)] md:gap-8"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div>
                    <span
                      className="text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {item.index}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-body text-2xl leading-tight md:text-3xl"
                      style={{
                        color: "var(--text)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-4 max-w-2xl text-base leading-8"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            {/* Technologies */}
            <div className="mt-14">
              <h3
                className="text-xs font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--text-faint)" }}
              >
                Technologies
              </h3>
              <p
                className="mt-3 max-w-2xl text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                Java, Spring Boot, Angular and TypeScript are what I use in
                production. React and Next.js are my second frontend stack.
              </p>

              {coreGroup && (
                <motion.ul
                  className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {coreGroup.items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <motion.li
                        key={tech.title}
                        variants={fadeUp}
                        className="rounded-2xl border p-5"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--surface)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            color={tech.color ? tech.color : "default"}
                            width={22}
                            height={22}
                            aria-hidden="true"
                          />
                          <p
                            className="text-lg font-bold leading-tight"
                            style={{
                              color: "var(--text)",
                              letterSpacing: "-0.02em",
                            }}
                          >
                            {tech.title}
                          </p>
                        </div>
                        <p
                          className="mt-3 text-sm leading-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {tech.description}
                        </p>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              )}

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
                {chipGroups.map((group) => (
                  <div key={group.title}>
                    <h4
                      className="text-xs font-medium uppercase tracking-[0.2em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {group.title}
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <li
                            key={tech.title}
                            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.8rem] font-medium"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--text)",
                            }}
                          >
                            <Icon
                              color={tech.color ? tech.color : "default"}
                              width={14}
                              height={14}
                              aria-hidden="true"
                            />
                            {tech.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal interests */}
            <details
              className="group mt-8 rounded-[1.75rem] border p-5 md:p-6"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span
                  className="text-xs font-medium uppercase tracking-[0.22em]"
                  style={{ color: "var(--text-faint)" }}
                >
                  {personalLabels.title}
                </span>
                <span style={{ color: "var(--text-faint)" }}>
                  <Plus size={18} className="group-open:hidden" />
                  <Minus size={18} className="hidden group-open:block" />
                </span>
              </summary>

              <div className="pt-5">
                <p
                  className="font-body leading-tight md:text-lg"
                  style={{ color: "var(--text)" }}
                >
                  {personalLabels.subtitle1}
                  <br />
                  {personalLabels.subtitle2}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {personalItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="rounded-[1.1rem] border p-4"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon
                            size={16}
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <span
                            className="text-xs font-medium uppercase tracking-[0.18em]"
                            style={{ color: "var(--text-faint)" }}
                          >
                            {item.title}
                          </span>
                        </div>
                        <p
                          className="mt-3 text-sm leading-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.description}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
