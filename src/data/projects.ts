import type { Project } from "@/types";

/* il dato è un array;
ogni elemento ha sempre la stessa forma;
React ama moltissimo questo pattern perché poi puoi iterare e costruire UI in modo programmatico.*/
export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "My portfolio",
    description: "This is my portfolio",
    stack: ["Next", "React", "TypeScript", "Tailwind"],
    year: 2026,
    featured: true,
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  },
  {
    slug: "workout-tracker",
    title: "Workout Tracker",
    description: "This is a workout tracker",
    stack: ["React", "TypeScript", "Tailwind"],
    year: 2026,
    featured: false,
    githubUrl: "https://github.com/...",
    liveUrl: "https://..."
  }
];

