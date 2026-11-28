import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { CursorGlow } from '@/components/CursorGlow';
import { Preloader } from '@/components/Preloader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://sojib-fullstack-dev.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Samiul Hasan Sojib | Full-Stack Web Developer',
  description:
    'Portfolio of Samiul Hasan Sojib, a full-stack web developer building responsive MERN and Next.js applications and data-driven lead generation solutions.',
  applicationName: 'Samiul Hasan Sojib Portfolio',
  keywords: [
    'Samiul Hasan Sojib',
    'Full-Stack Developer',
    'MERN Stack',
    'Next.js',
    'React',
    'Lead Generation',
  ],
  authors: [{ name: 'Samiul Hasan Sojib', url: SITE_URL }],
  creator: 'Samiul Hasan Sojib',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Samiul Hasan Sojib Portfolio',
    title: 'Samiul Hasan Sojib | Full-Stack Web Developer',
    description:
      'Portfolio of Samiul Hasan Sojib, a full-stack web developer building responsive MERN and Next.js applications and data-driven lead generation solutions.',
    images: [
      {
        url: '/assets/sharing.jpeg',
        width: 1424,
        height: 752,
        alt: 'Samiul Hasan Sojib — Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samiul Hasan Sojib | Full-Stack Web Developer',
    description:
      'Portfolio of Samiul Hasan Sojib, a full-stack web developer building responsive MERN and Next.js applications.',
    images: ['/assets/sharing.jpeg'],
    creator: '@sojib_fullstack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Samiul Hasan Sojib',
  url: SITE_URL,
  jobTitle: 'Full-Stack Web Developer',
  description:
    'Full-stack web developer specializing in the MERN stack and Next.js, with experience in lead generation and data management.',
  sameAs: [
    'https://github.com/sojib-fullstack-dev',
    'https://www.linkedin.com/in/samiul-hasan-sojib/',
    'https://www.facebook.com/sojib.fullstack.dev',
    'https://x.com/sojib_fullstack',
    'https://www.youtube.com/@Coding_With_Sojib',
    'https://www.instagram.com/sojib.fullstack.dev',
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CursorGlow />
        <Preloader />
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
