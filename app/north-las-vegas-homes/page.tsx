import Image from 'next/image'
import Link from 'next/link'
import RealScoutListings from '../components/realscout-listings'
import NearbyAmenitiesSection from '../components/nearby-amenities-section'
import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'North Las Vegas Homes for Sale | New Construction | Dr. Janet Duffy',
    description: 'Find your dream home in North Las Vegas. Expert guidance from Dr. Janet Duffy for new construction homes, Bravado community, and Century Communities properties.',
    keywords: [
      'North Las Vegas homes',
      'North Las Vegas homes for sale',
      'new construction North Las Vegas',
      'homes for sale North Las Vegas',
      'Bravado homes',
      'Century Communities North Las Vegas',
      '89031 homes',
      '89031 homes for sale',
      'North Las Vegas real estate',
      'North Las Vegas new homes',
      'Las Vegas new homes',
      'North Las Vegas housing market',
      agent?.name || 'Dr. Janet Duffy',
      'North Las Vegas real estate agent',
      'new construction homes North Las Vegas',
      'North Las Vegas properties',
      'homes North Las Vegas',
      'real estate North Las Vegas',
      'buy homes North Las Vegas',
      'North Las Vegas zip code 89031',
      'North Las Vegas neighborhoods',
      'luxury homes North Las Vegas'
    ],
    openGraph: {
      title: 'North Las Vegas Homes for Sale | New Construction | Dr. Janet Duffy',
      description: 'Find your dream home in North Las Vegas. Expert guidance from Dr. Janet Duffy for new construction homes, Bravado community, and Century Communities properties.',
      url: `${baseUrl}/north-las-vegas-homes`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/north-las-vegas-homes`,
    },
  }
}

export default async function NorthLasVegasHomesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ NORTH LAS VEGAS REAL ESTATE EXPERT ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            North Las Vegas Homes for Sale
          </h1>
          <p className="text-2xl mb-4">
            New Construction & Resale Properties in 89031
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy | Century Communities Featured Partner | Nevada License S.0197614
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          North Las Vegas Real Estate Market
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          North Las Vegas is one of Nevada's fastest-growing areas, offering exceptional value for homebuyers. 
          With new construction communities like Bravado by Century Communities, world-class amenities, and 
          convenient access to the Las Vegas Strip, North Las Vegas provides the perfect blend of suburban 
          tranquility and urban convenience.
        </p>

        {/* Market Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$459K+</div>
            <div className="text-gray-700">New Home Starting Price</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">89031</div>
            <div className="text-gray-700">Prime Zip Code</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15 Min</div>
            <div className="text-gray-700">To Las Vegas Strip</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">170 Acres</div>
            <div className="text-gray-700">Craig Ranch Park</div>
          </div>
        </div>
      </div>

      <NearbyAmenitiesSection compact />

      {/* Property Search Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Find Your North Las Vegas Home
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Home Value Tool */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Discover what your North Las Vegas home is worth in today's market with our instant valuation tool.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          {/* Advanced Search */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🔍 Advanced Property Search
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Use our powerful search to find exactly what you're looking for in North Las Vegas.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>

        {/* Current Listings */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            🏘️ Available North Las Vegas Homes
          </h3>
          <p className="text-gray-700 text-center mb-8">
            Browse current listings in North Las Vegas, including new construction and resale properties.
          </p>
          <RealScoutListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,OTHER"
            priceMin="400000"
            priceMax="900000"
          />
        </div>
      </div>

      {/* Community Highlights */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose North Las Vegas?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Construction</h3>
            <p className="text-gray-700 mb-6">
              Brand new homes with modern amenities, energy-efficient features, and the latest technology. 
              No maintenance hassles, just move in and enjoy.
            </p>
            <Link href="/services" className="cta-button w-full text-center">
              New Construction Services
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🏘️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Master-Planned Communities</h3>
            <p className="text-gray-700 mb-6">
              Thoughtfully designed communities with parks, walking trails, and recreational facilities. 
              Perfect for families and active lifestyles.
            </p>
            <Link href="/community" className="cta-button w-full text-center">
              Explore Communities
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🌆</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Prime Location</h3>
            <p className="text-gray-700 mb-6">
              Easy access to the Las Vegas Strip, McCarran Airport, and major employment centers. 
              Best of both worlds - suburban living with urban convenience.
            </p>
            <Link href="/location" className="cta-button w-full text-center">
              View Location Details
            </Link>
          </div>
        </div>
      </div>

      {/* Expert Guidance */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Expert Guidance from Dr. Janet Duffy
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Work With a Local Expert?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Deep knowledge of North Las Vegas market trends and neighborhoods</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Featured partner with Century Communities for exclusive access</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Unbiased representation - I work for YOU, not the builder</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Proven track record with Nevada License S.0197614</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Access to exclusive financing options and incentives</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Services Offered</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏗️</span>
                <span>New home construction guidance and representation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🤝</span>
                <span>Buyer representation for all property types</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">💰</span>
                <span>Financing assistance and incentive programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📊</span>
                <span>Market analysis and property valuations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                <span>Negotiation expertise and contract review</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Find Your North Las Vegas Dream Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for expert guidance on your North Las Vegas home purchase
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            EMAIL<br />
            {email}
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">North Las Vegas Office</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>North Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Service Area</h3>
            <p>North Las Vegas (89031)<br />
            Las Vegas Metro Area<br />
            Century Communities Communities</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Janet Duffy specializes in North Las Vegas real estate and Century Communities new construction. 
            Nevada License S.0197614. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
