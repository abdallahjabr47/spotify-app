import React, { useState , useEffect} from "react";
import { Outlet , useLocation } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar";
import './HomeLayout.css';
import AboutUs from "../../Components/AboutUs";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { getTokenFromUrl ,spotify } from '../../Logic/spotify';
import {useDataLayerValue} from '../../Logic/DataLayer';

function HomeLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME);

  //useEffect here used with variables to show and save the value on a state to render the next page.
  //to grap something from datalayer
  const [{ user , token }, dispatch] = useDataLayerValue();
  const location = useLocation();

  //useEffect here used to run the code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl( location.hash );
    location.hash = "";
    const tempToken = hash.access_token;

    if(tempToken) {
      dispatch({
        type: "SET_TOKEN",
        token: tempToken
      });

      //connect spotify to React
      //Put a key in API
      spotify.setAccessToken(tempToken);
      localStorage.setItem("token", tempToken);
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

      // spotify.getPlaylists("id")
      // .then(response => {
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     discover_weekly: response,
      //   });
      // });

    }
  }, []);

  return (
    
    <div className="homeStyle">

      <Sidebar activeTab={activeTab} />

      <div className="pageStyle">
        <div className="outletStyle">
          <ResponsiveAppBar spotify={spotify} />
          <Outlet context={setActiveTab} />
        </div>

        <AboutUs />
      </div>
      
      <Footer />
    </div>
  );
}

export default HomeLayout;