import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './Navbar.css';
import { useDataLayerValue } from '../../Logic/DataLayer';

function Navbar() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input 
          placeholder='Search for Artists, Songs, Playlists...'
          type='text'
        />
      </div>

      <div className='header_right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Navbar;