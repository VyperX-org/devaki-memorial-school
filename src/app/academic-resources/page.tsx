import Link from 'next/link';
import { BookOpen, FileText, LibraryBig, MonitorSmartphone, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const resources = [
  {
    icon: <FileText className="h-6 w-6 text-secondary" />,
    title: 'Syllabus & Notes',
    desc: 'Subject outlines, teacher notes, and revision sheets designed for steady academic progress.',
  },
  {
    icon: <LibraryBig className="h-6 w-6 text-secondary" />,
    title: 'Library Support',
    desc: 'Curated reading lists, reference materials, and guided study recommendations for every stage.',
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-secondary" />,
    title: 'Digital Learning',
    desc: 'Online references, presentations, and smart-class materials that support classroom teaching.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-secondary" />,
    title: 'Practice Material',
    desc: 'Worksheets, model question sets, and exam practice resources for regular self-assessment.',
  },
];

export default function AcademicResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link href="/academics" className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground mb-6">
            <ChevronLeft className="h-4 w-4" />
            Back to Academics
          </Link>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Academic Resources</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/90">
            A simple reference hub for study material, practice support, and classroom enrichment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/*

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border bg-card shadow-sm">
              <img
                src="https://i.ibb.co/jYPWqyH/image.png"
                alt="Academic resources and classroom learning"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-2xl overflow-hidden border bg-card shadow-sm">
                <img
                  src="https://i.ibb.co/ccrt9K2K/image.png"
                  alt="Academic resources support"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-sm flex items-center">
                <p className="text-muted-foreground leading-relaxed">
                  Resources are organized to support both classwork and revision, making it easier for students to stay consistent and prepared.
                </p>
              </div>
            </div>
          </div>

          */}
        </div>
      </section>
    </div>
  );
}
