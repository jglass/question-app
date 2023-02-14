import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import SecondaryQuestion from './SecondaryQuestion';
import InitialData from './lib/InitialData';
import SecondaryData from './lib/SecondaryData';
import './scss/App.scss';
import { getData, postData } from './lib/apiHelper';

const App = () => {
  const secondaryData = SecondaryData;
  const [genreSeeds, setGenreSeeds] = useState([]);
  const [artistSeeds, setArtistSeeds] = useState([]);
  const [trackSeeds, setTrackSeeds] = useState([]);
  const [recommendationSeeds, setRecommendationSeeds] = useState({});
  const [targetDanceability, setTargetDanceability] = useState();
  const [targetValence, setTargetValence] = useState();
  const [targetPopularity, setTargetPopularity] = useState();
  const [targetLiveness, setTargetLiveness] = useState();
  const [resultsValue, setResultsValue] = useState();
  let artistResult, imageResult;

  const addValenceSeeds = (valence) => {
    if(valence < 0.5) {
      // saddest song in the world goes here: "Sam Stone" by John Prine
      setTrackSeeds(trackSeeds => [...trackSeeds, "4BIej0swGWja46j5B7l4s1"]);
    } else if (valence > 0.5) {
      // happiest song in the world goes here: "Juice" by Lizzo
      setTrackSeeds(trackSeeds => [...trackSeeds, "0k664IuFwVP557Gnx7RhIl"]);
    }

    return false;
  }

  const addDanceabilitySeeds = (value) => {
    if(value < 0.5) {
      setGenreSeeds(genreSeeds => [...genreSeeds, "classical"]);
    } else if (value > 0.5) {
      setGenreSeeds(genreSeeds => [...genreSeeds, "electronic"]);
    }

    return false;
  }

  const livenessSegment = (value) => {
    if(value < 0.5) {
      return `max_liveness=${value}`
    } else if (value > 0.5) {
      return `min_liveness=${value}`
    } else {
      return ``;
    }
  }

  useEffect(() =>  {
    if(!targetLiveness) return(() => {});

    postData('https://accounts.spotify.com/api/token')
      .then((data) => {
        // console.log(data.access_token); // JSON data parsed by `data.json()` call
        getData(`https://api.spotify.com/v1/recommendations?` +
                `limit=12&market=ES&` +
                `1seed_artists=${artistSeeds.join("%2C")}&` +
                `seed_genres=${genreSeeds.join("%2C")}&` +
                `seed_tracks=${trackSeeds.join("%2C")}&` +
                `target_danceability=${targetDanceability}&` +
                `target_valence=${targetValence}&` +
                `target_popularity=${targetPopularity}&` +
                livenessSegment(targetLiveness),
        data).then((data) => {
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
    }, [targetLiveness]
  )

  const setEntryPoint = (value) => {
    const initialChoice = InitialData.find(q => q.questionText === value);
    setGenreSeeds(initialChoice.genre);
    setArtistSeeds(initialChoice.artists);
    setTrackSeeds(initialChoice.tracks);
  }

  const onChangeHandler = (value) => {
    if(!targetDanceability) {
      setTargetDanceability(value);
      addDanceabilitySeeds(value);
      secondaryData.shift();
      return false;
    }

    if(!targetValence) {
      setTargetValence(value);
      addValenceSeeds(value);
      secondaryData.shift();
      return false;
    }

    if(!targetPopularity) {
      setTargetPopularity(value);
      secondaryData.shift();
      return false;
    }

    setTargetLiveness(value);
  }

  const resetForm = (e) => {
    // use useEffect (?) hook instead
  }

  if (!genreSeeds.length) {
    return (
      <div>
        <h1>What Music Should I Listen To?</h1>
        <h3>Select a Genre, Music Nerd</h3>
        <ul className="genre-questions">
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
        <ul className="results">
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
          <h1>{secondaryData[0].questionText}</h1>
          {secondaryData[0].answers.map((answer) => {
            return(<SecondaryQuestion
              answerText={answer.answerText}
              answerValue={answer.answerValue}
              onChange={onChangeHandler}
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
