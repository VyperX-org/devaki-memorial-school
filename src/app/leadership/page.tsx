
import Image from '@/components/SafeImage';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function LeadershipPage() {
  const chairImg = PlaceHolderImages.find(img => img.id === 'chairperson');
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal');

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Leadership</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Visionaries dedicated to nurturing excellence and character.</p>
        </div>
      </section>

      {/* Chairperson's Desk */}
      <section id="chairperson" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 items-start animate-fade-in-left">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <Image
                  src={chairImg?.imageUrl || ''}
                  alt="Mr. K.C.Agrawal"
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                  data-ai-hint="professional portrait"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-headline font-bold text-primary">Mr. K.C.Agrawal</h2>
                <p className="text-secondary font-bold uppercase tracking-wider text-sm">Chairman</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="flex gap-2 text-secondary">
                <Quote className="h-8 w-8 fill-current opacity-20" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary">Chairperson's Desk</h3>
              <div className="prose prose-lg text-muted-foreground space-y-4 max-w-none">
                <p>
                  Devaki Memorial School was founded in 2002 by Shri Kailash Chandra Agarwal under the Kajormal Ji Agarwal Charitable Trust with the vision of creating a nurturing environment that blends academic excellence with strong moral and cultural values. Located in Rajarhat, North 24 Parganas, the school stands as a beacon of holistic education.
                </p>
                <p>
                  Shri Agarwal envisioned an institution that shapes not just minds, but character—instilling compassion, responsibility, and integrity in every student. His commitment to all-round development is reflected in the school’s focus on co-curricular activities like art, music, yoga, and karate, offering students a platform to grow beyond textbooks.
                </p>
                <p>
                  The serene, green campus further complements this vision by providing a peaceful and inspiring atmosphere for learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl">
        <hr className="border-muted" />
      </div>

      {/* Principal's Desk */}
      <section id="principal" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 items-start animate-fade-in-right">
            <div className="md:order-2 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <Image
                  src={principalImg?.imageUrl || ''}
                  alt="Mrs. Sipra Niyogi"
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                  data-ai-hint="professional educator"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-headline font-bold text-primary">Mrs. Sipra Niyogi</h2>
                <p className="text-secondary font-bold uppercase tracking-wider text-sm">Principal</p>
              </div>
            </div>
            <div className="md:col-span-2 md:order-1 space-y-6">
              <div className="flex gap-2 text-secondary">
                <Quote className="h-8 w-8 fill-current opacity-20" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary">Principal's Desk</h3>
              <div className="prose prose-lg text-muted-foreground space-y-4 max-w-none">
                <p>
                  Led by Principal Mrs. Sipra Niyogi, Devaki Memorial School focuses on excellence and holistic development. With a 20:1 student-teacher ratio, the school ensures personalized attention and a nurturing environment.
                </p>
                <p>
                  Mrs. Niyogi champions a balanced curriculum that encourages critical thinking, creativity, and cultural awareness. Her leadership fosters a space where students grow academically, socially, and emotionally—becoming confident, responsible citizens ready to contribute positively to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
