"use client";

import HeroWordmark from "@/components/ui/heroWordmark";
import ThemeToggle from "@/components/ui/themeToggle";
import { hero } from "@/data/hero";
import { heroNavItems } from "@/data/navigation";
import { fadeUp, staggerContainer } from "@/lib/animations/motionVariants";
import { motion } from "motion/react";

const primaryButton =
  "inline-flex items-center rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-opacity duration-200 hover:opacity-80";
const secondaryButton =
  "inline-flex items-center rounded-full border px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-200 hover:bg-[var(--surface-2)]";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-svh flex-col px-4 md:px-6"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between pt-6">
        <p
          className="font-display text-xl"
          style={{ color: "var(--hero-display)" }}
        >
          {hero.name}
        </p>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex gap-8">
              {heroNavItems.map((item) => (
                <li key={item.target}>
                  <a
                    href={`#${item.target}`}
                    className="text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 hover:text-[var(--hero-nav-hover)]"
                    style={{ color: "var(--hero-nav)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-6 py-10 md:grid-cols-2 md:gap-12">
        <motion.div
          className="order-2 md:order-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display max-w-2xl text-[clamp(2.5rem,5vw,4.5rem)] leading-[1]"
            style={{ color: "var(--hero-display)" }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={`#${hero.primaryCta.target}`}
              className={primaryButton}
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={`#${hero.secondaryCta.target}`}
              className={secondaryButton}
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em]"
            style={{ color: "var(--text-faint)" }}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {hero.availability}
          </motion.p>
        </motion.div>

        <div className="order-1 mx-auto w-full max-w-[260px] md:order-2 md:max-w-[540px]">
          <HeroWordmark
            srcLight="/dark-hero-me.png"
            srcDark="/light-hero-me.png"
            alt={hero.imageAlt}
            className="hero-wordmark"
          />
        </div>
      </div>
    </section>
  );
}
