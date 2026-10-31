import { IAboutTechGroup, IFocusItem, ISectionLabel } from "@/types";
import {
  SiAngular,
  SiClaude,
  SiCypress,
  SiGit,
  SiGithubcopilot,
  SiHibernate,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiReactivex,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTeamcity,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  Database,
  FlaskConical,
  Guitar,
  LucideIcon,
  Mountain,
  Plane,
} from "lucide-react";

export const focusItems: IFocusItem[] = [
  {
    index: "01",
    title: "Backend & APIs",
    description:
      "REST APIs with Java and Spring Boot, Hibernate and Spring Data JPA on PostgreSQL, built with direct input from the client on requirements.",
  },
  {
    index: "02",
    title: "Angular frontends",
    description:
      "Production Angular 15–19 with standalone components, Signals and RxJS, from Figma to a B2B SaaS platform for credit and financial services.",
  },
  {
    index: "03",
    title: "Data & testing",
    description:
      "SQL Server and PostgreSQL queries and scripts, plus end-to-end tests with Cypress and Playwright on critical user journeys.",
  },
  {
    index: "04",
    title: "AI-assisted modernization",
    description:
      "Porting features from a legacy product version to the new one, adapting SQL scripts and logic with AI agents while reviewing every change myself.",
  },
];

export const aboutLabels: ISectionLabel = {
  sectionTitle: "About",
  title: "Full-stack engineering for fintech products",
  description1: `I'm a full-stack engineer with four years at Dedagroup, working on enterprise software for real business workflows: Java/Spring Boot services on PostgreSQL, and Angular interfaces for a B2B SaaS platform in credit and financial services.`,
  description2: `In recent months I've applied AI agents to legacy modernization on the data side, always reviewing what they produce. React is my second frontend language, and this site is built with it. I came to software from environmental science, through a bootcamp and the Dedagroup Java Academy.`,
  subtitle1: "Core strengths",
};

export const techGroups: IAboutTechGroup[] = [
  {
    title: "Core stack",
    mode: "card",
    items: [
      {
        title: "Java",
        description: "Backend services and REST APIs for enterprise clients.",
        icon: SiOpenjdk,
        color: "#ED8B00",
      },
      {
        title: "Spring Boot",
        description: "APIs with Spring Data JPA, Hibernate and PostgreSQL.",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        title: "Angular",
        description:
          "Angular 15–19 in production, with standalone components and Signals.",
        icon: SiAngular,
        color: "#DD0031",
      },
      {
        title: "TypeScript",
        description: "Typed code across the Angular and React frontends.",
        icon: SiTypescript,
        color: "#3178C6",
      },
    ],
  },
  {
    title: "Data & APIs",
    mode: "chip",
    items: [
      { title: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { title: "SQL Server", icon: Database, color: "#888888" },
      { title: "Hibernate / JPA", icon: SiHibernate, color: "#59666C" },
      { title: "REST API", icon: SiSwagger },
      { title: "RxJS", icon: SiReactivex },
    ],
  },
  {
    title: "Testing & tooling",
    mode: "chip",
    items: [
      { title: "Cypress", icon: SiCypress },
      { title: "Playwright", icon: FlaskConical, color: "#888888" },
      { title: "Git", icon: SiGit },
      { title: "TeamCity", icon: SiTeamcity, color: "#07C3F2" },
    ],
  },
  {
    title: "AI-assisted workflow",
    mode: "chip",
    items: [
      { title: "Claude", icon: SiClaude, color: "#D97757" },
      { title: "GitHub Copilot", icon: SiGithubcopilot, color: "#888888" },
    ],
  },
  {
    title: "Also working with",
    mode: "chip",
    items: [
      { title: "React", icon: SiReact },
      { title: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { title: "Tailwind", icon: SiTailwindcss },
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
