import React from 'react'
import './Login.css';
import { accessUrl } from '../../Logic/spotify';
import { Navigate } from 'react-router-dom';
import { useDataLayerValue } from '../../Logic/DataLayer';

function Login() {
  const [{token}] = useDataLayerValue();

  return (
    token ? <Navigate to={'/'} />
    :
    <div className='login'>
        {/* Spotify logo */}
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify"></img>

        {/* Login button */}
        <a href={accessUrl} className='link'>Login</a>
    </div>
  )
}

export default Login