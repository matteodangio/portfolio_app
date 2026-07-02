import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { createElement } from "react";
import type { ComponentType, SVGProps } from "react";

export type NavItem = {
  label: string;
  target: string;
};

export type SocialIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconComponent;
  description?: string;
};

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": true,
      ...props,
    },
    createElement("path", {
      d: "M20.45 20.45h-3.554V14.87c0-1.33-.027-3.04-1.852-3.04-1.853 0-2.136 1.445-2.136 2.94v5.68H9.344V9h3.414v1.56h.05c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.37 4.268 5.46v6.28zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.45H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.73C24 .774 23.2 0 22.222 0h.003z",
    }),
  );
}

export const sectionNavItems: NavItem[] = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export const heroNavItems: NavItem[] = sectionNavItems.filter(
  (item) => item.target !== "home",
);

export const profileLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    description: "Professional profile",
    href: "https://www.linkedin.com/in/matteo-dangio",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    description: "Projects & experiments",
    href: "https://github.com/matteodangio",
    icon: SiGithub,
  },
];

export const emailLink: SocialLink = {
  label: "Send me an email",
  href: "mailto:matteo.dangio@outlook.com",
  icon: Mail,
};

export const railSocialLinks: SocialLink[] = [
  ...profileLinks,
  {
    ...emailLink,
    label: "Email",
  },
];
