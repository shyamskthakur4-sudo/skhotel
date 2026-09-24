import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Seamless infinite marquee (duplicated track). `ink` = dark variant.
export default function Marquee({ items = [], duration = 30, reverse = false, ink = false }) {
  const reduce = useReducedMotion()
  const loop = reduce ? items : [...items, ...items]
  return (
    <div className={`marquee ${ink ? 'marquee--ink' : ''}`} aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={reduce ? {} : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={reduce ? {} : { duration, ease: 'linear', repeat: Infinity }}
        style={reduce ? { flexWrap: 'wrap', justifyContent: 'center' } : undefined}
      >
        {loop.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <img className="dot" src="/logo.png" alt="" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
