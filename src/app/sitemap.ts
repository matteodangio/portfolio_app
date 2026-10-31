import type { MetadataRoute } from "next";
import { navigableProjects } from "@/data/projects.utils";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...navigableProjects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];
}
