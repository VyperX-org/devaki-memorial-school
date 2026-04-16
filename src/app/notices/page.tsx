
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar } from 'lucide-react';
import { listNotices } from '@/lib/notices-db';

export default async function NoticeBoardPage() {
  const notices = await listNotices();

  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Notice Board</h1>
          <p className="text-xl opacity-80">Stay updated with the latest news and announcements.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Notices */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="flex items-center gap-3 text-primary">
                  <Bell className="h-6 w-6" />
                  <h2 className="text-2xl font-headline font-bold">Latest Announcements</h2>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  Total Notices: {notices.length}
                </Badge>
              </div>

              <div className="space-y-6">
                {notices.map((notice, idx) => (
                  <Card 
                    key={notice.id} 
                    className="bg-card border-none shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-secondary/10 text-secondary border-none">
                          {notice.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground gap-1">
                          <Calendar className="h-3 w-3" /> {notice.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground">{notice.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
                {notices.length === 0 && (
                  <Card className="bg-card border-dashed border-2">
                    <CardContent className="p-6 text-muted-foreground">
                      No notices published yet.
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="bg-primary p-8 rounded-3xl text-primary-foreground space-y-4 shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-headline font-bold">Academic Calendar</h3>
                <p className="text-sm opacity-80">Download the full academic planner for the year.</p>
                <Button asChild className="w-full bg-secondary text-secondary-foreground font-bold hover:bg-secondary/90 transition-all">
                  <a href="/docs/calendar-2026-27.pdf" target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
