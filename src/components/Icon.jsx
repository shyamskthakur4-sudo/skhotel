// Lightweight inline icon set (Lucide-style, 24px stroke grid).
// Use: <Icon name="bed" /> — no emoji anywhere in the UI.
import React from 'react'

const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  bed: (
    <>
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  temple: (
    <>
      <path d="M12 2 4 7v2h16V7z" />
      <path d="M6 9v9" /><path d="M10 9v9" /><path d="M14 9v9" /><path d="M18 9v9" />
      <path d="M3 22h18" /><path d="M4 18h16" />
    </>
  ),
  dining: (
    <>
      <path d="M3 2v7a3 3 0 0 0 6 0V2" /><path d="M6 2v20" />
      <path d="M18 2v20" /><path d="M18 14c2 0 3-1.5 3-4V2c-3 0-3 3-3 6z" />
    </>
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </>
  ),
  banquet: (
    <>
      <path d="M12 3v4" /><path d="M7 21h10" /><path d="M12 17v4" />
      <path d="M4 7h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8z" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="7" r="3" /><circle cx="17" cy="8" r="2.2" />
      <path d="M2 21v-1a6 6 0 0 1 12 0v1" /><path d="M15 21v-1a5 5 0 0 1 7-4.5" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8.5 16a5 5 0 0 1 7 0" />
      <path d="M2 9a15 15 0 0 1 20 0" /><circle cx="12" cy="19.5" r="0.6" fill="currentColor" />
    </>
  ),
  expand: (
    <>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.1a4 4 0 0 1 0 7.75" />
    </>
  ),
}

const MORE = {
  arrowRight: (<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>),
  arrowUpRight: (<><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>),
  arrowUp: (<><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>),
  phone: (<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />),
  mail: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>),
  mapPin: (<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  close: (<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>),
  menu: (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>),
  chevronLeft: (<path d="m15 18-6-6 6-6" />),
  chevronRight: (<path d="m9 18 6-6-6-6" />),
  check: (<path d="M20 6 9 17l-5-5" />),
  sparkle: (<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" />),
  calendar: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /></>),
  star: (<path d="M12 2.5l2.9 6 6.6.6-5 4.3 1.5 6.4L12 16.9 6 19.8l1.5-6.4-5-4.3 6.6-.6z" fill="currentColor" stroke="none" />),
  shield: (<><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" /><path d="m9 12 2 2 4-4" /></>),
  whatsapp: (
    <path
      d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.45-.15-.64.15s-.74.94-.9 1.13c-.17.2-.33.22-.62.08a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6.13-.14.3-.34.44-.5.14-.18.19-.3.29-.5.1-.2.05-.37-.02-.52-.08-.15-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49h-.55a1 1 0 0 0-.76.36 3.1 3.1 0 0 0-.96 2.3c0 1.36.98 2.68 1.12 2.86.14.2 1.95 2.97 4.7 4.16.66.28 1.17.45 1.57.58.66.2 1.26.18 1.74.1.53-.08 1.63-.66 1.86-1.3.23-.65.23-1.2.16-1.32-.07-.11-.26-.18-.55-.32z M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.26A10 10 0 1 0 12 2z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

Object.assign(PATHS, MORE)

export default function Icon({ name, size, className, ...rest }) {
  const content = PATHS[name]
  if (!content) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size || undefined}
      height={size || undefined}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...S}
      {...rest}
    >
      {content}
    </svg>
  )
}
