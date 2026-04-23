import type { MetadataRoute } from "next";

import { caseStudies, resourcePages } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-servico",
    "/solucoes/videos-marketing",
    "/solucoes/trafego-pago",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const casePages = Object.keys(caseStudies).map((slug) => ({
    url: `${siteConfig.url}/cases/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourceRoutePages = Object.keys(resourcePages).map((slug) => ({
    url: `${siteConfig.url}/recursos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...casePages, ...resourceRoutePages];
}
