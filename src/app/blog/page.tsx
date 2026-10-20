import Link from "next/link";
import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { OG_IMAGE } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";

const DESCRIPTION = "Technical articles and guides about weld neck flanges: design, materials, installation and dimensions.";

export const metadata: Metadata = {
  title: "Blog | Weld Neck Flange Technical Articles",
  description: DESCRIPTION,
  alternates: { canonical: "https://weldneckflanges.com/blog" },
  openGraph: { title: "Blog | Weld Neck Flange Technical Articles", description: DESCRIPTION, url: "https://weldneckflanges.com/blog", siteName: "Weld Neck Flanges", type: "website", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", description: DESCRIPTION, images: [OG_IMAGE] }
};

function formatDate(iso: string): string { return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }); }

export default async function BlogIndexPage() {
  const sorted = await getAllPosts();
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-6xl mx-auto"><p className="text-[#B45309] font-semibold uppercase tracking-wider text-sm mb-4">Technical Resources</p><h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Weld Neck Flanges Blog</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Technical writing for engineers and buyers specifying weld neck pipe flanges. Construction type comparisons, material selection, installation, dimensions, lightweight retrofit, and exotic alloy service.</p></div></section>
      <section className="bg-[#F8F6F0] py-16 px-4"><div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          {sorted.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <span className="inline-block bg-[#B45309] text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide text-xs">{post.category}</span>
                <span className="text-[#5F6B7A]">{formatDate(post.date)}</span>
                <span className="text-gray-400">|</span>
                <span className="text-[#5F6B7A]">{post.readTime}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B1F23] mb-4"><Link href={`/blog/${post.slug}`} className="hover:text-[#B45309] transition-colors">{post.title}</Link></h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#B45309] font-semibold hover:underline">Read the full article<span className="ml-2" aria-hidden="true">&rarr;</span></Link>
            </article>
          ))}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
