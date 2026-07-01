import { IAboutTechGroup, IFocusItem, ISectionLabel } from "@/types";
import { SiAngular, SiBootstrap, SiCursor, SiCypress, SiDatabricks, SiFramer, SiGit, SiGithub, SiGithubcopilot, SiJavascript, SiNextdotjs, SiPostgresql, SiPostman, SiPrimeng, SiReact, SiReactivex, SiSpringboot, SiSwagger, SiTailwindcss, SiTeamcity, SiTypescript } from "@icons-pack/react-simple-icons";
import { Guitar, LucideIcon, Mountain, Plane } from "lucide-react";

export const focusItems: IFocusItem[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "I build scalable frontend applications with reusable components, clean architecture and maintainable code that evolves with the product.",
  },
  {
    index: "02",
    title: "Component Architecture",
    description:
      "I enjoy breaking complex interfaces into reusable components and creating consistent UI patterns that simplify development over time.",
  },
  {
    index: "03",
    title: "Product Quality",
    description:
      "I care about the details that shape a great product: performance, accessibility, responsive layouts and interactions that feel intuitive."
  },
  {
    index: "04",
    title: "Collaboration",
    description:
      "I enjoy working closely with designers, backend engineers and product teams to turn requirements into reliable features that deliver value."
  }
];



export const aboutLabels: ISectionLabel = {
  sectionTitle: "About",
  title:
    "Building frontend experiences that stay maintainable as products grow.",
  description1: `I'm a frontend engineer with experience building enterprise web applications used in real business environments. I enjoy turning complex requirements into interfaces that are clear, scalable and pleasant to use.`,
  description2: `My work combines frontend architecture, reusable components and close collaboration with designers and backend developers. I'm currently focusing on React and modern frontend technologies while applying the engineering principles I've developed in production projects.`,
  subtitle1: "What I Bring"
};


export const techGroups: IAboutTechGroup[] = [
  {
    title: "Core stack",
    mode: "card",
    items: [
      {
        title: "Angular",
        description: "Building modern interfaces with component-driven architecture.",
        icon: SiAngular, color: "#DD0031"
      },
      {
        title: "TypeScript",
        description: "Writing safer, maintainable code for large codebases",
        icon: SiTypescript,
      },
      {
        title: "RxJS",
        description: "Managing asynchronous data and complex application flows",
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
        color: "#888888"
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


export const personalItems: Array<{ title?: string, description: string, icon: LucideIcon, color?: string }> = [
  {
    title: "Music",
    description: "Playing guitar in a metal band has taught me how to work as part of a team, stay consistent and perform confidently under pressure.",
    icon: Guitar,
    color: "#888888"
  },
  {
    title: "Adventure",
    description: "I enjoy hiking, snowboarding and longboarding. I like activities that push me out of my comfort zone and help me recharge away from the screen.",
    icon: Mountain,
    color: "#888888"

  },
  {
    title: "Curiosity",
    description: "I love travelling and discovering different cultures. Every new place gives me fresh perspectives that often influence the way I approach both work and everyday life.",
    icon: Plane,
    color: "#888888"

  },
];

export const personalLabels: ISectionLabel = {
  title: "Who I am beyond the laptop",
  subtitle1: "Outside of work you'll usually find me playing guitar, hiking, snowboarding or planning my next trip.",
  subtitle2: "I enjoy learning new things, challenging myself and bringing that same curiosity into the way I build software."
}

