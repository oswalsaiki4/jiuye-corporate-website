import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Sogou web spider",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "360Spider",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://jiuye.ai/sitemap.xml",
    host: "https://jiuye.ai",
  };
}
