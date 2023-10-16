import React from 'react'
import "./banner.scss"

export default function Banner({imgSrc, title}) {
  return (
    <div className="banner">
      <img src={imgSrc} alt="" />
      <div className="opacity">
        {!title ? "" : <h1 className='desktop'>{title}</h1>}
        <h1 className='mobile-break'>Chez vous, <br />partout et ailleurs</h1>
      </div>
    </div>
  )
}
