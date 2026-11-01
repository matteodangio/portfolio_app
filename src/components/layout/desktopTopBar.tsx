"use client";

import SocialIconLink from "@/components/ui/socialIconLink";
import ThemeToggle from "@/components/ui/themeToggle";
import { heroNavItems } from "@/data/navigation";
import type { SocialLink } from "@/data/navigation";
import { hero } from "@/data/hero";

type DesktopTopBarProps = {
  activeSection: string;
  visible: boolean;
  scrollToSection: (targetId: string) => void;
  socialLinks: SocialLink[];
};

export default function DesktopTopBar({
  activeSection,
  visible,
  scrollToSection,
  socialLinks,
}: DesktopTopBarProps) {
  return (
    <header
      className="fixed left-0 top-0 z-40 hidden w-full border-b transition-[transform,opacity] duration-300 ease-out md:block"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
      }}
      inert={!visible}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-display cursor-pointer text-lg"
          style={{ color: "var(--hero-display)" }}
        >
          {hero.name}
        </button>

        <nav aria-label="Section navigation">
          <ul className="flex gap-8">
            {heroNavItems.map((item) => {
              const active = activeSection === item.target;
              return (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    aria-current={active ? "true" : undefined}
                    className={`relative cursor-pointer text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 ${
                      active
                        ? "text-[var(--text)] after:scale-x-100"
                        : "text-[var(--text-muted)] after:scale-x-0 hover:text-[var(--text)] hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <SocialIconLink key={link.label} link={link} />
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
