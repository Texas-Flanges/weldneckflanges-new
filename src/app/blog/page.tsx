import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { CurrentYear } from "@/components/CurrentYear";

export const metadata: Metadata = {
  title: "Blog | Weld Neck Flanges",
  description: "Technical articles and guides about weld neck flanges, steel flanges, materials, installation, and pricing.",
  alternates: {
    canonical: "https://weldneckflanges.com/blog",
  },
  openGraph: {
    url: "https://weldneckflanges.com/blog",
  },
};

const posts = [
  { title: "Weld Neck vs Lap Joint Flange: A Guide for US Applications", slug: "weld-neck-vs-lap-joint-flange", date: "October 10, 2025", excerpt: "A detailed comparison of weld neck flanges and lap joint flanges, covering design differences, strength, cost, installation, and when to choose each type for US projects." },
  { title: "Selecting the Right Material for Weld Neck Flanges", slug: "right-material-for-weld-neck-flanges", date: "June 26, 2024", excerpt: "Comprehensive guide to choosing the right material for weld neck flanges, covering carbon steel, stainless steel, alloy steel, duplex, nickel alloys, and specialty materials." },
  { title: "How to Properly Install Weld Neck Flanges for Maximum Durability?", slug: "properly-install-weld-neck-flanges", date: "June 25, 2024", excerpt: "Step-by-step guide for properly installing weld neck flanges to ensure maximum durability and joint integrity." },
  { title: "The Benefits of Using Weld Neck Flanges in High-Pressure Applications", slug: "benefits-of-weld-neck-flanges-high-pressure", date: "June 25, 2024", excerpt: "Exploring the advantages of weld neck flanges for high-pressure piping systems and demanding industrial applications." },
  { title: "Weld Neck Flange Dimensions", slug: "weld-neck-flange-dimensions", date: "June 24, 2024", excerpt: "Complete specification guide for weld neck flange dimensions across all standard pressure classes." },
  { title: "The Ultimate Guide to Weld Neck Flanges", slug: "ultimate-guide-to-weld-neck-flanges", date: "June 22, 2024", excerpt: "Everything you need to know about weld neck flanges, from basic design principles to advanced applications." },
];

export default function BlogPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            * { box-sizing: border-box; }
          `,
        }}
      />

      <SiteNav />

      {/* Header */}
      <section style={{ backgroundColor: "#1B1F23", padding: "60px 40px", color: "#fff" }}>
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Blog</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>Technical articles and industry insights about weld neck flanges</p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {posts.map((post, i) => (
            <a key={i} href={`/blog/${post.slug}`} style={{ display: "block", backgroundColor: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", textDecoration: "none", color: "inherit" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1B1F23", marginBottom: "8px", lineHeight: 1.4 }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#5F6B7A", marginBottom: "12px" }}>{post.date}</p>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <p style={{ marginBottom: "8px" }}>
          <a href="https://texasflange.com/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Texas Flange</a> {" | "}
          <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Request a Quote</a>
        </p>
        <p style={{ fontSize: "13px", color: "#888" }}>&copy; <CurrentYear /> Weld Neck Flanges. All rights reserved.</p>
      </footer>

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weldneckflanges.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://weldneckflanges.com/blog" },
            ],
          }),
        }}
      />
    </>
  );
}
