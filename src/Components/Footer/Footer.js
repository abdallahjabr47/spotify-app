import React from 'react'
import './Footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumImg' src='https://i.pinimg.com/564x/7a/1f/dd/7a1fddcbb9236d69cd4aae9a780fe04b.jpg' alt='Song Cover'/>
        
        <div className='footer_songInfo'>
          <h4>EL HALAL</h4>
          <p>Pablo</p>
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon className='footer_icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
        <SkipNextIcon className='footer_icon'/>
        <RepeatIcon className='footer_greenIcon'/>
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Footer