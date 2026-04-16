import 'server-only';

import { neon } from '@neondatabase/serverless';
import { format, isValid, parseISO } from 'date-fns';
import {
  NOTICE_CATEGORIES,
  type NoticeCategory,
  type NoticeInput,
  type NoticeRecord,
} from '@/lib/notice-types';

const DATE_DISPLAY_FORMAT = 'MMM d, yyyy';

let schemaReadyPromise: Promise<void> | null = null;

type NoticeRow = {
  id: number;
  title: string;
  excerpt: string;
  category: NoticeCategory;
  notice_date: string;
};

type NoticeIdRow = {
  id: number;
};

function getSqlClient() {
  const rawDatabaseUrl = process.env.DATABASE_URL;
  if (!rawDatabaseUrl) {
    return null;
  }

  const databaseUrl = normalizeDatabaseUrl(rawDatabaseUrl);
  return neon(databaseUrl);
}

function normalizeDatabaseUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl.trim());
    // Neon serverless fetch driver does not need channel_binding and it can cause failures in some runtimes.
    url.searchParams.delete('channel_binding');
    return url.toString();
  } catch {
    return rawUrl.trim();
  }
}

function isTransientFetchError(error: unknown): boolean {
  const message = String(error ?? '').toLowerCase();
  return message.includes('fetch failed') || message.includes('econnreset') || message.includes('etimedout');
}

async function queryWithRetry<T = unknown[]>(
  sql: {
    query: (query: string, params?: unknown[]) => Promise<unknown>;
  },
  query: string,
  params?: unknown[]
): Promise<T> {
  const maxAttempts = 3;
  let attempt = 0;
  let lastError: unknown;

  while (attempt < maxAttempts) {
    attempt += 1;
    try {
      return await sql.query(query, params) as T;
    } catch (error) {
      lastError = error;
      if (!isTransientFetchError(error) || attempt >= maxAttempts) {
        break;
      }
    }
  }

  throw lastError;
}

function formatDateForDisplay(dateValue: string): string {
  const parsed = parseISO(`${dateValue}T00:00:00`);
  if (!isValid(parsed)) {
    return dateValue;
  }
  return format(parsed, DATE_DISPLAY_FORMAT);
}

function mapRow(row: NoticeRow): NoticeRecord {
  return {
    id: Number(row.id),
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    dateValue: row.notice_date,
    date: formatDateForDisplay(row.notice_date),
  };
}

async function ensureNoticesTable() {
  const sql = getSqlClient();
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  if (!schemaReadyPromise) {
    const categories = NOTICE_CATEGORIES.map((category) => `'${category}'`).join(', ');

    schemaReadyPromise = (async () => {
      try {
        await queryWithRetry(sql, `
          CREATE TABLE IF NOT EXISTS notices (
            id BIGSERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            excerpt TEXT NOT NULL,
            category TEXT NOT NULL CHECK (category IN (${categories})),
            notice_date DATE NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );
        `);

        await queryWithRetry(sql, `
          CREATE INDEX IF NOT EXISTS idx_notices_notice_date
          ON notices (notice_date DESC, id DESC);
        `);
      } catch (error) {
        schemaReadyPromise = null;
        throw new Error(`Error connecting to database: ${String(error)}`);
      }
    })();
  }

  await schemaReadyPromise;
}

export async function listNotices(limit?: number): Promise<NoticeRecord[]> {
  try {
    const sql = getSqlClient();
    if (!sql) {
      console.warn('DATABASE_URL is missing. Returning empty notices list.');
      return [];
    }

    await ensureNoticesTable();

    const rows = (typeof limit === 'number' && limit > 0
      ? await queryWithRetry<NoticeRow[]>(
          sql,
          `
            SELECT id, title, excerpt, category, notice_date::text AS notice_date
            FROM notices
            ORDER BY notice_date DESC, id DESC
            LIMIT $1;
          `,
          [limit]
        )
      : await queryWithRetry<NoticeRow[]>(
          sql,
          `
          SELECT id, title, excerpt, category, notice_date::text AS notice_date
          FROM notices
          ORDER BY notice_date DESC, id DESC;
        `)) as NoticeRow[];

    return rows.map(mapRow);
  } catch (error) {
    console.error('Failed to load notices from database.', error);
    return [];
  }
}

export async function createNotice(input: NoticeInput): Promise<NoticeRecord> {
  const sql = getSqlClient();
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  await ensureNoticesTable();

  const rows = await queryWithRetry<NoticeRow[]>(
    sql,
    `
      INSERT INTO notices (title, excerpt, category, notice_date)
      VALUES ($1, $2, $3, $4::date)
      RETURNING id, title, excerpt, category, notice_date::text AS notice_date;
    `,
    [input.title, input.excerpt, input.category, input.dateValue]
  ) as NoticeRow[];

  return mapRow(rows[0]);
}

export async function updateNotice(id: number, input: NoticeInput): Promise<NoticeRecord | null> {
  const sql = getSqlClient();
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  await ensureNoticesTable();

  const rows = await queryWithRetry<NoticeRow[]>(
    sql,
    `
      UPDATE notices
      SET
        title = $1,
        excerpt = $2,
        category = $3,
        notice_date = $4::date,
        updated_at = NOW()
      WHERE id = $5
      RETURNING id, title, excerpt, category, notice_date::text AS notice_date;
    `,
    [input.title, input.excerpt, input.category, input.dateValue, id]
  ) as NoticeRow[];

  return rows[0] ? mapRow(rows[0]) : null;
}

export async function deleteNotice(id: number): Promise<boolean> {
  const sql = getSqlClient();
  if (!sql) {
    throw new Error('DATABASE_URL is not configured.');
  }

  await ensureNoticesTable();

  const rows = await queryWithRetry<NoticeIdRow[]>(
    sql,
    `
      DELETE FROM notices
      WHERE id = $1
      RETURNING id;
    `,
    [id]
  ) as NoticeIdRow[];

  return rows.length > 0;
}
