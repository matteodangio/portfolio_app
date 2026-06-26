"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "@/components/ui/themeToggle";

type NavState = "hero-open" | "compact";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Expertise", target: "expertise" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export default function SiteNav() {
  const [navState, setNavState] = useState<NavState>("hero-open");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.target), []);

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavState(entry.isIntersecting ? "hero-open" : "compact");
      },
      { threshold: 0.3 },
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  function scrollToSection(targetId: string) {
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileExpanded(false);
  }

  function isActive(target: string) {
    return activeSection === target;
  }

  const activeLabel =
    navItems.find((item) => item.target === activeSection)?.label ?? "Home";

  return (
    <>
      {/* HERO OPEN */}
      {navState === "hero-open" && (
        <nav className="w-full" aria-label="Main navigation">
          <div className="flex flex-col items-start gap-8 md:items-end">
            <ul className="flex flex-col gap-2 md:items-end">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="group relative block text-left md:text-right"
                  >
                    <span
                      className="relative block transition-all duration-200 ease-out group-hover:translate-x-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(2.75rem, 5vw, 5rem)",
                        lineHeight: 0.92,
                        letterSpacing: "-0.04em",
                        fontWeight: isActive(item.target) ? 800 : 700,
                        color: isActive(item.target)
                          ? "var(--hero-nav-hover)"
                          : "var(--hero-nav)",
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 ease-out group-hover:w-full md:left-auto md:right-0"
                      style={{
                        background: "var(--hero-nav-hover)",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}

      {/* COMPACT */}
      {navState === "compact" && (
        <>
          {/* DESKTOP RAIL */}
          <nav
            aria-label="Compact navigation"
            className="group fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 md:block"
          >
            <div
              className="relative flex h-[320px] w-14 overflow-hidden rounded-2xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-44"
              style={{
                background: "color-mix(in srgb, var(--bg) 84%, transparent)",
                borderColor: "var(--border)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* COLLAPSED */}
              <div className="absolute inset-0 flex flex-col items-center justify-center py-4 transition-opacity duration-200 group-hover:opacity-0">
                <span
                  className="text-[0.75rem] font-medium uppercase tracking-[0.22em]"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    color: "var(--text)",
                  }}
                >
                  {activeLabel}
                </span>
              </div>

              {/* EXPANDED */}
              <div className="flex w-full flex-col justify-between px-4 py-4 opacity-0 transition-opacity duration-200 delay-75 group-hover:opacity-100">
                <ul className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <li key={item.target}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.target)}
                        className="group/item flex items-center gap-3 text-left"
                      >
                        <span
                          className="h-px w-0 transition-all duration-200 group-hover/item:w-5"
                          style={{
                            background: isActive(item.target)
                              ? "var(--accent)"
                              : "var(--text-muted)",
                          }}
                        />

                        <span
                          className="text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-200"
                          style={{
                            color: isActive(item.target)
                              ? "var(--text)"
                              : "var(--text-muted)",
                          }}
                        >
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          {/* MOBILE TOP BAR */}
          <div className="fixed left-4 right-4 top-4 z-50 md:hidden">
            <div
              className="rounded-2xl border px-4 py-3 backdrop-blur"
              style={{
                background: "color-mix(in srgb, var(--bg) 88%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <button
                type="button"
                onClick={() => setMobileExpanded((prev) => !prev)}
                className="flex w-full items-center gap-4 text-left"
                aria-expanded={mobileExpanded}
                aria-controls="mobile-compact-nav"
              >
                <span
                  className="text-xs font-medium uppercase tracking-[0.18em]"
                  style={{ color: "var(--text)" }}
                >
                  {activeLabel}
                </span>

                <span
                  className="h-px flex-1"
                  style={{ background: "var(--border)" }}
                />

                <span
                  className={`text-xs transition-transform duration-200 ${
                    mobileExpanded ? "rotate-45" : ""
                  }`}
                  style={{ color: "var(--text-muted)" }}
                >
                  +
                </span>
              </button>

              {mobileExpanded && (
                <div
                  id="mobile-compact-nav"
                  className="mt-4 flex flex-col gap-2 border-t pt-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  {navItems.map((item) => (
                    <button
                      key={item.target}
                      type="button"
                      onClick={() => {
                        scrollToSection(item.target);
                        setMobileExpanded(false);
                      }}
                      className="flex min-h-11 items-center justify-between rounded-xl px-2 py-2 text-left"
                      style={{
                        color: isActive(item.target)
                          ? "var(--text)"
                          : "var(--text-muted)",
                        background: isActive(item.target)
                          ? "var(--accent-soft)"
                          : "transparent",
                      }}
                    >
                      <span className="text-sm font-medium uppercase tracking-[0.12em]">
                        {item.label}
                      </span>

                      {isActive(item.target) && (
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                      )}
                    </button>
                  ))}

                  <div className="pt-2">
                    <ThemeToggle />
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
