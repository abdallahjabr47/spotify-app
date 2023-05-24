import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './Logic/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player/Player';
import Login from './Components/Login/Login';
import {useDataLayerValue} from './Logic/DataLayer'

const spotify = new SpotifyWebApi();

function App() {
  //useEffect here used with variables to show and save the value on a state to render the next page.
  //to grap something from datalayer
  const [{ user , token }, dispatch] = useDataLayerValue();

  //useEffect here used to run the code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tempToken = hash.access_token;

    if(tempToken) {
      dispatch({
        type: "SET_TOKEN",
        token: tempToken
      });

      //connect spotify to React
      //Put a key in API
      spotify.setAccessToken(tempToken);
      //Get the user account
      spotify.getMe().then(user => {        
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
    }
  }, []);

  console.log("Me", user);
  console.log("token", token);


  return (
    <div className="App">
      {/* JSX, if we have a token*/}
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
