"use client";

import { aboutLabels, focusItems } from "@/data/about";
import { fadeUp, staggerContainer } from "@/lib/animations/motionVariants";
import { IFocusItem } from "@/types";
import { Guitar, LucideIcon, Mountain, Plane } from "lucide-react";
import { motion } from "motion/react";

const personalItems: Array<{title?: string, description: string, icon: LucideIcon}> = [
  {
    title: "Music",
    description:  "Guitarist in the band Loudblood. Playing live has taught me teamwork, consistency and how to perform under pressure.",
    icon: Guitar
  },
  {
    title: "Adventure",
    description:  "Whether it's snowboarding, longboarding or hiking, I enjoy activities that challenge me and keep me active. Yes, I have a thing for boards...",
    icon: Mountain
  },
  {
    title: "Curiosity",
    description:  "I love travelling and experiencing different cultures. Every trip gives me new perspectives that I bring back into both work and everyday life.",
    icon: Plane
  },
];

export default function About() {
  const items: IFocusItem[] = focusItems;

  return (
    <motion.section
      id="about"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="about-title"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16"
        variants={fadeUp}
      >
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: "var(--text-faint)" }}>
            {aboutLabels.sectionTitle}
          </p>

          <h2
            id="about-title"
            className="max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--hero-display)",
            }}
          >
            {aboutLabels.title}
          </h2>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div
              className="aspect-4/5 w-full"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, var(--surface-2) 100%)",
              }}
            />
          </div>
        </div>

        <div>
          <p className="max-w-2xl text-base leading-8 md:text-lg" style={{ color: "var(--text-muted)" }}>
            {aboutLabels.description1}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8" style={{ color: "var(--text-muted)" }}>
            {aboutLabels.description2}
          </p>

          <div className="mt-14 border-t pt-8" style={{ borderColor: "var(--border)" }}>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: "var(--text-faint)" }}>
              {aboutLabels.subtitle1}
            </p>

            <div className="flex flex-col">
              {focusItems.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 gap-5 border-t py-8 md:grid-cols-[72px_minmax(0,1fr)] md:gap-8"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "var(--text-faint)" }}>
                      {item.index}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-2xl leading-tight md:text-3xl"
                      style={{
                        color: "var(--text)",
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-8" style={{ color: "var(--text-muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] border p-6 md:p-8" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--surface) 82%, transparent)" }}>
            <p className="text-xs font-medium uppercase tracking-[0.22em]" style={{ color: "var(--text-faint)" }}>
              Who am I behind the laptop
            </p>
            <p
              className="mt-4 text-lg leading-tight md:text-lg"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: "1.5rem"
              }}
            >
              Beyond coding, I enjoy music, outdoor adventures and discovering new places. 
              I believe curiosity, consistency and creativity make a difference both in software and in life.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              {personalItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col gap-2">
                <p className="text-base leading-8" style={{ color: "var(--text-muted)" }}>
                  <span className="mr-2 text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "var(--text-faint)" }}>
                    <Icon size={24} strokeWidth={1.75} /> {item.title}
                  </span>
                  {item.description}
                </p>
                </div>
                )
              })}
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}