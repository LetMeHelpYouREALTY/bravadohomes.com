/** Minimal Google Maps JS types for the amenity map (full types via skipLibCheck). */
export type GoogleLatLngLiteral = { lat: number; lng: number }

export type GoogleMapsNamespace = {
  maps: {
    Map: new (
      el: HTMLElement,
      opts: Record<string, unknown>
    ) => {
      setCenter: (c: GoogleLatLngLiteral) => void
      fitBounds: (b: unknown) => void
    }
    InfoWindow: new (opts?: Record<string, unknown>) => {
      setContent: (html: string) => void
      open: (opts: { map: unknown; anchor?: unknown }) => void
      close: () => void
    }
    LatLng: new (lat: number, lng: number) => unknown
    LatLngBounds: new () => {
      extend: (ll: GoogleLatLngLiteral) => void
    }
    importLibrary: (name: string) => Promise<Record<string, unknown>>
    marker?: {
      AdvancedMarkerElement: new (opts: Record<string, unknown>) => {
        map: unknown
        position: GoogleLatLngLiteral
        title: string
        addListener: (event: string, fn: () => void) => void
      }
    }
  }
}

declare global {
  interface Window {
    google?: GoogleMapsNamespace
  }
}

export {}
