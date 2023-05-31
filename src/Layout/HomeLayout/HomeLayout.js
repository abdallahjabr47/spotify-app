import React, { useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AboutUs from "../../Components/AboutUs";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { useDataLayerValue } from "../../Logic/DataLayer";
<<<<<<< HEAD
=======
import { spotify } from "../../Logic/spotify";
import Footer from "../../Components/Footer/Footer";
import { reducerCases } from "../../Logic/Constants";
import './HomeLayout.css';
>>>>>>> master

function HomeLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME);
  const [, dispatch] = useDataLayerValue();

  useEffect(() => {
<<<<<<< HEAD
    let token = localStorage.getItem('token');
    if(token)
    dispatch({
      type: "SET_TOKEN",
      token: token
    });
=======

    let token = localStorage.getItem('token');
    if(token){
      dispatch({
        type: reducerCases.SET_TOKEN,
        token
      });
      spotify.setAccessToken(token);
    }
>>>>>>> master
  }, [])

  return (
    <div className="homeStyle">

      <Sidebar activeTab={activeTab} />

      <div className="pageStyle">
        <div className="outletStyle">
          <ResponsiveAppBar />
<<<<<<< HEAD
          <Outlet context={setActiveTab} />
=======
            <Outlet context={setActiveTab} />
>>>>>>> master
        </div>

        <AboutUs />
      </div>
      
      <Footer />
    </div>
  );
}

export default HomeLayout;