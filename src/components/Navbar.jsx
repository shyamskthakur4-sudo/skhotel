import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icon'
import { NAV, SITE } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav__inner">
          <Link to="/" className="nav__brand" aria-label={SITE.name}>
            <Logo size={44} className="nav__brand-mark" />
            <span className="nav__brand-text">
              <span className="nav__brand-name">Shri Kalyan</span>
              <span className="nav__brand-sub">Hotel &amp; Restaurant</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn--gold nav__cta">
            Book Your Stay
            <Icon name="arrowRight" />
          </Link>

          <button
            className="nav__burger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="lightbox__close"
              aria-label="Close menu"
              autoFocus
              onClick={() => setOpen(false)}
            >
              <Icon name="close" />
            </button>
            {NAV.map((n, i) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.07 }}
              >
                <NavLink to={n.to} end={n.to === '/'} className="drawer__link">
                  {n.label}
                  <span className="idx">0{i + 1}</span>
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: 24 }}
            >
              <Link to="/contact" className="btn btn--gold">
                Book Your Stay
                <Icon name="arrowRight" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
