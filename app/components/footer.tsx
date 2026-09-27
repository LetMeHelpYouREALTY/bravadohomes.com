import RealScoutListings from './realscout-listings'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from '../utils/domain'

export default async function Footer() {
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const email = config.contact.email
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-lg mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Bravado Homes</h3>
            <p className="text-lg mb-4 opacity-90">
              Featured New Home Construction & Buyer Representation Specialist
            </p>
            <p className="opacity-90">
              5060 Wind Springs Street<br />
              North Las Vegas, NV 89031<br />
              (702) 500-1955
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="/floor-plans" className="hover:text-blue-200 transition-colors">Floor Plans</a></li>
              <li><a href="/community" className="hover:text-blue-200 transition-colors">Community</a></li>
              <li><a href="/location" className="hover:text-blue-200 transition-colors">Location</a></li>
              <li><a href="/nearby-amenities" className="hover:text-blue-200 transition-colors">Nearby Amenities</a></li>
              <li><a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
            </ul>
            <h4 className="text-lg font-bold mt-6 mb-4">Popular Home Searches</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="/models/residence-1792" className="hover:text-blue-200 transition-colors">Bravado Residence 1792</a></li>
              <li><a href="/models/residence-1943" className="hover:text-blue-200 transition-colors">Bravado Residence 1943</a></li>
              <li><a href="/models/residence-2119" className="hover:text-blue-200 transition-colors">Bravado Residence 2119</a></li>
              <li><a href="/amenities" className="hover:text-blue-200 transition-colors">Community Amenities</a></li>
              <li><a href="/nearby-amenities" className="hover:text-blue-200 transition-colors">Nearby Amenities Map</a></li>
              <li><a href="/new-home-construction" className="hover:text-blue-200 transition-colors">New Construction Guide</a></li>
              <li><a href="/buyer-representation" className="hover:text-blue-200 transition-colors">Buyer Representation Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Dr. Janet Duffy</h4>
            <div className="space-y-2 opacity-90">
              <p>
                <strong>Primary Phone:</strong><br />
                <a href="tel:+17025001955" className="hover:text-blue-200 transition-colors">
                  (702) 500-1955
                </a>
              </p>
              <p>
                <strong>Urgent/Marketing:</strong><br />
                <a href="tel:+17022221964" className="hover:text-blue-200 transition-colors">
                  (702) 222-1964
                </a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href={`mailto:${email}`} className="hover:text-blue-200 transition-colors">
                  {email}
                </a>
              </p>
              <p className="text-sm">
                Nevada License: S.0197614
              </p>
            </div>
          </div>
        </div>
        
        {/* RealScout Listings Widget */}
        <div className="mt-8 py-8 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-center text-white">
              🏡 Search Available Bravado Homes ($500K-$600K)
            </h4>
            <p className="text-white/90 text-center mb-4 text-sm">
              Browse current listings in the Bravado community with Dr. Janet Duffy's expert guidance
            </p>
            <p className="text-white/80 text-center mb-6 text-xs">
              These are current listings near the Bravado area to give you more options and market insights. 
              Dr. Janet Duffy provides expert guidance on all North Las Vegas properties.
            </p>
            
            {/* Market Insights Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
                <div className="text-white font-bold text-lg">12+</div>
                <div className="text-white/90 text-xs">Active Listings</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
                <div className="text-white font-bold text-lg">$520K</div>
                <div className="text-white/90 text-xs">Avg. Price</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-center">
                <div className="text-white font-bold text-lg">3-4</div>
                <div className="text-white/90 text-xs">Bedrooms</div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <RealScoutListings
                agentEncodedId="QWdlbnQtMjI1MDUw"
                sortOrder="PRICE_LOW"
                listingStatus="For Sale"
                propertyTypes=",SFR,OTHER"
                priceMin="500000"
                priceMax="600000"
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-white/80 text-xs">
                💡 <strong>Pro Tip:</strong> Properties near Bravado offer excellent value and investment potential. 
                Contact Dr. Janet Duffy for exclusive market insights and early access to new listings.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © {new Date().getFullYear()} Bravado | Homes by Dr Janet Duffy. All rights reserved.
            </p>
            <p className="text-sm opacity-75">
              Independent real estate resource. Not affiliated with or endorsed by Century Communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
