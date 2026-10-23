import Image from 'next/image'
import Link from 'next/link'
import RealScoutListings from '../components/realscout-listings'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Century Communities Bravado | Bravado Century Communities Las Vegas | Dr. Jan Duffy',
    description: 'Century Communities Bravado in Las Vegas. Explore Bravado Homes by Century Communities - one of America\'s top 10 homebuilders. Expert guidance from Dr. Jan Duffy, Featured Century Communities Partner. View floor plans, pricing, and schedule your tour.',
    keywords: [
      'century communities bravado',
      'bravado century communities',
      'bravado century communities las vegas',
      'century communities bravado homes las vegas',
      'century communities las vegas',
      'century communities north las vegas',
      'bravado homes',
      'bravado new homes',
      'century communities homes',
      'century communities new construction',
      'top 10 homebuilder',
      'century communities featured partner',
      'ironwood by century communities',
      'southwind by century communities',
      'southwind las vegas',
      'homestead west las vegas',
      'modena I century communities',
      'modena II century communities',
      'townes at union village century communities',
      agent?.name || 'Dr. Jan Duffy',
      'new construction homes las vegas',
      'century connect smart home',
      'century communities quality',
      'century communities builder',
      'new homes century communities',
      '89031 century communities',
      'north las vegas century communities'
    ],
    openGraph: {
      title: 'Century Communities Bravado | Bravado Century Communities Las Vegas',
      description: 'Century Communities Bravado in Las Vegas. Explore Bravado Homes by Century Communities - one of America\'s top 10 homebuilders. Expert guidance from Dr. Jan Duffy.',
      url: `${baseUrl}/century-communities`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/century-communities`,
    },
  }
}

export default async function CenturyCommunitiesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ CENTURY COMMUNITIES FEATURED PARTNER ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Century Communities Bravado | Bravado Century Communities Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            New Construction Homes by America's Top 10 Homebuilder
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy | Featured Partner | Expert New Construction Guidance
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

      {/* Century Communities Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          About Century Communities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Century Communities is one of America's top 10 homebuilders, with over 40 years of experience 
          building quality homes across the United States. In North Las Vegas, Century Communities offers 
          exceptional new construction homes in master-planned communities like Bravado, featuring modern 
          designs, energy-efficient features, and innovative smart home technology.
        </p>

        {/* Century Communities Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Top 10</div>
            <div className="text-gray-700">National Homebuilder</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">Smart</div>
            <div className="text-gray-700">Home Technology</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">Energy</div>
            <div className="text-gray-700">Efficient Homes</div>
          </div>
        </div>
      </div>

      {/* Featured Communities */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Communities in North Las Vegas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bravado Community */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Bravado Community by Century Communities"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bravado Community</h3>
            <p className="text-gray-700 mb-4">
              Prestigious gated community featuring stunning two-story floor plans ranging from 1,792 to 2,119 square feet. 
              Each home includes Century Connect® smart home package and premium finishes.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1,792 - 2,119 sq ft homes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 5 bedrooms
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

          {/* Other Century Communities */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Century Communities North Las Vegas"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Other Century Communities in Las Vegas</h3>
            <p className="text-gray-700 mb-4">
              Century Communities has multiple communities throughout North Las Vegas and the greater Las Vegas area, each offering unique amenities and home designs to fit your lifestyle.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>Ironwood by Century Communities</strong> - North Las Vegas
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>Southwind by Century Communities</strong> - Las Vegas
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>Modena I by Century Communities</strong> - Las Vegas
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>Modena II by Century Communities</strong> - Las Vegas
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>The Townes at Union Village</strong> by Century Communities
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🏘️</span>
                <strong>Homestead West</strong> by Century Communities - Las Vegas
              </li>
            </ul>
            <p className="text-gray-700 mb-6 text-sm italic">
              Note: We specialize in Bravado Homes. For information about other Century Communities, please contact Century Communities directly or inquire about available homes in these communities.
            </p>
            <Link href="/services" className="cta-button w-full text-center">
              Explore All Communities
            </Link>
          </div>
        </div>
      </div>

      <div className="content-section mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Builder Quality Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We moved our detailed builder-quality content into a dedicated guide so this page stays focused on
            Century Communities opportunities in Las Vegas. Review construction standards, design quality, and
            customer-experience considerations in the full breakdown.
          </p>
          <a
            href="/century-communities/builder-quality"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Read Century Communities Builder Quality Guide
          </a>
        </div>
      </div>

      {/* Century Connect Smart Home */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Connect® Smart Home Technology
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Every Century Communities home comes equipped with Century Connect®, an innovative smart home package 
          that puts control of your home at your fingertips. Manage security, lighting, temperature, and more 
          from anywhere in the world. This comprehensive system is included as standard at Bravado, representing 
          thousands of dollars in value compared to other builders where similar technology is an expensive upgrade.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-4xl mb-4 text-center">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">Smart Security</h3>
            <p className="text-gray-700 leading-relaxed">
              Remote door locks, security cameras, and monitoring systems provide complete peace of mind. Monitor 
              your home from anywhere using your smartphone, receive alerts when doors are opened, and check 
              security camera feeds in real-time. The smart security system integrates seamlessly with other 
              Century Connect® features for comprehensive home protection.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-4xl mb-4 text-center">🌡️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">Climate Control</h3>
            <p className="text-gray-700 leading-relaxed">
              Smart thermostats and HVAC systems learn your preferences and save energy automatically. Adjust 
              temperature from your phone, set schedules, and optimize energy usage. The intelligent climate 
              control system helps reduce utility bills while maintaining perfect comfort throughout your home.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-4xl mb-4 text-center">💡</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">Smart Lighting</h3>
            <p className="text-gray-700 leading-relaxed">
              Automated lighting systems with scheduling, dimming, and color control options. Create lighting 
              scenes for different times of day, control lights remotely, and set schedules for energy efficiency. 
              The smart lighting system enhances both convenience and security, making your home feel lived-in 
              even when you're away.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Integrated Smart Home Experience</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Century Connect® isn't just a collection of smart devices—it's an integrated system that works 
            together seamlessly. All features are controlled through a single, user-friendly app, making it 
            easy to manage your entire home from one place. The system is designed to be intuitive and accessible, 
            so you don't need to be tech-savvy to enjoy the benefits.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The integrated approach means that your security, lighting, and climate control systems can work 
            together. For example, when you unlock your door, the system can automatically adjust lighting and 
            temperature to your preferred settings. This level of integration creates a truly smart home 
            experience that enhances daily living while reducing energy costs.
          </p>
        </div>
      </div>

      {/* Property Search */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Find Your Century Communities Home
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Home Value Tool */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Discover what your home is worth in today's North Las Vegas market.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          {/* Current Listings */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏘️ Available Century Communities Homes
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Browse current Century Communities listings in North Las Vegas.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutListings
                agentEncodedId="QWdlbnQtMjI1MDUw"
                sortOrder="PRICE_LOW"
                listingStatus="For Sale"
                propertyTypes=",SFR,OTHER"
                priceMin="450000"
                priceMax="600000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Century Communities Communities in Las Vegas Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Communities Throughout Las Vegas
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Century Communities has established a strong presence in the Las Vegas market, with multiple 
          communities throughout North Las Vegas and the greater Las Vegas area. Each community offers unique 
          features and amenities, but all share Century Communities' commitment to quality construction, 
          innovative design, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Bravado: Premier Gated Community</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado represents Century Communities' premier offering in North Las Vegas, featuring a gated 
              community with premium amenities and luxury finishes. Located at 5060 Wind Springs Street, Bravado 
              offers three distinct floor plans ranging from 1,792 to 2,119 square feet, all including Century 
              Connect® smart home technology as standard.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Bravado community exemplifies Century Communities' approach to building complete communities, 
              not just houses. The gated entrance, well-maintained common areas, and proximity to Craig Ranch 
              Regional Park create an exceptional living environment. Bravado's location in North Las Vegas's 
              fastest-growing corridor positions it as both a great place to live and a smart investment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Other Century Communities Locations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Century Communities has established several other communities throughout Las Vegas, each offering 
              unique features and price points. These include Ironwood by Century Communities, Southwind by 
              Century Communities, Modena I and II, The Townes at Union Village, and Homestead West. Each 
              community reflects Century Communities' quality standards while offering distinct features and amenities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While {agent?.name || 'Dr. Jan Duffy'} specializes in Bravado Homes, she can provide information 
              about other Century Communities locations and help you understand the differences between communities. 
              Her expertise with Century Communities means she can help you find the right community and floor plan 
              for your specific needs, whether that's Bravado or another Century Communities location.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Dr. Jan Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Jan Duffy for Century Communities?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Featured Partner Benefits</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Direct access to Century Communities sales team and inventory</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Early access to new releases and floor plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Exclusive financing options and incentives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Insider knowledge of construction timelines and processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Negotiation expertise for upgrades and customizations</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Guidance</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🏗️</span>
                <span>New construction process guidance from start to finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🤝</span>
                <span>Your advocate throughout the building process</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">💰</span>
                <span>Financing assistance and incentive optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">📋</span>
                <span>Contract review and negotiation expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">🎯</span>
                <span>Quality control and walkthrough coordination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your Century Communities Dream Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on your Century Communities new construction home
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
            <h3 className="text-xl font-bold mb-3">Century Communities Office</h3>
            <p>5060 Wind Springs Street<br />
            North Las Vegas, NV 89031<br />
            (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Jan Duffy</h3>
            <p>Century Communities Featured Partner<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Communities Served</h3>
            <p>Bravado Community<br />
            North Las Vegas Area<br />
            Century Communities Properties</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Jan Duffy is a Featured Partner with Century Communities, America's top 10 homebuilder. 
            Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
