import RealScoutListings from '../components/realscout-listings'
import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutSimpleSearch from '../components/realscout-simple-search'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Contact Dr. Jan Duffy | Bravado Homes North Las Vegas | Century Communities Expert',
    description: 'Contact Dr. Jan Duffy for expert new home construction and buyer representation services in North Las Vegas. Featured Century Communities Partner. Call (702) 500-1955 or email today.',
    keywords: [
      'contact Dr. Jan Duffy',
      'Dr. Jan Duffy contact',
      'Bravado homes contact',
      'North Las Vegas real estate agent',
      'Century Communities expert',
      'new home construction specialist',
      'buyer representation',
      'real estate agent North Las Vegas',
      '89031 real estate',
      'Bravado homes for sale',
      'schedule tour Bravado',
      'model home tour',
      'Nevada real estate license S.0197614',
      agent?.name || 'Dr. Jan Duffy',
      'Century Communities partner',
      'new construction consultation',
      'home buying guidance',
      'North Las Vegas homes'
    ],
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
    openGraph: {
      title: 'Contact Dr. Jan Duffy | Bravado Homes North Las Vegas',
      description: 'Contact Dr. Jan Duffy for expert new home construction and buyer representation services. Featured Century Communities Partner.',
      url: `${baseUrl}/contact`,
      type: 'website',
    },
  }
}

export default async function ContactPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ LIMITED TIME: VIP ACCESS TO BRAVADO HOMES ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-2xl mb-4">
            Your Featured Century Communities Partner
          </p>
          <p className="text-xl mb-8 opacity-90">
            Expert Guidance for New Home Construction & Buyer Representation in North Las Vegas
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Jan
            </a>
            <a href="tel:+17022221964" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors text-lg">
              🚨 Urgent: (702) 222-1964
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* About Dr. Jan Duffy Section */}
      <div className="about-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          About Dr. Jan Duffy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Ready to make Bravado your new home? Dr. Jan Duffy, featured partner with 
          Century Communities, is here to guide you through every step of your home 
          buying journey. As a <strong>Featured New Home Construction and Buyer Representation specialist</strong>, she provides expert guidance throughout the entire new home construction process.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          As a featured partner with <strong>Century Communities</strong>—one of America's Most Trusted Homebuilders for 3 years running—Dr. Duffy provides exclusive access to new home construction opportunities and expert buyer representation throughout the entire process.
        </p>
      </div>

      {/* RealScout Lead Capture Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              🎯 Get Personalized Home Alerts & Market Updates
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sign up for Dr. Jan Duffy's exclusive property alerts and stay informed about 
              new Bravado homes, market changes, and investment opportunities.
            </p>
            
            <div className="bg-white p-6 rounded-lg text-gray-900 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">📧 Property Alerts</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>✅ New Bravado homes as they become available</li>
                    <li>✅ Price changes and market updates</li>
                    <li>✅ Move-in ready homes notifications</li>
                    <li>✅ Exclusive pre-construction opportunities</li>
                    <li>✅ Neighborhood development updates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Market Intelligence</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>✅ North Las Vegas market trends</li>
                    <li>✅ Home value appreciation reports</li>
                    <li>✅ Investment opportunity analysis</li>
                    <li>✅ School district updates</li>
                    <li>✅ Local amenity developments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Value Widget */}
            <div className="bg-white p-6 rounded-lg text-gray-900 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                🏡 Get Your Home's Instant Market Value
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Curious about your current home's value? Get an instant, accurate valuation 
                from Dr. Jan Duffy's RealScout system. Perfect for planning your next move to Bravado!
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            {/* Simple Search Widget */}
            <div className="bg-white p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Quick Property Search</h3>
              <p className="text-gray-700 text-center mb-6">Start your search right here</p>
              <div className="max-w-xl mx-auto">
                <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>

            {/* RealScout Lead Capture Widget */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sign Up for Dr. Jan Duffy's Alerts</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
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
      </div>

      {/* Contact Options Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Get in Touch with Dr. Jan Duffy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Schedule a Model Home Tour</h3>
            <p className="text-gray-700 mb-6">
              Experience the quality and features of Bravado homes firsthand with a 
              personal tour of our model homes. See the Century Connect® smart home 
              technology, premium finishes, and thoughtful design details that make 
              each home special.
            </p>
            <a href="tel:+17025001955" className="cta-button w-full text-center">
              Call (702) 500-1955
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">💻</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Virtual Consultation</h3>
            <p className="text-gray-700 mb-6">
              Can't visit in person right away? Dr. Duffy offers virtual consultations 
              to discuss your needs, show you available floor plans, and answer all 
              your questions about life at Bravado.
            </p>
            <a href={`mailto:${email}`} className="cta-button w-full text-center">
              Schedule Virtual Meeting
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">📧</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Email Consultation</h3>
            <p className="text-gray-700 mb-6">
              Get detailed information about available homes, floor plans, pricing, 
              and community amenities. Dr. Duffy responds promptly to all inquiries 
              with personalized guidance.
            </p>
            <a href={`mailto:${email}`} className="cta-button w-full text-center">
              Email Dr. Duffy
            </a>
          </div>
        </div>
      </div>

      {/* Current Bravado Information Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Current Bravado Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Available Floor Plans</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900">Residence 1792</h4>
                <p className="text-gray-700">From $459,990 • 1,792 sq ft • 3 bed • 2.5 bath • 2 car garage</p>
                <p className="text-sm text-gray-600">Features: Covered Patio, Vaulted Entry</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold text-gray-900">Residence 1943</h4>
                <p className="text-gray-700">From $469,990 • 1,943 sq ft • 3 bed • 2.5 bath • 2 car garage</p>
                <p className="text-sm text-gray-600">Features: Model Now Open, Expansive Primary Suite</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-gray-900">Residence 2119</h4>
                <p className="text-gray-700">From $479,990 • 2,119 sq ft • 3 bed • 2.5 bath • 2 car garage</p>
                <p className="text-sm text-gray-600">Features: Modeled Downstairs Den</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Features</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Gated Community</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Community park with grass area</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Walking paths</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Century Connect® smart home package</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Near Craig Ranch Regional Park</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Easy access to I-15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information & Hours Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Contact Information & Hours
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">👩‍💼</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Dr. Jan Duffy</h3>
            <p className="text-gray-700 mb-2">
              <strong>Featured New Home Construction<br />
              & Buyer Representation Specialist</strong><br />
              Century Communities - Bravado
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> (702) 500-1955<br />
              <strong>Urgent/Marketing:</strong> (702) 222-1964<br />
              <strong>Email:</strong> {email}
            </p>
            <p className="text-gray-700">
              <strong>Nevada License:</strong> S.0197614<br />
              <strong>Areas Served:</strong> North Las Vegas, Las Vegas Metro
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">🕒</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Model Home Hours</h3>
            <div className="space-y-2 text-gray-700 mb-4">
              <div className="flex justify-between">
                <span>Monday - Sunday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              *Extended hours available by appointment<br />
              *Two stunning models available for tour
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border card-hover text-center">
            <div className="feature-icon mx-auto mb-4">📍</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Bravado Community</h3>
            <p className="text-gray-700">
              5060 Wind Springs Street<br />
              North Las Vegas, NV 89031<br />
              <span className="text-sm text-gray-600">Near Craig Ranch Regional Park</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Gated Community</strong><br />
              Easy access to I-15
            </p>
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
            Why Choose Dr. Jan Duffy as Your Home Specialist?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy serves as a Featured New Home Construction and Buyer Representation specialist for Century Communities, providing expert guidance throughout your entire new home journey while protecting your interests.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">Featured Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities inventory, pricing, and incentives at Bravado</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🏠</div>
              <h3 className="text-xl font-bold mb-3">New Construction Expertise</h3>
              <p className="opacity-90">Specialized knowledge in new home construction process, timelines, and quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="feature-icon mx-auto">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate throughout the process, ensuring your interests are always protected</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/contact" className="cta-button">
              Get Expert Home Buying Guidance
            </a>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          What to Expect During Your Visit
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Model Home Tour</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Guided tour of available floor plans
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Demonstration of Century Connect® smart home features
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Review of available upgrades and customization options
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Discussion of financing options and incentives
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Community amenities and lifestyle overview
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Personalized Consultation</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Assessment of your family's specific needs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Timeline and move-in date planning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Home selection and customization guidance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Neighborhood and school district information
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                Ongoing support throughout the buying process
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">What is included in the Century Connect® smart home package?</h3>
            <p className="text-gray-700">
              Every Bravado home comes with Century Connect® smart home technology, including 
              smart thermostat, integrated security system, smart lighting controls, and 
              mobile app integration for remote monitoring and control of your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Are there any current incentives or promotions available?</h3>
            <p className="text-gray-700">
              Century Communities regularly offers incentives and promotions for qualified 
              buyers. Dr. Duffy can provide you with the most current information about 
              available offers, including financing incentives, upgrade credits, and 
              closing cost assistance programs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">How long does the home building process take?</h3>
            <p className="text-gray-700">
              Construction timelines vary depending on the floor plan and customization 
              options selected. Generally, homes can be completed within 4-6 months from 
              the start of construction. Dr. Duffy will provide you with a detailed 
              timeline based on your specific home selection.
            </p>
          </div>
        </div>
      </div>

      {/* Ready to Explore Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Bravado Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Don't wait to secure your dream home at Bravado. With limited inventory available 
          and high demand for these exceptional homes, now is the perfect time to schedule 
          your personal tour with Dr. Jan Duffy, your Featured New Home Construction and Buyer Representation specialist.
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
          <a href="tel:+17022221964" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors">
            URGENT<br />
            <span className="text-2xl">(702) 222-1964</span>
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
            <p>Featured New Home Construction<br />
            & Buyer Representation Specialist<br />
            Nevada License: S.0197614</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Century Communities</h3>
            <p>One of America's Most Trusted Homebuilders<br />
            (3 Years Running)<br />
            Model Home Hours: 10:00 AM - 6:00 PM</p>
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
