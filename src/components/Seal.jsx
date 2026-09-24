// Rotating circular seal — brand emblem ringed by repeating text.
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'

export default function Seal({ size = 116, text = 'SHRI KALYAN • KHATU SHYAM JI • ', className = '' }) {
  const reduce = useReducedMotion()
  return (
    <div className={`seal ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <motion.svg
        className="seal__ring"
        viewBox="0 0 100 100"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <path id="sealPath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text>
          <textPath href="#sealPath" startOffset="0">{text.repeat(2)}</textPath>
        </text>
      </motion.svg>
      <Logo size={Math.round(size * 0.52)} className="seal__logo" />
    </div>
  )
}
