import React from 'react';
import '../Card.css';

const ArtistCard = ({ artist }) => {
  const { images, name, type, followers } = artist;

  return (
    <div className="cardContainer">
      <img className="cardImg" src={images[0]?.url || ''} alt="" />
      <h5 className="cardName">Artist: {name}</h5>
      <p className="cardInfo"><strong>Type: </strong>{type}</p>
      <p className="cardInfo"><strong>Followers: </strong>{followers?.total}</p>
    </div>
  );
};

export default ArtistCard;
