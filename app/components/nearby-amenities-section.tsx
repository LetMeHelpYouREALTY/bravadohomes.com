import Link from 'next/link'
import AmenityMap from './amenity-map/amenity-map'
import {
  BRAVADO_COMMUNITY,
  NEARBY_AMENITIES_PAGE_PATH,
} from '../lib/nearby-amenities'

type NearbyAmenitiesSectionProps = {
  /** Shorter section for interior pages */
  compact?: boolean
  /** Optional heading override */
  title?: string
}

export default function NearbyAmenitiesSection({
  compact = false,
  title,
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      className={`${compact ? 'mb-12' : 'mb-16'} content-section`}
      aria-labelledby="nearby-amenities-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center md:text-left">
          <h2
            id="nearby-amenities-heading"
            className={`font-bold text-gray-900 ${compact ? 'text-2xl mb-3' : 'text-3xl mb-4'}`}
          >
            {title ?? `Life Near ${BRAVADO_COMMUNITY.name} — What's Nearby`}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">
            Explore restaurants, grocery, parks, healthcare, and more around{' '}
            <strong>{BRAVADO_COMMUNITY.fullName}</strong> at{' '}
            {BRAVADO_COMMUNITY.address}, {BRAVADO_COMMUNITY.city},{' '}
            {BRAVADO_COMMUNITY.state}. Dr. Janet Duffy helps buyers compare
            daily convenience—not just floor plans.
          </p>
          <p className="mt-4">
            <Link
              href={NEARBY_AMENITIES_PAGE_PATH}
              className="font-semibold text-blue-600 hover:underline"
            >
              View full nearby amenities guide →
            </Link>
          </p>
        </div>

        <AmenityMap compact={compact} initialCategory="grocery" />
      </div>
    </section>
  )
}
