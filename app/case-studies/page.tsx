import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Case Studies & Market Analysis | Dr. Jan Duffy',
  description: 'Case studies and market analysis documenting 30+ years of Las Vegas real estate experience. Real client success stories and market insights from Dr. Jan Duffy.',
  keywords: [
    'real estate case studies',
    'Las Vegas market analysis',
    'buyer success stories',
    'real estate market trends',
    'case studies Las Vegas',
    'real estate analysis',
    'Dr. Jan Duffy case studies',
    'Las Vegas real estate trends'
  ],
  openGraph: {
    title: 'Real Estate Case Studies & Market Analysis',
    description: 'Case studies and market analysis from 30+ years of Las Vegas real estate experience.',
    url: 'https://www.bravadohomes.com/case-studies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/case-studies',
  },
}

export default async function CaseStudiesPage() {
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
            ⭐ 30+ YEARS EXPERIENCE ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Real Estate Case Studies & Market Analysis
          </h1>
          <p className="text-2xl mb-4">
            Documenting 30+ Years of Las Vegas Real Estate Expertise
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
            {agent?.name || 'Dr. Jan Duffy'} has helped hundreds of clients navigate the Las Vegas real estate 
            market over 30+ years. These case studies document real client experiences, market analysis, and 
            insights gained from decades of experience. Each case study illustrates how expertise, market knowledge, 
            and client-focused service create successful outcomes.
          </p>
        </div>
      </div>

      {/* Coming Soon Case Studies */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Featured Case Studies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">30 Years of Las Vegas Market Trends: 1995-2025</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comprehensive analysis of Las Vegas real estate market evolution over three decades, including 
              price trends, neighborhood development, and market cycles. Based on {agent?.name || 'Dr. Jan Duffy'}'s 
              direct experience in the market.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Case Study: First-Time Buyer Success in North Las Vegas</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detailed case study of a first-time buyer's journey from pre-approval to closing, including 
              challenges overcome, strategies used, and lessons learned. Real client experience with names 
              and identifying details protected.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">55+ Community Buyer Journey: Complete Analysis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In-depth analysis of helping a retiree find the perfect active adult community, including 
              community evaluation process, lifestyle matching, and decision factors. Shows how clinical 
              psychology background enhances understanding of life transitions.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Investor ROI Analysis: Las Vegas vs National Average</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comparative analysis of Las Vegas real estate investment returns versus national averages, 
              including cap rates, cash flow analysis, and appreciation potential. Real investment property 
              examples with detailed ROI calculations.
            </p>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Market Analysis & Insights
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          {agent?.name || 'Dr. Jan Duffy'} provides regular market analysis based on 30+ years of experience 
          and current market conditions. These insights help buyers, sellers, and investors make informed decisions.
        </p>
        <div className="text-center">
          <Link href="/research" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg">
            View Market Research →
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With {agent?.name || 'Dr. Jan Duffy'}?</h2>
        <p className="text-xl mb-8">
          Experience the expertise documented in these case studies
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
