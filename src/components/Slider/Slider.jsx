import React, { useState } from 'react'
import "./slider.scss"
import previousSLide from "../../assets/fleche_gauche.png"
import nextSLide from "../../assets/fleche_droite.png"

export default function Slider({pictures}) {
    const [currentSlide, setCurrentSlide] = useState(0) 

    const nextSlide = () => {
      setCurrentSlide((newSlide) => newSlide === pictures.length -1 ? 0 : newSlide + 1)
      console.log(currentSlide)
    }

    const previousSlide = () => {
      setCurrentSlide((lastSlide) => lastSlide === 0 ? pictures.length -1 : lastSlide - 1)
      console.log(currentSlide)
  }

  return (
    <div className='container-slider'>
      {pictures.length === 1 ? "" : 
        <button className='button-left' onClick={previousSlide}><img src={previousSLide}  alt="" /></button>
      }
        <img className='carousel' src={pictures[currentSlide]} alt="" />
        {pictures.length === 1 ? "" : 
        <button className='button-right' onClick={nextSlide}><img src={nextSLide}  alt="" /></button>
      }
        {pictures.length === 1 ? "" : 
        <p>{currentSlide+1  + "/" + pictures.length}</p>
      }
    </div>
  )
}
