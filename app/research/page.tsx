import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Research | Dr. Jan Duffy',
  description: 'Original market research and analysis for Las Vegas real estate including price forecasts, buyer behavior data, neighborhood trends, and investment analysis.',
  keywords: [
    'Las Vegas market research',
    'real estate market analysis',
    'Las Vegas price forecasts',
    'buyer behavior data',
    'neighborhood trends',
    'investment analysis',
    'market research Las Vegas',
    'Dr. Jan Duffy research'
  ],
  openGraph: {
    title: 'Las Vegas Real Estate Market Research',
    description: 'Original market research and analysis for Las Vegas real estate from 30+ years of experience.',
    url: 'https://www.bravadohomes.com/research',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/research',
  },
}

export default async function ResearchPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ ORIGINAL MARKET RESEARCH ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Las Vegas Real Estate Market Research
          </h1>
          <p className="text-2xl mb-4">
            Original Analysis & Insights from 30+ Years Experience
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Clinical Psychology Background | Nevada License {agent?.licenseNumber || 'S.0197614'}
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8">
            {agent?.name || 'Dr. Jan Duffy'} provides original market research based on 30+ years of direct 
            experience in the Las Vegas real estate market. This research includes price forecasts, buyer behavior 
            analysis, neighborhood trend data, and investment property analysis. These insights help buyers, 
            sellers, and investors make data-driven decisions.
          </p>
        </div>
      </div>

      {/* Research Topics */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Research Topics
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">North Las Vegas Neighborhood Price Forecasts 2026</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detailed price forecasting for North Las Vegas neighborhoods based on market trends, development 
              plans, and historical data. Includes analysis of factors affecting price appreciation and 
              recommendations for buyers and investors.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Buyer Behavior Data: Las Vegas First-Time Buyers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Analysis of first-time buyer behavior patterns including price ranges, neighborhood preferences, 
              financing choices, and decision factors. Based on {agent?.name || 'Dr. Jan Duffy'}'s extensive 
              experience working with first-time buyers.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">55+ Active Adult Community Trends: Las Vegas Market</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comprehensive analysis of 55+ active adult community trends including demand patterns, price 
              appreciation, amenity preferences, and buyer demographics. Insights from helping retirees find 
              perfect communities.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Investment Property Cap Rates: Las Vegas Analysis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detailed analysis of cap rates for investment properties across Las Vegas neighborhoods, including 
              cash flow analysis, appreciation potential, and total ROI calculations. Real property examples with 
              detailed financial breakdowns.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Research Methodology */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Research Methodology
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              {agent?.name || 'Dr. Jan Duffy'}'s research methodology combines:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>30+ years of direct market experience and transaction data</li>
              <li>Analysis of current market conditions and trends</li>
              <li>Client behavior patterns and preferences observed over decades</li>
              <li>Comparative market analysis and neighborhood development tracking</li>
              <li>Integration of clinical psychology insights for buyer behavior understanding</li>
              <li>Regular updates to reflect changing market conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Need Market Insights for Your Decision?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} provide personalized market analysis for your situation
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Email Dr. Jan
          </a>
          <a href="/contact" className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
            🏠 Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
