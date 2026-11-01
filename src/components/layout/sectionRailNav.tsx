"use client";

import { useEffect, useRef, useState } from "react";
import DesktopRail from "@/components/layout/desktopRail";
import MobileSectionNav from "@/components/layout/mobileSectionNav";
import ThemeToggle from "@/components/ui/themeToggle";
import DesktopTopBar from "@/components/layout/desktopTopBar";
import {
  desktopNavStyle,
  railSocialLinks,
  sectionNavItems,
} from "@/data/navigation";
import { useActiveSection } from "@/lib/hooks/useActiveSection";

const sectionIds = sectionNavItems.map((item) => item.target);
const AUTO_CLOSE_MS = 3000;

export default function SectionRailNav() {
  const { active, goTo } = useActiveSection(sectionIds);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const railHoveredRef = useRef(false);

  // Peek the rail open once, right after the user scrolls past the hero.
  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) return;
      observer.disconnect();
      setRailOpen(true);
      timer = window.setTimeout(() => {
        if (!railHoveredRef.current) setRailOpen(false);
      }, AUTO_CLOSE_MS);
    });

    observer.observe(home);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  function scrollToSection(targetId: string) {
    goTo(targetId);
    setMobileExpanded(false);
    setRailOpen(false);
  }

  const activeLabel =
    sectionNavItems.find((item) => item.target === active)?.label ?? "Home";
  const inactiveItems = sectionNavItems.filter(
    (item) => item.target !== active,
  );
  // Both compact bars appear once the hero is scrolled past.
  const showMobileNav = active !== "home";

  return (
    <>
      {desktopNavStyle === "topbar" ? (
        <DesktopTopBar
          activeSection={active}
          visible={showMobileNav}
          scrollToSection={scrollToSection}
          socialLinks={railSocialLinks}
        />
      ) : (
        <DesktopRail
          activeLabel={activeLabel}
          activeSection={active}
          inactiveItems={inactiveItems}
          railOpen={railOpen}
          setRailOpen={setRailOpen}
          scrollToSection={scrollToSection}
          socialLinks={railSocialLinks}
          railHoveredRef={railHoveredRef}
        />
      )}

      <MobileSectionNav
        activeLabel={activeLabel}
        activeSection={active}
        mobileExpanded={showMobileNav && mobileExpanded}
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
