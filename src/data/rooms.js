import { IMG } from './images'

export const ROOMS = [
  {
    id: 'executive',
    name: 'Executive Room',
    tier: 'Comfort',
    image: IMG.executive,
    gallery: [IMG.executive, IMG.roomA, IMG.roomB],
    blurb:
      'A refined, restful retreat for the mindful traveller — thoughtfully appointed with everything you need after a day of darshan.',
    size: '220 sq.ft',
    occupancy: '2 Guests',
    bed: 'Queen Bed',
    features: [
      'Air Conditioning',
      'Free Wi-Fi',
      'LED TV',
      'Hot & Cold Water',
      'Daily Housekeeping',
      'Room Service',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tier: 'Signature',
    image: IMG.deluxe,
    gallery: [IMG.deluxe, IMG.roomC, IMG.roomD],
    blurb:
      'More space, more light and a warmer palette — our most-loved category, balancing elegance with everyday comfort.',
    size: '300 sq.ft',
    occupancy: '2–3 Guests',
    bed: 'King Bed',
    features: [
      'Air Conditioning',
      'Free Wi-Fi',
      'LED TV',
      'Premium Toiletries',
      'Seating Area',
      'Room Service',
    ],
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    tier: 'Premium',
    image: IMG.superDeluxe,
    gallery: [IMG.superDeluxe, IMG.roomE, IMG.roomG],
    blurb:
      'Our finest stay — generous proportions, plush finishes and a serene ambience crafted for families and discerning guests.',
    size: '400 sq.ft',
    occupancy: '3–4 Guests',
    bed: 'King Bed + Sofa',
    features: [
      'Air Conditioning',
      'High-speed Wi-Fi',
      'Smart LED TV',
      'Premium Toiletries',
      'Lounge Seating',
      'Priority Room Service',
    ],
  },
]
