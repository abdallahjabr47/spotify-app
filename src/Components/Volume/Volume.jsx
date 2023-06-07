import axios from "axios";
import React from "react";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { Container } from "../CurrentTrack/CurrentTrackStyle";
import { useNavigate } from "react-router-dom";

export default function Volume() {
  const [{ token }] = useDataLayerValue();
  const navigate = useNavigate();

  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
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

  };
  return (
    <Container>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
}