
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Remove class when it leaves the viewport to allow re-triggering
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const refreshReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        observer.unobserve(el);
        observer.observe(el);
      });
    };

    // Initial run
    refreshReveal();

    // Re-run on route change to handle new content
    const timeout = setTimeout(refreshReveal, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
