import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { PERSON } from '@/lib/constants';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manropeSans = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://google.com';

export const metadata: Metadata = {
  title: `Intro - ${PERSON.name}`,
  description: `A personal website to showcase the career path of ${PERSON.name} as well as the projects he has worked on.`,
  keywords: [
    'portfolio',
    'developer',
    'software',
    'engineer',
    'programmer',
    'web developer',
    'software engineer',
    'programming',
    'personal website',
    PERSON.name,
    PERSON.title,
  ],
  authors: [{ name: PERSON.name }],
  creator: PERSON.name,
  publisher: PERSON.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${PERSON.name} - ${PERSON.title}`,
    description: PERSON.description,
    url: siteUrl,
    siteName: `${PERSON.name} - Personal Website`,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${PERSON.name}'s personal website`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSON.name} - ${PERSON.title}`,
    description: PERSON.description,
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body className={`${manropeSans.variable} antialiased min-h-screen`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
