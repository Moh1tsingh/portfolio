import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moh1t.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
