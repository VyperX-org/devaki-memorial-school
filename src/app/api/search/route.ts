import { NextRequest, NextResponse } from 'next/server';
import { listNotices } from '@/lib/notices-db';
import { academicSections } from '@/lib/academic-sections';

// All searchable pages
const searchablePages = [
  { name: 'HOME', href: '/', type: 'page' },
  { name: 'ABOUT', href: '/about', type: 'page' },
  { name: 'ADMISSION', href: '/admission', type: 'page' },
  { name: 'ACADEMICS', href: '/academics', type: 'page' },
  { name: 'GALLERY', href: '/gallery', type: 'page' },
  { name: 'NOTICES', href: '/notices', type: 'page' },
  { name: 'CONTACT', href: '/contact', type: 'page' },
  { name: 'ACHIEVEMENTS', href: '/achievements', type: 'page' },
  { name: 'ACADEMIC RESOURCES', href: '/academic-resources', type: 'page' },
  { name: 'CHAIRMAN\'S DESK', href: '/leadership#chairperson', type: 'page' },
  { name: 'PRINCIPAL\'S DESK', href: '/leadership#principal', type: 'page' },
  { name: 'FACULTY', href: '/faculty', type: 'page' },
  { name: 'LEADERSHIP', href: '/leadership', type: 'page' },
  { name: 'CAREERS', href: '/careers', type: 'page' },
  { name: 'FEES PORTAL', href: '/fees-portal', type: 'page' },
  { name: 'APPLICATION FORM', href: '/application-form', type: 'page' },
  ...academicSections.map((section) => ({
    name: section.title,
    href: section.href,
    type: 'page' as const,
  })),
];

export type SearchResult = {
  id?: string;
  name: string;
  title?: string;
  excerpt?: string;
  href: string;
  type: 'page' | 'notice';
  category?: string;
  date?: string;
  relevance: number;
};

function calculateRelevance(query: string, text: string): number {
  const lowerQuery = query.toLowerCase();
  const lowerText = text.toLowerCase();
  
  // Exact match at start
  if (lowerText.startsWith(lowerQuery)) return 100;
  
  // Word match at start
  if (lowerText.split(/\s+/).some(word => word.startsWith(lowerQuery))) return 80;
  
  // Contains match
  if (lowerText.includes(lowerQuery)) return 60;
  
  // Fuzzy match - count matching characters
  const matches = lowerQuery.split('').filter(char => lowerText.includes(char)).length;
  return Math.floor((matches / lowerQuery.length) * 40);
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q')?.trim() || '';
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50);

    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] });
    }

    const results: SearchResult[] = [];

    // Search in pages
    for (const page of searchablePages) {
      const pageRelevance = calculateRelevance(query, page.name) ||
                           calculateRelevance(query, page.href);
      
      if (pageRelevance > 20) {
        results.push({
          name: page.name,
          href: page.href,
          type: 'page',
          relevance: pageRelevance,
        });
      }
    }

    // Search in notices
    try {
      const notices = await listNotices();
      for (const notice of notices) {
        const titleRelevance = calculateRelevance(query, notice.title);
        const excerptRelevance = calculateRelevance(query, notice.excerpt);
        const categoryRelevance = calculateRelevance(query, notice.category);
        
        const maxRelevance = Math.max(titleRelevance, excerptRelevance, categoryRelevance);
        
        if (maxRelevance > 20) {
          results.push({
            id: notice.id.toString(),
            name: notice.title,
            title: notice.title,
            excerpt: notice.excerpt,
            href: `/notices?highlight=${notice.id}`,
            type: 'notice',
            category: notice.category,
            date: notice.date,
            relevance: maxRelevance + 10, // Notices get slight boost
          });
        }
      }
    } catch (error) {
      console.error('Error searching notices:', error);
      // Continue without notice results if there's an error
    }

    // Sort by relevance and limit results
    const sortedResults = results.sort((a, b) => b.relevance - a.relevance).slice(0, limit);

    return NextResponse.json({
      results: sortedResults,
      query,
      total: sortedResults.length,
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Search failed', results: [] },
      { status: 500 }
    );
  }
}
