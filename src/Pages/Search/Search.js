import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import "../Body.css";
import Card from "../../Components/Card/Card";
import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "../../Components/TabPanel/TabPanel";

export default function Search() {
  const setActiveTab = useOutletContext();
  const [value, setValue] = React.useState(0);
  const [{ searchResults }] = useDataLayerValue();

  console.log(searchResults)
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setActiveTab(routeNames.SEARCH);
  }, []);

  return (
    <div className="body">
      <Box sx={{ width: "100%" }}>
        <Tabs
          aria-label="nav tabs example"
          value={value}
          onChange={handleChange}
          textColor="white"
          TabIndicatorProps={{
            sx: { backgroundColor: "rgba(0, 0, 0, 1)" },
          }}
        >
          <Tab label="Songs" value={0} aria-controls={`full-width-tabpanel-0`} />
          <Tab label="Artists" value={1}  aria-controls={`full-width-tabpanel-1`} />
          <Tab label="Albums" value={2}  aria-controls={`full-width-tabpanel-2`} />
          <Tab label="Playlists" value={3}  aria-controls={`full-width-tabpanel-3`} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {/* {searchResults.tracks.items.map((result) => (
          <Card key={result.id} title={result.name} artist={result.artists[0].name} imageUrl={result.images[0].url} />
        ))} */}
          </TabPanel>
        <TabPanel value={value} index={1}>
        <span>Artists tab</span>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <span>Albums tab</span>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <span>Playlists tab</span>
        </TabPanel>
      </Box>

    </div>
  );
}
