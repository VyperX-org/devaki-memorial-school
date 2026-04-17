
import Image from '@/components/SafeImage';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { History, Eye, Target, Quote, UserCircle } from 'lucide-react';

export default function AboutPage() {
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal');

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">About Devaki Memorial School</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Nurturing well-rounded individuals through academic excellence and strong moral values.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Narrative */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* History */}
              <div className="space-y-6 animate-fade-in-up">
                <div className="flex items-center gap-3 text-primary">
                  <History className="h-8 w-8" />
                  <h2 className="text-3xl font-headline font-bold">Our Heritage</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Devaki Memorial School, established in 2002 in Rajarhat, Kolkata, is a co-educational English medium institution affiliated with CISCE. Operated by the Kajormal Ji Agarwal Charitable Trust, the school is dedicated to nurturing well-rounded individuals through a blend of academic excellence and strong moral values.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Offering classes from Nursery to Class XII, the school fosters a culture of curiosity, discipline, and respect. Our modern campus features advanced science and computer labs, a rich library, and dedicated spaces for robotics and the arts. Students benefit from extensive sports facilities and co-curricular programs that support their physical and creative growth.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a team of passionate educators and a focus on holistic development, Devaki Memorial School empowers students to grow into confident, compassionate, and future-ready citizens, prepared to lead and serve in an ever-changing world.
                </p>
              </div>

              {/* Vision & Mission Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-md bg-card hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Eye className="h-6 w-6 text-secondary" />
                    <CardTitle className="font-headline">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        To provide top-level academic training.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        To provide mental, moral, physical, and emotional development of the child.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        To enhance the quality of education and ensure brilliant academic results.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        To inculcate in the young mind the importance of character, discipline, and good habits.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        To make today's child a responsible, sincere, and trustworthy Indian citizen of the future.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-card hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Target className="h-6 w-6 text-secondary" />
                    <CardTitle className="font-headline">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        Provide a balanced and inclusive education that cultivates academic excellence, creativity, and critical thinking.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        Foster a safe, supportive, and inspiring environment where students feel valued, respected, and motivated to achieve their full potential.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        Instill strong moral values, cultural awareness, and a spirit of community service.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        Encourage innovation, leadership, and resilience through diverse co-curricular and extracurricular opportunities.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-secondary font-bold">•</span>
                        Equip students with the skills and mindset needed to become confident, compassionate, and responsible global citizens.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Educator Quote */}
              <div className="flex gap-6 items-start p-6 bg-card shadow-sm border rounded-xl reveal">
                <Quote className="h-10 w-10 text-secondary shrink-0" />
                <div>
                  <p className="text-xl font-headline italic mb-2">"Education is not the filling of a pail, but the lighting of a fire."</p>
                  <cite className="font-bold text-primary">— W.B. Yeats</cite>
                </div>
              </div>

            </div>

            {/* Sidebar / Desks Links */}
            <div className="space-y-8">
              <div className="sticky top-24 reveal">
                <h3 className="text-xl font-bold mb-6 text-primary border-b pb-2">Leadership</h3>
                <div className="space-y-4">
                  {[
                    { name: "Chairperson's Desk", href: "/leadership#chairperson", role: "Mr. K.C.Agrawal" },
                    { name: "Principal's Desk", href: "/leadership#principal", role: "Mrs. Sipra Niyogi" },
                  ].map((desk) => (
                    <Link 
                      key={desk.name} 
                      href={desk.href}
                      className="flex items-center gap-4 p-4 bg-card hover:bg-primary hover:text-primary-foreground transition-all rounded-xl border shadow-sm group"
                    >
                      <UserCircle className="h-10 w-10 text-secondary group-hover:text-primary-foreground" />
                      <div>
                        <p className="font-bold leading-none">{desk.name}</p>
                        <p className="text-xs opacity-70 mt-1">{desk.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-12 group">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={principalImg?.imageUrl || ''}
                      alt="Principal"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint="professional educator"
                    />
                  </div>
                  <h4 className="font-bold text-primary">Mrs. Sipra Niyogi</h4>
                  <p className="text-sm text-muted-foreground mb-4">Principal, DMS</p>
                  <p className="text-sm leading-relaxed italic">"Our commitment to every student is absolute. We inspire curiosity and respect."</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
