// One list of blog posts from both sources: the long-form posts in
// src/app/blog/posts.ts (sections) and the weldneckflanges.com posts kept
// as JSON in src/content/blog (HTML bodies, SEO-AI-090).
import { posts as sectionPosts, type PostSection } from "@/app/blog/posts";
import { getBlogPosts } from "@/lib/blog";

export const AUTHOR = "Engineering Team";

interface PostBase { slug: string; title: string; excerpt: string; category: string; date: string; readTime: string; }
export type AnyPost =
  | (PostBase & { kind: "sections"; sections: PostSection[] })
  | (PostBase & { kind: "html"; html: string });

function readTime(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export async function getAllPosts(): Promise<AnyPost[]> {
  const fromJson = (await getBlogPosts()).map((p): AnyPost => ({
    kind: "html",
    slug: p.slug,
    title: p.title,
    excerpt: p.description,
    category: "Reference",
    date: p.date,
    readTime: readTime(p.content),
    html: p.content
  }));
  const fromSections = sectionPosts.map((p): AnyPost => ({ ...p, kind: "sections" }));
  return [...fromSections, ...fromJson].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAnyPost(slug: string): Promise<AnyPost | undefined> {
  return (await getAllPosts()).find((p) => p.slug === slug);
}
