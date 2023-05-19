import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

export default function YourLibrary({ spotify }) {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.YourLibrary);
  }, []);

  return (
    <div className='body'>
        Your Library
    </div>
  )
}