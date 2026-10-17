import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'Las Vegas ROI and Cap Rate Guide for Investors | Dr. Jan Duffy',
    description:
      'Use this Las Vegas investor guide to understand ROI components, cap rates, rental demand, and risk factors for North Las Vegas investment properties.',
    alternates: {
      canonical: `${baseUrl}/buyers/investors/roi-guide`,
    },
    openGraph: {
      title: 'Las Vegas ROI and Cap Rate Guide for Investors',
      description:
        'A practical guide to cash flow, appreciation, cap rates, and market risk for Las Vegas investment decisions.',
      url: `${baseUrl}/buyers/investors/roi-guide`,
      type: 'article',
    },
  }
}

export default async function InvestorsRoiGuidePage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const agentName = config.realEstateAgent?.name || 'Dr. Jan Duffy'

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Las Vegas ROI and Cap Rate Guide</h1>
          <p className="text-2xl mb-4">How investors evaluate cash flow, appreciation, and risk in today&apos;s market.</p>
          <p className="text-xl opacity-90">{agentName} | Investor-Focused Guidance</p>
        </div>
      </div>

      <div className="content-section mb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Core ROI Components</h2>
            <ul className="text-gray-700 space-y-2">
              <li>- Net cash flow after operating costs</li>
              <li>- Appreciation potential by neighborhood</li>
              <li>- Debt paydown contribution to equity</li>
              <li>- Tax strategy impact (with licensed tax advisor)</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Cap Rate Context</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cap rates vary by location, condition, and rent profile. A higher cap rate can indicate stronger income
              yield, but may also signal higher risk depending on asset and submarket profile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Evaluate cap rate together with vacancy assumptions, maintenance cadence, and long-term neighborhood demand.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Investor Decision Checklist</h2>
          <ul className="text-gray-700 space-y-2">
            <li>- Confirm realistic rent comps and seasonality</li>
            <li>- Underwrite with conservative vacancy and repair assumptions</li>
            <li>- Compare financing structures before offer strategy</li>
            <li>- Prioritize neighborhoods with durable demand drivers</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
