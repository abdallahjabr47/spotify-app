import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';
import Card from "../../Components/Card/Card";
//import Card from "../../Components/Card/Card";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab 
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Search() {
  const setActiveTab = useOutletContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setActiveTab(routeNames.SEARCH);
  }, []);

  return (
    <div className='body'>
        <Box sx={{ width: '100%' }}>
          <Tabs aria-label="nav tabs example" value={value} onChange={handleChange} textColor="white"
            TabIndicatorProps={{
            sx: {backgroundColor: 'rgba(0, 0, 0, 1)'}
            }}
            >
            <LinkTab label="Playlists" href="/playlists" />
            <LinkTab label="Songs" href="/songs" />
            <LinkTab label="Artists" href="/artists" />
          </Tabs>
        </Box>
    </div>
  )
}