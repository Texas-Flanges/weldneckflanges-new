import fs from 'fs';
import path from 'path';

// Not published: the price breakdown makes pricing claims, and post-1/2/3 share
// one generic placeholder body. Their URLs redirect to /blog in next.config.js.
export const RETIRED_SLUGS = [
  'weld-neck-flange-price-breakdown-usa-2025',
  'weld-neck-flange-design-for-high-pressure-applications',
  'structural-integrity-of-weld-neck-connections',
  'installation-and-welding-best-practices',
];

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent) as BlogPost;
    })
    .filter(post => !RETIRED_SLUGS.includes(post.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}