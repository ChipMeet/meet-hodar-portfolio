import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { blogInputSchema } from '@/lib/validators';
import type { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

const DEFAULT_PAGE_SIZE = 6;
const MAX_PAGE_SIZE = 24;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageParam = Number(searchParams.get('page') ?? '1');
    const limitParam = Number(searchParams.get('limit') ?? DEFAULT_PAGE_SIZE);
    const tag = searchParams.get('tag');

    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const limitRaw =
      Number.isFinite(limitParam) && limitParam > 0 ? limitParam : DEFAULT_PAGE_SIZE;
    const limit = Math.min(limitRaw, MAX_PAGE_SIZE);
    const skip = (page - 1) * limit;

    const where: Prisma.BlogWhereInput | undefined = tag
      ? { tags: { has: tag } }
      : undefined;

    const [posts, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.blog.count({ where })
    ]);

    return NextResponse.json({
      data: posts,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Failed to fetch blog posts', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = blogInputSchema.parse(payload);

    const created = await prisma.blog.create({
      data: parsed
    });

    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid blog payload.', details: error.flatten() },
        { status: 400 }
      );
    }

    if (isPrismaUniqueError(error)) {
      return NextResponse.json(
        { error: 'Slug already exists. Please choose another.' },
        { status: 409 }
      );
    }

    console.error('Failed to create blog post', error);
    return NextResponse.json(
      { error: 'Failed to create blog post.' },
      { status: 500 }
    );
  }
}

function isPrismaUniqueError(error: unknown) {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code: string }).code === 'P2002'
  );
}

