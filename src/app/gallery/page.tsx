
import Image from '@/components/SafeImage';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Building2, Beaker, Calendar, Clock } from 'lucide-react';

export default function GalleryPage() {
  const categories = [
    { 
      id: 'campus', 
      title: 'Campus Life', 
      icon: <Building2 />, 
      img: PlaceHolderImages.find(i => i.id === 'campus-gallery'),
      desc: 'Explore our world-class infrastructure and facilities.'
    },
    { 
      id: 'laboratory', 
      title: 'Laboratories', 
      icon: <Beaker />, 
      img: PlaceHolderImages.find(i => i.id === 'lab-gallery'),
      desc: 'Peek into our science and computer labs.'
    },
    { 
      id: 'events', 
      title: 'Events', 
      icon: <Calendar />, 
      img: PlaceHolderImages.find(i => i.id === 'event-gallery'),
      desc: 'Memories from our annual festivals and sports.'
    },
    { 
      id: 'year', 
      title: 'Year Pages', 
      icon: <Clock />, 
      img: PlaceHolderImages.find(i => i.id === 'year-gallery'),
      desc: 'Class highlights and graduation ceremonies.'
    },
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary rounded-full">
              <Camera className="h-8 w-8 text-secondary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Media Gallery</h1>
          <p className="text-xl opacity-80">Glimpses of life at Devaki Memorial School.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat, idx) => (
              <Link 
                key={cat.id} 
                href={`/gallery/${cat.id}`} 
                className="group animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{ animationDelay: `${idx * 150}ms`, animationDuration: '800ms' }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-2 bg-card">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={cat.img?.imageUrl || ''}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 p-2 bg-card/90 text-primary rounded-lg shadow-sm">
                      {cat.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-headline font-bold text-primary mb-2">{cat.title}</h2>
                    <p className="text-muted-foreground">{cat.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-secondary font-bold">
                      View Gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
