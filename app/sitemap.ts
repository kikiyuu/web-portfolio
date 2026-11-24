import type { MetadataRoute } from "next";
import { works, workHref } from "@/components/site";
import { blogHref, blogs } from "@/content/blog";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticRoutes = ["", "/about", "/work", "/blog", "/contact"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const workRoutes = works.map((work) => ({
    url: `${base}${workHref(work.id)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${base}${blogHref(post.id)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
