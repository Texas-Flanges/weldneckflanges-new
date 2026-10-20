/** @type {import('next').NextConfig} */
const TF = "https://texasflange.com";
const REF = "?ref=weldneckflanges";

// Seller pages from the weldneckflanges-new build go to their Texas Flange
// counterparts, as on pipingflange.com (SEO-AI-090).
const sellerRedirects = [
  ["/contact", "/contact-us/"],
  ["/products", "/industrial-flange-catalog/"],
  ["/products/weld-neck", "/weld-neck-flanges/"],
  ["/products/blind-flanges", "/blind-flanges/"],
  ["/products/lightweight-flanges", "/products/flange-dims-weights/ansi-b16-1-industry-standard/class-125lw-flanges/"],
  ["/products/custom-machining", "/custom-flanges/"],
  ["/industries", "/flange-types-basics/"],
  ["/industries/oil-gas", "/oil-gas-industry-flanges/"],
  ["/industries/petrochemical", "/petrochemical-flanges/"],
  ["/industries/chemical-processing", "/petrochemical-flanges/"],
  ["/industries/power-generation", "/power-plant-industries-flanges/"],
  ["/industries/waterworks", "/waterworks-flanges/"],
  ["/industries/food-beverage", "/food-beverage-industries-flanges/"],
  ["/industries/hvac", "/blog/flanges-in-commercial-hvac-what-goes-where-in-the-mechanical-room/"],
  ["/industries/data-centers", "/blog/flanges-for-data-center-cooling/"],
  ["/industries/mining", "/flange-types-basics/"],
  ["/industries/pulp-paper", "/flange-types-basics/"],
  ["/industries/agriculture", "/flange-types-basics/"],
  ["/industries/marine", "/flange-types-basics/"]
];

// Retired and renamed blog posts (SEO-AI-090).
const blogRedirects = [
  ["/blog/weld-neck-flange-design-high-pressure", "/blog"],
  ["/blog/structural-integrity-weld-neck-connections", "/blog"],
  ["/blog/installation-welding-best-practices", "/blog"],
  ["/blog/weld-neck-flange-cost-2025", "/blog"],
  ["/blog/weld-neck-vs-lap-joint-guide", "/blog/weld-neck-vs-lap-joint-flange"],
  ["/blog/selecting-right-material-weld-neck", "/blog/right-material-for-weld-neck-flanges"],
  ["/blog/weld-neck-flange-price-breakdown-usa-2025", "/blog"],
  ["/blog/weld-neck-flange-design-for-high-pressure-applications", "/blog"],
  ["/blog/structural-integrity-of-weld-neck-connections", "/blog"],
  ["/blog/installation-and-welding-best-practices", "/blog"]
];

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      ...sellerRedirects.map(([from, to]) => ({ source: from, destination: `${TF}${to}${REF}`, permanent: true })),
      ...blogRedirects.map(([from, to]) => ({ source: from, destination: to, permanent: true })),
      { source: "/about", destination: "/", permanent: true },
      { source: "/services", destination: "/", permanent: true },
    ];
  },
  // Keep the vercel.app preview host out of search results (SEO-AI-097).
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};
module.exports = nextConfig;
