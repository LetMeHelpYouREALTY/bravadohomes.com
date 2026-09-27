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
  const location = config.location
  const agent = config.realEstateAgent

  return {
    title: `Prime Location | ${config.businessName} | North Las Vegas`,
    description: `Discover the prime location of ${config.businessName} at 5060 Wind Springs Street, North Las Vegas, NV 89031. Expert location guidance from ${agent?.name || 'Dr. Janet Duffy'}, Century Communities Featured Partner. Easy access to Craig Ranch Regional Park, shopping, dining, and major Las Vegas attractions.`,
    keywords: [
      `${config.businessName} location`,
      'Bravado location',
      'Bravado North Las Vegas location',
      'North Las Vegas location',
      '5060 Wind Springs Street',
      'Craig Ranch Regional Park',
      'North Las Vegas real estate location',
      'Las Vegas new homes location',
      'prime location North Las Vegas',
      agent?.name || 'Dr. Janet Duffy',
      'Century Communities location',
      'Bravado community location',
      location.zip,
      `${location.city} prime location`,
      'NV 89031',
      '89031 location',
      'North Las Vegas real estate',
      'strategic location North Las Vegas',
      'I-15 access North Las Vegas',
      'commute times Las Vegas',
      'near Craig Ranch Park',
      'North Las Vegas neighborhoods'
    ],
    alternates: {
      canonical: `${baseUrl}/location`,
    },
    openGraph: {
      title: `Prime Location | ${config.businessName} | North Las Vegas`,
      description: `Discover the prime location of ${config.businessName} at 5060 Wind Springs Street, North Las Vegas, NV 89031. Expert location guidance from ${agent?.name || 'Dr. Janet Duffy'}.`,
      url: `${baseUrl}/location`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Prime Location | ${config.businessName}`,
      description: `Discover the prime location of ${config.businessName} in North Las Vegas.`,
    },
  }
}

export default async function LocationPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ LIMITED TIME: VIP ACCESS TO BRAVADO LOCATION ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Prime Location in North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Location Guidance from Dr. Janet Duffy | Century Communities Featured Partner
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Janet
            </a>
            <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 View Floor Plans
            </a>
          </div>
          <p className="text-lg">
            Strategic North Las Vegas Location with Easy Access to Everything
          </p>
        </div>
      </div>

      {/* About Location Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado's Prime Location
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Discover why Bravado's strategic location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> makes it the 
          perfect place to call home. With easy access to major highways, top-rated 
          schools, shopping destinations, and recreational facilities, you'll enjoy 
          the perfect balance of convenience and lifestyle.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          As a <strong>Featured New Home Construction and Buyer Representation specialist</strong>, Dr. Janet Duffy provides expert guidance on location benefits, local amenities, and investment potential in North Las Vegas.
        </p>
      </div>

      <NearbyAmenitiesSection compact title="What's Nearby Bravado" />

      {/* RealScout Location-Based Listings */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              🏠 Homes Near Bravado Location
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              Explore homes in the North Las Vegas area near Bravado's prime location at 5060 Wind Springs Street. 
              Find the perfect home with easy access to I-15, Craig Ranch Regional Park, and all the amenities you love.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                North Las Vegas Properties Near Bravado
              </h3>
              <RealScoutListings
                agentEncodedId="QWdlbnQtMjI1MDUw"
                sortOrder="PRICE_LOW"
                listingStatus="For Sale"
                propertyTypes=",SFR,OTHER"
                priceMin="450000"
                priceMax="850000"
              />
            </div>

            {/* Home Value Widget */}
            <div className="bg-white p-6 rounded-lg text-gray-900 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                🏡 What's Your Current Home Worth?
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Thinking of moving to North Las Vegas? Get an instant valuation of your current home 
                to see how it compares to the Bravado community pricing.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            {/* Advanced Search Widget */}
            <div className="bg-white p-6 rounded-lg text-gray-900 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                🔍 Advanced Location-Based Search
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Search for homes in specific areas around North Las Vegas. Find properties near 
                schools, parks, shopping centers, or with specific commute times to your workplace.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="/contact" className="cta-button inline-block">
                Get Personalized Location Guidance from Dr. Janet Duffy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Strategic Location Benefits
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Bravado's prime location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> places you at the crossroads of 
          convenience and opportunity. Situated near the intersection of major transportation 
          routes, residents enjoy easy access to the Las Vegas Strip, downtown Las Vegas, 
          McCarran International Airport, and the growing North Las Vegas business district.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">🚗</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Commute Times</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between items-center">
                <span>Las Vegas Strip</span>
                <span className="font-bold text-blue-600">20 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>McCarran International Airport</span>
                <span className="font-bold text-blue-600">25 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Downtown Las Vegas</span>
                <span className="font-bold text-blue-600">15 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Henderson</span>
                <span className="font-bold text-blue-600">30 minutes</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Nearby Attractions</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between items-center">
                <span>Craig Ranch Regional Park</span>
                <span className="font-bold text-green-600">5 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Aliante Casino + Hotel</span>
                <span className="font-bold text-green-600">10 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Las Vegas Motor Speedway</span>
                <span className="font-bold text-green-600">15 minutes</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Red Rock Canyon</span>
                <span className="font-bold text-green-600">35 minutes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Craig Ranch Regional Park Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Craig Ranch Regional Park - Your Backyard Playground
        </h2>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Just minutes from Bravado at <strong>5060 Wind Springs Street</strong>, Craig Ranch Regional Park serves as an extension 
          of your backyard, offering endless recreational opportunities for the whole 
          family. This expansive 170-acre park features multiple playgrounds, sports 
          fields, walking trails, and picnic areas, making it the perfect destination 
          for weekend family outings, birthday parties, and community events.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Sports & Recreation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Basketball courts
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Tennis courts
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Soccer fields
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Baseball diamonds
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Walking trails
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Family Amenities</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Multiple playgrounds
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Picnic areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Restroom facilities
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Parking areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Event pavilions
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Special Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Splash pad for children
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Dog park area
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Amphitheater
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Community garden
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Fitness stations
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Excellent Schools & Education
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Families at Bravado benefit from access to some of North Las Vegas's most 
          respected educational institutions. The community is served by the Clark County 
          School District, which provides comprehensive educational programs from 
          elementary through high school. These schools are known for their dedicated 
          teachers, modern facilities, and commitment to student success.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Raul Elizondo Elementary School</h3>
            <p className="text-gray-700 mb-3">
              A highly-rated elementary school serving grades K-5, known for its 
              strong academic programs and supportive learning environment.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 3 miles from Bravado
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Clifford O. (Pete) Findlay Middle School</h3>
            <p className="text-gray-700 mb-3">
              Serving grades 6-8, this middle school offers comprehensive programs 
              including advanced placement courses and extracurricular activities.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 4 miles from Bravado
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Mojave High School</h3>
            <p className="text-gray-700 mb-3">
              A comprehensive high school serving grades 9-12, offering diverse 
              academic programs, athletics, and college preparation courses.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Distance:</strong> 5 miles from Bravado
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          These schools are committed to providing students with the tools they need 
          to succeed in an ever-changing world. With modern technology, experienced 
          educators, and comprehensive support services, students at these institutions 
          receive a well-rounded education that prepares them for future success.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Shopping & Dining Convenience
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Living at Bravado means having access to a wide variety of shopping and 
          dining options within minutes of your home. From major retailers to local 
          favorites, you'll find everything you need for daily life, special occasions, 
          and weekend entertainment just a short drive away.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Major Retailers Nearby</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Target</strong> - 2 miles (General merchandise, groceries)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Walmart</strong> - 3 miles (Supercenter with full grocery)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Kohl's</strong> - 2 miles (Department store)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Smith's</strong> - 2 miles (Grocery store)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Dining Options</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Northstar Bar & Grill</strong> - Local favorite</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Chili's Grill & Bar</strong> - Family dining</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Jasmine Express</strong> - Asian cuisine</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                <span><strong>Pier 88 Boiling Seafood & Bar</strong> - Seafood specialty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Healthcare & Essential Services
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Access to quality healthcare and essential services is another advantage of 
          living at Bravado. The North Las Vegas area is home to several medical 
          facilities, urgent care centers, and specialty clinics, ensuring that 
          residents have convenient access to healthcare services when needed.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Healthcare Facilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• North Vista Hospital (5 miles)</li>
              <li>• Multiple urgent care centers</li>
              <li>• Dental offices and clinics</li>
              <li>• Specialty medical practices</li>
              <li>• Pharmacy locations</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Essential Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Post office locations</li>
              <li>• Banking and credit unions</li>
              <li>• Auto service centers</li>
              <li>• Home improvement stores</li>
              <li>• Professional services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured New Home Construction & Buyer Representation Section */}
      <div className="vip-partnership mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="vip-badge mb-6">
            ⭐ FEATURED NEW HOME CONSTRUCTION & BUYER REPRESENTATION ⭐
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Location Expertise from Your New Home Specialist
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's deep knowledge of North Las Vegas locations, combined with her Featured New Home Construction and Buyer Representation expertise, ensures you make the best location choice for your family's needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">📍</div>
              <h3 className="text-xl font-bold mb-3">Location Analysis</h3>
              <p className="opacity-90">Expert evaluation of location benefits, commute times, and future development</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🏫</div>
              <h3 className="text-xl font-bold mb-3">School District Knowledge</h3>
              <p className="opacity-90">Comprehensive understanding of local schools and educational opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">💼</div>
              <h3 className="text-xl font-bold mb-3">Investment Potential</h3>
              <p className="opacity-90">Insight into property values and growth potential in North Las Vegas</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/contact" className="cta-button">
              Get Expert Location Guidance
            </a>
          </div>
        </div>
      </div>

      {/* Commuting and Transportation Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Commuting and Transportation Advantages
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Bravado's location at 5060 Wind Springs Street provides exceptional transportation advantages, making 
          commuting to work, accessing entertainment, and traveling convenient and efficient. The strategic 
          positioning in North Las Vegas offers easy access to major highways and employment centers throughout 
          the Las Vegas metropolitan area.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Easy Highway Access</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado's location provides convenient access to I-15, one of Las Vegas's major transportation 
              arteries. This highway access makes commuting to downtown Las Vegas, the Las Vegas Strip, 
              McCarran International Airport, and employment centers throughout the valley quick and straightforward. 
              The proximity to major highways reduces commute times and makes daily travel more efficient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you work in downtown Las Vegas, on the Strip, at Nellis AFB, or in other areas of the 
              metropolitan region, Bravado's location ensures you're never far from your destination. The 
              combination of residential tranquility and urban accessibility makes Bravado ideal for professionals 
              who want the best of both worlds—peaceful living with easy access to work and entertainment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Proximity to Major Employment Centers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              North Las Vegas is home to numerous major employers, including Nellis Air Force Base, which is one 
              of the area's largest employers. Bravado's location makes commuting to Nellis AFB, downtown Las Vegas 
              employment centers, Strip resorts, and other major employers convenient. The strategic location 
              positions residents well for career opportunities throughout the region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The growing North Las Vegas economy also offers local employment opportunities, reducing commute 
              distances for many residents. The combination of local employment options and easy access to 
              regional employment centers makes Bravado an ideal location for professionals at various career 
              stages and in different industries.
            </p>
          </div>
        </div>
      </div>

      {/* Schools and Education Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Excellent Schools and Educational Opportunities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Families choosing Bravado benefit from access to excellent schools in the North Las Vegas area. The 
          community's location provides convenient access to highly-rated elementary, middle, and high schools, 
          making it an ideal choice for families with school-age children. The combination of quality education 
          and prime location creates an excellent environment for raising children.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">School District Advantages</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bravado is located in an area with access to quality schools within the Clark County School District, 
            Nevada's largest school district. The proximity to excellent educational facilities ensures that 
            children receive quality education while families enjoy the convenience of nearby schools. The school 
            district's commitment to excellence and innovation benefits Bravado families.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The location also provides access to various educational opportunities, including private schools, 
            charter schools, and specialized programs. Families have options to choose the educational approach 
            that best fits their children's needs, while the convenient location ensures that school commutes are 
            manageable and don't add significant time to daily routines.
          </p>
        </div>
      </div>

      {/* Investment and Growth Potential Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Location-Based Investment Potential and Growth
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Bravado's location in North Las Vegas positions it well for long-term property value appreciation. 
          The area's growth trajectory, infrastructure improvements, and economic development create a favorable 
          environment for property investment. Understanding these location-based advantages helps homeowners 
          appreciate both the immediate benefits and long-term value of choosing Bravado.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">North Las Vegas Growth Trajectory</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              North Las Vegas is one of the fastest-growing areas in the Las Vegas metropolitan region, with 
              new businesses, residential developments, and infrastructure improvements enhancing the area's appeal. 
              This growth creates strong demand for housing, which contributes to property value appreciation. 
              Bravado's location in this growth corridor positions it well for long-term investment value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination of existing amenities and planned development creates a positive environment for 
              property values. Infrastructure improvements, new commercial developments, and continued residential 
              growth all contribute to the area's appeal and property value growth. This growth trajectory makes 
              Bravado an attractive investment in addition to being a great place to live.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Location Advantages</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado's location at 5060 Wind Springs Street offers strategic advantages that enhance both living 
              experience and property value. The proximity to Craig Ranch Regional Park, major shopping centers, 
              employment centers, and transportation infrastructure creates a location that remains desirable 
              regardless of market conditions. These location advantages contribute to long-term property value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination of location benefits, community amenities, and quality construction creates a 
              property that maintains value and appeal over time. Location is one of the most important factors 
              in real estate value, and Bravado's strategic positioning in North Las Vegas provides lasting 
              advantages that benefit homeowners both now and in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Experience the Bravado Location Advantage
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Ready to discover why Bravado's location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> makes it the perfect choice for your 
          new home? Dr. Janet Duffy invites you to experience firsthand the convenience, 
          amenities, and lifestyle that await you in this premier North Las Vegas 
          community.
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
            <h3 className="text-xl font-bold mb-3">Bravado North Las Vegas</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Featured New Home Construction<br />
            & Buyer Representation Specialist<br />
            Nevada License: S.0197614</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Century Communities</h3>
            <p>One of America's Top 10 Homebuilders<br /><br />
            Model Home Hours<br />
            Monday-Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            © 2025 Bravado | Homes by Dr Janet Duffy. All rights reserved.<br />
            Independent real estate resource. Not affiliated with or endorsed by Century Communities. Dr. Janet Duffy is an independent real estate agent providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </section>
  )
}
