import React from 'react'
import { Link } from 'react-router-dom'
import TiltCard from './TiltCard'
import SmartImage from './SmartImage'
import Icon from './Icon'

export default function RoomCard({ room }) {
  return (
    <TiltCard className="room" max={7} scale={1.02}>
      <div className="room__media">
        <span className="room__tier">{room.tier}</span>
        <SmartImage src={room.image} alt={room.name} />
      </div>
      <div className="room__body">
        <h3 className="room__name">{room.name}</h3>
        <div className="room__price">
          <span>From</span>
          <strong>{room.price}</strong>
        </div>
        <p className="room__blurb">{room.blurb}</p>
        <div className="room__meta">
          <span><Icon name="expand" /> {room.size}</span>
          <span><Icon name="users" /> {room.occupancy}</span>
          <span><Icon name="bed" /> {room.bed}</span>
        </div>
        <Link to="/rooms" className="room__cta">
          View details <Icon name="arrowRight" />
        </Link>
      </div>
    </TiltCard>
  )
}
