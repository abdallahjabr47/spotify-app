import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import Footer from '../../Components/Footer/Footer'
import Sidebar from "../../Components/Sidebar/Sidebar";
import './HomeLayout.css';
import AboutUs from "../../Components/AboutUs";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";

function HomeLayout({ spotify }) {
  const [activeTab, setActiveTab] = useState(routeNames.HOME);

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