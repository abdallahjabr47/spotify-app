import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../../Logic/Constants";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { Container } from "@mui/material";
import { spotify } from "../../Logic/spotify";
import './PlaylistStyle.css'
import { useNavigate  } from "react-router-dom"; // Import useHistory


export default function Playlists() {
  const navigate = useNavigate(); // Get the navigate function
  const [{ token, playlists }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        let data = await spotify.getUserPlaylists(undefined, {offset: 5, limit: 10})
        
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
    navigate("/", {state: {page: name}}); // Navigate to the home page ("/")
  };
  
  return (
    <Container>
      <ul className="ulStyle">
        {playlists.map(({ name, id }) => {
          return (
            <li className="liStyle" key={id} onClick={() => changeCurrentPlaylist(id, name)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};