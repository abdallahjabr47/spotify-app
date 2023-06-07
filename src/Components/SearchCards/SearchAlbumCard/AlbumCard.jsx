import React from 'react';
import '../Card.css';

const AlbumCard = ({ album }) => {
  const { images, name, release_date, total_tracks, type } = album;

  return (
    <div className="cardContainer">
      <img className="cardImg" src={images[0]?.url || ''} alt="" />
      <h5 className="cardName">Album: {name}</h5>
      <p className="cardInfo"><strong>Release Date: </strong>{release_date}</p>
      <p className="cardInfo"><strong>Total Tracks: </strong>{total_tracks}</p>
      <p className="cardInfo"><strong>Type: </strong>{type}</p>
    </div>
  );
};

export default AlbumCard;