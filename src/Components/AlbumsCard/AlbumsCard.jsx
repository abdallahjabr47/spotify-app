import React from 'react'
import './AlbumsCard.css'

const AlbumsCard = ({ imageUrl, name, artists}) => {
  return (
    <div className='cardContainerAlbums'>
      <img className='cardImgAlbums' src={imageUrl} alt="" />
      <h4 className='cardTitleAlbums'>{name}</h4>
      <p className='cardArtistsAlbums'>{artists}</p>
    </div>
  )
}

export default AlbumsCard;