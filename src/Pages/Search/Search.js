import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import "../Body.css";
import "./Search.css";
import Box from "@mui/material/Box";
import { useDataLayerValue } from "../../Logic/DataLayer";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "../../Components/TabPanel/TabPanel";
import TrackCard from "../../Components/SearchCards/SearchTrackCard/TrackCard";
import ArtistCard from "../../Components/SearchCards/SearchArtistCard/ArtistCard";
import PlaylistCard from "../../Components/SearchCards/SearchPlaylistCard/PlaylistCard";
import AlbumCard from "../../Components/SearchCards/SearchAlbumCard/AlbumCard";
import SEO from "../../Components/SEO/SEO";

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

    <>
    <SEO
      titleTemplate="Search page"
      description="The website's search page that allows you to search in the app"
    />
    <div className="body">
      <Box sx={{ width: "100%" }}>
        <Tabs
          aria-label="nav tabs example"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "rgba(0, 0, 0, 1)"},
          }}
        >
          <Tab label="Tracks" value={0} aria-controls={`full-width-tabpanel-0`} />
          <Tab label="Artists" value={1}  aria-controls={`full-width-tabpanel-1`} />
          <Tab label="Albums" value={2}  aria-controls={`full-width-tabpanel-2`} />
          <Tab label="Playlists" value={3}  aria-controls={`full-width-tabpanel-3`} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="searchBody">
            <div className="searchTitle">
              <h2>Track search results: </h2>
            </div>

            <div className="searchData">
            {searchResults?.tracks?.items ? (
              searchResults.tracks.items.map((track) => (
                <TrackCard key={track.id} track={track} />
              ))
            ) : (
              <></>
            )}
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="searchBody">
            <div className="searchTitle">
              <h2>Artist search results: </h2>
            </div>

            <div className="searchData">
            {searchResults?.artists?.items ? (
              searchResults.artists.items.map((artist) => (
                <ArtistCard 
                  key={artist.id} 
                  artist={artist} 
                />
              ))
            ) : (
              <></>
            )}
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="searchBody">
            <div className="searchTitle">
              <h2>Album search results: </h2>
            </div>

            <div className="searchData">
            {searchResults?.albums?.items ? (
              searchResults.albums.items.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))
            ) : (
              <></>
            )}
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <div className="searchBody">
            <div className="searchTitle">
              <h2>Playlist search results:</h2>
            </div>

            <div className="searchData">
              {searchResults?.playlists?.items ? (
                searchResults.playlists.items.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </TabPanel>

      </Box>
    </div>
    </>
  );
}
