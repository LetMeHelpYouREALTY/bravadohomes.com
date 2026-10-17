import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'North Las Vegas Home Buying Process Guide | Dr. Jan Duffy',
    description:
      'Step-by-step North Las Vegas home buying process for new construction and resale buyers, including planning, selection, and closing support from Dr. Jan Duffy.',
    alternates: {
      canonical: `${baseUrl}/services/home-buying-process`,
    },
    openGraph: {
      title: 'North Las Vegas Home Buying Process Guide',
      description:
        'Understand each stage of the home buying process from consultation through closing with buyer-first guidance.',
      url: `${baseUrl}/services/home-buying-process`,
      type: 'article',
    },
  }
}

export default async function HomeBuyingProcessPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agentName = config.realEstateAgent?.name || 'Dr. Jan Duffy'

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">North Las Vegas Home Buying Process</h1>
          <p className="text-2xl mb-4">A practical step-by-step guide from first consultation to closing.</p>
          <p className="text-xl opacity-90">{agentName} | Buyer Representation Specialist</p>
        </div>
      </div>

      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          The Process, Simplified
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">1) Consultation and Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Start with goals, budget, neighborhood fit, and timeline. This stage sets your criteria so decisions
              later are faster and clearer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">2) Selection and Negotiation</h3>
            <p className="text-gray-700 leading-relaxed">
              Compare floor plans, lot options, and terms. Review value-driving choices and negotiate contract details
              that protect your budget and timeline.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">3) Construction and Closing</h3>
            <p className="text-gray-700 leading-relaxed">
              Track milestones, coordinate walkthroughs, and close with confidence. Ongoing support helps reduce stress
              during the handoff and move-in period.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help with Your Next Step?</h2>
        <p className="text-xl mb-8">Get buyer-first guidance before you sign.</p>
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
