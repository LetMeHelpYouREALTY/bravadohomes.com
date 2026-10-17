import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Choose: Transparent Decision-Making Process | Dr. Jan Duffy',
  description: 'Transparent explanation of our neighborhood selection criteria, home recommendation process, and buyer representation methodology. See how we help you make the best decisions.',
  keywords: [
    'how we choose homes',
    'transparent real estate',
    'neighborhood selection criteria',
    'home recommendation process',
    'buyer representation methodology',
    'transparent decision making',
    'real estate transparency',
    'how we choose neighborhoods',
    'Dr. Jan Duffy transparency',
    'buyer representation process'
  ],
  openGraph: {
    title: 'How We Choose: Transparent Decision-Making Process',
    description: 'Transparent explanation of our neighborhood selection, home recommendation, and buyer representation processes.',
    url: 'https://www.bravadohomes.com/transparency',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/transparency',
  },
}

export default async function TransparencyPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  // HowTo schema for process transparency
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How We Choose Homes and Neighborhoods for Buyers",
    "description": "Transparent process for selecting neighborhoods and recommending homes based on buyer needs",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Initial Consultation",
        "text": "We begin with a comprehensive consultation to understand your lifestyle, budget, priorities, and long-term goals. This includes discussing your must-haves, nice-to-haves, and deal-breakers."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Neighborhood Analysis",
        "text": "We analyze neighborhoods based on: location factors (proximity to work, healthcare, shopping), school district quality (if applicable), community amenities and lifestyle fit, growth potential and market trends, safety and demographics, and long-term value appreciation."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Home Matching",
        "text": "We match homes to your criteria using: detailed property analysis, comparison with market comparables, evaluation of condition and features, assessment of value relative to price, and consideration of your lifestyle needs."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Recommendation Process",
        "text": "We provide recommendations based on: alignment with your stated priorities, market value and investment potential, lifestyle fit and long-term satisfaction, and transparent pros and cons of each option."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Ongoing Support",
        "text": "We continue supporting you through: offer negotiation, inspections and due diligence, closing process, and post-closing assistance as needed."
      }
    ],
    "author": {
      "@type": "Person",
      "name": agent?.name || "Dr. Jan Duffy",
      "identifier": agent?.licenseNumber || "S.0197614"
    }
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ TRANSPARENT DECISION-MAKING ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            How We Choose: Our Transparent Process
          </h1>
          <p className="text-2xl mb-4">
            See How We Select Neighborhoods & Recommend Homes
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | 30+ Years Experience | Nevada License {agent?.licenseNumber || 'S.0197614'}
          </p>
        </div>
      </div>

      {/* Process Overview */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
            We believe in complete transparency in how we help you choose neighborhoods and homes. 
            Our process is designed to ensure you make informed decisions based on your priorities, 
            lifestyle, and long-term goals. Here's exactly how we analyze neighborhoods, evaluate homes, 
            and make recommendations—with complete transparency at every step.
          </p>
        </div>
      </div>

      {/* Neighborhood Selection Criteria */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Neighborhood Selection Criteria
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Location Factors</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proximity to employment centers and commute times</li>
              <li>Access to healthcare facilities and medical centers</li>
              <li>Shopping, dining, and entertainment options</li>
              <li>Transportation access and walkability</li>
              <li>Proximity to family, friends, or other important locations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Characteristics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>School district quality and ratings (if applicable)</li>
              <li>Community amenities (parks, pools, clubhouses, trails)</li>
              <li>Safety statistics and neighborhood demographics</li>
              <li>Community culture and lifestyle fit</li>
              <li>HOA fees, rules, and what they cover</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Market Analysis</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Current market trends and price appreciation</li>
              <li>Growth potential and development plans</li>
              <li>Resale value and market stability</li>
              <li>Comparable sales and market activity</li>
              <li>Investment potential if applicable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Home Recommendation Process */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Home Recommendation Process
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 1: Understanding Your Needs</h3>
            <p className="text-gray-700 leading-relaxed">
              We begin with a comprehensive consultation to understand your lifestyle, priorities, budget, 
              and long-term goals. This includes discussing your must-haves, nice-to-haves, and deal-breakers. 
              Dr. Jan Duffy's clinical psychology background helps her understand the emotional and 
              lifestyle factors that matter most to you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 2: Neighborhood Analysis</h3>
            <p className="text-gray-700 leading-relaxed">
              We analyze neighborhoods based on location factors, school district quality (if applicable), 
              community amenities, growth potential, safety, demographics, and long-term value appreciation. 
              We provide transparent analysis of each neighborhood's pros and cons.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 3: Home Matching</h3>
            <p className="text-gray-700 leading-relaxed">
              We match homes to your criteria using detailed property analysis, comparison with market 
              comparables, evaluation of condition and features, assessment of value relative to price, 
              and consideration of your lifestyle needs. We show you exactly why each home matches—or doesn't match—your priorities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 4: Transparent Recommendations</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide recommendations based on alignment with your stated priorities, market value and 
              investment potential, lifestyle fit and long-term satisfaction, and transparent pros and cons 
              of each option. You'll always understand why we recommend (or don't recommend) a particular home.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Step 5: Ongoing Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We continue supporting you through offer negotiation, inspections and due diligence, closing 
              process, and post-closing assistance as needed. Our commitment to transparency continues 
              throughout the entire process.
            </p>
          </div>
        </div>
      </div>

      {/* Buyer Representation Methodology */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Buyer Representation Methodology
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment to You</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As your buyer representation specialist, Dr. Jan Duffy is legally and ethically obligated 
              to protect your interests. This means:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We negotiate on your behalf to achieve the best possible terms</li>
              <li>We disclose all material facts about properties and transactions</li>
              <li>We provide expert advice based on your best interests</li>
              <li>We maintain confidentiality about your personal and financial information</li>
              <li>We are transparent about any conflicts of interest or dual agency situations</li>
              <li>We help you understand all aspects of the transaction</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Transparent Service?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you with complete transparency every step of the way
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
