import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/content";

const BASE_URL = "https://ayahubs.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = SERVICES.items.map((service) => ({
    url: `${BASE_URL}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Homepage
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // Portfólio — página própria
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Todas as 6 páginas de serviço
    ...servicePages,
    // Páginas institucionais
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
