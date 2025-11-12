import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { contactInputSchema } from '@/lib/validators';
import { ZodError } from 'zod';

const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 50;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageParam = Number(searchParams.get('page') ?? '1');
    const limitParam = Number(searchParams.get('limit') ?? DEFAULT_PAGE_SIZE);

    const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const limitRaw =
      Number.isFinite(limitParam) && limitParam > 0 ? limitParam : DEFAULT_PAGE_SIZE;
    const limit = Math.min(limitRaw, MAX_PAGE_SIZE);
    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.message.count()
    ]);

    return NextResponse.json({
      data: messages,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Failed to fetch contact messages', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactInputSchema.parse(payload);

    const created = await prisma.message.create({
      data: parsed
    });

    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid contact payload.', details: error.flatten() },
        { status: 400 }
      );
    }

    console.error('Failed to submit contact message', error);
    return NextResponse.json(
      { error: 'Failed to submit contact message.' },
      { status: 500 }
    );
  }
}

