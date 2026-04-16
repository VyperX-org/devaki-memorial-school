
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Youtube, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'ADMISSION', href: '/admission' },
  { name: 'ACADEMICS', href: '/academics' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'NOTICES', href: '/notices' },
  { name: 'ACHIEVEMENTS', href: '/achievements' },
  { name: 'CONTACT', href: '/contact' },
];

const socialLinks = [
  { platform: 'youtube', icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com' },
  { platform: 'linkedin', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/school/devaki-memorial-school' },
  { platform: 'instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/devakischool.in' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-lg shadow-sm border bg-white">
              <Image 
                src="/images/logo.jpg" 
                alt="Devaki Memorial School Logo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight">Devaki</span>
              <span className="text-lg sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight -mt-1 sm:-mt-2">Memorial</span>
              <span className="text-lg sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight -mt-1 sm:-mt-2">School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "lg:text-sm xl:text-base font-bold transition-colors hover:text-primary py-1 whitespace-nowrap",
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <ModeToggle />
              <Button asChild className="bg-primary hover:bg-primary/90 lg:px-4 xl:px-6 font-bold lg:text-sm xl:text-base shrink-0">
                <Link href="/admission">Apply Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <button 
              className="p-2 text-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-background border-b shadow-lg p-1 flex flex-col gap-0 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-semibold px-4 py-2 rounded-md transition-colors",
                pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-4 pt-0 mt-2 border-t flex flex-col gap-6">
            <Button asChild className="w-full font-bold h-10 text-sm">
              <Link href="/admission" onClick={() => setIsOpen(false)}>Apply Now</Link>
            </Button>
            
            {/* Social Links for Mobile */}
            <div className="flex justify-center items-center gap-8 py-2 border-t">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.platform}</span>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
