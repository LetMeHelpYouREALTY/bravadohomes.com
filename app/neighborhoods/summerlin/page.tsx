import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import RealScoutListings from '../../components/realscout-listings'
import ComparisonTableSchemaComponent from '../../components/comparison-table-schema'
import { ComparisonTable } from '../../components/comparison-table-schema'

export const metadata: Metadata = {
  title: 'Summerlin Neighborhood Guide | Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Complete Summerlin neighborhood guide including schools, amenities, price trends, and homes for sale. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Summerlin Las Vegas',
    'Summerlin neighborhoods',
    'Summerlin homes for sale',
    'Summerlin real estate',
    'Summerlin schools',
    'Summerlin amenities',
    'best neighborhoods Summerlin',
    'Dr. Jan Duffy Summerlin'
  ],
  openGraph: {
    title: 'Summerlin Neighborhood Guide | Las Vegas Real Estate',
    description: 'Complete Summerlin neighborhood guide with schools, amenities, and real estate insights.',
    url: 'https://www.bravadohomes.com/neighborhoods/summerlin',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/neighborhoods/summerlin',
  },
}

const neighborhoodComparison = {
  title: "Summerlin vs Other Las Vegas Neighborhoods",
  description: "Comparison of Summerlin with other major Las Vegas neighborhoods",
  columns: ["Feature", "Summerlin", "Henderson", "North Las Vegas", "Centennial Hills"],
  rows: [
    { feature: "Average Home Price", "summerlin": "$650,000+", "henderson": "$550,000+", "north-las-vegas": "$450,000+", "centennial-hills": "$500,000+" },
    { feature: "School District Rating", "summerlin": "Excellent", "henderson": "Excellent", "north-las-vegas": "Good", "centennial-hills": "Good" },
    { feature: "Golf Courses", "summerlin": "Multiple", "henderson": "Several", "north-las-vegas": "Limited", "centennial-hills": "Limited" },
    { feature: "Shopping Centers", "summerlin": "Multiple", "henderson": "Multiple", "north-las-vegas": "Growing", "centennial-hills": "Growing" },
    { feature: "New Construction", "summerlin": "Limited", "henderson": "Moderate", "north-las-vegas": "Extensive", "centennial-hills": "Moderate" },
    { feature: "Community Amenities", "summerlin": "Extensive", "henderson": "Extensive", "north-las-vegas": "Growing", "centennial-hills": "Good" }
  ]
}

export default async function SummerlinPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      <ComparisonTableSchemaComponent 
        title={neighborhoodComparison.title}
        description={neighborhoodComparison.description}
        columns={neighborhoodComparison.columns}
        rows={neighborhoodComparison.rows}
        pageUrl="/neighborhoods/summerlin"
      />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Summerlin Neighborhood Guide
          </h1>
          <p className="text-2xl mb-4">
            Complete Guide to Summerlin: Schools, Amenities & Real Estate
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Licensed Since 2008
          </p>
        </div>
      </div>

      {/* Answer-First Content */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
            Summerlin is one of Las Vegas's premier master-planned communities, offering nearby public schools, 
            extensive amenities, golf courses, and older neighborhoods. Located on the western edge 
            of Las Vegas, Summerlin features higher-end homes with average prices starting around $650,000+. 
            The community is known for its school district ratings, multiple golf courses, shopping 
            centers, and extensive community amenities. {agent?.name || 'Dr. Jan Duffy'} provides expert 
            guidance for buyers considering Summerlin and can help you find homes that match your needs and budget.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="content-section mb-16">
        <ComparisonTable 
          title={neighborhoodComparison.title}
          columns={neighborhoodComparison.columns}
          rows={neighborhoodComparison.rows}
        />
      </div>

      {/* Neighborhood Details */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Summerlin Neighborhood Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Schools</h3>
            <p className="text-gray-700 leading-relaxed">
              Summerlin is served by the Clark County School District with excellent ratings. Many schools 
              in the area receive high marks for academic performance, making it an ideal choice for families.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Amenities</h3>
            <p className="text-gray-700 leading-relaxed">
              Summerlin offers extensive amenities including multiple golf courses, parks, walking trails, 
              community centers, shopping centers, and dining options. The community is well-maintained 
              with extensive landscaping and public spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Homes Available in Summerlin Area
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="600000"
          priceMax="1000000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Interested in Summerlin?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you find the perfect home in Summerlin
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
