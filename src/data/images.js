// ─────────────────────────────────────────────────────────────────────────
// IMAGE SOURCES — real photography of Shri Kalyan Hotel & Restaurant
// Optimized copies live in /public/images (see scripts/optimize.mjs).
// ─────────────────────────────────────────────────────────────────────────
const p = (name) => `/images/${name}.jpg`

export const IMG = {
  // Exterior / hero
  hero: p('exterior-hero'),        // twilight glass façade, glowing interiors
  heroAlt: p('exterior-dusk'),     // dusk elevation (distinct from sunset)
  exterior: p('exterior-sunset'),
  exteriorDusk: p('exterior-dusk'),

  // Common spaces
  reception: p('reception'),
  lobby: p('lounge-1'),
  lounge2: p('lounge-2'),
  stairLounge: p('stair-lounge'),
  stairCorridor: p('stair-corridor'),

  // Signature corridors (checker floors + botanical murals)
  corridor: p('corridor-1'),
  corridor2: p('corridor-2'),
  corridor3: p('corridor-3'),
  corridor4: p('corridor-4'),

  // Rooms
  executive: p('room-executive'),
  deluxe: p('room-deluxe'),
  superDeluxe: p('room-superdeluxe'),
  bathroom: p('bathroom'),
  roomA: p('room-a'),
  roomB: p('room-b'),
  roomC: p('room-c'),
  roomD: p('room-d'),
  roomE: p('room-e'),
  roomF: p('room-f'),
  roomG: p('room-g'),
  roomH: p('room-h'),
}

// Gallery grid — every supplied photo, curated order
export const GALLERY = [
  { src: p('exterior-hero'), alt: 'Hotel façade at twilight', tag: 'Exterior' },
  { src: p('reception'), alt: 'Reception & lobby', tag: 'Arrival' },
  { src: p('corridor-1'), alt: 'Botanical mural corridor', tag: 'Interiors' },
  { src: p('room-superdeluxe'), alt: 'Super Deluxe room', tag: 'Rooms' },
  { src: p('lounge-1'), alt: 'Garden-view lounge', tag: 'Spaces' },
  { src: p('stair-lounge'), alt: 'Sculptural staircase', tag: 'Architecture' },
  { src: p('room-executive'), alt: 'Executive room', tag: 'Rooms' },
  { src: p('corridor-3'), alt: 'Checkerboard corridor', tag: 'Interiors' },
  { src: p('room-a'), alt: 'Guest room', tag: 'Rooms' },
  { src: p('exterior-sunset'), alt: 'Hotel at sunset', tag: 'Exterior' },
  { src: p('room-b'), alt: 'Twin-view room', tag: 'Rooms' },
  { src: p('bathroom'), alt: 'Modern bathroom', tag: 'Rooms' },
  { src: p('lounge-2'), alt: 'Sunlit seating', tag: 'Spaces' },
  { src: p('room-deluxe'), alt: 'Deluxe room', tag: 'Rooms' },
  { src: p('corridor-2'), alt: 'Mural hallway', tag: 'Interiors' },
  { src: p('room-c'), alt: 'Guest room detail', tag: 'Rooms' },
  { src: p('stair-corridor'), alt: 'Evening corridor', tag: 'Architecture' },
  { src: p('room-d'), alt: 'Room with workspace', tag: 'Rooms' },
  { src: p('corridor-4'), alt: 'Mural gallery hall', tag: 'Interiors' },
  { src: p('room-e'), alt: 'Comfortable bedding', tag: 'Rooms' },
  { src: p('room-f'), alt: 'Bright guest room', tag: 'Rooms' },
  { src: p('room-g'), alt: 'Room with mirror', tag: 'Rooms' },
  { src: p('room-h'), alt: 'Spacious room', tag: 'Rooms' },
]
