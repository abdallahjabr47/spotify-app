import React from 'react';
import '../Card.css';

const TrackCard = ({ track }) => {
  const { album, name, popularity, type } = track;

  return (
    <div className="cardContainer">
      <img className="cardImg" src={album?.images[0]?.url || ''} alt="" />
      <h5 className="cardName">Track: {name}</h5>
      <p className="cardInfo"><strong>Popularity: </strong>{popularity}</p>
      <p className="cardInfo"><strong>Type: </strong>{type}</p>
    </div>
  );
};

export default TrackCard;
