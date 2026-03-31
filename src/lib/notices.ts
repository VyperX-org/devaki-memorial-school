
export type Notice = {
  id: number;
  title: string;
  date: string;
  category: 'Academic' | 'Event' | 'Holiday' | 'Achievement';
  excerpt: string;
};

export const NOTICES: Notice[] = [
  { 
    id: 1, 
    title: "New session 2026-27", 
    date: "Mar 15, 2026", 
    category: "Academic",
    excerpt: "New session 2026-27 commences from 1st April 2026."
  },
  { 
    id: 2, 
    title: "Republic Day 2026", 
    date: "Jan 25, 2026", 
    category: "Event",
    excerpt: "Republic Day Celebration will be held in the campus on 26th January 2026."
  },
  { 
    id: 3, 
    title: "Winter Vacation", 
    date: "Dec 22, 2025", 
    category: "Holiday",
    excerpt: "The school will remain closed for winter break from Dec 24th to Jan 2nd. School reopens on Jan 3rd 2026."
  },
  { 
    id: 4, 
    title: "Annual Sports Meet 2025", 
    date: "Dec 10, 2025", 
    category: "Achievement",
    excerpt: "DMS celebrates a successful annual sports meet with record-breaking participation."
  }
];
