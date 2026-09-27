import OptimizedImage, { FALLBACK_IMAGES } from './components/optimized-image'
import RealScoutListings from './components/realscout-listings'
import RealScoutHomeValue from './components/realscout-home-value'
import RealScoutAdvancedSearch from './components/realscout-advanced-search'
import RealScoutSimpleSearch from './components/realscout-simple-search'
import SchemaMarkup from './components/schema'
import AIOptimizationSchema from './components/ai-optimization-schema'
import PhotoGallery from './components/photo-gallery'
import KCMRSSFeed from './components/kcm-rss-feed'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from './utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  const description =
    'Bravado Homes by Century Communities in North Las Vegas. New construction floor plans with smart home tech. Expert buyer guidance from Dr. Janet Duffy.'
  const ogImageUrl = `${baseUrl}/og?title=${encodeURIComponent('Bravado Homes | Century Communities Las Vegas')}`

  return {
    title: 'Bravado Homes | Century Communities Las Vegas | Now Selling $459,790+',
    description,
    keywords: [
      'bravado homes',
      'bravado homes las vegas',
      'bravado homes las vegas for sale',
      'bravado homes las vegas reviews',
      'bravado north las vegas',
      'bravado century communities',
      'bravado century communities las vegas',
      'century communities bravado',
      'century communities bravado homes las vegas',
      'century communities las vegas',
      'bravado community',
      'the bravado',
      'new homes las vegas',
      'new construction homes las vegas',
      'north las vegas new homes',
      'north las vegas new construction',
      'luxury homes las vegas',
      'new homes north las vegas',
      'gated community north las vegas',
      'smart home technology',
      'century connect',
      'bravado floor plans',
      'residence 1792',
      'residence 1943',
      'residence 2119',
      agent?.name || 'Dr. Janet Duffy',
      '89031 homes',
      '89031 new construction',
      'starting at $459,790',
      'new construction las vegas',
      'two-story homes las vegas',
      'bravado homes for sale',
      'bravado community las vegas'
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: 'Bravado Homes | Century Communities Las Vegas | Now Selling $459,790+',
      description,
      url: baseUrl,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Bravado Homes by Century Communities in North Las Vegas',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bravado Homes | Century Communities Las Vegas',
      description,
      images: [ogImageUrl],
    },
  }
}

export default async function Page() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent
  return (
    <>
      <SchemaMarkup />
      <AIOptimizationSchema />
      <section>
      {/* Hero Section - Above the Fold */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Bravado Community Exterior - Luxury New Homes in North Las Vegas"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
            fallbackSrc={FALLBACK_IMAGES.exterior}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="vip-badge">
            ⭐ LIMITED TIME: VIP ACCESS TO BRAVADO ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Bravado Homes | Century Communities Las Vegas
          </h1>
          <p className="text-2xl mb-4 text-white drop-shadow-md font-semibold">
            Now Selling! Starting at $459,790 - Luxury Homes in Gated Community
          </p>
          <p className="text-xl mb-8 text-white drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
            Expert Guidance from Dr. Janet Duffy | Century Communities Partnership | <strong>Bravado Homes Las Vegas For Sale</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Janet
            </a>
            <a href="#floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 View Floor Plans
            </a>
          </div>
          <p className="text-lg text-white drop-shadow-md bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm inline-block">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Urgency & Social Proof Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">🚨 LIMITED AVAILABILITY - ACT FAST!</h2>
        <p className="text-lg mb-4">
          <strong>Only 3 floor plans remaining!</strong> Bravado is selling out fast. 
          Get your VIP tour with Dr. Janet Duffy before these luxury homes are gone.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            📞 SECURE YOUR HOME: (702) 500-1955
          </a>
          <a href="#floor-plans" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
            👀 VIEW AVAILABLE FLOOR PLANS
          </a>
        </div>
      </div>

      {/* Floor Plans Section - Move up for immediate engagement */}
      <div id="floor-plans" className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Homes Floor Plans - Now Selling!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          <strong>Bravado Homes by Century Communities</strong> - Limited Availability! Choose from <strong>3 two-story floor plans</strong> with <strong>3 to 5 bedrooms</strong> and up to <strong>2,119 sq. ft.</strong> Each <strong>Bravado home</strong> features <strong>expansive living spaces</strong>, <strong>premium finishes</strong>, and <strong>smart tech included</strong> with the Century Connect® package.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Residence 1792 */}
          <div className="floor-plan-card card-hover relative">
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 1792 - Modern Contemporary Two-Story Home with Premium Features"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1792</h3>
                    <p className="price-highlight">From $459,790</p>
                  </div>
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
            
            <a href="/models/residence-1792" className="cta-button w-full text-center">
              View Residence 1792 Details
            </a>
          </div>

          {/* Residence 1943 */}
          <div className="floor-plan-card card-hover relative">
            <div className="most-popular-badge">MOST POPULAR</div>
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 1943 - Spanish Mission Style Two-Story Home with Luxury Amenities"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1943</h3>
                    <p className="price-highlight">From $469,790</p>
                  </div>
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
            
            <a href="/models/residence-1943" className="cta-button w-full text-center">
              View Residence 1943 Details
            </a>
          </div>

          {/* Residence 2119 */}
          <div className="floor-plan-card card-hover relative">
            <div className="mb-6">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=480&q=80"
                  alt="Residence 2119 - Mediterranean Style Luxury Two-Story Home with Smart Features"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
              </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 2119</h3>
                    <p className="price-highlight">From $479,790</p>
                  </div>
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
            
            <a href="/models/residence-2119" className="cta-button w-full text-center">
              View Residence 2119 Details
            </a>
          </div>
        </div>

        {/* Urgent CTA after floor plans */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">⚡ ACT NOW - LIMITED TIME OFFER!</h3>
          <p className="text-lg mb-6">
            Get VIP access to Bravado floor plans with Dr. Janet Duffy's expert guidance. 
            <strong> Schedule your private tour today!</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 CALL NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors text-lg">
              📧 EMAIL DR. JANET
            </a>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Bravado Community Gallery
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
          Explore the stunning homes and beautiful community at <strong>Bravado</strong>. From modern exteriors to luxurious interiors, 
          discover why Bravado is the perfect place to call home in North Las Vegas.
        </p>
        <PhotoGallery />
      </div>

      {/* Quick Property Search - Move after visual content */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          🔍 Find Your Dream Home in North Las Vegas
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
          Start your search for the perfect home in <strong>Bravado</strong> or throughout North Las Vegas. 
          Get expert guidance from <strong>Dr. Janet Duffy</strong>.
        </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Property Search</h3>
              <p className="text-white mb-6 opacity-90">Enter your criteria to find available homes</p>
              <div className="max-w-2xl mx-auto">
                <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏡</div>
                <h4 className="font-bold text-gray-900 mb-2">Bravado Homes</h4>
                <p className="text-sm text-gray-700">New construction homes starting at $459K</p>
                <a href="/floor-plans" className="text-blue-600 font-medium hover:underline">View Floor Plans</a>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏗️</div>
                <h4 className="font-bold text-gray-900 mb-2">New Construction</h4>
                <p className="text-sm text-gray-700">Expert guidance through the build process</p>
                <a href="/services" className="text-blue-600 font-medium hover:underline">Learn More</a>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Market Value</h4>
                <p className="text-sm text-gray-700">Get instant home valuations</p>
                <a href="/services" className="text-blue-600 font-medium hover:underline">Get Valuation</a>
              </div>
            </div>

            <div className="text-center">
              <a href="/services" className="cta-button inline-block">
                Explore All Services & Tools
              </a>
            </div>
      </div>

      {/* About Bravado Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Bravado Homes by Century Communities
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          <strong>Dr. Janet Duffy</strong>, Featured New Home Construction & Buyer Representation Specialist, is proud to represent <strong>Century Communities</strong>—one of the nation's top 10 homebuilders—at <strong>Bravado Homes in North Las Vegas, NV</strong>. This prestigious gated <strong>Bravado community</strong> showcases stunning two-story floor plans ranging from 1,792 to 2,119 square feet, featuring up to 5 bedrooms and contemporary open layouts. Each <strong>Bravado home</strong> includes the innovative <strong>Century Connect® smart home package</strong>, modern design elements, and premium finishes that define luxury living in the 89031 zip code.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Strategically located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, <strong>Bravado Homes</strong> offers unparalleled access to <strong>Craig Ranch Regional Park</strong>—North Las Vegas' premier recreational destination featuring 170 acres of trails, sports fields, and community amenities. <strong>Bravado community</strong> residents enjoy convenient proximity to <strong>Aliante Casino + Hotel</strong>, <strong>Las Vegas Premium Outlets North</strong>, and <strong>I-15 access</strong> for easy commuting to downtown Las Vegas, McCarran International Airport, and the Las Vegas Strip.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          This master-planned <strong>Bravado community</strong> represents the pinnacle of North Las Vegas living, combining the tranquility of suburban life with the excitement of nearby attractions including <strong>Topgolf Las Vegas</strong>, <strong>M Resort Spa Casino</strong>, world-class golf courses, and convenient access to <strong>Nellis AFB</strong>. <strong>Bravado Homes</strong>' location in the heart of North Las Vegas's fastest-growing corridor ensures strong property values and exceptional lifestyle amenities for discerning homebuyers.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <a href="/community" className="cta-button w-full text-center">
              🏘️ Community Features
            </a>
          </div>
          <div className="text-center">
            <a href="/amenities" className="cta-button w-full text-center">
              🌳 Amenities & Lifestyle
            </a>
          </div>
          <div className="text-center">
            <a href="/smart-home-technology" className="cta-button w-full text-center">
              🏠 Smart Home Tech
            </a>
          </div>
        </div>
      </div>


      {/* VIP Partnership Section - Move up for credibility */}
      <div className="vip-partnership mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="vip-badge mb-6">
            ⭐ VIP CENTURY COMMUNITIES PARTNERSHIP ⭐
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Elite Builder Relationship = Your Advantage
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Janet Duffy's VIP Century Communities partnership delivers exclusive access, priority lot selection, and expert negotiation backed by premier relationships.
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
          
          <div className="text-center mt-8">
            <a href="/contact" className="cta-button">
              Learn More About VIP Partnership
            </a>
          </div>
        </div>
      </div>

      {/* North Las Vegas Location Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Prime North Las Vegas Location
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">5 Miles to Craig Ranch Regional Park</h3>
            <p className="text-gray-700">World-class recreational facilities, sports fields, and community events at your doorstep</p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">🌆</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">15 Miles to Downtown Las Vegas</h3>
            <p className="text-gray-700">Easy access to world-class entertainment, dining, and culture</p>
          </div>
          
          <div className="location-card card-hover">
            <div className="text-4xl mb-4">⛰️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">35 Miles to Mount Charleston</h3>
            <p className="text-gray-700">Alpine escape with skiing, hiking, and 20°F cooler temperatures</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">📍 Parks & Recreation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Craig Ranch Regional Park</li>
              <li>• Centennial Hills Park</li>
              <li>• Aliante Nature Discovery Park</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">🛒 Shopping & Dining</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Target, Walmart, Kohl's</li>
              <li>• Northstar Bar & Grill, Chili's</li>
              <li>• Pier 88 Boiling Seafood & Bar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Work With Dr. Janet Duffy Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Work With Dr. Janet Duffy?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
            <p className="text-gray-700 leading-relaxed">I work directly with Century Communities to give you insider access while representing <strong>YOUR interests</strong>, not theirs.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Market Expertise</h3>
            <p className="text-gray-700 leading-relaxed">I'll show you comparable communities and help you understand <strong>true market value</strong>—not just what the builder tells you.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Negotiation Power</h3>
            <p className="text-gray-700 leading-relaxed">Even with new construction, there's room to negotiate. I know how to <strong>maximize your leverage</strong> and protect your interests.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="feature-icon mx-auto text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Las Vegas Specialist</h3>
            <p className="text-gray-700 leading-relaxed"><strong>Nevada License S.0197614</strong>. Deep knowledge of North Las Vegas and the entire metro area.</p>
          </div>
        </div>
      </div>

      {/* Market Insights Section */}
      <div className="mb-16">
        <KCMRSSFeed />
      </div>

      {/* Comprehensive Bravado Overview Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Complete Guide to Bravado Homes by Century Communities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Bravado represents the pinnacle of new construction living in North Las Vegas. This comprehensive guide 
          covers everything you need to know about Bravado Homes, from the floor plans and features to the 
          community lifestyle and investment potential.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Bravado Homebuying Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose Bravado Homes, you're not just buying a house—you're investing in a lifestyle. 
              The homebuying process at Bravado is designed to be smooth, transparent, and enjoyable. Working with 
              {agent?.name || 'Dr. Janet Duffy'} as your Featured Century Communities Partner ensures you have 
              expert guidance every step of the way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From the initial consultation through closing and beyond, {agent?.name || 'Dr. Janet'} provides 
              personalized service that protects your interests. You'll have access to insider information about 
              available lots, pricing, and incentives that aren't always available to the general public. This 
              VIP access can make a significant difference in finding the perfect home at the best possible price.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Century Communities Stands Out</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Century Communities has built a reputation as one of America's top 10 homebuilders by consistently 
              delivering quality, value, and innovation. At Bravado, this commitment to excellence is evident in 
              every detail. The Century Connect® smart home package, premium finishes, and thoughtful design 
              elements all reflect Century Communities' dedication to creating homes that exceed expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets Century Communities apart is their focus on building communities, not just houses. At 
              Bravado, this philosophy translates to a master-planned community with thoughtful amenities, 
              beautiful landscaping, and a sense of place that makes residents proud to call it home. The 
              gated community features provide security and exclusivity while maintaining the welcoming atmosphere 
              that makes Bravado special.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Investment Potential and Market Position</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bravado Homes represent a smart investment in North Las Vegas's fastest-growing corridor. The 
            combination of quality construction, desirable location, and community amenities positions Bravado 
            homes well for long-term appreciation. The North Las Vegas area continues to attract new residents, 
            businesses, and infrastructure improvements, all of which contribute to property value growth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The starting price of $459,790 for Bravado homes represents exceptional value in the Las Vegas 
            new construction market. Comparable homes in other communities often cost significantly more, while 
            Bravado includes premium features like Century Connect® smart home technology as standard. This 
            combination of affordability and quality makes Bravado an attractive option for both first-time 
            homebuyers and those looking to upgrade.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The energy-efficient design and smart home technology also contribute to long-term value through 
            reduced utility costs. Homeowners can expect lower monthly expenses compared to older homes, and 
            the smart home features add convenience and appeal that will remain valuable for years to come. 
            This combination of immediate value and long-term investment potential makes Bravado a compelling 
            choice for discerning homebuyers.
          </p>
        </div>
      </div>

      {/* Why Choose Bravado Over Other Communities Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Bravado Stands Out Among Las Vegas New Construction Communities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Las Vegas offers numerous new construction communities, but Bravado Homes by Century Communities 
          stands apart for several compelling reasons. When comparing Bravado to other options in North Las Vegas 
          and the greater Las Vegas area, these distinguishing factors consistently emerge as reasons why 
          homebuyers choose Bravado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Included Smart Home Technology</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlike many builders where smart home features are expensive upgrades, Bravado includes Century 
              Connect® as standard equipment. This comprehensive smart home system typically costs $5,000-$10,000 
              as an upgrade in other communities, but at Bravado, it comes with every home. This represents 
              significant value and convenience that homeowners appreciate from day one.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Century Connect® system includes smart locks, video doorbells, automated lighting, smart 
              thermostats, and comprehensive security monitoring. All of this is controlled through a single, 
              user-friendly app on your smartphone. Homeowners consistently rate this feature as one of the 
              most valuable aspects of choosing Bravado over competing communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Gated Community at Entry-Level Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Finding a gated community with premium amenities at Bravado's starting price of $459,790 is 
              exceptional in the Las Vegas market. Most gated communities in North Las Vegas start significantly 
              higher, often $50,000-$100,000 more for comparable homes. Bravado provides the security, 
              exclusivity, and community amenities of higher-priced developments at an accessible price point.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The gated entrance provides peace of mind and adds to the sense of community. Well-maintained 
              common areas and landscaping enhance property values while creating an attractive living environment. 
              The combination of gated security and affordable pricing makes Bravado an outstanding value 
              proposition in the Las Vegas new construction market.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Buyer Representation Available</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most new construction communities only offer builder sales teams whose primary interest is 
              representing the builder, not the buyer. At Bravado, you have the option to work with 
              {agent?.name || 'Dr. Janet Duffy'} as an independent buyer's representative. This means you 
              have someone advocating for your interests throughout the entire process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              {agent?.name || 'Dr. Janet'} provides expert guidance on lot selection, pricing negotiation, 
              upgrade decisions, and contract terms. Having an experienced professional who specializes in 
              new construction and understands the Century Communities process gives you a significant advantage 
              throughout your homebuying journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Prime Location with Growth Potential</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado's location at 5060 Wind Springs Street in North Las Vegas positions it in one of the 
              area's fastest-growing corridors. The proximity to Craig Ranch Regional Park, major employment 
              centers, and infrastructure improvements creates strong appreciation potential. The North Las Vegas 
              area continues to attract new residents and businesses, driving property value growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Easy access to I-15 provides convenient commuting to downtown Las Vegas, the Strip, McCarran 
              International Airport, and Nellis AFB. This connectivity is valuable for both current living 
              and future resale. The combination of location, growth potential, and community amenities 
              makes Bravado a smart investment choice in addition to being a great place to live.
            </p>
          </div>
        </div>
      </div>

      {/* Bravado Home Features and Benefits Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Guide to Bravado Home Features and Benefits
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Every Bravado home is designed with careful attention to detail, premium features, and thoughtful 
          amenities that enhance daily living. Understanding these features and benefits helps you appreciate 
          the value and quality that Century Communities brings to every home in the Bravado community.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Energy Efficiency and Cost Savings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado homes are built with energy efficiency in mind, featuring high-efficiency HVAC systems, 
              quality insulation, energy-efficient windows, and smart home technology that optimizes energy usage. 
              These features not only reduce your environmental impact but also significantly lower monthly utility 
              costs compared to older homes or less efficient new construction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Century Connect® smart home system includes intelligent climate control that learns your 
              preferences and adjusts automatically to minimize energy waste. Smart lighting systems can be 
              scheduled and controlled remotely, ensuring lights aren't left on unnecessarily. These energy-saving 
              features provide ongoing value throughout your ownership, reducing monthly expenses while maintaining 
              comfort and convenience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Finishes and Design Elements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every Bravado home includes premium finishes that would typically be expensive upgrades in other 
              communities. Premium cabinetry, countertops, flooring, and fixtures are standard, not optional. 
              The attention to detail in design elements, trim work, and overall aesthetics creates a luxury 
              living experience at an accessible price point.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The thoughtful design extends beyond finishes to include functional elements like walk-in pantries, 
              spacious center islands, and well-planned storage solutions. These design features enhance daily 
              living while maintaining the home's aesthetic appeal. The combination of form and function creates 
              spaces that are both beautiful and practical for real-world living.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Living Spaces</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado's floor plans are designed with flexibility in mind, allowing homes to adapt to different 
              lifestyle needs and family situations. Whether you need a home office, guest room, playroom, or 
              additional living space, the floor plans provide options to accommodate your needs. This flexibility 
              ensures your home remains functional as your family's needs evolve.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The two-story design provides privacy and separation between living and sleeping areas, while open-concept 
              layouts create spacious, connected living spaces. The thoughtful placement of windows maximizes natural 
              light, and the flow between rooms creates an inviting atmosphere. This combination of flexibility and 
              thoughtful design ensures your Bravado home works for your lifestyle both now and in the future.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Home Technology Integration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Century Connect® smart home system included in every Bravado home provides comprehensive control 
              over security, lighting, climate, and more. This integrated system is designed to be user-friendly, 
              so you don't need to be tech-savvy to enjoy the benefits. The single app interface makes managing 
              your entire home simple and convenient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The smart home technology not only adds convenience but also enhances security and energy efficiency. 
              Remote monitoring capabilities provide peace of mind when you're away, while automated systems ensure 
              your home operates efficiently even when you're not thinking about it. This technology integration 
              represents thousands of dollars in value and significantly enhances the living experience at Bravado.
            </p>
          </div>
        </div>
      </div>

      {/* Final Urgency CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white p-12 rounded-lg text-center mb-8">
        <h2 className="text-4xl font-bold mb-6">
          🚨 DON'T MISS OUT - BRAVADO IS SELLING FAST!
        </h2>
        <p className="text-xl mb-8 opacity-90">
          <strong>Only 3 floor plans remaining!</strong> Get VIP access to Bravado with {agent?.name || 'Dr. Janet Duffy'}'s expert guidance. 
          Schedule your private tour today before these luxury homes are gone forever.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            📞 SECURE YOUR HOME NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors">
            📧 EMAIL DR. JANET<br />
            {email}
          </a>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">⚡ LIMITED TIME BONUSES!</h3>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🎁</span>
              <span>FREE VIP Tour with Dr. Janet Duffy</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">💰</span>
              <span>Expert Negotiation & Market Analysis</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">🏆</span>
              <span>Priority Access to Best Lots</span>
            </div>
          </div>
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
            <p>Las Vegas Real Estate Expert<br />
            Nevada License: S.0197614<br />
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Bravado Sales Office</h3>
            <p>Dr. Janet Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 222-1964<br /><br />
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
    </>
  )
}
