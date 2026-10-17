import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'First-Time Buyer Steps Guide in Las Vegas | Dr. Jan Duffy',
    description:
      'Follow a clear step-by-step first-time buyer process in Las Vegas: pre-approval, neighborhood selection, offer strategy, inspections, and closing.',
    alternates: {
      canonical: `${baseUrl}/buyers/first-time/steps-guide`,
    },
    openGraph: {
      title: 'First-Time Buyer Steps Guide in Las Vegas',
      description:
        'A practical first-time buyer roadmap for planning, financing, and closing with confidence.',
      url: `${baseUrl}/buyers/first-time/steps-guide`,
      type: 'article',
    },
  }
}

export default async function FirstTimeStepsGuidePage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const agentName = config.realEstateAgent?.name || 'Dr. Jan Duffy'

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">First-Time Buyer Steps Guide</h1>
          <p className="text-2xl mb-4">
            A simple roadmap for buying your first home in Las Vegas.
          </p>
          <p className="text-xl opacity-90">{agentName} | Buyer Representation</p>
        </div>
      </div>

      <div className="content-section mb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1) Get Pre-Approved</h2>
            <p className="text-gray-700 leading-relaxed">
              Confirm budget early so your search stays practical and competitive.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2) Define Area and Home Criteria</h2>
            <p className="text-gray-700 leading-relaxed">
              Balance commute, schools, monthly payment, and long-term resale potential.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3) Build Offer Strategy</h2>
            <p className="text-gray-700 leading-relaxed">
              Use local comps and contingencies to submit a strong but protected offer.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4) Complete Inspections and Appraisal</h2>
            <p className="text-gray-700 leading-relaxed">
              Address material findings and keep financing milestones on track.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5) Close and Transition Smoothly</h2>
            <p className="text-gray-700 leading-relaxed">
              Finalize documents, verify condition, and prepare for move-in with fewer surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
