import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, getAllSlugs } from "../posts";

interface PageProps { params: { slug: string }; }
export async function generateStaticParams() { return getAllSlugs().map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date } };
}
function formatDate(iso: string): string { return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); }
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
    if (isExternal) return <a key={i} href={part.href} target="_blank" rel="noopener noreferrer" className="text-[#0D9488] font-semibold hover:underline">{part.text}</a>;
    return <Link key={i} href={part.href} className="text-[#0D9488] font-semibold hover:underline">{part.text}</Link>;
  })}</p>);
}
export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#0D9488] text-sm mb-6"><span aria-hidden="true" className="mr-2">&larr;</span>Back to all posts</Link>
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm"><span className="inline-block bg-[#0D9488] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide text-xs">{post.category}</span><span className="text-gray-400">{formatDate(post.date)}</span><span className="text-gray-500">|</span><span className="text-gray-400">{post.readTime}</span></div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
        <p className="text-xl text-gray-300 leading-relaxed">{post.excerpt}</p>
      </div></section>
      <article className="bg-[#F8F6F0] py-12 px-4"><div className="max-w-3xl mx-auto">
        {post.sections.map((section, sectionIndex) => (<div key={sectionIndex}>
          {section.heading && <h2 className="text-3xl font-display font-bold text-[#1B1F23] mt-12 mb-4">{section.heading}</h2>}
          {section.paragraphs.map((p, i) => renderParagraph(p, sectionIndex * 100 + i))}
        </div>))}
      </div></article>
      <section className="bg-white py-16 px-4 border-t border-gray-200"><div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-8 text-center">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">{related.map((rp) => (<Link key={rp.slug} href={`/blog/${rp.slug}`} className="block bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"><span className="inline-block bg-[#0D9488] text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-3">{rp.category}</span><h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{rp.title}</h3><p className="text-gray-700 text-sm leading-relaxed">{rp.excerpt}</p></Link>))}</div>
      </div></section>
      <section className="bg-[#0D9488] py-16 px-4"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="font-display text-4xl font-bold mb-4">Need this part sourced?</h2><p className="text-xl mb-8 leading-relaxed">Send the size, the pressure class, the material grade, and the facing. Quote returns the same business day.</p><div className="flex flex-wrap justify-center gap-4"><a href="tel:+12814848325" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition-colors">(281) 484-8325</a><a href="mailto:sales@texasflange.com" className="inline-block border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#0D9488] transition-colors">sales@texasflange.com</a></div><p className="text-white/80 text-sm mt-6">PO Box 2889, Pearland TX 77588</p></div></section>
    </main>
  );
}
