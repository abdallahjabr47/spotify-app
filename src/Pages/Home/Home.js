import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { routeNames } from "../../Utils/Utils";
import '../Body.css';
import './Home.css';
import { useDataLayerValue } from '../../Logic/DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SongRow from "../../Components/SongRow/SongRow";

export default function Home() {
  const setActiveTab = useOutletContext();
  const [{ discover_weekly }] = useDataLayerValue();

  useEffect(() => {
    setActiveTab(routeNames.HOME);

  }, []);

  return (
    <div className='body'>
      <div className="home_info">
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className="home_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="home_songs">
        <div className="home_icons">
          <PlayCircleFilledIcon className="home_shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}

      </div>
    </div>
  )
}