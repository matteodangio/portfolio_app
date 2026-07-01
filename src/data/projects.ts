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
      "Designed and built a lightweight marketing website that gives a local welding company a professional online presence, improves local discoverability, and creates a clear conversion path from search to contact",
    problem:
      "The company had no effective online presence and relied almost entirely on word of mouth. The goal was to create a website that could increase local discoverability, communicate services clearly, and provide a simple path to contact",
    constraints: [
      "Zero technical knowledge on the client side — content updates must be autonomous",
      "Minimal budget — no room for custom backends or paid CMS platforms",
      "Fast time-to-market — the site needed to be live within weeks, not months",
    ],
    description:
      "A lightweight marketing website built for a local welding business that previously had no active web presence. The project focuses on clarity, discoverability, and a simple path from visit to contact",
    context:
      "The client needed a new website to regain online visibility and be easier to find through search engines. The site had to present the company in a clear and trustworthy way for both private customers and businesses, while keeping the browsing experience fast and lightweight",
    content: "The implementation focused on three areas: ",
    contentList: [
      "Building reusable page sections",
      "Optimizing the information hierarchy",
      "Integrating a Git-based CMS that allows the client to publish content independently."
    ],
    contentEnd: "The frontend uses Astro for static rendering while React is used where interactivity is needed, keeping the shipped JavaScript minimal.",


    outcome: "The core architecture is complete and ready for production. The remaining work focuses on final content validation, launch preparation, and post-launch monitoring",
    impact: [
      { label: "Deployment", value: "Automated" },
      { label: "Content management", value: "Client-managed" },
      { label: "Architecture", value: "Static-first" },
    ],
    lessonsLearned: [
      "Modeling structured content early reduces future maintenance costs and makes the site easier to scale",
      "Git-based CMS workflows need clear onboarding documentation for non-technical clients",
      "Investing time in meta/SEO setup from day one compounds quickly for local businesses",
    ],
    links: [
      {
        label: "Project page",
        href: "/projects/mcsaldature",
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
        "The public-facing interface is designed to communicate services clearly and push users toward direct contact",
    },
    gallery: [
      {
        src: "/images/projects/mcsaldature/admin-panel.jpg",
        alt: "Admin content editing interface for mcSaldature",
        caption:
          "The admin area allows the client to update content without relying on manual developer edits",
      },
    ],
    decisionCards: [
      {
        title: "Why Astro?",
        description:
          "The project prioritized performance, SEO, and low maintenance over complex client-side interactions. Astro's static-first architecture reduced unnecessary JavaScript while keeping the development experience familiar through React components",
        tradeoff:
          "Less ecosystem maturity than Next.js, but the zero-JS-by-default approach was ideal for a content-heavy marketing site",
      },
      {
        title: "Why Decap CMS + Git Gateway?",
        description:
          "The client needed editorial autonomy without introducing the complexity or cost of a traditional backend.",
        tradeoff:
          "Git-based workflow is less intuitive than traditional CMS dashboards, but avoids hosting costs and vendor lock-in",
      },
      {
        title: "Why Netlify Identity?",
        description:
          "Netlify Identity provided a simple authentication layer for the admin flow and integrated cleanly with the Git-based publishing pipeline",
        tradeoff:
          "Tied to Netlify's platform, but the free tier covers the client's needs and simplifies the deployment pipeline significantly",
      },
    ],
    workflow: {
      title: "Content publishing workflow",
      summary:
        "The project was structured to reduce ongoing developer involvement in routine content edits",
      steps: [
        {
          label: "Admin edit",
          description:
            "The client updates text content through the admin interface",
          businessBenefit: "No developer dependency for routine changes",
        },
        {
          label: "Decap CMS save",
          description: "The content change is saved through the CMS workflow",
          businessBenefit: "Version-controlled content with rollback capability",
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
    futureImprovements: ["Lighthouse monitoring", "Image optimization pipeline", "Analytics dashboard", "Contact conversion tracking", "CMS preview workflow"],
    liveUrl: undefined,
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
    summary: "A portfolio application designed to showcase projects through reusable UI components, structured content, and dedicated case studies rather than a conventional one-page layout",
    description:
      "This portfolio serves both as a professional showcase and as an evolving frontend application. Rather than relying on a generic template, I designed a reusable content system that supports dedicated project pages, scalable layouts, and consistent information architecture",
    content:
      "The implementation focused on building a scalable frontend architecture through:",

    contentList: [
      "Reusable React components",
      "Centralized TypeScript-driven content",
      "Dynamic project routing with Next.js",
      "Responsive navigation patterns",
      "Theming and design consistency"
    ],

    contentEnd:
      "The project also became an opportunity to deepen my experience with React, Next.js, and component-driven architecture while building an application intended to evolve over time",
    outcome:"The project established a scalable foundation for presenting future work while remaining easy to extend through reusable components and centralized content",
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
        "The homepage was designed to present work and experience with clearer hierarchy, stronger navigation, and a more intentional visual structure",
    },
    gallery: [
      {
        src: "/images/projects/personal-portfolio/projects-section.jpg",
        alt: "Projects section of the personal portfolio",
        caption:
          "The projects section is driven by centralized TypeScript data so featured content, lists, and detail pages stay aligned",
      },
      {
        src: "/images/projects/personal-portfolio/project-detail-page.jpg",
        alt: "Project detail page of the personal portfolio",
        caption:
          "Dynamic project pages extend the same system while allowing more space for project-specific decisions, content, and visuals",
      },
    ],
    decisionCards: [
      {
        title: "Why centralized content?",
        description:
          "I chose Next.js to build the portfolio on a React-based stack that is more aligned with the frontend roles I want to target and better suited for scalable UI work",
      },
      {
        title: "Why dynamic project routes?",
        description:"Instead of embedding every project directly into the homepage, I separated overview and detail pages through dynamic routing. This keeps navigation simpler while allowing each project to grow independently as new content is added"
      },
      {
        title: "Why reusable sections?",
        description:"Every major section was designed as an independent component driven by typed data. This makes the portfolio easier to extend, maintain, and reuse without duplicating layout logic"
      },
    ],
    futureImprovements: ["MDX-powered project pages", "Full-text search", "Interactive animations", "Automated OG generation", "Internationalization"],
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
      "An ongoing product-focused application for workout planning and progress tracking, currently under active development",
    description:
      "This project is intended to become a more complete product-focused application centered on workout planning, tracking, and day-to-day usability in the gym",
    context:
      "The app is still in its early implementation stage, so the project page is intentionally not available yet",
    outcome:
      "Initial setup and technical direction are defined. The project will be added as a full case study only after the first meaningful implementation milestone",
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
  title: "Selected work, from business websites to product-focused applications",
  description1: "Each project reflects a different challenge, from helping a local business build its online presence to exploring frontend architecture, product thinking, and user experience through personal work",
  subtitle1: "01 — Featured project",
  subtitle2: "Context",
  subtitle3: "Outcome",
};