import { ILink, ISectionLabel } from "@/types";

  export const links: ILink[] = [
    {
      label: "LinkedIn",
      description: "Professional profile",
      href: "https://www.linkedin.com/in/matteo-dangio",
      icon: "",
    },
    {
      label: "GitHub",
      description: "Projects & experiments",
      href: "https://github.com/matteodangio",
      icon: "",
    },
  ];

  export const mail: ILink = {
    label: "matteo@example.it",
    href: "mailto:matteo@example.it",
  };

  export const contactLabels: ISectionLabel = {
    sectionTitle: "Contact",
    title: "Let's build products with clarity and purpose",
    description1: `I’m interested in frontend roles, product-driven teams, and projects
            where thoughtful interfaces and maintainable systems matter`,
    description2: `Based in Italy • Open to remote opportunities across Europe`,
  };