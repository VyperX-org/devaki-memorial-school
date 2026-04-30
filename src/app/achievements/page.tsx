
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, GraduationCap, Medal, Target } from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      category: 'Academic Excellence',
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      items: [
        { title: '100% ICSE Pass Rate', year: '2024', desc: 'Maintained a perfect passing record for the 15th consecutive year.' },
        { title: 'Regional Toppers', year: '2023', desc: 'Three students ranked in the top 10 of the West Bengal region for ISC Commerce.' },
        { title: 'National Science Olympiad', year: '2023', desc: '5 Gold medals and 12 Silver medals won by students across various grades.' },
      ]
    },
    {
      category: 'Sports & Athletics',
      icon: <Trophy className="h-8 w-8 text-secondary" />,
      items: [
        { title: 'Inter-School Cricket Champions', year: '2024', desc: 'Winner of the Kolkata Junior Cricket League (Under-16).' },
        { title: 'State Karate Championship', year: '2023', desc: 'Our students secured 4 Gold and 2 Bronze medals at the West Bengal State Meet.' },
        { title: 'Annual Sports Meet Record', year: '2024', desc: 'New regional records set in 100m sprint and Long Jump by Class X students.' },
      ]
    },
    {
      category: 'Arts & Culture',
      icon: <Star className="h-8 w-8 text-accent" />,
      items: [
        { title: 'Inter-School Debate Winners', year: '2023', desc: 'First place at the "Vaktavya" Inter-School English Debate competition.' },
        { title: 'Cultural Fest Excellence', year: '2024', desc: 'Overall Championship trophy at the Rajarhat Cultural Harmony Festival.' },
        { title: 'Art & Design Award', year: '2023', desc: 'Student artwork featured in the "Emerging Artists of Bengal" exhibition.' },
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      
    {/*
      // Header
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary rounded-full animate-bounce">
              <Award className="h-8 w-8 text-secondary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Achievements</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Celebrating the hard work, dedication, and excellence of our students and faculty.</p>
        </div>
      </section>

      // Highlights Grid
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {achievements.map((group, groupIdx) => (
              <div key={group.category} className="space-y-8">
                <div className="flex items-center gap-4 border-b pb-4 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both" style={{ animationDelay: `${groupIdx * 200}ms` }}>
                  <div className="p-2 bg-card rounded-lg shadow-sm border">
                    {group.icon}
                  </div>
                  <h2 className="text-3xl font-headline font-bold text-primary">{group.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {group.items.map((item, idx) => (
                    <Card 
                      key={idx} 
                      className="bg-card border-none shadow-sm hover:shadow-md transition-shadow group overflow-hidden animate-in fade-in slide-in-from-bottom-8 fill-mode-both" 
                      style={{ animationDelay: `${(groupIdx * 3 + idx) * 100}ms` }}
                    >
                      <CardHeader className="relative">
                        <div className="absolute top-0 right-0 p-4">
                          <Badge variant="outline" className="border-primary text-primary font-bold">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-headline font-bold pt-4 group-hover:text-secondary transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{item.desc}"
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      */}

      {/* Closing Quote */}
      <section className="py-20 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-1000">
            <Medal className="h-12 w-12 text-secondary mx-auto opacity-40" />
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">"The roots of education are bitter, but the fruit is sweet."</h3>
            <p className="text-muted-foreground font-bold">— Aristotle</p>
          </div>
        </div>
      </section>
    </div>
  );
}
