"use client";

import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { SocialLink } from "@/components/layout/sectionRailNav";

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
        className="fixed top-0 left-0 z-40 w-full px-3 py-3 backdrop-blur"
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

            {/* <span
              className="text-[10px] font-medium uppercase tracking-[0.16em]"
              style={{ color: "var(--text-muted)", opacity: 0.8 }}
            >
              {mobileExpanded ? "Close" : "Menu"}
            </span> */}
          </button>

          {mobileExpanded && (
            <div
              id="mobile-section-nav"
              className="mt-4 flex flex-col gap-4 border-t pt-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-col gap-3">
                {mobileItems.map((item) => {
                  const active = activeSection === item.target;

                  return (
                    <button
                      key={item.target}
                      type="button"
                      onClick={() => scrollToSection(item.target)}
                      className="flex items-center justify-between py-1 text-left transition-opacity duration-200"
                      style={{
                        opacity: active ? 1 : 0.72,
                      }}
                    >
                      <span
                        className="text-xs font-medium uppercase tracking-[0.18em]"
                        style={{
                          color: active ? "var(--text)" : "var(--text-muted)",
                        }}
                      >
                        {item.label}
                      </span>

                      {active && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-4">
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
                        opacity: 0.82,
                      }}
                    >
                      <Icon width={16} height={16} />
                    </a>
                  ))}
                </div>

                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
