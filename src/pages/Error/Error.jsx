import React from 'react'
import Header from '../../components/Header/Header'
import "./error.scss"
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <Header />
        <h1>404</h1>
        <h3>Oups! La page que <br className='error-break'/> vous demandez n'existe pas.</h3>
        <NavLink to="/">
            <p className='home-error'>Retouner sur la page d'accueil</p>
        </NavLink>
        <Footer />
    </div>
  )
}
