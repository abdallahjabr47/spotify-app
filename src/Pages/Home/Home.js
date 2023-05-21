import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

export default function Home({ spotify }) {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.HOME);
  }, []);

  return (
    <div className='body'>
      
    </div>
  )
}