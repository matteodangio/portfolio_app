"use client";

import { useRef } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import SocialIconLink from "@/components/ui/socialIconLink";
import { sectionNavItems } from "@/data/navigation";
import type { SocialLink } from "@/data/navigation";
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
  const pendingTargetRef = useRef<string | null>(null);

  return (
    <div className="md:hidden">
      {/* Always mounted and slid in/out with a transform: mounting the bar
          mid-scroll (plus a backdrop blur) caused visible flashes on mobile. */}
      <div
        className="fixed left-0 top-0 z-40 w-full border-b px-3 py-3 transition-[transform,opacity] duration-300 ease-out will-change-transform"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
          transform: showMobileNav ? "translateY(0)" : "translateY(-100%)",
          opacity: showMobileNav ? 1 : 0,
        }}
        inert={!showMobileNav}
        aria-hidden={!showMobileNav}
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
          </button>

          <motion.div
            id="mobile-section-nav"
            className="overflow-hidden"
            initial={false}
            animate={mobileExpanded ? "open" : "closed"}
            variants={panelVariants}
            onAnimationComplete={(definition) => {
              // Scrolling while the panel collapses cancels the smooth
              // scroll, so wait for the close animation to finish.
              if (definition !== "closed" || !pendingTargetRef.current) return;
              scrollToSection(pendingTargetRef.current);
              pendingTargetRef.current = null;
            }}
          >
            <div
              className="flex flex-col gap-3 mt-3 pt-2 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              {sectionNavItems.map((item) => {
                const active = activeSection === item.target;

                return (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => {
                      pendingTargetRef.current = item.target;
                      setMobileExpanded(false);
                    }}
                    aria-current={active ? "true" : undefined}
                    className={`group flex cursor-pointer items-center justify-between py-1 text-left transition-colors duration-200 ${
                      active
                        ? "text-[var(--text)]"
                        : "text-[var(--text-muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.18em] transition-transform duration-200 group-hover:translate-x-1">
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

            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <SocialIconLink key={link.label} link={link} />
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
