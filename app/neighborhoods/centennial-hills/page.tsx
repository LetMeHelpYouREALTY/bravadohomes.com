import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import RealScoutListings from '../../components/realscout-listings'

export const metadata: Metadata = {
  title: 'Centennial Hills Neighborhood Guide | Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Complete Centennial Hills neighborhood guide including schools, amenities, price trends, and homes for sale. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Centennial Hills Las Vegas',
    'Centennial Hills neighborhoods',
    'Centennial Hills homes for sale',
    'Centennial Hills real estate',
    'Centennial Hills schools',
    'best neighborhoods Centennial Hills',
    'Dr. Jan Duffy Centennial Hills'
  ],
  openGraph: {
    title: 'Centennial Hills Neighborhood Guide | Las Vegas Real Estate',
    description: 'Complete Centennial Hills neighborhood guide with schools, amenities, and real estate insights.',
    url: 'https://www.bravadohomes.com/neighborhoods/centennial-hills',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/neighborhoods/centennial-hills',
  },
}

export default async function CentennialHillsPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Centennial Hills Neighborhood Guide
          </h1>
          <p className="text-2xl mb-4">
            Complete Guide to Centennial Hills: Schools, Amenities & Real Estate
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | 30+ Years Experience | Nevada License {agent?.licenseNumber || 'S.0197614'}
          </p>
        </div>
      </div>

      {/* Answer-First Content */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
            Centennial Hills is a growing northwest Las Vegas area offering excellent value, family-friendly 
            neighborhoods, and newer construction options. Located in northwest Las Vegas, Centennial Hills 
            features a mix of established and newer communities with average home prices starting around $500,000+. 
            The area is known for good schools, growing amenities, and excellent value relative to other Las Vegas 
            neighborhoods. {agent?.name || 'Dr. Jan Duffy'} provides expert guidance for buyers considering 
            Centennial Hills and can help you find homes that match your needs and budget.
          </p>
        </div>
      </div>

      {/* Neighborhood Details */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Centennial Hills Neighborhood Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Schools</h3>
            <p className="text-gray-700 leading-relaxed">
              Centennial Hills is served by the Clark County School District with good ratings. The area 
              features growing school options with new schools being built to accommodate growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Amenities</h3>
            <p className="text-gray-700 leading-relaxed">
              Centennial Hills offers growing amenities including parks, shopping centers, dining options, 
              and community centers. The area continues to develop with new amenities being added regularly.
            </p>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Homes Available in Centennial Hills Area
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="450000"
          priceMax="700000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Interested in Centennial Hills?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you find the perfect home in Centennial Hills
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Email Dr. Jan
          </a>
        </div>
      </div>
    </section>
  )
}
