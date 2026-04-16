import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing in .env');
}

const sql = neon(databaseUrl);

await sql.query(`
  CREATE TABLE IF NOT EXISTS notices (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Academic', 'Event', 'Holiday', 'Achievement')),
    notice_date DATE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );
`);

await sql.query(`
  CREATE INDEX IF NOT EXISTS idx_notices_notice_date
  ON notices (notice_date DESC, id DESC);
`);

const rows = await sql.query('SELECT COUNT(*)::int AS count FROM notices;');
console.log('Connected to Neon. notices_count=', rows[0]?.count ?? 0);
