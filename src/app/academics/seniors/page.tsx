import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { getAcademicSectionBySlug } from '@/lib/academic-sections';

export default function SeniorAcademicsPage() {
  const section = getAcademicSectionBySlug('seniors');

  if (!section) {
    return null;
  }

  return (
    <div className="bg-background">
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link href="/academics" className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground mb-6">
            <ChevronLeft className="h-4 w-4" />
            Back to Academics
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">{section.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/90">{section.intro}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-primary">Highlights</h2>
            <ul className="space-y-3">
              {section.highlights.map((item) => (
                <li key={item} className="rounded-lg border bg-card p-4 text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {section.gallery.map((image, index) => (
              <div key={image + index} className="overflow-hidden rounded-xl border bg-muted">
                <img src={image} alt={`${section.title} classroom ${index + 1}`} className="h-56 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
