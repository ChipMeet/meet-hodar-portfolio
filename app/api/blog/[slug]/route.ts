import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { blogUpdateSchema } from '@/lib/validators';
import { ZodError } from 'zod';

type RouteContext = {
  params: {
    slug: string;
  };
};

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    // Since there's no slug field, use id instead
    const id = parseInt(params.slug, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid post ID.' }, { status: 400 });
    }

    const post = await prisma.blog.findUnique({
      where: { id }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 });
    }

    return NextResponse.json({ data: post });
  } catch (error) {
    console.error('Failed to fetch blog post', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: RouteContext) {
  try {
    const id = parseInt(params.slug, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid post ID.' }, { status: 400 });
    }

    const existing = await prisma.blog.findUnique({
      where: { id }
    });

    if (!existing) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 });
    }

    const payload = await request.json();
    const parsed = blogUpdateSchema.parse(payload);

    const updated = await prisma.blog.update({
      where: { id },
      data: parsed
    });

    return NextResponse.json({ data: updated });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid blog payload.', details: error.flatten() },
        { status: 400 }
      );
    }

    console.error('Failed to update blog post', error);
    return NextResponse.json(
      { error: 'Failed to update blog post.' },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  try {
    const id = parseInt(params.slug, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid post ID.' }, { status: 400 });
    }

    await prisma.blog.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (isNotFoundError(error)) {
      return NextResponse.json({ error: 'Post not found.' }, { status: 404 });
    }

    console.error('Failed to delete blog post', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post.' },
      { status: 500 }
    );
  }
}

function isNotFoundError(error: unknown) {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code: string }).code === 'P2025'
  );
}

