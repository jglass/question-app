import React, { useState, useEffect } from 'react';
import Genre from './Genre';
import InitialData from './InitialData';
import './App.css';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const data = new URLSearchParams(new FormData(document.querySelector('#tokenRequest')));

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
  const [selectedValue, setSelectedValue]   = useState("");
  const [questionsValue, setQuestionsValue] = useState(questionsArray);
  const [answersValue, setAnswersValue]     = useState(false);
  const [stepValue, setStepValue]           = useState(0);

  let artistResult, imageResult;

  // function resetForm(e) {
  //   setSelectedValue("");
  //   setQuestionsValue(questionsArray);
  //   setAnswersValue(false);
  // }

  if(false) {
    return(
      <div id="App">
        <img src={answersValue.imageUrl} />
        You should try {answersValue.recommendation}
        // <button onClick={resetForm}>Start Over</button>
      </div>
    )
  } else {
    return (
      <div className="App" id="App">
        <ul className="questions">
          {questionsValue.map((questions) => {
            return(<Genre imageUrl={questions.imageUrl}
                      question={questions.questionText}
                      onChange={onChange}
                      key={questions.questionId}
                      testId={questions.questionId}
                      genre={questions.genre}
                      artists={questions.artists}
                      tracks={questions.tracks}
                      playerHTML={questions.playerHTML}/>)
          })}
        </ul>
          // <button onClick={resetForm}>Reset</button>
      </div>
    );
  }
}

export default App;
