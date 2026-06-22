export interface IProject {
  slug: string;
  title: string;
  description: string;
  // content: string;        // testo lungo, narrativo
  // role: string;           // es. "Frontend Engineer"
  stack: string[];
  year: number;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

  export interface IExperience {
    jobTitle: string;
    company: string;
    location: string;
    description: string;
    period: string;
    exposures?: string[];
    stack: string[];
    workMode: 'Remote' | 'On-site' | 'Hybrid';
  }

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
  