'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  BRAVADO_COMMUNITY,
  CURATED_NEARBY_PLACES,
  type AmenityCategoryId,
} from '../../lib/nearby-amenities'
import AmenityMapFallback from './amenity-map-fallback'

const MAP_HEIGHT_CLASS = 'h-[420px] md:h-[480px]'
const MAP_HEIGHT_COMPACT = 'h-[320px]'

type MapPlaceResult = {
  id: string
  name: string
  address: string
  rating?: number
  lat: number
  lng: number
  directionsUrl: string
}

type AmenityMapProps = {
  compact?: boolean
  initialCategory?: AmenityCategoryId
  showFilters?: boolean
}

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined
}

function getMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('window unavailable'))
      return
    }
    if (window.google?.maps) {
      resolve()
      return
    }
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-amenity-google-maps]'
    )
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () =>
        reject(new Error('Google Maps script failed'))
      )
      return
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&loading=async&libraries=places,marker`
    script.async = true
    script.defer = true
    script.dataset.amenityGoogleMaps = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Google Maps script failed'))
    document.head.appendChild(script)
  })
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildInfoContent(place: MapPlaceResult, isCommunity?: boolean): string {
  const rating =
    place.rating != null
      ? `<p class="text-sm text-gray-600">Rating: ${place.rating.toFixed(1)}</p>`
      : ''
  const badge = isCommunity
    ? '<p class="text-xs font-semibold text-blue-700 uppercase">Bravado Community</p>'
    : ''
  return `<div class="p-1 max-w-[240px]">
    ${badge}
    <p class="font-semibold text-gray-900">${escapeHtml(place.name)}</p>
    <p class="text-sm text-gray-600">${escapeHtml(place.address)}</p>
    ${rating}
    <a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-blue-600 font-medium">Directions</a>
  </div>`
}

export default function AmenityMap({
  compact = false,
  initialCategory = 'grocery',
  showFilters = true,
}: AmenityMapProps) {
  const apiKey = getApiKey()
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)
  const markersRef = useRef<unknown[]>([])
  const infoWindowRef = useRef<unknown>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [loadFailed, setLoadFailed] = useState(!apiKey)
  const [loadingPlaces, setLoadingPlaces] = useState(false)

  const heightClass = compact ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_CLASS

  useEffect(() => {
    const el = mapContainerRef.current
    if (!el || !apiKey) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true)
          observerRef.current?.disconnect()
        }
      },
      { rootMargin: '120px' }
    )
    observerRef.current.observe(el)
    return () => observerRef.current?.disconnect()
  }, [apiKey])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => {
      const marker = m as { map?: unknown }
      marker.map = null
    })
    markersRef.current = []
  }, [])

  const initMap = useCallback(async () => {
    if (!apiKey || !mapContainerRef.current || mapRef.current) return
    try {
      await loadGoogleMapsScript(apiKey)
      const google = window.google
      if (!google?.maps) {
        setLoadFailed(true)
        return
      }

      const center = BRAVADO_COMMUNITY.center
      const mapId = getMapId()
      const map = new google.maps.Map(mapContainerRef.current, {
        center,
        zoom: 13,
        mapId: mapId || undefined,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      })
      mapRef.current = map
      infoWindowRef.current = new google.maps.InfoWindow()
      setMapReady(true)
    } catch {
      setLoadFailed(true)
    }
  }, [apiKey])

  useEffect(() => {
    if (shouldLoad && apiKey && !loadFailed) {
      initMap()
    }
  }, [shouldLoad, apiKey, loadFailed, initMap])

  const placeMarker = useCallback(
    async (
      map: unknown,
      position: { lat: number; lng: number },
      title: string,
      onClick: () => void
    ) => {
      const google = window.google
      if (!google?.maps) return null

      const infoWindow = infoWindowRef.current as {
        setContent: (h: string) => void
        open: (o: { map: unknown; anchor?: unknown }) => void
      }

      try {
        const markerLib = await google.maps.importLibrary('marker')
        const mapId = getMapId()
        const AdvancedMarkerElement = markerLib.AdvancedMarkerElement as
          | (new (opts: Record<string, unknown>) => {
              addListener: (e: string, fn: () => void) => void
            })
          | undefined
        const Marker = markerLib.Marker as
          | (new (opts: Record<string, unknown>) => {
              addListener: (e: string, fn: () => void) => void
            })
          | undefined

        if (mapId && AdvancedMarkerElement) {
          const marker = new AdvancedMarkerElement({
            map,
            position,
            title,
          })
          marker.addListener('click', onClick)
          return marker
        }
        if (Marker) {
          const marker = new Marker({ map, position, title })
          marker.addListener('click', onClick)
          return marker
        }
      } catch {
        infoWindow.setContent(`<p class="p-2">${escapeHtml(title)}</p>`)
        infoWindow.open({ map })
      }
      return null
    },
    []
  )

  const addCommunityMarker = useCallback(async () => {
    const map = mapRef.current
    if (!map) return

    const center = BRAVADO_COMMUNITY.center
    const communityPlace: MapPlaceResult = {
      id: 'bravado-community',
      name: BRAVADO_COMMUNITY.fullName,
      address: `${BRAVADO_COMMUNITY.address}, ${BRAVADO_COMMUNITY.city}, ${BRAVADO_COMMUNITY.state} ${BRAVADO_COMMUNITY.zip}`,
      lat: center.lat,
      lng: center.lng,
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`,
    }

    const infoWindow = infoWindowRef.current as {
      setContent: (h: string) => void
      open: (o: { map: unknown; anchor?: unknown }) => void
    }

    const marker = await placeMarker(
      map,
      center,
      BRAVADO_COMMUNITY.name,
      () => {
        infoWindow.setContent(buildInfoContent(communityPlace, true))
        infoWindow.open({ map, anchor: marker ?? undefined })
      }
    )
    if (marker) markersRef.current.push(marker)
  }, [placeMarker])

  const searchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const google = window.google
      const map = mapRef.current
      if (!google?.maps || !map || !mapReady) return

      setLoadingPlaces(true)
      clearMarkers()
      await addCommunityMarker()

      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId)
      const curated = CURATED_NEARBY_PLACES.filter(
        (p) => p.category === categoryId && p.lat != null && p.lng != null
      )

      const infoWindow = infoWindowRef.current as {
        setContent: (h: string) => void
        open: (o: { map: unknown; anchor?: unknown }) => void
      }

      const bounds = new google.maps.LatLngBounds()
      bounds.extend(BRAVADO_COMMUNITY.center)

      let places: MapPlaceResult[] = []

      try {
        const placesLib = await google.maps.importLibrary('places')
        const Place = placesLib.Place as {
          searchNearby: (req: Record<string, unknown>) => Promise<{
            places: Array<{
              id?: string
              displayName?: string
              formattedAddress?: string
              rating?: number
              location?: { lat: () => number; lng: () => number }
              googleMapsURI?: string
            }>
          }>
        }
        const SearchNearbyRankPreference = placesLib
          .SearchNearbyRankPreference as { POPULARITY: string }

        if (Place?.searchNearby && category) {
          const { places: rawPlaces } = await Place.searchNearby({
            fields: [
              'displayName',
              'location',
              'formattedAddress',
              'rating',
              'googleMapsURI',
              'id',
            ],
            locationRestriction: {
              center: BRAVADO_COMMUNITY.center,
              radius: 12000,
            },
            includedPrimaryTypes: category.primaryTypes,
            maxResultCount: 15,
            rankPreference: SearchNearbyRankPreference?.POPULARITY ?? 'POPULARITY',
          })

          places = (rawPlaces || []).map((p, index) => {
            const lat = p.location?.lat?.() ?? BRAVADO_COMMUNITY.center.lat
            const lng = p.location?.lng?.() ?? BRAVADO_COMMUNITY.center.lng
            const name = p.displayName ?? 'Place'
            const address = p.formattedAddress ?? ''
            return {
              id: p.id ?? `place-${index}`,
              name,
              address,
              rating: p.rating,
              lat,
              lng,
              directionsUrl:
                p.googleMapsURI ??
                `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
            }
          })
        }
      } catch {
        places = []
      }

      if (places.length === 0) {
        places = curated.map((p, i) => ({
          id: `curated-${i}`,
          name: p.name,
          address: `${p.address}, ${p.city}, ${p.state} ${p.zip}`,
          lat: p.lat ?? BRAVADO_COMMUNITY.center.lat,
          lng: p.lng ?? BRAVADO_COMMUNITY.center.lng,
          directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${p.address}, ${p.city}, ${p.state} ${p.zip}`
          )}`,
        }))
      }

      for (const place of places) {
        bounds.extend({ lat: place.lat, lng: place.lng })
        const marker = await placeMarker(
          map,
          { lat: place.lat, lng: place.lng },
          place.name,
          () => {
            infoWindow.setContent(buildInfoContent(place))
            infoWindow.open({ map, anchor: marker ?? undefined })
          }
        )
        if (marker) markersRef.current.push(marker)
      }

      const mapInstance = map as { fitBounds: (b: unknown) => void }
      if (places.length > 0) {
        mapInstance.fitBounds(bounds)
      }

      setLoadingPlaces(false)
    },
    [addCommunityMarker, clearMarkers, mapReady, placeMarker]
  )

  useEffect(() => {
    if (mapReady) {
      searchNearby(activeCategory)
    }
  }, [mapReady, activeCategory, searchNearby])

  if (!apiKey || loadFailed) {
    return (
      <AmenityMapFallback
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        showFilters={showFilters}
        compact={compact}
      />
    )
  }

  return (
    <div className="space-y-4">
      {showFilters && (
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
              onClick={() => setActiveCategory(cat.id)}
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

      <div className="relative">
        <div
          ref={mapContainerRef}
          className={`w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 ${heightClass}`}
          role="application"
          aria-label={`Interactive map of places near ${BRAVADO_COMMUNITY.name} in ${BRAVADO_COMMUNITY.city}`}
        />
        {(loadingPlaces || !shouldLoad) && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-white/60 text-sm font-medium text-gray-700"
            aria-live="polite"
          >
            {!shouldLoad ? 'Map loads as you scroll…' : 'Updating places…'}
          </div>
        )}
      </div>
    </div>
  )
}
