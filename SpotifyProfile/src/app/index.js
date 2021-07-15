//Spotify Auth. URL -> points to auth endpoint
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=53e2679e63cc4cae9f6b24b8013fd15f&response_type=code&redirect_uri=http://localhost:4200&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

//On page load - sets the href to the auth_url
document.getElementById("auth_elm").setAttribute("href", AUTH_URL);


