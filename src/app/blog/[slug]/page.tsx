import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { SiteNav } from "@/components/SiteNav";
import { CurrentYear } from "@/components/CurrentYear";

const BASE_URL = "https://weldneckflanges.com";
const AUTHOR = "Engineering Team";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

// Point texasflange.com links in post bodies at the apex domain with the ref tag.
function tagTexasFlangeLinks(html: string) {
  return html.replace(/href="https?:\/\/(?:www\.)?texasflange\.com([^"]*)"/g, (_match, rest: string) => {
    const [pathAndQuery, hash] = rest.split("#");
    let path = pathAndQuery || "/";
    if (!path.startsWith("/")) path = "/" + path;
    const [pathname, query] = path.split("?");
    const withSlash = pathname.endsWith("/") ? pathname : pathname + "/";
    const params = new URLSearchParams(query || "");
    params.set("ref", "weldneckflanges");
    return `href="https://texasflange.com${withSlash}?${params.toString()}${hash ? "#" + hash : ""}"`;
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Weld Neck Flanges`,
    description: post.description,
    authors: [{ name: AUTHOR }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Weld Neck Flanges",
      type: "article",
      publishedTime: post.date,
      authors: [AUTHOR],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();
  const url = `${BASE_URL}/blog/${post.slug}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            * { box-sizing: border-box; }
          `,
        }}
      />

      <SiteNav />

      {/* Breadcrumb */}
      <div style={{ padding: "16px 40px", backgroundColor: "#f8f9fa", fontSize: "14px" }} className="post-crumbs">
        <a href="/" style={{ color: "#1B1F23", textDecoration: "none" }}>Home</a> / <a href="/blog" style={{ color: "#1B1F23", textDecoration: "none" }}>Blog</a>
      </div>

      <article style={{ padding: "48px 40px 64px", backgroundColor: "#fff" }} className="post-article">
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "38px", fontWeight: 700, color: "#1B1F23", lineHeight: 1.2, marginBottom: "12px" }}>{post.title}</h1>
          <p style={{ fontSize: "14px", color: "#5F6B7A", marginBottom: "32px" }}>
            {AUTHOR} · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: tagTexasFlangeLinks(post.content) }} />
          <p style={{ marginTop: "40px" }}>
            <a href="/blog" style={{ fontWeight: 600 }}>← All articles</a>
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <p style={{ marginBottom: "8px" }}>
          <a href="https://texasflange.com/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Texas Flange</a> {" | "}
          <a href="https://texasflange.com/contact-us/?ref=weldneckflanges" style={{ color: "#FDBA74", textDecoration: "none" }}>Request a Quote</a>
        </p>
        <p style={{ fontSize: "13px", color: "#888" }}>&copy; <CurrentYear /> Weld Neck Flanges. All rights reserved.</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: AUTHOR },
            publisher: { "@type": "Organization", name: "Weld Neck Flanges", url: BASE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        }}
      />
    </>
  );
}
