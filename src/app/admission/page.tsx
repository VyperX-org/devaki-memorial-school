
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Info, BookOpen, ClipboardList, FileDown, FileCheck, Users, GraduationCap, Calculator } from 'lucide-react';

export default function AdmissionPage() {
  const ageCriteria = [
    { grade: 'Pre Nursery', age: '3+ Yr' },
    { grade: 'Nursery', age: '4+ Yr' },
    { grade: 'UKG (KG)', age: '5+ Yr' },
    { grade: 'Class 1', age: '6+ Yr' },
    { grade: 'Class 2', age: '7+ Yr' },
    { grade: 'Class 3', age: '8+ Yr' },
    { grade: 'Class 4', age: '9+ Yr' },
    { grade: 'Class 5', age: '10+ Yr' },
    { grade: 'Class 6', age: '11+ Yr' },
    { grade: 'Class 7', age: '12+ Yr' },
    { grade: 'Class 8', age: '13+ Yr' },
    { grade: 'Class 9', age: '14+ Yr' },
  ];

  const timings = [
    { class: 'LOWER NURSERY TO K.G.', duration: '08:50 AM - 12:40 PM' },
    { class: 'CLASS I TO IV', duration: '08:50 AM - 02:10 PM' },
    { class: 'CLASS V TO XII', duration: '08:50 AM - 02:40 PM' },
  ];

  // const detailedFees = [
  //   { class: 'Pre Nursery', kit: '2300', exam: '1800', tuition: '1700', admission: '16100', activity: '1500', dev: '5000' },
  //   { class: 'Nursery', kit: '2300', exam: '1800', tuition: '1800', admission: '16100', activity: '1500', dev: '5000' },
  //   { class: 'UKG (KG)', kit: '2300', exam: '1800', tuition: '1700', admission: '16100', activity: '1500', dev: '5000' },
  //   { class: 'Class 1', kit: '2300', exam: '2100', tuition: '1750', admission: '16600', activity: '2250', dev: '5500' },
  //   { class: 'Class 2', kit: '2300', exam: '2100', tuition: '1750', admission: '16600', activity: '2250', dev: '5500' },
  //   { class: 'Class 3', kit: '2300', exam: '2100', tuition: '1750', admission: '16600', activity: '2250', dev: '5500' },
  //   { class: 'Class 4', kit: '2300', exam: '2100', tuition: '1750', admission: '16600', activity: '2250', dev: '5500' },
  //   { class: 'Class 5', kit: '2300', exam: '2800', tuition: '1800', admission: '19100', activity: '2500', dev: '6000' },
  //   { class: 'Class 6', kit: '2300', exam: '2800', tuition: '1800', admission: '19100', activity: '2500', dev: '6000' },
  //   { class: 'Class 7', kit: '2300', exam: '2800', tuition: '1800', admission: '19100', activity: '2500', dev: '6000' },
  //   { class: 'Class 8', kit: '2300', exam: '2800', tuition: '1800', admission: '19100', activity: '2500', dev: '6000' },
  //   { class: 'Class 9', kit: '2300', exam: '2700', tuition: '2050', admission: '22100', activity: '3050', dev: '6000' },
  //   { class: 'Class 10', kit: '2300', exam: '2700', tuition: '2050', admission: 'NA', activity: '3050', dev: '6000' },
  //   { class: 'Class 11', kit: '2300', exam: '2900', tuition: '2300', admission: '23100', activity: '3600', dev: '7000' },
  //   { class: 'Class 12', kit: '2300', exam: '2900', tuition: '2300', admission: 'NA', activity: '3600', dev: '7000' },
  // ];

  // const summaryFees = [
  //   { class: 'Pre Nursery', monthly: '1,825', yearly: '47,100' },
  //   { class: 'Nursery', monthly: '1,825', yearly: '47,100' },
  //   { class: 'UKG (KG)', monthly: '1,825', yearly: '47,100' },
  //   { class: 'Class 1', monthly: '1,937', yearly: '49,750' },
  //   { class: 'Class 2', monthly: '1,937', yearly: '49,750' },
  //   { class: 'Class 3', monthly: '1,937', yearly: '49,750' },
  //   { class: 'Class 4', monthly: '1,937', yearly: '49,750' },
  //   { class: 'Class 5', monthly: '2,008', yearly: '54,300' },
  //   { class: 'Class 6', monthly: '2,008', yearly: '54,300' },
  //   { class: 'Class 7', monthly: '2,008', yearly: '54,300' },
  //   { class: 'Class 8', monthly: '2,008', yearly: '54,300' },
  //   { class: 'Class 9', monthly: '2,304', yearly: '60,750' },
  //   { class: 'Class 10', monthly: '2,304', yearly: '38,650' },
  //   { class: 'Class 11', monthly: '2,600', yearly: '66,500' },
  //   { class: 'Class 12', monthly: '2,600', yearly: '43,400' },
  // ];

  const admissionSteps = [
    {
      title: "Application Form",
      desc: "Obtaining the application form is the initial step in the admissions procedure.",
      icon: <ClipboardList className="h-6 w-6" />
    },
    {
      title: "Submit the Form",
      desc: "After completing the application form, it must be submitted along with the required documents to the school's office.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Entrance Test",
      desc: "After receiving the application, the school administers an entrance examination to prospective students.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Interaction with Parents",
      desc: "After the entrance exam, the school administration may also interact with the prospective student's parents.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Final Selection",
      desc: "The school administration determines admission based on the student's performance on the entrance exam and their interaction with the parents.",
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-background">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Admissions Information</h1>
          <p className="text-xl opacity-80">Join the Devaki Memorial School family for the upcoming session.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-16">
            
            {/* Top Action Card */}
            <Card className="bg-card border-primary/10 shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
              <div className="bg-secondary p-4 text-secondary-foreground text-center font-bold">
                Online Admissions Open for the Session {new Date().getFullYear()}-{new Date().getFullYear() + 1}
              </div>
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl font-headline font-bold text-primary">Nurturing Future Leaders</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We invite curious minds and dedicated students to explore their potential. Apply today to secure a place in our nurturing academic environment.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                    <Link href="/application-form">Application Portal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/5 flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                    <a href="/docs/prospectus-2026.pdf" target="_blank" rel="noopener noreferrer">
                      <FileDown className="h-5 w-5" /> Download Prospectus
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Admission Process & Criteria */}
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-card shadow-sm border overflow-hidden animate-in fade-in slide-in-from-left-8 duration-1000">
                <CardHeader className="bg-primary/5 border-b py-6">
                  <CardTitle className="font-headline text-2xl text-primary text-center">Admission Procedure</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-8">
                    {admissionSteps.map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-start group animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary-foreground transition-colors duration-300">
                          {step.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-lg text-primary">{idx + 1}. {step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-dashed border-primary/20 animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both">
                      <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <Info className="h-5 w-5 text-secondary" />
                        Supporting Documents Required
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                        <li>Birth Certificate (Original & Photocopy)</li>
                        <li>Two copies of recent passport size photographs</li>
                        <li>Transfer Certificate (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
                {/* Age Limit Chart */}
                <Card className="bg-card shadow-sm border h-fit hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3 border-b pb-4">
                    <Info className="h-6 w-6 text-primary" />
                    <CardTitle className="font-headline">Age Limit Chart</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Class</TableHead>
                          <TableHead className="text-right">Age Limit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ageCriteria.map((item, idx) => (
                          <TableRow key={item.grade} className="animate-in fade-in fill-mode-both" style={{ animationDelay: `${idx * 50}ms` }}>
                            <TableCell className="font-bold">{item.grade}</TableCell>
                            <TableCell className="text-right">{item.age}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Timings */}
                <Card className="bg-card shadow-sm border h-fit hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3 border-b pb-4">
                    <Clock className="h-6 w-6 text-secondary" />
                    <CardTitle className="font-headline">School Timings</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {timings.map((time) => (
                        <div key={time.class} className="flex justify-between items-center p-3 rounded-lg bg-background border hover:border-secondary transition-colors duration-300">
                          <span className="font-bold text-primary text-sm">{time.class}</span>
                          <span className="text-muted-foreground text-sm font-medium">{time.duration}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detailed Fee Structure */}
            {/* <Card className="bg-card shadow-sm border overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <CardHeader className="flex flex-row items-center gap-3 border-b pb-4 bg-primary/5">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline">Detailed Fees Structure (Per Session)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="whitespace-nowrap">Class</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Learning Kit</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Exam Fees</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Monthly Tuition</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Admission Fee</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Activity Fees</TableHead>
                        <TableHead className="text-right whitespace-nowrap">Development Fees</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detailedFees.map((row) => (
                        <TableRow key={row.class}>
                          <TableCell className="font-bold">{row.class}</TableCell>
                          <TableCell className="text-right">₹{row.kit}</TableCell>
                          <TableCell className="text-right">₹{row.exam}</TableCell>
                          <TableCell className="text-right">₹{row.tuition}</TableCell>
                          <TableCell className="text-right font-medium text-primary">
                            {row.admission === 'NA' ? 'NA' : `₹${row.admission}`}
                          </TableCell>
                          <TableCell className="text-right">₹{row.activity}</TableCell>
                          <TableCell className="text-right">₹{row.dev}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card> */}

            {/* Fee Summary */}
            {/* <Card className="bg-card shadow-sm border overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <CardHeader className="flex flex-row items-center gap-3 border-b pb-4 bg-secondary/5">
                <Calculator className="h-6 w-6 text-secondary" />
                <CardTitle className="font-headline">Total Fee Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Class</TableHead>
                      <TableHead className="text-right">Total Monthly fees</TableHead>
                      <TableHead className="text-right">Total Yearly Cost (New Admission)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {summaryFees.map((row) => (
                      <TableRow key={row.class}>
                        <TableCell className="font-bold">{row.class}</TableCell>
                        <TableCell className="text-right font-medium">₹{row.monthly}</TableCell>
                        <TableCell className="text-right font-bold text-primary">₹{row.yearly}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 animate-in fade-in duration-1000 delay-700 fill-mode-both">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Important Note:</strong> The fees listed above are for the academic session 2025-26. Fees are subject to revision by the school management. Detailed class-wise breakdowns and payment schedules are available at the school administrative office.
              </p>
            </div> */}

          </div>
        </div>
      </section>
    </div>
  );
}
