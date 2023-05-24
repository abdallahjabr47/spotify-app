// allow app to work in the way it happen

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // it useful to make the devloper logged in (authenticated and authorized), and should be removed after finishing 
   // token: "BQApxj3thGWrjpJCrAjD3hbRoi54K8iYGDazJHC6Br3QJvdq_Ek8CGCDyQudr57xROQ0TZ7NUPRci0l7TylXxOrDr0JzE-hfh3sBA7zuXvI5A3aCEcR30rfDJZFBFC0Umc9-CPBZunnzzsX6bJihmJvgqhIHy6VsEW78B4bSKXZK0F4_NDH9EKtoFyQSD6ZAVU49FPwqy3rL2C4lQw",
   // token: null,
}

// state: how initialState looks like
// action: how I manipulate the data looks like (example: setUser, setPlaylist)
const reducer = (state, action) => {
    console.log(action); 

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        // case "SET_DISCOVER_WEEKLY":
        //     return {
        //         ...state,
        //         discover_weekly: action.discover_weekly,
        //     };

        default:
            return state;
    }
}

export default reducer;