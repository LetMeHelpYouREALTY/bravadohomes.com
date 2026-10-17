import RealScoutListings from '../components/realscout-listings'
import RealScoutHomeValue from '../components/realscout-home-value'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Lennar vs Century Communities Las Vegas | Builder Comparison Guide | Dr. Jan Duffy',
    description: 'Compare Lennar vs Century Communities in Las Vegas. Expert comparison of pricing, quality, locations, smart home technology, and more. Learn why Century Communities Bravado might be the better choice for your new home. Expert guidance from Dr. Jan Duffy.',
    keywords: [
      'lennar homes las vegas',
      'lennar vs century communities',
      'century communities vs lennar',
      'lennar vs century communities las vegas',
      'compare lennar century communities',
      'lennar las vegas',
      'century communities las vegas',
      'compare home builders las vegas',
      'best home builder las vegas',
      'home builder comparison las vegas',
      'lennar homes',
      'lennar homes north las vegas',
      'century communities bravado',
      'bravado homes',
      'which builder is better',
      'lennar or century communities',
      agent?.name || 'Dr. Jan Duffy',
      'new construction builders las vegas',
      'home builder comparison',
      'builder comparison guide',
      'lennar everything included',
      'century connect smart home',
      'buyer representation',
      'new construction builders',
      'north las vegas builders'
    ],
    alternates: {
      canonical: `${baseUrl}/lennar-vs-century-communities`,
    },
    openGraph: {
      title: 'Lennar vs Century Communities Las Vegas | Builder Comparison',
      description: 'Compare Lennar vs Century Communities in Las Vegas. Expert comparison of pricing, quality, locations, and smart home technology.',
      url: `${baseUrl}/lennar-vs-century-communities`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lennar vs Century Communities Las Vegas',
      description: 'Expert comparison of Lennar vs Century Communities in Las Vegas.',
    },
  }
}

export default async function LennarVsCenturyPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ EXPERT BUILDER COMPARISON GUIDE ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Lennar vs Century Communities Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            Expert Comparison: Which Home Builder is Right for You?
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Featured Century Communities Partner | Unbiased Builder Comparison
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Jan
            </a>
            <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
              🏠 View Bravado Floor Plans
            </a>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="content-section mb-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When choosing a new construction home in Las Vegas, comparing top builders like <strong>Lennar</strong> and <strong>Century Communities</strong> is essential. 
            Both are reputable national homebuilders, but they offer different approaches to home building, pricing, and community development. 
            As a Featured Century Communities Partner, I'll provide an objective comparison to help you make an informed decision.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This comparison focuses on key factors that matter most to homebuyers: <strong>pricing, quality, locations, smart home technology, 
            community amenities, and buyer representation</strong>.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Side-by-Side Comparison
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Feature</th>
                <th className="px-6 py-4 text-center font-bold">Lennar</th>
                <th className="px-6 py-4 text-center font-bold">Century Communities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">National Ranking</td>
                <td className="px-6 py-4 text-center text-gray-700">#1 or #2 Largest (73,087 closings in 2023)</td>
                <td className="px-6 py-4 text-center text-gray-700">Top 10 Homebuilder (9,568 closings in 2023)</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Years in Business</td>
                <td className="px-6 py-4 text-center text-gray-700">70+ years (Founded 1954)</td>
                <td className="px-6 py-4 text-center text-gray-700">20+ years (Established 2002)</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Smart Home Technology</td>
                <td className="px-6 py-4 text-center text-gray-700">Everything's Included® (smart features bundled, varies by community)</td>
                <td className="px-6 py-4 text-center text-blue-600 font-semibold">Century Connect® (standard in many communities)</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Las Vegas Market Share</td>
                <td className="px-6 py-4 text-center text-gray-700">18.4% (1,873 closings in 2023)</td>
                <td className="px-6 py-4 text-center text-gray-700">4.9% (499 closings in 2023)</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Pricing Approach</td>
                <td className="px-6 py-4 text-center text-gray-700">Varies by community</td>
                <td className="px-6 py-4 text-center text-gray-700">Varies by community</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Buyer Representation</td>
                <td className="px-6 py-4 text-center text-gray-700">Builder sales team</td>
                <td className="px-6 py-4 text-center text-blue-600 font-semibold">Expert buyer representation available</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Energy Efficiency</td>
                <td className="px-6 py-4 text-center text-gray-700">Energy-efficient features</td>
                <td className="px-6 py-4 text-center text-gray-700">Energy-efficient features</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Comparison Sections */}
      <div className="content-section mb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Lennar */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Lennar Homes Las Vegas
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Strengths:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Largest homebuilder in the U.S. (#1 or #2 by closings)</li>
                  <li>Extensive community portfolio (18.4% Las Vegas market share)</li>
                  <li>"Everything's Included®" approach - bundled features</li>
                  <li>70+ years of experience (founded 1954)</li>
                  <li>Multiple floor plan options across price points</li>
                  <li>Strong brand recognition and reputation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Considerations:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Smart home features included in "Everything's Included" package (varies by community)</li>
                  <li>Typically works with builder sales team (no independent buyer representation)</li>
                  <li>Pricing and availability vary by community and location</li>
                  <li>Larger builder may offer less personalized service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Century Communities */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Century Communities (Bravado)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Strengths:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li className="font-semibold">Century Connect® smart home technology standard in many communities</li>
                  <li className="font-semibold">Expert buyer representation available through Featured Partners</li>
                  <li>Top 10 national homebuilder (9,568 closings in 2023)</li>
                  <li>Premium finishes and quality construction</li>
                  <li>Gated community options (like Bravado)</li>
                  <li>20+ years of experience (established 2002)</li>
                  <li>Featured partner program for enhanced personalized service</li>
                  <li>Focus on affordability and value for first-time and move-up buyers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Bravado Advantages:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Starting at $445,000 (Century Communities Bravado, 2026-10-12) - competitive pricing</li>
                  <li>Prime North Las Vegas location</li>
                  <li>3-5 bedroom floor plans available</li>
                  <li>Near Craig Ranch Regional Park</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Comparison Analysis Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Comprehensive Builder Comparison Analysis
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          When choosing between <strong>Lennar</strong> and <strong>Century Communities</strong> for your new construction home in Las Vegas, understanding the key differences helps you make an informed decision. Both builders have strengths, but the differences in approach, technology, and buyer representation can significantly impact your home buying experience and long-term satisfaction.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Buyer Representation and Advocacy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most significant differences between <strong>Lennar</strong> and <strong>Century Communities</strong> is the availability of independent <strong>buyer representation</strong>. <strong>Century Communities</strong> offers the option to work with Featured Partners like <strong>{agent?.name || 'Dr. Jan Duffy'}</strong>, who provide expert <strong>buyer representation</strong> that protects your interests throughout the entire process.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>Lennar</strong>, you typically work directly with the builder's sales team, who represent the builder's interests. While they're helpful and informative, they don't provide independent advocacy for buyers. <strong>Century Communities</strong> Featured Partners, on the other hand, work exclusively for you, ensuring your interests are protected during negotiations, contract reviews, and throughout construction.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Home Technology Approach</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both builders offer smart home technology, but their approaches differ. <strong>Century Communities</strong> includes <strong>Century Connect®</strong> as standard equipment in many communities, including Bravado. This comprehensive system provides smart thermostats, lighting controls, security integration, and mobile app access—all included in the base price.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Lennar's</strong> "Everything's Included®" approach bundles smart home features, but the specific technology and extent of features can vary by community. While both approaches aim to provide value, <strong>Century Connect®</strong> being standard ensures consistent smart home capabilities across <strong>Century Communities</strong> properties, representing thousands of dollars in included value.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Community Size and Market Presence</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Lennar</strong> is the largest homebuilder in the U.S., with 18.4% market share in Las Vegas and 73,087 closings nationally in 2023. This size provides extensive community options and brand recognition. However, larger size can sometimes mean less personalized service and more standardized processes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Century Communities</strong> is a top 10 homebuilder with 4.9% Las Vegas market share and 9,568 national closings in 2023. While smaller, this size allows for more personalized service, especially through Featured Partners. The focus on quality over quantity means attention to detail and customer satisfaction often takes priority over volume.
          </p>
        </div>
      </div>

      {/* Key Differences */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Key Differences That Matter Most
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          These differences can significantly impact your home buying experience, long-term satisfaction, and property value. Understanding what matters most to you helps determine which builder is the better fit for your situation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Buyer Representation</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Century Communities</strong> offers expert <strong>buyer representation</strong> through Featured Partners, ensuring your interests are protected throughout the process. This independent advocacy is invaluable when negotiating contracts, addressing issues, and ensuring quality standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>Lennar</strong>, you typically work with builder sales teams who represent the builder's interests. While helpful, they don't provide the same level of independent advocacy that protects your investment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">🏠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Home Technology</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Century Connect®</strong> is standard in many <strong>Century Communities</strong>, providing consistent smart home capabilities included in the base price. This comprehensive system represents thousands of dollars in value that would be expensive upgrades with other builders.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Lennar's</strong> "Everything's Included®" bundles smart features, but the specific technology varies by community. The bundling approach is valuable, but the consistency of <strong>Century Connect®</strong> ensures predictable smart home capabilities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">📍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Community Focus</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Bravado by Century Communities</strong> offers gated community living with premium amenities in North Las Vegas. The community-focused approach creates a sense of place and belonging that enhances property values and quality of life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Both builders offer quality communities, but <strong>Century Communities</strong> emphasis on complete communities with amenities, security, and thoughtful design creates lasting value. The gated community aspect of Bravado provides security and exclusivity that's rare at this price point.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Pricing and Value Proposition</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both <strong>Lennar</strong> and <strong>Century Communities</strong> offer competitive pricing, but the value proposition differs. <strong>Century Communities Bravado</strong> starts at $445,000 (Century Communities Bravado, 2026-10-12) and includes <strong>Century Connect®</strong> smart home technology as standard, representing significant included value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Lennar's</strong> pricing varies by community and location, with "Everything's Included®" bundling features. The value depends on which features are included in the specific community you're considering. Understanding what's included versus what's an upgrade is crucial for comparing true value.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality and Construction Standards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Both builders maintain quality construction standards, but their approaches differ. <strong>Century Communities</strong> focus on quality over quantity means attention to detail and craftsmanship often takes priority. The company's reputation is built on excellence rather than just size.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Lennar's</strong> large scale operations provide efficiency and consistency, but the focus on volume can sometimes mean less customization flexibility. Both builders use quality materials and proven construction methods, but the level of personalization and attention to detail can vary.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Century Communities */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Century Communities Bravado?
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-xl mb-3">✅ Expert Buyer Representation</h4>
              <p className="opacity-90">
                When you work with a Featured Century Communities Partner like {agent?.name || 'Dr. Jan Duffy'}, 
                you get expert guidance that represents YOUR interests, not just the builder's.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">✅ Standard Smart Home Technology</h4>
              <p className="opacity-90">
                Century Connect® is included in many Century Communities homes, giving you control over security, 
                lighting, temperature, and more right from your smartphone.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">✅ Premium Quality & Finishes</h4>
              <p className="opacity-90">
                Century Communities focuses on quality construction with premium finishes and thoughtful design details 
                that make a difference in everyday living.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">✅ Gated Community Living</h4>
              <p className="opacity-90">
                Bravado offers gated community security, beautiful landscaping, and a sense of community that 
                enhances your quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="content-section mb-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Recommendation
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Both <strong>Lennar</strong> and <strong>Century Communities</strong> are reputable builders with quality homes. 
            However, if you value:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Expert buyer representation</strong> that protects your interests</li>
            <li><strong>Standard smart home technology</strong> included in your home</li>
            <li><strong>Gated community living</strong> with premium amenities</li>
            <li><strong>Personalized service</strong> from a Featured Partner</li>
            <li><strong>Competitive pricing</strong> starting at $445,000 (Century Communities Bravado, 2026-10-12)</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Then <strong>Century Communities Bravado</strong> might be the better choice for you.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Explore Century Communities Bravado?
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {agent?.name || 'Dr. Jan Duffy'}, Featured Century Communities Partner, can help you understand all your options 
          and make an informed decision about your new home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call: (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Schedule Your Consultation
          </a>
          <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
            🏠 View Bravado Floor Plans
          </a>
        </div>
      </div>

      {/* RealScout Listings */}
      <div className="content-section mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Available Bravado Homes
        </h3>
        <RealScoutListings agentEncodedId="QWdlbnQtMjI1MDUw" />
      </div>

      {/* Disclaimer */}
      <div className="content-section">
        <p className="text-sm text-gray-600 italic text-center max-w-4xl mx-auto">
          This comparison is provided for informational purposes. Builder features, pricing, and availability are subject to change. 
          We recommend visiting both builders' communities and speaking with representatives to make the best decision for your needs. 
          As a Featured Century Communities Partner, we specialize in Century Communities properties but are committed to helping you 
          make an informed choice.
        </p>
      </div>
    </section>
  )
}

