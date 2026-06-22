import type { IProject } from "@/types";

export const projects: IProject[] = [
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
  },
  {
    slug: "/",
    title: "Coming soon",
    description: "Coming soon",
    stack: [],
    year: 2026,
    featured: true,
    githubUrl: "",
    liveUrl: ""
  }
];

