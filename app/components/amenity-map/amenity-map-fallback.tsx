'use client'

import {
  AMENITY_CATEGORIES,
  BRAVADO_COMMUNITY,
  type AmenityCategoryId,
} from '../../lib/nearby-amenities'
import AmenityCuratedList from './amenity-curated-list'

type AmenityMapFallbackProps = {
  activeCategory: AmenityCategoryId
  onCategoryChange?: (id: AmenityCategoryId) => void
  showFilters?: boolean
  compact?: boolean
}

export default function AmenityMapFallback({
  activeCategory,
  onCategoryChange,
  showFilters = true,
  compact = false,
}: AmenityMapFallbackProps) {
  const { lat, lng } = BRAVADO_COMMUNITY.center
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`

  return (
    <div className="space-y-4">
      {showFilters && onCategoryChange && (
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter nearby places by category"
        >
          {AMENITY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-label={cat.ariaLabel}
              onClick={() => onCategoryChange(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${
          compact ? 'h-[320px]' : 'h-[420px] md:h-[480px]'
        }`}
        aria-label={`Map centered on ${BRAVADO_COMMUNITY.name}, ${BRAVADO_COMMUNITY.city}`}
      >
        <iframe
          title={`Map of ${BRAVADO_COMMUNITY.name} in ${BRAVADO_COMMUNITY.city}, Nevada`}
          src={embedSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-sm text-gray-600">
        Curated destinations near Bravado with verified addresses and official
        source links. Filter by category to narrow the list.
      </p>

      <AmenityCuratedList activeCategory={activeCategory} />
    </div>
  )
}
