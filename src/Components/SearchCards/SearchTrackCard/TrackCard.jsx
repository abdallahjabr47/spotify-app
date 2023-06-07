import React from 'react';
import '../Card.css';

const formatDuration = (durationMs) => {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`; 
};

const TrackCard = ({ track }) => {
  const { album, name, popularity, type, duration_ms } = track;

  return (
    <div className="cardContainer">
      <img className="cardImg" src={album?.images[0]?.url || ''} alt="" />
      <h5 className="cardName">Track: {name}</h5>
      <p className="cardInfo"><strong>Popularity: </strong>{popularity}</p>
      <p className="cardInfo"><strong>Type: </strong>{type}</p>
      <p className="cardInfo"><strong>Duration: </strong>{formatDuration(duration_ms)}</p>
    </div>
  );
};

export default TrackCard;
