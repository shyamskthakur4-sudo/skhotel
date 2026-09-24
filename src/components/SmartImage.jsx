// Image with shimmer skeleton + graceful fallback if a URL fails.
import React, { useState } from 'react'
import Icon from './Icon'

export default function SmartImage({ src, alt = '', className = '', eager = false, ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`img ${className}`} data-loaded={loaded} {...rest}>
      {!loaded && !error && <div className="img__skeleton" aria-hidden="true" />}
      {error ? (
        <div className="img__fallback" role="img" aria-label={alt}>
          <Icon name="sparkle" size={40} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}
