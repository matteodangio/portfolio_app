"use client";

import type { Dispatch, RefObject, SetStateAction } from "react";
import ThemeToggle from "@/components/ui/themeToggle";
import type { NavItem, SocialLink } from "@/components/layout/sectionRailNav";
import { ChevronUp } from "lucide-react";
import { motion } from "motion/react";

type DesktopRailProps = {
  activeLabel: string;
  activeSection: string;
  inactiveItems: NavItem[];
  railOpen: boolean;
  setRailOpen: Dispatch<SetStateAction<boolean>>;
  scrollToSection: (targetId: string) => void;
  socialLinks: SocialLink[];
  railHoveredRef: RefObject<boolean>;
};

export default function DesktopRail({
  activeLabel,
  activeSection,
  inactiveItems,
  railOpen,
  setRailOpen,
  scrollToSection,
  socialLinks,
  railHoveredRef,
}: DesktopRailProps) {
  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-7rem)] flex-col md:flex">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => scrollToSection(activeSection)}
            className="rounded-sm transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1"
            aria-label={`Current section: ${activeLabel}`}
          >
            <span
              className="block cursor-pointer text-[1.5rem] font-medium uppercase tracking-[0.22em]"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                color: "var(--text)",
              }}
            >
              {activeLabel}
            </span>
          </button>

          <div className="mt-5 flex flex-col items-center gap-3">
            {socialLinks.map(({ label, href, icon: SocialIcon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-sm transition-all duration-200 hover:scale-105 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1"
                style={{
                  color: "var(--text-muted)",
                  opacity: 0.8,
                }}
              >
                <SocialIcon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <nav
          className="mt-4 flex min-h-0 flex-1 flex-col items-center"
          aria-label="Section navigation"
          onMouseEnter={() => {
            railHoveredRef.current = true;
            setRailOpen(true);
          }}
          onMouseLeave={() => {
            railHoveredRef.current = false;
            setRailOpen(false);
          }}
          onFocus={() => setRailOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setRailOpen(false);
            }
          }}
        >
          <motion.button
            type="button"
            onClick={() => setRailOpen((prev) => !prev)}
            aria-expanded={railOpen}
            aria-label={railOpen ? "Collapse navigation" : "Expand navigation"}
            animate={{ rotate: railOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 inline-flex cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-1"
          >
            <ChevronUp size={24} />
          </motion.button>

          <div className="flex min-h-0 flex-1 flex-col items-center gap-[clamp(0.9rem,1.2vw,1.4rem)] overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {inactiveItems.map((item, index) => {
              const opacity = railOpen ? 1 : 0;
              const scale = railOpen ? 1 : 0.96;
              const delay = railOpen
                ? `${index * 55}ms`
                : `${(inactiveItems.length - 1 - index) * 35}ms`;

              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  aria-label={`Go to ${item.label}`}
                  aria-hidden={!railOpen}
                  tabIndex={railOpen ? 0 : -1}
                  className="group/nav-item rounded-sm px-1 py-2 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-1"
                  style={{
                    cursor: "pointer",
                    opacity,
                    transform: `scale(${scale})`,
                    transitionDelay: delay,
                    pointerEvents: railOpen ? "auto" : "none",
                  }}
                >
                  <span
                    className="block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[color:var(--text-muted)] opacity-60 transition-all duration-200 group-hover/nav-item:scale-105 group-hover/nav-item:text-[color:var(--text)] group-hover/nav-item:opacity-100"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="mt-8 shrink-0 transition-all duration-300"
            style={{
              opacity: railOpen ? 1 : 0,
              transform: `translateY(${railOpen ? "0px" : "6px"})`,
              pointerEvents: railOpen ? "auto" : "none",
              cursor: "pointer",
            }}
          >
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
