/**
 * Server-side domain detection and metadata generation
 * This file provides utilities for generating domain-specific metadata
 */

import { headers } from 'next/headers'
import { getCurrentDomainConfig, getCurrentDomain } from './utils/domain'
import type { Metadata } from 'next'

/**
 * Generate metadata based on current domain
 */
export async function generateDomainMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const hostname = headersList.get('host') || 'bravadohomes.com'
  const domain = hostname.split(':')[0]
  const config = getCurrentDomainConfig({ headers: headersList })
  
  // Extract domain-specific info
  const businessName = config.businessName
  const location = config.location
  const contact = config.contact
  
  return {
    metadataBase: new URL(config.baseUrl),
    title: {
      default: `Bravado Homes | Century Communities Las Vegas | ${businessName}`,
      template: `%s | Bravado Homes`,
    },
    description: `Bravado Homes by Century Communities in North Las Vegas. New construction from $445,000 (Century Communities, 2026-10-12). Expert guidance from ${config.realEstateAgent?.name || 'Dr. Jan Duffy'}.`,
    keywords: [
      'bravado homes',
      'bravado century communities',
      'bravado century communities las vegas',
      'century communities bravado',
      'bravado community',
      'the bravado',
      `${businessName}`,
      `new homes ${location.city}`,
      `${location.city} real estate`,
      location.zip !== 'TBD' ? location.zip : '',
      'new home construction',
      'buyer representation',
      config.realEstateAgent?.name || 'Dr. Jan Duffy',
      'century communities las vegas',
    ].filter(Boolean),
    authors: [{ name: config.realEstateAgent?.name || 'Dr. Jan Duffy', url: config.baseUrl }],
    creator: config.realEstateAgent?.name || 'Dr. Jan Duffy',
    publisher: businessName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `Bravado Homes | Century Communities Las Vegas | ${businessName}`,
      description: `Bravado Homes by Century Communities in North Las Vegas. New construction from $445,000. Expert guidance from ${config.realEstateAgent?.name || 'Dr. Jan Duffy'}.`,
      url: config.baseUrl,
      siteName: businessName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${config.baseUrl}/images/bravado/exterior/community-hero.jpg`,
          width: 1200,
          height: 630,
          alt: `Bravado Homes by Century Communities`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Bravado Homes | Century Communities Las Vegas`,
      description: `Bravado Homes by Century Communities in North Las Vegas. New construction from $445,000. Expert guidance from ${config.realEstateAgent?.name || 'Dr. Jan Duffy'}.`,
      images: [`${config.baseUrl}/images/bravado/exterior/community-hero.jpg`],
      creator: '@DrJanSells',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      // Note: AI bot-specific robots directives are handled in robots.txt
      // Next.js metadata API only supports googleBot as a known property
    },
    verification: {
      google: config.googleVerification || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    },
    category: 'Real Estate',
    classification: 'New Home Construction',
    referrer: 'origin-when-cross-origin',
    other: {
      'zip': location.zip !== 'TBD' ? location.zip : '',
      'geo.region': `US-${location.state}`,
      'geo.placename': location.city,
      'geo.position': `${location.coordinates.lat};${location.coordinates.lng}`,
      'ICBM': `${location.coordinates.lat}, ${location.coordinates.lng}`,
      'DC.title': businessName,
      'DC.description': `Discover luxury new homes in ${location.city}`,
      'DC.subject': `Real Estate, New Homes, ${location.city}`,
      'DC.language': 'en',
      'DC.coverage': `${location.city}, ${location.state}`,
      'business:contact_data:locality': location.city,
      'business:contact_data:region': location.state,
      'business:contact_data:postal_code': location.zip !== 'TBD' ? location.zip : '',
      'business:contact_data:country_name': 'United States',
    },
  }
}

