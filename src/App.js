import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import SecondaryQuestion from './SecondaryQuestion';
import InitialData from './InitialData';
import SecondaryData from './SecondaryData';
import './App.css';
import { getData, postData } from './lib/apiHelper';

function App(props) {
  const secondaryData = SecondaryData;
  const [genreSeeds, setGenreSeeds] = useState([]);
  const [artistSeeds, setArtistSeeds] = useState([]);
  const [trackSeeds, setTrackSeeds] = useState([]);
  const [recommendationSeeds, setRecommendationSeeds] = useState({});
  const [targetDanceability, setTargetDanceability] = useState();
  const [targetValence, setTargetValence] = useState();
  const [resultsValue, setResultsValue] = useState();
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

  useEffect(() =>  {
    if(!targetValence) return function() {};

    postData('https://accounts.spotify.com/api/token')
      .then((data) => {
        // console.log(data.access_token); // JSON data parsed by `data.json()` call
        getData(`https://api.spotify.com/v1/recommendations?limit=12&market=ES&seed_artists=${artistSeeds.join("%2C")}&seed_genres=${genreSeeds.join("%2C")}&seed_tracks=${trackSeeds.join("%2C")}&target_danceability=${targetDanceability}&target_valence=${targetValence}&min_popularity=50`, data).
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
          setResultsValue(nextChoices);
        });
      });
    }, [targetValence]
  )

  function setEntryPoint(value) {
    const initialChoice = InitialData.find(q => q.questionText === value);
    setGenreSeeds(initialChoice.genre);
    setArtistSeeds(initialChoice.artists);
    setTrackSeeds(initialChoice.tracks);
  }

  function onChange(value) {
    if(!targetDanceability) {
      setTargetDanceability(value);
      addDanceabilitySeeds(value);
      secondaryData.shift();
      return false;
    }

    addValenceSeeds(value);
    setTargetValence(value);
  }

  function resetForm(e) {
    // use useEffect (?) hook instead
  }

  if (!genreSeeds.length) {
    return (
      <div>
        <ul className="questions">
          {InitialData.map((questions) => {
            return(<Question imageUrl={questions.imageUrl}
                      question={questions.questionText}
                      onClick={setEntryPoint}
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
  } else if (resultsValue) {
    return (
      <div>
        <ul className="questions">
          {resultsValue.map((results) => {
            return(<Result testId={results.questionId}
                           trackId={results.trackId}/>)
          })}
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="questions">
          {secondaryData[0].questionText}
          {secondaryData[0].answers.map((answer) => {
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
