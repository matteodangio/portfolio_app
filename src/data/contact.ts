import { ILink, ISectionLabel } from "@/types";

  export const links: ILink[] = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matteo-dangio",
      icon: "",
    },
    {
      label: "GitHub",
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
    title: " Let’s build something clear, sharp, and useful.",
    description1: `I’m interested in frontend roles, product-driven teams, and projects
            where interface quality and system thinking genuinely matter.`,
    description2: `Available for selected opportunities, collaborations, and product
            conversations.`,
  };