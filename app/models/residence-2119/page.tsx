import RealScoutListings from '../../components/realscout-listings'
import RealScoutAdvancedSearch from '../../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residence 2119 - Largest Bravado Home | Dr. Jan Duffy',
  description: 'Discover Residence 2119 at Bravado in North Las Vegas. 2,119 sq ft, 3-4 bedrooms, 2.5 baths, from $449,990. Largest model with luxury features and expert guidance from Dr. Jan Duffy, Century Communities Featured Partner.',
  keywords: [
    'Residence 2119',
    'Residence 2119 Bravado',
    'Residence 2119 North Las Vegas',
    '2119 sq ft homes',
    '2119 square foot homes',
    'largest Bravado home',
    'largest floor plan',
    'Bravado North Las Vegas',
    'Bravado homes 2119',
    'North Las Vegas new homes',
    'North Las Vegas new construction',
    'Century Communities Bravado',
    'Century Communities Residence 2119',
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
    'starting at $449,990',
    'North Las Vegas real estate',
    'Bravado community homes',
    'largest luxury home',
    'maximum space and flexibility'
  ],
  openGraph: {
    title: 'Residence 2119 - Largest Bravado Home | Dr. Jan Duffy',
    description: 'Discover Residence 2119 at Bravado in North Las Vegas. 2,119 sq ft, 3-4 bedrooms, 2.5 baths, from $449,990. Largest model with luxury features.',
    type: 'website',
    images: [
      {
        url: '/images/bravado/floor-plans/residence-2119.jpg',
        width: 1200,
        height: 630,
        alt: 'Residence 2119 Floor Plan - Largest Bravado Home',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/models/residence-2119',
  },
}

export default async function Residence2119Page() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Residence 2119',
    description: '2,119 sq ft, 3 bedrooms, 2.5 bathrooms',
    category: 'New Home Construction',
    brand: {
      '@type': 'Brand',
      name: 'Century Communities',
    },
    url: 'https://www.bravadohomes.com/models/residence-2119',
    image: 'https://www.bravadohomes.com/images/bravado/floor-plans/residence-2119.jpg',
    offers: {
      '@type': 'Offer',
      price: '479790',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.bravadohomes.com/models/residence-2119',
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
          <div className="vip-badge inline-block mb-4">LARGEST MODEL</div>
          <h1 className="text-5xl font-bold mb-6">
            Residence 2119 - Bravado North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            From $449,990 | 2,119 Sq Ft | 3-4 Bedrooms
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
              About Residence 2119 - Our Largest Model
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The <strong>Residence 2119</strong> is the largest and most luxurious floor plan at Bravado, offering 2,119 square feet of premium living space. This exceptional home design from <strong>Century Communities</strong> provides the ultimate in comfort, style, and functionality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This two-story home features an <strong>expansive open-concept design</strong> with a gourmet kitchen, oversized great room, and premium finishes throughout. The main level includes a <strong>covered patio</strong> for outdoor entertaining, a <strong>two-car garage</strong> with direct access, and flexible living spaces perfect for entertaining.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Upstairs, you'll find <strong>three to four bedrooms</strong> including a luxurious master suite with a spa-like bathroom, oversized walk-in closet, and private retreat space. The additional bedrooms share a well-appointed hall bathroom, and there's a <strong>convenient laundry room</strong> and <strong>bonus loft space</strong> on the upper level.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/floor-plans/residence-2119.svg"
                alt="Residence 2119 Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">2,119</p>
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
          Luxury Features of Residence 2119
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Main Level Luxury</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Expansive open-concept great room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Gourmet kitchen with oversized center island
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Large walk-in pantry for storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Covered patio for outdoor entertaining
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two-car garage with direct access
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Flexible dining and living spaces
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Upper Level Excellence</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Luxurious master suite with spa-like bath
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Oversized walk-in closet in master
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
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Bonus loft space for versatility
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Residence 2119 Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current Residence 2119 homes available in the Bravado community. 
            Our largest model offers the ultimate in luxury and space.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="449990"
              priceMax="499990"
            />
          </div>
        </div>
      </div>

      {/* Why Largest Model Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Residence 2119 - Maximum Space and Luxury
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 2119</strong> is Bravado's largest and most luxurious floor plan, offering <strong>2,119 square feet</strong> of premium living space designed for those who want maximum room, flexibility, and luxury features. Starting at <strong>$449,990</strong>, the Residence 2119 provides the ultimate in <strong>North Las Vegas new construction</strong>, combining expansive square footage with thoughtful design and premium finishes throughout.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Maximum Space for Growing Families</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>2,119 square feet</strong>, the <strong>Residence 2119</strong> provides the most generous living spaces available at <strong>Bravado</strong>. This is the perfect choice for larger families, multi-generational households, or those who simply want more room to spread out. The <strong>modeled downstairs den</strong> provides additional flexible space that can serve as a home office, guest room, playroom, or media room—whatever your family needs most.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>spacious great room</strong> is perfect for large family gatherings and entertaining, while the <strong>gourmet kitchen with large island</strong> provides ample workspace for cooking and socializing. The thoughtful layout ensures that even with more square footage, the home feels cohesive and well-designed. The additional space provides flexibility for future needs, whether that's a growing family, home-based business, or simply the desire for more personal space.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Features Standard</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes the <strong>Residence 2119</strong> particularly appealing is that premium features come standard, not as expensive upgrades. The <strong>luxurious master suite</strong> with its oversized walk-in closet and spa-like bathroom provides a retreat that rivals homes costing significantly more. The <strong>Century Connect® smart home technology</strong> is included standard, providing thousands of dollars in value that would be expensive upgrades in other communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The starting price of <strong>$449,990</strong> represents exceptional value when you consider that every <strong>Residence 2119</strong> includes premium finishes, quality construction, and smart home technology. The investment in extra square footage pays dividends in comfort, functionality, and long-term value. The combination of maximum space and premium features makes the Residence 2119 an outstanding choice for those seeking the ultimate in <strong>Bravado</strong> living.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Living Spaces for Every Lifestyle</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Residence 2119's</strong> additional square footage provides flexibility that smaller floor plans cannot match. The <strong>modeled downstairs den</strong> is particularly valuable, offering a separate space that can adapt to your changing needs. Whether you need a home office for remote work, a guest room for visitors, a playroom for children, or a media room for entertainment, the den provides the flexibility to accommodate your lifestyle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The <strong>bonus loft space</strong> on the upper level offers additional flexibility, creating opportunities for a second home office, craft room, or additional living area. This flexibility is especially valuable as your family's needs evolve over time. The Residence 2119's thoughtful design ensures that every square foot serves a purpose and contributes to your daily living experience, making it the ideal choice for those who want maximum space and versatility.
          </p>
        </div>
      </div>

      {/* Luxury Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Luxury Features & Customization Options
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 2119</strong> includes luxury features as standard, but you also have opportunities to customize your home with various premium options and upgrades. <strong>Century Communities</strong> offers a wide range of customization options that allow you to personalize your <strong>Residence 2119</strong> while maintaining good investment value. <strong>Dr. Jan Duffy</strong> can help you understand which customizations add value and which are primarily for personal enjoyment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Gourmet Kitchen Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Enhance the <strong>Residence 2119's gourmet kitchen</strong> with premium customization options.
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
                Oversized center island options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium backsplash selections
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Breakfast nook enhancements
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
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Optional sitting area in master
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
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Extended patio expansion options
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Guidance on Premium Customization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When customizing your <strong>Residence 2119</strong>, it's important to balance personal preferences with investment value. <strong>Dr. Jan Duffy</strong>, with her expertise in <strong>new home construction</strong> and market knowledge, can help you make informed decisions about which premium customizations make sense for your situation. Her guidance ensures you create a home you love while maintaining good investment value.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Some upgrades, like premium kitchen finishes, enhanced master suite features, or additional square footage, typically add significant resale value and enhance your daily living experience. Other customizations may be important for your personal enjoyment but might not provide proportional return on investment. <strong>Dr. Jan</strong> provides expert guidance to help you make smart customization choices that enhance your living experience without overspending on features that don't add proportional value.
          </p>
        </div>
      </div>

      {/* Investment Value Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Residence 2119 Investment Value and Market Position
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 2119 at Bravado</strong> represents a smart investment in <strong>North Las Vegas real estate</strong>. The combination of maximum space, quality construction, and desirable location positions this <strong>2,119 square foot home</strong> well for long-term appreciation. The <strong>North Las Vegas area</strong> continues to attract new residents, businesses, and infrastructure improvements, all of which contribute to property value growth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Appreciation Potential</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 2119's</strong> larger square footage provides strong appreciation potential as the <strong>Bravado community</strong> matures and surrounding infrastructure develops. Larger homes typically appreciate well in growing markets, and the <strong>North Las Vegas area</strong> continues to show strong growth patterns. The combination of quality construction from <strong>Century Communities</strong>, premium features, and included smart home technology create lasting appeal that maintains value over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>2,119 square foot</strong> size appeals to a broad range of buyers, from larger families to those seeking maximum space and luxury. The flexibility of the floor plan, with its downstairs den and bonus loft space, ensures the home remains desirable as buyer preferences evolve. The investment in extra square footage pays dividends in comfort, functionality, and long-term value, making the Residence 2119 an excellent investment choice.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Energy Efficiency and Cost Savings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 2119</strong> is built with energy efficiency in mind, featuring high-efficiency HVAC systems, quality insulation, energy-efficient windows, and the <strong>Century Connect® smart home technology</strong> that optimizes energy usage. These features not only reduce your environmental impact but also significantly lower monthly utility costs compared to older homes or less efficient new construction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Century Connect® smart home system</strong> includes intelligent climate control that learns your preferences and adjusts automatically to minimize energy waste. Smart lighting systems can be scheduled and controlled remotely, ensuring lights aren't left on unnecessarily. Even with the larger square footage, these energy-saving features help keep utility costs manageable, providing ongoing value throughout your ownership.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Comparing Residence 2119 to Other North Las Vegas Options</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When shopping for <strong>new homes in North Las Vegas</strong>, it's important to compare the <strong>Residence 2119</strong> to other options available. Many builders charge $50,000-$100,000 more for comparable homes without the smart home technology that's included standard in every <strong>Bravado home</strong>. The starting price of <strong>$449,990</strong> for the Residence 2119 represents exceptional value for a <strong>2,119 square foot luxury home</strong> in the Las Vegas new construction market.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Additionally, the <strong>gated community</strong> aspect of Bravado provides security and exclusivity that's rare at this price point. Most gated communities in <strong>North Las Vegas</strong> with similar square footage start significantly higher, often $75,000-$150,000 more for comparable homes. The combination of maximum space, gated security, premium features, and accessible pricing makes the <strong>Residence 2119</strong> an outstanding value proposition. <strong>Dr. Jan Duffy</strong>, with her market expertise, can help you understand how the Residence 2119 compares to other options and why it represents an excellent investment opportunity.
          </p>
        </div>
      </div>

      {/* Dr. Jan Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Jan Duffy for Your Residence 2119?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on your new home construction with Dr. Jan Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Largest Model</h3>
              <p className="opacity-90">Expert guidance on maximizing space and luxury in our largest floor plan</p>
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
          Ready to Tour Residence 2119?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for a private tour and expert guidance on your Residence 2119 purchase
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
