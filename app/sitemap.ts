import type { MetadataRoute } from "next"

const baseUrl = "https://adpulse.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
