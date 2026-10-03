import { IMG } from './images'

export const ROOMS = [
  {
    id: 'executive',
    name: 'Executive Room',
    tier: 'Comfort',
    image: IMG.executiveNew1,
    gallery: [IMG.executiveNew1, IMG.executiveNew2, IMG.executiveNew3],
    blurb:
      'Our finest stay — generous proportions, plush finishes and a serene ambience crafted for families and discerning guests.',
    size: '400 sq.ft',
    occupancy: '2 Guests',
    bed: 'King Size Bed',
    price: '₹4,000 + GST',
    features: [
      'Air Conditioning',
      'High-speed Wi-Fi',
      'Smart LED TV',
      'Premium Toiletries',
      'Priority Room Service',
      'Car Parking Available',
    ],
  },
  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    tier: 'Premium',
    image: IMG.deluxe,
    gallery: [IMG.deluxe, IMG.roomC, IMG.roomD],
    blurb:
      'More space, more light and a warmer palette — our most-loved category, balancing elegance with everyday comfort.',
    size: '300 sq.ft',
    occupancy: '2 Guests',
    bed: 'King Size Bed',
    price: '₹3,000 + GST',
    features: [
      'Air Conditioning',
      'Free Wi-Fi',
      'LED TV',
      'Premium Toiletries',
      'Seating Area',
      'Room Service',
      'Car Parking Available',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tier: 'Signature',
    image: IMG.deluxeNew1,
    gallery: [IMG.deluxeNew1, IMG.deluxeNew2, IMG.deluxeNew3],
    blurb:
      'A refined, restful retreat for the mindful traveller — thoughtfully appointed with everything you need after a day of darshan.',
    size: '220 sq.ft',
    occupancy: '2 Guests',
    bed: 'King Size Bed',
    price: '₹2,500 + GST',
    features: [
      'Air Conditioning',
      'Free Wi-Fi',
      'LED TV',
      'Hot & Cold Water',
      'Daily Housekeeping',
      'Room Service',
      'Car Parking Available',
    ],
  },
]
