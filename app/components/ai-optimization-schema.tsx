/**
 * AI-Optimized Schema Markup for Better Indexing
 * FAQ and HowTo structured data aligned with visible homepage copy.
 */
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import { getHomeFaqs } from '../lib/home-faqs'

export default async function AIOptimizationSchema() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const location = config.location
  const contact = config.contact
  const agent = config.realEstateAgent
  const agentName = agent?.name ?? 'Dr. Jan Duffy'
  const faqs = getHomeFaqs(config)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to buy a new home at Bravado in ${location.city}`,
    description: `Steps to purchase a new construction home at Bravado with guidance from ${agentName}.`,
    step: [
      {
        '@type': 'HowToStep',
        name: `Contact ${agentName}`,
        text: `Call ${contact.phone} or email ${contact.email} to schedule a consultation.`,
        url: `${baseUrl}/contact`,
      },
      {
        '@type': 'HowToStep',
        name: 'Tour model homes',
        text: `Visit Bravado at ${location.address}, ${location.city}, ${location.state} ${location.zip}. Sales hours are 10:00 AM–6:00 PM daily.`,
        url: baseUrl,
      },
      {
        '@type': 'HowToStep',
        name: 'Compare floor plans',
        text: 'Review Residence 1792, 1943, and 2119 layouts and included features.',
        url: `${baseUrl}/floor-plans`,
      },
      {
        '@type': 'HowToStep',
        name: 'Explore financing',
        text: `Review financing options and incentives with ${agentName}.`,
        url: `${baseUrl}/financing-incentives`,
      },
      {
        '@type': 'HowToStep',
        name: 'Select your home',
        text: `Choose a floor plan and homesite with ${agentName}'s buyer representation.`,
        url: `${baseUrl}/floor-plans`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  )
}
