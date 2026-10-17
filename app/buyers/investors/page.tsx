import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import GeoFAQSchema from '../../components/geo-faq-schema'
import RealScoutListings from '../../components/realscout-listings'

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Investment ROI Guide | Dr. Jan Duffy',
  description: 'Complete Las Vegas real estate investment guide with ROI analysis, cap rates, market trends, and investment property recommendations from Dr. Jan Duffy.',
  keywords: [
    'Las Vegas real estate investment',
    'investment properties Las Vegas',
    'ROI real estate Las Vegas',
    'cap rates Las Vegas',
    'real estate investment guide',
    'investment homes Las Vegas',
    'rental properties Las Vegas',
    'real estate ROI analysis',
    'investment property Las Vegas',
    'Las Vegas investment real estate',
    'Dr. Jan Duffy investors',
    'Las Vegas rental market'
  ],
  openGraph: {
    title: 'Las Vegas Real Estate Investment ROI Guide',
    description: 'Expert real estate investment guide with ROI analysis, cap rates, and market trends for Las Vegas.',
    url: 'https://www.bravadohomes.com/buyers/investors',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/buyers/investors',
  },
}

const faqs = [
  {
    question: "What are the best neighborhoods for real estate investment in Las Vegas?",
    answer: "Best neighborhoods for investment in Las Vegas include: North Las Vegas (strong growth, new construction, good value), Summerlin (stable values, high demand), Henderson (good rental demand, appreciation potential), and areas near employment centers and new development. Dr. Jan Duffy provides market analysis to identify investment opportunities with strong ROI potential."
  },
  {
    question: "What ROI can I expect from Las Vegas real estate investment?",
    answer: "Las Vegas real estate investment ROI varies by property type and location. Typical returns include: Rental properties may yield 5-8% cash flow, appreciation potential varies by neighborhood, and new construction can offer both rental income and appreciation. Dr. Jan Duffy provides ROI analysis for specific properties and neighborhoods based on current market conditions."
  },
  {
    question: "What are current cap rates for Las Vegas investment properties?",
    answer: "Cap rates for Las Vegas investment properties typically range from 5-8% depending on location, property type, and condition. North Las Vegas may offer higher cap rates due to lower entry prices, while established areas like Summerlin may have lower cap rates but stronger appreciation. Dr. Jan Duffy analyzes cap rates for specific investment opportunities."
  },
  {
    question: "Should I invest in new construction or resale properties?",
    answer: "Both have investment benefits: New construction offers modern features attractive to renters, warranties reduce maintenance, and appreciation potential from new communities. Resale properties may offer better cash flow, immediate rental income, and value-add opportunities. Dr. Jan Duffy helps investors evaluate both options based on investment goals."
  },
  {
    question: "What makes Las Vegas a good real estate investment market?",
    answer: "Las Vegas offers: Strong population growth, job market expansion, tourism industry stability, relatively affordable entry prices, no state income tax, landlord-friendly laws, and diverse investment opportunities from single-family rentals to new construction. Dr. Jan Duffy provides market analysis showing Las Vegas investment advantages."
  },
  {
    question: "How do I analyze investment property ROI in Las Vegas?",
    answer: "Analyze ROI by calculating: Annual rental income, operating expenses (maintenance, property management, taxes, insurance), cash flow after expenses, appreciation potential, tax benefits, and total return on investment. Dr. Jan Duffy provides detailed ROI analysis for investment properties, including cash flow projections and appreciation scenarios."
  },
  {
    question: "What are the best property types for Las Vegas investment?",
    answer: "Best investment property types include: Single-family homes (strong rental demand), new construction (modern features, low maintenance), properties near employment centers (steady tenant demand), and homes in growing neighborhoods (appreciation potential). Dr. Jan Duffy helps investors identify property types that match their investment strategy."
  },
  {
    question: "How do rental rates compare to purchase prices in Las Vegas?",
    answer: "Las Vegas rental rates typically provide good cash flow relative to purchase prices, especially in North Las Vegas where entry prices are lower. Rental demand is strong due to population growth and job market expansion. Dr. Jan Duffy analyzes rental rates vs. purchase prices to identify properties with strong cash flow potential."
  },
  {
    question: "What are the risks of Las Vegas real estate investment?",
    answer: "Investment risks include: Market fluctuations, property management challenges, vacancy periods, maintenance costs, interest rate changes affecting financing, and neighborhood changes. Dr. Jan Duffy helps investors understand and mitigate these risks through careful property selection and market analysis."
  },
  {
    question: "Should I invest in North Las Vegas or other areas?",
    answer: "North Las Vegas offers: Lower entry prices, strong growth potential, new construction opportunities, and good rental demand. Other areas may offer: Established neighborhoods with stable values, higher rental rates, and different appreciation patterns. Dr. Jan Duffy helps investors evaluate which areas align with their investment goals."
  },
  {
    question: "How can Dr. Jan Duffy help with real estate investment?",
    answer: "Dr. Jan Duffy helps investors by: Providing market analysis and ROI projections, identifying investment opportunities, analyzing cash flow potential, understanding neighborhood trends, negotiating investment purchases, and connecting investors with property management resources. Her 30+ years experience provides valuable market insights for investment decisions."
  },
  {
    question: "What financing options are available for investment properties?",
    answer: "Investment property financing options include: Conventional loans (20% down typically), portfolio loans, hard money for quick purchases, cash-out refinancing of existing properties, and builder financing for new construction. Dr. Jan Duffy helps investors explore financing options and connect with lenders who specialize in investment properties."
  },
  {
    question: "What are the tax benefits of Las Vegas real estate investment?",
    answer: "Tax benefits may include: Depreciation deductions, mortgage interest deductions, property tax deductions, and potential 1031 exchange opportunities. Consult with a tax professional for your specific situation. Dr. Jan Duffy can refer you to qualified tax professionals who understand real estate investment tax strategies."
  },
  {
    question: "How do I find good investment properties in Las Vegas?",
    answer: "Find investment properties by: Working with an agent experienced in investment properties, understanding market trends, analyzing ROI potential, viewing properties with investment criteria in mind, and considering off-market opportunities. Dr. Jan Duffy specializes in investment properties and helps investors identify opportunities with strong potential."
  }
]

export default async function InvestorsPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      <GeoFAQSchema faqs={faqs} pageTitle="Las Vegas Real Estate Investment ROI Guide" pageUrl="/buyers/investors" />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ REAL ESTATE INVESTMENT SPECIALIST ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Las Vegas Real Estate Investment ROI Guide
          </h1>
          <p className="text-2xl mb-4">
            Expert Analysis: ROI, Cap Rates & Investment Opportunities
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | 30+ Years Experience | Nevada License {agent?.licenseNumber || 'S.0197614'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Jan
            </a>
          </div>
        </div>
      </div>

      {/* Answer-First Content */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
            Las Vegas real estate investment offers strong ROI potential with cap rates typically ranging from 5-8%, 
            strong rental demand from population growth, and appreciation opportunities in growing neighborhoods like 
            North Las Vegas. The market provides diverse investment options from new construction with modern features 
            to value-add resale properties. {agent?.name || 'Dr. Jan Duffy'}, with 30+ years of Las Vegas market experience, 
            provides expert ROI analysis, identifies investment opportunities, and helps investors make data-driven decisions 
            to maximize returns while managing risk.
          </p>
        </div>
      </div>

      {/* Investment Analysis */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Investment Property Analysis
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">ROI Components</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cash flow from rental income</li>
              <li>Appreciation potential</li>
              <li>Tax benefits (depreciation, deductions)</li>
              <li>Equity building through mortgage paydown</li>
              <li>Total return on investment</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Advantages</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strong population and job growth</li>
              <li>Tourism industry stability</li>
              <li>No state income tax</li>
              <li>Landlord-friendly laws</li>
              <li>Diverse investment opportunities</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Need a Deeper ROI Breakdown?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We moved detailed ROI and cap-rate strategy into a dedicated guide to keep this page focused on investor
            FAQs and active opportunities.
          </p>
          <a
            href="/buyers/investors/roi-guide"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Read the ROI and Cap Rate Guide
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Real Estate Investment Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property Listings */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Investment Properties Available
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="350000"
          priceMax="750000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Invest in Las Vegas Real Estate?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you find investment properties with strong ROI potential
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
