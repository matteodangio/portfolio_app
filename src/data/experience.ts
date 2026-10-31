import type {
  IEducationItem,
  IExperienceItem,
  ILanguageItem,
  ISectionLabel,
} from "@/types";

export const experienceItems: IExperienceItem[] = [
  {
    period: "Apr 2024 — Present",
    role: "Frontend Engineer (Angular)",
    company: "Dedagroup",
    location: "Remote",
    context: "B2B SaaS platform for credit and financial services",
    summary:
      "Development of a B2B SaaS platform for the credit and financial services industry, across the Angular UI, the REST layer and SQL Server.",
    highlights: [
      "AI-assisted legacy modernization on the data side: migrating features from the old version of the product to the new one by adapting SQL scripts and database logic with AI coding agents, with careful review of every change.",
      "Build and maintain modern Angular applications (Angular 15–19, standalone architecture, Signals, RxJS).",
      "Integrate the frontend with REST APIs exposed by a .NET backend, and support data workflows with SQL Server queries and scripts.",
      "Maintain E2E test suites with Cypress and Playwright, covering critical business flows and regression scenarios.",
      "Implement configuration-driven UI solutions with JSON-based configurations for dynamic business requirements.",
      "Translate Figma designs into production-ready interfaces; troubleshoot and resolve production issues.",
    ],
    stack: [
      "Angular",
      "Signals",
      "RxJS",
      "TypeScript",
      "REST APIs",
      "SQL Server",
      "Cypress",
      "Playwright",
      "AI coding agents",
    ],
  },
  {
    period: "May 2022 — Mar 2024",
    role: "Fullstack Developer",
    company: "Dedagroup",
    location: "Milano",
    context: "Enterprise client in manufacturing and logistics",
    summary:
      "Full-stack development for an enterprise client in the manufacturing and logistics sector, on two applications for monitoring orders and production processes.",
    highlights: [
      "Developed new features end to end across two logistics dashboard applications, from backend to frontend.",
      "Built REST APIs with Java and Spring Boot, mapping the data model with Hibernate and Spring Data JPA on PostgreSQL, and connected them to the frontend.",
      "Built and maintained frontend interfaces with AngularJS.",
      "Worked directly with the client: gathered requirements, discussed solutions and presented new features in live demos.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Spring Data JPA",
      "PostgreSQL",
      "AngularJS",
    ],
  },
];

export const educationItems: IEducationItem[] = [
  {
    title: "Java Academy — Java Developer Edition",
    issuer: "Dedagroup",
    period: "2022",
  },
  {
    title: "Web Development bootcamp",
    issuer: "start2impact",
    period: "2021 — 2022",
  },
  {
    title: "Scrum Master",
    issuer: "Agile Business Consortium",
  },
  {
    title: "Secure Coding",
    issuer: "OWASP",
  },
  {
    title: "MSc, Science and Technologies for Environment and Landscape",
    issuer: "University of Milano-Bicocca",
    period: "2018 — 2021",
  },
];

export const languageItems: ILanguageItem[] = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "Professional" },
  { language: "Spanish", level: "Elementary" },
  { language: "Japanese", level: "Elementary" },
];

export const experienceLabels: ISectionLabel = {
  sectionTitle: "Experience",
  title: "Four years building enterprise software at Dedagroup",
  description1: `From Java/Spring Boot services to Angular interfaces for financial services, with AI now part of how I modernize existing systems.`,
  subtitle1: "Education & training",
  subtitle2: "Languages",
};
