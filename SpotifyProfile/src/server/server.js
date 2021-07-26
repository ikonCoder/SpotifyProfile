const express = require('express');
const SpotifyWebApi = require('spotify-web-api');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:4200/',
        clientId: '53e2679e63cc4cae9f6b24b8013fd15f',
        clientSecret:'a8a35d1d5f12460e87c0cf29d3c89851' //remove this before pushing to prod.
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({ 
           accessToken: data.body.access_token,
            refresh_token: data.body.refresh_token,
            expires_in: data.body.expires_in
        }) 
    })
    .catch(() => {
        res.sendStatus(400)
    })
})
