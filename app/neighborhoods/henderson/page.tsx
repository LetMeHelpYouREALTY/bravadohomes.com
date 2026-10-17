import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import RealScoutListings from '../../components/realscout-listings'
import ComparisonTableSchemaComponent from '../../components/comparison-table-schema'
import { ComparisonTable } from '../../components/comparison-table-schema'

export const metadata: Metadata = {
  title: 'Henderson Neighborhood Guide | Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Complete Henderson neighborhood guide including schools, amenities, price trends, and homes for sale. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Henderson Las Vegas',
    'Henderson neighborhoods',
    'Henderson homes for sale',
    'Henderson real estate',
    'Henderson schools',
    'best neighborhoods Henderson',
    'Dr. Jan Duffy Henderson'
  ],
  openGraph: {
    title: 'Henderson Neighborhood Guide | Las Vegas Real Estate',
    description: 'Complete Henderson neighborhood guide with schools, amenities, and real estate insights.',
    url: 'https://www.bravadohomes.com/neighborhoods/henderson',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/neighborhoods/henderson',
  },
}

export default async function HendersonPage() {
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
            Henderson Neighborhood Guide
          </h1>
          <p className="text-2xl mb-4">
            Complete Guide to Henderson: Schools, Amenities & Real Estate
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
            Henderson is one of Las Vegas's most desirable suburban communities, offering excellent schools, 
            family-friendly neighborhoods, and good value relative to Summerlin. Located southeast of Las Vegas, 
            Henderson features well-established neighborhoods with average home prices starting around $550,000+. 
            The community is known for excellent school district ratings, multiple shopping centers, golf courses, 
            and extensive community amenities. {agent?.name || 'Dr. Jan Duffy'} provides expert guidance for 
            buyers considering Henderson and can help you find homes that match your needs and budget.
          </p>
        </div>
      </div>

      {/* Neighborhood Details */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Henderson Neighborhood Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Schools</h3>
            <p className="text-gray-700 leading-relaxed">
              Henderson is served by the Clark County School District with excellent ratings. Many schools 
              in the area receive high marks for academic performance, making it an ideal choice for families.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Amenities</h3>
            <p className="text-gray-700 leading-relaxed">
              Henderson offers extensive amenities including golf courses, parks, walking trails, community 
              centers, shopping centers, and dining options. The community provides a suburban feel with 
              excellent access to Las Vegas amenities.
            </p>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Homes Available in Henderson Area
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="500000"
          priceMax="900000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Interested in Henderson?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you find the perfect home in Henderson
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
