"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DesktopRail from "@/components/layout/desktopRail";
import MobileSectionNav from "@/components/layout/mobileSectionNav";
import ThemeToggle from "@/components/ui/themeToggle";
import { railSocialLinks, sectionNavItems } from "@/data/navigation";

export default function SectionRailNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [railOpen, setRailOpen] = useState(false);

  const autoOpenDoneRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const railHoveredRef = useRef(false);

  const pendingTargetRef = useRef<string | null>(null);
  const sectionIds = useMemo(
    () => sectionNavItems.map((item) => item.target),
    [],
  );

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

  useEffect(() => {
    const home = document.querySelector<HTMLElement>("#home");
    if (!home) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        const heroPassed = !entry.isIntersecting;

        if (heroPassed && !autoOpenDoneRef.current) {
          autoOpenDoneRef.current = true;
          setRailOpen(true);

          if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
          closeTimerRef.current = window.setTimeout(() => {
            if (!railHoveredRef.current) {
              setRailOpen(false);
            }
          }, 3000);
        }
      },
      { threshold: 0 },
    );

    observer.observe(home);

    return () => {
      observer.disconnect();
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, [setRailOpen]);

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
    sectionNavItems.find((item) => item.target === activeSection)?.label ??
    "Home";

  const inactiveItems = sectionNavItems.filter(
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
        socialLinks={railSocialLinks}
        railHoveredRef={railHoveredRef}
      />

      <MobileSectionNav
        activeLabel={activeLabel}
        activeSection={activeSection}
        mobileExpanded={isMobileExpanded}
        setMobileExpanded={setMobileExpanded}
        scrollToSection={scrollToSection}
        showMobileNav={showMobileNav}
        socialLinks={railSocialLinks}
      >
        <ThemeToggle />
      </MobileSectionNav>
    </>
  );
}
