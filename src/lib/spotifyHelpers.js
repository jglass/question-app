import { Buffer } from 'buffer';

function spotifyHelpers(choice) {
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  async function postData(url = '', opts = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      body: data,
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData('https://accounts.spotify.com/api/token', authOptions)
    .then((data) => {
      // console.log(data.access_token); // JSON data parsed by `data.json()` call
      getData(`https://api.spotify.com/v1/recommendations?limit=12&market=ES&seed_artists=${choice.artists}&seed_genres=${choice.genre}&seed_tracks=${choice.tracks}&min_popularity=50`, data).
      then((data) => {
        let nextChoices = data.tracks.map((track, indx) => {
          return(
            {
              questionText:  track.artists[0].name,
              imageUrl: track.album.images[1].url,
              playerHTML: track.artists[0].id,
            }
          )
        });
        return nextChoices;
      });
    });
}

export default spotifyHelpers;
