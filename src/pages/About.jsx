import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal, { staggerParent, staggerChild } from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { SITE, HIGHLIGHTS, STATS } from '../data/site'
import { IMG } from '../data/images'

const AUDIENCE = ['Families', 'Pilgrims', 'Groups', 'Corporate Travellers', 'Leisure Guests']

export default function About() {
  return (
    <PageShell>
      <section className="phero">
        <div className="phero__bg"><SmartImage src={IMG.lobby} alt="" eager /></div>
        <div className="container phero__inner">
          <div className="phero__crumb"><Link to="/">Home</Link> / About</div>
          <Reveal delay={0.06}><h1>About the Hotel</h1></Reveal>
          <Reveal delay={0.12}>
            <p>{SITE.tagline} — comfort, elegance and warm hospitality, moments from Khatu Shyam Ji Mandir.</p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media" y={60}>
            <SmartImage src={IMG.exterior} alt="Shri Kalyan Hotel & Restaurant" />
            <div className="split__badge"><b>Est.</b><span>Khatu Shyam Ji</span></div>
          </Reveal>
          <div>
            <SectionHead eyebrow="Our Story" title="Warm hospitality for every traveller" />
            <Reveal delay={0.1}><p className="lead" style={{ marginBottom: 18 }}>{SITE.intro}</p></Reveal>
            <Reveal delay={0.16}><p style={{ color: 'var(--text-soft)' }}>{SITE.about}</p></Reveal>
            <Reveal delay={0.22}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
                <Link to="/rooms" className="btn btn--gold">View Rooms <Icon name="arrowRight" /></Link>
                <Link to="/gallery" className="btn btn--ghost">See Gallery</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section--tight ink-section">
        <div className="container">
          <motion.div
            className="grid grid-4"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={staggerChild} className="center">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="What We Offer" title="Comfort in every detail" />
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

      {/* Ideal for */}
      <section className="section section--tight">
        <div className="container center">
          <SectionHead center eyebrow="Ideal For" title="A stay for everyone" />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {AUDIENCE.map((a, i) => (
              <Reveal
                key={a}
                as="span"
                delay={i * 0.06}
                y={20}
                className="chip"
              >
                <Icon name="check" size={15} /> {a}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="cta" y={50}>
            <div className="cta__bg"><SmartImage src={IMG.stairLounge} alt="" /></div>
            <div className="cta__inner">
              <h2>Come stay with us</h2>
              <p>We'd love to host you for your Khatu Shyam Ji visit. Reach out and we'll take care of the rest.</p>
              <div className="cta__actions">
                <Link to="/contact" className="btn btn--gold">Enquire Now <Icon name="arrowRight" /></Link>
                <a href={`mailto:${SITE.email}`} className="btn btn--ghost"><Icon name="mail" /> Email Us</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
