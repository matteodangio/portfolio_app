import { IProjectShowcaseItem, ISectionLabel } from "@/types";
import {
  SiAngular,
  SiAstro,
  SiDecapcms,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export const projects: IProjectShowcaseItem[] = [
  {
    index: "01",
    title: "mcSaldature official website",
    slug: "mcsaldature-official-website",
    featured: true,
    mainProject: true,
    projectPageEnabled: true,
    year: "2026",
    role: "Design, Frontend Development, SEO Setup",
    summary:
      "A business website for a local welding company, designed to improve online visibility, communicate services clearly, and turn search traffic into direct calls and contact requests.",
    description:
      "A lightweight marketing website built for a local welding business that previously had no active web presence. The project focuses on clarity, discoverability, and a simple path from visit to contact.",
    context:
      "The client needed a new website to regain online visibility and be easier to find through search engines. The site had to present the company in a clear and trustworthy way for both private customers and businesses, while keeping the browsing experience fast and lightweight.",
    content:
      "I designed the site as a simple, conversion-focused experience with clear service presentation, responsive layouts, SEO-ready metadata, and strong contact visibility. I also structured the project so routine content updates do not require direct developer intervention.",
    outcome:
      "The structure is in place and the interface is close to final. The remaining work is mainly refinement: final content review, visual polish, SEO checks, and domain and DNS connection before launch.",
    links: [
      {
        label: "Project page",
        href: "/projects/mcsaldature-official-website",
      },
    ],
    tech: [
      { label: "Astro", icon: SiAstro, color: "#FF5D01" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Decap CMS", icon: SiDecapcms, color: "#FF0082" },
      { label: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
    stack: [
      "Astro",
      "React",
      "Tailwind CSS",
      "Decap CMS",
      "Netlify Identity",
      "Git Gateway",
      "Google Analytics 4",
    ],
    heroImage: {
      src: "/images/projects/mcsaldature/hero-homepage.jpg",
      alt: "Homepage preview of the mcSaldature website",
      caption:
        "The public-facing interface is designed to communicate services clearly and push users toward direct contact.",
    },
    gallery: [
      {
        src: "/images/projects/mcsaldature/admin-panel.jpg",
        alt: "Admin content editing interface for mcSaldature",
        caption:
          "The admin area allows the client to update content without relying on manual developer edits.",
      },
    ],
    decisionCards: [
      {
        title: "Why Astro?",
        description:
          "I chose Astro because the project needed strong performance, a lightweight frontend footprint, and a structure that supports SEO well for a business website.",
      },
      {
        title: "Why Decap CMS + Git Gateway?",
        description:
          "The client needed a practical way to manage text content independently. This setup gave them editorial autonomy without requiring a custom backend.",
      },
      {
        title: "Why Netlify Identity?",
        description:
          "Netlify Identity provided a simple authentication layer for the admin flow and integrated cleanly with the Git-based publishing pipeline.",
      },
    ],
    workflow: {
      title: "Content publishing workflow",
      summary:
        "The project was structured to reduce ongoing developer involvement in routine content edits.",
      steps: [
        {
          label: "Admin edit",
          description:
            "The client updates text content through the admin interface.",
        },
        {
          label: "Decap CMS save",
          description: "The content change is saved through the CMS workflow.",
        },
        {
          label: "GitHub update",
          description: "The change is committed to the repository.",
        },
        {
          label: "Automatic deploy",
          description: "A new production build is triggered automatically.",
        },
      ],
    },
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    index: "02",
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    featured: true,
    mainProject: false,
    projectPageEnabled: true,
    year: "2026",
    role: "Frontend Development, Architecture, Content Structure",
    summary:
      "A personal portfolio built to present selected work, structure experience more clearly, and communicate a stronger frontend identity through navigation, UI consistency, and dedicated project storytelling.",
    description:
      "This project is both a public portfolio and a practical frontend exercise in layout systems, reusable sections, and information hierarchy. Instead of relying on a generic one-page template, I wanted a structure that could present projects and experience with more clarity and more intent.",
    context:
      "The goal was to create a portfolio that feels more deliberate than a standard developer site and works as a stronger professional reference. I used it to bring together project presentation, responsive behavior, and a clearer identity as a frontend engineer.",
    content:
      "I built the site around centralized TypeScript data, reusable sections, dynamic project routes, responsive navigation patterns, and a theme system that keeps the interface coherent across different screen sizes. It was also my first practical project using React in a more intentional way inside a production-style frontend setup.",
    outcome:
      "The portfolio is live and already works as a professional reference point. The next phase is iterative: improving case study depth, refining screenshots and project pages, and expanding the showcased work as new projects are completed.",
    links: [
      {
        label: "Project page",
        href: "/projects/personal-portfolio",
      },
    ],
    tech: [
      { label: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    heroImage: {
      src: "/images/projects/personal-portfolio/hero-homepage.jpg",
      alt: "Homepage preview of the personal portfolio",
      caption:
        "The homepage was designed to present work and experience with clearer hierarchy, stronger navigation, and a more intentional visual structure.",
    },
    gallery: [
      {
        src: "/images/projects/personal-portfolio/projects-section.jpg",
        alt: "Projects section of the personal portfolio",
        caption:
          "The projects section is driven by centralized TypeScript data so featured content, lists, and detail pages stay aligned.",
      },
      {
        src: "/images/projects/personal-portfolio/project-detail-page.jpg",
        alt: "Project detail page of the personal portfolio",
        caption:
          "Dynamic project pages extend the same system while allowing more space for project-specific decisions, content, and visuals.",
      },
    ],
    decisionCards: [
      {
        title: "Why Next.js?",
        description:
          "I chose Next.js to build the portfolio on a React-based stack that is more aligned with the frontend roles I want to target and better suited for scalable UI work.",
      },
      {
        title: "Why centralized project data?",
        description:
          "I wanted a single source of truth for project content so the homepage, featured sections, and dynamic detail pages stay consistent and easier to maintain over time.",
      },
      {
        title: "Why this navigation model?",
        description:
          "Navigation became one of the most important parts of the project. I wanted long-page browsing, section movement, and project exploration to feel clearer and more intentional across desktop and mobile.",
      },
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/matteodangio/portfolio_app",
  },
  {
    index: "03",
    title: "Gym Tracking App",
    slug: "gym-tracking-app",
    featured: true,
    mainProject: false,
    projectPageEnabled: false,
    year: "2026",
    role: "Frontend Development",
    summary:
      "A workout tracking web application currently in the first implementation phase, planned as the next main project in the portfolio.",
    description:
      "This project is intended to become a more complete product-focused application centered on workout planning, tracking, and day-to-day usability in the gym.",
    context:
      "The app is still in its early implementation stage, so the project page is intentionally not available yet.",
    outcome:
      "Initial setup and technical direction are defined. The project will be added as a full case study only after the first meaningful implementation milestone.",
    tech: [
      { label: "Angular", icon: SiAngular, color: "#DD0031" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
    stack: ["Angular", "TypeScript", "Supabase"],
    links: [],
    liveUrl: undefined,
    githubUrl: undefined,
  },
];

export const projectLabel: ISectionLabel = {
  sectionTitle: "Projects",
  title: "Selected work with real product depth.",
  description1:
    "Frontend work shaped by real constraints, evolving systems, and decisions that improve how people interact with software day to day.",
  subtitle1: "01 — Featured Case",
  subtitle2: "Context",
  subtitle3: "Outcome",
};