import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import RoomCard from '../components/RoomCard'
import Testimonials from '../components/Testimonials'
import Seal from '../components/Seal'

import { SITE, HIGHLIGHTS, STATS } from '../data/site'
import { ROOMS } from '../data/rooms'
import { IMG } from '../data/images'

const TITLE_LINES = ['A refined retreat', 'beside the', 'Shyam Mandir']

const WALK = [
  { img: IMG.corridor, cap: 'Mural corridors', tag: 'Interiors', rY: 20, z: -150 },
  { img: IMG.corridor3, cap: 'Checker halls', tag: 'Detail', rY: 0, z: 60 },
  { img: IMG.corridor4, cap: 'Gallery walk', tag: 'Interiors', rY: -20, z: -150 },
]

export default function Home() {
  const reduce = useReducedMotion()
  const heroRef = useRef(null)
  const showRef = useRef(null)
  const walkRef = useRef(null)
  const fbRef = useRef(null)

  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(heroP, [0, 1], ['0%', '26%'])
  const bgScale = useTransform(heroP, [0, 1], [1, 1.16])
  const contentY = useTransform(heroP, [0, 1], [0, 90])
  const contentOpacity = useTransform(heroP, [0, 0.8], [1, 0])

  const { scrollYProgress: showP } = useScroll({ target: showRef, offset: ['start end', 'end start'] })
  const rowRotX = useTransform(showP, [0, 0.5, 1], [22, 0, -10])
  const leftX = useTransform(showP, [0, 0.5], [-150, 0])
  const rightX = useTransform(showP, [0, 0.5], [150, 0])
  const midY = useTransform(showP, [0, 0.5], [120, 0])
  const cardZ = useTransform(showP, [0.45, 1], [0, 130])
  const sideRotL = useTransform(showP, [0, 0.5, 1], [14, 4, -8])
  const sideRotR = useTransform(showP, [0, 0.5, 1], [-14, -4, 8])

  const { scrollYProgress: walkP } = useScroll({ target: walkRef, offset: ['start end', 'end start'] })
  const stageRotY = useTransform(walkP, [0, 1], [-16, 16])
  const stageZ = useTransform(walkP, [0, 0.5, 1], [-140, 10, -140])

  const { scrollYProgress: fbP } = useScroll({ target: fbRef, offset: ['start end', 'end start'] })
  const fbY = useTransform(fbP, [0, 1], ['-12%', '12%'])

  // hero pointer parallax (adds depth to the 3D environment)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const psx = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.5 })
  const psy = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.5 })
  const heroBgX = useTransform(psx, [-0.5, 0.5], [20, -20])
  const heroBgY = useTransform(psy, [-0.5, 0.5], [14, -14])
  const sealX = useTransform(psx, [-0.5, 0.5], [-32, 32])
  const sealY = useTransform(psy, [-0.5, 0.5], [-22, 22])

  function onHeroMove(e) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    pointerX.set((e.clientX - r.left) / r.width - 0.5)
    pointerY.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onHeroLeave() { pointerX.set(0); pointerY.set(0) }

  const showcase = [
    { img: IMG.superDeluxe, cap: 'Super Deluxe Rooms', tag: 'Stay', x: leftX, rY: sideRotL },
    { img: IMG.corridor, cap: 'Mural Corridors', tag: 'Interiors', y: midY, rY: 0 },
    { img: IMG.lobby, cap: 'Garden Lounge', tag: 'Unwind', x: rightX, rY: sideRotR },
  ]

  return (
    <PageShell>
      {/* ================= HERO ================= */}
      <section className="hero" ref={heroRef} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <motion.div className="hero__bg" style={reduce ? undefined : { y: bgY, scale: bgScale }}>
          <motion.div className="hero__bg-inner" style={reduce ? undefined : { x: heroBgX, y: heroBgY }}>
            <SmartImage src={IMG.exterior} alt="Shri Kalyan Hotel at golden hour" eager />
          </motion.div>
        </motion.div>
        <div className="hero__frame" />
        <motion.div className="hero__seal" style={reduce ? undefined : { x: sealX, y: sealY }}>
          <Seal size={116} />
        </motion.div>

        <motion.div className="container hero__content" style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
          <motion.span className="hero__kicker deva"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
            जय श्री श्याम
          </motion.span>

          <h1 className="display hero__title">
            {TITLE_LINES.map((line, i) => (
              <span className="line" key={i}>
                <motion.span style={{ display: 'inline-block' }}
                  initial={{ y: '112%' }} animate={{ y: 0 }}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}>
                  {i === 2 ? <em>{line}</em> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="lead hero__lead"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            {SITE.tagline}. Twenty-seven elegant rooms, a warm in-house restaurant and
            genuine hospitality — just {SITE.distance.toLowerCase()}.
          </motion.p>

          <motion.div className="hero__actions"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.02, duration: 0.8 }}>
            <Link to="/rooms" className="btn btn--solid-gold">Explore Rooms <Icon name="arrowRight" /></Link>
            <Link to="/contact" className="btn btn--ghost">Enquire on WhatsApp <Icon name="whatsapp" /></Link>
          </motion.div>

          <motion.div className="hero__meta"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.9 }}>
            <div><b>27</b><span>Premium Rooms</span></div>
            <div><b>700 m</b><span>To the Mandir</span></div>
            <div><b>3</b><span>Room Categories</span></div>
          </motion.div>
        </motion.div>

        <div className="hero__scroll">
          Scroll
          <motion.span className="hero__scroll-line"
            animate={reduce ? {} : { scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={reduce ? {} : { duration: 2, repeat: Infinity }} style={{ transformOrigin: 'top' }} />
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media" y={60}>
            <SmartImage src={IMG.reception} alt="Reception at Shri Kalyan Hotel" />
            <div className="split__badge"><b>27</b><span>Well-appointed Rooms</span></div>
          </Reveal>
          <div>
            <SectionHead eyebrow="Welcome" title={<>A premium stay in the heart of <em>Khatu Shyam Ji</em></>} />
            <Reveal delay={0.1}><p className="lead" style={{ marginBottom: 18 }}>{SITE.intro}</p></Reveal>
            <Reveal delay={0.16}><p style={{ color: 'var(--text-soft)' }}>{SITE.about}</p></Reveal>
            <Reveal delay={0.22}>
              <Link to="/about" className="btn btn--ghost mt-lg">Our Story <Icon name="arrowRight" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 3D SCROLL SHOWCASE ================= */}
      <section className="section section--tight showcase" ref={showRef}>
        <div className="container">
          <SectionHead center eyebrow="Step Inside" title="A world crafted for calm"
            text="From mural-lined corridors to sunlit lounges — every corner is designed for a restful darshan stay." />
          <div className="showcase__stage">
            <motion.div className="showcase__row" style={reduce ? undefined : { rotateX: rowRotX }}>
              {showcase.map((c, i) => (
                <motion.div key={i} className="showcase__card"
                  style={reduce ? undefined : { x: c.x, y: c.y, rotateY: c.rY, z: cardZ }}>
                  <SmartImage src={c.img} alt={c.cap} />
                  <div className="showcase__cap"><span>{c.tag}</span><b>{c.cap}</b></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FULL-BLEED INTERSTITIAL ================= */}
      <section className="fullbleed" ref={fbRef}>
        <motion.div className="fullbleed__media" style={reduce ? undefined : { y: fbY }}>
          <SmartImage src={IMG.exterior} alt="Shri Kalyan Hotel at golden hour" />
        </motion.div>
        <div className="fullbleed__cap container">
          <span className="eyebrow deva">जय श्री श्याम</span>
          <h2>Warm light, calm evenings, and the Mandir a short walk away.</h2>
        </div>
      </section>

      {/* ================= ROOMS PREVIEW ================= */}
      <section className="section section--tight">
        <div className="container">
          <div className="shead" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '100%', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ maxWidth: 560 }}>
              <SectionHead eyebrow="Our Rooms" title="Three ways to stay"
                text="Each category is thoughtfully designed with a pleasant ambience for a comfortable, memorable stay." />
            </div>
            <Reveal delay={0.1}><Link to="/rooms" className="btn btn--ghost">All Rooms <Icon name="arrowRight" /></Link></Reveal>
          </div>
          <motion.div className="grid grid-3"
            variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            {ROOMS.map((room) => (
              <motion.div key={room.id} variants={staggerChild}><RoomCard room={room} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS (editorial list) ================= */}
      <section className="section section--tight">
        <div className="container">
          <SectionHead eyebrow="Key Highlights" title="Why guests choose Shri Kalyan" />
          <div className="hlist">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal as="div" className="hlist__item" key={h.title} delay={(i % 2) * 0.06}>
                <span className="hlist__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="hlist__body">
                  <h3><Icon name={h.icon} /> {h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3D CORRIDOR WALK-THROUGH ================= */}
      <section className="section section--tight walk" ref={walkRef}>
        <div className="container">
          <SectionHead center eyebrow="The Interiors" title={<>Botanical murals &amp; <em>checkerboard halls</em></>}
            text="Our corridors are a signature — hand-styled murals over classic black-and-white floors." />
        </div>
        <motion.div className="walk__stage" style={reduce ? undefined : { rotateY: stageRotY, z: stageZ }}>
          {WALK.map((p, i) => (
            <motion.div key={i} className="walk__panel" style={reduce ? undefined : { rotateY: p.rY, z: p.z }}>
              <SmartImage src={p.img} alt={p.cap} />
              <div className="walk__cap"><span>{p.tag}</span><b>{p.cap}</b></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= EXPERIENCE BAND (the one ink moment; stats once) ================= */}
      <section className="section ink-section" style={{ overflow: 'hidden' }}>
        <div className="sec-bg sec-bg--ink"><SmartImage src={IMG.stairCorridor} alt="" /></div>
        <div className="container center" style={{ display: 'grid', placeItems: 'center', gap: 34 }}>
          <Reveal><Seal size={128} /></Reveal>
          <SectionHead center eyebrow="The Experience" title={<>Comfort, elegance &amp; <em>warm devotion</em></>}
            text="A peaceful place to return to after darshan — thoughtful service, spotless rooms and satisfying food, all under one roof." />
          <motion.div className="grid grid-4" style={{ width: '100%' }}
            variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            {STATS.map((s) => (
              <motion.div key={s.label} variants={staggerChild}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="section">
        <div className="container split split--rev">
          <Reveal className="split__media" y={60}>
            <SmartImage src={IMG.exteriorDusk} alt="Shri Kalyan Hotel exterior" />
            <div className="split__badge"><b>700 m</b><span>To Shyam Mandir</span></div>
          </Reveal>
          <div>
            <SectionHead eyebrow="The Location" title="Steps away from darshan" />
            <Reveal delay={0.1}><p className="lead" style={{ marginBottom: 24 }}>{SITE.location}</p></Reveal>
            <Reveal delay={0.16}>
              <ul className="split__list">
                <li><Icon name="mapPin" /> {SITE.address}</li>
                <li><Icon name="check" /> Easy 8–10 minute walk to Shyam Mandir</li>
                <li><Icon name="check" /> Spacious, secure on-site parking</li>
              </ul>
            </Reveal>
            <Reveal delay={0.22}><Link to="/contact" className="btn btn--gold mt-lg">Get Directions &amp; Enquire <Icon name="arrowRight" /></Link></Reveal>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section section--tight" style={{ overflow: 'hidden' }}>
        <div className="sec-bg sec-bg--soft"><SmartImage src={IMG.lounge2} alt="" /></div>
        <div className="container"><Testimonials /></div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section">
        <div className="container">
          <Reveal className="cta" y={50}>
            <div className="cta__bg"><SmartImage src={IMG.lobby} alt="" /></div>
            <div className="cta__inner">
              <span className="eyebrow deva">जय श्री श्याम</span>
              <h2>Plan your Khatu Shyam Ji darshan with us</h2>
              <p>Share your dates and we'll confirm availability and tariff on WhatsApp within minutes.</p>
              <div className="cta__actions">
                <Link to="/contact" className="btn btn--solid-gold">Send Enquiry <Icon name="whatsapp" /></Link>
                <a href={`tel:+${SITE.phoneIntl}`} className="btn btn--ghost"><Icon name="phone" /> +91 {SITE.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}

