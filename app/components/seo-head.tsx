interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  keywords?: string
  zipCode?: string
  noIndex?: boolean
}

export default function SEOHead({
  title = "Bravado Homes by Dr. Jan Duffy | New Homes in North Las Vegas",
  description = "Discover new homes at Bravado in North Las Vegas. Dr. Jan Duffy offers independent buyer guidance on homes from $429,990 (Century Communities, 2026-10-12).",
  canonicalUrl = "https://www.bravadohomes.com",
  ogImage = "https://www.bravadohomes.com/images/bravado/exterior/community-hero.jpg",
  ogType = "website",
  keywords = "Bravado North Las Vegas, new homes Las Vegas, Century Communities, Dr. Jan Duffy, new home construction, buyer representation, luxury homes North Las Vegas, 89031",
  zipCode = "89031",
  noIndex = false
}: SEOHeadProps) {
  return (
    <>
      {/* Essential Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      
      {/* SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="zip" content={zipCode} />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Bravado Homes by Dr. Jan Duffy" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Bravado Community in North Las Vegas" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:zip" content={zipCode} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@DrJanSells" />
      <meta name="twitter:creator" content="@DrJanSells" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-NV" />
      <meta name="geo.placename" content="North Las Vegas" />
      <meta name="geo.position" content="36.1989;-115.1175" />
      <meta name="ICBM" content="36.1989, -115.1175" />
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.subject" content="Real Estate, New Homes, North Las Vegas" />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="North Las Vegas, Nevada" />
      
      {/* Business/Local SEO Meta Tags */}
      <meta name="business:contact_data:locality" content="North Las Vegas" />
      <meta name="business:contact_data:region" content="NV" />
      <meta name="business:contact_data:postal_code" content={zipCode} />
      <meta name="business:contact_data:country_name" content="United States" />
      
      {/* Mobile App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Bravado Homes" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://em.realscout.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  )
}
