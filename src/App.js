import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import SecondaryQuestion from './SecondaryQuestion';
import InitialData from './InitialData';
import SecondaryData from './SecondaryData';
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
  const [step, setStep] = useState(0);
  const [genreSeeds, setGenreSeeds] = useState([]);
  const [artistSeeds, setArtistSeeds] = useState([]);
  const [trackSeeds, setTrackSeeds] = useState([]);
  const [recommendationSeeds, setRecommendationSeeds] = useState({});
  const [targetDanceability, setTargetDanceability] = useState("0.5");
  const [targetValence, setTargetValence] = useState("0.5");
  const [selectedValue, setSelectedValue] = useState("");
  const [questionsValue, setQuestionsValue] = useState(questionsArray);
  let artistResult, imageResult;

  function addValenceSeeds(valence) {
    if(valence < 0.5) {
      // saddest song in the world goes here: "Sam Stone" by John Prine
      setTrackSeeds(trackSeeds => [...trackSeeds, "4BIej0swGWja46j5B7l4s1"]);
    } else if (valence > 0.5) {
      // happiest song in the world goes here: "Juice" by Lizzo
      setTrackSeeds(trackSeeds => [...trackSeeds, "0k664IuFwVP557Gnx7RhIl"]);
    }

    return false;
  }

  function addDanceabilitySeeds(value) {
    if(value < 0.5) {
      setGenreSeeds(genreSeeds => [...genreSeeds, "classical"]);
    } else if (value > 0.5) {
      setGenreSeeds(genreSeeds => [...genreSeeds, "electronic"]);
    }

    return false;
  }

  function onChange(value) {
    if(step === 0) {
      const initialChoice = questionsValue.find(q => q.questionText === value);
      setGenreSeeds(initialChoice.genre);
      setArtistSeeds(initialChoice.artists);
      setTrackSeeds(initialChoice.tracks);
      setStep(step + 1);
      return false;
    } else if(step === 1) {
      setTargetDanceability(value);
      addDanceabilitySeeds(value);
      setStep(step + 1);
      return false;
    } else if(step === 2) {
      addValenceSeeds(value);
      setTargetValence(value);
    }

    postData('https://accounts.spotify.com/api/token', authOptions)
      .then((data) => {
        // console.log(data.access_token); // JSON data parsed by `data.json()` call
        getData(`https://api.spotify.com/v1/recommendations?limit=12&market=ES&seed_artists=${artistSeeds.join("%2C")}&seed_genres=${genreSeeds.join("%2C")}&seed_tracks=${trackSeeds.join("%2C")}&target_danceability=${targetDanceability}&target_valence=${value}&min_popularity=50`, data).
        then((data) => {
          let nextChoices = data.tracks.map((track, indx) => {
            return(
              {
                questionText:  track.artists[0].name,
                imageUrl: track.album.images[1].url,
                trackId: track.id,
              }
            )
          });
          setQuestionsValue(nextChoices);
          setSelectedValue(value);
          setStep(step + 1);
        });
      });
  }

  function resetForm(e) {
    setSelectedValue("");
    setQuestionsValue(questionsArray);
  }

  if (step === 0) {
    return (
      <div>
        <ul className="questions">
          {questionsValue.map((questions) => {
            return(<Question imageUrl={questions.imageUrl}
                      question={questions.questionText}
                      onChange={onChange}
                      key={questions.questionId}
                      testId={questions.questionId}
                      genre={questions.genre}
                      artists={questions.artists}
                      tracks={questions.tracks}
                      trackId={questions.trackId}/>)
          })}
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  } else if (step === 3) {
    // <Result trackId={questions.trackId} />

    return (
      <div>
        <ul className="questions">
          {questionsValue.map((questions) => {
            return(<Result testId={questions.questionId}
                           trackId={questions.trackId}/>)
          })}
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="questions">
          {SecondaryData[step - 1].questionText}
          {SecondaryData[step - 1].answers.map((answer) => {
            return(<SecondaryQuestion
              answerText={answer.answerText}
              answerValue={answer.answerValue}
              onChange={onChange}
              key={answer.key}
              testId={answer.key}
            />);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
