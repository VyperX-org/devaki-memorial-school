import Link from 'next/link';
import { ArrowRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function FeesPortalPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Fees Payment Portal</h1>
          <p className="text-xl opacity-80">Secure online fee payment will be launched shortly.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="bg-card border-primary/10 shadow-lg animate-in fade-in zoom-in-95 duration-700">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                <CreditCard className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">Coming Soon</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our online fees portal is under setup. Please use existing offline fee payment channels until this service goes live.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button asChild className="font-bold">
                  <Link href="/contact">Payment Help</Link>
                </Button>
                <Button variant="outline" asChild className="font-bold">
                  <Link href="/notices" className="inline-flex items-center gap-2">
                    Check Notices <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
