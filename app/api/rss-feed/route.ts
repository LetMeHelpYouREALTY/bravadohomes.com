import { NextResponse } from 'next/server'

const RSS_FEED_URL = "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"

interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
  guid: string
  categories?: string[]
  image?: string
}

interface RSSFeed {
  title: string
  description: string
  link: string
  items: RSSItem[]
}

// Helper function to extract content from XML tags
function extractXmlContent(xml: string, tagName: string): string | null {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i')
  const match = xml.match(regex)
  return match ? match[1].trim() : null
}

export async function GET() {
  try {
    // Fetch the RSS feed
    const response = await fetch(RSS_FEED_URL, {
      headers: {
        'User-Agent': 'BravadoHomes/1.0 (https://www.bravadohomes.com)',
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
      // Cache for 24 hours since RSS updates only on weekdays
      next: { revalidate: 86400 }
    })

    if (!response.ok) {
      throw new Error(`RSS feed fetch failed: ${response.status}`)
    }

    const xmlText = await response.text()
    
    // Simple XML parsing using regex (since DOMParser isn't available in Node.js)
    const feed: RSSFeed = {
      title: extractXmlContent(xmlText, 'title') || 'Market Insights',
      description: extractXmlContent(xmlText, 'description') || 'Latest real estate market insights',
      link: extractXmlContent(xmlText, 'link') || 'https://www.bravadohomes.com',
      items: []
    }

    // Extract items using regex
    const itemMatches = xmlText.match(/<item[^>]*>[\s\S]*?<\/item>/gi) || []
    
    itemMatches.forEach((itemXml, index) => {
      const title = extractXmlContent(itemXml, 'title')
      const link = extractXmlContent(itemXml, 'link')
      const description = extractXmlContent(itemXml, 'description')
      const pubDate = extractXmlContent(itemXml, 'pubDate')
      const guid = extractXmlContent(itemXml, 'guid') || link || `item-${index}`
      
      // Extract image from various possible locations
      let image = extractXmlContent(itemXml, 'enclosure') || 
                  extractXmlContent(itemXml, 'media:content') ||
                  extractXmlContent(itemXml, 'media:thumbnail') ||
                  extractXmlContent(itemXml, 'image')
      
      // If no image found, try to extract from description HTML
      if (!image && description) {
        // Try multiple image extraction patterns
        const imgPatterns = [
          /<img[^>]+src="([^"]+)"/i,
          /<img[^>]+src='([^']+)'/i,
          /background-image:\s*url\(['"]?([^'"]+)['"]?\)/i,
          /<figure[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/i
        ]
        
        for (const pattern of imgPatterns) {
          const match = description.match(pattern)
          if (match && match[1]) {
            image = match[1]
            break
          }
        }
      }
      
      // If still no image, try to extract from content field
      if (!image && itemXml.includes('<content:')) {
        const content = extractXmlContent(itemXml, 'content:encoded') || extractXmlContent(itemXml, 'content')
        if (content) {
          const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i)
          if (imgMatch) {
            image = imgMatch[1]
          }
        }
      }
      
      // Clean up image URL if found
      if (image) {
        // Remove any XML tags that might be around the URL
        image = image.replace(/<[^>]*>/g, '').trim()
        // Remove any CDATA wrappers
        image = image.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim()
        // Ensure it's a valid URL
        if (!image.startsWith('http')) {
          image = null
        }
      }
      
      // Extract categories
      const categories: string[] = []
      const categoryMatches = itemXml.match(/<category[^>]*>([^<]*)<\/category>/gi) || []
      categoryMatches.forEach(cat => {
        const categoryText = extractXmlContent(cat, 'category')
        if (categoryText) {
          categories.push(categoryText.trim())
        }
      })

      // Only include items with valid titles and links
      if (title && link) {
        feed.items.push({
          title: title.trim(),
          link: link.trim(),
          description: description?.trim() || '',
          pubDate: pubDate?.trim() || '',
          guid: guid.trim(),
          categories: categories.length > 0 ? categories : undefined,
          image: image?.trim()
        })
      }
    })

    // Limit to 20 most recent items
    feed.items = feed.items.slice(0, 20)

    return NextResponse.json(feed, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800', // 24h cache, 48h stale
        'Content-Type': 'application/json'
      }
    })

  } catch (error) {
    console.error('RSS Feed API Error:', error)
    
    // Return fallback content
    const fallbackFeed: RSSFeed = {
      title: 'Market Insights from Dr. Jan Duffy',
      description: 'Latest real estate market insights for North Las Vegas',
      link: 'https://www.bravadohomes.com',
      items: [
        {
          title: 'North Las Vegas Real Estate Market Update',
          link: 'https://www.bravadohomes.com',
          description: 'Stay informed about the latest trends in North Las Vegas real estate market with insights from Dr. Jan Duffy.',
          pubDate: new Date().toISOString(),
          guid: 'fallback-1'
        },
        {
          title: 'New Home Construction Trends in 2025',
          link: 'https://www.bravadohomes.com',
          description: 'Discover the latest trends in new home construction and what buyers are looking for in 2025.',
          pubDate: new Date().toISOString(),
          guid: 'fallback-2'
        },
        {
          title: 'Bravado Community Market Analysis',
          link: 'https://www.bravadohomes.com',
          description: 'Get expert analysis on the Bravado community market and investment opportunities.',
          pubDate: new Date().toISOString(),
          guid: 'fallback-3'
        }
      ]
    }

    return NextResponse.json(fallbackFeed, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200', // 1h cache for fallback
        'Content-Type': 'application/json'
      }
    })
  }
}