
import Image from '@/components/SafeImage';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  CreditCard, 
  Bell, 
  Image as ImageIcon, 
  ArrowRight,
  Target,
  Users,
  Award
} from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-aerial');
  const chairImg = PlaceHolderImages.find(img => img.id === 'chairperson');

  const importantLinks = [
    { title: 'Admissions', icon: <FileText />, href: '/admission' },
    { title: 'Fees Portal', icon: <CreditCard />, href: '/fees-portal' },
    { title: 'Notice Board', icon: <Bell />, href: '/notices' },
    { title: 'Photo Gallery', icon: <ImageIcon />, href: '/gallery' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[500px] h-[80vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'School Aerial'}
          fill
          className="object-cover"
          priority
          data-ai-hint="school campus aerial"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4 md:p-6">
          <div className="max-w-4xl space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
              Inspiring Excellence, <br className="hidden sm:block" />
              Nurturing Character.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto px-2">
              Devaki Memorial School is dedicated to providing a transformative educational experience that prepares students for global challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
              <Button size="lg" asChild className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-10 h-12 text-lg">
                <Link href="/admission">Apply Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-white border-2 border-white bg-white/10 hover:bg-white hover:text-primary font-bold px-10 h-12 text-lg backdrop-blur-sm">
                <Link href="/about">Discover More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-12 bg-background border-b overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {importantLinks.map((link, index) => (
              <Link 
                key={link.title} 
                href={link.href}
                className={cn(
                  "group flex flex-col items-center p-6 rounded-xl bg-card border hover:border-primary hover:shadow-md transition-all text-center animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {link.icon}
                </div>
                <h3 className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest">
                Our Foundation
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Legacy of Excellence Since 2002</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Devaki Memorial School, established in 2002 in Rajarhat, Kolkata, is a co-educational English medium institution affiliated with CISCE. Operated by the Kajormal Ji Agarwal Charitable Trust, we are dedicated to nurturing well-rounded individuals through academic excellence and strong moral values.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Offering classes from Nursery to Class XII, we foster a culture of curiosity, discipline, and respect in a modern campus environment.
              </p>
              <Button variant="link" asChild className="p-0 h-auto text-primary font-bold group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn more about us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <Card className="bg-card p-4 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow">
                <Target className="h-8 w-8 text-primary" />
                <h4 className="font-bold">Focus</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Student-centric learning approach.</p>
              </Card>
              <Card className="bg-card p-4 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow">
                <Users className="h-8 w-8 text-secondary" />
                <h4 className="font-bold">Community</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Kajormal Ji Agarwal Trust.</p>
              </Card>
              <Card className="bg-card p-4 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow">
                <Award className="h-8 w-8 text-secondary" />
                <h4 className="font-bold">Affiliation</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">CISCE Affiliated Board.</p>
              </Card>
              <Card className="bg-primary text-primary-foreground p-4 sm:p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-shadow">
                <div className="text-2xl sm:text-3xl font-bold">24+ Years</div>
                <h4 className="font-bold">Legacy</h4>
                <p className="text-xs sm:text-sm opacity-80">Serving Rajarhat, Kolkata.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Chairperson */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center animate-fade-in-up">
            <div className="w-64 h-64 relative shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <Image
                src={chairImg?.imageUrl || ''}
                alt="Mr. K.C.Agrawal"
                fill
                className="object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold text-primary">A Message from the Trust</h2>
              <blockquote className="italic text-xl text-muted-foreground leading-relaxed line-clamp-4">
                "Devaki Memorial School was founded in 2002 with the vision of creating a nurturing environment that blends academic excellence with strong moral and cultural values. We strive to shape not just minds, but character."
              </blockquote>
              <div>
                <p className="font-bold text-lg text-primary">Mr. K.C.Agrawal</p>
                <p className="text-muted-foreground">Chairman, Kajormal Ji Agarwal Charitable Trust</p>
                <Link href="/leadership#chairperson" className="text-secondary font-bold hover:underline text-sm block mt-2">
                  Read Full Message →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
