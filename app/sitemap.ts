import { getBlogPosts } from 'app/blog/utils'
import { headers } from 'next/headers'
import { getCurrentDomainConfig } from './utils/domain'

export default async function sitemap() {
  // Get domain-specific configuration
  const headersList = await headers()
  const config = getCurrentDomainConfig({ headers: headersList })
  const baseUrl = config.baseUrl
  
  // Safely get blog posts with error handling
  let blogs: Array<{ url: string; lastModified: string }> = []
  try {
    const posts = getBlogPosts()
    blogs = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  } catch (error) {
    // If blog posts can't be loaded, continue without them
    // This prevents the sitemap from crashing the entire site
    console.error('Error loading blog posts for sitemap:', error)
  }

  // All main pages with priority and change frequency - optimized for landing page structure
  let routes = [
    // Core pages (highest priority - main conversion pages)
    { route: '', priority: 1.0, changefreq: 'daily' },
    { route: '/floor-plans', priority: 0.95, changefreq: 'daily' },
    { route: '/contact', priority: 0.95, changefreq: 'daily' },
    
    // High-priority model pages (main product pages)
    { route: '/models/residence-1792', priority: 0.9, changefreq: 'weekly' },
    { route: '/models/residence-1943', priority: 0.9, changefreq: 'weekly' },
    { route: '/models/residence-2119', priority: 0.9, changefreq: 'weekly' },
    
    // Important supporting pages
    { route: '/community', priority: 0.85, changefreq: 'weekly' },
    { route: '/location', priority: 0.85, changefreq: 'weekly' },
    { route: '/nearby-amenities', priority: 0.85, changefreq: 'weekly' },
    { route: '/reviews', priority: 0.85, changefreq: 'weekly' },
    { route: '/lennar-vs-century-communities', priority: 0.8, changefreq: 'monthly' },
    { route: '/about', priority: 0.8, changefreq: 'monthly' },
    
    // Service and informational pages
    { route: '/services', priority: 0.75, changefreq: 'weekly' },
    { route: '/services/home-buying-process', priority: 0.7, changefreq: 'monthly' },
    { route: '/amenities', priority: 0.7, changefreq: 'monthly' },
    { route: '/smart-home-technology', priority: 0.7, changefreq: 'monthly' },
    { route: '/smart-home-technology/automation-guide', priority: 0.7, changefreq: 'monthly' },
    
    // SEO landing pages (if they exist)
    { route: '/north-las-vegas-homes', priority: 0.8, changefreq: 'weekly' },
    { route: '/new-homes-las-vegas', priority: 0.75, changefreq: 'weekly' },
    { route: '/north-las-vegas-neighborhoods', priority: 0.7, changefreq: 'weekly' },
    { route: '/century-communities', priority: 0.7, changefreq: 'weekly' },
    { route: '/new-home-construction', priority: 0.7, changefreq: 'monthly' },
    { route: '/century-communities/builder-quality', priority: 0.7, changefreq: 'monthly' },
    { route: '/buyer-representation', priority: 0.7, changefreq: 'monthly' },
    { route: '/buyer-representation/benefits', priority: 0.7, changefreq: 'monthly' },
    { route: '/financing-incentives', priority: 0.6, changefreq: 'monthly' },
    
    // GEO Strategy: Buyer-type pages (high priority for AI visibility)
    { route: '/buyers/55-plus', priority: 0.85, changefreq: 'weekly' },
    { route: '/buyers/first-time', priority: 0.85, changefreq: 'weekly' },
    { route: '/buyers/first-time/steps-guide', priority: 0.75, changefreq: 'monthly' },
    { route: '/buyers/divorce', priority: 0.85, changefreq: 'weekly' },
    { route: '/buyers/investors', priority: 0.85, changefreq: 'weekly' },
    { route: '/buyers/investors/roi-guide', priority: 0.75, changefreq: 'monthly' },
    
    // E-E-A-T: Authority building pages
    { route: '/transparency', priority: 0.8, changefreq: 'monthly' },
    { route: '/case-studies', priority: 0.75, changefreq: 'weekly' },
    { route: '/research', priority: 0.75, changefreq: 'weekly' },
    
    // Neighborhood hubs (hyper-local content)
    { route: '/neighborhoods/summerlin', priority: 0.8, changefreq: 'weekly' },
    { route: '/neighborhoods/henderson', priority: 0.8, changefreq: 'weekly' },
    { route: '/neighborhoods/centennial-hills', priority: 0.8, changefreq: 'weekly' },
    
    // Blog pages (medium priority)
    { route: '/blog', priority: 0.6, changefreq: 'weekly' },
  ].map(({ route, priority, changefreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority,
    changefreq,
  }))

  // Add blog posts with lower priority
  let blogPosts = blogs.map((blog) => ({
    ...blog,
    priority: 0.5,
    changefreq: 'monthly',
  }))

  return [...routes, ...blogPosts]
}
