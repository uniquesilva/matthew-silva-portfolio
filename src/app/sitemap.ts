import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-10-10";

  return [
    {
      url: SITE_URL,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getProjects().map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
