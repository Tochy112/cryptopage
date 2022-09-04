import React from 'react'
import "./Card.css"
import arrow from "../../Assets/Arrow Right.png"

const Card = ({icon, title, span, body}) => {
  return (
    <div className='card_div'>
        <div>
            <img src={icon} alt="" />
            <h2>{title} <span>{span}</span></h2>
            <p className='body'>{body}</p>

            <button className='bttn'>
                <p>Start mining</p>
                <img src={arrow} alt=""  />
            </button>
        </div>
    </div>
  )
}

export default Card