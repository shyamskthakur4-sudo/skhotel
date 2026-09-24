import { SITE } from '../data/site'

// Build a WhatsApp deep link with a pre-filled inquiry message.
export function buildWhatsAppLink(data = {}) {
  const {
    name = '',
    phone = '',
    email = '',
    checkIn = '',
    checkOut = '',
    guests = '',
    roomType = '',
    message = '',
  } = data

  const lines = [
    `*New Enquiry — ${SITE.name}*`,
    '',
    name && `Name: ${name}`,
    phone && `Phone: ${phone}`,
    email && `Email: ${email}`,
    roomType && `Room: ${roomType}`,
    (checkIn || checkOut) && `Dates: ${checkIn || '—'} to ${checkOut || '—'}`,
    guests && `Guests: ${guests}`,
    message && `Message: ${message}`,
    '',
    'Please share availability & tariff. Thank you!',
  ].filter(Boolean)

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${SITE.phoneIntl}?text=${text}`
}

// Simple "message us" link with a light default text.
export function quickWhatsAppLink(preset) {
  const text = encodeURIComponent(
    preset || `Hello ${SITE.name}, I'd like to know about room availability.`,
  )
  return `https://wa.me/${SITE.phoneIntl}?text=${text}`
}
