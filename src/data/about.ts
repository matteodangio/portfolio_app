import { IAboutTechGroup, IFocusItem, ISectionLabel } from "@/types";
import {
  SiAngular,
  SiCursor,
  SiCypress,
  SiDatabricks,
  SiGit,
  SiGithubcopilot,
  SiNextdotjs,
  SiReact,
  SiReactivex,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTeamcity,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Guitar, LucideIcon, Mountain, Plane } from "lucide-react";

export const focusItems: IFocusItem[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Production Angular and React interfaces, built with typed data flows, reusable components and predictable delivery.",
  },
  {
    index: "02",
    title: "Component Architecture",
    description:
      "UI systems that reduce duplication, keep patterns consistent and make feature work easier to extend.",
  },
  {
    index: "03",
    title: "Product Quality",
    description:
      "Responsive layouts, accessibility basics, performance awareness and E2E coverage for critical journeys.",
  },
  {
    index: "04",
    title: "Collaboration",
    description:
      "Comfortable translating product requirements into frontend work with designers, backend engineers and stakeholders.",
  },
];

export const aboutLabels: ISectionLabel = {
  sectionTitle: "About",
  title: "Frontend engineering for maintainable product interfaces.",
  description1: `I am a frontend engineer based in Italy, working on enterprise web applications for real business workflows. My strongest production experience is Angular, TypeScript, RxJS, REST integrations and E2E testing.`,
  description2: `I am expanding my React and Next.js work through product-focused projects, while keeping the same engineering standards I use in production: clear components, typed content, reliable interfaces and pragmatic collaboration.`,
  subtitle1: "Core strengths",
};

export const techGroups: IAboutTechGroup[] = [
  {
    title: "Core stack",
    mode: "card",
    items: [
      {
        title: "Angular",
        description:
          "Production UI work with standalone components and Signals.",
        icon: SiAngular,
        color: "#DD0031",
      },
      {
        title: "TypeScript",
        description: "Typed application code for safer long-term maintenance",
        icon: SiTypescript,
      },
      {
        title: "RxJS",
        description: "Asynchronous data flows for complex frontend state",
        icon: SiReactivex,
      },
    ],
  },
  {
    title: "Other technologies",
    mode: "chip",
    items: [
      { title: "Cypress", icon: SiCypress },
      { title: "Git", icon: SiGit },
      { title: "SQL", icon: SiDatabricks, color: "#888888" },
      { title: "Spring Boot", icon: SiSpringboot },
      { title: "REST API", icon: SiSwagger },
      {
        title: "React",
        icon: SiReact,
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
        color: "#888888",
      },
      { title: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Development workflow",
    mode: "chip",
    items: [
      { title: "GitHub Copilot", icon: SiGithubcopilot, color: "#888888" },
      { title: "TeamCity", icon: SiTeamcity, color: "#07C3F2" },
      { title: "Cursor", icon: SiCursor, color: "#888888" },
    ],
  },
];

export const personalItems: Array<{
  title?: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}> = [
  {
    title: "Music",
    description:
      "Guitarist in a metal band; useful training for consistency, listening and performing under pressure.",
    icon: Guitar,
    color: "#888888",
  },
  {
    title: "Adventure",
    description:
      "Hiking, snowboarding and longboarding help me reset and stay comfortable with challenge.",
    icon: Mountain,
    color: "#888888",
  },
  {
    title: "Curiosity",
    description:
      "Travel keeps me curious about people, context and how different teams solve problems.",
    icon: Plane,
    color: "#888888",
  },
];

export const personalLabels: ISectionLabel = {
  title: "Beyond work",
  subtitle1: "Guitar, mountains, snowboarding and travel.",
  subtitle2: "Different contexts keep me curious and adaptable.",
};
