import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { GALLERY, IMG } from '../data/images'

const TABS = ['All', ...Array.from(new Set(GALLERY.map((g) => g.tag)))]

// Deterministic editorial mosaic: one featured tile + a rhythm of tall/wide.
const spanClass = (i) => {
  if (i === 0) return 'gallery__item--big'
  const m = i % 6
  if (m === 2) return 'gallery__item--tall'
  if (m === 4) return 'gallery__item--wide'
  return ''
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null) // index into `shown`

  const shown = useMemo(
    () => (filter === 'All' ? GALLERY : GALLERY.filter((g) => g.tag === filter)),
    [filter],
  )

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (d) => setActive((p) => (p === null ? p : (p + d + shown.length) % shown.length)),
    [shown.length],
  )

  useEffect(() => setActive(null), [filter])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <PageShell>
      <section className="phero phero--vivid">
        <div className="phero__bg"><SmartImage src={IMG.corridor} alt="" eager /></div>
        <div className="container phero__inner">
          <div className="phero__crumb"><Link to="/">Home</Link> / Gallery</div>
          <Reveal delay={0.06}><span className="eyebrow">A Visual Tour</span></Reveal>
          <Reveal delay={0.1}><h1>Gallery</h1></Reveal>
          <Reveal delay={0.16}>
            <p>Rooms, mural corridors and sunlit spaces — the calm, comfortable world of Shri Kalyan.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {/* Filter tabs */}
          <div className="gfilter" role="tablist" aria-label="Filter gallery">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={filter === t}
                className={`gfilter__btn ${filter === t ? 'is-active' : ''}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <div className="gallery" key={filter}>
            {shown.map((g, i) => (
              <Reveal
                key={g.src}
                as="div"
                className={`gallery__item ${spanClass(i)}`}
                y={30}
                delay={(i % 4) * 0.05}
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${g.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i) }
                }}
              >
                <span className="gallery__tag">{g.tag}</span>
                <SmartImage src={g.src} alt={g.alt} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && shown[active] && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={shown[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className="lightbox__close" aria-label="Close" onClick={close}>
              <Icon name="close" />
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); step(-1) }}
            >
              <Icon name="chevronLeft" />
            </button>
            <motion.img
              key={active}
              src={shown[active].src}
              alt={shown[active].alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); step(1) }}
            >
              <Icon name="chevronRight" />
            </button>
            <div className="lightbox__cap">{shown[active].alt} · {active + 1} / {shown.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  )
}
