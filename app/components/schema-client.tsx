'use client'

import { useEffect, useState } from 'react'
import { getCurrentDomainConfig } from '../utils/domain'

/**
 * Client-side schema markup that adapts to current domain
 */
export default function SchemaMarkup() {
  const [config, setConfig] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const domainConfig = getCurrentDomainConfig({
        headers: {
          get: (key: string) => key === 'host' ? window.location.hostname : null
        }
      })
      setConfig(domainConfig)
    }
  }, [])

  if (!config) {
    return null
  }

  const baseUrl = config.baseUrl
  const location = config.location
  const contact = config.contact
  const agent = config.realEstateAgent

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#business`,
        "name": config.businessName,
        "description": `${agent?.name || 'Dr. Jan Duffy'}, Featured New Home Construction & Buyer Representation Specialist. Located in ${location.city}, ${location.state}.`,
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip !== 'TBD' ? location.zip : '',
          "streetAddress": location.address !== 'TBD' ? location.address : ''
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        },
        "telephone": contact.phone,
        "email": contact.email,
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${baseUrl}/#agent`,
        "name": agent?.name || "Dr. Jan Duffy",
        "description": "Featured New Home Construction & Buyer Representation Specialist",
        "url": baseUrl,
        "telephone": contact.phone,
        "email": contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address !== 'TBD' ? location.address : '',
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip !== 'TBD' ? location.zip : '',
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        },
        "licenseNumber": agent?.licenseNumber || "S.0197614",
        "areaServed": {
          "@type": "City",
          "name": location.city,
          "containedInPlace": {
            "@type": "State",
            "name": location.state
          }
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": config.businessName,
        "url": baseUrl,
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": contact.phone,
            "contactType": "Primary Phone",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "email": contact.email,
            "contactType": "Email",
            "availableLanguage": "English"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address !== 'TBD' ? location.address : '',
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip !== 'TBD' ? location.zip : '',
          "addressCountry": "US"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": config.businessName,
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        "url": baseUrl,
        "name": `${config.businessName} - New Homes in ${location.city}`,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "inLanguage": "en-US"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

