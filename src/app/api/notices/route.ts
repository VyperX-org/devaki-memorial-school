import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createNotice, listNotices } from '@/lib/notices-db';
import { NOTICE_CATEGORIES } from '@/lib/notice-types';

const noticeInputSchema = z.object({
  title: z.string().trim().min(3).max(140),
  excerpt: z.string().trim().min(10).max(2000),
  category: z.enum(NOTICE_CATEGORIES),
  dateValue: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

function isAuthorized(request: NextRequest): boolean {
  const adminKey = process.env.NOTICES_ADMIN_KEY;
  if (!adminKey) {
    return false;
  }

  const providedKey = request.headers.get('x-admin-key');
  return providedKey === adminKey;
}

export async function GET() {
  try {
    const notices = await listNotices();
    return NextResponse.json({ notices });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to load notices' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = noticeInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload', details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const notice = await createNotice(parsed.data);
    return NextResponse.json({ notice }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create notice' },
      { status: 500 }
    );
  }
}
