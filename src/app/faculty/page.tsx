import Image from '@/components/SafeImage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Phone } from 'lucide-react';
import facultyData from '@/lib/faculty-data.json';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  email: string;
  phone: string;
}

export default function FacultyPage() {
  const faculty: FacultyMember[] = facultyData.faculty;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary rounded-full">
              <Users className="h-8 w-8 text-secondary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Faculty</h1>
          <p className="text-xl opacity-80">Meet the dedicated educators shaping future leaders</p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl rounded-3xl border bg-card px-6 py-16 shadow-sm md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
              Coming Soon
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Faculty profiles are being updated.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              We are preparing a refreshed faculty section and will publish it soon.
            </p>
          </div>
        </div>
      </section>

      {/*
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {faculty.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  />
                </div>

                <CardHeader className="pb-3 pt-4 flex-grow">
                  <CardTitle className="text-sm md:text-base line-clamp-2">{member.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm font-semibold text-primary line-clamp-1">
                    {member.position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="line-clamp-1">
                      <span className="font-semibold">Dept: </span>
                      <span className="text-muted-foreground">{member.department}</span>
                    </div>
                    <div className="line-clamp-1">
                      <span className="font-semibold">Exp: </span>
                      <span className="text-muted-foreground">{member.experience}</span>
                    </div>
                    <div className="line-clamp-1">
                      <span className="font-semibold">Qual: </span>
                      <span className="text-muted-foreground truncate">{member.qualification}</span>
                    </div>

                    <div className="pt-2 border-t space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors truncate">
                        <Mail className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        <a href={`mailto:${member.email}`} className="truncate text-xs md:text-sm hover:underline">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        <a href={`tel:${member.phone}`} className="text-xs md:text-sm hover:underline">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
