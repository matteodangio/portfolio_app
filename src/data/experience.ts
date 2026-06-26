import type { IExperienceItem, ISectionLabel } from "@/types";

export const experienceItems: IExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Frontend Engineer",
    company: "Dedagroup",
    location: "Italy",
    summary:
      "I work on frontend applications for structured business environments, focusing on Angular architecture, UI consistency, and product-facing implementation quality.",
    highlights: [
      "Built and maintained Angular interfaces for complex enterprise workflows.",
      "Improved consistency across screens through reusable UI patterns and shared structures.",
      "Worked closely with product and design constraints to turn dense requirements into clearer interfaces.",
    ],
    stack: ["Angular", "TypeScript", "RxJS", "SCSS", "REST APIs"],
  },
  {
    period: "Earlier",
    role: "Frontend / Product-Oriented Work",
    company: "Selected Projects",
    location: "Independent & Team Contexts",
    summary:
      "Across personal and collaborative work, I explored interaction quality, component systems, and frontend patterns that balance visual refinement with maintainability.",
    highlights: [
      "Designed and implemented reusable interface patterns.",
      "Explored stronger structure for project presentation and scalable content layouts.",
      "Developed a sharper approach to frontend quality, readability, and long-term consistency.",
    ],
    stack: [
      "React",
      "Next.js",
      "Tailwind",
      "UI Systems",
      "Responsive Design",
    ],
  },
];

export const experienceLabels: ISectionLabel = {
  sectionTitle: "Experience",
  title: "Professional context, not just job titles.",
  description1: `My experience is centered on frontend systems, interface quality,
            and product implementation in environments where structure,
            maintainability, and clarity matter.`,
};