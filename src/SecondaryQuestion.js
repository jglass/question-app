import React from 'react';
import './Question.css';


function SecondaryQuestion(props) {
  return(
    <a href="#"
      onClick={() => { props.onChange(props.answerValue) } }
      data-testid={props.testId}
      value={props.answerValue} >
      <li>
        {props.answerText}
      </li>
    </a>
  );
}

export default SecondaryQuestion;
