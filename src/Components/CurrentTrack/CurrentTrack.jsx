import React, { useEffect } from "react";
import axios from "axios";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { reducerCases } from "../../Logic/Constants";
import { Container } from "./CurrentTrackStyle";
import { useNavigate } from "react-router-dom";

export default function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      ).catch((resp) => {
        let error = resp.response.data.error;
        console.log(error)
        if (error.status === 403 && error.reason){
          if (error.reason === "PREMIUM_REQUIRED")
            window.alert('PREMIUM_REQUIRED');
        }
      });

      if (response) {
        if (response.data){
          const currentPlaying = {
            id: response.data.item.id,
            name: response.data.item.name,
            artists: response.data.item.artists.map((artist) => artist.name),
            image: response.data.item.album.images[2].url,
          };
          dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
        }
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  
  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}