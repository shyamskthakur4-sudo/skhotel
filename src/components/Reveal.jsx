// Scroll-reveal wrapper (Framer Motion). Fades + rises into view once.
// Honors prefers-reduced-motion (renders static, fully visible).
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  y = 40,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.25,
  as = 'div',
  ...rest
}) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  if (reduce) {
    return <M {...rest}>{children}</M>
  }
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

// Staggered container + item helpers for lists/grids.
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 46 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}
