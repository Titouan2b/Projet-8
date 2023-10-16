import React from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <img src="../src/assets/logo.png" alt="logo KASA" />
      <nav>
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}> 
            <li className='desktop'>Accueil</li>
            <li className='phone'>ACCUEIL</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> 
            <li className='desktop'>A Propos</li>
            <li className='phone'>A PROPOS</li>
          </NavLink>
        </ul>
      </nav>
    </div>
    

  )
}
