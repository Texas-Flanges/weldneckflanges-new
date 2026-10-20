import { MetadataRoute } from "next";
const BASE = "https://weldneckflanges.com";
const industries = ["oil-gas","petrochemical","power-generation","waterworks","chemical-processing","mining","pulp-paper","food-beverage","agriculture","hvac","marine","data-centers"];
const blogSlugs = ["weld-neck-vs-slip-on-when-the-extra-cost-pays-off","class-125lw-flanges-the-lightweight-retrofit-that-replaces-cast-iron","hastelloy-weld-neck-flanges-when-c276-is-the-right-call"];
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["","/about","/contact","/privacy-policy","/products","/products/weld-neck","/products/blind-flanges","/products/lightweight-flanges","/products/custom-machining","/standards","/standards/asme-flanges","/standards/api-flanges","/standards/awwa-flanges","/standards/din-flanges","/materials","/materials/carbon-steel","/materials/stainless-steel","/materials/alloy-steel","/materials/hastelloy","/industries","/resources","/resources/flange-dimensions","/resources/rtj-gaskets","/resources/cad-drawings","/resources/technical-specs","/tools","/tools/bolt-torque-calculator","/tools/flange-dimension-calculator","/tools/pressure-temperature-rating","/blog"];
  return [
    ...routes.map((r) => ({ url: `${BASE}${r}`, lastModified, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.7 })),
    ...industries.map((slug) => ({ url: `${BASE}/industries/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...blogSlugs.map((slug) => ({ url: `${BASE}/blog/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
