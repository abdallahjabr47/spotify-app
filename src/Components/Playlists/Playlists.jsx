import React, { useEffect, useState } from "react";
import { reducerCases } from "../../Logic/Constants";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { Container } from "@mui/material";
import { spotify } from "../../Logic/spotify";
import "./PlaylistStyle.css";
import { useNavigate } from "react-router-dom";

export default function Playlists() {
  const navigate = useNavigate();
  const [{ token, playlists }, dispatch] = useDataLayerValue();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null); // Define selectedPlaylistId state variable

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        let data = await spotify.getUserPlaylists(undefined, { offset: 5, limit: 10 });

        const { items } = data;
        const playlists = items.map(({ name, id }) => {
          return { name, id };
        });
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    if (token) {
      getPlaylistData();
    }
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId, name) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    setSelectedPlaylistId(selectedPlaylistId); 
    navigate("/", { state: { page: name } });
  };

  return (
    <Container>
      <ul className="ulStyle">
        {playlists.map(({ name, id }) => {
          const listItemClasses = `liStyle ${selectedPlaylistId === id ? "active" : ""}`;
          return (
            <li className={listItemClasses} key={id} onClick={() => changeCurrentPlaylist(id, name)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
