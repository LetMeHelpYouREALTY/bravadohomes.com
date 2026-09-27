import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Bravado Community Amenities | Luxury Lifestyle Features North Las Vegas | Dr. Janet Duffy',
    description: 'Discover Bravado community amenities including gated security, community parks, walking paths, and Century Connect® smart home technology. Expert guidance from Dr. Janet Duffy, Featured Century Communities Partner.',
    keywords: [
      'Bravado community amenities',
      'Bravado amenities',
      'Bravado community features',
      'gated community North Las Vegas',
      'community amenities North Las Vegas',
      'Century Connect smart home',
      'smart home technology',
      'community parks North Las Vegas',
      'walking paths North Las Vegas',
      'Bravado lifestyle',
      'luxury community amenities',
      'gated community features',
      agent?.name || 'Dr. Janet Duffy',
      'Century Communities amenities',
      'North Las Vegas community amenities',
      '89031 community amenities',
      'community recreation',
      'active lifestyle community',
      'family-friendly amenities',
      'Bravado community lifestyle'
    ],
    alternates: {
      canonical: `${baseUrl}/amenities`,
    },
    openGraph: {
      title: 'Bravado Community Amenities | Luxury Lifestyle Features',
      description: 'Discover Bravado community amenities including gated security, parks, and smart home technology. Expert guidance from Dr. Janet Duffy.',
      url: `${baseUrl}/amenities`,
      type: 'website',
    },
  }
}

export default async function AmenitiesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Bravado Community Amenities
          </h1>
          <p className="text-2xl mb-4">
            Luxury Lifestyle Features in North Las Vegas
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Janet
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Tour
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
          <p className="mt-4">
            <a href="/nearby-amenities" className="underline font-semibold hover:text-blue-200">
              Explore the interactive nearby amenities map →
            </a>
          </p>
        </div>
      </div>

      {/* Community Overview */}
      <div className="luxury-community-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Luxury Community Living at Bravado
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Bravado</strong> offers residents a <strong>premium lifestyle</strong> with carefully designed amenities and features that enhance daily living. This gated community in North Las Vegas combines <strong>luxury, convenience, and security</strong> to create the perfect environment for modern families.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado provides easy access to <strong>I-15, Craig Ranch Regional Park</strong>, and all the amenities that make North Las Vegas an exceptional place to call home.
            </p>
            <div className="luxury-highlight">
              <p>
                <strong>Dr. Janet Duffy</strong>, as a Featured New Home Construction & Buyer Representation Specialist, can help you understand all the <strong>community benefits and amenities</strong> that make Bravado the perfect choice for your new home.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-80 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/community/amenities.svg"
                alt="Bravado Community Amenities"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Community Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Gated</p>
                  <p className="text-sm text-gray-600">Security & Privacy</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Parks</p>
                  <p className="text-sm text-gray-600">Recreation Areas</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Paths</p>
                  <p className="text-sm text-gray-600">Walking Trails</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">Smart</p>
                  <p className="text-sm text-gray-600">Home Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Privacy Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Gated Security & Privacy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="text-4xl mb-4 text-center">🔒</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Gated Community Access</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Controlled access entry gates
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Enhanced security and privacy
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Reduced traffic and noise
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Peaceful residential environment
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="text-4xl mb-4 text-center">🏡</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Privacy & Exclusivity</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Private residential streets
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Exclusive community atmosphere
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Well-maintained common areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Professional property management
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recreation & Lifestyle Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Recreation & Active Lifestyle
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Community Parks</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Green spaces and landscaping</li>
              <li>• Playground areas for children</li>
              <li>• Picnic and gathering areas</li>
              <li>• Beautiful natural surroundings</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🚶‍♀️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Walking Paths</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Paved walking trails</li>
              <li>• Jogging and exercise paths</li>
              <li>• Pet-friendly walkways</li>
              <li>• Scenic route options</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Active Lifestyle</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Outdoor exercise opportunities</li>
              <li>• Family-friendly activities</li>
              <li>• Community fitness spaces</li>
              <li>• Healthy living environment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comprehensive Amenities Details Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Bravado Community Amenities Overview
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Bravado community amenities</strong> are designed to enhance your daily living experience and create a lifestyle that combines luxury, convenience, and active recreation. Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado offers residents access to thoughtfully designed amenities that promote health, wellness, community connection, and modern convenience. These <strong>community features</strong> are included for all residents, creating value that extends beyond your individual home.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Park and Green Spaces</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Bravado community park</strong> serves as the heart of neighborhood life, providing beautifully landscaped green spaces where families can gather, children can play, and neighbors can connect. The park features expansive grass areas perfect for picnics, outdoor games, and community events. This thoughtfully designed space creates opportunities for social interaction while providing a peaceful retreat from daily routines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The park's design includes multiple seating areas, shade trees, and well-maintained landscaping that creates an attractive environment year-round. Whether you're hosting a birthday party, enjoying a quiet afternoon, or participating in community events, the <strong>community park</strong> provides the perfect setting. The proximity to these recreational spaces is one of the key benefits of living in the <strong>Bravado community</strong>.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Walking Paths and Active Lifestyle</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>walking paths</strong> throughout Bravado create a network of routes that encourage active living and provide safe, scenic ways to explore the community. These well-maintained pathways are perfect for morning jogs, evening strolls, or simply taking a walk with family or pets. The paths wind through the community, connecting different areas while providing opportunities to enjoy the beautiful Nevada weather and natural surroundings.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The walking path system promotes health and wellness while fostering community connections. Residents often meet neighbors while walking, creating a sense of community that extends beyond property boundaries. The paths are designed to be accessible and safe, with proper lighting for evening use, making it easy to maintain an active lifestyle regardless of the time of day.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Gated Community Security Benefits</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>gated community</strong> aspect of Bravado provides enhanced security and privacy that's rare at this price point in North Las Vegas. The controlled access system ensures that only residents and authorized visitors can enter the community, providing peace of mind whether you're at home or away. This security feature is particularly valuable for families with children, as it creates a safer environment where children can play and explore.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond security, the gated community also provides privacy and exclusivity that enhances property values. The reduced traffic and noise create a more peaceful residential environment, while the sense of exclusivity adds to the community's appeal. The <strong>gated community</strong> feature is one of the most valued amenities among Bravado residents, contributing to both security and quality of life.
          </p>
        </div>
      </div>

      {/* Smart Home Technology Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Century Connect® Smart Home Technology - Included Standard
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every Bravado home comes equipped with advanced <strong>Century Connect® smart home features</strong> for modern living, included as standard equipment—not an expensive upgrade
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">📱</div>
              <h3 className="text-xl font-bold mb-3">Smart Control</h3>
              <p className="opacity-90">Control lighting, temperature, and security from your phone</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🔋</div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="opacity-90">Smart thermostats and energy monitoring for lower bills</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏠</div>
              <h3 className="text-xl font-bold mb-3">Home Automation</h3>
              <p className="opacity-90">Automated scheduling and voice assistant integration</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🔒</div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="opacity-90">Smart locks and security system integration</p>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Why Century Connect® Matters</h3>
            <p className="text-lg opacity-95 mb-4">
              The <strong>Century Connect® smart home technology</strong> included in every Bravado home represents thousands of dollars in value that would be expensive upgrades in other communities. This comprehensive system includes smart thermostats, lighting controls, security integration, and mobile app access, all standard equipment. The energy-saving features help reduce monthly utility costs while providing convenience and modern living capabilities.
            </p>
            <p className="text-lg opacity-95">
              Unlike other builders where similar technology costs $5,000-$10,000 as an upgrade, <strong>Century Communities</strong> includes <strong>Century Connect®</strong> in every Bravado home. This provides immediate value and long-term convenience, making Bravado an exceptional value in the North Las Vegas new construction market.
            </p>
          </div>
        </div>
      </div>

      {/* Lifestyle Benefits Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Lifestyle Benefits of Bravado Community Amenities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Bravado community amenities</strong> create a lifestyle that promotes health, wellness, community connection, and convenience. These amenities are designed to enhance your daily living experience while providing opportunities for recreation, social interaction, and active living. Understanding how these amenities contribute to your lifestyle helps you appreciate the full value of choosing Bravado.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Health and Wellness Promotion</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>walking paths</strong> and <strong>community parks</strong> at Bravado encourage active living and outdoor recreation. These amenities make it easy to maintain a healthy lifestyle without leaving your neighborhood. The walking paths provide safe, accessible routes for daily exercise, while the park areas offer space for outdoor activities, sports, and recreation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination of active lifestyle amenities and proximity to <strong>Craig Ranch Regional Park</strong> creates abundant opportunities for exercise, recreation, and outdoor enjoyment. This emphasis on health and wellness contributes to a higher quality of life for Bravado residents, making it easier to maintain an active, healthy lifestyle.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Connection and Social Opportunities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>community amenities</strong> at Bravado create natural gathering spaces where neighbors can meet, socialize, and build lasting friendships. The park areas provide ideal settings for community events, casual meetups, and family gatherings. These shared spaces foster a sense of community that enhances the overall living experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The walking paths also create opportunities for casual encounters with neighbors, promoting community connection and social interaction. This sense of community is one of the most valued aspects of living in Bravado, creating an environment where neighbors become friends and families feel truly at home. The thoughtful design of these amenities encourages interaction while respecting privacy and individual preferences.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Convenience and Modern Living</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Century Connect® smart home technology</strong> included in every Bravado home brings modern convenience to your fingertips. This comprehensive system allows you to control your home's lighting, temperature, security, and more from your smartphone, whether you're at home or away. The smart home features provide convenience, energy savings, and peace of mind that enhance your daily living experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The combination of <strong>community amenities</strong> and <strong>smart home technology</strong> creates a living experience that's both convenient and modern. These features work together to enhance your quality of life, making daily routines easier while providing opportunities for recreation, social interaction, and active living. The comprehensive nature of Bravado's amenities ensures that residents have everything they need for a comfortable, enjoyable lifestyle.
          </p>
        </div>
      </div>

      {/* Value and Investment Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Community Amenities and Property Value
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Bravado community amenities</strong> contribute significantly to property values and long-term investment potential. Well-maintained community amenities, gated security, and included smart home technology create lasting appeal that maintains property values over time. Understanding how these amenities contribute to property value helps you appreciate the full investment value of choosing Bravado.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Property Value Enhancement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>gated community</strong>, well-maintained parks, and quality amenities contribute to property values by creating a desirable living environment. Homes in communities with quality amenities typically maintain higher values and appreciate better over time. The combination of security, recreation, and modern features creates lasting appeal that attracts buyers and maintains property values.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Century Connect® smart home technology</strong> included standard in every home also contributes to property value. Unlike other communities where similar technology is an expensive upgrade, Bravado includes it as standard, providing immediate value and long-term appeal. This combination of community amenities and home features creates a property value proposition that's difficult to match in the North Las Vegas market.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Long-Term Investment Potential</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Bravado community amenities</strong> are designed to maintain value and appeal over time. Well-maintained common areas, quality landscaping, and thoughtful design ensure that the community remains attractive and desirable as it matures. This long-term appeal contributes to property value appreciation and makes Bravado a smart investment choice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination of location, amenities, and quality construction creates an investment that maintains value and appeal over time. The <strong>gated community</strong> aspect, quality amenities, and included smart home technology all contribute to long-term investment potential, making Bravado not just a great place to live but also a smart investment choice for North Las Vegas real estate.
            </p>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Homes with Full Amenities
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current homes available in Bravado with all community amenities included. 
            Get expert guidance on amenities and community features.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="450000"
              priceMax="800000"
            />
          </div>
        </div>
      </div>

      {/* Dr. Janet Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Janet Duffy for Your Bravado Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on community amenities and lifestyle benefits with Dr. Janet Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Community Expert</h3>
              <p className="opacity-90">Deep knowledge of Bravado amenities and community features</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities amenities and features</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate for understanding all community benefits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Search Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🔍 Advanced Property Search
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Use our advanced search to find properties with specific amenities and features
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Bravado Amenities?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Janet Duffy today for a private tour and expert guidance on Bravado's luxury amenities
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
            <h3 className="text-xl font-bold mb-3">Bravado Sales Office</h3>
            <p>Dr. Janet Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 222-1964</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Janet Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Model Home Hours</h3>
            <p>Monday-Sunday: 10:00 AM - 6:00 PM<br />
            5060 Wind Springs Street<br />
            North Las Vegas, NV 89031</p>
          </div>
        </div>
      </div>
    </section>
  )
}
