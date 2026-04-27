
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronUp, 
  Smartphone,
  Youtube,
  Linkedin,
  Instagram
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { platform: 'youtube', icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com' },
    { platform: 'linkedin', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/school/devaki-memorial-school' },
    { platform: 'instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com/devakischool.in' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand & Mission */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.jpg" alt="DMS Logo" width={40} height={40} className="rounded-full" />
              <span className="text-lg font-headline font-bold leading-tight">विद्ययामृतभक्षते</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Devaki Memorial School, established in 2002, offers quality CISCE-affiliated (I.C.S.E & I.S.C) education from Nursery to Class XII, focusing on academic excellence, character building, and holistic development in a nurturing, well-equipped environment.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.platform} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <span className="sr-only">{social.platform}</span>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-6 border-b border-primary-foreground/20 pb-2 w-full md:w-auto">Important Links</h4>
            <ul className="space-y-3">
              <li><Link href="/admission" className="hover:text-secondary transition-colors">Admission Policy</Link></li>
              <li><Link href="/notices" className="hover:text-secondary transition-colors">Notice Board</Link></li>
              <li><Link href="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link href="/faculty" className="hover:text-secondary transition-colors">Faculty</Link></li>
              <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-bold mb-6 border-b border-primary-foreground/20 pb-2 w-full md:w-auto">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/BFgTcZjvJTyruxtA9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Reckjoani Hospital Rd, Reckjoani, Rajarhat, WB - 700135
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <div className="flex flex-col text-sm items-center md:items-start">
                  <a href="tel:+9103325737190" className="hover:text-secondary transition-colors">(033) 2573 7190</a>
                  <a href="tel:+9103332991050" className="hover:text-secondary transition-colors">(033) 3299 1050</a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Smartphone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919331147394" className="hover:text-secondary transition-colors">+91 93311 47394</a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:devakischool@rediffmail.com" className="break-all hover:text-secondary transition-colors">
                  devakischool@rediffmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="flex flex-col items-center md:items-start space-y-4 w-full">
            <h4 className="text-lg font-bold mb-6 border-b border-primary-foreground/20 pb-2 w-full md:w-auto">Find Us</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-inner border border-white/10 grayscale hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.736260866937!2d88.48045890166885!3d22.627554833388736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a01da84b56d7%3A0xb03c0798f068642d!2sDevaki%20Memorial%20School!5e0!3m2!1sen!2sin!4v1773839877050!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60 space-y-2">
          <p>© {new Date().getFullYear()} Devaki Memorial School. All Rights Reserved.</p>
          <p>
            This website was created and is currently managed by{" "}
            <Link 
              href="https://VyperX.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:underline underline-offset-4 transition-all"
            >
              VyperX
            </Link>.
          </p>
        </div>
      </div>

      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group bg-secondary text-secondary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-all flex flex-col items-center gap-1 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">To Top</span>
        </button>
      )}
    </footer>
  );
}
