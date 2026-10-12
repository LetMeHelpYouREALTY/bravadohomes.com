/**
 * Multi-Domain Configuration
 * Central configuration for all domains with SEO and AI optimization settings
 */

export type DomainConfig = {
  domain: string
  baseUrl: string
  googleVerification?: string
  gaMeasurementId?: string
  businessName: string
  location: {
    address: string
    city: string
    state: string
    zip: string
    coordinates: {
      lat: string
      lng: string
    }
  }
  contact: {
    phone: string
    email: string
    licenseNumber?: string
  }
  realEstateAgent?: {
    name: string
    licenseNumber: string
  }
}

// Domain configurations
export const domains: Record<string, DomainConfig> = {
  'bravadohomes.com': {
    domain: 'bravadohomes.com',
    baseUrl: 'https://www.bravadohomes.com',
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6H8SG3KDBY',
    businessName: 'Bravado Homes by Dr. Jan Duffy',
    location: {
      address: '5060 Wind Springs Street',
      city: 'North Las Vegas',
      state: 'NV',
      zip: '89031',
      coordinates: {
        lat: '36.253435600755466',
        lng: '-115.13597331838079',
      },
    },
    contact: {
      phone: '+17025001955',
      email: 'DrJanSells@BravadoHomes.com',
    },
    realEstateAgent: {
      name: 'Dr. Jan Duffy',
      licenseNumber: 'S.0197614',
    },
  },
  'www.bravadohomes.com': {
    domain: 'www.bravadohomes.com',
    baseUrl: 'https://www.bravadohomes.com',
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-6H8SG3KDBY',
    businessName: 'Bravado Homes by Dr. Jan Duffy',
    location: {
      address: '5060 Wind Springs Street',
      city: 'North Las Vegas',
      state: 'NV',
      zip: '89031',
      coordinates: {
        lat: '36.253435600755466',
        lng: '-115.13597331838079',
      },
    },
    contact: {
      phone: '+17025001955',
      email: 'DrJanSells@BravadoHomes.com',
    },
    realEstateAgent: {
      name: 'Dr. Jan Duffy',
      licenseNumber: 'S.0197614',
    },
  },
  'mayfieldestateslasvegas.com': {
    domain: 'mayfieldestateslasvegas.com',
    baseUrl: 'https://mayfieldestateslasvegas.com',
    googleVerification: 'w71TQeqa-UkSYT-8KlV3Ut4Fr3YY1JfVF6r3alXfoQs',
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID_MAYFIELD || undefined,
    businessName: 'Mayfield Estates Las Vegas',
    location: {
      address: 'TBD', // Update with actual address
      city: 'Las Vegas',
      state: 'NV',
      zip: 'TBD', // Update with actual zip
      coordinates: {
        lat: '36.1699', // Las Vegas approximate
        lng: '-115.1398',
      },
    },
    contact: {
      phone: '+17025001955', // Update if different
      email: 'DrJanSells@ReverenceSummerlinHomes.com',
    },
    realEstateAgent: {
      name: 'Dr. Jan Duffy',
      licenseNumber: 'S.0197614',
    },
  },
}

/**
 * Get the current domain configuration based on the hostname
 * Falls back to bravadohomes.com as default
 */
export function getDomainConfig(): DomainConfig {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    return domains[hostname] || domains['bravadohomes.com']
  }
  
  // Server-side: check environment or default
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'bravadohomes.com'
  return domains[domain] || domains['bravadohomes.com']
}

/**
 * Get domain config by domain name
 */
export function getDomainConfigByDomain(domain: string): DomainConfig {
  return domains[domain] || domains['bravadohomes.com']
}

// Export default (for backward compatibility)
export const defaultDomain = domains['bravadohomes.com']
export const baseUrl = defaultDomain.baseUrl

