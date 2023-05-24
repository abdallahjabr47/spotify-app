import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

const AboutUs = () => {
  const setActiveTab = useOutletContext()
  useEffect(() => {
    setActiveTab(routeNames.ABOUT_ME)
  }, [])
  
  return (
    <div className="body">About Me</div>
  )
}

export default AboutUs