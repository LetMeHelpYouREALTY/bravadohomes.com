import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../../utils/domain'
import type { Metadata } from 'next'
import GeoFAQSchema from '../../components/geo-faq-schema'
import RealScoutListings from '../../components/realscout-listings'

export const metadata: Metadata = {
  title: 'Best 55+ Active Adult Communities in Las Vegas | Dr. Jan Duffy',
  description: 'Discover the best 55+ active adult communities in Las Vegas and North Las Vegas. Expert guide from Dr. Jan Duffy, licensed since 2008 · 35 years in Las Vegas, helping retirees find perfect homes.',
  keywords: [
    '55+ active adult communities Las Vegas',
    'senior living Las Vegas',
    'retirement communities North Las Vegas',
    '55+ communities Las Vegas',
    'active adult communities Las Vegas',
    'best 55+ communities Las Vegas',
    'retirement homes Las Vegas',
    '55+ housing Las Vegas',
    'senior communities Las Vegas',
    'active adult homes Las Vegas',
    'Dr. Jan Duffy 55+',
    'retirement real estate Las Vegas'
  ],
  openGraph: {
    title: 'Best 55+ Active Adult Communities in Las Vegas',
    description: 'Expert guide to 55+ active adult communities in Las Vegas and North Las Vegas from Dr. Jan Duffy.',
    url: 'https://www.bravadohomes.com/buyers/55-plus',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.bravadohomes.com/buyers/55-plus',
  },
}

const faqs = [
  {
    question: "What are the best 55+ active adult communities in Las Vegas?",
    answer: "The best 55+ active adult communities in Las Vegas include Sun City Summerlin, Sun City MacDonald Ranch, Sun City Anthem, and Del Webb communities. In North Las Vegas, newer 55+ communities offer modern amenities and smart home technology. Dr. Jan Duffy specializes in helping retirees find the perfect active adult community based on lifestyle preferences, budget, and desired amenities."
  },
  {
    question: "What amenities are typically available in 55+ communities in Las Vegas?",
    answer: "Most 55+ active adult communities in Las Vegas offer fitness centers, swimming pools, golf courses, clubhouses, walking trails, pickleball courts, and organized social activities. Many newer communities also include smart home technology, gated security, and low-maintenance landscaping. Dr. Jan Duffy can help you identify communities that match your specific amenity preferences."
  },
  {
    question: "How much do 55+ active adult community homes cost in Las Vegas?",
    answer: "55+ active adult community homes in Las Vegas range from $300,000 to over $1 million, depending on location, size, and amenities. North Las Vegas offers excellent value with newer communities starting around $400,000. Dr. Jan Duffy provides expert guidance on finding homes that fit your budget while meeting your lifestyle needs."
  },
  {
    question: "What should I consider when buying in a 55+ community?",
    answer: "When buying in a 55+ community, consider: HOA fees and what they cover, community rules and restrictions, proximity to healthcare facilities, availability of desired amenities, home maintenance requirements, resale potential, and the overall community culture. Dr. Jan Duffy's clinical psychology background helps her understand the lifestyle transitions of retirement and can guide you through these important decisions."
  },
  {
    question: "Are there 55+ communities in North Las Vegas?",
    answer: "Yes, North Las Vegas offers several 55+ active adult communities with modern amenities and excellent value. These communities often feature newer construction, smart home technology, and proximity to healthcare facilities. Dr. Jan Duffy specializes in North Las Vegas real estate and can help you explore active adult communities in this growing area."
  },
  {
    question: "What makes a good 55+ active adult community?",
    answer: "A good 55+ active adult community offers: accessible design features, low-maintenance living, active lifestyle amenities, social activities and clubs, quality healthcare nearby, safety and security, well-maintained common areas, and a welcoming community atmosphere. Dr. Jan Duffy evaluates communities based on these factors to help you find the perfect fit."
  },
  {
    question: "How do I find the right 55+ community for my lifestyle?",
    answer: "Finding the right 55+ community requires understanding your priorities: Do you want golf, pickleball, or fitness focus? Urban or suburban setting? Single-story or multi-level? Proximity to family? Budget considerations? Dr. Jan Duffy uses her 35 years of Las Vegas experience and clinical psychology background to help you identify communities that align with your lifestyle goals and values."
  },
  {
    question: "What are HOA fees like in Las Vegas 55+ communities?",
    answer: "HOA fees in Las Vegas 55+ communities typically range from $150 to $500+ per month, depending on amenities. Higher fees often include access to golf courses, fitness centers, and extensive clubhouse facilities. Dr. Jan Duffy helps you understand what fees cover and evaluate whether the amenities justify the cost for your lifestyle."
  },
  {
    question: "Can I buy a home in a 55+ community if I'm under 55?",
    answer: "Most 55+ communities require at least one resident to be 55 or older. Some communities allow a spouse or partner under 55, while others are strictly 55+. Community rules vary, so it's important to understand the specific age restrictions. Dr. Jan Duffy can help you navigate these requirements and find communities that fit your situation."
  },
  {
    question: "What's the difference between 55+ communities and assisted living?",
    answer: "55+ active adult communities are for independent, active seniors who want low-maintenance living with social and recreational amenities. Assisted living provides daily care services. Many 55+ community residents remain independent for decades. Dr. Jan Duffy helps you understand these options and choose the right living situation for your current and future needs."
  },
  {
    question: "How do I schedule a tour of 55+ communities?",
    answer: "Contact Dr. Jan Duffy at (702) 500-1955 or DrJanSells@BravadoHomes.com to schedule tours of 55+ active adult communities in Las Vegas and North Las Vegas. As a Featured Century Communities Partner licensed since 2008 · 35 years in Las Vegas, Dr. Jan can arrange community tours, provide expert guidance, and help you evaluate whether a community matches your lifestyle preferences."
  },
  {
    question: "What financing options are available for 55+ community homes?",
    answer: "Financing for 55+ community homes typically uses standard mortgage options, though some communities offer builder financing incentives. Dr. Jan Duffy works with trusted lenders who understand the unique aspects of 55+ community purchases and can help you explore financing options, including down payment assistance programs if you qualify."
  },
  {
    question: "Are 55+ communities good investments?",
    answer: "55+ communities can be good investments because they often maintain stable values due to desirable amenities and location. However, appreciation may be slower than communities. Resale can be strong if the community remains desirable. Dr. Jan Duffy provides market analysis to help you understand investment potential in specific 55+ communities."
  },
  {
    question: "What questions should I ask when touring a 55+ community?",
    answer: "Key questions include: What's included in HOA fees? What are the community rules? How active is the social calendar? What's the average age of residents? How is the community maintained? What's the resale history? What's nearby for healthcare and shopping? Dr. Jan Duffy accompanies clients on tours and helps ask the right questions to evaluate communities."
  },
  {
    question: "How does Dr. Jan Duffy help with 55+ community purchases?",
    answer: "Dr. Jan Duffy has been licensed since 2008, with 35 years in Las Vegas, and brings a clinical psychology background to help you navigate 55+ community purchases. She provides: expert community evaluation, lifestyle matching, buyer representation to protect your interests, negotiation expertise, and understanding of retirement transitions. Her goal is ensuring you find a community that supports your active retirement lifestyle."
  }
]

export default async function Buyers55PlusPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const agent = config.realEstateAgent

  return (
    <section>
      <GeoFAQSchema faqs={faqs} pageTitle="55+ Active Adult Communities in Las Vegas" pageUrl="/buyers/55-plus" />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ 55+ ACTIVE ADULT COMMUNITY SPECIALIST ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Best 55+ Active Adult Communities in Las Vegas
          </h1>
          <p className="text-2xl mb-4">
            Expert Guide to Retirement Living in Las Vegas & North Las Vegas
          </p>
          <p className="text-xl mb-8 opacity-90">
            {agent?.name || 'Dr. Jan Duffy'} | Licensed Since 2008
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Email Dr. Jan
            </a>
          </div>
        </div>
      </div>

      {/* Answer-First Content */}
      <div className="content-section mb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold">
            The best 55+ active adult communities in Las Vegas offer resort-style amenities, 
            low-maintenance living, and vibrant social environments perfect for active retirees. 
            Top communities include Sun City Summerlin, Sun City Anthem, and newer developments 
            in North Las Vegas with modern smart home technology. {agent?.name || 'Dr. Jan Duffy'}, 
            licensed since 2008 · 35 years in Las Vegas and with a clinical psychology background, 
            specializes in helping retirees find communities that match their lifestyle, budget, 
            and long-term needs.
          </p>
        </div>
      </div>

      {/* Comprehensive Guide */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Complete Guide to 55+ Active Adult Communities in Las Vegas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose a 55+ Active Adult Community?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Low-maintenance living with HOA handling exterior maintenance</li>
              <li>Resort-style amenities including pools, fitness centers, and clubhouses</li>
              <li>Active social calendar with clubs, classes, and events</li>
              <li>Age-appropriate community design and accessibility features</li>
              <li>Gated security and peaceful living environment</li>
              <li>Proximity to healthcare facilities and shopping</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Look For</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Community amenities that match your interests</li>
              <li>HOA fees and what they cover</li>
              <li>Community rules and restrictions</li>
              <li>Accessibility features and single-story options</li>
              <li>Healthcare facility proximity</li>
              <li>Resale value and community stability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Frequently Asked Questions About 55+ Communities
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property Listings */}
      <div className="content-section mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Active Adult Community Homes Available
        </h2>
        <RealScoutListings 
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin="350000"
          priceMax="750000"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-lg text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect 55+ Community?</h2>
        <p className="text-xl mb-8">
          Let {agent?.name || 'Dr. Jan Duffy'} help you discover the active adult community that matches your lifestyle
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Email Dr. Jan
          </a>
          <a href="/contact" className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
            🏠 Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
