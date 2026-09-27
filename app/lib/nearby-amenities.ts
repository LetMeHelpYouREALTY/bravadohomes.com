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

/** Family new-construction community — standard category order per spec */
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
  address: string
  city: string
  state: string
  zip: string
  category: AmenityCategoryId
  schemaType: string
  lat?: number
  lng?: number
  note?: string
}

/**
 * Verified places for fallback UI and JSON-LD ItemList (name + postal address only).
 * Sources: City of North Las Vegas, official venue sites, and Century Communities listing address.
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
    lat: 36.24306,
    lng: -115.14917,
  },
  {
    name: 'Aliante Casino + Hotel',
    address: '7300 Aliante Parkway',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Las Vegas Premium Outlets North',
    address: '875 S Grand Central Parkway',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89106',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
  },
  {
    name: 'Topgolf Las Vegas',
    address: '4600 Nexus Way',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    category: 'restaurants',
    schemaType: 'Restaurant',
    note: 'Entertainment venue with dining',
  },
  {
    name: 'North Vista Hospital',
    address: '1409 E Lake Mead Boulevard',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    address: '657 N Town Center Drive',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89144',
    category: 'healthcare',
    schemaType: 'Hospital',
  },
  {
    name: 'Aliante Golf Club',
    address: '7300 Aliante Parkway',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'golf',
    schemaType: 'GolfCourse',
  },
  {
    name: 'Legacy High School',
    address: '150 W Deer Springs Way',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89084',
    category: 'schools',
    schemaType: 'School',
  },
]

export const NEARBY_AMENITIES_FAQS = [
  {
    question: 'What grocery stores are near Bravado in North Las Vegas?',
    answer:
      'Bravado buyers commonly shop at Smith’s, Walmart Supercenter, and Target within a short drive of the 5060 Wind Springs Street community; use the map on this page to see current grocery options near Bravado.',
  },
  {
    question: 'How far is Bravado from the Las Vegas Strip?',
    answer:
      'From Bravado at 5060 Wind Springs Street, the Las Vegas Strip is approximately 20–25 miles south via I-15, depending on traffic and your destination on the Strip (drive time is approximate).',
  },
  {
    question: 'Are there hospitals near Bravado?',
    answer:
      'Yes — North Vista Hospital in North Las Vegas and Centennial Hills Hospital Medical Center in northwest Las Vegas serve the Bravado area; both are listed on our map and in the healthcare section below.',
  },
  {
    question: 'What parks are close to Bravado homes?',
    answer:
      'Craig Ranch Regional Park — a 170-acre City of North Las Vegas park at 628 W Craig Road — is the signature outdoor amenity near Bravado, with trails, sports fields, and community programming.',
  },
  {
    question: 'How far is Bravado from Harry Reid International Airport?',
    answer:
      'Harry Reid International Airport is roughly 15–20 miles south of Bravado via I-15 and the airport connector roads; allow extra time during peak travel periods (approximate).',
  },
  {
    question: 'Is there golf near Bravado North Las Vegas?',
    answer:
      'Aliante Golf Club on Aliante Parkway in North Las Vegas is one of the well-known public courses north of Bravado, with additional valley courses reachable by car.',
  },
  {
    question: 'What shopping is near the Bravado community?',
    answer:
      'Aliante Casino + Hotel retail and dining, Las Vegas Premium Outlets North, and big-box stores along the Craig Road and Decatur corridors are common destinations for Bravado residents.',
  },
  {
    question: 'Who can help me buy a new home at Bravado?',
    answer:
      'Dr. Janet Duffy is the featured buyer representation specialist for Bravado by Century Communities — call (702) 500-1955 or email DrJanSells@BravadoHomes.com for tours and contract guidance.',
  },
]

export const NEARBY_AMENITIES_PAGE_PATH = '/nearby-amenities'
