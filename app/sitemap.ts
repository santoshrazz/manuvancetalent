import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://manuvancetalent.in";

  const routes: string[] = [
    "/",
    "/services",
    "/about",
    "/contact",
    "/services/employers",
    "/services/hiring-model",
    "/services/job-seekers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1.0 : 0.7,
  }));
}
