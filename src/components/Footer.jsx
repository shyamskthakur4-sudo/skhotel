import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { NAV, SITE } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <Logo size={52} className="footer__mark" />
              <div>
                <div className="footer__name">Shri Kalyan</div>
                <div className="footer__tag">Hotel &amp; Restaurant</div>
              </div>
            </div>
            <p>{SITE.intro}</p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Reach Us</h4>
            <div className="stack-sm">
              <div className="footer__contact-row">
                <Icon name="mapPin" />
                <span>{SITE.address}</span>
              </div>
              <div className="footer__contact-row">
                <Icon name="phone" />
                <a href={`tel:+${SITE.phoneIntl}`}>+91 {SITE.phone}</a>
              </div>
              <div className="footer__contact-row">
                <Icon name="mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Jai Shri Shyam · Khatu Shyam Ji</span>
        </div>
      </div>
    </footer>
  )
}
