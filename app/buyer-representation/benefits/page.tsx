import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'Benefits of Buyer Representation in North Las Vegas | Dr. Jan Duffy',
    description:
      'Learn why independent buyer representation protects your interests when buying new construction in North Las Vegas. Compare advocacy, negotiation, and market guidance with Dr. Jan Duffy.',
    alternates: {
      canonical: `${baseUrl}/buyer-representation/benefits`,
    },
    openGraph: {
      title: 'Benefits of Buyer Representation in North Las Vegas',
      description:
        'Independent buyer representation helps protect your terms, timeline, and budget in new construction purchases.',
      url: `${baseUrl}/buyer-representation/benefits`,
      type: 'article',
    },
  }
}

export default async function BuyerRepresentationBenefitsPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Why Buyer Representation Matters in New Construction
          </h1>
          <p className="text-2xl mb-4">
            Independent advocacy, expert negotiation, and local market guidance.
          </p>
          <p className="text-xl opacity-90">
            Dr. Jan Duffy
          </p>
        </div>
      </div>

      <div className="content-section mb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Independent Advocacy and Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buyer representation means your advisor works for you, not the builder. That helps protect your
              timeline, contract terms, upgrade decisions, and overall budget from avoidable mistakes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In new construction, paperwork and timelines can change quickly. Independent representation helps keep
              your interests first from contract to final walkthrough.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Expert Negotiation and Market Guidance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professional buyer representation brings neighborhood-level pricing context and negotiation strategy to
              each decision. That includes value comparisons, concession opportunities, and inspection priorities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The goal is not only getting into contract, but closing with terms that reflect true local market value.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What You Gain with Buyer Representation</h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Contract review with buyer-first guidance</li>
            <li>- Negotiation support on pricing and concessions</li>
            <li>- Construction milestone oversight and walkthrough prep</li>
            <li>- Local market context for long-term value decisions</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Home?</h2>
        <p className="text-xl mb-8">
          Get expert representation before you sign.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            Call (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            Email Dr. Jan
          </a>
        </div>
      </div>
    </section>
  )
}
