import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://weldneckflanges.com";

// Only routes that return 200. Redirected seller pages are left out.
const routes = ["","/privacy-policy","/standards","/standards/asme-flanges","/standards/api-flanges","/standards/awwa-flanges","/standards/din-flanges","/materials","/materials/carbon-steel","/materials/stainless-steel","/materials/alloy-steel","/materials/hastelloy","/resources","/resources/flange-dimensions","/resources/rtj-gaskets","/resources/cad-drawings","/resources/technical-specs","/tools","/tools/bolt-torque-calculator","/tools/flange-dimension-calculator","/tools/pressure-temperature-rating","/blog"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = await getAllPosts();
  return [
    ...routes.map((r) => ({ url: `${BASE}${r}`, lastModified, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.7 })),
    ...posts.map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
