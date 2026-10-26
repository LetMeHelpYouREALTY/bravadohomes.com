/** Calendly scheduling URLs used on bravadohomes.com (must match org-wide allowed events). */
export const CALENDLY_LISTING_CONSULTATION =
  'https://calendly.com/drjanduffy/listing-consultation'

const SITE_UTM_SOURCE = 'bravadohomes.com'

/**
 * Listing-consultation URL with UTM tags for FUB attribution.
 * @param placement - value for utm_content (e.g. seller-page-inline)
 */
export function listingConsultationUrl(placement: string): string {
  const url = new URL(CALENDLY_LISTING_CONSULTATION)
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('utm_source', SITE_UTM_SOURCE)
  url.searchParams.set('utm_medium', 'website')
  url.searchParams.set('utm_content', placement)
  return url.toString()
}
