import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Icon from './Icon'

const DATA = [
  {
    text: 'Spotless rooms and so close to the mandir — we walked to darshan in minutes. The staff treated us like family.',
    who: 'Ramesh & Sunita Agarwal',
    role: 'Family Pilgrimage · Jaipur',
  },
  {
    text: 'Booked the Super Deluxe for our group. Comfortable, quiet and the in-house food was fresh and delicious. Highly recommended.',
    who: 'Vikram Singh',
    role: 'Group Traveller · Delhi',
  },
  {
    text: 'A calm, premium place to rest after darshan. Easy parking and a very helpful front desk. We will stay here again.',
    who: 'Anjali Sharma',
    role: 'Leisure Stay · Gurgaon',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  const go = useCallback((n) => setI((p) => (n + DATA.length) % DATA.length), [])

  useEffect(() => {
    if (paused || reduce) return
    const t = setInterval(() => go(i + 1), 5500)
    return () => clearInterval(t)
  }, [i, paused, reduce, go])

  const t = DATA[i]

  return (
    <div
      className="quote"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Guest testimonials"
    >
      <div className="quote__mark" aria-hidden="true">“</div>
      <div style={{ minHeight: 150 }}>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="quote__text">{t.text}</p>
            <div className="quote__who">{t.who}</div>
            <div className="quote__role">{t.role}</div>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="quote__dots" role="tablist">
        <button className="quote__arrow" onClick={() => go(i - 1)} aria-label="Previous testimonial">
          <Icon name="chevronLeft" />
        </button>
        {DATA.map((_, n) => (
          <button
            key={n}
            className={`quote__dot ${n === i ? 'is-active' : ''}`}
            onClick={() => go(n)}
            role="tab"
            aria-selected={n === i}
            aria-label={`Testimonial ${n + 1}`}
          />
        ))}
        <button className="quote__arrow" onClick={() => go(i + 1)} aria-label="Next testimonial">
          <Icon name="chevronRight" />
        </button>
      </div>
    </div>
  )
}
