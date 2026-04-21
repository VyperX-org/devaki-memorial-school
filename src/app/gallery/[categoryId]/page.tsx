
import Image from '@/components/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Camera, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params: Promise<{ categoryId: string }>;
};

const categoryData: Record<string, { title: string; description: string }> = {
  campus: {
    title: 'Campus Life',
    description: 'Explore our world-class infrastructure, green gardens, and modern buildings.'
  },
  laboratory: {
    title: 'Laboratories',
    description: 'State-of-the-art facilities for Science, Computers, and Research.'
  },
  events: {
    title: 'Events & Festivals',
    description: 'Capturing moments from our annual functions, sports meets, and cultural fests.'
  },
  year: {
    title: 'Year Pages',
    description: 'Explore our academic journey through the years, from our foundation in 2002 to the present.'
  }
};

export default async function CategoryGalleryPage({ params }: Props) {
  const { categoryId } = await params;
  const category = categoryData[categoryId];

  if (!category) {
    notFound();
  }

  const isYearCategory = categoryId === 'year';
  
  // Generate years from 2025 down to 2002
  const years = Array.from({ length: 2025 - 2002 + 1 }, (_, i) => 2025 - i);

  // Map categoryId to the prefix used in placeholder-images.json
  const prefixMap: Record<string, string> = {
    campus: 'campus',
    laboratory: 'lab',
    events: 'event'
  };
  const prefix = prefixMap[categoryId];

  // Filter images for non-year categories
  const filteredImages = prefix 
    ? PlaceHolderImages.filter(img => 
        img.id.startsWith(prefix) && 
        img.id !== `${prefix}-gallery` &&
        !img.id.startsWith('year-')
      )
    : [];

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Link href="/gallery" className="mb-6">
              <Button variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-white hover:text-primary gap-2">
                <ChevronLeft className="h-4 w-4" /> Back to Gallery
              </Button>
            </Link>
            <div className="p-3 bg-secondary rounded-full mb-4">
              <Camera className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{category.title}</h1>
            <p className="text-xl opacity-80 max-w-2xl">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isYearCategory ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {years.map((year) => (
                <Link key={year} href={`/gallery/year/${year}`} className="group">
                  <Card className="h-full overflow-hidden border-none shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1 bg-white">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] bg-primary/5 flex flex-col items-center justify-center p-4 text-center group-hover:bg-primary/10 transition-colors">
                        <CalendarDays className="h-10 w-10 text-secondary mb-3 opacity-60" />
                        <span className="text-2xl font-headline font-bold text-primary">{year}</span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2 font-bold">Year Book</span>
                      </div>
                      <div className="p-3 border-t bg-white">
                        <p className="text-xs text-center text-muted-foreground font-medium">Session {year}-{year + 1}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.length > 0 ? (
                filteredImages.map((img) => (
                  <div key={img.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border bg-white">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold">{img.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-muted rounded-3xl border border-dashed">
                  <p className="text-muted-foreground">No images found for this category yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
