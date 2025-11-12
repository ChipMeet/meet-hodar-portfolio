import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Post, PostMeta } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

function getPostFileNames() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

function mapFrontMatterToMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const date = String(data.date);
  return {
    slug,
    title: String(data.title),
    date,
    description: String(data.description ?? ''),
    image: String(data.image ?? '/images/blog-default.svg'),
    readingTime: calculateReadingTime(content),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : undefined
  };
}

export function getAllPosts(): PostMeta[] {
  const posts = getPostFileNames()
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      const slug = fileName.replace(/\.mdx?$/, '');
      return mapFrontMatterToMeta(slug, data, content);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  return {
    ...mapFrontMatterToMeta(realSlug, data, content),
    content
  };
}

