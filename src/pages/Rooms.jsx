import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { ROOMS } from '../data/rooms'
import { IMG } from '../data/images'
import { SITE } from '../data/site'
import { quickWhatsAppLink } from '../lib/whatsapp'

function RoomRow({ room, index }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yRaw = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const y = reduce ? '0%' : yRaw
  const rev = index % 2 === 1

  return (
    <section className="section section--tight" ref={ref}>
      <div className={`container rdetail ${rev ? 'rdetail--rev' : ''}`}>
        <Reveal className="rdetail__media" y={50}>
          <motion.div style={{ y, position: 'absolute', inset: '-12% 0' }}>
            <SmartImage src={room.image} alt={room.name} />
          </motion.div>
          <span className="rdetail__index">0{index + 1}</span>
        </Reveal>

        <div>
          <Reveal>
            <span className="rdetail__tier">{room.tier}</span>
            <h2>{room.name}</h2>
          </Reveal>          <Reveal delay={0.08}>
            <p className="lead">{room.blurb}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rdetail__meta">
              <div><span>Size</span><b>{room.size}</b></div>
              <div><span>Sleeps</span><b>{room.occupancy}</b></div>
              <div><span>Bed</span><b>{room.bed}</b></div>
            </div>
            <div className="rdetail__price">
              <span>Room Tariff</span>
              <strong>{room.price}</strong>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="rdetail__feats">
              {room.features.map((f) => (
                <li key={f}><Icon name="check" /> {f}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--gold">
                Enquire Now <Icon name="arrowRight" />
              </Link>
              <a
                href={quickWhatsAppLink(`Hello ${SITE.name}, I'm interested in the ${room.name}. Please share availability and tariff.`)}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                <Icon name="whatsapp" /> WhatsApp
              </a>
            </div>
          </Reveal>

          {room.gallery && (
            <Reveal delay={0.24}>
              <div className="rthumbs">
                {room.gallery.map((g, k) => (
                  <div className="rthumbs__item" key={k}>
                    <SmartImage src={g} alt={`${room.name} — view ${k + 1}`} />
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Rooms() {
  return (
    <PageShell>
      <section className="phero">
        <div className="phero__bg"><SmartImage src={IMG.deluxe} alt="" eager /></div>
        <div className="container phero__inner">
          <Reveal as="div" className="phero__crumb" y={16}>
            <Link to="/">Home</Link> / Rooms
          </Reveal>
          <Reveal delay={0.06}><h1>Rooms &amp; Suites</h1></Reveal>
          <Reveal delay={0.12}>
            <p>27 well-appointed rooms across three categories — each a calm, elegant retreat for your Khatu Shyam Ji stay.</p>
          </Reveal>
        </div>
      </section>

      {ROOMS.map((room, i) => (
        <RoomRow key={room.id} room={room} index={i} />
      ))}

      <section className="section">
        <div className="container">
          <Reveal className="cta" y={50}>
            <div className="cta__bg"><SmartImage src={IMG.lobby} alt="" /></div>
            <div className="cta__inner">
              <h2>Not sure which room suits you?</h2>
              <p>Tell us your dates and group size — we'll recommend the right room and confirm on WhatsApp.</p>
              <div className="cta__actions">
                <Link to="/contact" className="btn btn--gold">Send Enquiry <Icon name="arrowRight" /></Link>
                <a href={`tel:+${SITE.phoneIntl}`} className="btn btn--ghost"><Icon name="phone" /> Call Us</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
