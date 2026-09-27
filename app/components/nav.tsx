'use client'

import Link from 'next/link'
import RealScoutSimpleSearch from './realscout-simple-search'
import { useState } from 'react'
import { useDomainConfig } from '../hooks/use-domain-config'

interface NavItem {
  name: string
  dropdown?: Array<{ name: string; href: string }>
}

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'Home',
  },
  '/floor-plans': {
    name: 'Floor Plans',
    dropdown: [
      { name: 'Residence 1792', href: '/models/residence-1792' },
      { name: 'Residence 1943', href: '/models/residence-1943' },
      { name: 'Residence 2119', href: '/models/residence-2119' },
    ]
  },
  '/community': {
    name: 'Community',
    dropdown: [
      { name: 'Amenities', href: '/amenities' },
      { name: 'Nearby Amenities Map', href: '/nearby-amenities' },
      { name: 'Smart Home Tech', href: '/smart-home-technology' },
      { name: 'Location', href: '/location' },
      { name: 'Century Communities', href: '/century-communities' },
      { name: 'Neighborhoods', href: '/north-las-vegas-neighborhoods' },
    ]
  },
  '/services': {
    name: 'Services',
    dropdown: [
      { name: 'New Home Construction', href: '/new-home-construction' },
      { name: 'Buyer Representation', href: '/buyer-representation' },
      { name: 'Financing & Incentives', href: '/financing-incentives' },
      { name: 'North Las Vegas Homes', href: '/north-las-vegas-homes' },
      { name: 'New Homes Las Vegas', href: '/new-homes-las-vegas' },
    ]
  },
  '/about': {
    name: 'About Dr. Janet',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  const config = useDomainConfig()
  const email = config.contact.email
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Bravado Homes
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {Object.entries(navItems).map(([path, item]) => {
                const { name, dropdown } = item
                if (dropdown) {
                  return (
                    <div
                      key={path}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(path)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={path}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {name}
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {activeDropdown === path && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                          <div className="py-1">
                            {dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {name}
                    </Link>
                  )
                }
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+17025001955" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
              Call: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Email Dr. Janet
            </a>
            <div className="hidden lg:block">
              <div className="nav-realscout-search">
                <RealScoutSimpleSearch agentEncodedId="QWdlbnQtMjI1MDUw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}