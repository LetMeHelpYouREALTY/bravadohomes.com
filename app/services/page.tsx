import Image from 'next/image'
import Link from 'next/link'
import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutListings from '../components/realscout-listings'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services | Dr. Jan Duffy | Bravado Homes North Las Vegas',
  description: 'Expert new home construction and buyer representation services in North Las Vegas. Dr. Jan Duffy provides specialized guidance for Century Communities homes at Bravado.',
  keywords: [
    'new home construction services',
    'buyer representation services',
    'real estate services North Las Vegas',
    'Century Communities expert',
    'new construction specialist',
    'buyer representation specialist',
    'North Las Vegas real estate services',
    'Bravado homes services',
    'Dr. Jan Duffy services',
    'new home construction guidance',
    'buyer advocacy services',
    'real estate consultation',
    'new construction consultation',
    'home buying services',
    '89031 real estate services',
    'Century Communities partner services',
    'new home construction expert',
    'buyer representation expert',
    'North Las Vegas home buying',
    'real estate agent services'
  ],
  openGraph: {
    title: 'Real Estate Services | Dr. Jan Duffy | Bravado Homes North Las Vegas',
    description: 'Expert new home construction and buyer representation services in North Las Vegas. Dr. Jan Duffy provides specialized guidance for Century Communities homes at Bravado.',
    url: 'https://www.bravadohomes.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/services',
  },
}

export default async function ServicesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ FEATURED NEW HOME CONSTRUCTION & BUYER REPRESENTATION ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Expert Real Estate Services
          </h1>
          <p className="text-2xl mb-4">
            Specialized Guidance for North Las Vegas Homebuyers
          </p>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy | Century Communities Featured Partner
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Jan
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Real Estate Services
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          As a Featured New Home Construction and Buyer Representation specialist with Century Communities, 
          Dr. Jan Duffy provides unparalleled expertise in helping families navigate the new home construction 
          process while ensuring your interests are always protected.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Home Construction</h3>
            <p className="text-gray-700 mb-6">
              Expert guidance through the entire new construction process. From initial selection to final walkthrough, 
              I ensure you get the best value and quality for your Century Communities home.
            </p>
            <Link href="/new-home-construction" className="cta-button w-full text-center">
              Learn More About New Construction
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Buyer Representation</h3>
            <p className="text-gray-700 mb-6">
              Your dedicated advocate throughout the home buying process. I represent YOUR interests, not the builder's, 
              ensuring you make informed decisions and get the best possible deal.
            </p>
            <Link href="/buyer-representation" className="cta-button w-full text-center">
              Learn About Buyer Representation
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4 text-center">💰</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Financing & Incentives</h3>
            <p className="text-gray-700 mb-6">
              Access to exclusive financing options and incentives through Century Communities. I'll help you find 
              the best rates and programs to make your dream home affordable.
            </p>
            <Link href="/financing-incentives" className="cta-button w-full text-center">
              Explore Financing Options
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Dr. Jan Duffy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose Dr. Jan Duffy?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="feature-icon mx-auto">🏆</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Century Communities Partnership</h3>
            <p className="text-gray-700">Featured partner with insider access to exclusive deals and early releases.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Local Market Expertise</h3>
            <p className="text-gray-700">Deep knowledge of North Las Vegas market trends and property values.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">⚖️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Unbiased Representation</h3>
            <p className="text-gray-700">I work for YOU, not the builder, ensuring your interests come first.</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto">📋</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Licensed Professional</h3>
            <p className="text-gray-700">Licensed REALTOR® licensed since 2008 · 35 years in Las Vegas with a proven track record of success.</p>
          </div>
        </div>
      </div>

      {/* Market Analysis Tools */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Market Analysis Tools
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏡 Get Your Home's Current Market Value
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Find out what your home is worth in today's North Las Vegas market. 
              Get an instant valuation from Dr. Jan Duffy's RealScout system.
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
              🏘️ Available Bravado Homes
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Browse current listings in the Bravado community. Get real-time updates 
              on available homes and pricing.
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

      <div className="content-section mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Home Buying Process Guide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We moved our full process walkthrough into a dedicated guide so this services page stays focused on
            how Dr. Jan Duffy supports buyers across planning, representation, and execution.
          </p>
          <a
            href="/services/home-buying-process"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Read the Step-by-Step Home Buying Process
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Home Buying Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on your North Las Vegas home purchase
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
            {email}</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Service Hours</h3>
            <p>Monday-Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: By Appointment</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-75">
            Dr. Jan Duffy is a Featured New Home Construction and Buyer Representation specialist with Century Communities. 
            Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
