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
      <h2
        id="about-title"
        className="mb-8 text-xs font-medium uppercase tracking-[0.22em]"
        style={{ color: "var(--text-faint)" }}
      >
        {aboutLabels.sectionTitle}
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        <p
          className="text-justify text-base leading-8 hyphens-auto md:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          {aboutLabels.description1}
        </p>
        <p
          className="text-justify text-base leading-8 hyphens-auto"
          style={{ color: "var(--text-muted)" }}
        >
          {aboutLabels.description2}
        </p>
      </div>

      <div className="mt-16">
        <h3
          className="mb-6 text-xs font-medium uppercase tracking-[0.22em]"
          style={{ color: "var(--text-faint)" }}
        >
          {aboutLabels.subtitle1}
        </h3>

        <motion.ul
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border md:grid-cols-2"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {focusItems.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="p-6 md:p-8"
              style={{ background: "var(--bg)" }}
            >
              <span
                className="text-xs font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--text-faint)" }}
              >
                {item.index}
              </span>
              <h4
                className="mt-4 text-2xl font-bold leading-tight"
                style={{ color: "var(--text)", letterSpacing: "-0.03em" }}
              >
                {item.title}
              </h4>
              <p
                className="mt-3 text-base leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div>
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
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
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

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2 xl:grid-cols-4">
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
                      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
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
    </section>
  );
}
