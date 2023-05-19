import { useEffect, useState, Suspense } from 'react';
import './App.css';
import { getTokenFromUrl } from './Logic/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './Logic/DataLayer';
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { routes } from './Utils/Utils';
import HomeLayout from './Layout/HomeLayout/HomeLayout';

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

      spotify.getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, []);

  //console.log("Me", user);
  //console.log("token", token);

  const pagesRoutes = createBrowserRouter(
    createRoutesFromElements(
      routes.map((route, idx) => {
        return <Route element={<HomeLayout />} key={idx} errorElement={<div>Not Found</div>} >
            <Route path={route.path} element={route.component} />
        </Route>
      })
    )
  )

  return ( 
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={pagesRoutes} />
   {/* <div className="App">
      
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
    */}
    </Suspense>
  );
}

export default App;
