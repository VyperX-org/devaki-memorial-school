
import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import TopNoticeBar from '@/components/TopNoticeBar';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider"
import ScrollReveal from '@/components/ScrollReveal';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const LazySocialBar = dynamic(() => import('@/components/SocialBar'), {
  ssr: false,
  loading: () => null
});

export const metadata: Metadata = {
  title: 'Devaki Memorial School | CISCE Affiliated',
  description: 'Devaki Memorial School, established in 2002 in Rajarhat, Kolkata, is a CISCE affiliated institution operated by the Kajormal Ji Agarwal Charitable Trust, focusing on academic excellence and moral values.',
  keywords: 'Devaki Memorial School, School in Rajarhat, Kolkata, DMS, Schools, India, CISCE, ICSE Schools',
  authors: [{ name: 'VyperX' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </noscript>
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollReveal />
          <TopNoticeBar />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <LazySocialBar />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
