import React from 'react'
import starGrey from '../../assets/star-grey.png'
import starRed from '../../assets/star-red.png'
import './rating.scss'

export default function Rating({rate}) { 
    let starsArray = []
    for (let i = 1; i <= 5; i++){
        starsArray.push(i <= rate ? starRed : starGrey)
    }
    
  return (
    <div className='rating'>
        {starsArray.map((star, index) => {

            return <img key={`star-${index}`} src={star} alt="star" />
        } )}
    </div>
  )
}
