import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './logement.scss'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tags/Tags'
import Error from '../Error/Error'



export default function Logement() {
  const {id} = useParams()
  const [logement, setLogement] = useState([])


  useEffect(() => {
    fetch("./../logement.json")
    .then((response) => response.json())
    .then((datas) => {
      const logementFromAPI = datas.find((data) => data.id === id) 
      setLogement(logementFromAPI)
      console.log(logementFromAPI)
    })
    .catch((error) => console.log(error))
}, [])

  return (
    !logement ? <Error/> : logement && (
    
    <div className='logement'>
        <Header />
        <div className="main-logement">
          {!logement.pictures ? "" : <Slider pictures={logement.pictures} />}
          <div className='description'>
            <div className='desc-left'>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
              <div className='tags'>
                {!logement.tags ? "" : logement.tags.map((tag, index) => (
                  <Tag key={index} name={tag}/>  
                ))}
              </div>
            </div>
            <div className='desc-right'>
              {!logement.host ? "" : 
              <div className='host'>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt="" />
              </div>
            }
              <Rating rate={logement.rating}/>
            </div>
          </div>
          <div className='collapses'>
            <Collapse  label="Description" description={logement.description} width={"w-50"} />
            <Collapse label="Equipements" equipments={logement.equipments} width={"w-50"}/>
          </div>
        </div>
        <Footer />
    </div>)
  
  )
}
