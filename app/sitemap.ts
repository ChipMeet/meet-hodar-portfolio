import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://meet-hodar.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/contact',
    '/resume'
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7
  }));

  const posts = await prisma.blog.findMany({
    select: {
      slug: true,
      createdAt: true
    }
  });

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.createdAt,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...blogRoutes];
}

