// 3D pointer-tilt card (Framer Motion). Rotates toward the cursor with spring.
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  max = 10,
  scale = 1.02,
  glare = true,
  style,
  ...rest
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const spring = { stiffness: 150, damping: 18, mass: 0.4 }
  const rX = useSpring(useTransform(my, [0, 1], [max, -max]), spring)
  const rY = useSpring(useTransform(mx, [0, 1], [-max, max]), spring)
  const glareX = useTransform(mx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(my, [0, 1], ['0%', '100%'])
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(220px circle at ${x} ${y}, rgba(255,255,255,0.14), transparent 60%)`,
  )

  function onMove(e) {
    if (reduce) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  function onLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: reduce ? 0 : rX, rotateY: reduce ? 0 : rY, transformPerspective: 1000, ...style }}
      whileHover={reduce ? {} : { scale }}
      transition={{ scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      {...rest}
    >
      {children}
      {glare && !reduce && (
        <motion.span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: glareBg,
            zIndex: 3,
          }}
        />
      )}
    </motion.div>
  )
}
