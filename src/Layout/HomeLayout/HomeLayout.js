import React, { useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar";
import './HomeLayout.css';
import AboutUs from "../../Components/AboutUs";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { useDataLayerValue } from "../../Logic/DataLayer";

function HomeLayout() {
  const [activeTab, setActiveTab] = useState(routeNames.HOME);
  const [, dispatch] = useDataLayerValue();

  useEffect(() => {
    let token = localStorage.getItem('token');
    if(token)
    dispatch({
      type: "SET_TOKEN",
      token: token
    });
  }, [])

  return (
    
    <div className="homeStyle">

      <Sidebar activeTab={activeTab} />

      <div className="pageStyle">
        <div className="outletStyle">
          <ResponsiveAppBar />
          <Outlet context={setActiveTab} />
        </div>

        <AboutUs />
      </div>
      
      <Footer />
    </div>
  );
}

export default HomeLayout;