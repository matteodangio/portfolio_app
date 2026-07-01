"use client";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { SocialLink } from "@/components/layout/sectionRailNav";
import { motion } from "motion/react";
import { panelVariants } from "@/lib/animations/motionVariants";

type MobileSectionNavProps = {
  activeLabel: string;
  activeSection: string;
  mobileExpanded: boolean;
  setMobileExpanded: Dispatch<SetStateAction<boolean>>;
  scrollToSection: (targetId: string) => void;
  showMobileNav: boolean;
  socialLinks: SocialLink[];
  children: ReactNode;
};

const mobileItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export default function MobileSectionNav({
  activeLabel,
  activeSection,
  mobileExpanded,
  setMobileExpanded,
  scrollToSection,
  showMobileNav,
  socialLinks,
  children,
}: MobileSectionNavProps) {
  if (!showMobileNav) return null;

  return (
    <div className="md:hidden">
      <div
        className="fixed left-0 top-0 z-40 w-full px-3 py-3 backdrop-blur"
        style={{
          background: "color-mix(in srgb, var(--bg) 78%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => setMobileExpanded((prev) => !prev)}
            className="flex w-full items-center gap-4 text-left"
            aria-expanded={mobileExpanded}
            aria-controls="mobile-section-nav"
          >
            <span className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "var(--text)" }}>
              {activeLabel}
            </span>
            <span className="h-px flex-1" style={{ background: "var(--border)" }} />
          </button>

          <motion.div
            id="mobile-section-nav"
            className="overflow-hidden"
            initial={false}
            animate={mobileExpanded ? "open" : "closed"}
            variants={panelVariants}
          >
            <div className="flex flex-col gap-3 mt-3 pt-2 border-t"  style={{ borderColor: "var(--border)" }}>
              {mobileItems.map((item) => {
                const active = activeSection === item.target;

                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => {
                      setMobileExpanded(false);
                      setTimeout(() => scrollToSection(item.target), 0);
                    }}
                   className={`cursor-pointer flex items-center justify-between py-1 text-left transition-all duration-200 ${
                                active 
                                  ? "opacity-100" 
                                  : "opacity-72 hover:opacity-100"
                              }`}
                  >
                    <span
                      className=" text-xs font-medium uppercase tracking-[0.18em] hover:color-(--text)"
                      style={{ color: active ? "var(--text)" : "var(--text-muted)" }}
                    >
                      {item.label}
                    </span>

                    {active && <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-sm transition-all duration-200 hover:scale-105 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1"
                    style={{ color: "var(--text-muted)", opacity: 0.82 }}
                  >
                    <Icon width={16} height={16} />
                  </a>
                ))}
              </div>

              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}