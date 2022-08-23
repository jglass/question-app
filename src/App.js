import React, { useState } from 'react';
import Question from './Question';
import InitialData from './InitialData';

function App(props) {
  let questionsArray = [InitialData[0],
                        InitialData[1],
                        InitialData[2],
                        InitialData[3]];
  const [selectedValue, setSelectedValue] = useState("");
  const [questionsValue, setQuestionsValue] = useState(questionsArray);
  const [answersValue, setAnswersValue] = useState(false);

  function onChange(e) {
    setSelectedValue(e.target.value);
  }

  function resetForm(e) {
    setSelectedValue("");
    setQuestionsValue(questionsArray);
    var radio = document.querySelector('input[type=radio][name=question]:checked');
    if(radio) { radio.checked = false; }
  }

  function formSubmit(event) {
    event.preventDefault();
    const choice = questionsValue.find(q => q.questionText === selectedValue);
    if(choice.nextChoices.recommendation) {
      setAnswersValue(choice.nextChoices);
    } else {
      setQuestionsValue(choice.nextChoices);
      var radio = document.querySelector('input[type=radio][name=question]:checked');
      if(radio) { radio.checked = false; }
    }
  }

  if(answersValue) {
    return(
      <div>
        <img src={answersValue.imageUrl} />
        You should try {answersValue.recommendation}
      </div>
    )
  } else {
    return (
      <div>
        <form onSubmit={formSubmit}>
          <Question imageUrl={questionsValue[0].imageUrl} question={questionsValue[0].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[1].imageUrl} question={questionsValue[1].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[2].imageUrl} question={questionsValue[2].questionText} onChange={onChange} />
          <Question imageUrl={questionsValue[3].imageUrl} question={questionsValue[3].questionText} onChange={onChange} />
          <button type="submit">Submit</button>
          <button onClick={resetForm}>Reset</button>
        </form>
      </div>
    );
  }
}

export default App;
