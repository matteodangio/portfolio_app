export interface IProject {
  slug: string;
  title: string;
  description: string;
  content?: string;        // testo lungo, narrativo
  role?: string;           // es. "Frontend Engineer"
  stack: string[];
  year: number;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

{/*EXPERIENCE*/}

export interface IExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

  export interface AccordionItem {
    title?: string;
    subtitle?: string;
    prop1?: string;
    prop2?: string;
    prop3?: string;
    description?: string;
    chipsType1?: string[];
    chipsType2?: string[];
  }
  

{/*EXPERTISE*/}

  export interface IExpertise {
    icon: string; 
    title: string;
    subtitle: string;
    description: string;
  }
  

{/*ABOUT*/}

  export interface IFocusItem {
    index: string;
    title: string;
    description: string;
  }

  export interface IAboutLabels {
    sectionTitle: string,
    mainTitle: string,
    description1: string,
    description2: string
  }




{/*FEATURED PROJECTS*/}

  export interface ITechItem {
    label: string;
    icon: React.ComponentType<{ size?: number; color?: string }>;
    color: string;
  };
  export interface IFeaturedProject {
    title: string;
    summary: string;
    context: string;
    outcome: string;
    links: IProjectLink[];
    tech: ITechItem[];
  };
  export interface IWorkItem {
    index: string;
    title: string;
    summary: string;
    href: string;
    tech: ITechItem[];
  };
  export interface IProjectLink { label: string; href: string };