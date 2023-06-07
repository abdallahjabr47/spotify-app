import SpotifyWebApi from 'spotify-web-api-js';

export const authorizeEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId  = "38d3a637679f44a897ef7b026c912fb2";

// to access the spotify clone project, because I cannot do anything on original app (Permissions)
const scopes = [
    "user-library-modify",
    "user-read-private",
    "user-read-email",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-follow-read",
    "user-follow-modify",
    "user-library-read",
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