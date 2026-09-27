/**
 * Hyperlocal amenity map configuration for Bravado (bravadohomes.com).
 * Center coordinates match domains-config.ts (5060 Wind Springs Street sales office).
 */

export const BRAVADO_COMMUNITY = {
  name: 'Bravado',
  fullName: 'Bravado by Century Communities',
  city: 'North Las Vegas',
  state: 'NV',
  zip: '89031',
  address: '5060 Wind Springs Street',
  /** Sales office / community center — aligned with Google Maps pin for the Bravado model homes */
  center: {
    lat: 36.253435600755466,
    lng: -115.13597331838079,
  },
} as const

export type AmenityCategoryId =
  | 'restaurants'
  | 'cafes'
  | 'grocery'
  | 'parks'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'parking'
  | 'fitness'
  | 'schools'

export type AmenityCategory = {
  id: AmenityCategoryId
  label: string
  /** Places API (New) primary types for searchNearby */
  primaryTypes: string[]
  ariaLabel: string
}

/** New-construction community — standard category order per spec */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    primaryTypes: ['restaurant'],
    ariaLabel: 'Show restaurants near Bravado',
  },
  {
    id: 'cafes',
    label: 'Cafes',
    primaryTypes: ['cafe', 'coffee_shop'],
    ariaLabel: 'Show cafes near Bravado',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    primaryTypes: ['grocery_store', 'supermarket'],
    ariaLabel: 'Show grocery stores near Bravado',
  },
  {
    id: 'parks',
    label: 'Parks',
    primaryTypes: ['park'],
    ariaLabel: 'Show parks near Bravado',
  },
  {
    id: 'golf',
    label: 'Golf',
    primaryTypes: ['golf_course'],
    ariaLabel: 'Show golf courses near Bravado',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    primaryTypes: ['hospital', 'doctor'],
    ariaLabel: 'Show healthcare near Bravado',
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    primaryTypes: ['pharmacy'],
    ariaLabel: 'Show pharmacies near Bravado',
  },
  {
    id: 'shopping',
    label: 'Shopping',
    primaryTypes: ['shopping_mall', 'department_store'],
    ariaLabel: 'Show shopping near Bravado',
  },
  {
    id: 'parking',
    label: 'Parking',
    primaryTypes: ['parking'],
    ariaLabel: 'Show parking near Bravado',
  },
  {
    id: 'fitness',
    label: 'Fitness',
    primaryTypes: ['gym'],
    ariaLabel: 'Show fitness centers near Bravado',
  },
  {
    id: 'schools',
    label: 'Schools',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
    ariaLabel: 'Show schools near Bravado',
  },
]

export type CuratedPlace = {
  name: string
  /** Omit from JSON-LD when not verified against sourceUrl */
  address?: string
  city: string
  state: string
  zip: string
  category: AmenityCategoryId
  schemaType: string
  sourceUrl: string
  lat?: number
  lng?: number
  note?: string
}

/**
 * Verified places for fallback UI and JSON-LD ItemList.
 * Each entry includes an official sourceUrl used to confirm name and address.
 */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Bravado at Century Communities',
    address: '5060 Wind Springs Street',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89031',
    category: 'parks',
    schemaType: 'Place',
    sourceUrl:
      'https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/north-las-vegas/bravado/',
    lat: BRAVADO_COMMUNITY.center.lat,
    lng: BRAVADO_COMMUNITY.center.lng,
    note: 'Gated new-home community and model home sales office',
  },
  {
    name: 'Craig Ranch Regional Park',
    address: '628 W Craig Road',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89032',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl:
      'https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/craig-ranch-regional-park',
    lat: 36.24306,
    lng: -115.14917,
    note: '170-acre City of North Las Vegas regional park',
  },
  {
    name: "Smith's Food and Drug",
    address: '3013 W Craig Road',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89032',
    category: 'grocery',
    schemaType: 'GroceryStore',
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/details/703/03013',
  },
  {
    name: 'Aliante Casino + Hotel',
    address: '7300 North Aliante Parkway',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl: 'https://aliante.boydgaming.com/',
    note: 'Dining, retail, and entertainment in the Aliante master plan',
  },
  {
    name: 'Las Vegas North Premium Outlets',
    address: '875 S Grand Central Parkway',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89106',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    sourceUrl:
      'https://www.premiumoutlets.com/outlet/las-vegas-north',
    note: 'Regional outlet shopping north of the Strip corridor',
  },
  {
    name: 'North Vista Hospital',
    address: '1409 E Lake Mead Boulevard',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl: 'https://northvistahospital.com/contact-us/',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    address: '6900 North Durango Drive',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89149',
    category: 'healthcare',
    schemaType: 'Hospital',
    sourceUrl:
      'https://www.centennialhillshospital.com/patients-visitors/maps-directions',
    note: 'Northwest valley hospital serving the greater Las Vegas area',
  },
  {
    name: 'Aliante Golf Club',
    address: '3100 West Elkhorn Road',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'golf',
    schemaType: 'GolfCourse',
    sourceUrl: 'https://www.aliantegolf.com/book-tee-times/',
  },
  {
    name: 'Legacy High School',
    address: '150 W Deer Springs Way',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'schools',
    schemaType: 'School',
    sourceUrl: 'https://www.legacyhigh.net/',
  },
]

export const NEARBY_AMENITIES_FAQS = [
  {
    question: 'What grocery stores are near Bravado in North Las Vegas?',
    answer:
      "Smith's Food and Drug at 3013 W Craig Road is one of the closest full-service grocers to Bravado at 5060 Wind Springs Street. Use the map on this page to explore additional grocery options near the community.",
  },
  {
    question: 'How far is Bravado from the Las Vegas Strip?',
    answer:
      'From Bravado at 5060 Wind Springs Street, the Las Vegas Strip is approximately 20–25 miles south via I-15, depending on traffic and your destination on the Strip (drive time is approximate).',
  },
  {
    question: 'Are there hospitals near Bravado?',
    answer:
      'North Vista Hospital on E Lake Mead Boulevard in North Las Vegas serves the immediate area. Centennial Hills Hospital Medical Center on N Durango Drive in northwest Las Vegas is another major option listed on our map.',
  },
  {
    question: 'What parks are close to Bravado homes?',
    answer:
      'Craig Ranch Regional Park — a 170-acre City of North Las Vegas park at 628 W Craig Road — is the anchor outdoor amenity near Bravado, with trails, sports fields, and community programming.',
  },
  {
    question: 'How far is Bravado from Harry Reid International Airport?',
    answer:
      'Harry Reid International Airport is roughly 15–20 miles south of Bravado via I-15 and the airport connector roads; allow extra time during peak travel periods (approximate).',
  },
  {
    question: 'Is there golf near Bravado North Las Vegas?',
    answer:
      'Aliante Golf Club at 3100 West Elkhorn Road in North Las Vegas is a public course in the Aliante area north of Bravado, with additional valley courses reachable by car.',
  },
  {
    question: 'What shopping is near the Bravado community?',
    answer:
      'Aliante Casino + Hotel retail and dining on North Aliante Parkway and Las Vegas North Premium Outlets on S Grand Central Parkway are common regional shopping destinations for Bravado residents.',
  },
  {
    question: 'Which CCSD schools are assigned to Bravado addresses?',
    answer:
      'School assignments depend on your exact lot and CCSD boundaries. Verify current zoning with the CCSD Zoning Search before you buy. Legacy High School at 150 W Deer Springs Way is one CCSD high school serving parts of the north valley.',
  },
  {
    question: 'Who can help me buy a new home at Bravado?',
    answer:
      'Dr. Janet Duffy is the featured buyer representation specialist for Bravado by Century Communities — call (702) 500-1955 or email DrJanSells@BravadoHomes.com for tours and contract guidance.',
  },
]

export const NEARBY_AMENITIES_PAGE_PATH = '/nearby-amenities'
