import { BlogPosts } from 'app/components/posts'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: 'Real Estate Blog | Bravado Homes Las Vegas | Dr. Jan Duffy',
    description: 'Real estate blog featuring expert insights on new construction homes, North Las Vegas real estate market, home buying tips, and Century Communities updates. Expert guidance from Dr. Jan Duffy, Featured Century Communities Partner.',
    keywords: [
      'real estate blog',
      'Las Vegas real estate blog',
      'North Las Vegas real estate blog',
      'new construction blog',
      'home buying blog',
      'real estate tips',
      'home buying tips',
      'Bravado homes blog',
      'Century Communities blog',
      agent?.name || 'Dr. Jan Duffy',
      'Las Vegas real estate news',
      'North Las Vegas real estate',
      'new construction tips',
      'home buying guide',
      'real estate market updates',
      'Las Vegas housing market',
      'North Las Vegas housing market',
      'new home construction blog',
      'real estate advice',
      'home buying advice'
    ],
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
    openGraph: {
      title: 'Real Estate Blog | Bravado Homes Las Vegas | Dr. Jan Duffy',
      description: 'Real estate blog featuring expert insights on new construction homes, North Las Vegas real estate market, and home buying tips.',
      url: `${baseUrl}/blog`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Real Estate Blog | Bravado Homes Las Vegas',
      description: 'Expert insights on new construction homes, North Las Vegas real estate market, and home buying tips.',
    },
  }
}

export default async function BlogPage() {
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
            ⭐ EXPERT REAL ESTATE INSIGHTS ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Real Estate Blog - Bravado Homes Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            Expert Insights on New Construction, Home Buying, and North Las Vegas Real Estate
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Featured Century Communities Partner | Real Estate Expert
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
              📧 Email Dr. Jan
            </a>
          </div>
        </div>
      </div>

      {/* About the Blog Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Welcome to Our Real Estate Blog
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Stay informed about the latest trends, tips, and insights in the <strong>North Las Vegas real estate market</strong>. Our blog features expert guidance from <strong>{agent?.name || 'Dr. Jan Duffy'}</strong>, a Featured Century Communities Partner, covering everything from <strong>new construction home buying</strong> to <strong>market analysis</strong> and <strong>community insights</strong>. Whether you're a first-time homebuyer, looking to upgrade, or interested in investment opportunities, our blog provides valuable information to guide your real estate decisions.
        </p>
      </div>

      {/* Blog Categories Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Blog Categories & Topics
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Our blog covers a wide range of topics to help you navigate the <strong>Las Vegas real estate market</strong> with confidence. From understanding <strong>new construction processes</strong> to learning about <strong>North Las Vegas neighborhoods</strong>, we provide comprehensive information to support your home buying journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">🏗️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">New Construction Insights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Learn about the <strong>new construction home buying process</strong>, from initial consultation to closing. Our blog covers topics like choosing the right builder, understanding floor plans, customization options, and what to expect during construction. Get expert insights on working with Century Communities and understanding the value of featured partnerships.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also cover <strong>smart home technology</strong>, <strong>energy-efficient features</strong>, and <strong>modern design trends</strong> that make new construction homes appealing. Understanding these aspects helps you make informed decisions and maximize the value of your new home investment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Market Analysis & Trends</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stay updated on the latest <strong>North Las Vegas real estate market trends</strong>, property values, and market conditions. Our blog provides regular updates on market activity, pricing trends, and investment opportunities in the Las Vegas area. Understanding market dynamics helps you time your purchase and make informed investment decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We analyze <strong>neighborhood trends</strong>, <strong>community development</strong>, and <strong>property appreciation patterns</strong> to help you understand where the market is heading. This information is invaluable whether you're buying your first home or making an investment property purchase.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Home Buying Tips & Advice</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Essential <strong>home buying tips</strong> and <strong>advice</strong> to help you navigate the process successfully. From getting pre-approved for financing to understanding contracts and negotiations, our blog provides practical guidance every step of the way. Learn about <strong>buyer representation</strong>, <strong>inspection processes</strong>, and <strong>closing procedures</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also cover topics like <strong>first-time homebuyer programs</strong>, <strong>financing options</strong>, and <strong>builder incentives</strong> that can save you money. Understanding these opportunities helps you maximize your buying power and secure the best possible deal on your new home.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">🏘️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Community & Neighborhood Guides</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comprehensive guides to <strong>North Las Vegas neighborhoods</strong> and communities, including detailed information about schools, amenities, transportation, and lifestyle factors. Learn about different areas and what makes each unique, helping you find the perfect neighborhood for your lifestyle and budget.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our community guides cover <strong>Bravado Community</strong>, <strong>Craig Ranch Regional Park</strong> area, and other <strong>North Las Vegas neighborhoods</strong>. Understanding these areas helps you make informed decisions about where to live and invest in property.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="text-4xl mb-4 text-center">🎓</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Educational Resources</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Educational articles covering <strong>real estate terminology</strong>, <strong>buying processes</strong>, <strong>financing options</strong>, and <strong>market concepts</strong>. Whether you're new to real estate or looking to refresh your knowledge, our educational resources provide clear, actionable information to help you understand the industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We explain complex topics in accessible language, helping you understand <strong>mortgage options</strong>, <strong>property taxes</strong>, <strong>homeowners insurance</strong>, and other important aspects of homeownership. This knowledge empowers you to make confident decisions throughout your home buying journey.
            </p>
          </div>
        </div>
      </div>

      {/* Why Read Our Blog Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Read Our Real Estate Blog?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Our blog provides <strong>expert insights</strong> from a Featured Century Communities Partner with years of experience in the <strong>North Las Vegas real estate market</strong>. Unlike generic real estate blogs, our content is specifically tailored to the Las Vegas area, providing relevant, actionable information that directly applies to your home buying or investing goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Local Knowledge</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>{agent?.name || 'Dr. Jan Duffy'}</strong> brings deep local knowledge of the <strong>North Las Vegas real estate market</strong>, including understanding of <strong>neighborhoods</strong>, <strong>market trends</strong>, and <strong>builder relationships</strong>. This expertise provides insights you won't find elsewhere, giving you a competitive advantage in your home search.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our blog reflects this local expertise, covering topics specific to Las Vegas and North Las Vegas that directly impact your buying decisions. From understanding <strong>Century Communities</strong> to navigating <strong>North Las Vegas neighborhoods</strong>, our content provides relevant, actionable guidance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Practical, Actionable Advice</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every blog post provides <strong>practical, actionable advice</strong> you can use immediately in your home buying journey. We don't just provide general information—we give you specific steps, tips, and strategies that have proven successful for our clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're learning about <strong>new construction processes</strong>, understanding <strong>market conditions</strong>, or exploring <strong>financing options</strong>, our blog provides concrete guidance you can apply. This practical approach helps you avoid common mistakes and make informed decisions throughout your home buying process.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Regular Updates & Fresh Content</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our blog is regularly updated with fresh content covering the latest <strong>market trends</strong>, <strong>new construction developments</strong>, and <strong>home buying insights</strong>. We stay current with changes in the <strong>Las Vegas real estate market</strong>, ensuring you have access to the most up-to-date information available.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Regular updates mean you'll always have access to current information about <strong>Bravado Homes</strong>, <strong>Century Communities</strong>, <strong>North Las Vegas neighborhoods</strong>, and <strong>market conditions</strong>. This fresh content helps you stay informed and make timely decisions in a dynamic real estate market.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Latest Blog Posts
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Explore our latest articles covering <strong>new construction homes</strong>, <strong>real estate market trends</strong>, <strong>home buying tips</strong>, and more. Each post is designed to provide valuable insights and practical guidance for your real estate journey in North Las Vegas.
        </p>
        <BlogPosts />
      </div>

      {/* Subscribe/Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Have Questions? Contact Dr. Jan Duffy
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Our blog provides valuable information, but nothing replaces personalized expert guidance. Contact <strong>{agent?.name || 'Dr. Jan Duffy'}</strong> for personalized assistance with your <strong>North Las Vegas real estate</strong> needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call: (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Email Dr. Jan
          </a>
          <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
            📋 Contact Form
          </a>
        </div>
      </div>
    </section>
  )
}
