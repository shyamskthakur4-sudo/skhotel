import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import { buildWhatsAppLink } from '../lib/whatsapp'
import { ROOMS } from '../data/rooms'

const EMPTY = {
  name: '', phone: '', email: '', checkIn: '', checkOut: '', guests: '2', roomType: '', message: '',
}

export default function InquiryForm() {
  const [data, setData] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  function validate() {
    const err = {}
    if (!data.name.trim()) err.name = 'Please enter your name'
    if (!/^[0-9+\-\s]{7,15}$/.test(data.phone.trim())) err.phone = 'Enter a valid phone number'
    if (data.checkIn && data.checkOut && data.checkOut < data.checkIn)
      err.checkOut = 'Check-out must be after check-in'
    setErrors(err)
    return err
  }

  function onSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (Object.keys(err).length) {
      const first = document.getElementById(Object.keys(err)[0])
      if (first) first.focus()
      return
    }
    const url = buildWhatsAppLink(data)
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <motion.form
      className="form"
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Full Name <span className="req">*</span></label>
          <input id="name" type="text" placeholder="Your name" value={data.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
          {errors.name && <span className="field__err" id="name-err" role="alert">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone <span className="req">*</span></label>
          <input id="phone" type="tel" placeholder="Mobile number" value={data.phone} onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
          {errors.phone && <span className="field__err" id="phone-err" role="alert">{errors.phone}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email <span style={{ color: 'var(--text-mute)' }}>(optional)</span></label>
        <input id="email" type="email" placeholder="you@example.com" value={data.email} onChange={set('email')} />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="checkIn">Check-in</label>
          <input id="checkIn" type="date" value={data.checkIn} onChange={set('checkIn')} />
        </div>
        <div className="field">
          <label htmlFor="checkOut">Check-out</label>
          <input id="checkOut" type="date" value={data.checkOut} onChange={set('checkOut')} aria-invalid={!!errors.checkOut} aria-describedby={errors.checkOut ? 'checkOut-err' : undefined} />
          {errors.checkOut && <span className="field__err" id="checkOut-err" role="alert">{errors.checkOut}</span>}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="roomType">Room Category</label>
          <select id="roomType" value={data.roomType} onChange={set('roomType')}>
            <option value="">Any / Not sure</option>
            {ROOMS.map((r) => (
              <option key={r.id} value={r.name}>{r.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="guests">Guests</label>
          <select id="guests" value={data.guests} onChange={set('guests')}>
            {['1', '2', '3', '4', '5', '6+'].map((g) => (
              <option key={g} value={g}>{g} {g === '1' ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Any special request or question…" value={data.message} onChange={set('message')} />
      </div>

      <button type="submit" className="btn btn--gold">
        <Icon name="whatsapp" /> Send Enquiry on WhatsApp
      </button>

      <div className="form__note">
        <Icon name="whatsapp" />
        {sent
          ? 'WhatsApp opened with your details — just hit send in the chat.'
          : "This opens WhatsApp with your details pre-filled. We'll reply with availability & tariff."}
      </div>
    </motion.form>
  )
}
