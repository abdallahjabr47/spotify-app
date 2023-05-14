import React from 'react'
import './Login.css';
import { accessUrl } from '../../Logic/spotify';

function Login() {
  return (
    <div className='login'>
        {/* Spotify logo */}
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify"></img>

        {/* Login button */}
        <a href={accessUrl}>Login</a>
    </div>
  )
}

export default Login