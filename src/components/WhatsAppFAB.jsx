import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'
import { quickWhatsAppLink } from '../lib/whatsapp'

export default function WhatsAppFAB() {
  const reduce = useReducedMotion()
  return (
    <motion.a
      href={quickWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="wa-fab"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <Icon name="whatsapp" />
      {!reduce && (
        <motion.span
          className="wa-fab__pulse"
          aria-hidden="true"
          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </motion.a>
  )
}
