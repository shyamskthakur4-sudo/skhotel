import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { GALLERY, IMG } from '../data/images'

const VIDEOS = [
  { id: '1a3ZZ-JSogB2Gv_wzAhkoXcus_LHnJiFZ', title: 'Hotel Video 01' },
  { id: '1-gssho-6OztCN5wo6jZR-SxmzOu4XYYB', title: 'Hotel Video 02' },
  { id: '1taLuMM0b62wroAsFja6T5WtUj7RUsxXG', title: 'Hotel Video 03' },
  { id: '15AIqAeQcp7BuKsO52qXO5AXu5wO_hZZi', title: 'Hotel Video 04' },
  { id: '1VgfXipI0uSr86ZLa-H3RI4MUgjnnaFJ5', title: 'Hotel Video 05' },
  { id: '11s-rc_AfCbCC6oZwxuEFYzXflUTPFbgk', title: 'Hotel Video 06' },
  { id: '1Pi-86giMDYoNuvI1WMU2TqcvcTtjSQyT', title: 'Hotel Video 07' },
  { id: '1xs7b54EXjrE-p19pS-PQgwAPXlu6z9ii', title: 'Hotel Video 08' },
  { id: '1BczQQ-Mq0hzG1FBvjHreiQ3FzTOcvd_B', title: 'Hotel Video 09' },
  { id: '1PUiCubDEIx6viAjJ18264tnB-5JOUGwK', title: 'Hotel Video 10' },
  { id: '17JpqKKR0rvZRw-4mIGmbW_D0zopOY3l7', title: 'Hotel Video 11' },
  { id: '1R7E2Ls1_9UkbO9rzhzJe4ldZFpYXF1e3', title: 'Hotel Video 12' },
  { id: '1R9ZVIHFDZmWPSLd4U2_yFrwQhvOfFX4s', title: 'Hotel Video 13' },
  { id: '1uuTbrBH3EGmj1y3YB-4RiSDxDCrUooHK', title: 'Hotel Video 14' },
]

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

      <section className="section section--tight video-section">
        <div className="container">
          <Reveal>
            <div className="shead">
              <span className="eyebrow">Watch &amp; Explore</span>
              <h2>Hotel Videos</h2>
              <p>Take a closer look at Shri Kalyan Hotel &amp; Restaurant through our videos.</p>
            </div>
          </Reveal>
          <div className="video-gallery">
            {VIDEOS.map((video, i) => (
              <Reveal as="article" className="video-card" key={video.id} y={24} delay={(i % 2) * 0.06}>
                <div className="video-card__frame">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="video-card__caption">
                  <span>VIDEO {String(i + 1).padStart(2, '0')}</span>
                  <h3>{video.title}</h3>
                  <a href={`https://drive.google.com/file/d/${video.id}/view`} target="_blank" rel="noreferrer">
                    Open video <Icon name="arrowRight" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
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
