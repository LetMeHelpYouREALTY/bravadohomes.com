import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'
import GeoFAQSchema from '../components/geo-faq-schema'
import { getFloorPlansFaqs } from '../lib/floor-plans-faqs'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Bravado Floor Plans | Century Communities | From $429,990',
    description: 'Three Bravado two-story floor plans (1792, 1943, 2119) from $429,990–$449,990 per Century Communities (2026-10-12). Smart home tech included. Guidance from Dr. Jan Duffy.',
    keywords: [
      'bravado homes las vegas floor plans',
      'bravado floor plans',
      'bravado homes floor plans',
      'bravado floor plans las vegas',
      'century communities bravado floor plans',
      'bravado las vegas floor plans',
      'new construction floor plans las vegas',
      'two-story floor plans north las vegas',
      'two-story homes las vegas',
      'floor plans north las vegas',
      'new home floor plans',
      agent?.name || 'Dr. Jan Duffy',
      'residence 1792',
      'residence 1792 floor plan',
      'residence 1943',
      'residence 1943 floor plan',
      'residence 2119',
      'residence 2119 floor plan',
      'bravado homes for sale',
      'starting at $429,990',
      'bravado floor plan comparison',
      'choose floor plan',
      'floor plan selection',
      '89031 floor plans',
      'north las vegas floor plans'
    ],
    alternates: {
      canonical: `${baseUrl}/floor-plans`,
    },
    openGraph: {
      title: 'Bravado Homes Las Vegas Floor Plans | Century Communities',
      description: 'Bravado floor plans from $429,990–$449,990 (Century Communities, 2026-10-12). View Residence 1792, 1943, and 2119 with guidance from Dr. Jan Duffy.',
      url: `${baseUrl}/floor-plans`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bravado Homes Las Vegas Floor Plans',
      description: 'View three two-story Bravado floor plans starting at $429,990.',
    },
  }
}

export default async function FloorPlansPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent
  const floorPlanFaqs = getFloorPlansFaqs(config)
  return (
    <section>
      <GeoFAQSchema faqs={floorPlanFaqs} pageTitle="Bravado Floor Plans FAQ" pageUrl="/floor-plans" />
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ THREE BRAVADO FLOOR PLANS AVAILABLE ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado Homes Las Vegas Floor Plans
          </h1>
          <p className="text-2xl mb-4">
            Now Selling! Two-Story Floor Plans From $429,990
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance from Dr. Jan Duffy | Century Communities Partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Jan
            </a>
            <a href="#floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 View Floor Plans
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">🚨 ACT FAST - LIMITED AVAILABILITY!</h2>
        <p className="text-lg mb-4">
          Bravado offers three two-story floor plans. Schedule a VIP tour with Dr. Jan Duffy to compare layouts and current builder pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            📞 SECURE YOUR HOME: (702) 500-1955
          </a>
          <a href="#floor-plans" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
            👀 VIEW FLOOR PLANS NOW
          </a>
        </div>
      </div>

      {/* Floor Plans Section - Move up for immediate engagement */}
      <div id="floor-plans" className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Floor Plans - Now Selling!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Limited Availability!</strong> Choose from <strong>3 two-story floor plans</strong> with <strong>3 to 5 bedrooms</strong> and up to <strong>2,119 sq. ft.</strong> Each home features <strong>expansive living spaces</strong>, <strong>premium finishes</strong>, and <strong>smart tech included</strong> with the Century Connect® package.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residence 1792 */}
          <div className="floor-plan-card card-hover relative">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1792</h3>
              <p className="price-highlight">From $429,990</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">1,792</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3-4</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Two-story foyer with courtyard entrance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Wide-open great room and well-appointed kitchen
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spacious center island and large walk-in pantry
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Charming dining area with direct patio access
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expansive loft and convenient laundry room
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Private primary suite with deluxe bath
              </li>
            </ul>
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 1792
            </a>
          </div>

          {/* Residence 1943 */}
          <div className="floor-plan-card card-hover relative">
            <div className="most-popular-badge">MOST POPULAR</div>
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1943</h3>
              <p className="price-highlight">From $439,990</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">1,943</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Expansive Primary Suite with luxury amenities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Model Now Open for viewing
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced kitchen with premium appliances
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Flexible living spaces for family activities
              </li>
            </ul>
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 1943
            </a>
          </div>

          {/* Residence 2119 */}
          <div className="floor-plan-card card-hover relative">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 2119</h3>
              <p className="price-highlight">From $479,990</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2,119</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Bedrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2.5</p>
                <p className="text-sm text-gray-600">Bathrooms</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-gray-600">Car Garage</p>
              </div>
            </div>

            <h4 className="font-bold mb-3 text-gray-900">Key Features:</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Modeled Downstairs Den for flexible living
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Largest floor plan in the community
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Spacious great room perfect for entertaining
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Gourmet kitchen with large island
              </li>
            </ul>
            
            <a href="/contact" className="cta-button w-full text-center">
              Learn More About Plan 2119
            </a>
          </div>
        </div>

        {/* Urgent CTA after floor plans */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">⚡ ACT NOW - LIMITED TIME OFFER!</h3>
          <p className="text-lg mb-6">
            Get VIP access to Bravado floor plans with Dr. Jan Duffy's expert guidance. 
            <strong> Schedule your private tour today!</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 CALL NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg">
              📧 EMAIL DR. JAN
            </a>
          </div>
        </div>
      </div>

      {/* About Floor Plans Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado Floor Plans
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          <strong>Dr. Jan Duffy</strong>, Featured New Home Construction & Buyer Representation Specialist, represents <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—at <strong>Bravado</strong>, offering exceptional <strong>new homes for sale in North Las Vegas, NV</strong>. This prestigious North Las Vegas community features a luxurious lineup of <strong>two-story homes</strong> with <strong>modern designs</strong>, optional smart home features, and contemporary layouts.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado combines luxury and convenience for the ideal home in Clark County. Quick access to <strong>I-15 & Craig Ranch Regional Park</strong> provides easy connectivity to downtown Las Vegas, the Las Vegas Strip, and Mount Charleston.
        </p>
      </div>

      {/* RealScout Available Homes Section - Move down for secondary engagement */}
      <div id="available-homes" className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              🏠 Available Homes in Bravado
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              See real-time availability, pricing, and move-in dates for Bravado homes. 
              Get instant alerts when new homes become available.
            </p>
            
            {/* RealScout Available Homes Widget */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏡 Quick Move-In Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Browse homes that are move-in ready or nearing completion. 
                    Perfect for buyers who want to move quickly.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
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
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">🏗️ New Construction Homes</h3>
                  <p className="text-gray-700 mb-4">
                    Explore homes currently under construction with estimated 
                    completion dates and customization options.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <RealScoutListings
                      agentEncodedId="QWdlbnQtMjI1MDUw"
                      sortOrder="PRICE_LOW"
                      listingStatus="For Sale"
                      propertyTypes=",SFR,OTHER"
                      priceMin="450000"
                      priceMax="750000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Home Status Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-bold text-gray-900 mb-2">Move-In Ready</h4>
                <p className="text-sm text-gray-700">Homes completed and ready for immediate occupancy</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-bold text-gray-900 mb-2">Coming Soon</h4>
                <p className="text-sm text-gray-700">Homes nearing completion with estimated move-in dates</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold text-gray-900 mb-2">Under Construction</h4>
                <p className="text-sm text-gray-700">Customizable homes with construction timelines</p>
              </div>
            </div>

            {/* Advanced Search Widget */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                🔍 Advanced Floor Plan Search
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Looking for something specific? Use our advanced search to find homes with 
                exact features, square footage, bedrooms, and more in North Las Vegas.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="text-center">
              <a href="/contact" className="cta-button inline-block">
                Get Notified When New Homes Become Available
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Features Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Standard Features in Every Bravado Home
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Century Connect® Smart Home Technology</h3>
            <p className="mb-6 text-gray-700 leading-relaxed text-center">
              Every Bravado home comes equipped with Century Connect®, bringing smart home 
              convenience to your fingertips. Control your thermostat, lighting, security 
              system, and more from anywhere using your smartphone or tablet.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart thermostat with energy monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Integrated security system
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Smart lighting controls
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Mobile app integration
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <div className="feature-icon mx-auto mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Premium Finishes & Materials</h3>
            <p className="mb-6 text-gray-700 leading-relaxed text-center">
              Bravado homes feature carefully selected finishes and materials that combine 
              durability with aesthetic appeal. Every detail has been chosen to enhance your 
              daily living experience and provide lasting value.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Energy-efficient appliances
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Premium countertop options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Quality flooring throughout
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Modern lighting fixtures
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customization Options Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Customization Options & Upgrades
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Make your Bravado home uniquely yours with a variety of customization options 
          and upgrades available through Century Communities. From kitchen cabinet colors 
          to flooring selections, you can personalize your home to match your style and 
          preferences while staying within your budget.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🍳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Kitchen Options</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                White or dark cabinet finishes
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Granite or quartz countertops
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Stainless steel appliances
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Kitchen island upgrades
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flooring Selections</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Luxury vinyl plank flooring
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Carpet upgrades
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Tile options for wet areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Hardwood alternatives
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Outdoor Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Covered patio extensions
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Landscaping packages
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Outdoor kitchen prep areas
              </li>
              <li className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                Enhanced lighting
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Choosing the Right Floor Plan Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          How to Choose the Right Bravado Floor Plan for Your Family
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Selecting the perfect floor plan is one of the most important decisions when buying a new home. At 
          Bravado, we offer three distinct floor plans, each designed to meet different lifestyle needs. Understanding 
          the unique features and benefits of each plan will help you make an informed choice that fits your family's 
          current needs and future goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Consider Your Current Needs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think about how you currently use your living space. Do you need a home office or den? How many 
              bedrooms do you actually need right now? The Residence 1792 offers flexibility with 3-4 bedrooms, 
              making it ideal for smaller families or those who want extra space for guests or a home office.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you're planning to grow your family or frequently host guests, the Residence 2119 with its 
              additional square footage and flexible downstairs den might be the better choice. Consider your 
              daily routines and how the floor plan layout will support your lifestyle.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Plan for the Future</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While it's important to meet your current needs, also consider how your needs might change over 
              the next 5-10 years. Will your family grow? Will you need space for aging parents? Do you plan to 
              work from home more in the future? The flexibility of Bravado's floor plans allows for various 
              lifestyle changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The two-story design of all Bravado floor plans provides privacy and separation between living and 
              sleeping areas, which becomes more valuable as families grow. The upstairs bedrooms create a quiet 
              retreat, while downstairs living areas remain accessible for entertaining and daily activities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Think About Resale Value</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While you're buying a home to live in, it's also an investment. Consider which floor plan features 
              are most desirable in the North Las Vegas market. The Residence 1943 has been particularly popular, 
              suggesting strong resale potential. However, all three floor plans offer excellent value and appeal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Features like the Century Connect® smart home technology, premium finishes, and thoughtful design 
              elements contribute to long-term value. {agent?.name || 'Dr. Jan Duffy'} can help you understand 
              the market dynamics and resale considerations for each floor plan option.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Floor Plan Comparison Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Detailed Comparison: Residence 1792 vs 1943 vs 2119
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Each Bravado floor plan offers unique advantages. Here's a comprehensive comparison to help you understand 
          the differences and determine which plan best fits your lifestyle and budget.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Residence 1792: The Perfect Starter Home</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            From $429,990 (Century Communities, 2026-10-12), the Residence 1792 is Bravado&apos;s entry-level floor plan, but &quot;entry-level&quot; 
            doesn't mean basic. This 1,792 square foot home offers everything you need for comfortable living, 
            with the flexibility to choose between 3 or 4 bedrooms depending on your needs. The two-story foyer 
            with courtyard entrance creates an impressive first impression, while the wide-open great room and 
            well-appointed kitchen provide the perfect space for everyday living and entertaining.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Residence 1792 is ideal for first-time homebuyers, young professionals, small families, or empty 
            nesters looking to downsize without sacrificing quality or style. The spacious center island in the 
            kitchen and large walk-in pantry provide ample storage and workspace. The charming dining area with 
            direct patio access makes outdoor dining and entertaining easy and enjoyable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upstairs, the expansive loft provides additional flexible space that can serve as a playroom, home 
            office, or second living area. The convenient laundry room on the second floor eliminates the need 
            to carry laundry up and down stairs. The private primary suite with deluxe bath offers a luxurious 
            retreat after a long day, complete with premium finishes and thoughtful design details.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Residence 1943: The Most Popular Choice</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Residence 1943, starting at $469,790, has earned the "Most Popular" designation for good reason. 
            This 1,943 square foot floor plan offers the perfect balance of space, features, and value. The 
            expansive primary suite with luxury amenities provides a true master retreat, while the model home 
            is now open for viewing, allowing you to experience the quality and design firsthand.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The enhanced kitchen with premium appliances is a standout feature, making meal preparation and 
            entertaining a joy. The flexible living spaces accommodate various furniture arrangements and 
            lifestyle needs, making it easy to customize the home to your preferences. Whether you prefer 
            formal dining or casual open-concept living, the Residence 1943 adapts to your style.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Residence 1943 is particularly appealing to growing families who need a bit more space than the 
            1792 offers but don't require the full square footage of the 2119. The thoughtful design maximizes 
            every square foot, ensuring you get the most value and functionality from your investment. Many 
            homeowners find this floor plan to be the sweet spot between affordability and space.
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Residence 2119: Maximum Space and Flexibility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At 2,119 square feet, the Residence 2119 is Bravado's largest floor plan, starting at $479,790. This 
            is the perfect choice for families who want maximum space and flexibility. The modeled downstairs den 
            provides additional living space that can serve as a home office, guest room, playroom, or media 
            room—whatever your family needs most.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the largest floor plan in the community, the Residence 2119 offers the most generous living 
            spaces. The spacious great room is perfect for large family gatherings and entertaining, while the 
            gourmet kitchen with large island provides ample workspace for cooking and socializing. The 
            thoughtful layout ensures that even with more square footage, the home feels cohesive and well-designed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Residence 2119 is ideal for larger families, multi-generational households, or those who simply 
            want more room to spread out. The additional square footage provides flexibility for future needs, 
            whether that's a growing family, home-based business, or simply the desire for more personal space. 
            The investment in extra square footage pays dividends in comfort, functionality, and long-term value.
          </p>
        </div>
      </div>

      {/* Standard Features Across All Plans Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Standard Features Included in Every Bravado Floor Plan
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Regardless of which floor plan you choose, every Bravado home includes premium features and finishes 
          that elevate your living experience. Century Communities doesn't cut corners—these features come 
          standard, not as expensive upgrades.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Century Connect® Smart Home Technology</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every Bravado home includes the Century Connect® smart home package as standard. This comprehensive 
              system allows you to control lighting, temperature, security, and more from your smartphone, 
              whether you're at home or away. Unlike other builders where similar technology costs thousands in 
              upgrades, Century Communities includes it in every Bravado home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The smart home technology not only adds convenience but also helps reduce energy costs through 
              intelligent scheduling and controls. Homeowners consistently praise this feature as one of the 
              most valuable aspects of their Bravado home, appreciating both the immediate convenience and the 
              long-term energy savings.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Finishes and Quality Construction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Century Communities uses premium materials and finishes throughout every Bravado home. From the 
              foundation to the roof, quality construction is evident in every detail. Premium cabinetry, 
              countertops, flooring, and fixtures are standard, not upgrades. The attention to detail in trim 
              work, paint quality, and overall craftsmanship reflects Century Communities' commitment to excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Energy-efficient features are built into every home, including high-efficiency HVAC systems, 
              quality insulation, and energy-efficient windows. These features not only reduce your environmental 
              impact but also lower your monthly utility bills, providing ongoing value throughout your ownership.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Gated Community Amenities</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every Bravado homeowner enjoys access to the gated community's amenities and security features. The 
            well-maintained common areas, beautiful landscaping, and sense of community add value to every home, 
            regardless of floor plan. The proximity to Craig Ranch Regional Park provides an extension of your 
            backyard, with 170 acres of recreational opportunities just minutes away.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The gated community aspect provides security and exclusivity that enhances property values. The 
            thoughtful community design creates a sense of place and belonging, making Bravado more than just 
            a collection of houses—it's a true community where neighbors become friends and families thrive.
          </p>
        </div>
      </div>

      {/* VIP Partnership Section */}
      <div className="vip-partnership mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="vip-badge mb-6">
            ⭐ VIP CENTURY COMMUNITIES PARTNERSHIP ⭐
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Elite Builder Relationship = Your Advantage
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy's VIP Century Communities partnership delivers exclusive access, priority lot selection, and expert negotiation backed by premier relationships.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Early Phase Access</h3>
              <p className="opacity-90">First access to new phases before public release</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">⚡</div>
              <h3 className="text-xl font-bold mb-3">Priority Treatment</h3>
              <p className="opacity-90">VIP status throughout the entire process</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🎯</div>
              <h3 className="text-xl font-bold mb-3">Expert Negotiation</h3>
              <p className="opacity-90">Premier relationship-backed negotiation power</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan Selection Process Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          The Floor Plan Selection Process: What to Expect
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Choosing your Bravado floor plan is an exciting process that involves understanding your needs, 
          exploring your options, and making an informed decision. Here's what to expect when working with 
          {agent?.name || 'Dr. Jan Duffy'} to select the perfect floor plan for your family.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Initial Consultation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your journey begins with a consultation where {agent?.name || 'Dr. Jan'} will help you 
              understand your family's specific needs, lifestyle, and preferences. We'll discuss your current 
              living situation, future plans, and what's most important to you in a new home. This conversation 
              helps narrow down which floor plan might work best for your situation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We'll also discuss your budget, financing options, and timeline. Understanding these factors 
              upfront helps ensure we're looking at realistic options that fit your circumstances. This initial 
              consultation is completely free and comes with no obligation—it's all about helping you make an 
              informed decision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Model Home Tours</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seeing a floor plan in person is essential to truly understanding how it will work for your family. 
              {agent?.name || 'Dr. Jan'} will arrange private tours of the available model homes, allowing you 
              to experience each floor plan firsthand. During these tours, you'll see how the spaces flow, how 
              natural light enters the home, and how the layout functions in real life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We'll discuss the features and finishes you're seeing, point out customization options, and answer 
              any questions you have. These tours are invaluable for making an informed decision. You'll be able 
              to visualize how your furniture will fit, how your family will use the spaces, and whether the 
              floor plan truly meets your needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lot Selection and Customization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you've chosen a floor plan, {agent?.name || 'Dr. Jan'} will help you select the perfect lot 
              from available options. Lot selection affects views, privacy, natural light, and sometimes even 
              pricing. We'll discuss the pros and cons of different lot positions to help you make the best choice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You'll also have opportunities to customize your home with various options and upgrades. {agent?.name || 'Dr. Jan'} 
              can help you understand which upgrades add value and which might not be worth the investment. Her 
              expertise ensures you make smart customization choices that enhance your living experience without 
              overspending on features that don't add proportional value.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Making Your Decision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            After touring models and discussing your options, you'll have all the information needed to make 
            an informed decision. {agent?.name || 'Dr. Jan'} will help you weigh the pros and cons of each 
            floor plan option, considering your specific needs, budget, and preferences. There's no pressure—we 
            want you to feel confident in your choice.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Once you've selected your floor plan and lot, the process moves forward with contract signing and 
            the beginning of the construction process. Throughout construction, {agent?.name || 'Dr. Jan'} 
            remains your advocate, ensuring quality standards are met and addressing any questions or concerns 
            that arise. This ongoing support continues through closing and beyond, as you settle into your new 
            Bravado home.
          </p>
        </div>
      </div>

      {/* Floor Plan Customization Options Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Customization Options and Personalization
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          While Bravado floor plans are thoughtfully designed, you also have opportunities to personalize your home 
          with various options and upgrades. Understanding what customization options are available and which ones 
          add value helps you make informed decisions that enhance your living experience without overspending.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Interior Customization Options</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Century Communities offers various interior customization options that allow you to personalize your 
              Bravado home to match your style and preferences. These may include flooring selections, cabinet 
              upgrades, countertop materials, fixture choices, and paint colors. {agent?.name || 'Dr. Jan Duffy'} 
              can help you understand which upgrades add value and which might not provide proportional return on investment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The customization process is designed to be enjoyable and straightforward, with design centers and 
              selection appointments to guide you through your choices. Having expert guidance ensures you make 
              selections that enhance both your immediate enjoyment and long-term property value. This personalized 
              approach is one of the benefits of working with a Featured Century Communities Partner.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Exterior and Structural Options</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on availability and construction phase, you may have options for exterior finishes, 
              structural modifications, or additional features like covered patios, extended garages, or additional 
              rooms. These options allow you to create a home that truly fits your lifestyle and preferences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              {agent?.name || 'Dr. Jan'} can help you understand which structural options are available for your 
              chosen floor plan and lot, and which modifications make sense for your situation. Early selection of 
              your floor plan and lot provides the most customization opportunities, as construction timelines and 
              phase availability affect what options can be incorporated into your home.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Making Smart Upgrade Decisions</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all upgrades are created equal when it comes to value and return on investment. Some upgrades, like 
            additional square footage or premium kitchen finishes, typically add significant value and appeal. Others 
            may be important for your personal enjoyment but might not provide proportional resale value.
          </p>
          <p className="text-gray-700 leading-relaxed">
            {agent?.name || 'Dr. Jan Duffy'} provides expert guidance on upgrade decisions, helping you understand 
            which customizations add value and which are primarily for personal enjoyment. This guidance ensures you 
            make smart decisions that enhance your living experience while maintaining good investment value. The 
            goal is to create a home you love that also maintains strong resale potential.
          </p>
        </div>
      </div>

      <section id="faq" className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Bravado Floor Plans FAQ</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {floorPlanFaqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Find Your Perfect Floor Plan?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Call or email {agent?.name || 'Dr. Jan Duffy'} today for a private tour and expert guidance on your Bravado floor plan selection
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
            <h3 className="text-xl font-bold mb-3">Dr. Jan Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
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
            © {new Date().getFullYear()} Bravado | Homes by Dr. Jan Duffy. All rights reserved.<br />
            Independent real estate resource. Not affiliated with or endorsed by Century Communities. Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
          </p>
        </div>
      </div>
    </section>
  )
}
