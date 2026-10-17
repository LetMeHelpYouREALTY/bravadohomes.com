import RealScoutListings from '../../components/realscout-listings'
import RealScoutAdvancedSearch from '../../components/realscout-advanced-search'
import Image from 'next/image'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residence 1792 - Bravado North Las Vegas | Dr. Jan Duffy',
  description: 'Discover Residence 1792 at Bravado in North Las Vegas. 1,792 sq ft, 3-4 bedrooms, 2.5 baths, from $429,990. Expert guidance from Dr. Jan Duffy, Century Communities Featured Partner.',
  keywords: [
    'Residence 1792',
    'Residence 1792 Bravado',
    'Residence 1792 North Las Vegas',
    '1792 sq ft homes',
    '1792 square foot homes',
    'Bravado North Las Vegas',
    'Bravado homes 1792',
    'North Las Vegas new homes',
    'North Las Vegas new construction',
    'Century Communities Bravado',
    'Century Communities Residence 1792',
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
    'starting at $429,990',
    'North Las Vegas real estate',
    'Bravado community homes'
  ],
  openGraph: {
    title: 'Residence 1792 - Bravado North Las Vegas | Dr. Jan Duffy',
    description: 'Discover Residence 1792 at Bravado in North Las Vegas. 1,792 sq ft, 3-4 bedrooms, 2.5 baths, from $429,990.',
    type: 'website',
    images: [
      {
        url: '/images/bravado/floor-plans/residence-1792.jpg',
        width: 1200,
        height: 630,
        alt: 'Residence 1792 Floor Plan - Bravado North Las Vegas',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/models/residence-1792',
  },
}

export default async function Residence1792Page() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Residence 1792',
    description: '1,792 sq ft, 3-4 bedrooms, 2.5 bathrooms',
    category: 'New Home Construction',
    brand: {
      '@type': 'Brand',
      name: 'Century Communities',
    },
    url: 'https://www.bravadohomes.com/models/residence-1792',
    image: 'https://www.bravadohomes.com/images/bravado/floor-plans/residence-1792.jpg',
    offers: {
      '@type': 'Offer',
      price: '429990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.bravadohomes.com/models/residence-1792',
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
          <h1 className="text-5xl font-bold mb-6">
            Residence 1792 - Bravado North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            From $429,990 | 1,792 Sq Ft | 3-4 Bedrooms
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
      <div className="about-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About Residence 1792
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You'll fall in love with <strong>Residence 1792 at Bravado</strong>, a versatile open-concept plan offering two stories of inviting living space and stylish features. This exceptional home design from <strong>Century Communities</strong> combines modern functionality with elegant aesthetics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As you enter the home from a <strong>courtyard entrance</strong>, you'll find a <strong>two-story foyer</strong> leading to a wide-open great room and a well-appointed kitchen—boasting a spacious center island, a large walk-in pantry and a charming dining area with direct access to a patio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As you head upstairs, you'll find an <strong>expansive loft</strong>, two generous secondary bedrooms—sharing a hall bathroom—plus a convenient laundry room. Highlighting the upper level is a <strong>private primary suite</strong>—boasting a roomy walk-in closet and a deluxe bath with dual vanities and a walk-in shower.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/bravado/floor-plans/residence-1792.svg"
                alt="Residence 1792 Floor Plan"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">1,792</p>
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
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Key Features of Residence 1792
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Main Level Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two-story foyer with courtyard entrance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Wide-open great room for entertaining
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Well-appointed kitchen with spacious center island
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Large walk-in pantry for storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Charming dining area with direct patio access
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Upper Level Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Expansive loft for flexible living space
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Two generous secondary bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Shared hall bathroom for secondary bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Convenient laundry room upstairs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Private primary suite with roomy walk-in closet
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Deluxe bath with dual vanities and walk-in shower
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Residence 1792 Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current Residence 1792 homes available in the Bravado community. 
            Get real-time pricing, availability, and move-in dates.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <RealScoutListings
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="PRICE_LOW"
              listingStatus="For Sale"
              propertyTypes=",SFR,OTHER"
              priceMin="429990"
              priceMax="449990"
            />
          </div>
        </div>
      </div>

      {/* Detailed Floor Plan Analysis Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Residence 1792 Floor Plan Analysis
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 1792 at Bravado</strong> represents an exceptional value in <strong>North Las Vegas new construction</strong>. This thoughtfully designed <strong>1,792 square foot home</strong> offers the perfect combination of space, functionality, and luxury features that make it ideal for first-time homebuyers, growing families, or those looking to downsize without compromising quality. As one of <strong>Century Communities'</strong> most popular floor plans in the <strong>Bravado community</strong>, the Residence 1792 has been carefully crafted to maximize every square foot while providing modern conveniences and premium finishes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Perfect for First-Time Homebuyers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting at <strong>$429,990</strong>, the <strong>Residence 1792</strong> offers an accessible entry point into <strong>luxury new construction homes in North Las Vegas</strong>. This price point represents exceptional value when you consider that every <strong>Bravado home</strong> includes the <strong>Century Connect® smart home package</strong> as standard equipment. Unlike other builders where similar technology costs $5,000-$10,000 as an upgrade, <strong>Century Communities</strong> includes it in every Residence 1792, providing immediate value and long-term convenience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For first-time homebuyers, the <strong>Residence 1792</strong> provides the perfect starter home without feeling like a starter home. The quality construction, premium finishes, and thoughtful design create a living experience that rivals homes costing significantly more. The flexibility to choose between 3 or 4 bedrooms allows you to select the configuration that best fits your current needs, with the option to adapt as your family grows or needs change.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ideal for Growing Families</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 1792's two-story design</strong> provides excellent separation between living and sleeping areas, making it ideal for families with children. The downstairs great room and kitchen create a central gathering space where families can spend time together, while the upstairs bedrooms provide quiet retreat spaces. The <strong>expansive loft</strong> on the upper level offers additional flexible space that can serve as a playroom, home office, or second living area—perfect for accommodating a growing family's changing needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>private primary suite</strong> with its deluxe bath and roomy walk-in closet provides parents with a luxurious retreat at the end of the day. The two generous secondary bedrooms share a hall bathroom, which is both practical and space-efficient. The convenient upstairs laundry room eliminates the need to carry laundry up and down stairs, making daily chores more manageable for busy families.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Residence 1792 Stands Out in North Las Vegas</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When comparing <strong>new homes in North Las Vegas</strong>, the <strong>Residence 1792 at Bravado</strong> consistently emerges as a top choice for several compelling reasons. First, the location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> places you in one of the area's fastest-growing corridors, with easy access to <strong>Craig Ranch Regional Park</strong>, major shopping centers, and employment hubs. The <strong>gated community</strong> provides security and exclusivity that's rare at this price point in the Las Vegas market.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Second, the <strong>Century Communities</strong> reputation for quality construction and attention to detail means your Residence 1792 is built to last. From the foundation to the roof, every aspect of construction reflects <strong>Century Communities'</strong> commitment to excellence. The energy-efficient design, premium materials, and thoughtful craftsmanship create a home that provides immediate enjoyment and long-term value. Working with <strong>Dr. Jan Duffy</strong>, a <strong>Featured Century Communities Partner</strong>, ensures you have expert guidance throughout the entire process.
          </p>
        </div>
      </div>

      {/* Customization Options Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Customization Options for Residence 1792
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          One of the advantages of choosing <strong>new construction at Bravado</strong> is the ability to customize your <strong>Residence 1792</strong> to match your personal style and preferences. <strong>Century Communities</strong> offers various options and upgrades that allow you to personalize your home while staying within your budget. <strong>Dr. Jan Duffy</strong> can help you understand which customizations add value and which are primarily for personal enjoyment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kitchen Customization Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The <strong>Residence 1792's kitchen</strong> can be customized with various premium options to enhance both functionality and aesthetics.
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
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flooring and Interior Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Choose from a variety of flooring and interior finish options to create the perfect ambiance in your <strong>Residence 1792</strong>.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Hardwood flooring upgrades throughout
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Luxury vinyl plank in high-traffic areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premium carpet selections for bedrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Tile flooring options for bathrooms
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Paint color and finish selections
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor and Structural Options</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Enhance your <strong>Residence 1792</strong> with outdoor features and structural modifications that expand your living space.
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
                Additional structural modifications
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Making Smart Customization Decisions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When customizing your <strong>Residence 1792</strong>, it's important to balance personal preferences with investment value. Some upgrades, like premium kitchen finishes or additional square footage, typically add significant resale value and enhance your daily living experience. Other customizations may be important for your personal enjoyment but might not provide proportional return on investment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr. Jan Duffy</strong>, with her expertise in <strong>new home construction</strong> and market knowledge, can help you make informed decisions about which customizations make sense for your situation. Her guidance ensures you create a home you love while maintaining good investment value. This personalized approach is one of the key benefits of working with a <strong>Featured Century Communities Partner</strong> who understands both the construction process and the Las Vegas real estate market.
          </p>
        </div>
      </div>

      {/* Investment Value and Market Position Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Residence 1792 Investment Value and Market Position
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          The <strong>Residence 1792 at Bravado</strong> represents a smart investment in <strong>North Las Vegas real estate</strong>. The combination of quality construction, desirable location, and community amenities positions this <strong>1,792 square foot home</strong> well for long-term appreciation. The <strong>North Las Vegas area</strong> continues to attract new residents, businesses, and infrastructure improvements, all of which contribute to property value growth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Energy Efficiency and Cost Savings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 1792</strong> is built with energy efficiency in mind, featuring high-efficiency HVAC systems, quality insulation, energy-efficient windows, and the <strong>Century Connect® smart home technology</strong> that optimizes energy usage. These features not only reduce your environmental impact but also significantly lower monthly utility costs compared to older homes or less efficient new construction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Century Connect® smart home system</strong> includes intelligent climate control that learns your preferences and adjusts automatically to minimize energy waste. Smart lighting systems can be scheduled and controlled remotely, ensuring lights aren't left on unnecessarily. These energy-saving features provide ongoing value throughout your ownership, reducing monthly expenses while maintaining comfort and convenience.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Resale Value and Market Appeal</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you invest in a <strong>Residence 1792 at Bravado</strong>, you're purchasing a home with strong resale potential. The <strong>1,792 square foot</strong> size appeals to a broad range of buyers, from first-time homebuyers to downsizers. The quality construction from <strong>Century Communities</strong>, premium finishes, and included smart home technology create lasting appeal that maintains value over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Bravado community's</strong> gated security, proximity to <strong>Craig Ranch Regional Park</strong>, and location in the <strong>89031 zip code</strong> are all factors that contribute to strong resale value. The <strong>North Las Vegas market</strong> continues to show growth, and <strong>new construction homes</strong> like the Residence 1792 typically appreciate well as the community matures and surrounding infrastructure develops.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Comparing Residence 1792 to Other North Las Vegas Options</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When shopping for <strong>new homes in North Las Vegas</strong>, it's important to compare the <strong>Residence 1792</strong> to other options available. Many builders charge $50,000-$100,000 more for comparable homes without the smart home technology that's included standard in every <strong>Bravado home</strong>. The starting price of <strong>$429,990</strong> for the Residence 1792 represents exceptional value in the Las Vegas new construction market.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Additionally, the <strong>gated community</strong> aspect of Bravado provides security and exclusivity that's rare at this price point. Most gated communities in <strong>North Las Vegas</strong> start significantly higher, often $50,000-$100,000 more for comparable homes. The combination of gated security, premium features, and accessible pricing makes the <strong>Residence 1792</strong> an outstanding value proposition. <strong>Dr. Jan Duffy</strong>, with her market expertise, can help you understand how the Residence 1792 compares to other options and why it represents an excellent investment opportunity.
          </p>
        </div>
      </div>

      {/* Living Experience and Lifestyle Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Living Experience in Your Residence 1792
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Beyond the specifications and features, the <strong>Residence 1792</strong> offers a lifestyle that combines comfort, convenience, and community. Living in <strong>Bravado</strong> means enjoying the best of <strong>North Las Vegas</strong> living, with access to world-class amenities, recreational opportunities, and a vibrant community atmosphere.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Daily Living in Residence 1792</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>Residence 1792's</strong> thoughtful design creates a living experience that enhances your daily routines. The open-concept layout on the main level allows for easy flow between the great room, kitchen, and dining area, making it perfect for both everyday living and entertaining. The <strong>spacious center island</strong> in the kitchen becomes a natural gathering spot for family meals, homework, or casual conversation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>two-story design</strong> provides privacy and separation between living and sleeping areas. The upstairs bedrooms offer quiet retreats, while the main level remains active and accessible. The <strong>expansive loft</strong> provides additional flexible space that adapts to your needs—whether that's a home office, playroom, or additional living area. This flexible design ensures your <strong>Residence 1792</strong> works for your lifestyle both now and in the future.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Lifestyle at Bravado</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Living in <strong>Bravado</strong> means being part of a vibrant community in <strong>North Las Vegas</strong>. The <strong>gated community</strong> provides security and a sense of exclusivity, while the proximity to <strong>Craig Ranch Regional Park</strong> offers 170 acres of recreational opportunities. Whether you enjoy walking trails, sports fields, or community events, the park becomes an extension of your backyard.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The location at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong> provides easy access to shopping, dining, entertainment, and employment centers. The <strong>I-15 access</strong> makes commuting to downtown Las Vegas, the Strip, or McCarran International Airport convenient. This combination of community amenities and location convenience creates a lifestyle that's both comfortable and connected.
            </p>
          </div>
        </div>
      </div>

      {/* Dr. Jan Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Jan Duffy for Your Residence 1792?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on your new home construction with Dr. Jan Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">New Construction Expert</h3>
              <p className="opacity-90">Specialized knowledge in new home construction and Century Communities processes</p>
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
          Ready to Tour Residence 1792?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for a private tour and expert guidance on your Residence 1792 purchase
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
