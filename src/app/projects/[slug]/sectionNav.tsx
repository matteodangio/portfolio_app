"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function ProjectSectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className="sticky top-0 z-20 -mx-6 mb-4 mt-10 hidden overflow-x-auto border-b px-6 py-3 backdrop-blur md:block"
      style={{
        background: "color-mix(in srgb, var(--bg) 82%, transparent)",
        borderColor: "var(--border)",
      }}
      aria-label="Page sections"
    >
      <ul className="flex gap-6">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200"
              style={{
                color:
                  active === section.id ? "var(--text)" : "var(--text-faint)",
                opacity: active === section.id ? 1 : 0.7,
              }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
