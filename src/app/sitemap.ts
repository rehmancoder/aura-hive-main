import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/env";
import { divisions } from "@/lib/divisions";

const updated = new Date("2026-11-21");

// Every page on both sides of the site, so Google can find them.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${siteUrl}${path}`,
    lastModified: updated,
    changeFrequency,
    priority,
  });

  return [
    page("", 1),
    ...Object.values(divisions).flatMap((d) => [
      page(d.base, 0.95),
      page(d.servicesPath, 0.9),
      page(d.aboutPath, 0.8, "yearly"),
      page(d.contactPath, 0.7, "yearly"),
      ...d.services.map((s) => page(d.servicePath(s.slug), 0.8)),
    ]),
  ];
}
