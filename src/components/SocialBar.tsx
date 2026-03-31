
"use client";

import { Youtube, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function SocialBar() {
  const socials = [
    { icon: <Youtube className="h-5 w-5" />, name: 'YouTube', color: 'bg-[#FF0000]', href: 'https://youtube.com' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', color: 'bg-[#0077B5]', href: 'https://www.linkedin.com/school/devaki-memorial-school' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', color: 'bg-[#E1306C]', href: 'https://instagram.com' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group social-bar-item h-12 w-12 text-white ${social.color} shadow-lg rounded-l-md flex items-center overflow-hidden`}
        >
          <div className="flex-shrink-0 w-12 flex justify-center">
            {social.icon}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
