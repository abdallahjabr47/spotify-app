import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

export default function YourLibrary() {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.YOUR_LIBRARY);
  }, []);

  return (
    <div className='body'>
        Your Library
    </div>
  )
}