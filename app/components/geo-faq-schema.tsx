import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

interface FAQItem {
  question: string
  answer: string
}

interface GeoFAQSchemaProps {
  faqs: FAQItem[]
  pageTitle?: string
  pageUrl?: string
}

export default async function GeoFAQSchema({ 
  faqs, 
  pageTitle = "Frequently Asked Questions",
  pageUrl 
}: GeoFAQSchemaProps) {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  if (!faqs || faqs.length === 0) {
    return null
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "about": {
      "@type": "Thing",
      "name": pageTitle
    },
    "author": {
      "@type": "Person",
      "name": agent?.name || "Dr. Jan Duffy",
      "identifier": agent?.licenseNumber || "S.0197614"
    },
    "publisher": {
      "@type": "Organization",
      "name": config.businessName,
      "url": baseUrl
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
