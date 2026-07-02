import type { IExperienceItem, ISectionLabel } from "@/types";

export const experienceItems: IExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Frontend Engineer",
    company: "Deda",
    context: "Financial B2B SaaS · Cross-functional team · Remote",
    location: "Italy",
    summary:
      "Frontend work on a financial B2B SaaS platform, focused on Angular features, reusable UI patterns and production reliability.",
    highlights: [
      "Developed standalone Angular components with Signals, RxJS and TypeScript",
      "Built configuration-driven interfaces for complex financial workflows",
      "Implemented responsive Figma designs integrated with REST APIs",
      "Added Cypress E2E coverage for critical user journeys",
      "Supported legacy modernization, production fixes and release work",
    ],
    stack: [
      "Angular",
      "Signals",
      "RxJS",
      "TypeScript",
      "REST APIs",
      "Cypress",
      "Git",
      "GitHub Copilot",
      "Jira",
      "Figma",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Fullstack Developer",
    company: "Deda",
    location: "Italy",
    context: "Enterprise logistics and supply chain management · Remote",
    summary:
      "Fullstack contribution to an enterprise logistics platform, covering Spring Boot services, REST APIs and AngularJS features.",
    highlights: [
      "Developed REST APIs with Spring Boot and Spring Data JPA",
      "Worked with PostgreSQL data models and persistence flows",
      "Built and maintained AngularJS frontend features",
      "Applied OWASP-oriented secure coding practices",
      "Collaborated with cross-functional teams on features and maintenance",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "AngularJS",
      "REST APIs",
      "OWASP",
    ],
  },
];

export const experienceLabels: ISectionLabel = {
  sectionTitle: "Experience",
  title: "Production experience in enterprise products",
  description1: `Hands-on work across frontend delivery, API integration, testing and maintenance in remote, cross-functional teams.`,
};
