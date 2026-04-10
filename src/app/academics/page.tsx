import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Rocket, Music, Microscope, TrendingUp } from 'lucide-react';

export default function AcademicsPage() {
  const subjects = [
    { icon: <Microscope />, name: "Science", desc: "Physics, Chemistry, Biology with integrated lab sessions." },
    { icon: <TrendingUp />, name: "Commerce", desc: "Accountancy, Business Studies, and Economics." },
    { icon: <Rocket />, name: "Technology", desc: "Computer Science, Coding, and Information Technology." },
    { icon: <Trophy />, name: "Mathematics", desc: "Developing logical reasoning and problem-solving skills." },
  ];

  return (
    <div className="bg-background">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Academics & Activities</h1>
          <p className="text-xl opacity-80">A holistic approach to learning and growth.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="studies" className="w-full">
            <div className="flex justify-center mb-12 animate-in fade-in zoom-in-95 duration-700">
              <TabsList className="bg-card border shadow-sm p-1 h-14">
                <TabsTrigger value="studies" className="text-lg px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Studies</TabsTrigger>
                <TabsTrigger value="sports" className="text-lg px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Sports</TabsTrigger>
                <TabsTrigger value="extra" className="text-lg px-8 h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Co-Curricular</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="studies" className="animate-in fade-in zoom-in-95 duration-700">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjects.map((sub, index) => (
                  <Card 
                    key={sub.name} 
                    className="bg-card text-center hover:shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {sub.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{sub.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{sub.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-16 max-w-4xl mx-auto p-10 bg-card rounded-3xl border shadow-sm space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h3 className="text-2xl font-headline font-bold text-primary">Curriculum Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Devaki Memorial School follows the CISCE (Council for the Indian School Certificate Examinations) curriculum for both ICSE (Class X) and ISC (Class XII). Our teaching methodology emphasizes conceptual clarity over rote learning, ensuring a strong foundation in core subjects across Science and Commerce streams.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="animate-in fade-in zoom-in-95 duration-700">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                  <h2 className="text-3xl font-headline font-bold text-primary">Nurturing Champions</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At DMS, we believe a healthy body is essential for a healthy mind. Our sports program is an integral part of the daily schedule.
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {["Football", "Cricket", "Basketball", "Badminton", "Karate", "Yoga"].map((s, idx) => (
                      <li key={s} className="flex items-center gap-2 p-3 bg-card rounded-xl border shadow-sm animate-in fade-in slide-in-from-left-4 fill-mode-both" style={{ animationDelay: `${idx * 100}ms` }}>
                        <Trophy className="h-4 w-4 text-secondary" />
                        <span className="font-bold">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
                  <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative shadow-md">
                    <img src="https://picsum.photos/seed/sports1/400/400" alt="Sports" className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative translate-y-8 shadow-md">
                    <img src="https://picsum.photos/seed/sports2/400/400" alt="Sports" className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="extra" className="animate-in fade-in zoom-in-95 duration-700">
              <div className="space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                  <h2 className="text-3xl font-headline font-bold text-primary">Beyond the Classroom</h2>
                  <p className="text-muted-foreground">We encourage students to explore their creative and intellectual interests through various clubs and competitions.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <Music className="h-8 w-8 text-secondary mb-2" />, title: "Arts & Culture", desc: "Music, Dance, Drama, and Fine Arts clubs participate in inter-school fests annually." },
                    { icon: <Trophy className="h-8 w-8 text-secondary mb-2" />, title: "Competitions", desc: "Internal debate, quiz, and speech competitions occur monthly to build confidence." },
                    { icon: <Trophy className="h-8 w-8 text-secondary mb-2" />, title: "Social Work", desc: "Our 'Giving Back' initiative involves students in local community service projects." }
                  ].map((card, idx) => (
                    <Card key={idx} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-8 fill-mode-both" style={{ animationDelay: `${idx * 200}ms` }}>
                      <CardHeader>
                        {card.icon}
                        <CardTitle className="font-headline">{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{card.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
