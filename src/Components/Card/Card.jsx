import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cardContainer'>
        <img className='cardImg' src="https://picsum.photos/150/150" alt="" />
        <h4 className='cardTitle'>Card Title</h4>
        <p className='cardDescription'>This is the card description.</p>
    </div>
  )
}

export default Card