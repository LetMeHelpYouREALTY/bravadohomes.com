import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import GeoFAQSchema from '../../components/geo-faq-schema'
import RealScoutListings from '../../components/realscout-listings'

export const metadata: Metadata = {
  title: 'Complete First-Time Buyer Guide: Las Vegas 2025 | Dr. Jan Duffy',
  description: 'Complete first-time home buyer guide for Las Vegas 2025. Expert advice from Dr. Jan Duffy on down payments, financing, neighborhoods, and finding your first home in Las Vegas.',
  keywords: [
    'first-time home buyer Las Vegas',
    'first-time buyer guide Las Vegas',
    'first-time home buyer Nevada',
    'first-time buyer programs Las Vegas',
    'starter homes Las Vegas',
    'first-time buyer tips',
    'home buying process first-time buyers',
    'first-time buyer financing Las Vegas',
    'affordable homes Las Vegas',
    'first-time buyer assistance',
    'Dr. Jan Duffy first-time buyers',
    'Las Vegas first-time home buyer'
  ],
  openGraph: {
    title: 'Complete First-Time Buyer Guide: Las Vegas 2025',
    description: 'Expert first-time home buyer guide for Las Vegas with financing tips, neighborhood recommendations, and step-by-step guidance.',
    url: 'https://www.bravadohomes.com/buyers/first-time',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/buyers/first-time',
  },
}

const faqs = [
  {
    question: "What should first-time home buyers know about buying in Las Vegas?",
    answer: "First-time home buyers in Las Vegas should know: Las Vegas offers excellent value compared to other major cities, down payment assistance programs are available, the market includes both new construction and resale homes, property taxes are lower than many states, and working with a buyer representation specialist protects your interests. Dr. Jan Duffy specializes in first-time buyers and provides expert guidance through every step of the process."
  },
  {
    question: "What down payment assistance programs are available for first-time buyers in Las Vegas?",
    answer: "First-time buyers in Las Vegas may qualify for: Nevada Home is Possible program (down payment assistance), FHA loans (3.5% down), VA loans (0% down for veterans), USDA loans (0% down in eligible areas), and local first-time buyer programs. Dr. Jan Duffy helps first-time buyers understand their options and connect with qualified lenders who specialize in first-time buyer programs."
  },
  {
    question: "What are the best neighborhoods for first-time buyers in Las Vegas?",
    answer: "Best neighborhoods for first-time buyers in Las Vegas include: North Las Vegas (excellent value, new construction), Centennial Hills (nearby public schools), Summerlin (well-established, higher prices), Henderson (suburban feel, good value), and newer communities with smart home technology. Dr. Jan Duffy helps first-time buyers identify neighborhoods that match their budget, lifestyle, and long-term goals."
  },
  {
    question: "How much do first-time buyers typically need for a down payment in Las Vegas?",
    answer: "First-time buyers in Las Vegas typically need 3-20% down depending on the loan program. FHA loans require 3.5% down, conventional loans may require 5-20% down, and down payment assistance programs can reduce or eliminate the down payment. Dr. Jan Duffy helps first-time buyers understand their options and find financing that fits their situation."
  },
  {
    question: "What's the home buying process for first-time buyers?",
    answer: "The first-time buyer process includes: 1) Get pre-approved for a mortgage, 2) Work with a buyer representation specialist like Dr. Jan Duffy, 3) Identify neighborhoods and homes that match your needs, 4) Make offers with expert negotiation, 5) Complete inspections and appraisal, 6) Close on your new home. Dr. Jan Duffy guides first-time buyers through each step, explaining everything in clear terms."
  },
  {
    question: "What should first-time buyers look for in a home?",
    answer: "First-time buyers should look for: Homes within budget including maintenance costs, school attendance zones, neighborhoods with growth potential, homes with room to grow, low-maintenance features if desired, and properties that match your lifestyle. Dr. Jan Duffy helps first-time buyers prioritize their needs and find homes that align with both current and future goals."
  },
  {
    question: "What are common mistakes first-time buyers make?",
    answer: "Common first-time buyer mistakes include: Not getting pre-approved first, skipping buyer representation, not budgeting for closing costs and maintenance, buying at the top of budget without emergency fund, ignoring neighborhood research, skipping inspections, and not considering long-term plans. Dr. Jan Duffy helps first-time buyers avoid these pitfalls with expert guidance."
  },
  {
    question: "How much can first-time buyers afford in Las Vegas?",
    answer: "First-time buyers in Las Vegas can typically afford homes priced from $300,000 to $600,000 depending on income, credit score, and available down payment assistance. Starter homes in North Las Vegas start around $400,000 with new construction options. Dr. Jan Duffy helps first-time buyers understand their buying power and identify homes within their budget."
  },
  {
    question: "What credit score do first-time buyers need?",
    answer: "First-time buyers typically need: FHA loans require 580+ (or 500+ with higher down payment), conventional loans require 620-740+ for best rates, VA loans may be more flexible, and credit score affects interest rates. Dr. Jan Duffy helps first-time buyers understand credit requirements and improve their buying position."
  },
  {
    question: "Should first-time buyers buy new construction or resale?",
    answer: "Both options have benefits: New construction offers modern features, warranties, smart home technology, and customization. Resale homes may offer better value, older neighborhoods, and immediate move-in. Dr. Jan Duffy helps first-time buyers evaluate both options based on their priorities, budget, and timeline."
  },
  {
    question: "What are closing costs for first-time buyers?",
    answer: "Closing costs for first-time buyers typically range from 2-5% of the home price and include: loan origination fees, title insurance, appraisal, inspection, escrow fees, and prepaid expenses. Some down payment assistance programs help with closing costs. Dr. Jan Duffy helps first-time buyers understand and budget for all costs."
  },
  {
    question: "How long does it take first-time buyers to close on a home?",
    answer: "First-time buyers typically close in 30-45 days after offer acceptance, though new construction may take longer. Timeline depends on: loan processing, inspection negotiations, appraisal, and final underwriting. Dr. Jan Duffy helps first-time buyers understand timelines and keeps the process moving smoothly."
  },
  {
    question: "What makes Dr. Jan Duffy a good choice for first-time buyers?",
    answer: "Dr. Jan Duffy is ideal for first-time buyers because: She provides buyer representation that protects your interests, explains everything in clear terms, has been in real estate since 1983, understands first-time buyer programs and financing, helps you avoid common mistakes, and provides ongoing support beyond closing. Her goal is ensuring first-time buyers have a positive, successful home buying experience."
  }
]

export default async function FirstTimeBuyersPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      <GeoFAQSchema faqs={faqs} pageTitle="First-Time Home Buyer Guide Las Vegas" pageUrl="/buyers/first-time" />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ FIRST-TIME BUYER SPECIALIST ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Complete First-Time Buyer Guide: Las Vegas 2025
          </h1>
          <p className="text-2xl mb-4">
            Expert Guidance for First-Time Home Buyers in Las Vegas
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | In Real Estate Since 1983
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
            First-time home buyers in Las Vegas can find excellent value, down payment assistance programs, 
            and neighborhoods perfect for starting homeownership. The Las Vegas market offers both new construction 
            homes with modern features and resale homes with older neighborhoods. {agent?.name || 'Dr. Jan Duffy'}, 
            in real estate since 1983 with buyer representation expertise, specializes in guiding first-time buyers 
            through the entire process—from pre-approval to closing—while protecting their interests and helping 
            them avoid common mistakes.
          </p>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Step-by-Step: Buying Your First Home in Las Vegas
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 1: Get Pre-Approved</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before looking at homes, get pre-approved for a mortgage. This tells you exactly how much you can afford 
              and shows sellers you're serious. Dr. Jan Duffy can connect you with trusted lenders who specialize in 
              first-time buyer programs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 2: Work with Buyer Representation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a buyer representation specialist, Dr. Jan Duffy protects your interests throughout the process. 
              She negotiates on your behalf, explains every step, and helps you avoid costly mistakes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 3: Find the Right Neighborhood</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Las Vegas offers diverse neighborhoods for first-time buyers. Dr. Jan Duffy helps you identify areas 
              that match your budget, lifestyle, and long-term goals, whether you prefer new construction or communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 4: Make an Informed Offer</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With expert negotiation skills, Dr. Jan Duffy helps you make competitive offers that protect your interests. 
              She explains market conditions, comparable sales, and helps you decide on the right offer strategy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 5: Complete Inspections & Close</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Jan Duffy guides you through inspections, appraisals, and final negotiations. She ensures you understand 
              everything and helps you close on your first home with confidence.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Need the Full First-Time Buyer Roadmap?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We moved the complete first-time buyer process into a dedicated guide so this page can stay focused on
            FAQs, listings, and fast answers.
          </p>
          <a
            href="/buyers/first-time/steps-guide"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Read the First-Time Buyer Steps Guide
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          First-Time Buyer Frequently Asked Questions
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
          Starter Homes Available for First-Time Buyers
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="300000"
          priceMax="500000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Buy Your First Home?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} guide you through your first home purchase
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
