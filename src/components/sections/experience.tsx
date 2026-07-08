"use client";

import { experienceItems, experienceLabels } from "@/data/experience";
import {
  contentVariants,
  fadeUp,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { IExperienceItem } from "@/types";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Experience() {
  const items: IExperienceItem[] = experienceItems;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="experience"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="experience-title"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: "some" }}
    >
      <motion.div
        className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] xl:gap-16"
        variants={fadeUp}
      >
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
            style={{
              color: "var(--hero-display)",
            }}
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

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                key={`${item.role}-${item.company}`}
                className="border-t py-6 md:py-8"
                style={{ borderColor: "var(--border)" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full flex-col gap-4 text-left md:flex-row md:items-start md:justify-between"
                  aria-expanded={isOpen}
                  aria-controls={`experience-panel-${index}`}
                  id={`experience-trigger-${index}`}
                >
                  <div className="flex-1">
                    <p
                      className="mb-2 text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {item.period}
                    </p>
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
                      className="mt-2 text-sm uppercase tracking-[0.14em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.company} · {item.location}
                    </p>
                    <p
                      className="mt-2 text-sm tracking-[0.14em]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.context}
                    </p>
                  </div>

                  <div className="md:ml-6">
                    <span
                      className="text-xs uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false} mode="wait">
                  {isOpen && (
                    <motion.div
                      id={`experience-panel-${index}`}
                      key={`panel-${index}`}
                      variants={contentVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="pt-6">
                        <p
                          className="max-w-2xl text-base leading-8"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.summary}
                        </p>

                        <ul className="mt-6 space-y-3">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-base leading-8"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span
                                className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "var(--accent)" }}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.stack.map((label) => (
                            <span
                              key={label}
                              className="rounded-full border px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em]"
                              style={{
                                borderColor: "var(--border)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}
