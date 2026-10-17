import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl

  return {
    title: 'Century Communities Builder Quality and Reputation | Bravado Homes',
    description:
      'Review Century Communities quality standards, design approach, and customer reputation in Las Vegas. Learn how builder quality impacts long-term value at Bravado.',
    alternates: {
      canonical: `${baseUrl}/century-communities/builder-quality`,
    },
    openGraph: {
      title: 'Century Communities Builder Quality and Reputation',
      description:
        'A focused guide to Century Communities quality, innovation, and customer experience in the Las Vegas market.',
      url: `${baseUrl}/century-communities/builder-quality`,
      type: 'article',
    },
  }
}

export default async function CenturyBuilderQualityPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const agentName = config.realEstateAgent?.name || 'Dr. Jan Duffy'

  return (
    <section>
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Century Communities: Quality, Design, and Reputation
          </h1>
          <p className="text-2xl mb-4">
            A practical look at what builder quality means for Las Vegas buyers.
          </p>
          <p className="text-xl opacity-90">{agentName} | Buyer Representation Specialist</p>
        </div>
      </div>

      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Builder Quality Matters
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
          Builder quality directly affects your ownership experience, maintenance costs, and resale confidence.
          For Bravado buyers, understanding construction standards and design consistency helps you evaluate long-term value,
          not just move-in features.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Construction Standards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quality starts with repeatable standards across framing, systems, and finishes. Buyers should compare
              workmanship consistency, inspection response, and closeout quality instead of relying on model-home presentation alone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In new construction communities, construction execution often impacts both comfort and ongoing maintenance
              expectations over the first several years of ownership.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Design and Practical Livability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Effective floor plan design balances lifestyle flexibility with day-to-day practicality: storage, flow,
              usable square footage, and utility efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Communities that pair practical layouts with modern systems tend to hold stronger buyer demand when it is time to resell.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer Experience and Reputation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reputation is more than brand size. For buyers, what matters is responsiveness during construction,
            clarity of communication, and post-close follow-through.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Working with dedicated buyer representation helps you track these signals and compare options with
            clear decision criteria before you commit.
          </p>
        </div>
      </div>
    </section>
  )
}
