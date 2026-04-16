import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { deleteNotice, updateNotice } from '@/lib/notices-db';
import { NOTICE_CATEGORIES } from '@/lib/notice-types';

const noticeInputSchema = z.object({
  title: z.string().trim().min(3).max(140),
  excerpt: z.string().trim().min(10).max(2000),
  category: z.enum(NOTICE_CATEGORIES),
  dateValue: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

function getId(params: { id: string }): number {
  return Number.parseInt(params.id, 10);
}

function isAuthorized(request: NextRequest): boolean {
  const adminKey = process.env.NOTICES_ADMIN_KEY;
  if (!adminKey) {
    return false;
  }

  const providedKey = request.headers.get('x-admin-key');
  return providedKey === adminKey;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = getId(await params);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ error: 'Invalid notice id' }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const parsed = noticeInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload', details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const notice = await updateNotice(id, parsed.data);
    if (!notice) {
      return NextResponse.json({ error: 'Notice not found' }, { status: 404 });
    }

    return NextResponse.json({ notice });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update notice' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = getId(await params);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ error: 'Invalid notice id' }, { status: 400 });
  }

  try {
    const deleted = await deleteNotice(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Notice not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete notice' },
      { status: 500 }
    );
  }
}
