import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/api/",
        "/static/",
        "/*.json",
        "/calculators/*/opengraph-image",
        "/categories/*/opengraph-image",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
