
"use client";

import { Phone, Smartphone, MessageSquare, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    { 
      label: 'Telephone 1', 
      value: '(033) 2573 7190', 
      href: 'tel:03325737190', 
      icon: <Phone className="h-6 w-6" /> 
    },
    { 
      label: 'Telephone 2', 
      value: '(033) 3299 1050', 
      href: 'tel:03332991050', 
      icon: <Phone className="h-6 w-6" /> 
    },
    { 
      label: 'Mobile', 
      value: '+91 93311 47394', 
      href: 'tel:+919331147394', 
      icon: <Smartphone className="h-6 w-6" /> 
    },
    { 
      label: 'WhatsApp', 
      value: '+91 93311 47394', 
      href: 'https://wa.me/919331147394', 
      icon: <MessageSquare className="h-6 w-6" /> 
    },
    { 
      label: 'Email', 
      value: 'devakischool@rediffmail.com', 
      href: 'mailto:devakischool@rediffmail.com', 
      icon: <Mail className="h-6 w-6" /> 
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="py-16 bg-primary text-primary-foreground text-center overflow-hidden">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-80">We are here to answer any questions you may have.</p>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            
            {/* Contact Details Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <a 
                  key={info.label}
                  href={info.href}
                  className="flex flex-col p-6 bg-card rounded-2xl shadow-sm border border-transparent hover:border-secondary transition-all group animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{info.label}</span>
                  <span className="text-lg font-bold text-primary break-all">{info.value}</span>
                </a>
              ))}
            </div>

            {/* Address & Big Map */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">
              <div className="flex items-start gap-4 p-8 bg-card rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
                <MapPin className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Physical Address</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Reckjoani Hospital Rd, Reckjoani,<br />
                    Rajarhat, West Bengal - 700135
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Devaki+Memorial+School+Reckjoani+Hospital+Rd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-secondary font-bold hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              
              <div className="w-full h-[500px] bg-muted rounded-3xl overflow-hidden shadow-xl border relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.736260866937!2d88.48045890166885!3d22.627554833388736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a01da84b56d7%3A0xb03c0798f068642d!2sDevaki%20Memorial%20School!5e0!3m2!1sen!2sin!4v1773839877050!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Devaki Memorial School Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
