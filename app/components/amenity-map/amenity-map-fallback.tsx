'use client'

import {
  AMENITY_CATEGORIES,
  BRAVADO_COMMUNITY,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from '../../lib/nearby-amenities'

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
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`

  const filtered =
    activeCategory === 'restaurants'
      ? CURATED_NEARBY_PLACES.filter((p) =>
          ['restaurants', 'shopping'].includes(p.category)
        )
      : CURATED_NEARBY_PLACES.filter((p) => p.category === activeCategory)

  const listPlaces =
    filtered.length > 0
      ? filtered
      : CURATED_NEARBY_PLACES.filter((p) => p.name !== 'Bravado at Century Communities')

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
        Interactive Google Places search appears when{' '}
        <code className="text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> is configured.
        Below is a curated list of verified destinations near Bravado.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2" aria-label="Curated nearby places">
        {listPlaces.map((place) => (
          <li
            key={`${place.name}-${place.address}`}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900">{place.name}</h3>
            <p className="text-sm text-gray-600">
              {place.address}, {place.city}, {place.state} {place.zip}
            </p>
            {place.note && (
              <p className="mt-1 text-sm text-gray-500">{place.note}</p>
            )}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${place.address}, ${place.city}, ${place.state} ${place.zip}`
              )}`}
              className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Directions
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
