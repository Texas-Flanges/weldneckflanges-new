import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Weld Neck Flanges" },
  description: "Page not found | Weld Neck Flanges",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section className="bg-[#1B1F23] text-white py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#B45309] uppercase tracking-widest text-sm mb-4">404</p>
        <h1 className="font-display text-5xl mb-6 text-white">Page Not Found</h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">The page you were looking for is not at this address. Try the homepage or the blog.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-[#B45309] text-white px-6 py-3 rounded font-semibold hover:bg-[#92400E] transition">Back to Home</Link>
          <Link href="/blog" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">Blog</Link>
        </div>
      </div>
    </section>
  );
}
