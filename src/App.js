import React, { useState } from 'react';
import Question from './Question';

function App(props) {
  const [selectedValue, setSelectedValue] = useState("");
  function onChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <div>
      <Question question={props.QuestionOne} onChange={onChange} />
      <Question question={props.QuestionTwo} onChange={onChange} />
      <Question question={props.QuestionThree} onChange={onChange} />
      <Question question={props.QuestionFour} onChange={onChange} />
      Selected value is {selectedValue}
    </div>
  );
}

export default App;
