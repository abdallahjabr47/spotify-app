import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';

export default function Search({ spotify }) {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.SEARCH);
  }, []);

  return (
    <div className='body'>
        Search
    </div>
  )
}