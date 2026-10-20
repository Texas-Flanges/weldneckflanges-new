import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Weld Neck Flange Technical Articles",
  description: "Technical articles on weld neck flange selection, lightweight retrofit, Hastelloy specification, and API 6A pipeline service."
};
function formatDate(iso: string): string { return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); }
export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-6xl mx-auto"><p className="text-[#0D9488] font-semibold uppercase tracking-wider text-sm mb-4">Technical Resources</p><h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Weld Neck Flanges Blog</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Technical writing for engineers and buyers specifying weld neck pipe flanges. Construction type comparisons, material selection, lightweight retrofit, and exotic alloy service.</p></div></section>
      <section className="bg-[#F8F6F0] py-16 px-4"><div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {sorted.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <span className="inline-block bg-[#0D9488] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide text-xs">{post.category}</span>
                <span className="text-gray-600">{formatDate(post.date)}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{post.readTime}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B1F23] mb-4"><Link href={`/blog/${post.slug}`} className="hover:text-[#0D9488] transition-colors">{post.title}</Link></h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#0D9488] font-semibold hover:underline">Read the full article<span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </article>
          ))}
        </div>
      </div></section>
      <section className="bg-[#0D9488] py-16 px-4"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="font-display text-4xl font-bold mb-4">Got a weld neck spec to source?</h2><p className="text-xl mb-8">We supply weld neck flanges across the full pressure spectrum from Class 125LW lightweight through API 6A 20000 PSI.</p><div className="flex flex-wrap justify-center gap-4"><a href="tel:+12814848325" className="inline-block bg-white text-[#0D9488] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition-colors">(281) 484-8325</a><a href="mailto:sales@texasflange.com" className="inline-block border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#0D9488] transition-colors">sales@texasflange.com</a></div></div></section>
    </main>
  );
}
