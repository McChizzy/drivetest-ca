import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Province pages
  const provinces = [
    "alberta",
    "saskatchewan",
    "ontario",
    "british-columbia",
    "quebec",
    "manitoba",
    "nova-scotia",
    "new-brunswick",
    "newfoundland-labrador",
    "prince-edward-island",
    "northwest-territories",
    "yukon",
    "nunavut",
  ]

  const provincePages = provinces.map((province) => ({
    url: `${baseUrl}/province/${province}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  return [...staticPages, ...provincePages]
}
