import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

const AboutUs = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_US)
  }, [])
  
  return (
    <div className="body">About Us</div>
  )
}

export default AboutUs