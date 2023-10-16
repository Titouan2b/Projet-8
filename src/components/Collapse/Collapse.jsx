import React, { useRef, useState } from 'react'
import "./collapse.scss"
import arrow from "../../assets/fleche_haut.png"

export default function Collapse(props) {
    
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
    }
    const contentRef = useRef()
    if (contentRef.current) console.log(contentRef.current.scrollHeight)
    



  return (
    <div className={'collapse-container ' + props.width}>
        <div className="collapsible" >
            <p>{props.label}</p>
            <img className={!open ? "reverse-rotate" : "rotate"} onClick={toggle} src={arrow} alt="fleche" />
        </div>
        <div className="content-parent" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
            <div className='content'>
                {props.description}{props.children}
                {!props.equipments ? "" : props.equipments &&(
                <ul>
                    {props.equipments.map((equipment, index) => (
                        <li key={`equipment-${index}`}>{equipment}</li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    </div>
  )
}