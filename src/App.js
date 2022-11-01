import React, { useState, useEffect } from 'react';
import Question from './Question';
import InitialData from './InitialData';
import './App.css';
import { Buffer } from 'buffer';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

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

const data = new URLSearchParams(new FormData(document.querySelector('#tokenRequest')));

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

async function getData(url = '', opts = {}) {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'include', // include, *same-origin, omit
    headers: {
      'Authorization': 'Bearer ' + opts.access_token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function App(props) {
  const questionsArray = InitialData;
  const [selectedValue, setSelectedValue] = useState("");
  const [questionsValue, setQuestionsValue] = useState(questionsArray);
  const [answersValue, setAnswersValue] = useState(false);
  let artistResult, imageResult;

  function onChange(value) {
    const choice = questionsValue.find(q => q.questionText === value);

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
              }
            )
          });
          setAnswersValue(nextChoices);
          setQuestionsValue(nextChoices);
          setSelectedValue(value);
        });
      });

      // { questionId: "Question E",
      // questionText: "Bob Marley",
      // spotifyID: "2QsynagSdAqZj3U9HgDzjD",
      // imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/cc3b1efce691fc86644748dba8affa21/250x250-000000-80-0-0.jpg",
      // deezerId: 4803754,
      // nextChoices: {
      //   recommendation: "Peter Tosh",
      //   deezerId: 2326,
      //   imageUrl: "https://e-cdns-images.dzcdn.net/images/artist/31c0c1dfc699039efb7921adeed33721/250x250-000000-80-0-0.jpg",
      // }},




    // if(choice.nextChoices.recommendation) {
    //   setAnswersValue(choice.nextChoices);
    // } else {
    //   setQuestionsValue(choice.nextChoices);
    // }

  }

  function resetForm(e) {
    setSelectedValue("");
    setQuestionsValue(questionsArray);
    setAnswersValue(false);
  }

  if(false) {
    return(
      <div id="App">
        <img src={answersValue.imageUrl} />
        You should try {answersValue.recommendation}
        <button onClick={resetForm}>Start Over</button>
      </div>
    )
  } else {
    return (
      <div className="App" id="App">
        <ul className="questions">
          {questionsValue.map((questions) => {
            return(<Question imageUrl={questions.imageUrl}
                      question={questions.questionText}
                      onChange={onChange}
                      key={questions.questionId}
                      testId={questions.questionId}
                      genre={questions.genre}
                      artists={questions.artists}
                      tracks={questions.tracks} />)
          })}
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  }
}

export default App;
