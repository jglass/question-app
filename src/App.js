import React, { useState } from 'react';
import Question from './Question';
import InitialData from './InitialData';

function App(props) {
  let questionsArray = [InitialData.questionA,
                        InitialData.questionB,
                        InitialData.questionC,
                        InitialData.questionD];
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
        switch(selectedValue) {
          case "Question A":
            setQuestionsValue(["Question E", "Question F", "Question G", "Question H"]);
            break;
          case "Question B":
            setQuestionsValue(["Question I", "Question J", "Question K", "Question L"]);
            break;
            case "Question C":
              setQuestionsValue(["Question M", "Question N", "Question O", "Question P"]);
             break;
           case "Question D":
             setQuestionsValue(["Question Q", "Question R", "Question S", "Question T"]);
             break;
          default:
            setQuestionsValue(["Question A", "Question B", "Question C", "Question D"]);
            break;
        }
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
