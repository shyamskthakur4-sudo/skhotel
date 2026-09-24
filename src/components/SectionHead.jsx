import React from 'react'
import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, text, center = false, className = '' }) {
  return (
    <div className={`shead ${center ? 'shead--center' : ''} ${className}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow" y={20} duration={0.6}>
          {eyebrow}
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.06}>
          <h2 className="h2">{title}</h2>
        </Reveal>
      )}
      {text && (
        <Reveal delay={0.12}>
          <p>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
