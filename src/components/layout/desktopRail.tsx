"use client";

import type { Dispatch, SetStateAction } from "react";
import ThemeToggle from "@/components/ui/themeToggle";
import type { NavItem, SocialLink } from "@/components/layout/sectionRailNav";

type DesktopRailProps = {
  activeLabel: string;
  activeSection: string;
  inactiveItems: NavItem[];
  railOpen: boolean;
  setRailOpen: Dispatch<SetStateAction<boolean>>;
  scrollToSection: (targetId: string) => void;
  socialLinks: SocialLink[];
};

export default function DesktopRail({
  activeLabel,
  activeSection,
  inactiveItems,
  railOpen,
  setRailOpen,
  scrollToSection,
  socialLinks,
}: DesktopRailProps) {
  const railStep = 88;
  const railHeight = Math.max(inactiveItems.length * railStep, 280);

  return (
    <aside className="relative hidden md:block">
      <div className="sticky top-8">
        <nav
          aria-label="Section navigation"
          className="flex min-h-[560px] w-full flex-col items-center"
          onMouseEnter={() => setRailOpen(true)}
          onMouseLeave={() => setRailOpen(false)}
          onFocus={() => setRailOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setRailOpen(false);
            }
          }}
        >
          <div className="flex w-full flex-col items-center">
            <button
              type="button"
              onClick={() => scrollToSection(activeSection)}
              className="rounded-sm transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1"
              aria-label={`Current section: ${activeLabel}`}
            >
              <span
                className="block text-[1.5rem] font-medium uppercase tracking-[0.22em]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  color: "var(--text)",
                  cursor: "pointer",
                }}
              >
                {activeLabel}
              </span>
            </button>

            <div className="mt-5 flex flex-col items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-sm transition-all duration-200 hover:opacity-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-1"
                  style={{
                    color: "var(--text-muted)",
                    opacity: 0.8,
                  }}
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>

            {/* <span
              className="my-6 h-20 w-px"
              style={{ background: "var(--border)" }}
            /> */}
          </div>

          <div className="relative flex-1 w-full">
            <div
              className="relative mx-auto w-[40px]"
              style={{ height: `${railHeight}px` }}
            >
              {inactiveItems.map((item, index) => {
                const y = railOpen ? index * railStep : 0;
                const opacity = railOpen ? 1 : 0;
                const scale = railOpen ? 1 : 0.96;

                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    aria-label={`Go to ${item.label}`}
                    className="group/nav-item absolute left-1/2 top-0 rounded-sm px-1 py-2 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-1"
                    style={{
                      cursor: "pointer",
                      opacity,
                      transform: `translateX(-50%) translateY(${y}px) scale(${scale})`,
                      transitionDelay: railOpen
                        ? `${index * 55}ms`
                        : `${(inactiveItems.length - 1 - index) * 35}ms`,
                      pointerEvents: railOpen ? "auto" : "none",
                    }}
                  >
                    <span
                      className="block text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-all duration-200 group-hover/nav-item:opacity-100"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        color: "var(--text-muted)",
                        opacity: 0.62,
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="mt-8 transition-all duration-300"
            style={{
              opacity: railOpen ? 1 : 0,
              transform: `translateY(${railOpen ? "0px" : "6px"})`,
              pointerEvents: railOpen ? "auto" : "none",
            }}
          >
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
