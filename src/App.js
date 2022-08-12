import React, { useState } from 'react';

function App(props) {
  const [selectedValue, setSelectedValue] = useState("");
  function onChange(e) {
    setSelectedValue(e.target.value);
  }

  return (
    <div>
      <div>
        <label>
          <input type="radio"
            value={props.QuestionOne}
            name="question"
            onClick={onChange}
          />
         {props.QuestionOne}
        </label>
      </div>
      <div>
        <label>
          <input type="radio"
            value={props.QuestionTwo}
            name="question"
            onClick={onChange}
          />
         {props.QuestionTwo}
        </label>
      </div>
      <div>
        <label>
          <input type="radio"
            value={props.QuestionThree}
            name="question"
            onClick={onChange}
          />
         {props.QuestionThree}
        </label>
      </div>
      <div>
        <label>
          <input type="radio"
            value={props.QuestionFour}
            name="question"
            onClick={onChange}
          />
         {props.QuestionFour}
        </label>
      </div>
      <div>
        Selected value is {selectedValue}
      </div>
    </div>
  );
}

export default App;
