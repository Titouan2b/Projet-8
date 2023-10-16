import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./about.scss"
import Banner from '../../components/Banner/Banner'
import img from "../../assets/Image-source.png"
import Collapse from '../../components/Collapse/Collapse'

export default function About() {
  return (
    <div>
        <Header />
        <Banner imgSrc={img} />
        <div className='collapse-about'>
          <Collapse label="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <Collapse label="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse label="Service">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
               perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse label="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
               correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
               locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
               également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
            </Collapse>
        </div>
        <Footer />
    </div>
  )
}
