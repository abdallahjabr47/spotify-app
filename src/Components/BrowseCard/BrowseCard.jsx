import React from 'react'
import './BrowseCard.css'

const BrowseCard = ({ name, imageUrl }) => {
  return (
    <div className='cardContainerBrowse'>
      <img className='cardImgBrowse' src={imageUrl} alt="" />
      <h4 className='cardTitleBrowse'>{name}</h4>
    </div>
  )
}

export default BrowseCard;