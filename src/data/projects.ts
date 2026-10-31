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
    slug: "mcsaldature",
    featured: true,
    mainProject: true,
    projectPageEnabled: true,
    year: "2026",
    role: "Product Design · Frontend Development · SEO · Content Architecture",
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
    links: [
      {
        label: "Project page",
        href: "/projects/mcsaldature",
      },
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
    slug: "portfolio",
    featured: true,
    mainProject: false,
    projectPageEnabled: true,
    year: "2026",
    role: "Frontend Engineering · Information Architecture · UI Design",
    summary:
      "Portfolio application built with reusable UI sections, typed content and dedicated project case studies.",
    description:
      "A professional showcase and frontend application, designed around structured content instead of a generic one-page template.",
    content: "The implementation focuses on:",

    contentList: [
      "Reusable React components",
      "Centralized TypeScript-driven content",
      "Dynamic project routing with Next.js",
      "Responsive navigation patterns",
      "Theming and design consistency",
    ],

    contentEnd:
      "The project also deepened my React and Next.js practice while keeping the codebase ready to evolve.",
    outcome:
      "The portfolio now has a scalable foundation for future work, with reusable components and centralized content.",
    links: [
      {
        label: "Project page",
        href: "/projects/portfolio",
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
        "The homepage presents work and experience through a clear hierarchy and dedicated navigation.",
    },
    gallery: [
      {
        src: "/images/projects/personal-portfolio/projects-section.jpg",
        alt: "Projects section of the personal portfolio",
        caption:
          "The projects section is driven by centralized TypeScript data.",
      },
      {
        src: "/images/projects/personal-portfolio/project-detail-page.jpg",
        alt: "Project detail page of the personal portfolio",
        caption:
          "Dynamic project pages create space for decisions, content and visuals.",
      },
    ],
    decisionCards: [
      {
        title: "Why centralized content?",
        description:
          "Centralized TypeScript data keeps homepage cards and project detail pages aligned without duplicating content.",
      },
      {
        title: "Why dynamic project routes?",
        description:
          "Dynamic routing keeps the homepage concise while allowing each project to grow into a full case study.",
      },
      {
        title: "Why reusable sections?",
        description:
          "Each major section is driven by typed data, making the portfolio easier to extend without duplicating layout logic.",
      },
    ],
    futureImprovements: [
      "MDX-powered project pages",
      "Full-text search",
      "Interactive animations",
      "Automated OG generation",
      "Internationalization",
    ],
    liveUrl: "https://matteodangio.com",
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
    links: [],
    liveUrl: undefined,
    githubUrl: undefined,
  },
];

export const projectLabel: ISectionLabel = {
  sectionTitle: "Projects",
  title: "Selected work with product and engineering context",
  description1:
    "A compact view of client work, portfolio architecture and product experiments, with enough detail for technical review.",
  subtitle1: "01 — Featured project",
  subtitle2: "Context",
  subtitle3: "Outcome",
};
