
"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Youtube, Linkedin, Instagram, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle';
import { academicSections } from '../lib/academic-sections';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'ADMISSION', href: '/admission' },
  { name: 'ACADEMICS', href: '/academics' },
  { name: 'GALLERY', href: '/gallery' },
  // { name: 'NOTICES', href: '/notices' },
  { name: 'CONTACT', href: '/contact' },
];

const socialLinks = [
  { platform: 'youtube', icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com' },
  { platform: 'linkedin', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/school/devaki-memorial-school' },
  { platform: 'instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/devakischool.in' },
];

const moreLinks = [
  { name: 'ACHIEVEMENTS', href: '/achievements' },
  { name: 'NOTICES', href: '/notices' },
  { name: 'ACADEMIC RESOURCES', href: '/academic-resources' },
];

const aboutLinks = [
  { name: 'The School', href: '/about' },
  { name: "Chairman's Desk", href: '/leadership#chairperson' },
  { name: "Principal's Desk", href: '/leadership#principal' },
  { name: 'Faculty Members', href: '/faculty' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);
  const [isAcademicsMobileOpen, setIsAcademicsMobileOpen] = useState(false);
  const [isMoreMobileOpen, setIsMoreMobileOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  
  const isAcademicsPath = pathname === '/academics' || pathname.startsWith('/academics/');
  const isAboutPath = pathname === '/about' || pathname.startsWith('/leadership') || pathname === '/faculty';

  const handleMobileSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = mobileSearchQuery.trim();
    if (!query) {
      return;
    }

    setIsOpen(false);
    setMobileSearchQuery('');
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

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
                sizes="(min-width: 640px) 64px, 56px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-baseline gap-1 whitespace-nowrap">
                <span className="text-sm sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight">Devaki</span>
                <span className="text-sm sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight">Memorial</span>
                <span className="text-sm sm:text-xl font-headline font-bold text-secondary tracking-tighter uppercase leading-tight">School</span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground tracking-wide uppercase leading-tight">
                Affiliated to ICSE/ISC Board
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-4">
            {navLinks.map((link) => {
              if (link.href === '/about') {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "lg:text-sm xl:text-base font-bold transition-colors hover:text-primary py-1 whitespace-nowrap inline-flex items-center gap-1",
                        isAboutPath ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    <div className="absolute left-0 top-full mt-2 w-56 rounded-md border bg-background p-1 shadow-lg opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block rounded px-3 py-2 text-sm font-semibold transition-colors",
                            pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (link.href === '/academics') {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "lg:text-sm xl:text-base font-bold transition-colors hover:text-primary py-1 whitespace-nowrap inline-flex items-center gap-1",
                        isAcademicsPath ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    <div className="absolute left-0 top-full mt-2 w-56 rounded-md border bg-background p-1 shadow-lg opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      {academicSections.map((section) => (
                        <Link
                          key={section.slug}
                          href={section.href}
                          className={cn(
                            "block rounded px-3 py-2 text-sm font-semibold transition-colors",
                            pathname === section.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {section.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}

            <div className="relative group flex items-center">
              <button
                type="button"
                className="lg:text-sm xl:text-base font-bold transition-colors hover:text-primary py-1 whitespace-nowrap inline-flex items-center gap-1 text-muted-foreground"
              >
                MORE
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute left-0 top-full mt-2 w-56 rounded-md border bg-background p-1 shadow-lg opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded px-3 py-2 text-sm font-semibold transition-colors",
                      pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Search Bar */}

            <div className="flex items-center gap-2 ml-2">
              <ModeToggle />
              <Button asChild className="bg-primary hover:bg-primary/90 lg:px-4 xl:px-6 font-bold lg:text-sm xl:text-base shrink-0">
                <Link href="/admission">Apply Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
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
          <div className="p-3 pb-2 border-b space-y-2">
            <form onSubmit={handleMobileSearch} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={mobileSearchQuery}
                  onChange={(event) => {
                    setMobileSearchQuery(event.target.value);
                  }}
                  placeholder="Search pages, notices, content..."
                  className="h-10 w-full rounded-md border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  aria-label="Search website pages"
                />
              </div>
              <Button type="submit" className="h-10 px-3 text-sm">Go</Button>
            </form>
          </div>

          {navLinks.map((link) => {
            if (link.href === '/about') {
              return (
                <div key={link.name} className="border-b border-muted/60">
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex-1 text-sm font-semibold px-4 py-2 rounded-md transition-colors",
                        isAboutPath ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsAboutMobileOpen((prev) => !prev)}
                      className="px-4 py-2 text-muted-foreground hover:text-primary"
                      aria-label="Toggle about sections"
                      aria-expanded={isAboutMobileOpen}
                    >
                      <ChevronRight className={cn("h-4 w-4 transition-transform", isAboutMobileOpen && "rotate-90")} />
                    </button>
                  </div>

                  {isAboutMobileOpen ? (
                    <div className="px-4 pb-2 space-y-1">
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2 text-xs font-semibold transition-colors",
                            pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            if (link.href === '/academics') {
              return (
                <div key={link.name} className="border-b border-muted/60">
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex-1 text-sm font-semibold px-4 py-2 rounded-md transition-colors",
                        isAcademicsPath ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsAcademicsMobileOpen((prev) => !prev)}
                      className="px-4 py-2 text-muted-foreground hover:text-primary"
                      aria-label="Toggle academics sections"
                      aria-expanded={isAcademicsMobileOpen}
                    >
                      <ChevronRight className={cn("h-4 w-4 transition-transform", isAcademicsMobileOpen && "rotate-90")} />
                    </button>
                  </div>

                  {isAcademicsMobileOpen ? (
                    <div className="px-4 pb-2 space-y-1">
                      {academicSections.map((section) => (
                        <Link
                          key={section.slug}
                          href={section.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2 text-xs font-semibold transition-colors",
                            pathname === section.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {section.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
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
            );
          })}

          <div className="border-b border-muted/60">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setIsMoreMobileOpen((prev) => !prev)}
                className="flex-1 text-sm font-semibold px-4 py-2 rounded-md transition-colors text-muted-foreground hover:bg-muted inline-flex items-center justify-between"
                aria-label="Toggle more sections"
                aria-expanded={isMoreMobileOpen}
              >
                <span>MORE</span>
                <ChevronRight className={cn("h-4 w-4 transition-transform", isMoreMobileOpen && "rotate-90")} />
              </button>
            </div>

            {isMoreMobileOpen ? (
              <div className="px-4 pb-2 space-y-1">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-xs font-semibold transition-colors",
                      pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

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
            <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
