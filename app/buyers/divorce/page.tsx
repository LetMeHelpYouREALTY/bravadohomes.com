import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import GeoFAQSchema from '../../components/geo-faq-schema'
import RealScoutListings from '../../components/realscout-listings'

export const metadata: Metadata = {
  title: 'Divorce-Friendly Fast Sale Homes: Las Vegas Market | Dr. Jan Duffy',
  description: 'Expert guidance for divorce real estate sales in Las Vegas. Fast sale strategies, market insights, and compassionate support from Dr. Jan Duffy during life transitions.',
  keywords: [
    'divorce real estate Las Vegas',
    'fast sale homes Las Vegas',
    'divorce home sale',
    'quick home sale Las Vegas',
    'divorce real estate agent',
    'selling home during divorce',
    'fast sale strategies',
    'divorce property sale',
    'quick sale homes',
    'divorce real estate help',
    'Dr. Jan Duffy divorce',
    'Las Vegas divorce real estate'
  ],
  openGraph: {
    title: 'Divorce-Friendly Fast Sale Homes: Las Vegas Market',
    description: 'Expert guidance for divorce real estate sales with fast sale strategies and compassionate support.',
    url: 'https://www.bravadohomes.com/buyers/divorce',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/buyers/divorce',
  },
}

const faqs = [
  {
    question: "How do I sell my home quickly during a divorce?",
    answer: "To sell your home quickly during divorce: Price competitively based on current market conditions, prepare the home for sale efficiently, consider staging for faster sales, work with an agent experienced in divorce sales, and be flexible with showings and negotiations. Dr. Jan Duffy specializes in fast sales during life transitions and provides compassionate, efficient service to help you move forward."
  },
  {
    question: "What makes a home 'divorce-friendly' for fast sale?",
    answer: "Divorce-friendly homes for fast sale typically have: Competitive pricing based on market analysis, good condition requiring minimal repairs, neutral staging that appeals to buyers, flexible showing schedules, and clear title without complications. Dr. Jan Duffy helps you prepare your home for fast sale while respecting the emotional challenges of divorce."
  },
  {
    question: "How long does it take to sell a home during divorce?",
    answer: "Well-priced homes in good condition typically sell in 30-60 days in the Las Vegas market. Fast sale strategies can reduce this timeline. The key factors are: pricing strategy, home condition, market conditions, and flexibility. Dr. Jan Duffy works efficiently to expedite the sale process while ensuring you get fair market value."
  },
  {
    question: "What should I consider when selling a home during divorce?",
    answer: "When selling during divorce, consider: Legal requirements for both parties' approval, how proceeds will be divided, timeline needs for finalizing the divorce, tax implications of the sale, and emotional readiness for the process. Dr. Jan Duffy's clinical psychology background helps her understand the emotional aspects of divorce sales and provides supportive, professional guidance."
  },
  {
    question: "How do I price my home for a fast sale?",
    answer: "Price for fast sale by: Getting a comparative market analysis from an experienced agent, pricing 2-5% below comparable homes for quick interest, considering current market conditions, and being realistic about time vs. price trade-offs. Dr. Jan Duffy provides expert pricing analysis to help you sell quickly while maximizing value."
  },
  {
    question: "What are the best strategies for fast home sales?",
    answer: "Best fast sale strategies include: Competitive pricing, professional staging, excellent photography, flexible showing schedules, pre-inspection to identify issues, and working with an experienced agent. Dr. Jan Duffy implements proven fast sale strategies while respecting the sensitive nature of divorce situations."
  },
  {
    question: "Do I need both parties' approval to sell during divorce?",
    answer: "Typically yes—both parties must agree to sell if both names are on the title. If only one party is on the title, that person can sell independently. Legal advice is important for your specific situation. Dr. Jan Duffy works with divorce attorneys when needed and understands the legal complexities of divorce sales."
  },
  {
    question: "What neighborhoods in Las Vegas sell fastest?",
    answer: "Fastest-selling neighborhoods in Las Vegas typically include: North Las Vegas (new construction appeal), Summerlin (established, desirable), Henderson (good value), and areas with good schools and amenities. Dr. Jan Duffy provides market analysis to help you understand which areas sell fastest in current market conditions."
  },
  {
    question: "How can Dr. Jan Duffy help with divorce home sales?",
    answer: "Dr. Jan Duffy helps with divorce sales by: Providing compassionate, professional service during a difficult time, implementing fast sale strategies, understanding the emotional aspects through her clinical psychology background, coordinating with divorce attorneys when needed, and efficiently managing the sale process. Her goal is helping you move forward as quickly and smoothly as possible."
  },
  {
    question: "Should I sell before or after divorce is finalized?",
    answer: "This depends on your specific situation, legal requirements, and timeline needs. Some couples sell before finalization to divide proceeds cleanly, while others wait. Consult with your divorce attorney about timing. Dr. Jan Duffy can work with either timeline and helps coordinate with legal professionals when needed."
  },
  {
    question: "What are the tax implications of selling during divorce?",
    answer: "Tax implications depend on: Capital gains exclusion eligibility, how long you've owned the home, and how proceeds are divided. Consult with a tax professional for your specific situation. Dr. Jan Duffy can refer you to qualified tax professionals who understand divorce-related real estate transactions."
  },
  {
    question: "How do I prepare my home for fast sale during divorce?",
    answer: "Prepare for fast sale by: Decluttering and depersonalizing, making necessary repairs, considering professional staging, ensuring excellent curb appeal, and being flexible with showings. Dr. Jan Duffy provides specific guidance on preparing your home for fast sale while respecting the emotional challenges of divorce."
  },
  {
    question: "What if my ex-spouse won't agree to sell?",
    answer: "If your ex-spouse won't agree to sell, options may include: Mediation, buyout by one party, court order in some cases, or waiting for agreement. Legal advice is essential. Dr. Jan Duffy understands these complexities and can work with your attorney to find solutions."
  },
  {
    question: "Can I buy a new home before selling the marital home?",
    answer: "This depends on your financial situation, credit, and ability to qualify for two mortgages. Some buyers can qualify for a bridge loan or new purchase contingent on sale. Dr. Jan Duffy can help you explore options and connect you with lenders who understand these situations."
  }
]

export default async function DivorceBuyersPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      <GeoFAQSchema faqs={faqs} pageTitle="Divorce-Friendly Fast Sale Homes Las Vegas" pageUrl="/buyers/divorce" />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ DIVORCE REAL ESTATE SPECIALIST ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Divorce-Friendly Fast Sale Homes: Las Vegas Market
          </h1>
          <p className="text-2xl mb-4">
            Compassionate, Efficient Real Estate Services During Life Transitions
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Clinical Psychology Background
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
            Selling a home during divorce requires fast, efficient service with compassionate understanding of the emotional 
            challenges involved. {agent?.name || 'Dr. Jan Duffy'}, with her clinical psychology background, 
            in real estate since 1983, specializes in divorce-friendly fast sales. She implements proven strategies 
            to sell homes quickly—typically in 30-60 days—while ensuring fair market value, coordinating with divorce attorneys 
            when needed, and providing supportive guidance throughout this difficult transition.
          </p>
        </div>
      </div>

      {/* Fast Sale Strategies */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Fast Sale Strategies for Divorce Situations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              Pricing your home 2-5% below comparable homes creates immediate buyer interest and multiple offers. 
              Dr. Jan Duffy provides expert market analysis to price competitively while maximizing value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Preparation</h3>
            <p className="text-gray-700 leading-relaxed">
              Decluttering, staging, and making necessary repairs ensures your home appeals to the widest buyer pool. 
              Dr. Jan Duffy provides specific guidance on preparing your home for fast sale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Showings</h3>
            <p className="text-gray-700 leading-relaxed">
              Being available for showings and responding quickly to offers accelerates the sale process. 
              Dr. Jan Duffy coordinates showings efficiently while respecting your privacy needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Negotiation</h3>
            <p className="text-gray-700 leading-relaxed">
              Skilled negotiation ensures you get fair market value while closing quickly. 
              Dr. Jan Duffy negotiates on your behalf to achieve your goals efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Divorce Real Estate Frequently Asked Questions
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
          Homes Available for Fast Sale
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="350000"
          priceMax="700000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Need a Fast Sale During Divorce?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you sell quickly with compassionate, professional service
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
