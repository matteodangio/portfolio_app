"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import DesktopRail from "@/components/layout/desktopRail";
import MobileSectionNav from "@/components/layout/mobileSectionNav";
import ThemeToggle from "@/components/ui/themeToggle";

export type NavItem = {
  label: string;
  target: string;
};

export type SocialIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconComponent;
};

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.554V14.87c0-1.33-.027-3.04-1.852-3.04-1.853 0-2.136 1.445-2.136 2.94v5.68H9.344V9h3.414v1.56h.05c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.37 4.268 5.46v6.28zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.45H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.73C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navItems: NavItem[] = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/TUO-PROFILO",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/TUO-USERNAME",
    icon: SiGithub,
  },
  {
    label: "Email",
    href: "mailto:tua@email.com",
    icon: SiGmail,
  },
];

export default function SectionRailNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [railOpen, setRailOpen] = useState(false);

  const pendingTargetRef = useRef<string | null>(null);
  const sectionIds = useMemo(() => navItems.map((item) => item.target), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const pickBestSection = () => {
      const viewportAnchor = window.innerHeight * 0.3;
      let bestId = "home";
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (!isVisible) continue;

        const sectionAnchor = rect.top + Math.min(rect.height * 0.35, 180);
        const distance = Math.abs(sectionAnchor - viewportAnchor);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      }

      setActiveSection(bestId);
    };

    const observer = new IntersectionObserver(
      () => {
        if (pendingTargetRef.current) {
          const pendingEl = document.getElementById(pendingTargetRef.current);

          if (pendingEl) {
            const rect = pendingEl.getBoundingClientRect();
            const reached =
              rect.top <= window.innerHeight * 0.32 &&
              rect.bottom >= window.innerHeight * 0.18;

            if (reached) {
              setActiveSection(pendingEl.id);
              pendingTargetRef.current = null;
            }
          }

          return;
        }

        pickBestSection();
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 1],
        rootMargin: "-10% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    pickBestSection();

    const onScroll = () => {
      if (!pendingTargetRef.current) {
        pickBestSection();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  function scrollToSection(targetId: string) {
    const element = document.getElementById(targetId);
    if (!element) return;

    pendingTargetRef.current = targetId;
    setActiveSection(targetId);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileExpanded(false);
    setRailOpen(false);
  }

  const activeLabel =
    navItems.find((item) => item.target === activeSection)?.label ?? "Home";

  const inactiveItems = navItems.filter(
    (item) => item.target !== activeSection,
  );

  const showMobileNav = activeSection !== "home";
  const isMobileExpanded = showMobileNav && mobileExpanded;

  return (
    <>
      <DesktopRail
        activeLabel={activeLabel}
        activeSection={activeSection}
        inactiveItems={inactiveItems}
        railOpen={railOpen}
        setRailOpen={setRailOpen}
        scrollToSection={scrollToSection}
        socialLinks={socialLinks}
      />

      <MobileSectionNav
        activeLabel={activeLabel}
        activeSection={activeSection}
        mobileExpanded={isMobileExpanded}
        setMobileExpanded={setMobileExpanded}
        scrollToSection={scrollToSection}
        showMobileNav={showMobileNav}
        socialLinks={socialLinks}
      >
        <ThemeToggle />
      </MobileSectionNav>
    </>
  );
}
