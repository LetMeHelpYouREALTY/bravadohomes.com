import type { DomainConfig } from '../domains-config'

export type HomeFaqItem = {
  question: string
  answer: string
}

/** Homepage FAQ copy — single source for visible HTML and FAQPage JSON-LD (AEO). */
export function getHomeFaqs(config: DomainConfig): HomeFaqItem[] {
  const agent = config.realEstateAgent?.name ?? 'Dr. Jan Duffy'
  const { contact, location, businessName } = config
  const address =
    location.address !== 'TBD' && location.zip !== 'TBD'
      ? `${location.address}, ${location.city}, ${location.state} ${location.zip}`
      : `${location.city}, ${location.state}`

  return [
    {
      question: `What is ${businessName}?`,
      answer: `${businessName} is an independent buyer-representation resource for Bravado, a gated Century Communities new-construction community in North Las Vegas. Move-in ready homes start at $445,000 and three two-story floor plans range from 1,792 to 2,119 sq ft (Century Communities Bravado page, verified 2026-10-12).`,
    },
    {
      question: `Who is ${agent}?`,
      answer: `${agent} is a licensed Nevada REALTOR®, licensed since 2008 · 35 years in Las Vegas, who provides independent buyer representation for Bravado and North Las Vegas new construction. ${agent} is not employed by Century Communities.`,
    },
    {
      question: 'Where is Bravado located?',
      answer: `Bravado is at ${address}. The sales office is open daily 10:00 AM–6:00 PM. Call ${contact.phone} or email ${contact.email} for directions or a tour.`,
    },
    {
      question: 'What floor plans are available at Bravado?',
      answer:
        'Bravado offers three two-story plans: Residence 1792 (from $429,990), Residence 1943 (from $439,990), and Residence 2119 (from $449,990), per Century Communities (2026-10-12). Plans include Century Connect smart home technology.',
    },
    {
      question: `How do I contact ${agent} about Bravado?`,
      answer: `Call ${contact.phone}, email ${contact.email}, or use the contact form at ${config.baseUrl}/contact to schedule a consultation.`,
    },
    {
      question: 'Who can buy a home at Bravado?',
      answer:
        `${agent} works with all qualified buyers in accordance with federal and Nevada fair housing laws. Equal Housing Opportunity.`,
    },
  ]
}
