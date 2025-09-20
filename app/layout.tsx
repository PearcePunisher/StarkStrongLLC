import '../styles/globals.css';
import { ReactNode } from 'react';
import { baseMetadata, JsonLDScript, localBusinessJsonLd } from '../lib/seo';
import { StickyCTA } from '../components/StickyCTA';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata = baseMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased flex min-h-screen flex-col bg-[var(--color-bg)] transition-colors">
        <JsonLDScript data={localBusinessJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <StickyCTA />
      </body>
    </html>
  );
}
