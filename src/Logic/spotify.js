import SpotifyWebApi from 'spotify-web-api-js';

export const authorizeEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId  = "38d3a637679f44a897ef7b026c912fb2";

// to access the spotify clone project, because I cannor do anything on original app (Permissions)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

export const spotify = new SpotifyWebApi();


// to get the token (there is an empty object)
// example: #accessToken=secretkey&name=abdallah
export const getTokenFromUrl = ( hash ) => {
    return hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})
}

// token: is a string that represent the authentication
export const accessUrl = `${authorizeEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;