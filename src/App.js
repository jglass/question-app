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
    const choice = InitialData.find(q => q.questionText === selectedValue);
    setQuestionsValue(choice.nextChoices);
    var radio = document.querySelector('input[type=radio][name=question]:checked');
    if(radio) { radio.checked = false; }
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <Question question={questionsValue[0].questionText} onChange={onChange} />
        <Question question={questionsValue[1].questionText} onChange={onChange} />
        <Question question={questionsValue[2].questionText} onChange={onChange} />
        <Question question={questionsValue[3].questionText} onChange={onChange} />
        <button type="submit">Submit</button>
        <button onClick={resetForm}>Reset</button>
      </form>
        Selected value is {selectedValue}
    </div>
  );
}

export default App;
