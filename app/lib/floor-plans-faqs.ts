import type { DomainConfig } from '../domains-config'

export type FloorPlansFaqItem = {
  question: string
  answer: string
}

export function getFloorPlansFaqs(config: DomainConfig): FloorPlansFaqItem[] {
  const agent = config.realEstateAgent?.name ?? 'Dr. Jan Duffy'
  const { contact } = config

  return [
    {
      question: 'How many floor plans does Bravado offer?',
      answer:
        'Bravado has three two-story plans: Residence 1792 (1,792 sq ft), Residence 1943 (1,943 sq ft), and Residence 2119 (2,119 sq ft), built by Century Communities.',
    },
    {
      question: 'What are Bravado floor plan starting prices?',
      answer:
        'Century Communities lists Residence 1792 from $429,990, Residence 1943 from $439,990, and Residence 2119 from $449,990 (verified 2026-10-12). Move-in ready homes may start at $445,000.',
    },
    {
      question: 'Is smart home technology included?',
      answer:
        'Yes. Bravado homes include the Century Connect smart home package as standard equipment per Century Communities.',
    },
    {
      question: `How can ${agent} help me choose a floor plan?`,
      answer: `${agent} provides independent buyer representation—comparing layouts, lot options, and builder pricing. Call ${contact.phone} or email ${contact.email}.`,
    },
    {
      question: 'Who can purchase a Bravado home?',
      answer:
        'All qualified buyers are welcome. Equal Housing Opportunity. Verify schools and financing with CCSD and your lender for your specific situation.',
    },
  ]
}
