import React from 'react'
import './Footer.css';
import CurrentTrack from '../CurrentTrack/CurrentTrack';
import Player from '../Player/Player';
import Volume from '../Volume/Volume';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <CurrentTrack />
      </div>

      <div className='footer_center'>
        <Player />
      </div>

      <div className='footer_right'>
        <Volume />
      </div>

    </div>
  )
}

export default Footer;