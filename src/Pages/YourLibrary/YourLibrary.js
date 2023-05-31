import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./YourLibrary.css";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { reducerCases } from "../../Logic/Constants";
import { spotify } from "../../Logic/spotify";
import { routeNames } from "../../Utils/Utils";
import Card from "../../Components/Card/Card";

export default function YourLibrary() {
  const [{ token, followedArtists }, dispatch] = useDataLayerValue();
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.YOUR_LIBRARY);

    const getArtists = async () => {
      try {
        const response = await spotify.getFollowedArtists({ limit: 10 });
        console.log(response);
        const artists = response.artists.items.map((artist) => {
          return {
            id: artist.id,
            name: artist.name,
            genres: artist.genres,
            imageUrl: artist.images.length > 0 ? artist.images[0].url : null,
          };
        });

        dispatch({
          type: reducerCases.SET_FOLLOWED_ARTISTS,
          followedArtists: artists,
        });
      } catch (error) {
        console.error("Error fetching followed artists:", error);
      }
    };

    if (token) {
      getArtists();
    }
  }, [token, dispatch]);

  return (
    <div className="yourLibraryBody">
      <div className="yourLibraryTitle">
        <h2>Followed Artists</h2>
      </div>

      <div className="yourLibraryData">
      {followedArtists.map((artist) => (
        <Card
          key={artist.id}
          name={artist.name}
          genres={artist.genres}
          imageUrl={artist.imageUrl}
        />
      ))}
      </div>
    </div>
  );
}