import React from "react";
import axios from "axios";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useDataLayerValue } from "../../Logic/DataLayer";
import { reducerCases } from "../../Logic/Constants";
import { useNavigate } from "react-router-dom";
import { Container } from "./PlayerStyle";

export default function Player() {
  const [{ token, playerState }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
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

    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
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

    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    const response1 = await axios.get(
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

    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
    }
  };
  
  return (
    <Container>
      <div className="shuffle">
        <ShuffleIcon />
      </div>
      <div className="previous">
        <SkipPreviousIcon onClick={() => changeTrack("previous")} />
      </div>
      <div className="state">
        {playerState ? (
          <PauseCircleOutlineIcon onClick={changeState} />
        ) : (
          <PlayCircleOutlineIcon onClick={changeState} />
        )}
      </div>
      <div className="next">
        <SkipNextIcon onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <RepeatIcon />
      </div>
    </Container>
  );
}