import {
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from '../../lib/nearby-amenities'

type AmenityCuratedListProps = {
  activeCategory: AmenityCategoryId
}

export function getCuratedPlacesForCategory(
  categoryId: AmenityCategoryId
): typeof CURATED_NEARBY_PLACES {
  const matches = CURATED_NEARBY_PLACES.filter(
    (p) => p.category === categoryId
  )
  if (matches.length > 0) return matches
  return CURATED_NEARBY_PLACES.filter(
    (p) => p.name !== 'Bravado at Century Communities'
  )
}

export default function AmenityCuratedList({
  activeCategory,
}: AmenityCuratedListProps) {
  const listPlaces = getCuratedPlacesForCategory(activeCategory)

  return (
    <ul
      className="grid gap-3 sm:grid-cols-2"
      aria-label="Curated nearby places"
    >
      {listPlaces.map((place) => (
        <li
          key={`${place.name}-${place.sourceUrl}`}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <h3 className="font-semibold text-gray-900">{place.name}</h3>
          {place.address ? (
            <p className="text-sm text-gray-600">
              {place.address}, {place.city}, {place.state} {place.zip}
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              {place.city}, {place.state} {place.zip}
            </p>
          )}
          {place.note && (
            <p className="mt-1 text-sm text-gray-500">{place.note}</p>
          )}
          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <a
              href={place.sourceUrl}
              className="font-medium text-blue-600 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Official site
            </a>
            {place.address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${place.address}, ${place.city}, ${place.state} ${place.zip}`
                )}`}
                className="font-medium text-blue-600 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Directions
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
