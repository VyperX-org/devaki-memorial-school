
"use client";

import Link from 'next/link';
import { Bell } from 'lucide-react';
import { NOTICES } from '@/lib/notices';

export default function TopNoticeBar() {
  // Use titles from the shared notices data
  const noticeTitles = NOTICES.map(n => n.title);

  return (
    <Link 
      href="/notices" 
      className="block bg-secondary text-secondary-foreground py-2 group hover:bg-secondary/90 transition-colors border-b border-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex items-center">
        {/* Static Label */}
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest bg-secondary-foreground text-secondary px-3 py-1 rounded-sm shrink-0 z-20 relative mr-4 shadow-sm">
          <Bell className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Latest Updates</span>
          <span className="sm:hidden">Updates</span>
        </div>
        
        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative h-5">
          <div className="animate-marquee whitespace-nowrap inline-block font-medium">
            {noticeTitles.map((title, idx) => (
              <span key={idx} className="mx-8">
                • {title}
              </span>
            ))}
            {/* Duplicate for seamless looping */}
            {noticeTitles.map((title, idx) => (
              <span key={`dup-${idx}`} className="mx-8">
                • {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
