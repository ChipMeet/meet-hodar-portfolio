import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { blogSeedPosts } from '@/lib/seed-data';

/**
 * Convenience route to reseed demo data in development. Disabled in production builds.
 */
export async function POST() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'Seeding is disabled in production.' },
      { status: 403 }
    );
  }

  await prisma.$transaction([
    prisma.message.deleteMany(),
    prisma.blog.deleteMany(),
    prisma.blog.createMany({ data: blogSeedPosts })
  ]);

  return NextResponse.json({
    success: true,
    message: `Seeded ${blogSeedPosts.length} blog posts.`
  });
}

