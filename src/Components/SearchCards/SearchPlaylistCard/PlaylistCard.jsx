import React from 'react';
import '../Card.css';

const PlaylistCard = ({ playlist }) => {
  const { name, type, owner } = playlist;

  return (
    <div className="cardContainer">
      <h5 className="cardName">Playlist: {name}</h5>
      <p className="cardInfo"><strong>Type: </strong>{type}</p>
      <p className="cardInfo"><strong>Owner: </strong>{owner?.display_name}</p>
    </div>
  );
};

export default PlaylistCard;
