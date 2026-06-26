"use client";
import ThemeToggle from "@/components/ui/themeToggle";
import { heroLabels } from "@/data/hero";

const navItems = [
  // { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(targetId: string) {
  const element = document.getElementById(targetId);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-4 md:px-6 lg:px-6"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] md:items-center md:gap-10">
        <div className="flex flex-col justify-center py-8 md:py-12">
          <p
            className="mb-6 text-xs uppercase tracking-[0.24em]"
            style={{ color: "var(--text-faint)" }}
          >
            {heroLabels.sectionSubtitle}
          </p>

          <h1
            className="max-w-5xl text-[3rem] leading-[0.92] sm:text-[4rem] lg:text-[4.5rem]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--hero-display)",
            }}
          >
            Matteo,
            <br />
            building sharp
            <br />
            digital products.
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {heroLabels.description1}
          </p>
        </div>

        <nav className="w-full" aria-label="Hero navigation">
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
                        fontWeight: 700,
                        color: "var(--hero-nav)",
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
      </div>
    </section>
  );
}
