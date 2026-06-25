import { IFeaturedProject, IProject, IWorkItem } from "@/types";
import { SiAngular, SiFigma, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";

export const projects: IProject[] = [];

export const featuredProjects: IFeaturedProject = {
  title: "Enterprise Angular Platform",
  summary:
    "A large-scale internal platform built to simplify complex operational workflows through modular architecture, reusable UI patterns, and clearer task flows.",
  context:
    "Designed for a multi-team environment with evolving product requirements, dense operational interfaces, and strong maintainability constraints.",
  outcome:
    "Improved consistency across views, reduced UI duplication, and created a frontend structure that was easier to scale over time.",
  links: [
    { label: "Case Study", href: "/projects/enterprise-angular-platform" },
    {
      label: "Project Details",
      href: "/projects/enterprise-angular-platform",
    },
  ],
  tech: [
    { label: "Angular", icon: SiAngular, color: "#DD0031" },
    { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { label: "Figma", icon: SiFigma, color: "#F24E1E" },
  ],
};

export const workItems: IWorkItem[] = [
  {
    index: "02",
    title: "Workflow Dashboard",
    summary:
      "Dashboard interface focused on visibility and faster decision-making across dense operational data.",
    href: "/projects/workflow-dashboard",
    tech: [
      { label: "Angular", icon: SiAngular, color: "#DD0031" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    index: "03",
    title: "Personal Portfolio",
    summary:
      "Self-directed case study on visual hierarchy, responsive navigation, theme behavior, and frontend identity outside my day-to-day stack.",
    href: "/projects/personal-portfolio",
    tech: [
      { label: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
];