import Image from 'next/image'
import Link from 'next/link'
import RealScoutListings from '../components/realscout-listings'
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
    title: 'New Homes Las Vegas | New Construction Homes | Dr. Jan Duffy',
    description: 'Find new construction homes in Las Vegas and North Las Vegas. Expert guidance from Dr. Jan Duffy for Century Communities, Bravado, and other new home communities.',
    keywords: [
      'new homes Las Vegas',
      'new construction Las Vegas',
      'new homes North Las Vegas',
      'new construction North Las Vegas',
      'Century Communities Las Vegas',
      'Bravado new homes',
      'new construction homes Las Vegas',
      'new construction homes Nevada',
      'new homes for sale Las Vegas',
      'new homes Las Vegas 2025',
      'new home communities Las Vegas',
      'new construction communities Las Vegas',
      agent?.name || 'Dr. Jan Duffy',
      'Las Vegas new construction',
      'new home builders Las Vegas',
      'new construction homes Nevada',
      'Las Vegas new homes',
      'new homes Las Vegas area',
      'new construction homes for sale',
      'new home communities North Las Vegas',
      'new homes Las Vegas Valley',
      'new construction Las Vegas Valley'
    ],
    openGraph: {
      title: 'New Homes Las Vegas | New Construction Homes | Dr. Jan Duffy',
      description: 'Find new construction homes in Las Vegas and North Las Vegas. Expert guidance from Dr. Jan Duffy for Century Communities, Bravado, and other new home communities.',
      url: `${baseUrl}/new-homes-las-vegas`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/new-homes-las-vegas`,
    },
  }
}

export default async function NewHomesLasVegasPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ LAS VEGAS NEW CONSTRUCTION EXPERT ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            New Homes Las Vegas & North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            New Construction Homes from Top Builders
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy | Century Communities Featured Partner
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

      {/* New Construction Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          New Construction Homes in Las Vegas Area
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Las Vegas and North Las Vegas are experiencing unprecedented growth in new home construction. 
          From luxury communities like Bravado by Century Communities to master-planned developments 
          throughout the valley, new construction homes offer modern amenities, energy efficiency, 
          and the latest smart home technology.
        </p>

        {/* Market Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$459K+</div>
            <div className="text-gray-700">Starting Prices</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">Top 10</div>
            <div className="text-gray-700">National Builder</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Smart</div>
            <div className="text-gray-700">Home Technology</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">Energy</div>
            <div className="text-gray-700">Efficient Design</div>
          </div>
        </div>
      </div>

      {/* Featured Communities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Featured New Home Communities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bravado Community */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Bravado Community New Construction Homes"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bravado by Century Communities</h3>
            <p className="text-gray-700 mb-4">
              North Las Vegas' premier new construction community featuring luxury two-story homes 
              with Century Connect® smart home technology. Gated community with modern amenities.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Homes from $429,990 (Century Communities, 2026-10-12)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1,792 - 2,119 sq ft
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Century Connect® smart home
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Gated community security
              </li>
            </ul>
            <div className="flex gap-4">
              <Link href="/community" className="cta-button flex-1 text-center">
                View Community
              </Link>
              <Link href="/floor-plans" className="cta-button flex-1 text-center">
                Floor Plans
              </Link>
            </div>
          </div>

          {/* Other New Communities */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Las Vegas New Construction Communities"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Las Vegas Area New Communities</h3>
            <p className="text-gray-700 mb-4">
              Multiple new construction communities throughout the Las Vegas valley, each offering 
              unique amenities, floor plans, and lifestyle options to fit your needs.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                Multiple community locations
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏗️</span>
                Various floor plan options
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">💰</span>
                Flexible financing options
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🎯</span>
                Expert builder representation
              </li>
            </ul>
            <Link href="/services" className="cta-button w-full text-center">
              Explore All Communities
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose New Construction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose New Construction Homes?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Modern Design</h3>
            <p className="text-gray-700">Latest architectural trends, open floor plans, and contemporary finishes that match your lifestyle.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Efficiency</h3>
            <p className="text-gray-700">Advanced insulation, high-efficiency HVAC systems, and smart home technology reduce utility costs.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Low Maintenance</h3>
            <p className="text-gray-700">New construction means no immediate repairs, modern systems, and builder warranties for peace of mind.</p>
          </div>
        </div>
      </div>

      {/* Property Search Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Find Your New Construction Home
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Home Value Tool */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Discover what your current home is worth to plan your new construction purchase.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          {/* Advanced Search */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🔍 Advanced New Home Search
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Search for new construction homes throughout the Las Vegas area.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>

        {/* Current New Construction Listings */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            🏘️ Available New Construction Homes
          </h3>
          <p className="text-gray-700 text-center mb-8">
            Browse current new construction listings in Las Vegas and North Las Vegas.
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

      {/* Expert Guidance */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Expert New Construction Guidance from Dr. Jan Duffy
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Work With a New Construction Expert?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Deep knowledge of Las Vegas new construction market and builders</span>
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
                <span>Construction process guidance from contract to closing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Access to exclusive financing options and incentives</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">New Construction Services</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏗️</span>
                <span>Builder selection and community comparison</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📋</span>
                <span>Contract review and negotiation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🔍</span>
                <span>Construction progress monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏠</span>
                <span>Pre-closing walkthrough coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">💰</span>
                <span>Financing and incentive optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Find Your New Construction Dream Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on your Las Vegas new construction home purchase
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
            <h3 className="text-xl font-bold mb-3">Las Vegas Office</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Jan Duffy</h3>
            <p>Las Vegas New Construction Expert<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Service Area</h3>
            <p>Las Vegas Metro Area<br />
            North Las Vegas<br />
            Century Communities Communities</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Jan Duffy specializes in Las Vegas new construction homes and Century Communities properties. 
            Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
