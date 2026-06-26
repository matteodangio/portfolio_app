import { ComponentType, SVGProps } from "react";

/* COMMON */
export interface ISectionLabel {
    sectionTitle?: string,
    sectionSubtitle?: string,
    title?: string, 
    description1?: string,
    description2?: string,
    subtitle1?: string,
    subtitle2?: string,
    subtitle3?: string,
}

export interface ILink {
  label: string,
  href: string,
  icon?: string,
}

{/*FEATURED PROJECTS*/}

export interface IProjectLink {
  label: string;
  href: string;
}

export interface ITechItem {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export interface IProjectShowcaseItem {
  title: string;
  slug: string;
  featured: boolean;
  mainProject: boolean;
  summary: string;
  context?: string;
  outcome?: string;
  projectPageEnabled: boolean;
  links?: IProjectLink[];
  tech?: ITechItem[];
  description?: string;
  content?: string;
  year?: string;
  role?: string;
  index?: string;
  href?: string;
  stack?: string[];
  liveUrl?: string;
  githubUrl?: string;

  heroImage?: IProjectImage;
  gallery?: IProjectImage[];
  decisionCards?: IProjectDecisionCard[];
  workflow?: IProjectWorkflow;
}

/* PRODUCT PAGE */
export interface IProjectDecisionCard {
  title: string;
  description: string;
}

export interface IProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface IProjectWorkflowStep {
  label: string;
  description?: string;
}

export interface IProjectWorkflow {
  title: string;
  summary?: string;
  steps: IProjectWorkflowStep[];
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
  

{/*ABOUT*/}

  export interface IFocusItem {
    index: string;
    title: string;
    description: string;
  }

