import React, { useState } from 'react';
import Question from './Question';
import InitialData from './InitialData';
import './App.css';

function App(props) {
  let questionsArray = [InitialData[0],
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
  }

  if(answersValue) {
    return(
      <div>
        <img src={answersValue.imageUrl} />
        You should try {answersValue.recommendation}
        <button onClick={resetForm}>Start Over</button>
      </div>
    )
  } else {
    return (
      <div className="App">
        <ul>
          <Question imageUrl={questionsValue[0].imageUrl} question={questionsValue[0].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[1].imageUrl} question={questionsValue[1].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[2].imageUrl} question={questionsValue[2].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[3].imageUrl} question={questionsValue[3].questionText} onChange={onChange} />
        </ul>
          <button onClick={resetForm}>Reset</button>
      </div>
    );
  }
}

export default App;
