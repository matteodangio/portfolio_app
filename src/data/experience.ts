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
      "Angular developer on a B2B SaaS platform for credit and financial services, working across the UI, the REST layer and SQL Server.",
    highlights: [
      "Built Angular 15–19 features with standalone components, Signals and RxJS, including UIs driven by JSON configuration, taking designs from Figma to production.",
      "Integrated the frontend with the REST APIs of a .NET backend, and wrote SQL Server queries and scripts.",
      "Wrote end-to-end tests with Cypress and Playwright.",
      "Recently: AI-assisted legacy modernization on the data side. I port features from the old version of the product to the new one, adapting SQL scripts and logic with AI agents and reviewing every change.",
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
      "AI agents",
    ],
  },
  {
    period: "May 2022 — Mar 2024",
    role: "Fullstack Developer",
    company: "Dedagroup",
    location: "Milano",
    context: "Enterprise client in manufacturing and logistics",
    summary:
      "Fullstack developer on two applications that monitor orders and production for an enterprise manufacturing and logistics client.",
    highlights: [
      "Built REST APIs with Java and Spring Boot, using Hibernate and Spring Data JPA on PostgreSQL.",
      "Developed the AngularJS frontends of both applications.",
      "Worked directly with the client on requirements and ran live demos.",
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
  {
    period: "Feb — Apr 2022",
    role: "Backend Developer Intern",
    company: "Sopra Steria",
    summary: "Backend internship working with C# and SQL Server.",
    highlights: [],
    stack: ["C#", "SQL Server"],
    compact: true,
  },
];

export const educationItems: IEducationItem[] = [
  { title: "Scrum Master", issuer: "Agile Business Consortium" },
  { title: "Secure Coding (OWASP)", issuer: "OWASP" },
  { title: "Java Academy", issuer: "Dedagroup" },
  { title: "Web Development bootcamp", issuer: "start2impact" },
  {
    title: "MSc in Environmental Sciences",
    issuer: "Career change into software",
  },
];

export const languageItems: ILanguageItem[] = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "Professional" },
  { language: "Spanish", level: "Elementary" },
];

export const experienceLabels: ISectionLabel = {
  sectionTitle: "Experience",
  title: "Four years of enterprise product work at Dedagroup",
  description1: `From Java/Spring Boot services to Angular interfaces for fintech, with AI now part of how I modernize existing systems.`,
  subtitle1: "Education & training",
  subtitle2: "Languages",
};
