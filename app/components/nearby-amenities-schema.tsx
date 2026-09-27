import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import {
  BRAVADO_COMMUNITY,
  CURATED_NEARBY_PLACES,
  NEARBY_AMENITIES_FAQS,
  NEARBY_AMENITIES_PAGE_PATH,
} from '../lib/nearby-amenities'

export default async function NearbyAmenitiesSchema() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const pageUrl = `${baseUrl}${NEARBY_AMENITIES_PAGE_PATH}`
  const agent = config.realEstateAgent
  const contact = config.contact

  const graph = [
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Nearby Amenities',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Place',
      '@id': `${pageUrl}#community`,
      name: BRAVADO_COMMUNITY.fullName,
      description: `New construction homes at ${BRAVADO_COMMUNITY.name} in ${BRAVADO_COMMUNITY.city}, Nevada`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAVADO_COMMUNITY.address,
        addressLocality: BRAVADO_COMMUNITY.city,
        addressRegion: BRAVADO_COMMUNITY.state,
        postalCode: BRAVADO_COMMUNITY.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BRAVADO_COMMUNITY.center.lat,
        longitude: BRAVADO_COMMUNITY.center.lng,
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#places`,
      name: `Featured places near ${BRAVADO_COMMUNITY.name}`,
      itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': place.schemaType,
          name: place.name,
          address: {
            '@type': 'PostalAddress',
            streetAddress: place.address,
            addressLocality: place.city,
            addressRegion: place.state,
            postalCode: place.zip,
            addressCountry: 'US',
          },
          ...(place.lat != null && place.lng != null
            ? {
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: place.lat,
                  longitude: place.lng,
                },
              }
            : {}),
        },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: NEARBY_AMENITIES_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'RealEstateAgent',
      '@id': `${baseUrl}/#agent`,
      name: agent?.name ?? 'Dr. Janet Duffy',
      telephone: contact.phone,
      email: contact.email,
      identifier: agent?.licenseNumber ?? 'S.0197614',
      url: baseUrl,
      areaServed: [
        {
          '@type': 'Place',
          name: `${BRAVADO_COMMUNITY.name} — ${BRAVADO_COMMUNITY.city}`,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: BRAVADO_COMMUNITY.center.lat,
            longitude: BRAVADO_COMMUNITY.center.lng,
          },
        },
        {
          '@type': 'City',
          name: BRAVADO_COMMUNITY.city,
          containedInPlace: {
            '@type': 'State',
            name: 'Nevada',
          },
        },
      ],
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
