"use client";
import ThemeToggle from "@/components/ui/themeToggle";
import HeroWordmark from "@/components/ui/heroWordmark";
import { heroLabels } from "@/data/hero";
import { motion } from "motion/react";
import {
  fadeUp,
  heroVariants,
  navItem,
  navList,
} from "@/lib/animations/motionVariants";

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
    <motion.section
      id="home"
      className="min-h-screen px-4 md:px-6 lg:px-6"
      style={{ background: "var(--bg)", color: "var(--text)" }}
      variants={heroVariants}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 gap-2 md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.85fr)] md:items-center md:gap-10">
        <div className="flex flex-col justify-center py-4 md:py-12">
          <p
            className="md:mb-3 uppercase tracking-[0.24em]"
            style={{ color: "var(--text-faint)" }}
          >
            {heroLabels.sectionSubtitle}
          </p>

          <h1
            className="max-w-5xl"
            style={{
              color: "var(--hero-display)",
            }}
          >
            {/* <span className="sr-only">
              Matteo, building sharp digital products.
            </span> */}
            <HeroWordmark
              srcLight="/dark-hero-me.png"
              srcDark="/light-hero-me.png"
              alt="Matteo Dangiò Frontend Engineer"
              className="hero-wordmark w-full max-w-[clamp(240px,24vw,500px)] md:max-w-[clamp(280px,40vw,640px)] lg:max-w-[clamp(320px,32vw,540px)]"
            />
          </h1>

          <p
            className="max-w-xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {heroLabels.description1}
          </p>
        </div>

        <motion.nav
          className="w-full"
          aria-label="Hero navigation"
          variants={navList}
        >
          <div className="flex flex-col items-start gap-2 md:items-end">
            <motion.ul
              className="flex flex-col gap-2 md:items-end"
              variants={navList}
            >
              {navItems.map((item) => (
                <motion.li key={item.target} variants={navItem}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="group relative block text-left md:text-right"
                  >
                    <span
                      className="uppercase relative block transition-all duration-200 ease-out group-hover:translate-x-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(2rem, 5vw, 5rem)",
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
                </motion.li>
              ))}
            </motion.ul>

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.section>
  );
}
