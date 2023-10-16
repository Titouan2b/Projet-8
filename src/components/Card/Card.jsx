import React from 'react'
import "./card.scss"
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
  return (
    <div className="cards-container">
      <Link to={`/logement/${id}`}>
        <div className='card'>
          
          <p>{title}</p>
          <img src={cover} />
          <div className="overlay"></div>
        </div>
      </Link>
    </div>
  )
}
