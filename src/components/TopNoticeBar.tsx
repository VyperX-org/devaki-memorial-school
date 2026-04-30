
import Link from 'next/link';
import { Bell, Mail, Phone, Search } from 'lucide-react';
import { listNotices } from '@/lib/notices-db';

export default async function TopNoticeBar() {
  const notices = await listNotices(8);
  const noticeTitles = notices.map((notice) => notice.title);

  return (
    <div className="bg-secondary text-secondary-foreground py-2.5 border-b border-secondary/20">
      <div className="container mx-auto px-4 flex items-center gap-2">
        <Link
          href="/notices"
          className="group min-w-0 flex-1 flex items-center hover:opacity-90 transition-opacity overflow-hidden pr-2"
        >
          {/* Static Label */}
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest bg-secondary-foreground text-secondary px-3 py-1 rounded-sm shrink-0 z-20 relative mr-4 shadow-sm">
            <Bell className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Latest Updates</span>
            <span className="sm:hidden">Updates</span>
          </div>

          {/* Marquee Container */}
          <div className="flex-1 overflow-hidden relative h-6">
            <div className="animate-marquee whitespace-nowrap inline-block font-medium text-sm">
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
        </Link>

        <div className="hidden lg:flex items-center gap-2 shrink-0 rounded-md bg-secondary-foreground/10 px-2 py-1 border border-secondary-foreground/20">
          <form action="/search" method="get" className="relative">
            <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-foreground/70" />
            <input
              type="search"
              name="q"
              placeholder="Search everything..."
              className="h-8 w-36 xl:w-44 rounded-md bg-secondary-foreground/95 text-secondary placeholder:text-secondary/70 pl-8 pr-2 text-xs outline-none border border-secondary-foreground/20 focus:border-secondary-foreground/40"
              aria-label="Search website"
            />
          </form>

          <a
            href="mailto:devakischool@rediffmail.com"
            className="inline-flex items-center gap-1 text-[11px] font-semibold hover:underline underline-offset-2 whitespace-nowrap"
            aria-label="Email Devaki Memorial School"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>devakischool@rediffmail.com</span>
          </a>

          <a
            href="tel:+9103325737190"
            className="inline-flex items-center gap-1 text-[11px] font-semibold hover:underline underline-offset-2 whitespace-nowrap"
            aria-label="Call on landline one"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>(033) 2573 7190</span>
          </a>

          <a
            href="tel:+9103332991050"
            className="inline-flex items-center gap-1 text-[11px] font-semibold hover:underline underline-offset-2 whitespace-nowrap"
            aria-label="Call on landline two"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>(033) 3299 1050</span>
          </a>
        </div>

        <div className="lg:hidden shrink-0 flex flex-col items-end leading-tight text-[10px] sm:text-[11px] font-semibold">
          <a href="mailto:devakischool@rediffmail.com" className="hover:underline underline-offset-2">
            devakischool@rediffmail.com
          </a>
          <a href="tel:+9103325737190" className="hover:underline underline-offset-2">
            (033) 2573 7190
          </a>
          <a href="tel:+9103332991050" className="hover:underline underline-offset-2">
            (033) 3299 1050
          </a>
        </div>
      </div>
    </div>
  );
}
