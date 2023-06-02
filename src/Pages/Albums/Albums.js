import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../Logic/DataLayer';
import { reducerCases } from '../../Logic/Constants';
import { routeNames } from '../../Utils/Utils';
import { spotify } from "../../Logic/spotify";
import { useOutletContext } from 'react-router-dom';

export default function Albums() {
  const [{ token, albums }, dispatch] = useDataLayerValue();
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.ALBUMS);

    const getSavedAlbums = async () => {
      try {
        const response = await spotify.getMySavedAlbums();
        const savedAlbums = response.items.map(({album}) => {
          return {
            id: album.id,
            imageUrl: album.images?.length && Array.isArray(album.images) > 0 ? album.images[0].url : null,
            name: album.name,
            artists: album.artists?.map(artist => artist.name).join(', '),
          };
        });
        dispatch({
          type: reducerCases.SET_ALBUMS,
          albums: savedAlbums,
        });
      } catch (error) {
        console.error('Error fetching saved albums:', error);
      }
    };

    if (token) {
      getSavedAlbums();
    }
  }, [token, dispatch]);

  return (
    <div>
      <h2>My Albums</h2>
      {albums && albums.length > 0 ? (
        <ul>
          {albums.map(album => (
            <li key={album.id}>
              <img src={album.imageUrl} alt={album.name} />
              <p>{album.name}</p>
              <p>{album.artists}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No albums found.</p>
      )}
    </div>
  );
}
