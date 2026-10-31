"use client";
import ThemeToggle from "@/components/ui/themeToggle";
import HeroWordmark from "@/components/ui/heroWordmark";
import { heroLabels } from "@/data/hero";
import { heroNavItems } from "@/data/navigation";
import { motion } from "motion/react";
import {
  heroVariants,
  navItem,
  navList,
} from "@/lib/animations/motionVariants";

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
      className="min-h-[100svh] px-4 md:px-6 lg:px-6"
      style={{ background: "var(--bg)", color: "var(--text)" }}
      variants={heroVariants}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between pt-6 [@media(max-height:480px)]:pt-3">
        <h1
          className="md:mb-3 text-base font-normal uppercase tracking-[0.24em]"
          style={{ color: "var(--text-faint)" }}
        >
          <span className="sr-only">Matteo Dangiò — </span>
          {heroLabels.sectionSubtitle}
        </h1>
        <ThemeToggle />
      </div>
      <div className="mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-7xl grid-cols-1 gap-6 pb-8 pt-4 md:grid-cols-[minmax(0,0.82fr)_minmax(320px,1fr)] md:items-center md:gap-8 md:py-6 lg:gap-10 [@media(max-height:820px)]:gap-5 [@media(max-height:820px)]:py-3 [@media(max-height:480px)]:min-h-[calc(100svh-3.5rem)] [@media(max-height:480px)]:gap-4 [@media(max-height:480px)]:py-2">
        <div className="flex flex-col justify-center py-2 md:py-6 [@media(max-height:820px)]:py-1 [@media(max-height:480px)]:py-0">
          <div
            className="flex max-w-5xl justify-center md:justify-start"
            style={{
              color: "var(--hero-display)",
            }}
          >
            <HeroWordmark
              srcLight="/dark-hero-me.png"
              srcDark="/light-hero-me.png"
              alt="Line illustration of Matteo Dangiò drinking coffee at a laptop"
              className="hero-wordmark w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[470px] xl:max-w-[520px] 2xl:max-w-[560px] [@media(max-height:820px)]:md:max-w-[360px] [@media(max-height:820px)]:lg:max-w-[410px] [@media(max-height:820px)]:xl:max-w-[450px] [@media(max-height:480px)]:max-w-[220px]"
            />
          </div>

          <p
            className="font-display mt-2 text-3xl leading-none md:text-4xl [@media(max-height:480px)]:hidden"
            style={{ color: "var(--hero-display)" }}
            aria-hidden="true"
          >
            Matteo Dangiò
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-8 md:text-lg [@media(max-height:820px)]:max-w-lg [@media(max-height:820px)]:text-base [@media(max-height:820px)]:leading-7 [@media(max-height:480px)]:max-w-md [@media(max-height:480px)]:text-sm [@media(max-height:480px)]:leading-6"
            style={{ color: "var(--text-muted)" }}
          >
            {heroLabels.description1}
          </p>

          <p
            className="mt-5 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] [@media(max-height:480px)]:hidden"
            style={{ color: "var(--text-faint)" }}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {heroLabels.sectionSubtitle2}
          </p>
        </div>

        <motion.nav
          className="w-full"
          aria-label="Hero navigation"
          variants={navList}
        >
          <div className="flex flex-col items-start gap-2 text-left md:items-end md:text-right [@media(max-height:480px)]:gap-1">
            <motion.ul
              className="flex flex-col gap-2 md:items-end [@media(max-height:480px)]:gap-1"
              variants={navList}
            >
              {heroNavItems.map((item) => (
                <motion.li key={item.target} variants={navItem}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="group relative block text-left md:text-right"
                  >
                    <span
                      className="font-body relative block text-[2rem] font-bold uppercase leading-[0.92] tracking-normal transition-all duration-200 ease-out group-hover:translate-x-1 md:text-[clamp(3.4rem,7vw,4.5rem)] lg:text-[clamp(4.2rem,6.5vw,5.25rem)] xl:text-[clamp(4.75rem,6.2vw,6rem)] 2xl:text-[7rem] [@media(max-height:820px)]:md:text-[clamp(3rem,6.2vw,4.25rem)] [@media(max-height:820px)]:xl:text-[clamp(4rem,5.5vw,5rem)] [@media(max-height:480px)]:text-[2.2rem]"
                      style={{
                        color: "var(--hero-nav)",
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-200 ease-out group-hover:w-full md:left-auto md:right-0"
                      style={{
                        background: "var(--hero-nav-hover)",
                      }}
                    />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.nav>
      </div>
    </motion.section>
  );
}
