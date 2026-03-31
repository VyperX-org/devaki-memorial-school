'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[12rem] font-bold">404</span>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="p-6 bg-white rounded-full shadow-xl border-4 border-primary/10">
              <FileQuestion className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold text-primary">Page Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, the page you are looking for can't be found. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto font-bold gap-2">
            <Link href="/">
              <Home className="h-5 w-5" /> Go Home
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto font-bold gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5" /> Previous Page
          </Button>
        </div>

        <div className="pt-8 opacity-40">
          <p className="text-sm">Devaki Memorial School • Rajarhat, Kolkata</p>
        </div>
      </div>
    </div>
  );
}
