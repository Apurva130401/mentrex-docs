
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Use process.cwd() to be safe in Next.js environment
const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export type Doc = {
  slug: string;
  meta: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
  content: string;
};

export function getDocBySlug(slug: string): Doc | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug: realSlug, meta: data, content };
  } catch (e) {
    return null;
  }
}

export function getAllDocs(): string[] {
  if (!fs.existsSync(docsDirectory)) return [];
  const slugs = fs.readdirSync(docsDirectory);
  return slugs.map((slug) => slug.replace(/\.md$/, ''));
}

export function getAllDocsMeta(): Doc[] {
     const slugs = getAllDocs();
     return slugs.map(slug => getDocBySlug(slug)).filter((doc): doc is Doc => doc !== null);
}
