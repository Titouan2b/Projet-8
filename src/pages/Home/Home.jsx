import React, { useEffect, useState } from 'react'
import "./home.scss"
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import img from "../../assets/IMG.png"

export default function Home() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch("./logement.json")
        .then((response) => response.json())
        .then((datas) => {
            setLogements(datas)
            console.log(datas)
        })
        .catch((error) => console.log(error))
    }, [])

  return (
    <div>
        <Header/>
        <Banner imgSrc={img} title="Chez vous, partout et ailleurs"/>
        <div className='cards'>
            {logements.map((logement) => (
                <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>  
            ))}
        </div>
        <Footer/>
    </div>
  )
}

