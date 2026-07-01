import type { IExperienceItem, ISectionLabel } from "@/types";

export const experienceItems: IExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Frontend Engineer",
    company: "Deda",
    context: "Financial B2B SaaS · Cross-functional team · Remote",
    location: "Italy",
    summary: "Building Angular applications for a financial B2B SaaS platform, with a focus on scalable frontend architecture, reusable UI systems, and long-term maintainability",
    highlights: [
      "Developed standalone Angular components using Signals and RxJS",
      "Built dynamic, configuration-driven interfaces for complex business workflows",
      "Worked closely with designers and backend engineers to translate business requirements into production-ready features",
      "Implemented Figma designs as responsive Angular interfaces integrated with REST APIs",
      "Designed Cypress E2E tests for critical user journeys",
      "Contributed to legacy modernization and production support",
    ],
    stack: ["Angular", "Signals", "RxJS", "TypeScript", "REST APIs", "Cypress", "Git", "GitHub Copilot", "Jira", "Figma"],
  },
  {
    period: "2022 — 2023",
    role: "Fullstack Developer",
    company: "Deda",
    location: "Italy",
    context: "Enterprise logistics and supply chain management · Remote",
    summary:"Contributed to an enterprise logistics platform by developing backend services, REST APIs, and AngularJS frontend features",
    highlights: [ 
      "Developed REST APIs using Spring Boot and Spring Data JPA",
      "Worked with PostgreSQL for data persistence",
      "Built AngularJS frontend features",
      "Applied secure coding practices based on OWASP principles",
      "Collaborated with cross-functional teams to deliver new features and maintain existing platform functionality",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "AngularJS",
      "REST APIs",
      "OWASP"
    ],
  },
];

export const experienceLabels: ISectionLabel = {
  sectionTitle: "Experience",
  title: "Building products in real-world environments",
  description1: `I enjoy turning complex requirements into maintainable interfaces while working across design, development, testing, and long-term product evolution`,
};