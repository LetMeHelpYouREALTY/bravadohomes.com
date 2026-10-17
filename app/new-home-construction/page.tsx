import RealScoutListings from '../components/realscout-listings'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Home Construction | North Las Vegas | Dr. Jan Duffy',
  description: 'Expert new home construction guidance in North Las Vegas. Dr. Jan Duffy provides specialized services for Century Communities homes including Bravado.',
  keywords: [
    'new home construction',
    'new home construction North Las Vegas',
    'new construction homes',
    'new construction homes North Las Vegas',
    'new home construction Las Vegas',
    'Century Communities new construction',
    'Bravado new construction',
    'new home construction expert',
    'new home construction specialist',
    'Dr. Jan Duffy',
    'new construction guidance',
    'new home building',
    'custom home construction',
    'new construction process',
    'builder homes North Las Vegas',
    'new construction homes Las Vegas',
    '89031 new construction',
    'North Las Vegas new homes',
    'new construction specialist',
    'home building process',
    'new home construction services'
  ],
  openGraph: {
    title: 'New Home Construction | North Las Vegas | Dr. Jan Duffy',
    description: 'Expert new home construction guidance in North Las Vegas. Dr. Jan Duffy provides specialized services for Century Communities homes.',
    url: 'https://www.bravadohomes.com/new-home-construction',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/new-home-construction',
  },
}

export default async function NewHomeConstructionPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            New Home Construction in North Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            Expert Guidance from Dr. Jan Duffy | Century Communities Partnership
          </p>
          <p className="text-xl mb-8 opacity-90">
            Featured New Home Construction & Buyer Representation Specialist
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Jan
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            5060 Wind Springs Street, North Las Vegas, NV 89031
          </p>
        </div>
      </div>

      {/* New Home Construction Overview */}
      <div className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              New Home Construction Expertise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Jan Duffy</strong> specializes in new home construction and buyer representation, bringing her VIP partnership with <strong>Century Communities</strong> to provide you with exclusive access to premier communities like Bravado in North Las Vegas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, Dr. Duffy offers comprehensive guidance throughout the entire new home construction process. From initial consultation and lot selection to final walkthrough and closing, she ensures your interests are protected every step of the way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike working directly with builder sales agents, Dr. Duffy represents your interests exclusively, providing unbiased guidance, expert negotiation, and insider access to Century Communities' latest developments and exclusive incentives.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Why Choose New Construction?</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Modern Features & Technology</h4>
                <p className="text-gray-700">Latest smart home technology, energy-efficient systems, and contemporary design</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Customization Options</h4>
                <p className="text-gray-700">Personalize your home with finishes, fixtures, and layout options</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Warranty Protection</h4>
                <p className="text-gray-700">Comprehensive builder warranty and new home guarantees</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Energy Efficiency</h4>
                <p className="text-gray-700">Lower utility bills with modern insulation, HVAC, and appliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Century Communities Partnership */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            VIP Century Communities Partnership Benefits
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy's exclusive partnership provides unique advantages for new home buyers
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Priority Access</h3>
              <p className="opacity-90">Early access to new releases and priority lot selection</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Exclusive Incentives</h3>
              <p className="opacity-90">Access to builder incentives and promotional offers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Insider Knowledge</h3>
              <p className="opacity-90">Deep understanding of construction processes and timelines</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🤝</div>
              <h3 className="text-xl font-bold mb-3">Builder Relationships</h3>
              <p className="opacity-90">Established relationships for smoother transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Construction Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          New Home Construction Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Initial Consultation & Planning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Needs assessment and budget planning
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Community and lot selection guidance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Floor plan selection and customization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Financing options and pre-approval
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Construction & Completion</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Construction timeline monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Quality control and inspections
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Final walkthrough coordination
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Closing process and documentation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Available New Construction Homes */}
      <div className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            🏠 Available New Construction Homes
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
            Browse current new construction homes available in Bravado and throughout North Las Vegas. 
            Get expert guidance on pricing, availability, and customization options.
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

      {/* Comprehensive New Construction Process Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive New Home Construction Process Guide
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Understanding the <strong>new home construction process</strong> helps you know what to expect when building your home with <strong>Century Communities</strong> at Bravado. As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, <strong>Dr. Jan Duffy</strong> guides you through each stage, ensuring you're informed, protected, and confident in your decisions throughout your <strong>new home construction</strong> journey.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Initial Planning and Design Phase</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>new home construction process</strong> begins with comprehensive planning and design. During this phase, <strong>Dr. Jan Duffy</strong> helps you understand available floor plans, lot options, and customization possibilities. Her expertise ensures you make informed decisions about your home's design, location, and features. This planning phase is crucial for setting expectations and establishing timelines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The design phase includes selecting your floor plan, choosing your lot, and making initial customization decisions. <strong>Dr. Jan</strong> provides guidance on which customizations add value and which are primarily for personal enjoyment. Her <strong>Century Communities partnership</strong> provides insider knowledge of available options, pricing, and construction timelines, helping you make smart decisions that align with your budget and preferences.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Construction Timeline and Monitoring</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once construction begins, <strong>Dr. Jan Duffy</strong> remains your advocate, monitoring construction progress and ensuring quality standards are met. Her <strong>new construction expertise</strong> allows her to coordinate inspections, address concerns, and keep you informed about construction milestones. This ongoing monitoring ensures your home is built to quality standards and meets all your expectations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The construction timeline typically ranges from 4-6 months depending on the floor plan and customization options selected. Throughout this period, <strong>Dr. Jan</strong> provides regular updates, coordinates walkthroughs, and ensures any issues are addressed promptly. Her <strong>buyer representation</strong> services protect your interests throughout construction, ensuring quality standards are maintained and timelines are met.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Why New Construction is Different</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>New home construction</strong> differs significantly from purchasing existing homes, requiring specialized knowledge of construction processes, builder practices, and quality standards. The process involves making decisions about design, materials, and features before construction begins, which requires expert guidance to ensure you make smart choices that enhance both your immediate enjoyment and long-term property value.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr. Jan Duffy's</strong> specialized <strong>new construction expertise</strong> provides the knowledge needed to navigate these unique challenges successfully. Her partnership with <strong>Century Communities</strong> gives her insider knowledge of construction timelines, quality standards, and available options that benefit her clients. This specialized expertise is invaluable for homebuyers who want to make informed decisions throughout the building process.
          </p>
        </div>
      </div>

      {/* Benefits of New Construction Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Choose New Home Construction Over Existing Homes?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Choosing <strong>new home construction</strong> offers numerous advantages over purchasing existing homes. From modern features and energy efficiency to customization options and warranty protection, <strong>new construction homes</strong> provide benefits that make them an attractive choice for many homebuyers. Understanding these advantages helps you make an informed decision about whether <strong>new construction</strong> is right for your situation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Modern Features and Technology</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>New construction homes</strong> at Bravado include the latest features and technology, including <strong>Century Connect® smart home technology</strong> as standard equipment. This modern technology provides convenience, energy savings, and security features that enhance your daily living experience. Unlike older homes that may require expensive upgrades, new construction provides these modern features from day one.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The energy-efficient design, modern HVAC systems, quality insulation, and smart home technology all contribute to lower utility costs and enhanced comfort. These modern features are built into the home's design, ensuring optimal performance and efficiency. The combination of modern features and technology creates a living experience that's both convenient and cost-effective.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Customization and Personalization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most significant advantages of <strong>new home construction</strong> is the ability to customize your home to match your preferences and lifestyle. From selecting finishes and fixtures to choosing floor plans and layout options, <strong>new construction</strong> allows you to create a home that truly fits your needs. <strong>Dr. Jan Duffy</strong> helps you understand customization options and make smart choices that enhance both enjoyment and value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The customization process allows you to personalize your home while staying within your budget. <strong>Dr. Jan's</strong> expertise helps you understand which customizations add value and which are primarily for personal enjoyment, ensuring you make smart investment decisions. This personalized approach ensures your new home reflects your style and preferences while maintaining good resale value.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Warranty Protection and Quality Assurance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>New construction homes</strong> come with comprehensive builder warranties that protect your investment. These warranties cover structural defects, major systems, and workmanship issues, providing peace of mind that older homes cannot offer. The warranty protection ensures that any issues that arise are addressed promptly and professionally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The quality construction from <strong>Century Communities</strong> ensures that your new home is built to the highest standards. Quality materials, skilled craftsmanship, and attention to detail create a home that's built to last. The combination of warranty protection and quality construction provides confidence in your investment and ensures your home will provide years of enjoyment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Energy Efficiency and Cost Savings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>New construction homes</strong> are built with energy efficiency in mind, featuring high-efficiency HVAC systems, quality insulation, energy-efficient windows, and smart home technology that optimizes energy usage. These features significantly reduce monthly utility costs compared to older homes, providing ongoing savings throughout your ownership.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Century Connect® smart home technology</strong> included in every Bravado home helps optimize energy usage through intelligent scheduling and controls. Smart thermostats learn your preferences and adjust automatically to minimize energy waste, while smart lighting systems ensure lights aren't left on unnecessarily. These energy-saving features provide both immediate and long-term value, making new construction an economically smart choice.
            </p>
          </div>
        </div>
      </div>

      {/* Smart Home Technology Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Century Connect® Smart Home Technology - Included Standard
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Every <strong>new construction home</strong> at Bravado includes the <strong>Century Connect® smart home technology</strong> package as standard equipment—not an expensive upgrade. This comprehensive system provides modern convenience, energy savings, and security features that enhance your daily living experience. Unlike other builders where similar technology costs thousands in upgrades, <strong>Century Communities</strong> includes it in every new home.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Smart Home Control</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Control your entire home from your smartphone or tablet, whether you're at home or away.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Smart thermostat control
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Lighting automation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Door lock management
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Security system integration
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🔋</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Energy Efficiency</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Reduce your environmental impact and lower monthly utility costs with smart energy management.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy monitoring systems
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Smart appliance controls
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Solar-ready construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                LED lighting throughout
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Home Automation</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Automate your home's systems for convenience and efficiency with modern smart home features.
            </p>
            <ul className="text-gray-700 space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Voice assistant integration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Remote monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Automated scheduling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Mobile app control
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Value of Included Smart Home Technology</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Century Connect® smart home technology</strong> included in every Bravado new construction home represents thousands of dollars in value that would be expensive upgrades in other communities. This comprehensive system includes smart thermostats, lighting controls, security integration, and mobile app access—all standard equipment. The energy-saving features help reduce monthly utility costs while providing convenience and modern living capabilities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike other builders where similar technology costs $5,000-$10,000 as an upgrade, <strong>Century Communities</strong> includes <strong>Century Connect®</strong> in every new construction home. This provides immediate value and long-term convenience, making Bravado an exceptional value in the North Las Vegas new construction market. This included technology is one of the key advantages of choosing <strong>new home construction</strong> at Bravado.
          </p>
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
                Get instant property valuations for new construction homes
              </p>
              <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
              <p className="text-gray-700 mb-4">
                Search for new construction homes with advanced filters
              </p>
              <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your New Home?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on your new home construction project
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
