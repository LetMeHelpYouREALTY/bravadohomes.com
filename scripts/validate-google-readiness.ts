#!/usr/bin/env node
/**
 * Google Readiness Validation Script
 * Validates all technical requirements for Google Search Console and indexing
 */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bravadohomes.com'

const results = []

async function validateUrl(url: string, expectedContent?: string[]): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
      },
    })

    if (!response.ok) {
      return false
    }

    if (expectedContent) {
      const text = await response.text()
      return expectedContent.every((content) => text.includes(content))
    }

    return true
  } catch (error) {
    return false
  }
}

async function runValidations() {
  console.log('🔍 Google Readiness Validation\n')
  console.log(`Testing: ${baseUrl}\n`)

  // 1. Robots.txt
  const robotsUrl = `${baseUrl}/robots.txt`
  const robotsValid = await validateUrl(robotsUrl, [
    'User-agent:',
    'Sitemap:',
    'Googlebot',
  ])
  results.push({
    name: 'Robots.txt',
    status: robotsValid ? '✅ PASS' : '❌ FAIL',
    message: robotsValid
      ? 'Robots.txt is accessible and contains required directives'
      : 'Robots.txt is not accessible or missing required content',
    url: robotsUrl,
  })

  // 2. Sitemap.xml
  const sitemapUrl = `${baseUrl}/sitemap.xml`
  const sitemapValid = await validateUrl(sitemapUrl, ['<urlset', '<url>', '<loc>'])
  results.push({
    name: 'Sitemap.xml',
    status: sitemapValid ? '✅ PASS' : '❌ FAIL',
    message: sitemapValid
      ? 'Sitemap.xml is accessible and properly formatted'
      : 'Sitemap.xml is not accessible or improperly formatted',
    url: sitemapUrl,
  })

  // 3. Homepage
  const homepageValid = await validateUrl(baseUrl)
  results.push({
    name: 'Homepage',
    status: homepageValid ? '✅ PASS' : '❌ FAIL',
    message: homepageValid
      ? 'Homepage is accessible'
      : 'Homepage is not accessible',
    url: baseUrl,
  })

  // 4. HTTPS
  const httpsValid = baseUrl.startsWith('https://')
  results.push({
    name: 'HTTPS',
    status: httpsValid ? '✅ PASS' : '❌ FAIL',
    message: httpsValid
      ? 'Site uses HTTPS'
      : 'Site must use HTTPS for Google indexing',
  })

  // 5. Meta verification (check if env var guidance exists)
  const hasEnvVarGuidance = true // Environment variable setup is documented
  results.push({
    name: 'Google Verification Setup',
    status: hasEnvVarGuidance ? '⚠️  WARN' : '❌ FAIL',
    message: hasEnvVarGuidance
      ? 'Verification code must be added to Vercel environment variables'
      : 'No verification setup found',
  })

  // 6. Critical Pages
  const criticalPages = [
    '/floor-plans',
    '/contact',
    '/models/residence-1792',
    '/about',
  ]
  
  for (const page of criticalPages) {
    const pageUrl = `${baseUrl}${page}`
    const pageValid = await validateUrl(pageUrl)
    results.push({
      name: `Page: ${page}`,
      status: pageValid ? '✅ PASS' : '❌ FAIL',
      message: pageValid
        ? 'Page is accessible'
        : 'Page is not accessible',
      url: pageUrl,
    })
  }

  // Print results
  console.log('\n📊 Validation Results:\n')
  results.forEach((result) => {
    console.log(`${result.status} ${result.name}`)
    console.log(`   ${result.message}`)
    if (result.url) {
      console.log(`   URL: ${result.url}`)
    }
    console.log('')
  })

  // Summary
  const passed = results.filter((r) => r.status === '✅ PASS').length
  const failed = results.filter((r) => r.status === '❌ FAIL').length
  const warnings = results.filter((r) => r.status === '⚠️  WARN').length

  console.log('\n📈 Summary:')
  console.log(`✅ Passed: ${passed}`)
  console.log(`❌ Failed: ${failed}`)
  console.log(`⚠️  Warnings: ${warnings}`)
  console.log(`📊 Total: ${results.length}`)

  if (failed === 0 && warnings === 0) {
    console.log('\n🎉 All validations passed! Site is ready for Google.')
  } else if (failed === 0) {
    console.log('\n✅ Technical setup complete. Address warnings before submitting to Google.')
  } else {
    console.log('\n❌ Please fix failed validations before submitting to Google.')
  }

  // Next steps
  console.log('\n📋 Next Steps:')
  console.log('1. Add Google Search Console verification code to Vercel:')
  console.log('   - Variable: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION')
  console.log('   - Get code from: https://search.google.com/search-console')
  console.log('2. Verify ownership in Google Search Console')
  console.log('3. Submit sitemap: https://bravadohomes.com/sitemap.xml')
  console.log('4. Request indexing for key pages')
  console.log('5. Test with Google Rich Results Test:')
  console.log('   https://search.google.com/test/rich-results')
}

// Run if executed directly
if (require.main === module) {
  runValidations().catch(console.error)
}

export { runValidations, validateUrl }

