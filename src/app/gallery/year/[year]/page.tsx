
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CalendarDays } from 'lucide-react';

type Props = {
  params: Promise<{ year: string }>;
};

export default async function YearSpecificGalleryPage({ params }: Props) {
  const { year } = await params;

  // Filter images where the ID starts with "year-[year]-"
  const filteredImages = PlaceHolderImages.filter(img => 
    img.id.startsWith(`year-${year}-`)
  );

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Link href="/gallery/year" className="mb-6">
              <Button variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-white hover:text-primary gap-2">
                <ChevronLeft className="h-4 w-4" /> Back to Year List
              </Button>
            </Link>
            <div className="p-3 bg-secondary rounded-full mb-4">
              <CalendarDays className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Academic Year {year}</h1>
            <p className="text-xl opacity-80 max-w-2xl">Memories and highlights from the {year}-{parseInt(year) + 1} session.</p>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
                <div key={img.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border bg-white">
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
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
                <p className="text-muted-foreground text-lg">No images found for the year {year} yet.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Add images to your gallery data with IDs starting with <code className="bg-background px-1 rounded">year-{year}-</code> to see them here.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
