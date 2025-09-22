import React from 'react';
import type { Metadata } from 'next';

export const siteName = 'Stark Strong LLC';
export const siteUrl = 'https://www.example.com'; // TODO replace with real domain
export const phoneNumberDisplay = '(719) 800-7320';
export const phoneNumberRaw = '7198007320';
export const primaryLocation = 'Colorado Springs, CO';
export const emailAddress = 'info@example.com'; // TODO replace

export function baseMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: 'Colorado Springs Junk Removal, Hauling & Cleaning | Stark Strong LLC',
      template: '%s | Stark Strong LLC',
    },
    description:
      'Local licensed & insured hauling, junk removal, recycling and house cleaning services in Colorado Springs and surrounding areas. Call or text today for fast, eco‑friendly service.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName,
      title: 'Colorado Springs Junk Removal, Hauling & Cleaning',
      description:
        'Local licensed & insured hauling, junk removal, recycling and house cleaning services in Colorado Springs and surrounding areas.',
      url: siteUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Colorado Springs Junk Removal & Cleaning',
      description:
        'Local licensed & insured hauling, junk removal, recycling and house cleaning services.',
    },
    icons: {
      icon: '/favicon.ico',
    },
    ...overrides,
  };
}

interface JsonLDScriptProps {
  data: Record<string, any>;
}

export function JsonLDScript({ data }: JsonLDScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteName,
    image: `${siteUrl}/og-image.jpg`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: phoneNumberRaw,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Colorado Springs',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    areaServed: [
      'Colorado Springs',
      'Manitou Springs',
      'Fountain',
      'Monument',
      'Falcon',
      'Peyton',
    ],
    description:
      'Locally owned & operated licensed junk removal, hauling, recycling, and house cleaning company serving Colorado Springs area.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [],
  };
}
