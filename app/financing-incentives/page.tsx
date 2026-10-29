import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financing & Incentives | Bravado Homes | Dr. Jan Duffy',
  description: 'Explore exclusive financing options and builder incentives for Bravado new construction homes in North Las Vegas. Expert guidance from Dr. Jan Duffy, Century Communities Featured Partner.',
  keywords: [
    'financing incentives',
    'financing incentives North Las Vegas',
    'new home financing',
    'new home financing options',
    'builder incentives',
    'Century Communities incentives',
    'Century Communities financing',
    'Bravado financing',
    'Bravado incentives',
    'new construction financing',
    'home financing options',
    'first-time homebuyer financing',
    'VA loans',
    'FHA loans',
    'conventional loans',
    'jumbo loans',
    'rate buydowns',
    'closing cost credits',
    'upgrade credits',
    'Dr. Jan Duffy',
    'North Las Vegas financing',
    '89031 financing',
    'new home pre-approval',
    'builder financing programs'
  ],
  openGraph: {
    title: 'Financing & Incentives | Bravado Homes | Dr. Jan Duffy',
    description: 'Explore exclusive financing options and builder incentives for Bravado new construction homes in North Las Vegas.',
    url: 'https://www.bravadohomes.com/financing-incentives',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/financing-incentives',
  },
}

export default async function FinancingIncentivesPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Financing & Incentives
          </h1>
          <p className="text-2xl mb-4">
            Exclusive Financing Options & Builder Incentives
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
              💰 Get Pre-Approved
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* Financing Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Financing Your Bravado Home
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Jan Duffy</strong> works with Century Communities and preferred lenders to provide you with the best financing options for your new Bravado home. As a Featured New Home Construction & Buyer Representation Specialist, she ensures you have access to exclusive rates and incentives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From <strong>conventional loans</strong> and <strong>FHA financing</strong> to <strong>VA loans</strong> and <strong>jumbo mortgages</strong>, Dr. Duffy can connect you with lenders who specialize in new construction financing and understand the unique needs of Century Communities buyers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located at <strong>5060 Wind Springs Street, North Las Vegas, NV 89031</strong>, Bravado offers competitive pricing and financing options that make luxury living accessible to qualified buyers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Financing Options</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Conventional Loans</h4>
                <p className="text-gray-700">Traditional financing with competitive rates and terms</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">FHA Loans</h4>
                <p className="text-gray-700">Low down payment options for qualified buyers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">VA Loans</h4>
                <p className="text-gray-700">Special financing for veterans and active military</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Jumbo Loans</h4>
                <p className="text-gray-700">Higher loan amounts for luxury properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Builder Incentives Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Exclusive Builder Incentives
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy's VIP Century Communities partnership provides access to exclusive incentives and promotional offers
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Closing Cost Credits</h3>
              <p className="opacity-90">Reduced closing costs and fees for qualified buyers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏠</div>
              <h3 className="text-xl font-bold mb-3">Upgrade Credits</h3>
              <p className="opacity-90">Free upgrades and premium finishes included</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🎯</div>
              <h3 className="text-xl font-bold mb-3">Rate Buydowns</h3>
              <p className="opacity-90">Temporary or permanent interest rate reductions</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Limited Time Offers</h3>
              <p className="opacity-90">Seasonal promotions and special incentives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Programs Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Available Financing Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">First-Time Buyer Programs</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Down payment assistance programs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Low down payment options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Educational resources and guidance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Simplified application process
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Investment Property Financing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Investment property loan programs
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Rental income consideration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Portfolio loan options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Cash-out refinancing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comprehensive Financing Options Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Financing Options for Bravado Homes
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Understanding your <strong>financing options</strong> is crucial when purchasing a new construction home at Bravado. <strong>Dr. Jan Duffy</strong> works with <strong>Century Communities</strong> and preferred lenders to provide you with access to the best <strong>financing programs</strong> and <strong>builder incentives</strong> available. Her expertise ensures you understand all options and choose the financing that best fits your situation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Conventional Financing Options</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Conventional loans</strong> are the most common financing option for <strong>new construction homes</strong> at Bravado. These loans typically offer competitive interest rates and flexible terms for qualified buyers. Conventional financing is available for buyers with good credit scores and stable income, providing access to <strong>new construction homes</strong> from $445,000 (Century Communities Bravado, 2026-10-12).
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Dr. Jan Duffy</strong> can connect you with lenders who specialize in <strong>new construction financing</strong> and understand the unique requirements of buying a home that's being built. These lenders work with <strong>Century Communities</strong> to provide streamlined financing processes that align with construction timelines. Conventional financing typically requires a down payment of 10-20%, though some programs offer lower down payment options for qualified buyers.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">FHA and VA Financing Programs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>FHA loans</strong> provide low down payment options for qualified buyers, making <strong>new construction homes</strong> more accessible. These government-backed loans typically require a down payment of 3.5% for qualified buyers, making them ideal for first-time homebuyers or those with limited down payment funds. <strong>FHA financing</strong> is available for Bravado homes that meet FHA requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>VA loans</strong> offer exceptional benefits for veterans and active military personnel, including zero down payment options and competitive interest rates. These loans are available for qualified veterans purchasing <strong>new construction homes</strong> at Bravado. <strong>Dr. Jan Duffy</strong> can help you understand VA loan benefits and connect you with VA-approved lenders who specialize in <strong>new construction financing</strong>.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Financing Matters in New Construction</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>New construction financing</strong> differs from financing existing homes in several important ways. The financing process must align with construction timelines, and lenders must understand the unique aspects of builder contracts and construction progress. <strong>Dr. Jan Duffy</strong> works with lenders who specialize in <strong>new construction financing</strong>, ensuring the process is smooth and aligned with your construction timeline.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The combination of <strong>builder incentives</strong> and appropriate <strong>financing options</strong> can significantly reduce your overall costs and make your new home more affordable. <strong>Dr. Jan's</strong> expertise in both financing and <strong>builder incentives</strong> ensures you receive comprehensive guidance that maximizes your purchasing power and minimizes your costs. This integrated approach to financing and incentives is one of the key benefits of working with an experienced <strong>new construction specialist</strong>.
          </p>
        </div>
      </div>

      {/* Pre-Approval Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Getting Pre-Approved for Your Bravado Home
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Getting <strong>pre-approved</strong> is the first step in purchasing your new construction home at Bravado. <strong>Pre-approval</strong> gives you a clear understanding of your purchasing power, helps you make informed decisions, and strengthens your position when working with builders. <strong>Dr. Jan Duffy</strong> can guide you through the <strong>pre-approval process</strong> and connect you with lenders who specialize in <strong>new construction financing</strong>.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Documentation</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Gathering the necessary documentation is the first step in the <strong>pre-approval process</strong>.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Income verification
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Bank statements
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Credit report
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Employment history
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Credit Review</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Lenders review your credit profile to determine your <strong>financing eligibility</strong> and terms.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Credit score analysis
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Debt-to-income ratio
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Payment history review
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Credit improvement tips
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Pre-Approval</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Receive your <strong>pre-approval letter</strong> and start shopping with confidence.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Loan amount determination
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Interest rate lock
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Pre-approval letter
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Shopping power
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefits of Pre-Approval</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Pre-approval</strong> provides numerous benefits when purchasing a <strong>new construction home</strong>. It gives you a clear understanding of your purchasing power, helps you focus your search on homes within your budget, and demonstrates to builders that you're a serious, qualified buyer. <strong>Pre-approval</strong> also allows you to lock in interest rates when market conditions are favorable, protecting you from rate increases during the construction period.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr. Jan Duffy</strong> can guide you through the <strong>pre-approval process</strong> and connect you with lenders who understand the unique aspects of <strong>new construction financing</strong>. Her expertise ensures you receive the best terms and rates available, while her <strong>Century Communities partnership</strong> provides access to preferred lenders who specialize in builder financing. This comprehensive approach to <strong>pre-approval</strong> and financing ensures you're well-prepared to purchase your new Bravado home.
          </p>
        </div>
      </div>

      {/* Available Homes Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available Homes with Financing Options
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current homes available at Bravado with various financing options. 
            Get expert guidance on financing and incentives from Dr. Jan Duffy.
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

      {/* Dr. Jan Duffy Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Dr. Jan Duffy for Financing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance on financing options and builder incentives with Dr. Jan Duffy's VIP Century Communities partnership
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Financing Expert</h3>
              <p className="opacity-90">Specialized knowledge of new construction financing options</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">VIP Partnership</h3>
              <p className="opacity-90">Exclusive access to Century Communities incentives and offers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💎</div>
              <h3 className="text-xl font-bold mb-3">Buyer Representation</h3>
              <p className="opacity-90">Your advocate for securing the best financing terms</p>
            </div>
          </div>
        </div>
      </div>

      {/* RealScout Tools Section */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Advanced Property Tools
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Use Dr. Jan Duffy's advanced RealScout tools for comprehensive market analysis and property search
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Property Valuation</h3>
              <p className="text-gray-700 mb-4">
                Get instant property valuations to understand your financing needs
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for properties within your financing range
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Secure Your Financing?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on financing options and builder incentives
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW<br />
            <span className="text-2xl">(702) 500-1955</span>
          </a>
          <a href="mailto:${email}" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            EMAIL<br />
            {email}
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Bravado Sales Office</h3>
            <p>Dr. Jan Duffy - Featured Partner<br />
            Primary: (702) 500-1955<br />
            Urgent: (702) 500-1955</p>
          </div>
          
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-3">Dr. Jan Duffy</h3>
            <p>Las Vegas Real Estate Expert<br />
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
