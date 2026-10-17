import type { DomainConfig } from '../domains-config'

export type CommunityFaqItem = {
  question: string
  answer: string
}

export function getCommunityFaqs(config: DomainConfig): CommunityFaqItem[] {
  const agent = config.realEstateAgent?.name ?? 'Dr. Jan Duffy'
  const { contact, location } = config

  return [
    {
      question: 'Where is the Bravado community located?',
      answer: `Bravado is at 5060 Wind Springs Street, ${location.city}, ${location.state} ${location.zip}. The gated community includes a park, walking paths, and Century Connect smart home technology in new homes.`,
    },
    {
      question: 'What amenities does Bravado offer?',
      answer:
        'Bravado amenities include a gated entrance, community park with grass area, and walking paths. Craig Ranch Regional Park is nearby for additional trails and recreation.',
    },
    {
      question: 'What is the starting price at Bravado?',
      answer:
        'Move-in ready homes at Bravado start at $445,000 with three floor plans from $429,990–$449,990, per Century Communities (verified 2026-10-12). Confirm current pricing on the builder site or with Dr. Jan Duffy.',
    },
    {
      question: `How do I schedule a tour of Bravado?`,
      answer: `Call ${contact.phone}, email ${contact.email}, or contact ${agent} to schedule a model home tour. Sales hours are typically 10:00 AM–6:00 PM daily.`,
    },
    {
      question: 'Who can buy at Bravado?',
      answer:
        `${agent} works with all qualified buyers in accordance with federal and Nevada fair housing laws. Equal Housing Opportunity.`,
    },
  ]
}
