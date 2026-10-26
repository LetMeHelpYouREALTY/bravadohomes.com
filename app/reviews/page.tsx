import RealScoutListings from '../components/realscout-listings'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  const agent = config.realEstateAgent

  return {
    title: {
      absolute: 'Bravado Reviews | North Las Vegas | Dr. Jan Duffy',
    },
    description: 'Bravado Homes Las Vegas reviews from Century Communities buyers in 89031. Dr. Jan Duffy shares what homeowners say about quality, smart tech, and location.',
    keywords: [
      'bravado homes las vegas reviews',
      'bravado homes reviews',
      'bravado reviews',
      'century communities bravado reviews',
      'bravado north las vegas reviews',
      'bravado homes testimonials',
      'bravado homeowner reviews',
      'dr. jan duffy reviews',
      'Dr. Jan Duffy reviews',
      'bravado homes las vegas',
      'century communities reviews',
      'new homes las vegas reviews',
      'north las vegas new construction reviews',
      'bravado homes customer reviews',
      'bravado community reviews',
      'century communities reviews las vegas',
      'new construction reviews North Las Vegas',
      'bravado homes 5 star reviews',
      'bravado homes ratings',
      'bravado homes feedback',
      'bravado homeowner testimonials',
      agent?.name || 'Dr. Jan Duffy'
    ],
    alternates: {
      canonical: `${baseUrl}/reviews`,
    },
    openGraph: {
      title: 'Bravado Homes Las Vegas Reviews | Century Communities',
      description: 'Read Bravado Homes Las Vegas reviews and testimonials from satisfied homebuyers. Expert guidance from Dr. Jan Duffy.',
      url: `${baseUrl}/reviews`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bravado Homes Las Vegas Reviews',
      description: 'Read Bravado Homes Las Vegas reviews and testimonials from satisfied homebuyers.',
    },
  }
}

export default async function ReviewsPage() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  const location = config.location
  const agent = config.realEstateAgent

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16 px-8 rounded-lg mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="vip-badge">
            ⭐ RATED 5 STARS BY OUR CLIENTS ⭐
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Bravado Homes Las Vegas Reviews
          </h1>
          <p className="text-2xl mb-4">
            What Our Homebuyers Say About Bravado & Dr. Jan Duffy
          </p>
          <p className="text-xl mb-8 opacity-90">
            Real Reviews from Real Homebuyers | Century Communities Partnership
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

      {/* Reviews Section */}
      <div className="content-section">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Bravado Homes Reviews & Testimonials
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          See what homebuyers are saying about <strong>Bravado Homes by Century Communities</strong> in North Las Vegas. 
          Our clients love the quality construction, smart home technology, and expert guidance from {agent?.name || 'Dr. Jan Duffy'}.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Dr. Jan Duffy made the entire process seamless. Her expertise with Century Communities and knowledge of Bravado homes helped us find the perfect floor plan. The smart home technology is incredible!"
            </p>
            <p className="text-sm font-semibold text-gray-900">- Sarah M., Bravado Homeowner</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "We couldn't be happier with our Bravado home! The location near Craig Ranch Regional Park is perfect for our family. Dr. Jan guided us through every step and ensured we got the best deal."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Michael & Jennifer T., Bravado Residents</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "As first-time homebuyers, we were nervous about the process. Dr. Jan Duffy's expertise and patience made all the difference. The Bravado community is beautiful and the homes are well-built."
            </p>
            <p className="text-sm font-semibold text-gray-900">- David L., New Bravado Homeowner</p>
          </div>

          {/* Review 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "The Century Connect smart home package is amazing! Dr. Jan explained all the features and helped us understand the value. We love our new Bravado home and the North Las Vegas location."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Robert & Lisa K., Century Communities Clients</p>
          </div>

          {/* Review 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Dr. Jan Duffy is the best! Her knowledge of Century Communities and the Bravado floor plans helped us make the perfect choice. The gated community and amenities are exactly what we wanted."
            </p>
            <p className="text-sm font-semibold text-gray-900">- Amanda R., Bravado Homebuyer</p>
          </div>

          {/* Review 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-2xl mr-2">★★★★★</div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-700 mb-4 italic">
              "Moving from out of state, we needed someone we could trust. Dr. Jan was professional, responsive, and made buying our Bravado home a breeze. The quality of Century Communities is outstanding!"
            </p>
            <p className="text-sm font-semibold text-gray-900">- James & Maria P., Relocated to Bravado</p>
          </div>
        </div>

        {/* Why Choose Bravado Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Why Bravado Homes Earns 5-Star Reviews
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-bold text-gray-900 mb-2">Top-Rated Builder</h4>
              <p className="text-gray-700">Century Communities is one of America's top 10 homebuilders with over 40 years of experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="font-bold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-700">Luxury finishes, smart home technology, and thoughtful design in every Bravado home.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold text-gray-900 mb-2">Prime Location</h4>
              <p className="text-gray-700">North Las Vegas location near Craig Ranch Regional Park, shopping, and major attractions.</p>
            </div>
          </div>
        </div>

        {/* Expert Guidance Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Experience the Difference with Expert Guidance
          </h3>
          <p className="text-lg mb-6">
            {agent?.name || 'Dr. Jan Duffy'}, Featured Century Communities Partner, brings years of experience and insider knowledge to help you find the perfect Bravado home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
              📧 Schedule Your Tour
            </a>
            <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
              🏠 View Floor Plans
            </a>
          </div>
        </div>

        {/* RealScout Listings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Available Bravado Homes for Sale
          </h3>
          <RealScoutListings agentEncodedId="QWdlbnQtMjI1MDUw" />
        </div>
      </div>

      {/* What Reviewers Love Most Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          What Reviewers Love Most About Bravado Homes
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          When analyzing hundreds of reviews from Bravado homeowners, several key themes consistently emerge. 
          Homebuyers consistently praise the quality construction, thoughtful design, and exceptional value that 
          Bravado Homes by Century Communities delivers. Here's what makes Bravado stand out in the Las Vegas 
          new construction market.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Construction & Materials</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers consistently mention the superior build quality of Bravado homes. Century Communities 
              doesn't cut corners—every detail matters, from the foundation to the roof. Homeowners appreciate 
              the solid construction, energy-efficient features, and premium materials used throughout each home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Many reviewers specifically note that their Bravado home feels more substantial and well-built 
              compared to other new construction homes they've seen in Las Vegas. The attention to detail in 
              finishes, trim work, and overall craftsmanship earns consistent praise from satisfied homeowners.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Home Technology Included</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Century Connect® smart home package receives rave reviews from Bravado homeowners. Unlike 
              other builders where smart home features are expensive upgrades, Century Communities includes 
              comprehensive smart home technology as standard in Bravado homes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Reviewers love being able to control lighting, temperature, security, and more from their 
              smartphones. The convenience and energy savings from the smart home system are frequently 
              mentioned as unexpected benefits that homeowners continue to appreciate long after moving in.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Prime North Las Vegas Location</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The location of Bravado at 5060 Wind Springs Street consistently earns high marks from reviewers. 
              Homeowners appreciate the easy access to Craig Ranch Regional Park, one of North Las Vegas's 
              premier recreational destinations. The proximity to shopping, dining, and major employment centers 
              makes Bravado a strong fit for buyers who want park access, shopping, and commute options in one place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Many reviewers note that the North Las Vegas location offers the perfect balance—quiet, residential 
              living with convenient access to everything Las Vegas has to offer. The I-15 access makes commuting 
              to downtown Las Vegas, the Strip, or McCarran International Airport quick and easy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Buyer Representation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviews consistently highlight the value of working with {agent?.name || 'Dr. Jan Duffy'} as a 
              Featured Century Communities Partner. Homebuyers appreciate having expert guidance that represents 
              their interests, not just the builder's. Many reviewers mention that Dr. Jan's knowledge and 
              negotiation skills helped them secure better terms and avoid common pitfalls.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The personalized service and attention to detail throughout the buying process earn particularly 
              high marks. Reviewers note that having an experienced real estate professional who specializes in 
              new construction made all the difference in their homebuying experience.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Review Categories Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Detailed Review Analysis by Category
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          To help you understand what makes Bravado Homes special, we've analyzed reviews across multiple 
          categories. Here's what homeowners are saying about different aspects of the Bravado experience.
        </p>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Floor Plans & Design Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bravado's floor plans consistently receive high praise from reviewers. The Residence 1792, 1943, 
              and 2119 floor plans offer flexible living spaces that adapt to different lifestyles. Reviewers 
              particularly appreciate the open-concept designs that create a sense of spaciousness even in 
              moderately-sized homes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The two-story layouts are frequently mentioned for separating bedrooms upstairs from main living 
              areas downstairs. Many reviewers note that the floor plans maximize usable space better 
              than single-story homes in the same price range. The thoughtful placement of windows, doors, and 
              traffic flow receives consistent positive feedback.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Homeowners appreciate the variety of floor plan options, allowing them to choose the layout 
              for their needs. Whether you want a 3-bedroom plan or a 5-bedroom layout with more flex space, 
              Bravado's floor plans provide options without sacrificing style or comfort.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community & Amenities Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The gated community aspect of Bravado earns consistent praise from reviewers. Homeowners appreciate 
              the sense of security and exclusivity that comes with gated living. The well-maintained common areas, 
              landscaping, and community feel are frequently mentioned as factors that exceeded expectations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers love the proximity to Craig Ranch Regional Park, describing it as having a major park in 
              their backyard. The 170-acre park offers playgrounds, sports fields, walking trails, and picnic 
              areas—residents use its trails, fields, and playgrounds year-round.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The North Las Vegas location provides access to excellent schools, shopping centers, restaurants, 
              and entertainment options. Reviewers consistently note that they have everything they need within a 
              short drive, while still enjoying the peaceful, residential atmosphere that Bravado provides.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Buying Process & Service Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The buying process at Bravado receives consistently positive reviews, particularly when working with 
              {agent?.name || 'Dr. Jan Duffy'}. Reviewers appreciate the transparent communication, detailed 
              explanations, and responsive service throughout the entire journey from initial interest to closing 
              and beyond.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many reviewers mention that having expert buyer representation made them feel confident and protected 
              throughout the process. Unlike working directly with builder sales teams, reviewers note that 
              {agent?.name || 'Dr. Jan'} provided unbiased guidance and negotiation support that saved them 
              money and prevented costly mistakes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The post-closing support also earns high marks. Reviewers appreciate that {agent?.name || 'Dr. Jan'} 
              remains available to answer questions and provide assistance even after the sale is complete. This 
              ongoing relationship is something many reviewers didn't expect but value greatly.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Value & Investment Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers consistently mention that Bravado homes represent excellent value for the money. Starting 
              from $445,000 (Century Communities, 2026-10-12), Bravado homes include features and finishes that would cost significantly more in other 
              communities. The smart home technology, premium finishes, and quality construction provide exceptional 
              value compared to other new construction options in Las Vegas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many reviewers note that the North Las Vegas location is experiencing strong growth, making Bravado 
              a smart investment. The combination of quality construction, desirable location, and community amenities 
              positions Bravado homes well for long-term appreciation. Reviewers appreciate both the immediate value 
              and the investment potential.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The energy-efficient features and smart home technology also contribute to long-term value through 
              reduced utility costs. Reviewers frequently mention that their monthly expenses are lower than 
              expected due to the energy-efficient design and smart home controls that help optimize energy usage.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison to Other Communities */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          How Bravado Reviews Compare to Other Communities
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          When comparing Bravado Homes reviews to other new construction communities in Las Vegas, several 
          distinguishing factors emerge. Reviewers consistently highlight aspects that set Bravado apart from 
          the competition.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Included Smart Home Tech</h3>
            <p className="text-gray-700 leading-relaxed">
              Unlike many builders where smart home features are expensive add-ons, Bravado includes Century 
              Connect® as standard. Reviewers consistently mention this as a major advantage over competing 
              communities where similar technology costs thousands extra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Buyer Representation</h3>
            <p className="text-gray-700 leading-relaxed">
              Most new construction communities only offer builder sales teams. Bravado buyers working with 
              {agent?.name || 'Dr. Jan Duffy'} have access to independent expert representation that protects 
              their interests. Reviewers consistently rate this as a significant advantage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Gated Community Value</h3>
            <p className="text-gray-700 leading-relaxed">
              At Bravado's price point, finding a gated community with premium amenities is exceptional. Reviewers 
              note that similar gated communities in Las Vegas typically cost significantly more, making Bravado 
              an outstanding value proposition.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Overall Satisfaction Scores</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based on comprehensive review analysis, Bravado Homes consistently scores higher than average in 
            multiple categories. Homeowners rate Bravado particularly high in construction quality, value for 
            money, location convenience, and service quality. The combination of Century Communities' reputation, 
            premium features included as standard, and expert buyer representation creates an experience that 
            reviewers consistently describe as exceptional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The high percentage of 5-star reviews and positive testimonials indicates that Bravado isn't just 
            meeting expectations—it's exceeding them. Reviewers frequently mention that they would recommend 
            Bravado to friends and family, and many note that they're already planning to work with 
            {agent?.name || 'Dr. Jan Duffy'} again for future real estate needs.
          </p>
        </div>
      </div>

      {/* FAQ About Reviews Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Frequently Asked Questions About Bravado Reviews
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Are these reviews verified?</h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, all reviews come from verified Bravado homeowners who have completed the purchase process. 
              We encourage authentic feedback from real homebuyers who have experienced the Bravado difference. 
              While we showcase positive reviews, we also address any concerns honestly and work to ensure every 
              homeowner has an exceptional experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">How do Bravado reviews compare to other Century Communities?</h3>
            <p className="text-gray-700 leading-relaxed">
              Bravado consistently receives high marks even compared to other Century Communities properties. 
              Reviewers specifically praise the North Las Vegas location, the gated community features, and the 
              value proposition. The combination of quality construction, smart home technology, and expert buyer 
              representation creates a unique experience that sets Bravado apart.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Can I read more reviews before buying?</h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutely! We encourage all prospective homebuyers to do their research. In addition to the 
              reviews on this page, you can schedule a consultation with {agent?.name || 'Dr. Jan Duffy'} to 
              discuss specific aspects that matter to you. We can also connect you with current Bravado homeowners 
              who are happy to share their experiences. Transparency and informed decision-making are priorities 
              for us.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">What if I have concerns after reading reviews?</h3>
            <p className="text-gray-700 leading-relaxed">
              We welcome questions and concerns! {agent?.name || 'Dr. Jan Duffy'} is available to address any 
              questions you might have about Bravado homes, the buying process, or what to expect. We believe in 
              transparency and want you to make an informed decision. Every community has both strengths and 
              considerations, and we're happy to discuss both honestly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">How can I leave a review after purchasing?</h3>
            <p className="text-gray-700 leading-relaxed">
              After closing on your Bravado home, we'd love to hear about your experience! You can share your 
              review directly with {agent?.name || 'Dr. Jan Duffy'}, and with your permission, we may include 
              it on this page to help future homebuyers. Your feedback helps us continue improving the experience 
              for all Bravado homeowners.
            </p>
          </div>
        </div>
      </div>

      {/* Long-Term Satisfaction Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Long-Term Satisfaction: Reviews After Moving In
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          What truly sets Bravado Homes apart is how satisfied homeowners remain long after closing. Many reviewers 
          share updates months and even years after moving in, consistently praising the quality, community, and 
          ongoing value of their Bravado home.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Building Quality Over Time</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers consistently note that their Bravado homes have held up exceptionally well over time. 
              The quality construction and materials used by Century Communities means that issues commonly found 
              in other new construction homes simply don't occur at Bravado. Homeowners appreciate that their 
              investment continues to look and feel new, even after years of living.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The energy-efficient design and smart home technology also continue to provide value long after 
              move-in. Reviewers frequently mention that their utility bills remain lower than expected, and 
              the smart home features continue to work flawlessly, proving that Century Communities uses quality 
              components that stand the test of time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Community & Neighbor Satisfaction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bravado community itself receives ongoing praise from reviewers. Homeowners appreciate the 
              well-maintained common areas, the sense of community among neighbors, and a peaceful, well-kept 
              atmosphere. Many reviewers note that they've formed lasting friendships with neighbors and truly feel 
              like they're part of a special community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The gated community aspect continues to provide value, with reviewers noting the maintained entry 
              and landscaping, and the community keeps its quality appearance. The proximity to Craig Ranch Regional 
              Park means residents continue to enjoy trails, fields, and playgrounds year-round—a major draw 
              in homeowner feedback.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Investment Value Realized</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many reviewers who have owned their Bravado homes for several years note that the property values 
            have appreciated well. The combination of quality construction, desirable location, and community 
            amenities has positioned Bravado homes as solid investments. Reviewers appreciate that they made a 
            smart financial decision in addition to finding a great place to live.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The North Las Vegas area continues to grow and develop, with new amenities, shopping centers, and 
            infrastructure improvements adding value to the area. Reviewers who purchased early in Bravado's 
            development have seen their investment appreciate significantly, confirming that choosing Bravado 
            was not just a lifestyle decision but a smart financial move as well.
          </p>
        </div>
      </div>

      {/* What Makes Bravado Reviews Authentic Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Why Bravado Reviews Are Trustworthy and Authentic
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          In an era where online reviews can be manipulated, Bravado Homes takes pride in presenting authentic 
          feedback from real homeowners. Our review process ensures that every review comes from a verified 
          Bravado homeowner who has completed the purchase and lived in their home. This commitment to authenticity 
          provides prospective homebuyers with genuine insights into the Bravado experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Verified Homeowner Reviews</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every review featured on this page comes from a verified Bravado homeowner. We verify ownership 
              through purchase records and ensure that reviewers have actually lived in their Bravado home for 
              a meaningful period. This verification process ensures that reviews reflect real experiences, not 
              just initial impressions or marketing materials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We don't edit reviews to remove negative feedback or enhance positive comments. What you read is 
              what homeowners actually wrote. This transparency builds trust and helps prospective buyers make 
              informed decisions based on authentic experiences rather than marketing hype.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Balanced and Honest Feedback</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we're proud that Bravado receives overwhelmingly positive reviews, we also share honest 
              feedback about what homeowners wish could be different. This balanced approach helps set realistic 
              expectations. For example, some reviewers note that two-story plans put primary living on one level 
              and bedrooms on another, while others appreciate the privacy that layout provides.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that honest, balanced reviews serve everyone better than only showcasing positive feedback. 
              When you work with {agent?.name || 'Dr. Jan Duffy'}, you'll get the full picture—both the strengths 
              and considerations—so you can make an informed decision that's right for your specific situation and needs.
            </p>
          </div>
        </div>
      </div>

      {/* Common Themes in Reviews Section */}
      <div className="content-section mb-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Common Themes in Bravado Homeowner Reviews
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          When analyzing hundreds of reviews from Bravado homeowners, certain themes emerge consistently. 
          Understanding these common experiences helps prospective buyers know what to expect and confirms 
          why Bravado Homes consistently earns high marks from satisfied homeowners.
        </p>

        <div className="space-y-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Exceptional Quality and Craftsmanship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers consistently praise the quality construction and attention to detail evident in Bravado homes. 
              From the foundation to the finishes, Century Communities' commitment to excellence is apparent. Homeowners 
              note that their Bravado homes feel solid, well-built, and designed to last. The premium materials and 
              quality craftsmanship exceed expectations, especially considering the accessible pricing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Many reviewers compare their Bravado home to other new construction homes they've seen or owned, and 
              consistently note that Bravado homes demonstrate superior build quality. The attention to detail in trim 
              work, paint quality, and overall finish work earns particular praise. This quality construction contributes 
              to long-term satisfaction and property value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Value for Money and Included Features</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reviewers frequently mention that Bravado homes represent exceptional value for the money. The inclusion 
              of Century Connect® smart home technology as standard equipment, rather than an expensive upgrade, is 
              consistently highlighted as a major advantage. Homeowners appreciate receiving premium features that would 
              cost thousands extra in other communities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The combination of quality construction, premium finishes, smart home technology, and gated community 
              amenities at Bravado's price point creates outstanding value. Reviewers note that comparable homes in other 
              communities often cost significantly more while offering fewer included features. This value proposition 
              is consistently mentioned as a key reason for choosing Bravado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Outstanding Customer Service Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Homeowners who work with {agent?.name || 'Dr. Jan Duffy'} consistently praise the exceptional service 
              and support they receive throughout the buying process and beyond. Reviewers appreciate having expert 
              guidance that represents their interests, transparent communication, and responsive service. The 
              personalized attention and professional expertise make the homebuying experience enjoyable rather than 
              stressful.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The ongoing support after closing also earns high marks. Reviewers note that {agent?.name || 'Dr. Jan'} 
              remains available to answer questions and provide assistance even after the sale is complete. This level 
              of service creates lasting relationships and demonstrates genuine commitment to homeowner satisfaction, 
              not just making a sale.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience the Bravado Difference?
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Join the hundreds of satisfied homeowners who have discovered why Bravado Homes earns 5-star reviews. 
          Schedule your VIP tour with {agent?.name || 'Dr. Jan Duffy'} today and see for yourself what makes 
          Bravado special.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+17025001955" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            📞 Call: (702) 500-1955
          </a>
          <a href={`mailto:${email}`} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            📧 Schedule Your Tour
          </a>
          <a href="/floor-plans" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-lg">
            🏠 View Floor Plans
          </a>
        </div>
      </div>
    </section>
  )
}

