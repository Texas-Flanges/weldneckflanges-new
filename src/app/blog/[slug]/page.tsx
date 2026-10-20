import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { OG_IMAGE } from "@/lib/seo";
import { AUTHOR, getAllPosts, getAnyPost } from "@/lib/posts";

const BASE_URL = "https://weldneckflanges.com";

interface PageProps { params: { slug: string }; }

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getAnyPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: AUTHOR }],
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, siteName: "Weld Neck Flanges", type: "article", publishedTime: post.date, authors: [AUTHOR], images: [OG_IMAGE] }
  };
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
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

function renderParagraph(text: string, key: number) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: Array<string | { text: string; href: string }> = [];
  let lastIndex = 0; let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push({ text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return (<p key={key} className="text-lg text-gray-700 leading-relaxed mb-6">{parts.map((part, i) => {
    if (typeof part === "string") return <span key={i}>{part}</span>;
    const isExternal = part.href.startsWith("http");
    if (isExternal) return <a key={i} href={part.href} target="_blank" rel="noopener noreferrer" className="text-[#B45309] font-semibold hover:underline">{part.text}</a>;
    return <Link key={i} href={part.href} className="text-[#B45309] font-semibold hover:underline">{part.text}</Link>;
  })}</p>);
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getAnyPost(params.slug);
  if (!post) notFound();
  const url = `${BASE_URL}/blog/${post.slug}`;
  const related = (await getAllPosts()).filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#B45309] text-sm mb-6"><span aria-hidden="true" className="mr-2">&larr;</span>Back to all posts</Link>
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm"><span className="inline-block bg-[#B45309] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide text-xs">{post.category}</span><span className="text-gray-400">{AUTHOR} · <time dateTime={post.date}>{formatDate(post.date)}</time></span><span className="text-gray-500">|</span><span className="text-gray-400">{post.readTime}</span></div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        <p className="text-xl text-gray-300 leading-relaxed">{post.excerpt}</p>
      </div></section>
      <article className="bg-[#F8F6F0] py-12 px-4"><div className="max-w-3xl mx-auto">
        {post.kind === "html" ? (
          <div className="post-body" dangerouslySetInnerHTML={{ __html: tagTexasFlangeLinks(post.html) }} />
        ) : (
          post.sections.map((section, sectionIndex) => (<div key={sectionIndex}>
            {section.heading && <h2 className="text-3xl font-display font-bold text-[#1B1F23] mt-12 mb-4">{section.heading}</h2>}
            {section.paragraphs.map((p, i) => renderParagraph(p, sectionIndex * 100 + i))}
          </div>))
        )}
      </div></article>
      <section className="bg-white py-16 px-4 border-t border-gray-200"><div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-8 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">{related.map((rp) => (<Link key={rp.slug} href={`/blog/${rp.slug}`} className="block bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"><span className="inline-block bg-[#B45309] text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-3">{rp.category}</span><h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{rp.title}</h3><p className="text-gray-700 text-sm leading-relaxed">{rp.excerpt}</p></Link>))}</div>
      </div></section>
      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: AUTHOR },
            publisher: { "@type": "Organization", name: "Weld Neck Flanges", url: BASE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            url
          })
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
              { "@type": "ListItem", position: 3, name: post.title, item: url }
            ]
          })
        }}
      />
    </>
  );
}
