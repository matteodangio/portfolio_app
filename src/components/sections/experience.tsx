"use client";

import { experienceItems } from "@/data/experience";
import { IExperienceItem } from "@/types";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export const experienceLabels = {
  sectionTitle: "Experience",
  mainTitle: "Professional context, not just job titles.",
  description: `My experience is centered on frontend systems, interface quality,
            and product implementation in environments where structure,
            maintainability, and clarity matter.`,
};

export default function Experience() {
  const items: IExperienceItem[] = experienceItems;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="border-t pt-20 md:py-28"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="experience-title"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {experienceLabels.sectionTitle}
          </p>

          <h2
            id="experience-title"
            className="max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--hero-display)",
            }}
          >
            {experienceLabels.mainTitle}
          </h2>

          <p
            className="mt-6 max-w-md text-base leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            {experienceLabels.description}
          </p>
        </div>

        <div className="flex flex-col">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={`${item.role}-${item.company}`}
                className="border-t py-6 md:py-8"
                style={{ borderColor: "var(--border)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full flex-col gap-4 text-left md:flex-row md:items-start md:justify-between"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <p
                      className="mb-2 text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {item.period}
                    </p>
                    <h3
                      className="text-2xl leading-tight md:text-3xl"
                      style={{
                        color: "var(--text)",
                        fontFamily: "var(--font-body)",
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

                {isOpen && (
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
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
