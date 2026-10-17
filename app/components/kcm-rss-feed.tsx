'use client'

import { useState, useEffect } from 'react'
import OptimizedImage, { FALLBACK_IMAGES } from './optimized-image'
import Link from 'next/link'

interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
  guid: string
  categories?: string[]
  content?: string
  author?: string
  image?: string
}

interface RSSFeed {
  title: string
  description: string
  link: string
  items: RSSItem[]
}

export default function KCMRSSFeed() {
  const [feed, setFeed] = useState<RSSFeed | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState(6)
  const [displayMode, setDisplayMode] = useState<'modern' | 'iframe'>('modern')

  const RSS_FEED_URL = "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true)
        
        // Use Next.js API route for server-side RSS parsing to avoid CORS issues
        const response = await fetch('/api/rss-feed')
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed')
        }
        
        const data = await response.json()
        setFeed(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load RSS feed')
        console.error('RSS Feed Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRSSFeed()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return 'Recent'
    }
  }

  const truncateDescription = (description: string, maxLength: number = 150) => {
    const cleanDescription = description.replace(/<[^>]*>/g, '')
    return cleanDescription.length > maxLength 
      ? cleanDescription.substring(0, maxLength) + '...'
      : cleanDescription
  }

  const hyperlocalizeContent = (title: string, description: string) => {
    // Add hyperlocal context to titles and descriptions
    const localKeywords = ['North Las Vegas', 'Bravado', '89031', 'Las Vegas', 'Nevada', 'Century Communities']
    const hasLocalContext = localKeywords.some(keyword => 
      title.toLowerCase().includes(keyword.toLowerCase()) || 
      description.toLowerCase().includes(keyword.toLowerCase())
    )

    if (!hasLocalContext) {
      return {
        title: `${title} - North Las Vegas Market Insights`,
        description: `${description} Get expert analysis from Dr. Jan Duffy, your local Bravado and North Las Vegas real estate specialist.`
      }
    }

    return { title, description }
  }

  const getLocalImage = (item: RSSItem) => {
    // Debug logging
    console.log('RSS Item:', {
      title: item.title,
      hasImage: !!item.image,
      imageUrl: item.image
    })
    
    // High-quality real estate and market-related images
    const imageOptions = [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Modern house exterior
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Contemporary home
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Luxury home
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Modern kitchen
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Living room
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Master bedroom
      'https://images.unsplash.com/photo-1560518883-ffba0f810704?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Home exterior
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Spanish style home
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80', // Community aerial
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80'  // Modern bathroom
    ]
    
    // Use a consistent image based on the article title hash for better caching
    const titleHash = item.title.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    const selectedImage = imageOptions[Math.abs(titleHash) % imageOptions.length]
    console.log('Selected image for', item.title, ':', selectedImage)
    
    return selectedImage
  }

  const getNextUpdateInfo = () => {
    const now = new Date()
    const dayOfWeek = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    
    // If it's weekend, next update is Monday
    if (dayOfWeek === 0) { // Sunday
      const nextMonday = new Date(now)
      nextMonday.setDate(now.getDate() + 1)
      return `Next update: Monday ${nextMonday.toLocaleDateString()}`
    } else if (dayOfWeek === 6) { // Saturday
      const nextMonday = new Date(now)
      nextMonday.setDate(now.getDate() + 2)
      return `Next update: Monday ${nextMonday.toLocaleDateString()}`
    } else {
      // Weekday - could be today or tomorrow
      const lastUpdate = feed?.items[0]?.pubDate ? new Date(feed.items[0].pubDate) : now
      const daysSinceUpdate = Math.floor((now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24))
      
      if (daysSinceUpdate === 0) {
        return 'Updated today'
      } else if (daysSinceUpdate === 1) {
        return 'Updated yesterday'
      } else {
        return `Last updated: ${lastUpdate.toLocaleDateString()}`
      }
    }
  }

  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 6, feed?.items.length || 0))
  }

  if (loading) {
    return (
      <div className="kcm-rss-feed">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading latest market insights...</p>
        </div>
      </div>
    )
  }

  if (error || !feed) {
    return (
      <div className="kcm-rss-feed">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Market Insights</h3>
          <p className="text-gray-600 mb-4">
            {error || 'There was a problem loading the latest real estate insights.'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="kcm-rss-feed">
      {/* Header */}
      <div className="content-section mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Latest Market Insights from Dr. Jan Duffy
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Stay informed with the latest <strong>real estate market trends</strong>, insights, and expert analysis 
          from <strong>North Las Vegas</strong> and the greater Las Vegas area. Content updates weekdays only.
        </p>
        
        {/* Display Mode Toggle */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => setDisplayMode('modern')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              displayMode === 'modern'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Modern View
          </button>
          <button
            onClick={() => setDisplayMode('iframe')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              displayMode === 'iframe'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Full Blog View
          </button>
        </div>
        
        <div className="mt-4 flex justify-center space-x-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Auto-Updated Weekdays
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Hyperlocal Content
          </span>
        </div>
      </div>

      {/* Content Display */}
      {displayMode === 'modern' ? (
        <>
          {/* RSS Feed Items - Modern View */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {feed.items.slice(0, visibleItems).map((item, index) => {
              const localizedContent = hyperlocalizeContent(item.title, item.description)
              const itemImage = getLocalImage(item)
              
              console.log('Rendering article:', {
                index,
                title: item.title,
                imageUrl: itemImage,
                hasImage: !!itemImage
              })
              
              return (
                <article key={item.guid || index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {/* Article Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <OptimizedImage
                      src={itemImage}
                      alt={localizedContent.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fallbackSrc={FALLBACK_IMAGES.default}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        Dr. Jan Duffy
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <time className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {formatDate(item.pubDate)}
                      </time>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        North Las Vegas Market Insight
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <Link 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {localizedContent.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {truncateDescription(localizedContent.description)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: localizedContent.title,
                                text: truncateDescription(localizedContent.description, 100),
                                url: item.link
                              })
                            } else {
                              navigator.clipboard.writeText(item.link)
                            }
                          }}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Share article"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Load More Button */}
          {feed.items.length > visibleItems && (
            <div className="text-center">
              <button
                onClick={loadMoreItems}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Load More Articles ({feed.items.length - visibleItems} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        /* iFrame View */
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              Full Blog Feed - Dr. Jan Duffy's Market Insights
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Complete blog posts with full content and images
            </p>
          </div>
          <div className="relative">
            <iframe 
              src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18" 
              scrolling="yes" 
              frameBorder="1" 
              marginHeight={0} 
              marginWidth={0} 
              height="800px" 
              width="100%" 
              allowFullScreen
              className="w-full"
              title="Dr. Jan Duffy's Market Insights Blog"
            />
          </div>
        </div>
      )}

      {/* Load More Button */}
      {feed.items.length > visibleItems && (
        <div className="text-center">
          <button
            onClick={loadMoreItems}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Load More Articles ({feed.items.length - visibleItems} remaining)
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Market insights powered by{' '}
          <a 
            href="https://www.keepingcurrentmatters.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Keeping Current Matters
          </a>
          {' '}and curated by Dr. Jan Duffy
        </p>
        <div className="text-xs text-gray-400 mt-2 space-y-1">
          <p>Content updates weekdays only (excluding holidays)</p>
          <p className="font-medium text-gray-600">{getNextUpdateInfo()}</p>
          <p>Last refreshed: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
