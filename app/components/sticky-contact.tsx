'use client'

import { useState, useEffect } from 'react'
import { useDomainConfig } from '../hooks/use-domain-config'

export default function StickyContact() {
  const config = useDomainConfig()
  const email = config.contact.email
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show sticky contact after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden sm:block">
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Ready to find your dream home?</span>
                <span className="text-gray-600 ml-2">Get expert guidance from Dr. Jan Duffy</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+17025001955" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors flex items-center"
            >
              📞 (702) 500-1955
            </a>
            <a 
              href={`mailto:${email}`} 
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors flex items-center"
            >
              📧 Email Dr. Jan
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close contact bar"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
