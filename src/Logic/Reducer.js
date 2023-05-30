// allow app to work in the way it happen
import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "1pCbdpOhHbyoMFRplb7BHz",
    followedArtists: [],
    searchResults: [],
    // it useful to make the devloper logged in (authenticated and authorized), and should be removed after finishing 
    // token: "BQApxj3thGWrjpJCrAjD3hbRoi54K8iYGDazJHC6Br3QJvdq_Ek8CGCDyQudr57xROQ0TZ7NUPRci0l7TylXxOrDr0JzE-hfh3sBA7zuXvI5A3aCEcR30rfDJZFBFC0Umc9-CPBZunnzzsX6bJihmJvgqhIHy6VsEW78B4bSKXZK0F4_NDH9EKtoFyQSD6ZAVU49FPwqy3rL2C4lQw",
}

// state: how initialState looks like
// action: how I manipulate the data looks like (example: setUser, setPlaylist)
const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case reducerCases.SET_PLAYING:
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };
        case reducerCases.SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            };
        case reducerCases.SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        case reducerCases.SET_FOLLOWED_ARTISTS:
            return {
                ...state,
                followedArtists: action.followedArtists,
            };
        case reducerCases.SET_SEARCH_RESULTS: // Add this case
            return {
              ...state,
              searchResults: action.searchResults,
            };
        default:
            return state;
    }
}

export default reducer;