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
  const questionsArray = [InitialData[0],
                        InitialData[1],
                        InitialData[2],
                        InitialData[3]];
  const [selectedValue, setSelectedValue] = useState("");
  const [questionsValue, setQuestionsValue] = useState(questionsArray);
  const [answersValue, setAnswersValue] = useState(false);

  function onChange(value) {
    const choice = questionsValue.find(q => q.questionText === value);

    if(choice.nextChoices.recommendation) {
      setAnswersValue(choice.nextChoices);
    } else {
      setQuestionsValue(choice.nextChoices);
    }

    setSelectedValue(value);
  }

  function resetForm(e) {
    setSelectedValue("");
    setQuestionsValue(questionsArray);
    setAnswersValue(false);
  }

  useEffect(() => {
    postData('https://accounts.spotify.com/api/token', authOptions)
      .then((data) => {
        console.log(data.access_token); // JSON data parsed by `data.json()` call
        getData('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy?market=ES', data).
        then((data) => {
          console.log(data);
        });
      });
  }, []);

  if(answersValue) {
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
          <Question imageUrl={questionsValue[0].imageUrl}
                    question={questionsValue[0].questionText}
                    onChange={onChange}
                    testId={questionsValue[0].questionId} />
          <Question imageUrl={questionsValue[1].imageUrl}
                    question={questionsValue[1].questionText}
                    onChange={onChange}
                    testId={questionsValue[1].questionId} />
          <Question imageUrl={questionsValue[2].imageUrl}
                    question={questionsValue[2].questionText}
                    onChange={onChange}
                    testId={questionsValue[2].questionId} />
          <Question imageUrl={questionsValue[3].imageUrl}
                    question={questionsValue[3].questionText}
                    onChange={onChange}
                    testId={questionsValue[3].questionId} />
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  }
}

export default App;
