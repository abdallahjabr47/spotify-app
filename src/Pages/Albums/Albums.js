import React, { useEffect } from 'react';
import { useDataLayerValue } from '../../Logic/DataLayer';
import { reducerCases } from '../../Logic/Constants';
import { routeNames } from '../../Utils/Utils';
import { spotify } from "../../Logic/spotify";
import { useOutletContext } from 'react-router-dom';
import AlbumsCard from "../../Components/AlbumsCard/AlbumsCard";
import "./Albums.css";
import SEO from "../../Components/SEO/SEO";

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
    <>
      <SEO
        titleTemplate="Albums page"
        description="The website's Albums page that shows the albums that I have in my account"
      />
    <div className="albumsBody">
      <div className="albumsTitle">
        <h2>My Saved Albums</h2>
      </div>
  
      {albums && albums.length > 0 ? (
        <div className="albumsData">
          {albums.map(album => (
            <AlbumsCard
              key={album.id}
              name={album.name}
              artists={album.artists}
              imageUrl={album.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p>No albums found.</p>
      )}
    </div>
    </>
  );
}