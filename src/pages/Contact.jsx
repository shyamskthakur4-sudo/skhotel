import React from 'react'
import { Link } from 'react-router-dom'

import PageShell from '../components/PageShell'
import SmartImage from '../components/SmartImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import InquiryForm from '../components/InquiryForm'
import { SITE } from '../data/site'
import { IMG } from '../data/images'

const INFO = [
  { icon: 'mapPin', label: 'Address', value: SITE.address },
  { icon: 'phone', label: 'Phone', value: `+91 ${SITE.phone}`, href: `tel:+${SITE.phoneIntl}` },
  { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'clock', label: 'Front Desk', value: 'Open 24 / 7 · Check-in from 12 PM' },
]

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`

export default function Contact() {
  return (
    <PageShell>
      <section className="phero phero--vivid">
        <div className="phero__bg"><SmartImage src={IMG.lounge2} alt="" eager /></div>
        <div className="container phero__inner">
          <div className="phero__crumb"><Link to="/">Home</Link> / Contact</div>
          <Reveal delay={0.06}><h1>Enquire &amp; Book</h1></Reveal>
          <Reveal delay={0.12}>
            <p>Send us your details and we'll confirm availability and tariff on WhatsApp within minutes.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__info">
            {INFO.map((c, i) => {
              const inner = (
                <>
                  <span className="cinfo__icon"><Icon name={c.icon} /></span>
                  <div>
                    <div className="cinfo__label">{c.label}</div>
                    <div className="cinfo__value">{c.value}</div>
                  </div>
                </>
              )
              return (
                <Reveal key={c.label} y={30} delay={i * 0.06}>
                  {c.href ? (
                    <a className="cinfo" href={c.href}>{inner}</a>
                  ) : (
                    <div className="cinfo">{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>

          <div>
            <SectionHead
              eyebrow="Send an Enquiry"
              title="Tell us about your stay"
            />
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="map">
              <iframe
                src={mapSrc}
                title={`Map to ${SITE.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
