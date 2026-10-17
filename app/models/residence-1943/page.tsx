import RealScoutListings from '../../components/realscout-listings'
import RealScoutAdvancedSearch from '../../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residence 1943 - Most Popular Bravado Home | Dr. Jan Duffy',
  description: 'Discover Residence 1943 at Bravado in North Las Vegas. 1,943 sq ft, 3-4 bedrooms, 2.5 baths, from $439,990. Most popular model with expert guidance from Dr. Jan Duffy, Century Communities Featured Partner.',
  keywords: [
    'Residence 1943',
    'Residence 1943 Bravado',
    'Residence 1943 North Las Vegas',
    '1943 sq ft homes',
    '1943 square foot homes',
    'most popular Bravado home',
    'most popular floor plan',
    'Bravado North Las Vegas',
    'Bravado homes 1943',
    'North Las Vegas new homes',
    'North Las Vegas new construction',
    'Century Communities Bravado',
    'Century Communities Residence 1943',
    'Dr. Jan Duffy',
    'new construction homes',
    'new homes Las Vegas',
    '89031 homes',
    '89031 new construction',
    'luxury homes Las Vegas',
    'gated community North Las Vegas',
    'two-story homes North Las Vegas',
    '3-4 bedroom homes',
    'smart home technology',
    'Century Connect',
    'Bravado floor plans',
    'starting at $439,990',
    'North Las Vegas real estate',
    'Bravado community homes',
    'model home open'
  ],
  openGraph: {
    title: 'Residence 1943 - Most Popular Bravado Home | Dr. Jan Duffy',
    description: 'Discover Residence 1943 at Bravado in North Las Vegas. 1,943 sq ft, 3-4 bedrooms, 2.5 baths, from $439,990. Most popular model.',
    type: 'website',
    images: [
      {
        url: '/images/bravado/floor-plans/residence-1943.jpg',
        width: 1200,
        height: 630,
        alt: 'Residence 1943 Floor Plan - Most Popular Bravado Home',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/models/residence-1943',
  },
}

export default async function Residence1943Page() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Residence 1943',
    description: '1,943 sq ft, 3 bedrooms, 2.5 bathrooms',
    category: 'New Home Construction',
    brand: {
      '@type': 'Brand',
      name: 'Century Communities',
    },
    url: 'https://www.bravadohomes.com/models/residence-1943',
    image: 'https://www.bravadohomes.com/images/bravado/floor-plans/residence-1943.jpg',
    offers: {
      '@type': 'Offer',
      price: '469790',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.bravadohomes.com/models/residence-1943',
    },
  }
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge inline-block mb-4">MOST POPULAR</div>
          <h1 className="text-5xl font-bold mb-6">
            Residence 1943 - Bravado North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            From $439,990 | 1,943 Sq Ft | 3-4 Bedrooms
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Jan Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Jan
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Tour
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Model Overview Section */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About Residence 1943 - Most Popular Choice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong>Residence 1943</strong> is the most popular floor plan at Bravado, offering the perfect balance of space, functionality, and luxury. This exceptional home design from <strong>Century Communities</strong> provides 1,943 square feet of thoughtfully designed living space.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This two-story home features a <strong>spacious open-concept design</strong> with a gourmet kitchen, expansive great room, and premium finishes throughout. The main level includes a <strong>covered patio</strong> for outdoor entertaining and a <strong>two-car garage</strong> with direct access.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Upstairs, you'll find <strong>three to four bedrooms</strong> including a luxurious master suite with a spa-like bathroom, walk-in closet, and private retreat space. The additional bedrooms share a well-appointed hall bathroom, and there's a <strong>convenient laundry room</strong> on the upper level.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/floor-plans/residence-1943.svg"
                alt="Residence 1943 Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">1,943</p>
                  <p className="text-sm text-gray-600">Square Feet</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">3-4</p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">2.5</p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Car Garage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Residence 1943 is Our Most Popular Choice
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Main Level Excellence</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Spacious open-concept great room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Gourmet kitchen with center island
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Large walk-in pantry for storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Covered patio for outdoor living
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two-car garage with direct access
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Upper Level Luxury</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Luxurious master suite with spa-like bath
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Generous walk-in closet in master
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two additional bedrooms with shared bath
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Convenient upstairs laundry room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Flexible fourth bedroom option
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Residence 1943 Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current Residence 1943 homes available in the Bravado community. 
            As our most popular model, these homes sell quickly!
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="439990"
              priceMax="489990"
            />
          </div>
        </div>
      </div>

      {/* Why Most Popular Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Residence 1943 is the Most Popular Choice at Bravado
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 1943</strong> has earned the "Most Popular" designation at <strong>Bravado</strong> for several compelling reasons. This <strong>1,943 square foot home</strong> represents the perfect balance between space, value, and functionality, making it the ideal choice for a wide range of homebuyers. Starting at <strong>$439,990</strong>, the Residence 1943 offers exceptional value in <strong>North Las Vegas new construction</strong>, combining premium features with accessible pricing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Perfect Size and Layout Balance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>1,943 square feet</strong>, the <strong>Residence 1943</strong> provides ample space for comfortable living without feeling overwhelming or wasteful. The thoughtful design maximizes every square foot, ensuring that each room serves a purpose and contributes to your daily living experience. The <strong>open-concept layout</strong> on the main level creates a sense of spaciousness, while the <strong>two-story design</strong> provides privacy and separation between living and sleeping areas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>gourmet kitchen</strong> with its large center island becomes the heart of the home, serving as both a functional workspace and a natural gathering spot. The <strong>expansive great room</strong> provides space for entertaining, while the <strong>covered patio</strong> extends your living space outdoors. This balance of indoor and outdoor space, combined with the thoughtful room sizes, creates a home that feels spacious without being excessive.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Features at Accessible Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes the <strong>Residence 1943</strong> particularly appealing is the inclusion of premium features that are standard, not upgrades. The <strong>luxurious master suite</strong> with its spa-like bathroom and generous walk-in closet provides a retreat that rivals homes costing significantly more. The <strong>Century Connect® smart home technology</strong> is included standard, providing thousands of dollars in value that would be expensive upgrades in other communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The starting price of <strong>$439,990</strong> represents exceptional value when you consider that every <strong>Residence 1943</strong> includes premium finishes, quality construction, and smart home technology. Many buyers find that the Residence 1943 offers the perfect combination of features and value, providing everything they need without paying for unnecessary space or features they won't use. This value proposition is a key reason why it's the most popular choice among <strong>Bravado</strong> homebuyers.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Model Home Now Open for Viewing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the advantages of choosing the <strong>Residence 1943</strong> is that the <strong>model home is now open for viewing</strong>. This allows you to experience the quality, design, and features firsthand before making your decision. Walking through the model home gives you a true sense of how the spaces flow, how natural light enters the home, and how the layout functions in real life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr. Jan Duffy</strong> can arrange a private tour of the <strong>Residence 1943 model home</strong>, allowing you to see the premium finishes, thoughtful design details, and quality construction that make this floor plan so popular. During your tour, you'll be able to visualize how your furniture will fit, how your family will use the spaces, and whether the Residence 1943 truly meets your needs. This firsthand experience is invaluable for making an informed decision about your new home.
          </p>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Premium Features & Customization Options
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 1943</strong> includes premium features as standard, but you also have opportunities to customize your home with various options and upgrades. <strong>Century Communities</strong> offers a wide range of customization options that allow you to personalize your <strong>Residence 1943</strong> while maintaining good investment value. <strong>Dr. Jan Duffy</strong> can help you understand which customizations add value and which are primarily for personal enjoyment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Gourmet Kitchen Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The <strong>Residence 1943's gourmet kitchen</strong> can be enhanced with premium customization options.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium granite or quartz countertops
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Stainless steel appliance packages
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom cabinet finishes and styles
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Extended center island options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium backsplash selections
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🛁</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Master Suite Enhancements</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Enhance your <strong>luxurious master suite</strong> with premium bathroom and closet options.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spa-like master bathroom upgrades
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dual vanities with premium finishes
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Walk-in shower with luxury fixtures
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expanded walk-in closet systems
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Private retreat space enhancements
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor Living Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Expand your living space with premium outdoor features and landscaping options.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Extended covered patio areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Outdoor kitchen preparation areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Fire pit and outdoor living spaces
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium landscaping packages
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced outdoor lighting systems
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Guidance on Customization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When customizing your <strong>Residence 1943</strong>, it's important to balance personal preferences with investment value. <strong>Dr. Jan Duffy</strong>, with her expertise in <strong>new home construction</strong> and market knowledge, can help you make informed decisions about which customizations make sense for your situation. Her guidance ensures you create a home you love while maintaining good investment value.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Some upgrades, like premium kitchen finishes or enhanced master suite features, typically add significant resale value and enhance your daily living experience. Other customizations may be important for your personal enjoyment but might not provide proportional return on investment. <strong>Dr. Jan</strong> provides expert guidance to help you make smart customization choices that enhance your living experience without overspending on features that don't add proportional value.
          </p>
        </div>
      </div>

      {/* Investment and Lifestyle Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Residence 1943: Investment Value and Lifestyle Benefits
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 1943 at Bravado</strong> represents a smart investment in <strong>North Las Vegas real estate</strong>. The combination of its popular status, quality construction, and desirable location positions this <strong>1,943 square foot home</strong> well for long-term appreciation. As the most popular floor plan at <strong>Bravado</strong>, the Residence 1943 has proven appeal that contributes to strong resale value.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Strong Resale Potential</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 1943's</strong> popularity among homebuyers suggests strong resale potential. When a floor plan is consistently chosen by buyers, it indicates broad appeal that extends to future resale markets. The <strong>1,943 square foot</strong> size appeals to a wide range of buyers, from growing families to downsizers, ensuring a strong pool of potential buyers when you decide to sell.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The quality construction from <strong>Century Communities</strong>, premium finishes, and included <strong>Century Connect® smart home technology</strong> create lasting appeal that maintains value over time. The <strong>Bravado community's</strong> gated security, proximity to <strong>Craig Ranch Regional Park</strong>, and location in the <strong>89031 zip code</strong> are all factors that contribute to strong resale value. The <strong>North Las Vegas market</strong> continues to show growth, and <strong>new construction homes</strong> like the Residence 1943 typically appreciate well as the community matures.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lifestyle and Community Benefits</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Living in the <strong>Residence 1943 at Bravado</strong> means enjoying a lifestyle that combines comfort, convenience, and community. The <strong>gated community</strong> provides security and a sense of exclusivity, while the proximity to <strong>Craig Ranch Regional Park</strong> offers 170 acres of recreational opportunities. Whether you enjoy walking trails, sports fields, or community events, the park becomes an extension of your backyard.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> provides easy access to shopping, dining, entertainment, and employment centers. The <strong>I-15 access</strong> makes commuting to downtown Las Vegas, the Strip, or McCarran International Airport convenient. This combination of community amenities and location convenience creates a lifestyle that's both comfortable and connected, making the <strong>Residence 1943</strong> an ideal choice for those seeking the best of <strong>North Las Vegas</strong> living.
            </p>
          </div>
        </div>
      </div>

      {/* Dr. Jan Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Jan Duffy for Your Residence 1943?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on your new home construction with Dr. Jan Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Most Popular Model</h3>
              <p className="opacity-90">Insider knowledge of why this model is the top choice at Bravado</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to priority lot selection and builder incentives</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate throughout the entire construction and closing process</p>
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
            Use our advanced search to find similar properties or explore other options in North Las Vegas
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Tour Residence 1943?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for a private tour and expert guidance on your Residence 1943 purchase
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
            <p>Dr. Jan Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 222-1964</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Jan Duffy</h3>
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
