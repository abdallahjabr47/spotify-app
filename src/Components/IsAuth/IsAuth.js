import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useDataLayerValue } from '../../Logic/DataLayer'
import { getTokenFromUrl } from '../../Logic/spotify';
//import { spotify } from '../../Logic/spotify';

export default function IsAuth({children}) {
    const [{token}, dispatch] = useDataLayerValue();
    const location = useLocation();

    useEffect(() => {

        if(!token){
            const hash = getTokenFromUrl( location.hash );
            location.hash = "";
            const tempToken = hash.access_token;

            if(tempToken) {
                dispatch({
                    type: "SET_TOKEN",
                    token: tempToken
                });

            //connect spotify to React
            //Put a key in API

            localStorage.setItem("token", tempToken);
            //spotify.setAccessToken(token);
            }
        }

    }, [])
  return (
   !token ? <Navigate to={'/login'} /> : children
  )
}