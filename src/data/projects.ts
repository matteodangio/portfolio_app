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
    title: "MC Saldature",
    status: "published",
    slug: "mcsaldature",
    featured: true,
    mainProject: true,
    projectPageEnabled: true,
    year: "2026",
    role: "Design · Development · SEO · Content Architecture",
    summary:
      "Static-first marketing site for a local welding company, built to improve search visibility and convert visits into contact requests.",
    problem:
      "The company relied mainly on word of mouth and had no effective online presence. The goal was to clarify services, improve local discoverability and make contact immediate.",
    constraints: [
      "Zero technical knowledge on the client side — content updates must be autonomous",
      "Minimal budget — no room for custom backends or paid CMS platforms",
      "Fast time-to-market — the site needed to be live within weeks, not months",
    ],
    description:
      "A fast marketing website with clear service page sections, structured content and a low-friction path from search to contact.",
    context:
      "The client needed a trustworthy web presence for private customers and businesses, without adding technical maintenance overhead.",
    content: "The implementation focused on three areas: ",
    contentList: [
      "Building reusable page sections",
      "Optimizing the information hierarchy",
      "Integrating a Git-based CMS that allows the client to publish content independently.",
    ],
    contentEnd: "",
    // "Astro handles static rendering, with React added only where interaction is needed.",

    outcome:
      "Core architecture is ready for production. Remaining work: final content validation, launch preparation and post-launch monitoring.",
    impact: [
      { label: "Deployment", value: "Automated" },
      { label: "Content management", value: "Client-managed" },
      { label: "Architecture", value: "Static-first" },
    ],
    lessonsLearned: [
      "Structured content reduces maintenance cost and makes the site easier to extend",
      "Git-based CMS workflows need clear onboarding for non-technical clients",
      "Early SEO setup compounds quickly for local businesses",
    ],
    tech: [
      { label: "Astro", icon: SiAstro, color: "#FF5D01" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Decap CMS", icon: SiDecapcms, color: "#FF0082" },
      { label: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
    stack: [
      "Astro",
      "Tailwind CSS",
      "Decap CMS",
      "Netlify Identity",
      "Git Gateway",
      "Google Analytics 4",
    ],
    heroImage: {
      src: "/images/projects/mcsaldature/home.webp",
      alt: "Homepage preview of the website",
      caption:
        "The public interface prioritizes service clarity and direct contact.",
    },
    gallery: [
      {
        src: "/images/projects/mcsaldature/admin-panel.webp",
        alt: "Admin content editing interface",
        caption:
          "The admin area lets the client update content without developer edits.",
      },
    ],
    decisionCards: [
      {
        title: "Why Astro?",
        description:
          "The project prioritized performance, SEO and low maintenance over complex client-side interactions.",
        tradeoff:
          "Less ecosystem maturity than Next.js, but the zero-JS-by-default model fits a content-heavy marketing site.",
      },
      {
        title: "Why Decap CMS + Git Gateway?",
        description:
          "The client needed editorial autonomy without introducing the complexity or cost of a traditional backend.",
        tradeoff:
          "Git-based publishing is less familiar than a traditional CMS, but avoids hosting costs and vendor lock-in.",
      },
      {
        title: "Why Netlify Identity?",
        description:
          "Netlify Identity provided a simple authentication layer for the admin flow and integrated with the Git-based publishing pipeline.",
        tradeoff:
          "It ties the project to Netlify, but simplifies deployment and fits the client's needs.",
      },
    ],
    workflow: {
      title: "Content publishing workflow",
      summary:
        "The workflow reduces developer involvement in routine content edits.",
      steps: [
        {
          label: "Admin edit",
          description: "The client updates text through the admin interface",
          businessBenefit: "No developer dependency for routine changes",
        },
        {
          label: "Decap CMS save",
          description: "The content change is saved through the CMS workflow",
          businessBenefit:
            "Version-controlled content with rollback capability",
        },
        {
          label: "GitHub update",
          description: "The change is committed to the repository",
          businessBenefit: "Full audit trail of every content change",
        },
        {
          label: "Automatic deploy",
          description: "A new production build is triggered automatically",
          businessBenefit: "Changes go live in under 60 seconds",
        },
      ],
    },
    futureImprovements: [
      "Lighthouse monitoring",
      "Image optimization pipeline",
      "Analytics dashboard",
      "Contact conversion tracking",
      "CMS preview workflow",
    ],
    liveUrl: "https://www.mcsaldature.com/",
    temporaryUrl: "https://mcsaldature.netlify.app/",
    githubUrl: undefined,
  },
  {
    index: "02",
    title: "Portfolio",
    status: "published",
    slug: "portfolio",
    featured: true,
    mainProject: false,
    projectPageEnabled: true,
    year: "2026",
    role: "Design · Frontend Development · Information Architecture",
    summary:
      "This site: a Next.js and React portfolio where all content lives in typed data files, so updating it never means touching a component.",
    description:
      "My second frontend stack after Angular. I built it to practice React and Next.js on a real product, with the same habits I use in production: typed data, small components and predictable routing.",
    content: "The implementation focuses on:",

    contentList: [
      "Next.js App Router with statically generated case-study routes",
      "Content kept in typed TypeScript files, separate from the components",
      "Light and dark themes through CSS variables and next-themes",
      "Self-hosted fonts with next/font and optimized images with next/image",
      "Motion animations, with prefers-reduced-motion respected",
    ],

    contentEnd:
      "Being new to React and Next.js, I kept the architecture simple and let the data model carry the structure.",
    outcome:
      "A site I can update by editing data files, without touching the components.",
    tech: [
      { label: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { label: "React", icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    heroImage: {
      src: "/images/projects/personal-portfolio/hero-homepage-v4.jpg",
      alt: "Homepage preview of the personal portfolio",
      caption:
        "The homepage presents work and experience through a clear hierarchy and dedicated navigation.",
    },
    gallery: [
      {
        src: "/images/projects/personal-portfolio/projects-section-v4.jpg",
        alt: "Projects section of the personal portfolio",
        caption:
          "The projects section is driven by centralized TypeScript data.",
      },
      {
        src: "/images/projects/personal-portfolio/project-detail-page-v4.jpg",
        alt: "Project detail page of the personal portfolio",
        caption:
          "Dynamic project pages create space for decisions, content and visuals.",
      },
    ],
    decisionCards: [
      {
        title: "Why typed content files?",
        description:
          "Hero, experience, technologies and projects live in src/data with shared TypeScript interfaces, so homepage cards and case-study pages read from one source.",
      },
      {
        title: "Why statically generated project pages?",
        description:
          "Case studies use generateStaticParams with dynamicParams disabled, so every project route is built ahead of time and unknown slugs return a 404.",
      },
      {
        title: "Why CSS variables for theming?",
        description:
          "Colors are defined once as variables and switched through a data-theme attribute set by next-themes, which keeps the light and dark themes consistent across components.",
      },
    ],
    futureImprovements: [
      "MDX-powered project pages",
      "Automated OG image generation",
      "Internationalization",
    ],
    liveUrl: "https://matteodangio.com",
    githubUrl: "https://github.com/matteodangio/portfolio_app",
  },
  {
    index: "03",
    title: "Gym Tracking App",
    status: "draft",
    slug: "gym-tracking-app",
    featured: true,
    mainProject: false,
    projectPageEnabled: false,
    year: "2026",
    role: "Frontend Development",
    summary:
      "Workout planning and progress tracking app, currently in early product development.",
    description:
      "A product-focused application for workout planning, tracking and day-to-day gym usability.",
    context:
      "The app is still early, so the project page will be added after the first meaningful implementation milestone.",
    outcome: "Initial setup and technical direction are defined.",
    tech: [
      { label: "Angular", icon: SiAngular, color: "#DD0031" },
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
    stack: ["Angular", "TypeScript", "Supabase"],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  // Draft: not rendered or routed until its status is set to "published".
  {
    index: "04",
    title: "Compliance Assistant (working title)",
    status: "draft",
    slug: "compliance-assistant",
    featured: false,
    mainProject: false,
    projectPageEnabled: false,
    year: "2027",
    summary: "To be written when the project ships.",
    tech: [],
  },
];

export const projectLabel: ISectionLabel = {
  sectionTitle: "Projects",
  title: "Selected work",
  description1:
    "A client project and this portfolio, each with the technical decisions behind it.",
  subtitle1: "01 — Featured project",
  subtitle2: "Context",
  subtitle3: "Outcome",
};
