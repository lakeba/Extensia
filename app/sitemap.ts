import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["", "/students", "/arrivals", "/smsf", "/pricing", "/company", "/help", "/join", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${siteUrl}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
