"use client";

import {
  aboutLabels,
  focusItems,
  personalItems,
  personalLabels,
  techGroups,
} from "@/data/about";
import {
  fadeUp,
  staggerContainer,
  techStackContainer,
} from "@/lib/animations/motionVariants";
import { IFocusItem } from "@/types";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SVGProps, useState } from "react";

export default function About() {
  const items: IFocusItem[] = focusItems;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
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

          <div
            className="mt-8 overflow-hidden rounded-[1.75rem] border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              className="aspect-4/5 w-full"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, var(--surface-2) 100%)",
              }}
            />
          </div>
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
              {items.map((item) => (
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

            <div
              className="mt-10 rounded-[1.75rem] border p-5 md:p-6"
              style={{
                borderColor: "var(--border)",
                background:
                  "color-mix(in srgb, var(--surface) 82%, transparent)",
              }}
            >
              <p
                className="text-xs font-medium uppercase tracking-[0.22em]"
                style={{ color: "var(--text-faint)" }}
              >
                Selected Technologies
              </p>

              <p
                className="mt-3 max-w-2xl text-sm leading-7"
                style={{ color: "var(--text-muted)" }}
              >
                The technologies I use most often when building production
                applications.
              </p>

              <div className="mt-6 flex flex-col gap-6">
                {techGroups.map((group) => (
                  <div
                    key={group.title}
                    className="border-t pt-5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p
                      className="text-xs font-medium uppercase tracking-[0.22em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {group.title}
                    </p>

                    {group.mode === "card" ? (
                      <motion.div
                        className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {group.items.map((tech) => {
                          const Icon = tech.icon;
                          return (
                            <motion.div
                              key={tech.title}
                              variants={fadeUp}
                              className="rounded-[1.15rem] border p-4"
                              style={{
                                borderColor: "var(--border)",
                                background:
                                  "color-mix(in srgb, var(--surface) 88%, transparent)",
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                                  style={{
                                    borderColor: "var(--border)",
                                    color: "var(--text)",
                                    background:
                                      "color-mix(in srgb, var(--surface) 70%, transparent)",
                                  }}
                                >
                                  <Icon
                                    color={tech.color ? tech.color : "default"}
                                    width={16}
                                    height={16}
                                    strokeWidth={1.8}
                                  />
                                </span>
                                <div className="min-w-0">
                                  <p
                                    className="text-sm font-medium leading-tight"
                                    style={{ color: "var(--text)" }}
                                  >
                                    {tech.title}
                                  </p>
                                  <p
                                    className="mt-1.5 text-xs leading-5"
                                    style={{ color: "var(--text-muted)" }}
                                  >
                                    {tech.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    ) : (
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {group.items.map((tech) => {
                          const Icon = tech.icon;
                          return (
                            <div
                              key={tech.title}
                              className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-2"
                              style={{
                                borderColor: "var(--border)",
                                background:
                                  "color-mix(in srgb, var(--surface) 88%, transparent)",
                              }}
                            >
                              <span
                                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                                style={{
                                  borderColor: "var(--border)",
                                  background:
                                    "color-mix(in srgb, var(--surface) 70%, transparent)",
                                }}
                              >
                                <Icon
                                  color={tech.color ? tech.color : "default"}
                                  width={13}
                                  height={13}
                                  strokeWidth={1.8}
                                />
                              </span>
                              <span
                                className="text-xs font-medium"
                                style={{ color: "var(--text)" }}
                              >
                                {tech.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-8 rounded-[1.75rem] border p-5 md:p-6"
              style={{
                borderColor: "var(--border)",
                background:
                  "color-mix(in srgb, var(--surface) 82%, transparent)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
                aria-expanded={openIndex === 0}
                aria-controls="personal-accordion"
              >
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-[0.22em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {personalLabels.title}
                  </p>
                </div>

                <span style={{ color: "var(--text-faint)" }}>
                  {openIndex === 0 ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false} mode="wait">
                {openIndex === 0 && (
                  <motion.div
                    id="personal-accordion"
                    key="personal-accordion"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: {
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.28, ease: "easeOut" },
                      },
                      exit: {
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.22, ease: "easeIn" },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="pt-5">
                      <p
                        className="font-body leading-tight md:text-lg"
                        style={{
                          color: "var(--text)",
                        }}
                      >
                        {personalLabels.subtitle1}
                        <br />
                        {personalLabels.subtitle2}
                      </p>

                      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {personalItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.title}
                              className="rounded-[1.1rem] border p-4"
                              style={{
                                borderColor: "var(--border)",
                                background:
                                  "color-mix(in srgb, var(--surface) 88%, transparent)",
                              }}
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                                  style={{
                                    borderColor: "var(--border)",
                                    color: "var(--text)",
                                    background:
                                      "color-mix(in srgb, var(--surface) 70%, transparent)",
                                  }}
                                >
                                  <Icon size={16} strokeWidth={1.75} />
                                </span>
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
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
