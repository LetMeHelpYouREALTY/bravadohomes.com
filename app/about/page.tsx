import RealScoutHomeValue from '../components/realscout-home-value'
import RealScoutAdvancedSearch from '../components/realscout-advanced-search'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy - Century Communities Expert | Bravado Homes',
  description: 'Meet Dr. Jan Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities. Expert guidance for Bravado homes in North Las Vegas.',
  keywords: [
    'Dr. Jan Duffy',
    'Dr. Jan Duffy real estate agent',
    'Dr. Jan Duffy Century Communities',
    'Century Communities expert',
    'Century Communities featured partner',
    'new home construction specialist',
    'new home construction expert',
    'buyer representation specialist',
    'buyer representation expert',
    'North Las Vegas real estate',
    'North Las Vegas real estate agent',
    'Nevada real estate license',
    'Bravado homes expert',
    'Bravado homes specialist',
    '89031 real estate agent',
    'Las Vegas real estate expert',
    'new construction specialist North Las Vegas',
    'buyer representation North Las Vegas',
    'Century Communities partner',
    'featured Century Communities partner',
    'VIP Century Communities partner',
    'real estate agent North Las Vegas',
    'home buying expert',
    'new home construction guidance'
  ],
  openGraph: {
    title: 'About Dr. Jan Duffy - Century Communities Expert',
    description: 'Meet Dr. Jan Duffy, Featured New Home Construction & Buyer Representation Specialist for Century Communities. Expert guidance for Bravado homes.',
    type: 'profile',
    images: [
      {
        url: '/images/bravado/about/dr-janet-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Century Communities Expert',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/about',
  },
}

export default async function AboutPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ VIP CENTURY COMMUNITIES PARTNER ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            About Dr. Jan Duffy
          </h1>
          <p className="text-2xl mb-4">
            Featured New Home Construction & Buyer Representation Specialist
          </p>
          <p className="text-xl mb-8 opacity-90">
            Top 1% Las Vegas REALTOR® | Century Communities Partnership | Las Vegas Real Estate Expert
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call NOW: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Jan
            </a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 Schedule Consultation
            </a>
          </div>
          <p className="text-lg">
            {email}
          </p>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Work With Dr. Jan Duffy at Bravado</h2>
        <p className="text-lg mb-4">
          Get VIP access to Bravado floor plans and North Las Vegas new construction with Dr. Jan Duffy&apos;s buyer representation. 
          Don't miss your chance to own a luxury home in North Las Vegas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            📞 SECURE YOUR HOME: (702) 500-1955
          </a>
          <a href="/floor-plans" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors">
            👀 VIEW FLOOR PLANS
          </a>
        </div>
      </div>

      {/* About Dr. Jan Duffy Section */}
      <div className="content-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Meet Dr. Jan Duffy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dr. Jan Duffy</strong> is a distinguished real estate professional specializing in new home construction and buyer representation in the Las Vegas area. With her <strong>VIP partnership with Century Communities</strong>, she provides unparalleled expertise and exclusive access to premier communities like Bravado in North Las Vegas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a <strong>Featured New Home Construction & Buyer Representation Specialist</strong>, Dr. Duffy brings a unique perspective to real estate, combining her professional background with deep market knowledge and builder relationships. Her clients benefit from her insider access to Century Communities' latest developments, priority lot selection, and exclusive incentives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Duffy's approach is centered on being your <strong>trusted advisor</strong>, not just another sales agent. She represents your interests throughout the entire new home construction process, from initial consultation through closing and beyond.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Professional Credentials</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Specialization</h4>
                <p className="text-gray-700">New Home Construction & Buyer Representation</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Century Communities Partnership</h4>
                <p className="text-gray-700">Featured Partner with VIP Access</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Market Focus</h4>
                <p className="text-gray-700">North Las Vegas & Greater Las Vegas Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E-E-A-T: Experience Timeline */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          In Real Estate Since 1983
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Experience Timeline</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900">In Real Estate Since 1983</h4>
                <p className="text-gray-700">
                  Dr. Jan Duffy has been in real estate since 1983, witnessing 
                  and adapting to market cycles, neighborhood development, and changing buyer needs. This 
                  extensive experience provides unparalleled market knowledge and client service expertise.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-gray-900">Clinical Psychology Background</h4>
                <p className="text-gray-700">
                  Dr. Jan Duffy's clinical psychology background provides unique insights into buyer behavior, 
                  life transitions, and the emotional aspects of home buying. This expertise enhances her ability 
                  to understand client needs, especially during major life changes like retirement, first-time 
                  buying, or divorce situations.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-bold text-gray-900">Century Communities Partnership History</h4>
                <p className="text-gray-700">
                  As a Featured Century Communities Partner, Dr. Jan Duffy has built a long-standing relationship 
                  with one of America's top 10 homebuilders. This partnership provides clients with exclusive access, 
                  priority lot selection, and insider knowledge of Century Communities' processes and quality standards.
                </p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-bold text-gray-900">Expertise Across Buyer Types</h4>
                <p className="text-gray-700">
                  Dr. Jan Duffy specializes in helping diverse buyer types including first-time buyers, 
                  55+ active adult community buyers, divorce situations, and real estate investors. Her 
                  experience across these different scenarios provides comprehensive expertise for any buyer situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* E-E-A-T: Authoritativeness & Trustworthiness */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Authoritativeness & Trustworthiness
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Authoritativeness</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Featured Century Communities Partner recognition</li>
              <li>In real estate since 1983</li>
              <li>Specialized expertise in new construction and buyer representation</li>
              <li>Published market research and case studies</li>
              <li>Recognition within the Las Vegas real estate community</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Trustworthiness</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Licensed Nevada REALTOR® - verified and active</li>
              <li>Independent buyer representation ensuring client interests are protected</li>
              <li>Transparent decision-making process (see /transparency)</li>
              <li>Client-focused approach prioritizing buyer success over sales</li>
              <li>Ongoing support beyond closing demonstrating long-term commitment</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Dr. Jan Duffy's Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">New Home Construction</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Century Communities VIP Partnership</li>
              <li>• Priority lot selection access</li>
              <li>• Construction timeline expertise</li>
              <li>• Builder negotiation experience</li>
              <li>• Quality control and inspections</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Buyer Representation</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• Independent buyer advocacy</li>
              <li>• Market analysis and pricing</li>
              <li>• Contract negotiation</li>
              <li>• Inspection coordination</li>
              <li>• Closing process guidance</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center card-hover">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Local Market Knowledge</h3>
            <ul className="text-gray-700 space-y-2 text-left">
              <li>• North Las Vegas expertise</li>
              <li>• Bravado community specialist</li>
              <li>• Market trends and analysis</li>
              <li>• Neighborhood insights</li>
              <li>• Investment opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Century Communities Partnership Section */}
      <div className="mb-16">
        <div className="vip-partnership bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">
            VIP Century Communities Partnership
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dr. Jan Duffy's exclusive partnership with Century Communities provides unique advantages for her clients
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto">🚀</div>
              <h3 className="text-xl font-bold mb-3">Priority Access</h3>
              <p className="opacity-90">Early access to new releases and priority lot selection in premier communities</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">💰</div>
              <h3 className="text-xl font-bold mb-3">Exclusive Incentives</h3>
              <p className="opacity-90">Access to builder incentives and promotional offers not available to the general public</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto">🏆</div>
              <h3 className="text-xl font-bold mb-3">Insider Knowledge</h3>
              <p className="opacity-90">Deep understanding of Century Communities' processes, timelines, and quality standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Benefits Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Work With Dr. Jan Duffy?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Your Trusted Advisor</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Independent representation - not the builder's sales agent
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Unbiased guidance and honest market insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Protection of your interests throughout the process
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Professional negotiation on your behalf
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Service</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Specialized knowledge in new construction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Century Communities partnership benefits
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Local market expertise and insights
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Ongoing support beyond closing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RealScout Tools Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          🏠 Advanced Property Tools
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
          Dr. Jan Duffy provides access to <strong>advanced RealScout technology</strong> for comprehensive market analysis and property search
        </p>
          
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Property Valuation</h3>
            <p className="text-gray-700 mb-4">
              Get instant property valuations with Dr. Jan Duffy's RealScout system
            </p>
            <RealScoutHomeValue agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Search</h3>
            <p className="text-gray-700 mb-4">
              Use powerful search tools to find your perfect home
            </p>
            <RealScoutAdvancedSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </div>

      {/* Professional Background and Approach Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Professional Background and Approach
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Dr. Jan Duffy brings a unique combination of professional expertise, market knowledge, and builder 
          relationships to every client interaction. Her approach is based on transparency, education, and 
          genuine commitment to client success rather than simply making a sale.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Education-Focused Approach</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Duffy believes that informed clients make better decisions. She takes time to educate her 
              clients about the new construction process, market conditions, and what to expect at each stage. 
              This educational approach ensures clients understand their options, the implications of their 
              choices, and feel confident in their decisions throughout the process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rather than rushing clients into decisions, Dr. Duffy provides comprehensive information and 
              guidance, allowing clients to make choices that align with their needs, preferences, and 
              financial situation. This patient, educational approach results in higher client satisfaction 
              and better long-term outcomes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Builder Relationship Expertise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Duffy's VIP partnership with Century Communities provides clients with advantages that 
              aren't available when working directly with builder sales teams. Her relationship with Century 
              Communities allows for early access to new phases, priority lot selection, and insider knowledge 
              of construction timelines and processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This relationship doesn't compromise her commitment to representing client interests. Instead, 
              it enhances her ability to advocate for clients, negotiate favorable terms, and ensure quality 
              standards are met. The combination of builder relationship and client advocacy creates the best 
              possible experience for homebuyers.
            </p>
          </div>
        </div>
      </div>

      {/* Client Success Stories Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Client Success and Satisfaction
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Dr. Jan Duffy's commitment to client success is reflected in the satisfaction of her clients and 
          the successful outcomes they achieve. Her approach combines expert guidance, personalized service, 
          and genuine care for each client's unique situation and goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Personalized Service</h3>
            <p className="text-gray-700 leading-relaxed">
              Every client receives personalized attention and service tailored to their specific needs, 
              timeline, and preferences. Dr. Duffy takes time to understand each client's situation, goals, 
              and concerns, ensuring the guidance and recommendations are relevant and helpful.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Duffy's clients consistently achieve successful outcomes, whether that's finding the perfect 
              floor plan, securing favorable pricing, or navigating the construction process smoothly. Her 
              expertise and advocacy ensure clients get the best possible results.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Ongoing Support</h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Duffy's commitment to clients extends beyond closing. She remains available to answer 
              questions, provide referrals, and offer ongoing support as clients settle into their new homes. 
              This long-term relationship approach demonstrates genuine care for client success.
            </p>
          </div>
        </div>
      </div>

      {/* What Makes Dr. Jan Different Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          What Makes Dr. Jan Duffy Different
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          In a market where many real estate agents offer similar services, Dr. Jan Duffy stands out for 
          several key reasons. Her combination of specialization, builder relationships, and client-focused 
          approach creates a unique value proposition for homebuyers.
        </p>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Specialization in New Construction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlike many real estate agents who handle all types of transactions, Dr. Duffy specializes 
              specifically in new home construction and buyer representation. This specialization means she 
              has deep knowledge of the construction process, builder practices, quality standards, and what 
              to expect at each stage. Her specialized expertise ensures clients receive guidance from someone 
              who truly understands the nuances of new construction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This specialization also means Dr. Duffy stays current on new construction trends, builder 
              offerings, and market conditions specific to new homes. Clients benefit from this focused 
              expertise rather than generic real estate advice that may not apply to new construction situations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Independent Buyer Representation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When working with builder sales teams directly, buyers often don't realize that the sales agent 
              represents the builder's interests, not theirs. Dr. Duffy provides independent buyer representation, 
              meaning she advocates solely for the buyer's interests. This independent representation ensures 
              clients receive honest advice, fair negotiations, and protection throughout the process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This doesn't mean adversarial relationships with builders—Dr. Duffy maintains excellent relationships 
              with Century Communities while still advocating for client interests. The combination of builder 
              relationship and independent representation creates the best possible outcome for homebuyers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Market Knowledge</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Duffy's deep knowledge of the Las Vegas real estate market, particularly North Las Vegas and 
              new construction communities, provides clients with valuable insights. She understands market 
              trends, pricing patterns, and what represents good value in the current market. This market 
              knowledge helps clients make informed decisions and avoid overpaying or making poor choices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her market expertise also allows her to help clients understand how their Bravado home purchase 
              compares to other options, what to expect in terms of appreciation potential, and how the 
              investment fits into the broader Las Vegas real estate market. This comprehensive market knowledge 
              is invaluable for making informed real estate decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Work With Dr. Jan Duffy?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Contact Dr. Jan Duffy today for expert guidance on your new home construction or real estate needs
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
