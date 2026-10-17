import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function SchemaMarkup() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const location = config.location
  const contact = config.contact
  const agent = config.realEstateAgent
  const agentName = agent?.name ?? 'Dr. Jan Duffy'
  const bravadoPlaceId = `${baseUrl}/#bravado`

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": bravadoPlaceId,
        "name": "Bravado",
        "containedInPlace": {
          "@type": "City",
          "name": "North Las Vegas",
          "containedInPlace": {
            "@type": "State",
            "name": "Nevada"
          }
        }
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#business`,
        "name": config.businessName,
        "description": `${agentName}, independent buyer representation for Bravado new construction in ${location.city}, ${location.state}.`,
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
          "streetAddress": "5060 Wind Springs Street"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "36.253435600755466",
          "longitude": "-115.13597331838079"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Monday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Tuesday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Wednesday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Thursday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Friday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Saturday",
            "opens": "10:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "closes": "18:00:00",
            "dayOfWeek": "https://schema.org/Sunday",
            "opens": "10:00:00"
          }
        ],
        "telephone": contact.phone,
        "email": contact.email,
        "foundingDate": "2024",
        "areaServed": {
          "@id": bravadoPlaceId
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "36.253435600755466",
            "longitude": "-115.13597331838079"
          },
          "geoRadius": "50000"
        },
        "sameAs": [
          baseUrl
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${baseUrl}/#agent`,
        "name": agentName,
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
          "@id": bravadoPlaceId
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            },
            "name": "Nevada Real Estate License"
          }
        ],
        "worksFor": {
          "@id": `${baseUrl}/#organization`
        },
        "knowsAbout": [
          "New Home Construction",
          "Buyer Representation",
          "Century Communities",
          "Bravado Community",
          "North Las Vegas Real Estate"
        ],
        "sameAs": [
          baseUrl
        ]
      },
      {
        "@type": "ResidentialComplex",
        "@id": `${baseUrl}/#community`,
        "name": "Bravado",
        "description": "Gated new construction community in North Las Vegas built by Century Communities",
        "url": baseUrl,
        "containedInPlace": {
          "@id": bravadoPlaceId
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5060 Wind Springs Street",
          "addressLocality": "North Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89031",
          "addressCountry": "US"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Gated Community",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Community Parks",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Walking Paths",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Smart Home Technology",
            "value": true
          }
        ],
        "petsAllowed": true,
        "isAccessibleForFree": false,
        "publicAccess": false,
        "smokingAllowed": false,
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Residence 1792",
            "description": "1,792 sq ft, 3-4 bedrooms, 2.5 bathrooms",
            "value": "429990",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 1943",
            "description": "1,943 sq ft, 3 bedrooms, 2.5 bathrooms",
            "value": "439990",
            "unitCode": "USD"
          },
          {
            "@type": "PropertyValue",
            "name": "Residence 2119",
            "description": "2,119 sq ft, 3 bedrooms, 2.5 bathrooms",
            "value": "449990",
            "unitCode": "USD"
          }
        ],
        "provider": {
          "@type": "Organization",
          "name": "Century Communities",
          "description": "One of America's Top 10 Homebuilders"
        },
        "hasMap": location.address !== 'TBD' && location.zip !== 'TBD' 
          ? `https://maps.google.com/?q=${encodeURIComponent(`${location.address} ${location.city} ${location.state} ${location.zip}`)}`
          : `https://maps.google.com/?q=${encodeURIComponent(`${location.city} ${location.state}`)}`
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": config.businessName,
        "description": `Featured New Home Construction & Buyer Representation in ${location.city}`,
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "sameAs": [
          baseUrl
        ],
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
        },
        "founder": {
          "@id": `${baseUrl}/#agent`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": config.businessName,
        "description": `Featured New Home Construction & Buyer Representation in ${location.city}`,
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        // Note: SearchAction removed to prevent Google from crawling search URL templates
        // Real estate sites don't typically have on-site search functionality
        // Contact information is the primary search "action" for this site
        "potentialAction": [],
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
        "description": `Bravado new construction homes in ${location.city}. Independent buyer guidance from ${agentName}.`,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            }
          ]
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#buyer-representation-service`,
        "name": "Buyer Representation",
        "description": "Independent buyer representation service protecting client interests throughout the home buying process",
        "provider": {
          "@id": `${baseUrl}/#agent`
        },
        "serviceType": "Real Estate Buyer Representation",
        "areaServed": {
          "@id": bravadoPlaceId
        },
        "offers": {
          "@type": "Offer",
          "description": "Professional buyer representation services"
        }
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/#new-construction-service`,
        "name": "New Home Construction Guidance",
        "description": "Expert guidance for new home construction purchases at Bravado",
        "provider": {
          "@id": `${baseUrl}/#agent`
        },
        "serviceType": "New Home Construction Consulting",
        "areaServed": {
          "@id": bravadoPlaceId
        },
        "offers": {
          "@type": "Offer",
          "description": "New construction home buying services"
        }
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        "name": agentName,
        "jobTitle": "Featured New Home Construction & Buyer Representation Specialist",
        "worksFor": {
          "@id": `${baseUrl}/#organization`
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Nevada Real Estate Division"
            },
            "name": "Nevada Real Estate License",
            "credentialId": agent?.licenseNumber || "S.0197614"
          }
        ],
        "knowsAbout": [
          "Real Estate",
          "New Home Construction",
          "Buyer Representation",
          "Las Vegas Real Estate Market",
          "North Las Vegas New Construction"
        ]
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
