import AmenityMap from '../components/amenity-map/amenity-map'
import NearbyAmenitiesSchema from '../components/nearby-amenities-schema'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import { BRAVADO_COMMUNITY, NEARBY_AMENITIES_FAQS } from '../lib/nearby-amenities'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  const title = `Nearby Amenities in ${BRAVADO_COMMUNITY.name}, ${BRAVADO_COMMUNITY.city} | Dr. Janet Duffy`
  const description = `Interactive map and local guide to restaurants, grocery, parks, golf, healthcare, and schools near Bravado at 5060 Wind Springs Street, ${BRAVADO_COMMUNITY.city}, NV. Hyperlocal expertise from ${agent?.name ?? 'Dr. Janet Duffy'}.`

  return {
    title,
    description,
    keywords: [
      'Bravado nearby amenities',
      'North Las Vegas amenities',
      'Craig Ranch Regional Park',
      'grocery near Bravado',
      'hospitals near North Las Vegas',
      'Bravado location',
      agent?.name ?? 'Dr. Janet Duffy',
      '89031 amenities',
    ],
    alternates: {
      canonical: `${baseUrl}/nearby-amenities`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/nearby-amenities`,
      type: 'website',
    },
  }
}

export default async function NearbyAmenitiesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <>
      <NearbyAmenitiesSchema />
      <section>
        <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nearby Amenities in {BRAVADO_COMMUNITY.name},{' '}
              {BRAVADO_COMMUNITY.city}
            </h1>
            <p className="text-xl mb-4 opacity-90">
              {BRAVADO_COMMUNITY.address}, {BRAVADO_COMMUNITY.city},{' '}
              {BRAVADO_COMMUNITY.state} {BRAVADO_COMMUNITY.zip}
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Hyperlocal map and buyer guide from {agent?.name ?? 'Dr. Janet Duffy'} — Century
              Communities featured partner for {BRAVADO_COMMUNITY.fullName}.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interactive amenity map
          </h2>
          <p className="text-gray-700 mb-6">
            Filter by category to explore places around Bravado. The community
            marker shows the sales office at Wind Springs Street; drive times
            below are approximate and vary with traffic.
          </p>
          <AmenityMap />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 mb-16">
          <article className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900">
              Dining near Bravado
            </h2>
            <p>
              North Las Vegas dining clusters along Craig Road, Aliante Parkway,
              and Nellis Boulevard. <strong>Topgolf Las Vegas</strong> at 4600
              Nexus Way combines entertainment and food a short drive from
              Bravado. <strong>Aliante Casino + Hotel</strong> at 7300 Aliante
              Parkway offers multiple restaurant options. Chain favorites such as
              Chili&apos;s and local spots referenced on our{' '}
              <a href="/location" className="text-blue-600 hover:underline">
                location page
              </a>{' '}
              sit within the north-valley corridor buyers use daily.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Parks &amp; recreation
            </h2>
            <p>
              <strong>Craig Ranch Regional Park</strong> (628 W Craig Road, North
              Las Vegas, NV 89032) is the anchor outdoor amenity for Bravado
              families — 170 acres operated by the City of North Las Vegas with
              trails, sports fields, and community events. Bravado&apos;s own
              gated parks and walking paths complement this regional destination.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Golf</h2>
            <p>
              <strong>Aliante Golf Club</strong> shares the Aliante master plan
              at 7300 Aliante Parkway. Additional public and resort courses across
              the Las Vegas Valley are reachable via I-15 and the 215 Beltway.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Healthcare
            </h2>
            <p>
              <strong>North Vista Hospital</strong> (1409 E Lake Mead Boulevard,
              North Las Vegas) serves the immediate area.{' '}
              <strong>Centennial Hills Hospital Medical Center</strong> (657 N
              Town Center Drive, Las Vegas) is a major northwest valley hospital.
              Urgent care and pharmacy chains line Craig Road and Decatur Boulevard.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Grocery &amp; shopping
            </h2>
            <p>
              Daily errands typically include Smith&apos;s, Walmart Supercenter,
              Target, and Kohl&apos;s within a few miles of Bravado (see our{' '}
              <a href="/location" className="text-blue-600 hover:underline">
                location guide
              </a>
              ). <strong>Las Vegas Premium Outlets North</strong> (875 S Grand
              Central Parkway) and Aliante retail add regional shopping trips.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Schools</h2>
            <p>
              <strong>Legacy High School</strong> (150 W Deer Springs Way, North
              Las Vegas) is one of the Clark County School District campuses
              serving the Aliante and north-valley area. Always verify attendance
              zones with CCSD for your specific lot before you buy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">
              Commute &amp; key destinations
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Las Vegas Strip:</strong> approximately 20–25 miles
                south via I-15 (approximate drive time).
              </li>
              <li>
                <strong>Harry Reid International Airport:</strong> approximately
                15–20 miles south via I-15 (approximate).
              </li>
              <li>
                <strong>Downtown Summerlin / Summerlin:</strong> approximately
                25–30 miles southwest via US-95 and the 215 Beltway
                (approximate).
              </li>
              <li>
                <strong>I-15 access:</strong> Bravado sits in the north-valley
                growth corridor with freeway connections for Nellis AFB and
                regional employment centers.
              </li>
            </ul>
          </article>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {NEARBY_AMENITIES_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Work with {agent?.name ?? 'Dr. Janet Duffy'} on Bravado
          </h2>
          <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Featured buyer representation for {BRAVADO_COMMUNITY.fullName}.
            Nevada License {agent?.licenseNumber ?? 'S.0197614'} · Berkshire
            Hathaway HomeServices Nevada Properties partnership through Century
            Communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17025001955"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call (702) 500-1955
            </a>
            <a
              href={`mailto:${email}`}
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Dr. Janet
            </a>
            <a
              href="/contact"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              Schedule a tour
            </a>
          </div>
          <p className="mt-6 text-sm opacity-90">
            {BRAVADO_COMMUNITY.address}, {BRAVADO_COMMUNITY.city},{' '}
            {BRAVADO_COMMUNITY.state} {BRAVADO_COMMUNITY.zip}
          </p>
        </div>
      </section>
    </>
  )
}
