'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AMENITY_CATEGORIES,
  BRAVADO_COMMUNITY,
  type AmenityCategoryId,
} from '../../lib/nearby-amenities'
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from '../../lib/google-maps-loader'
import { searchCategory } from '../../lib/places-search'
import AmenityCuratedList, {
  getCuratedPlacesForCategory,
} from './amenity-curated-list'
import AmenityMapFallback from './amenity-map-fallback'

const MAP_HEIGHT_CLASS = 'h-[420px] md:h-[480px]'
const MAP_HEIGHT_COMPACT = 'h-[320px]'

type MapPlaceResult = {
  id: string
  name: string
  address: string
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

function setInfoWindowContent(
  infoWindow: google.maps.InfoWindow,
  place: MapPlaceResult,
  isCommunity?: boolean
): void {
  const root = document.createElement('div')
  root.className = 'p-1 max-w-[240px]'

  if (isCommunity) {
    const badge = document.createElement('p')
    badge.className = 'text-xs font-semibold text-blue-700 uppercase'
    badge.textContent = 'Bravado Community'
    root.appendChild(badge)
  }

  const title = document.createElement('p')
  title.className = 'font-semibold text-gray-900'
  title.textContent = place.name
  root.appendChild(title)

  if (place.address) {
    const addr = document.createElement('p')
    addr.className = 'text-sm text-gray-600'
    addr.textContent = place.address
    root.appendChild(addr)
  }

  const link = document.createElement('a')
  link.href = place.directionsUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.className = 'text-sm text-blue-600 font-medium'
  link.textContent = 'Directions'
  root.appendChild(link)

  infoWindow.setContent(root)
}

function curatedToMapPlaces(categoryId: AmenityCategoryId): MapPlaceResult[] {
  return getCuratedPlacesForCategory(categoryId)
    .filter((p) => p.lat != null && p.lng != null)
    .map((p, i) => ({
      id: `curated-${categoryId}-${i}`,
      name: p.name,
      address: p.address
        ? `${p.address}, ${p.city}, ${p.state} ${p.zip}`
        : `${p.city}, ${p.state} ${p.zip}`,
      lat: p.lat ?? BRAVADO_COMMUNITY.center.lat,
      lng: p.lng ?? BRAVADO_COMMUNITY.center.lng,
      directionsUrl: p.address
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${p.address}, ${p.city}, ${p.state} ${p.zip}`
          )}`
        : p.sourceUrl,
    }))
}

export default function AmenityMap({
  compact = false,
  initialCategory = 'grocery',
  showFilters = true,
}: AmenityMapProps) {
  const apiKey = getApiKey()
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<
    (google.maps.Marker | google.maps.marker.AdvancedMarkerElement)[]
  >([])
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(initialCategory)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [useFallback, setUseFallback] = useState(
    !apiKey || mapsAuthFailed
  )
  const [loadingPlaces, setLoadingPlaces] = useState(false)
  const [showCuratedList, setShowCuratedList] = useState(false)

  const heightClass = compact ? MAP_HEIGHT_COMPACT : MAP_HEIGHT_CLASS

  useEffect(() => {
    const onAuthFailure = () => setUseFallback(true)
    window.addEventListener('gmaps:auth-failure', onAuthFailure)
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure)
  }, [])

  useEffect(() => {
    if (mapsAuthFailed) setUseFallback(true)
  }, [])

  useEffect(() => {
    const el = mapContainerRef.current
    if (!el || !apiKey || useFallback) return

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
  }, [apiKey, useFallback])

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => {
      if ('map' in m && m.map !== undefined) {
        m.map = null
      }
      if ('setMap' in m && typeof m.setMap === 'function') {
        m.setMap(null)
      }
    })
    markersRef.current = []
  }, [])

  const initMap = useCallback(async () => {
    if (!apiKey || !mapContainerRef.current || mapRef.current || useFallback) {
      return
    }
    if (mapsAuthFailed) {
      setUseFallback(true)
      return
    }
    try {
      await loadGoogleMaps(apiKey)
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
      setUseFallback(true)
    }
  }, [apiKey, useFallback])

  useEffect(() => {
    if (shouldLoad && apiKey && !useFallback) {
      initMap()
    }
  }, [shouldLoad, apiKey, useFallback, initMap])

  const placeMarker = useCallback(
    async (
      map: google.maps.Map,
      position: google.maps.LatLngLiteral,
      title: string,
      onClick: () => void
    ) => {
      const infoWindow = infoWindowRef.current
      if (!infoWindow) return null

      try {
        const markerLib = (await google.maps.importLibrary(
          'marker'
        )) as google.maps.MarkerLibrary
        const mapId = getMapId()
        const { AdvancedMarkerElement, Marker } = markerLib

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
        setInfoWindowContent(infoWindow, {
          id: 'fallback',
          name: title,
          address: '',
          lat: position.lat,
          lng: position.lng,
          directionsUrl: `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`,
        })
        infoWindow.open({ map })
      }
      return null
    },
    []
  )

  const addCommunityMarker = useCallback(async () => {
    const map = mapRef.current
    const infoWindow = infoWindowRef.current
    if (!map || !infoWindow) return

    const center = BRAVADO_COMMUNITY.center
    const communityPlace: MapPlaceResult = {
      id: 'bravado-community',
      name: BRAVADO_COMMUNITY.fullName,
      address: `${BRAVADO_COMMUNITY.address}, ${BRAVADO_COMMUNITY.city}, ${BRAVADO_COMMUNITY.state} ${BRAVADO_COMMUNITY.zip}`,
      lat: center.lat,
      lng: center.lng,
      directionsUrl: `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`,
    }

    const marker = await placeMarker(
      map,
      center,
      BRAVADO_COMMUNITY.name,
      () => {
        setInfoWindowContent(infoWindow, communityPlace, true)
        infoWindow.open({ map, anchor: marker ?? undefined })
      }
    )
    if (marker) markersRef.current.push(marker)
  }, [placeMarker])

  const searchNearby = useCallback(
    async (categoryId: AmenityCategoryId) => {
      const map = mapRef.current
      const infoWindow = infoWindowRef.current
      if (!map || !infoWindow || !mapReady) return

      setLoadingPlaces(true)
      setShowCuratedList(false)
      clearMarkers()
      await addCommunityMarker()

      const category = AMENITY_CATEGORIES.find((c) => c.id === categoryId)
      const bounds = new google.maps.LatLngBounds()
      bounds.extend(BRAVADO_COMMUNITY.center)

      let places: MapPlaceResult[] = []

      try {
        if (category) {
          const rawPlaces = await searchCategory(
            BRAVADO_COMMUNITY.center,
            categoryId,
            category.primaryTypes
          )

          places = rawPlaces.map((p, index) => {
            const loc = p.location
            const lat =
              loc?.lat?.() ??
              loc?.toJSON?.().lat ??
              BRAVADO_COMMUNITY.center.lat
            const lng =
              loc?.lng?.() ??
              loc?.toJSON?.().lng ??
              BRAVADO_COMMUNITY.center.lng
            const name = p.displayName
              ? String(p.displayName)
              : 'Place'
            const address = p.formattedAddress ?? ''
            return {
              id: p.id ?? `place-${index}`,
              name,
              address,
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
        setShowCuratedList(true)
        places = curatedToMapPlaces(categoryId)
      }

      for (const place of places) {
        bounds.extend({ lat: place.lat, lng: place.lng })
        const marker = await placeMarker(
          map,
          { lat: place.lat, lng: place.lng },
          place.name,
          () => {
            setInfoWindowContent(infoWindow, place)
            infoWindow.open({ map, anchor: marker ?? undefined })
          }
        )
        if (marker) markersRef.current.push(marker)
      }

      if (places.length > 0) {
        map.fitBounds(bounds)
      }

      setLoadingPlaces(false)
    },
    [addCommunityMarker, clearMarkers, mapReady, placeMarker]
  )

  useEffect(() => {
    if (mapReady && !useFallback) {
      searchNearby(activeCategory)
    }
  }, [mapReady, activeCategory, searchNearby, useFallback])

  if (!apiKey || useFallback) {
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

      {showCuratedList && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Live search is unavailable for this category. Showing verified
            nearby places:
          </p>
          <AmenityCuratedList activeCategory={activeCategory} />
        </div>
      )}
    </div>
  )
}
