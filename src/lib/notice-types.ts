export const NOTICE_CATEGORIES = [
  'Academic',
  'Event',
  'Holiday',
  'Achievement',
] as const;

export type NoticeCategory = (typeof NOTICE_CATEGORIES)[number];

export type NoticeRecord = {
  id: number;
  title: string;
  excerpt: string;
  category: NoticeCategory;
  date: string;
  dateValue: string;
};

export type NoticeInput = {
  title: string;
  excerpt: string;
  category: NoticeCategory;
  dateValue: string;
};
