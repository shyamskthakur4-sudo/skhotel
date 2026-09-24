// Brand mark — the real Shri Kalyan emblem (transparent PNG),
// with an inline SVG fallback if the image ever fails to load.
import React, { useState } from 'react'

export default function Logo({ size = 46, className, alt = 'Shri Kalyan Hotel' }) {
  const [err, setErr] = useState(false)

  if (err) {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} role="img" aria-label={alt}>
        <circle cx="50" cy="50" r="50" fill="#17130c" />
        <circle cx="50" cy="50" r="37" fill="none" stroke="#f2b01e" strokeWidth="6.5"
          strokeLinecap="round" pathLength="100" strokeDasharray="73 27" transform="rotate(38 50 50)" />
        <text x="51" y="63" fontFamily="Georgia, serif" fontWeight="700" fontSize="34"
          letterSpacing="-1" fill="#f2b01e" textAnchor="middle">SK</text>
      </svg>
    )
  }

  return (
    <img
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain', display: 'block' }}
      onError={() => setErr(true)}
    />
  )
}
