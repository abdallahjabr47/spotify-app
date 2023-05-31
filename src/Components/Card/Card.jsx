import React from 'react';
import './Card.css';

const Card = ({ name, imageUrl }) => {
  return (
    <div className='cardContainer'>
      <img className='cardImg' src={imageUrl} alt="" />
      <h4 className='cardTitle'>{name}</h4>
      <p className='cardDescription'>Artist</p>
    </div>
  );
};

export default Card;