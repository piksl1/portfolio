import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wassim Zaoui',
              url: siteConfig.url,
              jobTitle: 'Front-end Developer',
              knowsAbout: [
                'React.js',
                'React',
                'Next.js',
                'Next',
                'TypeScript',
                'JavaScript',
                'Web Development',
                'Front-End',
              ],
              nationality: {
                '@type': 'Country',
                name: 'Morocco',
              },
            }),
          }}
        />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
