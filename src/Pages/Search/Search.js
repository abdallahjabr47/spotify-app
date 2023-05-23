import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';
import SearchCard from "../../Components/SearchCard/SearchCard";
//import Card from "../../Components/Card/Card";

export default function Search({ spotify }) {
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.SEARCH);
  }, []);

  return (
    <div className='body'>
        <SearchCard />
    </div>
  )
}